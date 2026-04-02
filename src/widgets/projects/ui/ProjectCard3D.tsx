import type { Project } from "@/entities/project";

import styles from "./ProjectCard.module.css";

interface ProjectCard3DProps {
  project: Project;
}

export function ProjectCard3D({ project }: ProjectCard3DProps) {
  return (
    <div className={`min-w-[400px] h-[225px] flex-shrink-0 ${styles.group}`}>
      <div className={styles.card3d}>
        <div className={`${styles.face} ${styles.front} shadow-lg`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          className={`${styles.face} ${styles.back} shadow-lg`}
          style={{ backgroundColor: project.bg, color: project.color }}
        >
          <h4>{project.title}</h4>
          <p className="mt-2 !text-current text-sm font-medium">
            Key Features:
          </p>
          <ul className="mt-2 list-disc list-inside text-sm">
            {(project.description || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}