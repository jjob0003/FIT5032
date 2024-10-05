import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Uoe94cES-RST8gt3GeqPHszw6j-OOzk",
  authDomain: "week7-janice.firebaseapp.com",
  projectId: "week7-janice",
  storageBucket: "week7-janice.appspot.com",
  messagingSenderId: "451611284671",
  appId: "1:451611284671:web:f3765be9563aa44413e20a"
};

initializeApp(firebaseConfig);

const db = getFirestore()
export default db
