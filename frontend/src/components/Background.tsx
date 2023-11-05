import Bubbles from "~/components/Bubbles";
import Sparkles from "~/components/Sparkles";
import Corals from "~/components/Corals";
import FishesLeft from "~/components/FishesLeft";
import FishesRight from "~/components/FishesRight";
import Image, { StaticImageData } from "next/image";
import noise from "assets/noise.png";
import { random } from "~/utils/random";

const Background = ({ animals }: { animals: StaticImageData[] }) => {
  const animation = ["animate-fishes-left-anim", "animate-fishes-right-anim"];
  return (
    <div className="absolute  -z-10 min-h-full min-w-full">
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
      <>
        {animals.map((animal, index) => (
          <Image
            className={`${
              index % 2 == 0
                ? "-right-[20%] animate-fishes-left-anim"
                : "-left-[20%] animate-fishes-right-anim"
            } absolute w-32`}
            key={index}
            src={animal}
            alt={`Animal ${index}`}
            objectFit="contain"
            style={{
              top: `${random(0, 100)}%`,
            }}
          />
        ))}
      </>
    </div>
  );
};

export default Background;
