// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEi971YIqrA3Zr4mGUWwAUdD0vfohwM5o",
  authDomain: "react-slack-clone-829c5.firebaseapp.com",
  databaseURL:
    "https://react-slack-clone-829c5-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "react-slack-clone-829c5",
  storageBucket: "react-slack-clone-829c5.appspot.com",
  messagingSenderId: "401841013490",
  appId: "1:401841013490:web:cf6116896f1551c3bb466b",
  measurementId: "G-E283TX6YC5",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;
