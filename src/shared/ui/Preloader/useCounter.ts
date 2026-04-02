import { useEffect, useRef, useState } from "react";
import { PRELOADER_CONFIG } from "./config";

const getRandom = ([min, max]: number[]) =>
  Math.floor(Math.random() * (max - min)) + min;

export const useCounter = (isReady: boolean) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let raf: number;

    const update = () => {
      let next = countRef.current;

      if (!isReady) {
        if (next < PRELOADER_CONFIG.COUNTER.SLOW_LIMIT) {
          next += getRandom(PRELOADER_CONFIG.COUNTER.SLOW_JUMP);
        }
      } else {
        next += getRandom(PRELOADER_CONFIG.COUNTER.FAST_JUMP);
      }

      if (!isReady && next > PRELOADER_CONFIG.COUNTER.SOFT_CAP) {
        next = PRELOADER_CONFIG.COUNTER.SOFT_CAP;
      }

      next = Math.min(next, PRELOADER_CONFIG.COUNTER.MAX);

      if (next !== countRef.current) {
        countRef.current = next;
        setCount(next);
      }

      if (next < PRELOADER_CONFIG.COUNTER.MAX) {
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [isReady]);

  return count;
};