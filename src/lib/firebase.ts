// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "studio-8852692980-206ab",
  "appId": "1:470257936594:web:8240c81c4c5fea93c8250b",
  "storageBucket": "studio-8852692980-206ab.firebasestorage.app",
  "apiKey": "AIzaSyAENEc8kVtzSDcHNm6BtQwe0XEe1BR1zek",
  "authDomain": "studio-8852692980-206ab.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "470257936594"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
