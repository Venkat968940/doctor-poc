import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTbUoQpNdHrDc_dS4GkvuAiiuQXD8lwG0",
  authDomain: "doct-93daa.firebaseapp.com",
  projectId: "doct-93daa",
  storageBucket: "doct-93daa.appspot.com",
  messagingSenderId: "658938784633",
  appId: "1:658938784633:web:1afcbde207b85a20291da8",
  measurementId: "G-1LGW1Y0NL4"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();