"use client";

import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { DbContext } from "~/app/layout";
import Background from "~/components/Background";
import Video from "~/components/Video";

export default function RoomPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const db = useContext(DbContext);

  useEffect(() => {
    const checkIdExist = async () => {
      const docs = (await getDocs(collection(db, "rooms"))).docs;
      const target = docs.map((doc) => doc.id).includes(params.id);
      console.log(
        docs.map((doc) => doc.id),
        params.id,
        target,
      );
      if (!target) router.push("/");
    };
    checkIdExist();
  }, []);

  return (
    <main className="min-w-screen relative isolate min-h-screen bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      <Video />
      <Background />
    </main>
  );
}
