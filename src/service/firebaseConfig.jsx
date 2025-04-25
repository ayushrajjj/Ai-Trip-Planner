// firebaseConfig.js (or any other name you'd like)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaV15N_jQja_sGeBelt7Sawt33dMajrOg",
  authDomain: "ai-trip-planner-43dcd.firebaseapp.com",
  projectId: "ai-trip-planner-43dcd",
  storageBucket: "ai-trip-planner-43dcd.appspot.com",
  messagingSenderId: "563456730780",
  appId: "1:563456730780:web:4cf38384faaf0d475eef59",
  measurementId: "G-FGHP0H8C30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
