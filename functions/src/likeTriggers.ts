import * as functions from 'firebase-functions';
import { client } from './client';
import { notifyUser } from './notifyUser';
import { Feed_Type_Enum, Notification_Type_Enum } from './types/types';

exports.notifyOnNewLike = functions.https.onRequest(async (req, res) => {
  const {
    event: { op, data },
    table,
  } = req.body;

  const { feed_id, user_id }: { feed_id: number; user_id: string } = data.new;
  if ((op === 'INSERT' || op === 'MANUAL') && table.name === 'likes' && table.schema === 'public') {
    const queryData = await client.GetLikeDetails({ feed_id, user_id }).catch((reason) => {
      throw new Error(`Failed to get like details from Hasura: ${reason}`);
    });

    let notificationText = `${queryData.liked_by?.name} reacted to your `;

    switch (queryData.feed?.feed_type) {
      case Feed_Type_Enum.Achievement:
        notificationText += 'achievement';
        break;
      case Feed_Type_Enum.Challenge:
        notificationText += 'challenge victory';
        break;
      case Feed_Type_Enum.Activity:
        notificationText += 'activity';
        break;
      default:
        'post';
    }

    if (queryData.feed?.user?.id && queryData.feed?.user?.id !== user_id) {
      await notifyUser(queryData.feed?.user?.id, notificationText, Notification_Type_Enum.NewReaction);
      res.status(200).json({
        status: `Success: Notification sent to post owner.`,
      });
      return;
    } else {
      res.status(200).json({
        status: `Success: Notification was not sent because post owner and liked_by is the same person.`,
      });
      return;
    }
  }
  res.status(200).json({
    status: `Success: No notification were sent.`,
  });
});
