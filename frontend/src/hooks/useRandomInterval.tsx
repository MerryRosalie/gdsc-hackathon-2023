import { useEffect, useRef } from "react";
import { random } from "~/utils/random";

const useRandomInterval = (
  callback: Function,
  minDelay: number | null,
  maxDelay: number | null,
) => {
  const timeoutRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const enabled = minDelay != null && maxDelay != null;
    if (enabled) {
      const handleTick = () => {
        const nextTick = random(minDelay, maxDelay);
        timeoutRef.current = window.setTimeout(() => {
          callbackRef.current();
          handleTick();
        }, nextTick);
      };
      handleTick();
    }
  }, [minDelay, maxDelay]);

  return () => {
    if (timeoutRef.current != null) window.clearTimeout(timeoutRef.current);
  };
};

export default useRandomInterval;
