"use client";

import Background from "~/components/Background";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { DbContext } from "./layout";

export default function HomePage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const db = useContext(DbContext);

  const createRoom = async () => {
    const roomRef = await addDoc(collection(db, "rooms"), {
      answerCandidates: [],
      offerCandidates: [],
    });
    router.push(`/room/${roomRef.id}`);
  };

  const joinRoom = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const id = target.invite_link.value as String;
    const exists = (await getDocs(collection(db, "rooms"))).docs.find(
      (doc) => doc.id === id,
    );
    if (exists) {
      router.push(`/room/${id}`);
    } else {
      setError("Room with the given ID doesn't exist");
    }
  };

  return (
    <main className="isolate flex min-h-screen min-w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#5155c1] to-[#041d56] text-white">
      <h1 className="text-2xl font-bold">👋🤓 Welcome to Nerd Station</h1>
      <div className="space-y-4">
        <h2 className="text-center">Create a Room</h2>
        <button
          onClick={createRoom}
          className="mx-auto block rounded-lg bg-purple-800 p-4 text-white duration-150 hover:bg-purple-800/80"
        >
          Create a Room
        </button>
      </div>
      <div className="space-y-4">
        <h2 className="text-center">Join a Room</h2>
        {error && <p>{error}</p>}
        <form className="space-x-2" onSubmit={joinRoom}>
          <input
            className="rounded-lg border-none bg-white/25 p-4 outline-none duration-150 focus:shadow-lg"
            type="text"
            name="invite_link"
            required
          />
          <button
            className="rounded-lg bg-purple-800 p-4 duration-150 hover:bg-purple-800/80"
            type="submit"
          >
            Join Room
          </button>
        </form>
      </div>
      <Background />
    </main>
  );
}
