"use client";

import { useState } from "react";
import useRandomInterval from "~/hooks/useRandomInterval";
import { random } from "~/utils/random";

type Sparkle = {
  createdAt: number;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
  };
};

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateSparkle = () => {
    return {
      createdAt: Date.now(),
      size: random(10, 20),
      style: {
        top: `${random(0, 100)}%`,
        left: `${random(0, 100)}%`,
        zIndex: 10,
      },
    };
  };

  useRandomInterval(
    () => {
      const now = Date.now();
      const sparkle = generateSparkle();

      const nextSparkles = sparkles.filter(
        (sparkle) => now - sparkle.createdAt < 15000,
      );

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    500,
    1000,
  );

  return (
    <div className="absolute min-h-full min-w-full">
      {/* Sparkles */}
      {sparkles.map((sparkle, index) => (
        <svg
          key={index}
          width={sparkle.size}
          height={sparkle.size}
          style={sparkle.style}
          className="absolute animate-sparkle-anim"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
            fill="#ffffff"
          />
        </svg>
      ))}
    </div>
  );
};

export default Sparkles;
