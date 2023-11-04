export default function RoomPage({ params }: { id: string }) {
  return (
    <main className="min-w-screen relative isolate min-h-screen bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      <Video />
      <Background />
    </main>
  );
}