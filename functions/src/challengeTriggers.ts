import * as functions from 'firebase-functions';
import { client } from './client';
import { BasicActivityFragmentFragment, Challenge_Type_Enum, ParticipantFragmentFragment } from './types';

exports.sendChallengeNotification = functions.https.onRequest(async (req, res) => {
  res.status(200).json({
    status: 'Challenge Notification Sent',
  });
});

exports.endCheckChallengeEndDate = functions.https.onRequest(async (req, res) => {
  const challenge_id = 51;
  // closeChallenge(challenge_id);
  res.status(200).json({
    status: 'Challenge Notification Sent',
  });
});

exports.validateChallenge = functions.https.onRequest(async (req, res) => {
  // Should be triggered when an entry in challenge_participant is updated and check if anyone have progress > rules.score or time 
  const {
    event: { op, data },
    table,
  } = req.body;

  if ((op === 'INSERT' || op === 'UPDATE') && table.name === 'challenge_participant' && table.schema === 'public') {
    const { challenge_id } = data.new ? data.new : data.old;

    const queryData = await client.GetActivitiesAndChallenges({ id: challenge_id });

  }

  res.status(200).json({
    status: 'Challenge Valitated',
  });
});

exports.newChallengeValidation = functions.https.onRequest(async (req, res) => {
  // should validate all participants in that challengs progress
  const {
    event: { op, data },
    table,
  } = req.body;
  const { challenge_id } = data.new;
  if (op === 'INSERT' && table.name === 'challenge' && table.schema === 'public') {
    console.log(req.body, challenge_id);
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
      const newProgress = calculateProgress(item, activities);
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
type Challenge_Participant = {
  user_id: string;
  challenge_id: number;
  progress: number;
};

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

export enum GeoFenceCategory {
  EDUCATION = 'EDUCATION',
  EXERCISE = 'EXERCISE',
  SOCIAL = 'SOCIAL',
  CULTURE = 'CULTURE',
}
export type ChallengeRules = {
  category?: GeoFenceCategory;
  score?: number;
  time?: number;
};

function calculateProgress(item: ParticipantFragmentFragment, activities: BasicActivityFragmentFragment[]): number {
  console.log('NEW ACTIVITY');
  const start_date: Date = new Date(item.challenge.start_date);
  start_date.setHours(0, 0, 0, 0);
  const end_date: Date = new Date(item.challenge.end_date);
  end_date.setHours(23, 59, 59, 999);
  const { score, category, time }: ChallengeRules = item.challenge.rules;

  const valid_activities = activities.filter((activity) => {
    const activityDate = new Date(activity.started_at);
    if (activityDate >= start_date && activityDate <= end_date) {
      if (
        item.challenge.challenge_type == Challenge_Type_Enum.ScoreCategory ||
        item.challenge.challenge_type == Challenge_Type_Enum.TimeCategory
      ) {
        if (category && category == activity.geofence.category) return true;
      } else return true;
    }
    return false;
  });

  if (score) {
    console.log(' score:', score);
  }
  if (category) console.log(' category:', category);
  if (time) console.log(' time:', time);
  let progress = 0;
  valid_activities.forEach((activity) => (progress += activity.score ?? 0));
  console.log(' progress:', progress);
  console.log(' valid activities: ', valid_activities);
  return progress;
}
