// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "express/lib/response";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaV15N_jQja_sGeBelt7Sawt33dMajrOg",
  authDomain: "ai-trip-planner-43dcd.firebaseapp.com",
  projectId: "ai-trip-planner-43dcd",
  storageBucket: "ai-trip-planner-43dcd.firebasestorage.app",
  messagingSenderId: "563456730780",
  appId: "1:563456730780:web:4cf38384faaf0d475eef59",
  measurementId: "G-FGHP0H8C30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
