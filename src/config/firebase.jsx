import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpiQD_idZSz5RKHVEwV-fOs8E_b0oBi1g",
  authDomain: "ecommerce-b5165.firebaseapp.com",
  projectId: "ecommerce-b5165",
  storageBucket: "ecommerce-b5165.appspot.com",
  messagingSenderId: "820328718882",
  appId: "1:820328718882:web:88bb6e4ed86a42b139607b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
