import * as functions from 'firebase-functions';
import { client } from './client';
import { BasicActivityFragmentFragment, ParticipantFragmentFragment } from './types';

exports.sendChallengeNotification = functions.https.onRequest(async (req, res) => {
  res.status(200).json({
    status: 'Challenge Notification Sent',
  });
});

exports.challengeValidation = functions.https.onRequest(async (req, res) => {
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
      if (newProgress !== item.progress) {
        const updateData: Challenge_Participant = {
          user_id: user_id,
          challenge_id: item.challenge.id,
          progress: newProgress,
        };
        //TODO if new progress is not equal to old progress, update progress
        if (true) {
          await updateProgress(updateData);
        }
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

// TODO calculate progress
function calculateProgress(item: ParticipantFragmentFragment, activities: BasicActivityFragmentFragment[]): number {
  return 5;
}
