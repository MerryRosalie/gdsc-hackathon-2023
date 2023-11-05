import React from "react";
import { FiBellOff } from "react-icons/fi";

export default function Timer({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset,
}: {
  stage: 0 | 1 | 2;
  switchStage: (index: 0 | 1 | 2) => void;
  getTickingTime: () => number;
  seconds: number;
  ticking: boolean;
  startTimer: () => void;
  isTimeUp: boolean;
  muteAlarm: () => void;
  reset: () => void;
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  return (
    <div className="mx-auto flex flex-col items-end justify-center rounded-full text-white">
      <div className="mt-5 flex items-center gap-4">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === stage ? "bg-black/25 bg-opacity-30" : ""
              } cursor-pointer rounded p-1 transition-all`}
              onClick={() => switchStage(index as 0 | 1 | 2)}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="my-6">
        <h1 className="m-0 select-none text-8xl font-bold">
          {getTickingTime()}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex items-center gap-2">
          <button
            className="rounded-md bg-white px-16 py-2 text-2xl font-bold uppercase text-blue-500"
            onClick={startTimer}
          >
            {ticking ? "Stop" : "Start"}
          </button>
          {isTimeUp && (
            <FiBellOff
              className="cursor-pointer text-3xl text-white"
              onClick={muteAlarm}
            />
          )}
        </div>
        {ticking && (
          <button className="uppercase text-white underline" onClick={reset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
