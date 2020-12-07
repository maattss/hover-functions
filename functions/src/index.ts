import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { FunctionsErrorCode } from 'firebase-functions/lib/providers/https';

import { GraphQLClient } from 'graphql-request'

admin.initializeApp(functions.config().firebase);

exports.registerUser = functions.https.onCall(async (data) => {
  const { email, password } = data;

  if (email === null || password === null) {
    // We are throwing an error if either the email or the password is missing
    // We should also ideally validate these on the frontend so the request is never made if those fields are missing
    throw new functions.https.HttpsError("invalid-argument", "email and password are required fields");
  }

  try {
    // We create our user using the firebase admin sdk
    const userRecord = await admin.auth().createUser({ email, password });

    // We set our user role and the x-hasura-user-id claims
    // Remember, the x-hasura-user-id is what Hasura uses to check
    // if the user is allow to read/update a record
    const customClaims = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "user",
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-user-id": userRecord.uid,
      },
    };

    await admin.auth().setCustomUserClaims(userRecord.uid, customClaims);
    return userRecord.toJSON();

  } catch (e) {
    let errorCode = "unknown";
    let msg = "Something went wrong, please try again later";
    if (e.code === "auth/email-already-exists") {
      // If a user that already has an account tries to sign up
      // we want to show them a proper error and instruct them to log in
      errorCode = "already-exists";
      msg = e.message;
    }
    throw new functions.https.HttpsError(errorCode as FunctionsErrorCode, msg, JSON.stringify(e) );
  }
});


// Make sure you update the endpoint and the secret
// You can find both these values on the Graphql tab in Hasura
const client = new GraphQLClient( functions.config().hasura.graphql_api, {
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": functions.config().hasura.graphql_admin_secret,
  },
});

// This is automatically triggered by Firebase
// whenever a new user is created
exports.processSignUp = functions.auth.user().onCreate(async user => {
  const { uid: id, email } = user;
  
  const mutation = `
    mutation($id: String!, $email: String) {
      insert_Users(objects: [{
        id: $id,
        email: $email,
      }]) {
        affected_rows
      }
    }
  `;
  
  try {
    const data = await client.request(mutation, { id, email });

    return data;
  } catch (e) {
    throw new functions.https.HttpsError('invalid-argument', e.message);
  }
});

// This again is automatically triggered
// whenever an account is deleted on Firebase
exports.processDelete = functions.auth.user().onDelete(async (user) => {
  const mutation = `
    mutation($id: String!) {
      delete_Users(where: {id: {_eq: $id}}) {
        affected_rows
      }
    }
  `;
  const id = user.uid;

  client.request(mutation, {
    id: id,
  })
  .then((data) => data)
  .catch((e) => {
    throw new functions.https.HttpsError('invalid-argument', e.message)
    }
  );
});