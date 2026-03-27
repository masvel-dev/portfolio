import type { Skill } from "@/entities/skill";

type AnimatedSkill = Skill & {
  delay: number;
  duration: number;
};

export function SkillItem({
  Icon,
  label,
  color,
  delay,
  duration,
}: AnimatedSkill) {
  return (
    <div
      title={label}
      className={`relative w-20 h-20 rounded-full flex items-center justify-center
        text-black dark:text-white/90 transition-colors duration-300
        before:content-[''] before:absolute before:inset-0 before:rounded-full dark:before:opacity-0
        before:bg-[radial-gradient(circle_at_25%_25%,_#ffffff_0%,_#f5f5f5_45%,_#d6d6d6_75%,_#bfbfbf_100%)]
        after:content-[''] after:absolute after:inset-0 after:rounded-full after:opacity-0 dark:after:opacity-100
        after:bg-[radial-gradient(circle_at_25%_25%,_#2f3655_0%,_#1e2440_45%,_#151a30_75%,_#0d1220_100%)]
        before:transition-opacity before:duration-500 after:transition-opacity after:duration-500
        shadow-[0_4px_16px_rgba(0,0,0,0.2)] animate-[float_10s_ease-in-out_infinite]`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <Icon
        size={44}
        color={color}
        style={{ filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.2)) drop-shadow(2px 2px 6px rgba(0,0,0,0.1))" }}
        className="z-10"
      />
    </div>
  );
}