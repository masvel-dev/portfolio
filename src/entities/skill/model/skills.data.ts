import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPhp,
  SiGit,
  SiFigma,
  SiDocker,
} from "react-icons/si";

import type { Skill } from "./types";

export const skills: Skill[] = [
  { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, label: "CSS3", color: "#1572B6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiVite, label: "Vite", color: "#9135FF" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { Icon: SiPhp, label: "PHP", color: "#777BB4" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
];