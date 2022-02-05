import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRnJCKnn5Dk4p235rAsppScV_P-4AH9N4",
  authDomain: "ecommerce-wardrobe-87c1f.firebaseapp.com",
  projectId: "ecommerce-wardrobe-87c1f",
  storageBucket: "ecommerce-wardrobe-87c1f.appspot.com",
  messagingSenderId: "341039321729",
  appId: "1:341039321729:web:51ac92bacea45b89d07380",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
