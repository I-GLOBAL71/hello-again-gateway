// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "cvgenius-b3846",
  "appId": "1:396283648281:web:13098363363e06a3828c82",
  "storageBucket": "cvgenius-b3846.appspot.com",
  "apiKey": "AIzaSyDPT20o8s8fSqcF6jZlH5DkS4f6aP-Tj5c",
  "authDomain": "cvgenius-b3846.firebaseapp.com",
  "messagingSenderId": "396283648281"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
