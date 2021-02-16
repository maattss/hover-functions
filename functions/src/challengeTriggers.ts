import * as functions from 'firebase-functions';
import { client } from './client';
import {
  GetActivitiesAndChallengesQuery,
} from './types';

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

    queryData.challenge_participant.forEach(async (item) => {
      if (validateChallengeParticipation({} as Challenge_Participant, queryData)) {
        const updateData: Challenge_Participant = {
          user_id: user_id,
          challenge_id: item.challenge.id,
          progress: 30,
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
function validateChallengeParticipation(
  item: Challenge_Participant,
  queryData: GetActivitiesAndChallengesQuery,
): boolean {
  return true;
}
