import { HERO_STATS } from "../model/constants";
import { Counter } from "./Counter";

export function HeroStats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
      {HERO_STATS.map((stat) => (
        <Counter key={stat.label} {...stat} />
      ))}
    </div>
  );
}