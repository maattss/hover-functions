import * as functions from 'firebase-functions';
import { client } from './client';
import { User_Achievement_Insert_Input } from './types';

exports.achievementValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const objects: User_Achievement_Insert_Input[] = [];

  if ((op === 'INSERT' || op === 'UPDATE') && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.new ? data.new : data.old;

    // query
    const queryData = await client.GetUserAndAchievements({ user_id });

    queryData.unachievedachievements.forEach((item) => {
      const rule = item.rule;
      
      switch (item.achievement_type) {
        case 'SCORE': {
          if (queryData.user?.totalScore >= rule.score) {
            objects.push({ achievement_id: item.id, user_id });
          }
          break;
        }
        case 'CATEGORY': {
          //statements;
          break;
        }
        case 'SCOREINCATEGORY': {
          //statements;
          break;
        }
      }
    });
    if (objects.length) {
      await client
        .AddAchievement({ objects })
        .then((response) => {
          return response;
        })
        .catch((e) => {
          throw new functions.https.HttpsError('invalid-argument', e.message);
        });

      res.status(200).json({
        status: 'Success',
        data: `New ${objects.length} achievments`,
      });
    } else {
      res.status(200).json({
        status: 'Success',
        data: 'No new achievements',
      });
    }
    return;
  }
  res.status(200).json({
    status: 'Success',
    data: 'No new achievements',
  });
});
