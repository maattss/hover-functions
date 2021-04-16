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
  let last_streak_day = moment(today);

  activities.find((activity) => {
    if (last_streak_day.isSame(moment(activity.started_at).add(1, 'days'), 'day')) {
      if (!moment(activity.started_at).isSame(last_streak_day, 'days')) {
        streak++;
        last_streak_day = moment(activity.started_at);
      }
    } else if (moment(activity.started_at).isSame(moment(today), 'days')) {
      streak++;
      last_streak_day = moment(activity.started_at);
    } else {
      return;
    }
  });
  return streak;
}
