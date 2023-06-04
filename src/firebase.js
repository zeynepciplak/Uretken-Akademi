// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArjksoEunjYwlsIKRNdOdAv-iN_rsk_hM",
  authDomain: "react-chat-6d009.firebaseapp.com",
  projectId: "react-chat-6d009",
  storageBucket: "react-chat-6d009.appspot.com",
  messagingSenderId: "1013148527558",
  appId: "1:1013148527558:web:f91a62f0f131075c84a0c7",
  measurementId: "G-YTDMXR22JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
