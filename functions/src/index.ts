import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { FunctionsErrorCode } from 'firebase-functions/lib/providers/https';
import { client } from './client';

admin.initializeApp(functions.config().firebase);

exports.registerUser = functions.https.onCall(async (data) => {
  const { email, password, name, picture } = data;

  if (email === null || password === null) {
    // We are throwing an error if either the email or the password is missing
    // We should also ideally validate these on the frontend so the request is never made if those fields are missing
    throw new functions.https.HttpsError('invalid-argument', 'Email and password are required fields');
  }

  try {
    // We create our user using the firebase admin sdk
    const userRecord = await admin.auth().createUser({ email, password });

    // We set our user role and the x-hasura-user-id claims
    // Remember, the x-hasura-user-id is what Hasura uses to check
    // if the user is allow to read/update a record
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user'],
        'x-hasura-user-id': userRecord.uid,
      },
    };

    await admin.auth().setCustomUserClaims(userRecord.uid, customClaims);
    const id = userRecord.uid;
    await client
      .CreateUser({ id, email, name, picture })
      .then((res) => res)
      .catch((e) => {
        throw new functions.https.HttpsError('invalid-argument', e.message);
      });
    return userRecord.toJSON();
  } catch (e) {
    let errorCode = 'unknown';
    let msg = 'Something went wrong, please try again later';
    if (e.code === 'auth/email-already-exists') {
      // If a user that already has an account tries to sign up
      // we want to show them a proper error and instruct them to log in
      errorCode = 'already-exists';
      msg = e.message;
    }
    throw new functions.https.HttpsError(errorCode as FunctionsErrorCode, msg, JSON.stringify(e));
  }
});

// This again is automatically triggered
// whenever an account is deleted on Firebase
exports.processDelete = functions.auth.user().onDelete(async (user) => {
  client
    .DeleteUser({
      id: user.uid,
    })
    .then((data) => data)
    .catch((e) => {
      throw new functions.https.HttpsError('invalid-argument', e.message);
    });
});

exports.achievementTriggers = require('./achievementTriggers');
exports.challengeTriggers = require('./challengeTriggers');
exports.notificationTestTrigger = require('./notifyUser');
