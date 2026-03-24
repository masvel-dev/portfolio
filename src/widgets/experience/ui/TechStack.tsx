import type { Experience } from "@/entities/experience";

import { TechRow } from "./TechRow";

type Props = { tech: NonNullable<Experience["tech"]> };

export function TechStack({ tech }: Props) {
  return (
    <div className="space-y-2">
      <h5>Tech Stack:</h5>

      <TechRow label="Primary:" items={tech.primary} variant="primary" />
      <TechRow label="Experience:" items={tech.experience} variant="secondary" />
    </div>
  );
}