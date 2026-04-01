import { useBreakpoints } from "@/shared/lib/useBreakpoints"

import { ProjectsCompact } from "./ProjectsCompact";
import { ProjectsLarge } from "./ProjectsLarge";

export const Projects = () => {
  const { xl } = useBreakpoints();

  return xl ? <ProjectsLarge /> : <ProjectsCompact />;
};