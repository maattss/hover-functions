import * as functions from 'firebase-functions';
import { client } from './client';
import { ChallengeRules, Challenge_Participant } from './customTypes';
import {
  BasicActivityFragmentFragment,
  BasicParticipantFragmentFragment,
  ChallengeFragmentFragment,
  Challenge_Participant_State_Enum,
  Challenge_Set_Input,
  Challenge_State_Enum,
  Challenge_Type_Enum,
  ParticipantActivityFragmentFragment,
  ParticipantFragmentFragment,
} from './types';

exports.sendChallengeNotification = functions.https.onRequest(async (req, res) => {
  res.status(200).json({
    status: 'Challenge Notification Sent',
  });
});

exports.endCheckChallengeEndDate = functions.https.onRequest(async (req, res) => {
  // check all challenges, whose state is ACTIVE, if end_date < today => set CLOSED
  const challenge_id = 51;
  console.log(challenge_id);
  res.status(200).json({
    status: 'Challenge Notification Sent',
  });
});

exports.validateChallenge = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  if ((op === 'UPDATE' || op === 'INSERT') && table.name === 'challenge_participant' && table.schema === 'public') {
    const { challenge_id } = data.new ? data.new : data.old;

    const queryData = await client.GetChallengesParticipants({ challenge_id });
    const { score, time }: ChallengeRules = queryData.challenge_by_pk?.rules;
    const winner: BasicParticipantFragmentFragment | undefined = queryData.challenge_by_pk?.challenge_participants.find(
      (participant) => {
        if (participant.progress && participant.state == Challenge_Participant_State_Enum.Accepted) {
          if (score) return participant.progress >= score ?? false;
          if (time) return participant.progress >= time ?? false;
        }
        return false;
      },
    );
    if (winner) {
      const update_values: Challenge_Set_Input = { state: Challenge_State_Enum.Finished, winner_id: winner.user_id };
      await client
        .UpdateChallenge({ challenge_id, update_values })
        .then((response) => {
          return response;
        })
        .catch((e) => {
          throw new functions.https.HttpsError('invalid-argument', e.message);
        });
      res.status(200).json({
        status: 'Challenge Valitated: challenge ' + challenge_id + ' is won by user ' + winner.user_id,
      });
    }
  }
  res.status(200).json({
    status: 'Challenge Valitated: no winner yet',
  });
});

exports.newChallengeValidation = functions.https.onRequest(async (req, res) => {
  // should validate all participants in that challengs progress
  const {
    event: { op, data },
    table,
  } = req.body;
  if (op === 'INSERT' && table.name === 'challenge' && table.schema === 'public') {
    const { challenge_id } = data.new;
    console.log(req.body, challenge_id);
    const queryData = await client.GetChallengeParticipantsAndActivities({ challenge_id });

    queryData.challenge_by_pk?.challenge_participants.forEach(async (item: ParticipantActivityFragmentFragment) => {
      const newProgress = calculateProgress(queryData.challenge_by_pk as ChallengeFragmentFragment, item.user.activities);
      if (newProgress != item.progress) {
        const updateData: Challenge_Participant = {
          user_id: item.user_id,
          challenge_id: challenge_id,
          progress: newProgress,
        };
        await updateProgress(updateData);
      }
    });
  }
  res.status(200).json({
    status: 'New Challenge Valitated',
  });
});

exports.newActivityValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  if ((op === 'INSERT' || op === 'UPDATE') && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.new ? data.new : data.old;

    const queryData = await client.GetActivitiesAndChallenges({ id: user_id });

    const activities: BasicActivityFragmentFragment[] = queryData.activities;
    queryData.challenge_participant.forEach(async (item: ParticipantFragmentFragment) => {
      const newProgress = calculateProgress(item.challenge, activities);
      if (newProgress != item.progress) {
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
    status: 'Success',
  });
});

async function updateProgress({ user_id, challenge_id, progress }: Challenge_Participant) {
  await client
    .UpdateChallengeParticipationProgress({ user_id, challenge_id, progress })
    .then((response) => {
      console.log('Response:', response);
      return response;
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
}

function calculateProgress(challenge: ChallengeFragmentFragment, activities: BasicActivityFragmentFragment[]): number {
  const start_date: Date = new Date(challenge.start_date);
  start_date.setHours(0, 0, 0, 0);
  const end_date: Date = new Date(challenge.end_date);
  end_date.setHours(23, 59, 59, 999);
  const { category }: ChallengeRules = challenge.rules;
  let progress = 0;
  activities
    .filter((activity) => {
      const activityDate = new Date(activity.started_at);
      if (activityDate >= start_date && activityDate <= end_date) {
        if (
          challenge.challenge_type == Challenge_Type_Enum.ScoreCategory ||
          challenge.challenge_type == Challenge_Type_Enum.TimeCategory
        ) {
          if (category && category == activity.geofence.category) return true;
        } else return true;
      }
      return false;
    })
    .forEach((activity) => (progress += activity.score ?? 0));
  return progress;
}
