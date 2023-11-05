import React, { Dispatch, SetStateAction } from "react";
import { FiCommand, FiSettings } from "react-icons/fi";

function Navigation({
  setOpenSetting,
}: {
  setOpenSetting: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex justify-between pt-5 text-white">
      <h1 className="text-xl font-bold">Time to focus!!</h1>
      <FiSettings
        className="cursor-pointer text-2xl "
        onClick={() => setOpenSetting((value) => !value)}
      />
    </nav>
  );
}
export default React.memo(Navigation);
