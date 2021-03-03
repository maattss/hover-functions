import * as functions from 'firebase-functions';
import moment = require('moment');
import { client } from './client';
import { notifyUser } from './notifyUser';
import { ChallengeRules, Challenge_Participant } from './types/customTypes';
import {
  BasicActivityFragmentFragment,
  BasicParticipantFragmentFragment,
  ChallengeFragmentFragment,
  Challenge_Participant_State_Enum,
  Challenge_Type_Enum,
  GetChallengesParticipantsQuery,
  Notification_Type_Enum,
  ParticipantActivityFragmentFragment,
  ParticipantFragmentFragment,
} from './types/types';

exports.checkChallengeExpiry = functions.https.onRequest(async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const data = await client
    .ExpireChallenges({ date: today.toISOString() })
    .then((response) => {
      return response.update_challenge;
    })
    .catch((reason) => {
      throw new Error(`Failed to expire challenge in Hasura: ${reason}`);
    });
  const updateCount = data?.affected_rows;
  data?.returning.forEach(async (item) => {
    const notificationText = `Your ${item.challenge_type
      .toLowerCase()
      .replace('_', ' in ')} challenge have have expired. Unfortunately no one completed the challenge...`;
    await notifyUser(item.created_by, notificationText, Notification_Type_Enum.ChallengeExpired);
  });
  res.status(200).json({
    status: `${updateCount} have expired and are set to CLOSED. Notification sent to challenge owner.`,
  });
});

exports.validateChallenge = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const { challenge_id } = data.new ? data.new : data.old;
  const queryData = await client.GetChallengesParticipants({ challenge_id }).catch((reason) => {
    throw new Error(`Failed to get challenges and participants from Hasura: ${reason}`);
  });

  if (
    (op === 'UPDATE' || op === 'INSERT' || op === 'MANUAL') &&
    table.name === 'challenge_participant' &&
    table.schema === 'public'
  ) {
    const { score, time }: ChallengeRules = queryData.challenge_by_pk?.rules;
    const winner: BasicParticipantFragmentFragment | undefined = queryData.challenge_by_pk?.challenge_participants.find(
      (participant) => {
        if (participant.progress && participant.state === Challenge_Participant_State_Enum.Accepted) {
          if (score) return participant.progress >= score ?? false;
          if (time) return participant.progress >= time ?? false;
        }
        return false;
      },
    );
    if (winner) {
      await client
        .UpdateChallengeWinner({ challenge_id, winner_id: winner.user_id })
        .then((response) => {
          return response;
        })
        .catch((reason) => {
          throw new Error(`Failed to update challenge winner in Hasura: ${reason}`);
        });
      const notificationText: string = ` won the ${queryData.challenge_by_pk?.challenge_type
        .toLowerCase()
        .replace('_', ' in ')} challenge! Check it out in the feed.`;

      let notificationCount = 0;
      queryData.challenge_by_pk?.challenge_participants.forEach(async (participant) => {
        notificationCount++;
        if (participant.user_id === winner.user_id) {
          await notifyUser(winner.user_id, 'You' + notificationText, Notification_Type_Enum.ChallengeWon);
        } else {
          await notifyUser(
            participant.user_id,
            winner.user.name + notificationText,
            Notification_Type_Enum.ChallengeFinished,
          );
        }
      });
      res.status(200).json({
        status: `Challenge Valitated: challenge ${challenge_id} is won by user ${winner.user_id}, ${notificationCount} participants were notified.`,
      });
      return;
    }
  } else if (op === 'DELETE' && table.name === 'challenge_participant' && table.schema === 'public') {
    if (
      queryData.challenge_by_pk &&
      queryData.challenge_by_pk?.challenge_participants.filter(
        (x) => x.state !== Challenge_Participant_State_Enum.Declined,
      ).length <= 1
    ) {
      await closeChallenge(queryData, challenge_id);
      const notificationText = `Your ${queryData.challenge_by_pk?.challenge_type
        .toLowerCase()
        .replace(
          '_',
          ' in ',
        )} challenge have been closed due to insufficient number of participants. This may be because some participants have declined your challenge.`;
      await notifyUser(
        queryData.challenge_by_pk?.created_by,
        notificationText,
        Notification_Type_Enum.ChallengeClosed,
      ).then(async (resp) =>
        res.status(200).json({
          status: `Challenge Validated: challenge ${challenge_id} is CLOSED due to insufficient participants. 
          Notification sent to challenge owner. ${resp}`,
        }),
      );
      return;
    }
  }
  res.status(200).json({
    status: 'Challenge Valitated: no winner yet',
  });
});

