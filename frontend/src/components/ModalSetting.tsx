import React, { RefObject } from "react";
import { FiX } from "react-icons/fi";

function ModalSetting({
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  openSetting,
  setOpenSetting,
  updateTimeDefaultValue,
}: {
  pomodoroRef: RefObject<HTMLInputElement>;
  shortBreakRef: RefObject<HTMLInputElement>;
  longBreakRef: RefObject<HTMLInputElement>;
  openSetting: boolean;
  setOpenSetting: (b: boolean) => void;
  updateTimeDefaultValue: () => void;
}) {
  const inputs = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 10,
    },
  ];

  return (
    <>
      <div className={`m-0 w-80 rounded-md ${openSetting ? "" : "hidden"}`}>
        <div className="flex items-center justify-between text-white">
          <h1 className="font-bold uppercase tracking-wider">Time setting</h1>
          <FiX
            className="cursor-pointer text-2xl"
            onClick={() => setOpenSetting(false)}
          />
        </div>
        <div className="mb-5 mt-5 h-1 w-full bg-white"></div>
        <div className="flex gap-5">
          {inputs.map((input, index) => {
            return (
              <div key={index}>
                <h1 className="text-sm text-white">{input.value}</h1>
                <input
                  defaultValue={input.defaultValue}
                  type="number"
                  className="bg-whitext-white w-full rounded bg-opacity-30 py-2 text-center outline-none"
                  ref={input.ref}
                />
              </div>
            );
          })}
        </div>
        <button
          className="mt-5 w-full rounded bg-purple-500 py-2 uppercase text-white"
          onClick={updateTimeDefaultValue}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default React.memo(ModalSetting);
