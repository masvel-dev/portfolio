import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/entities/project";

import { ProjectCard3D } from "./ProjectCard3D";

export function ProjectsLarge() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTopTarget = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xBottomTarget = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  const xTop = useSpring(xTopTarget, { stiffness: 120, damping: 20 });
  const xBottom = useSpring(xBottomTarget, { stiffness: 120, damping: 20 });

  const topSlides = projects.slice(0, 5);
  const bottomSlides = projects.slice(5, 10);

  return (
    <section ref={ref} className="relative overflow-hidden pt-[14vw] pb-32" id="projects">
      <span className={`absolute top-0 left-1/2 -translate-x-1/2 transition-colors duration-300
        text-gray-100/75 dark:text-gray-100/5 text-[20vw]/[.75] font-bold uppercase select-none`}>Projects</span>

      <motion.div
        style={{ x: xTop, rotate: "-3deg" }}
        className="flex gap-16 will-change-transform"
      >
        {[...topSlides, ...topSlides].map((project, i) => (
          <ProjectCard3D key={i} project={project} />
        ))}
      </motion.div>

      <motion.div
        style={{ x: xBottom, rotate: "3deg" }}
        className="flex gap-16 will-change-transform"
      >
        {[...bottomSlides, ...bottomSlides].map((project, i) => (
          <ProjectCard3D key={i + bottomSlides.length} project={project} />
        ))}
      </motion.div>
    </section>
  );
}