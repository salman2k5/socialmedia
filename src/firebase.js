import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7DIFvuVpbARKXOOfY1i9CVZf9SfWM-rA",
  authDomain: "fbclone-c0bd1.firebaseapp.com",
  projectId: "fbclone-c0bd1",
  storageBucket: "fbclone-c0bd1.appspot.com",
  messagingSenderId: "903147722467",
  appId: "1:903147722467:web:013a2871099bb6deb957d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