exports.updateChallengeParticipantState = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const {
    state,
    challenge_id,
    user_id,
  }: { state: Challenge_Participant_State_Enum; challenge_id: number; user_id: string } = data.new;

  if ((op === 'UPDATE' || op === 'MANUAL') && table.name === 'challenge_participant' && table.schema === 'public') {
    const queryData = await client.GetChallengesParticipants({ challenge_id }).catch((reason) => {
      throw new Error(`Failed to get challenge participants from Hasura: ${reason}`);
    });

    if (
      (state === Challenge_Participant_State_Enum.Declined || state === Challenge_Participant_State_Enum.Accepted) &&
      queryData.challenge_by_pk?.challenge_participants
    ) {
      const notificationText: string = `${
        queryData.challenge_by_pk?.challenge_participants.find((p) => p.user_id === user_id)?.user.name
      } ${state.toLowerCase()} your ${queryData.challenge_by_pk.challenge_type
        .toLowerCase()
        .replace('_', ' in ')} challenge.`;
      await notifyUser(
        queryData.challenge_by_pk?.created_by,
        notificationText,
        Notification_Type_Enum.ParticipantUpdate,
      ).then(async (resp) =>
        res.status(200).json({
          status: `Success: ${resp}`,
        }),
      );
      return;
    }
  }
  res.status(200).json({
    status: 'Trigger updateChallengeParticipantState did nothing',
  });
});

exports.newChallengeValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;
  let updateCount = 0,
    notificationCount = 0;
  if ((op === 'INSERT' || op === 'MANUAL') && table.name === 'challenge' && table.schema === 'public') {
    const challenge_id = data.new.id ? data.new.id : data.old.id;
    const queryData = await client.GetChallengeParticipantsAndActivities({ challenge_id }).catch((reason) => {
      throw new Error(`Failed to get challenge participants and activities from Hasura: ${reason}`);
    });

    queryData.challenge_by_pk?.challenge_participants.forEach(async (item: ParticipantActivityFragmentFragment) => {
      const newProgress = calculateProgress(
        queryData.challenge_by_pk as ChallengeFragmentFragment,
        item.user.activities,
      );
      if (newProgress !== item.progress) {
        updateCount++;
        const updateData: Challenge_Participant = {
          user_id: item.user_id,
          challenge_id: challenge_id,
          progress: newProgress,
        };
        await updateProgress(updateData);
      }
    });
    if (op === 'INSERT') {
      const notificationText: string = `${queryData.challenge_by_pk?.created_by_user.name} invited you to participate in a challenge. Check it out!`;
      queryData.challenge_by_pk?.challenge_participants
        .filter((participant) => participant.user_id !== queryData.challenge_by_pk?.created_by)
        .forEach(async (participant) => {
          notificationCount++;
          await notifyUser(participant.user_id, notificationText, Notification_Type_Enum.ChallengeInvite).then((resp) =>
            console.log(resp),
          );
        });
    }
  }
  res.status(200).json({
    status: `Success: New Challenge Validated. Updated ${updateCount} rows, and notified ${notificationCount} participants`,
  });
});

exports.newActivityValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;
  let updateCount = 0;
  const { user_id } = data.new ? data.new : data.old;
  if (
    (op === 'INSERT' || op === 'UPDATE' || op === 'MANUAL') &&
    table.name === 'activities' &&
    table.schema === 'public'
  ) {
    const queryData = await client.GetActivitiesAndChallenges({ id: user_id }).catch((reason) => {
      throw new Error(`Failed to get activities and challenges from Hasura for user ${user_id}: ${reason}`);
    });

    const activities: BasicActivityFragmentFragment[] = queryData.activities;
    queryData.challenge_participant.forEach(async (item: ParticipantFragmentFragment) => {
      const newProgress = calculateProgress(item.challenge, activities);
      if (newProgress !== item.progress) {
        updateCount++;
        const updateData: Challenge_Participant = {
          user_id: user_id,
          challenge_id: item.challenge.id,
          progress: newProgress,
        };
        await updateProgress(updateData);
      }
    });
  }
  res.status(200).json({
    status: `Success: Updated ${updateCount} rows for user ${user_id}.`,
  });
});

async function closeChallenge(queryData: GetChallengesParticipantsQuery, challenge_id: number) {
  return await client
    .CloseChallenge({
      challenge_id,
    })
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      throw new Error(`Failed to close challenge in Hasura: ${reason}`);
    });
}

async function updateProgress({ user_id, challenge_id, progress }: Challenge_Participant) {
  return await client
    .UpdateChallengeParticipationProgress({ user_id, challenge_id, progress })
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      throw new Error(`Failed to update progress in Hasura: ${reason}`);
    });
}

function calculateProgress(challenge: ChallengeFragmentFragment, activities: BasicActivityFragmentFragment[]): number {
  const start_date: Date = new Date(challenge.start_date);
  start_date.setHours(0, 0, 0, 0);
  const end_date: Date = new Date(challenge.end_date);
  end_date.setHours(23, 59, 59, 999);
  const { score, category, time }: ChallengeRules = challenge.rules;
  let progress = 0;
  activities
    .filter((activity) => {
      const activityDate = new Date(activity.started_at);
      if (activityDate >= start_date && activityDate <= end_date) {
        if (
          challenge.challenge_type === Challenge_Type_Enum.ScoreCategory ||
          challenge.challenge_type === Challenge_Type_Enum.TimeCategory
        ) {
          if (category && category === activity.geofence.category) return true;
        } else return true;
      }
      return false;
    })
    .forEach((activity) => {
      if (score) progress += activity.score ?? 0;
      else if (time) progress += moment.duration(activity.duration).asHours() ?? 0;
    });

  return Math.floor(progress * 100) / 100;
}
