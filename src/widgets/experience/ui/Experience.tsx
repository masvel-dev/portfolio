import { experience } from "@/entities/experience";

import { ExperienceItem } from "./ExperienceItem";
import { Container } from "@/shared/ui/container";

export function Experience() {
  return (
    <section className="pt-16 md:pt-24 pb-12" id="experience">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <h6>Experience</h6>
          <h2 className="mb-6">Work History</h2>
          <p>Experienced in building frontend applications from scratch to production, with a focus on scalable architecture and modern frameworks.</p>
        </div>

        <div className="relative py-12">
          <div className="absolute top-0 left-[11px] h-full w-[4px] bg-gradient-to-b from-transparent via-accent to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {experience.map((item, i) => (
              <ExperienceItem key={i} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}