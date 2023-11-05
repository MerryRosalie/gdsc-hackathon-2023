"use client";

import Background from "~/components/Background";
import TodoList from "~/components/TodoList";
import Note from "~/components/Note";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Sidebar from "~/components/Sidebar";
import {
  CameraIcon,
  ClockIcon,
  DocumentTextIcon,
  PencilIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Pomodoro from "~/components/PomodoroTimer";
import Gacha from "~/components/Gacha";
import { StaticImageData } from "next/image";
import Video from "~/components/Video";

export type SidebarData = {
  name: string;
  value: boolean;
  callback: Dispatch<SetStateAction<boolean>>;
  icon: ReactNode;
};

export default function HomePage() {
  const defaultText =
    "Every 1 minute, a coin is incremented once. These coins can be used to gacha (which costs 5 coins). Refreshes reset this.";
  const [coins, setCoins] = useState(0);
  const [text, setText] = useState(defaultText);
  const [animals, setAnimals] = useState<StaticImageData[]>([]);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [todolistActive, setTodolistActive] = useState<boolean>(false);
  const [notesActive, setNotesActive] = useState<boolean>(false);
  const [webcamActive, setWebcamActive] = useState<boolean>(false);
  const [gachaActive, setGachaActive] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prev) => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const datas: SidebarData[] = [
    {
      name: "Timer",
      value: timerActive,
      callback: setTimerActive,
      icon: (
        <ClockIcon
          className={`h-10 w-10 ${
            timerActive ? "text-purple-300" : "text-white"
          }`}
        />
      ),
    },
    {
      name: "To-do",
      value: todolistActive,
      callback: setTodolistActive,
      icon: (
        <DocumentTextIcon
          className={`h-10 w-10 ${
            todolistActive ? "text-purple-300" : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Note",
      value: notesActive,
      callback: setNotesActive,
      icon: (
        <PencilIcon
          className={`h-10 w-10 ${
            notesActive ? "text-purple-300" : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Webcam",
      value: webcamActive,
      callback: setWebcamActive,
      icon: (
        <CameraIcon
          className={`h-10 w-10 ${
            webcamActive ? "text-purple-300" : "text-white"
          }`}
        />
      ),
    },
    {
      name: "Gacha",
      value: gachaActive,
      callback: () => showGacha(),
      icon: (
        <SparklesIcon
          className={`h-10 w-10 ${
            gachaActive ? "text-purple-300" : "text-white"
          }`}
        />
      ),
    },
  ];

  const showGacha = () => {
    if (coins < 5) {
      setText("Not enough coins");
      const timeout = setTimeout(() => setText(defaultText), 3000);
      return () => clearTimeout(timeout);
    }
    setCoins((prev) => prev - 5);
    setGachaActive((prev) => !prev);
  };

  return (
    <main className="min-w-screen relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-[#5155c1] to-[#041d56]">
      {/* Background materials */}
      <Sidebar datas={datas} />
      {gachaActive ? (
        <Gacha
          gachaActive={gachaActive}
          setGachaActive={setGachaActive}
          setAnimals={setAnimals}
        ></Gacha>
      ) : (
        <></>
      )}
      {todolistActive ? <TodoList /> : <></>}
      {notesActive ? <Note /> : <></>}
      {timerActive ? <Pomodoro /> : <></>}
      {webcamActive ? <Video /> : <></>}
      <div className="absolute bottom-4 left-4 space-y-2 text-4xl font-bold text-white">
        <p>🪙 {coins} coins</p>
        <p className="w-3/4 text-sm font-normal text-white/50">{text}</p>
      </div>
      <Background animals={animals} />
    </main>
  );
}
