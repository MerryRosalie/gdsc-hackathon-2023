import React, { MutableRefObject } from "react";

const Alarm = React.forwardRef((_, ref) => {
  return (
    <audio ref={ref as MutableRefObject<HTMLAudioElement>}>
      <source src="/alarm.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default React.memo(Alarm);
