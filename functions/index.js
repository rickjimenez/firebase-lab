// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();

const auth = admin.auth();

exports.getUsers = functions.https.onCall((data, context) => {
  const { authorization } = context.rawRequest.headers;
  // check if the token exists in headers if not no token provide
  if (authorization) {
    return (
      auth
        .listUsers(10)
        .then(userRecords => {
          // TODO filter the user data and check pagination
          const users = [];
          userRecords.users.forEach(user => users.push(user.toJSON()));
          return users;
        })
        .catch(error => console.log(error))
    );
  } else {
    return {
      error: {
        message: 'No token provided',
        status: 'UNAUTHENTICATED'
      }
    };
  }
});

// const getAllUsers = (req, res) => {
//   console.log('REQ', req);
//   auth
//     .verifyIdToken(
//       'eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1OTc0MmQyNjlhY2IzNWZiNjU3YzBjNGRkMmM3YjcyYWEzMTRiNTAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWxhYi0xZDhmZCIsImF1ZCI6ImZpci1sYWItMWQ4ZmQiLCJhdXRoX3RpbWUiOjE1ODExMjA3ODksInVzZXJfaWQiOiJyVmdXNDBLZWNjY1NvQVNXUHducUdHY3FwamYyIiwic3ViIjoiclZnVzQwS2VjY2NTb0FTV1B3bnFHR2NxcGpmMiIsImlhdCI6MTU4MTEyMTAwNCwiZXhwIjoxNTgxMTI0NjA0LCJlbWFpbCI6InJpdGNoLmlvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicml0Y2guaW9uQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.KwPJ2DNOX2obvSErPSCzPLwGXHZbygCdYSJUFmX32-jf5GqH-grUE7DXgK-8d9RCr1wjGsSZ04fWjAgb79HoHK6vRXUoVyALHxqSdVJYspU0HuvxAwHeJC3gA5-hz43p7clkSfuRB7kKbXvo2v2J1KuCSZ_Kc9qudS1dHD19Q38eECO_f1dQZI_bj80Q7-PrlrNrDSNVpxnnH-sAK6rSD0a_kXvpIHuj8R6sVeWQfeF8Zdzbqg2267wCgm2r6Gci-llYZHYhieJpcsjowPmtlJkUF56lskg25rUDyNqlk9pZvHZnq4pNM4aAfukT6EG_wcJBoEQQTyqYMy7cjEkxMQ'
//     )
//     .then(decodedToken => {
//       let uid = decodedToken.uid;
//       console.log('UID', uid);
//       const maxResults = 1; // optional arg.
//
//       // eslint-disable-next-line promise/no-nesting
//       return auth
//         .listUsers(maxResults)
//         // eslint-disable-next-line promise/always-return
//         .then(userRecords => {
//           const users = [];
//           userRecords.users.forEach(user => users.push(user.toJSON()));
//           res.json(users);
//         })
//         .catch(error => console.log(error));
//     })
//     .catch(error => {
//       // Handle error
//       res.status(500).send(error);
//     });
// };
//
// module.exports = {
//   api: functions.https.onRequest(getAllUsers)
// };

// exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {
//   console.log('New user', user.email);
// });
