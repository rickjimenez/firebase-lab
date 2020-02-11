// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

// // get data from env vars
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
//
// if (process.env.NODE_ENV === 'production') firebase.initializeApp();
// else firebase.initializeApp(firebaseConfig);
//
// export const auth = firebase.auth();
// // Initialize Cloud Functions through Firebase
// export const fn = firebase.functions();
//
// export default firebase;
