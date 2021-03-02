import * as functions from 'firebase-functions';
import { client } from './client';
import { Notification_Type_Enum } from './types/types';

export async function notifyUser(
  user_id: string,
  notificationText: string,
  notificationType: Notification_Type_Enum,
  expoPushToken?: string,
) {
  await client
    .NotifyUser({
      user_id,
      text: notificationText,
      type: notificationType,
    })
    .then((response) => {
      if (expoPushToken) {
        console.log('Sending push notification...')
        sendPushNotification(expoPushToken, getNotificationTitle(notificationType), notificationText, true);
      }
      console.log('Response:', response);
      return response;
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
}

export const sendPushNotification = async (expoPushToken: string, title: string, body: string, sound: boolean) => {
  // Message fields: https://docs.expo.io/push-notifications/sending-notifications/#message-request-format
  const message = {
    to: expoPushToken,
    sound: sound ? 'default' : null,
    title: title,
    body: body,
    openScreen: 'Notifications'
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
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
    default:
      return 'Notification!';
  }
};
