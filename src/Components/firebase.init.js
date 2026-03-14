// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw7qtiyHHy8hQVXfldfn4tT64LgGFZQLI",
  authDomain: "email-password-firebase-app.firebaseapp.com",
  projectId: "email-password-firebase-app",
  storageBucket: "email-password-firebase-app.firebasestorage.app",
  messagingSenderId: "59373682865",
  appId: "1:59373682865:web:a93b1dd1c4d1137a466290"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);