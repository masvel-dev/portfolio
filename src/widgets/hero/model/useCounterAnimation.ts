import { useEffect, useState } from "react";

export function useCounterAnimation(
  value: number,
  duration: number,
  isActive: boolean
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const start = performance.now();

    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutQuad(progress);

      setCount(Math.floor(value * eased));

      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };

    requestAnimationFrame(step);
  }, [value, duration, isActive]);

  return count;
}