// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAIOdBeaeqmWZmex4ROsOwa-3BycbAXqg",
  authDomain: "react-firebase-auth-emai-66912.firebaseapp.com",
  projectId: "react-firebase-auth-emai-66912",
  storageBucket: "react-firebase-auth-emai-66912.appspot.com",
  messagingSenderId: "742167180514",
  appId: "1:742167180514:web:76a740afc9633e7f1b1abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;