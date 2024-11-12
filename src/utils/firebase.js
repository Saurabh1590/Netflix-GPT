// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-44bf5.firebaseapp.com",
  projectId: "netflixgpt-44bf5",
  storageBucket: "netflixgpt-44bf5.appspot.com",
  messagingSenderId: "709346792655",
  appId: "1:709346792655:web:5de7675a941dd8d76b93ba",
  measurementId: "G-6FRRRDLCH4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 