"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { initializeApp } from "firebase/app";
import { createContext } from "react";
import { getFirestore } from "firebase/firestore";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext.Provider value={app}>
      <DbContext.Provider value={db}>
        <html lang="en">
          <body className={`font-sans ${inter.variable} overflow-hidden`}>
            {children}
          </body>
        </html>
      </DbContext.Provider>
    </AppContext.Provider>
  );
}
