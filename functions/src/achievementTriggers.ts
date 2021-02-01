import * as functions from 'firebase-functions';
import { client } from './client';
import {
  Achievement,
  GetUserAndExistingAchievementsQuery,
  GetUserAndUnachievedAchievementsQuery,
  User_Achievement_Insert_Input,
} from './types';

exports.achievementValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const objects: User_Achievement_Insert_Input[] = [];

  if ((op === 'INSERT' || op === 'UPDATE') && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.new ? data.new : data.old;

    const queryData = await client.GetUserAndUnachievedAchievements({ user_id });

    queryData.unachievedachievements.forEach((item) => {
      if (isValidAchievment(item as Achievement, queryData)) {
        objects.push({ achievement_id: item.id, user_id });
      }
    });

    if (objects.length) {
      await addAchievments(objects);

      res.status(200).json({
        status: 'Success',
        data: `Added ${objects.length} new achievments for user ${user_id}.`,
      });
    } else {
      res.status(200).json({
        status: 'Success',
        data: 'No new achievements',
      });
    }
    return;
  } else if (op === 'DELETE' && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.old;
    const queryData = await client.GetUserAndExistingAchievements({ user_id });
    queryData.user?.user_achievement.forEach(async ({ achievement }) => {
      if (!isValidAchievment(achievement as Achievement, queryData)) {
        objects.push({ achievement_id: achievement.id, user_id });
        await deleteAchievment(achievement.id, user_id);
      }
    });

    if (objects.length) {
      res.status(200).json({
        status: 'Success',
        data: `Deleted ${objects.length} achievments from user ${user_id}.`,
      });
    } else {
      res.status(200).json({
        status: 'Success',
        data: 'No achievements to delete',
      });
    }
    return;
  }
  res.status(501).json({
    status: 'Not implemented',
  });
});

async function deleteAchievment(achievement_id: number, user_id: string) {
  await client
    .DeleteAchievement({ achievement_id, user_id })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
}

async function addAchievments(objects: User_Achievement_Insert_Input[]) {
  await client
    .AddAchievement({ objects })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
}

function isValidAchievment(
  item: Achievement,
  queryData: GetUserAndUnachievedAchievementsQuery | GetUserAndExistingAchievementsQuery,
): boolean {
  switch (item.achievement_type) {
    case 'SCORE': {
      if (queryData.user?.totalScore >= item.rule.score) {
        return true;
      }
      break;
    }
    case 'FIRST_ACTIVITY': {
      if (queryData.user?.activity_count.aggregate?.count && queryData.user?.activity_count.aggregate?.count >= 1 ) {
        return true;
      }
      break;
    }
    case 'SCORE_IN_CATEGORY': {
      switch (item.rule.category){
        case 'CULTURE': {
          const score = queryData.user?.culture_score.aggregate?.sum?.score;
          if( score && score >= item.rule.score) return true;
          break;
        }
        case 'EDUCATION': {
          const score = queryData.user?.education_score.aggregate?.sum?.score;
          if( score && score >= item.rule.score) return true;
          break;
        }
        case 'HEALTH': {
          const score = queryData.user?.health_score.aggregate?.sum?.score;
          if( score && score >= item.rule.score) return true;
          break;
        }
        case 'SOCIAL': {
          const score = queryData.user?.social_score.aggregate?.sum?.score;
          if( score && score >= item.rule.score) return true;
          break;
        }
      } 
      break;
    }
  }
  return false;
}
