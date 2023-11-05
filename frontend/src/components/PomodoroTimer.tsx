"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import Timer from "./Timer";
import Alarm from "./Alarm";
import ModalSetting from "./ModalSetting";

type TimeStage = {
  0: number;
  1: number;
  2: number;
};

export default function Pomodoro() {
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [shortBreak, setShortBreak] = useState<number>(5);
  const [longBreak, setLongBreak] = useState<number>(10);
  const [seconds, setSecond] = useState<number>(0);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [consumedSecond, setConsumedSecond] = useState<number>(0);
  const [ticking, setTicking] = useState<boolean>(false);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [openSetting, setOpenSetting] = useState<boolean>(false);

  const alarmRef = useRef<HTMLAudioElement>();
  const pomodoroRef = useRef<HTMLInputElement>(null);
  const shortBreakRef = useRef<HTMLInputElement>(null);
  const longBreakRef = useRef<HTMLInputElement>(null);

  const updateTimeDefaultValue = () => {
    if (pomodoroRef.current) setPomodoro(parseInt(pomodoroRef.current.value));
    if (shortBreakRef.current)
      setShortBreak(parseInt(shortBreakRef.current.value));
    if (longBreakRef.current)
      setLongBreak(parseInt(longBreakRef.current.value));
    setOpenSetting(false);
    setSecond(0);
    setConsumedSecond(0);
  };

  const switchStage = (index: 0 | 1 | 2) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
    }
  };

  const getTickingTime = () => {
    const timeStage: TimeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };
  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const reset = () => {
    setConsumedSecond(0);
    setTicking(false);
    setSecond(0);
    updateTimeDefaultValue();
  };

  const timeUp = () => {
    reset();
    setIsTimeUp(true);
    (alarmRef.current as HTMLAudioElement).play();
  };

  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSecond(59);
    } else {
      setSecond((second) => second - 1);
    }
  };
  const muteAlarm = () => {
    (alarmRef.current as HTMLAudioElement).pause();
    (alarmRef.current as HTMLAudioElement).currentTime = 0;
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking((ticking) => !ticking);
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "Show waring" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
        clockTicking();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]);

  return (
    <div className="absolute bottom-4 right-0">
      <div className="mx-auto p-4">
        <ModalSetting
          openSetting={openSetting}
          setOpenSetting={setOpenSetting}
          pomodoroRef={pomodoroRef}
          shortBreakRef={shortBreakRef}
          longBreakRef={longBreakRef}
          updateTimeDefaultValue={updateTimeDefaultValue}
        />
        <Navigation setOpenSetting={setOpenSetting} />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          startTimer={startTimer}
          muteAlarm={muteAlarm}
          isTimeUp={isTimeUp}
          reset={reset}
        />
        {/* <About /> */}
        <Alarm ref={alarmRef} />
      </div>
    </div>
  );
}
