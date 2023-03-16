import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBxnyA1hIOpZslVaMGBFjfo3BLlMorC3Gw",
  authDomain: "eapp1-dd0f5.firebaseapp.com",
  projectId: "eapp1-dd0f5",
  storageBucket: "eapp1-dd0f5.appspot.com",
  messagingSenderId: "201251890713",
  appId: "1:201251890713:web:1d17d8cad12b9245c1ac88"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
