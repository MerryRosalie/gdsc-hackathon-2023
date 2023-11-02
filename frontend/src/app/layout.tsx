"use client";

import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppContext, DbContext, app, db } from "./context/FirebaseContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext.Provider value={app}>
      <DbContext.Provider value={db}>
        <html lang="en">
          <body className={`font-sans ${inter.variable}`}>{children}</body>
        </html>
      </DbContext.Provider>
    </AppContext.Provider>
  );
}
