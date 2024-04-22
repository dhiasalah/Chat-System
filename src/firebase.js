import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI1OD-teC54VDnNVLtKKoQVqTc_U7VIKc",
  authDomain: "chatsystem-6618c.firebaseapp.com",
  projectId: "chatsystem-6618c",
  storageBucket: "chatsystem-6618c.appspot.com",
  messagingSenderId: "806918406263",
  appId: "1:806918406263:web:0ac098ce39c8452f404672"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
