// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5ooea-6JN6r3Pu8gXBgT5C-nV8w1-dJU",
  authDomain: "journal-app-daniel.firebaseapp.com",
  projectId: "journal-app-daniel",
  storageBucket: "journal-app-daniel.appspot.com",
  messagingSenderId: "73048094905",
  appId: "1:73048094905:web:d00cbb780612018207c368",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
