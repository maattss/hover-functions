import * as functions from 'firebase-functions';
import moment = require('moment');
import { client } from './client';
import { BasicActivityFragmentFragment } from './types/types';

exports.validateStreak = functions.https.onRequest(async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const userStreaks = await client.GetStreaks();

  userStreaks.users.forEach(async (user) => {
    const new_streak = validateStreak(user.id, user.activities, today);
    if (user.streak !== new_streak) {
      await client.UpdateStreak({ id: user.id, streak: new_streak });
    }
  });

  res.status(200).json({
    status: `Success: updated streaks.`,
  });
});

function validateStreak(user_id: string, activities: BasicActivityFragmentFragment[], today: Date): number {
  let streak = 0;
  let last_streak_day = today;
  activities.forEach((activity) => {
      console.log(moment(last_streak_day).diff(moment(activity.started_at), 'days'));
    if (moment(last_streak_day).diff(moment(activity.started_at), 'days') === 0) {
      streak++;
      last_streak_day = new Date(activity.started_at);
      last_streak_day.setHours(0, 0, 0, 0);
    }
  });

  return streak;
}
