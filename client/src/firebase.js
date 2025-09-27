// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-72c49.firebaseapp.com",
  projectId: "mern-estate-72c49",
  storageBucket: "mern-estate-72c49.appspot.com",
  messagingSenderId: "17546152367",
  appId: "1:17546152367:web:e1ceda5bc57f69e5d0875a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);