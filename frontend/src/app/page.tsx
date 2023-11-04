"use client";

import Background from "~/components/Background";
import Video from "~/components/Video";
import { FormEvent, useContext, useState } from "react";
import { redirect } from "next/navigation";
import { DbContext } from "~/context/FirebaseContext";
import { addDoc, collection } from "firebase/firestore";

export default function HomePage() {
  const [error, setError] = useState("");
  const db = useContext(DbContext);

  const createRoom = async () => {
    const roomRef = await addDoc(collection(db, "rooms"), {
      answerCandidates: [],
      offerCandidates: []
    });
    redirect(`/room/${roomRef.id}`);
  }

  const joinRoom = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const id = target.invite_link.value;
    const exist = await getDocs(collection(db, "rooms")).find(data => data.id === id.toLowerCase());

    // Check if room exists in firebase, otherwise show error
  }

  return (
    <main className="min-h-screen min-w-full isolate bg-gradient-to-b from-[#5155c1] to-[#041d56] flex gap-8 flex-col items-center justify-center text-white">
      <h1 className="font-bold text-2xl">👋🤓 Welcome to Nerd Station</h1>
      <div className="space-y-4">
        <h2 className="text-center">Create a Room</h2>
        <button onClick={createRoom} className="mx-auto block bg-purple-800 text-white p-4 rounded-lg">Create a Room</button>
      </div>
      <div className="space-y-4">
        <h2 className="text-center">Join a Room</h2>
        {error && <p>{error}</p>}
        <form className="space-x-2" onSubmit={joinRoom}>
          <input className="border-none rounded-lg p-4 bg-white/50" type="text" name="invite_link" required/>
          <button className="bg-purple-800 p-4 rounded-lg" type="submit">Join Room</button>
        </form>
      </div>
      <Background />
    </main>
  );
}
