import type { Experience } from "@/entities/experience";

import { TechStack } from "./TechStack";
import { ListBlock } from "./ListBlock";

type Props = { item: Experience };

export function ExperienceItem({ item }: Props) {
  return (
    <div className="relative flex gap-14">
      <div className="w-1/3">
        <div className="relative sticky top-28 flex flex-col font-bold space-y-1 pl-16
          before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
          before:w-[26px] before:h-[26px] before:bg-accent before:rounded-full before:border-4 before:border-bg before:transition-colors before:duration-300"
        >
          <span className="text-3xl">{item.years}</span>
          <span className="text-2xl opacity-75">{item.title}</span>
          <span className="text-lg opacity-50">{item.company}</span>
        </div>
      </div>

      <div className="w-2/3 space-y-5">
        {item.description && <p className="font-medium">{item.description}</p>}
        {item.tech && <TechStack tech={item.tech} />}
        {item.achievements && <ListBlock title="Key Achievements:" items={item.achievements} />}
        {item.responsibilities && <ListBlock title="Responsibilities:" items={item.responsibilities} />}
      </div>
    </div>
  );
}