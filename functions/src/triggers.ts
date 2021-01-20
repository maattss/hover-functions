import * as functions from 'firebase-functions';
import { client } from './client';
import { User_Achievement_Insert_Input } from './types';

/**
 * JSON payload
{
  "event": {
      "session_variables": <session-variables>,
      "op": "<op-name>",
      "data": {
          "old": <column-values>,
          "new": <column-values>
      }
  },
  "created_at": "<timestamp>",
  "id": "<uuid>",
  "trigger": {
      "name": "<name-of-trigger>"
  },
  "table":  {
      "schema": "<schema-name>",
      "name": "<table-name>"
  }
}
 */

type User_Achievement_InputType = {
  achievement_id: number;
  user_id: string;
};

exports.achievementValidation = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;
  console.log('[AchievementTrigger]', req.body);
  if (op === 'INSERT' && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.new;

    // query
    const queryData = await client.GetUserAndAchievements({ user_id });
    const userAchievmentsArray: number[] = queryData.user_achievement.map((item) => item.achievement_id);

    //const achievmentsArray: User_Achievement_InputType[] =

    const unobtainedAchievments: User_Achievement_InputType[] = queryData.achievement
      .map<User_Achievement_InputType>(({ id }) => {
        return { achievement_id: id, user_id };
      })
      .filter(({ achievement_id }) => !userAchievmentsArray.includes(achievement_id));

    // TODO validation logic

    const objects: User_Achievement_Insert_Input[] = unobtainedAchievments;
    console.log('[New Achievments]:', objects);
    await client
      .AddAchievement({ objects })
      .then((response) => {
        console.log('[mutationResponse]:', response);
        return response;
      })
      .catch((e) => {
        throw new functions.https.HttpsError('invalid-argument', e.message);
      });
    return;
  }
});
