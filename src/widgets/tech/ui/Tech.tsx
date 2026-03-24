import { useMemo } from "react";

import { skills } from "@/entities/skill";
import type { Skill } from "@/entities/skill";

import { SkillItem } from "./SkillItem";

type AnimatedSkill = Skill & {
  delay: number;
  duration: number;
};

export function Tech() {
  const animatedSkills: AnimatedSkill[] = useMemo(() => {
    return skills.map((skill) => ({
      ...skill,
      delay: Math.random() * 6,
      duration: 9 + Math.random() * 5,
    }));
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-3 flex flex-wrap justify-center gap-10 pt-24">
      {animatedSkills.map((skill) => (
        <SkillItem key={skill.label} {...skill} />
      ))}
    </section>
  );
}