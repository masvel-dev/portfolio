import { useMemo } from "react";

import { Container } from "@/shared/ui/container";

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
    <section className="pt-16 sm:pt-20 md:pt-24">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-10">
          {animatedSkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </div>
      </Container>
    </section>
  );
}