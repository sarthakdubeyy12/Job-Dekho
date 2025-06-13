// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyDWyxRI33ho94ktrLXHUtl2ZhOi7gf3PIc",
  authDomain: "jobportal-36f92.firebaseapp.com",
  projectId: "jobportal-36f92",
  storageBucket: "jobportal-36f92.firebasestorage.app",
  messagingSenderId: "929493291148",
  appId: "1:929493291148:web:d2af7c8706e32c76ea6ba9",
  measurementId: "G-H4LF24W4XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Now exported
