"use client";

import { useState } from "react";
import useRandomInterval from "~/hooks/useRandomInterval";
import { random } from "~/utils/random";

type Bubbles = {
  createdAt: number;
  style: {
    width: number;
    height: number;
    left: string;
    zIndex: number;
  };
};

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubbles[]>([]);

  const generateBubble = () => {
    const size = random(20, 40);
    return {
      createdAt: Date.now(),
      style: {
        width: size,
        height: size,
        left: `${random(0, 100)}%`,
        zIndex: 10,
      },
    };
  };

  useRandomInterval(
    () => {
      const now = Date.now();
      const bubble = generateBubble();

      const nextBubbles = bubbles.filter(
        (bubble) => now - bubble.createdAt < 30000,
      );

      nextBubbles.push(bubble);

      setBubbles(nextBubbles);
    },
    10000,
    15000,
  );
  return (
    <div className="absolute min-h-full min-w-full">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          style={bubble.style}
          className="absolute -bottom-[20%] animate-bubbles-anim rounded-full border border-white bg-white/40"
        ></div>
      ))}
    </div>
  );
}
