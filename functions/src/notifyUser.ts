import * as functions from 'firebase-functions';
import { client } from './client';
import { Notification_Type_Enum } from './types/types';

export async function notifyUser(user_id: string, notificationText: string, notificationType: Notification_Type_Enum) {
  await client
    .NotifyUser({
      user_id,
      text: notificationText,
      type: notificationType,
    })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
}
