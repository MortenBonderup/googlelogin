// Import the functions you need from the SDKs you need
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5-q_x-Yy_5WK6QwfPG1JE5eyqAdIoEc",
  authDomain: "signin-e3846.firebaseapp.com",
  projectId: "signin-e3846",
  storageBucket: "signin-e3846.firebasestorage.app",
  messagingSenderId: "126102287608",
  appId: "1:126102287608:web:416b09e427c21581eeb70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
