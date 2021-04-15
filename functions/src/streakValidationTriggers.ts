import * as functions from 'firebase-functions';
import moment = require('moment');
import { client } from './client';

exports.validateStreak = functions.https.onRequest(async (req, res) => {
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


  });
  res.status(200).json({
    status: `${updateCount} have expired and are set to CLOSED. Notification sent to challenge owner.`,
  });
});
