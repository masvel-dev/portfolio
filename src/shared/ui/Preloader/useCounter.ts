import { useEffect, useRef, useState } from "react";

export const useCounter = (isReady: boolean) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let raf: number;

    const update = () => {
      let next = countRef.current;

      if (!isReady) {
        if (next < 80) {
          const jump = Math.floor(Math.random() * 6) + 2;
          next += jump;
        }
      } else {
        const jump = Math.floor(Math.random() * 20) + 10;
        next += jump;
      }

      if (!isReady && next > 85) {
        next = 85;
      }

      next = Math.min(next, 100);

      if (next !== countRef.current) {
        countRef.current = next;
        setCount(next);
      }

      if (next < 100) {
        raf = requestAnimationFrame(update);
      }
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, [isReady]);

  return count;
};