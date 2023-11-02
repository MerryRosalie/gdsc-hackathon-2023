import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createContext } from "react";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "gdsc-hackathon-2023.firebaseapp.com",
  projectId: "gdsc-hackathon-2023",
  storageBucket: "gdsc-hackathon-2023.appspot.com",
  messagingSenderId: "609117699070",
  appId: "1:609117699070:web:571bbf24c73c3b00651eaf",
  measurementId: "G-X4JL4Q9Z43",
};

export const app = initializeApp(firebaseConfig);
export const AppContext = createContext(app);

export const db = getFirestore();
export const DbContext = createContext(db);
