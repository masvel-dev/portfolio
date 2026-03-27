import { useEffect, useRef, useState } from "react";

import { useCounterAnimation } from "../model/useCounterAnimation";

import type { CounterProps } from "../model/types";

export function Counter({
  value,
  label,
  duration = 1000,
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const count = useCounterAnimation(value, duration, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center gap-3 bg-white/75 dark:bg-white/20 py-6 px-4 rounded-md border-b-[3px] border-accent shadow-lg backdrop-blur-md transition-colors duration-300"
    >
      <h2 className="relative text-center">
        <span className="invisible">{value}{suffix}</span>
        <span className="absolute inset-0 text-accent transition-colors duration-300">{count}{suffix}</span>
      </h2>
      <h5 className="font-medium leading-[1.3] capitalize">{label}</h5>
    </div>
  );
}