// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbZtIoQ9xdxn5SQTQX7H5B7dSSgkBaDU",
  authDomain: "talkie-c19bd.firebaseapp.com",
  projectId: "talkie-c19bd",
  storageBucket: "talkie-c19bd.appspot.com",
  messagingSenderId: "322363739098",
  appId: "1:322363739098:web:d775abd3256bad0e9e8ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)