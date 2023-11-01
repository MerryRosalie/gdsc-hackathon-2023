import Bubbles from "~/components/Bubbles";
import Sparkles from "~/components/Sparkles";
import Corals from "~/components/Corals";
import FishesLeft from "~/components/FishesLeft";
import FishesRight from "~/components/FishesRight";
import Image from "next/image";
import noise from "assets/noise.png";

const Background = () => {
  return (
    <div className="absolute min-h-full min-w-full">
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
    </div>
  );
};

export default Background;
