import { HERO_STATS } from "../model/constants";
import { Counter } from "./Counter";

export function HeroStats() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-3">
      <div className="grid grid-cols-4 gap-6">
        {HERO_STATS.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}