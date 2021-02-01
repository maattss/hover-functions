import * as functions from 'firebase-functions';

exports.challengeValidation = functions.https.onRequest(async (req, res) => {

  res.status(200).json({
    status: 'Success'
  });
});
