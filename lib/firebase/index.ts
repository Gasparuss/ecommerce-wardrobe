import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseSenderId,
  appId: process.env.firebaseAppId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
