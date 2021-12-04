// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABoJNr5Aq6t45IuwWMaxHp35dtjtpBSeE",
  authDomain: "twitter-joy.firebaseapp.com",
  projectId: "twitter-joy",
  storageBucket: "twitter-joy.appspot.com",
  messagingSenderId: "738359014715",
  appId: "1:738359014715:web:fba14d5e037e1c3ebd331e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
