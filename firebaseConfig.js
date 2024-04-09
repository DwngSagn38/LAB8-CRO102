// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAWI9gmlx55a4x_oM_xZuOjEp4jdVNfpc",
  authDomain: "cro102-7d8f5.firebaseapp.com",
  projectId: "cro102-7d8f5",
  storageBucket: "cro102-7d8f5.appspot.com",
  messagingSenderId: "325321090942",
  appId: "1:325321090942:web:c298001516119f5fedf52f",
  measurementId: "G-D7DBPQ0TPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const DATABASE= getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);