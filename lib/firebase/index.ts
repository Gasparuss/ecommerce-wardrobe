import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByKzvUU3XyTgNs7fR9Wq2rfTdxbebRFoY",
  authDomain: "wardrobe-fb3ed.firebaseapp.com",
  projectId: "wardrobe-fb3ed",
  storageBucket: "wardrobe-fb3ed.appspot.com",
  messagingSenderId: "630803668620",
  appId: "1:630803668620:web:e995b496f0d2f88fbfe5a9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
