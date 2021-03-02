import * as functions from 'firebase-functions';
import { client } from './client';
import { notifyUser } from './notifyUser';
import { NewAchievement } from './types/customTypes';
import {
  AchievementFragmentFragment,
  Feed_Insert_Input,
  Feed_Type_Enum,
  Notification_Type_Enum,
  UserScoreFragmentFragment,
} from './types/types';

exports.achievementValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const objects: NewAchievement[] = [];

  if (
    (op === 'INSERT' || op === 'UPDATE' || op === 'MANUAL') &&
    table.name === 'activities' &&
    table.schema === 'public'
  ) {
    const { user_id } = data.new ? data.new : data.old;

    const queryData = await client.GetUserAndUnachievedAchievements({ user_id });

    queryData.unachievedachievements.forEach(async (achievement) => {
      if (isValidAchievment(achievement as AchievementFragmentFragment, queryData.user as UserScoreFragmentFragment)) {
        objects.push({ achievement, user_id });
        await notifyUser(
          user_id,
          `You achieved a new achievement! Check it out in the feed or your profile page!`,
          Notification_Type_Enum.NewAchievement,
        ).then((resp) => console.log(resp));
      }
    });

    if (objects.length) {
      await insertAchievments(objects)
        .then((resp) =>
          res.status(200).json({
            status: 'Success',
            data: `Added ${objects.length} new achievments for user ${user_id}. User are notified.`,
          }),
        );
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
    queryData.user?.user_achievement.forEach(async ({ achievement }: { achievement: AchievementFragmentFragment }) => {
      if (!isValidAchievment(achievement, queryData.user as UserScoreFragmentFragment)) {
        objects.push({ achievement, user_id });
        await deleteAchievment(achievement.id, user_id).catch(async (resp) => console.error(resp));
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
    .catch((reason) => {
      throw new Error(`Failed to delete achievement in Hasura: ${reason}`);
    });
}

async function insertAchievments(objects: NewAchievement[]) {
  const feed_objects: Feed_Insert_Input[] = objects.map(({ achievement, user_id }) => {
    return {
      feed_type: Feed_Type_Enum.Achievement,
      user_achievement: {
        data: {
          achievement_id: achievement.id,
          user_id: user_id,
        },
      },
    } as Feed_Insert_Input;
  });
  await client
    .InsertAchievements({ feed_achievements: feed_objects })
    .then((response) => {
      return response;
    })
    .catch((reason) => {
      throw new Error(`Failed to insert achievement into Hasura: ${reason}`);
    });
}

function isValidAchievment(achievement: AchievementFragmentFragment, user: UserScoreFragmentFragment): boolean {
  switch (achievement.achievement_type) {
    case 'SCORE': {
      if (user.totalScore && user.totalScore >= achievement.rule.score) {
        return true;
      }
      break;
    }
    case 'FIRST_ACTIVITY': {
      if (user?.activity_count.aggregate?.count && user?.activity_count.aggregate?.count >= 1) {
        return true;
      }
      break;
    }
    case 'SCORE_IN_CATEGORY': {
      switch (achievement.rule.category) {
        case 'CULTURE': {
          const score = user?.culture_score.aggregate?.sum?.score;
          if (score && score >= achievement.rule.score) return true;
          break;
        }
        case 'EDUCATION': {
          const score = user?.education_score.aggregate?.sum?.score;
          if (score && score >= achievement.rule.score) return true;
          break;
        }
        case 'EXERCISE': {
          const score = user?.exercise_score.aggregate?.sum?.score;
          if (score && score >= achievement.rule.score) return true;
          break;
        }
        case 'SOCIAL': {
          const score = user?.social_score.aggregate?.sum?.score;
          if (score && score >= achievement.rule.score) return true;
          break;
        }
      }
      break;
    }
  }
  return false;
}
