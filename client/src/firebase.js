// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "presidio-rentify.firebaseapp.com",
  projectId: "presidio-rentify",
  storageBucket: "presidio-rentify.appspot.com",
  messagingSenderId: "937123936345",
  appId: "1:937123936345:web:6864f109397df4d7fe1948",
  measurementId: "G-0BW69P4XGD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
