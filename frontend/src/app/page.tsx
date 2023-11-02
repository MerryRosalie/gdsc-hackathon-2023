import Background from "~/components/Background";
import Video from "~/components/Video";

export default function HomePage() {
  return (
    <main className="min-w-screen relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      <Video />
      <Background />
    </main>
  );
}
