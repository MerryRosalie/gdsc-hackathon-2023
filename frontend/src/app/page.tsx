import Bubbles from "~/components/Bubbles";
import Sparkles from "~/components/Sparkles";
import Corals from "~/components/Corals";
import FishesLeft from "~/components/FishesLeft";
import FishesRight from "~/components/FishesRight";
import Image from "next/image";
import noise from "assets/noise.png";

export default function HomePage() {
  return (
    <main className="min-w-screen relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      {/* Background materials */}
      <Sparkles />
      <Bubbles />
      <Corals />
      <FishesLeft />
      <FishesRight />
      <Image
        className="opacity-5 mix-blend-lighten"
        src={noise}
        fill
        alt="Noise"
      />
    </main>
  );
}
