/** @format */

import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration credentials
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_MESSAGING_APP_ID,

  apiKey: "AIzaSyDfGb6sBtPi6IoCuTyaW75Uc70f_So9dBg",
  authDomain: "ivr-platform-cd76a.firebaseapp.com",
  projectId: "ivr-platform-cd76a",
  storageBucket: "ivr-platform-cd76a.appspot.com",
  messagingSenderId: "652133186641",
  appId: "1:652133186641:web:e43e140c26838a4d1a0c70",
  measurementId: "G-ZKMWVE67EM",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export default firebase;
