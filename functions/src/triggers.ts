import * as functions from 'firebase-functions';

import { client } from './index';

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
exports.achievementValidation =  functions.https.onRequest(async (req, res) => {

  const { event: {op, data}, table } = req.body;
  console.log('[AchievementTrigger]', req.body);
  if (op === 'INSERT' && table.name === 'activities' && table.schema === 'public') {
    const { user_id } = data.new;

    // query 
    const userQuery =  `
    query($user_id: String!) {
      users(where: {id: {_eq: $user_id}}) {
        id
        user_achievments {
          achievment_id
        }
        activities {
          activity_id
          geofence {
            id
            category
          }
        }
      }
    }`;

    const user = await client.request(userQuery, { user_id });

    // validation logic
    console.log('[user]:', user);
    // iterate on user acheievments

    const  achievment_id = 3;
    
    // do mutation
    const userAchievmentMutation = `
      mutation($achievment_id: Int!, $user_id: String!) {
        insert_user_achievment(objects: [{
          achievment_id: $achievment_id, 
          user_id: $user_id
        }]) {
          affected_rows
        }
      }
    `;
    
    await client.request(userAchievmentMutation, { achievment_id, user_id })     
    .then((response) => {
       console.log('[mutationResponse]:', response);
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message)
      }
    );
  }
});
