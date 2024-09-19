// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTbUoQpNdHrDc_dS4GkvuAiiuQXD8lwG0",
  authDomain: "doct-93daa.firebaseapp.com",
  projectId: "doct-93daa",
  storageBucket: "doct-93daa.appspot.com",
  messagingSenderId: "658938784633",
  appId: "1:658938784633:web:1afcbde207b85a20291da8",
  measurementId: "G-1LGW1Y0NL4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);