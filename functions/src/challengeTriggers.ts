import * as functions from 'firebase-functions';


exports.sendChallengeNotification = functions.https.onRequest(async (req, res) => {

  res.status(200).json({
    status: 'Challenge Notification Sent'
  });
});

exports.challengeValidation = functions.https.onRequest(async (req, res) => {

  res.status(200).json({
    status: 'Success'
  });
});
