import * as functions from 'firebase-functions';
import { client } from './client';
import { Notification_Type_Enum } from './types/types';
import axios, { AxiosError } from 'axios';
import { NotificationData } from './types/customTypes';

exports.testNotification = functions.https.onRequest(async (req, res) => {
  const { user_id } = req.body;
  await notifyUser(user_id, 'Testing...', Notification_Type_Enum.TestNotification).then(async (data) =>
    res.status(200).json({
      status: `Success: ${data}`,
    }),
  );
  return;
});

export async function notifyUser(user_id: string, notificationText: string, notificationType: Notification_Type_Enum) {
  return await client
    .NotifyUser({
      user_id,
      text: notificationText,
      type: notificationType,
    })
    .then(async (response) => {
      if (response.insert_notifications_one?.user.push_token) {
        return await sendPushNotification(
          response.insert_notifications_one?.user.push_token,
          getNotificationTitle(notificationType),
          notificationText,
          true,
        )
          .then(() => {
            console.log(`Notification and push notification were sent to user ${user_id}`);
            return `Notification and push notification were sent to user ${user_id}`;
          })
          .catch((error) => {
            console.log(`Failed to send push notification to user ${user_id}.`);
            return `Failed to send push notification to user ${user_id}: ${error}`;
          });
      } else {
        console.log(`User ${user_id} does not have a push_token.`);
        return `Notification sent, however user ${user_id} does not have a push_token.`;
      }
    })
    .catch((reason) => {
      throw new Error(`Failed to insert notification into Hasura: ${reason}`);
    });
}

export const sendPushNotification = async (expoPushToken: string, title: string, body: string, sound: boolean) => {
  const message: NotificationData = {
    to: expoPushToken,
    sound: sound ? 'default' : null,
    title: title,
    body: body,
    openScreen: 'Notifications',
  };

  return await axios({
    method: 'post',
    url: 'https://exp.host/--/api/v2/push/send',
    data: JSON.stringify(message),
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        throw new Error(
          `The request was made and the server responded with a status code that falls out of the range of 2xx:  
          Status:${error.response.status} - ${error.response.data},
          Headers: ${error.response.headers}`,
        );
      } else if (error.request) {
        console.error(error.request);
        throw new Error(`The request was made but no response was received, ${error.request}`);
      } else {
        console.error('Error', error.message);
        throw new Error(`Something happened in setting up the request and triggered an Error: ${error.message}`);
      }
    });
};

export const getNotificationTitle = (type: Notification_Type_Enum) => {
  switch (type) {
    case Notification_Type_Enum.ChallengeClosed:
      return 'Oh no...';
    case Notification_Type_Enum.ChallengeExpired:
      return 'Oh no...';
    case Notification_Type_Enum.ChallengeFinished:
      return 'We have a winner ...';
    case Notification_Type_Enum.ChallengeInvite:
      return `You've been challenged!`;
    case Notification_Type_Enum.ChallengeWon:
      return 'Congratulation you won!';
    case Notification_Type_Enum.NewAchievement:
      return 'Congratulation!';
    case Notification_Type_Enum.ParticipantUpdate:
      return 'Someone responded to your challenge';
    case Notification_Type_Enum.NewReaction:
      return 'Someone reacted your activity';
    case Notification_Type_Enum.Message:
      return 'New message from developers';
    default:
      return 'Notification!';
  }
};
