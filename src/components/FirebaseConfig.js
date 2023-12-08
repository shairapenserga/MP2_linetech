import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBan1btmgqMvvwYQ9M0nvIBVIfQ6eBAw3A",
  authDomain: "fir-838d8.firebaseapp.com",
  databaseURL: "https://fir-838d8-default-rtdb.firebaseio.com",
  projectId: "fir-838d8",
  storageBucket: "fir-838d8.appspot.com",
  messagingSenderId: "298952326142",
  appId: "1:298952326142:web:86605ec8326cb41de11eaf",
  measurementId: "G-KQGWEE5GT0"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)