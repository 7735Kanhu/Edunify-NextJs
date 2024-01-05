// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics } from "firebase/analytics"
import{ getStorage } from "@firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgsQsYJdHthm1pay-MPX5KF82KkvnK-wA",
  authDomain: "tk-survey.firebaseapp.com",
  databaseURL: "https://tk-survey-default-rtdb.firebaseio.com",
  projectId: "tk-survey",
  storageBucket: "tk-survey.appspot.com",
  messagingSenderId: "656760605822",
  appId: "1:656760605822:web:64aaa14a8542445c995c2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app)