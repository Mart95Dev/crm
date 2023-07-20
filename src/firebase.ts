
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwRCziU7MT9KqtcmzqrHhfLvl-q7B4O6E",
  authDomain: "crm-test-685f5.firebaseapp.com",
  projectId: "crm-test-685f5",
  storageBucket: "crm-test-685f5.appspot.com",
  messagingSenderId: "41237369548",
  appId: "1:41237369548:web:c8363abb16388d4acf2869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;