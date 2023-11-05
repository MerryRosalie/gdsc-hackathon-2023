"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import shine from "../../assets/shine.webp";
import jellyfish from "../../assets/jellyfish.gif";
import mercat from "../../assets/mercat.gif";
import rabbit from "../../assets/rabbit.gif";
import seal from "../../assets/seal.gif";
import stingray from "../../assets/stingray.gif";
import starfish from "../../assets/starfish.gif";
import turtle from "../../assets/turtle.gif";
import whale from "../../assets/whale.gif";
import Image, { StaticImageData } from "next/image";

export default function Gacha({
  gachaActive,
  setGachaActive,
  setAnimals,
}: {
  gachaActive: boolean;
  setGachaActive: Dispatch<SetStateAction<boolean>>;
  setAnimals: Dispatch<SetStateAction<StaticImageData[]>>;
}) {
  const animals = [
    jellyfish,
    mercat,
    rabbit,
    seal,
    stingray,
    starfish,
    turtle,
    whale,
  ];
  const [animal, setAnimal] = useState<StaticImageData>();

  useEffect(() => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    setAnimal(randomAnimal);
  }, [gachaActive]);

  return (
    <>
      {gachaActive && (
        <div
          className="absolute left-0 top-0 min-h-screen min-w-full cursor-pointer bg-black/30"
          onClick={() => {
            setAnimals((prev) => [...prev, animal] as StaticImageData[]);
            setGachaActive(false);
          }}
        >
          <Image className="animate-rotate-anim" src={shine} alt="Shine" fill />
          {animal && (
            <Image objectFit="contain" fill src={animal} alt="Animal" />
          )}
        </div>
      )}
    </>
  );
}
