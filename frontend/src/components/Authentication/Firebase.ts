// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmz72ZlmjnpyY5LEgi2qJ683b93AV8t4k",
  authDomain: "coursematic-bfe3a.firebaseapp.com",
  projectId: "coursematic-bfe3a",
  storageBucket: "coursematic-bfe3a.appspot.com",
  messagingSenderId: "1065907836193",
  appId: "1:1065907836193:web:4e0ca12d94279679185a60"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;


