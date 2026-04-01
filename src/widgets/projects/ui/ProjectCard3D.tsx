import type { Project } from "@/entities/project";

interface ProjectCard3DProps { 
  project: Project; 
}

export function ProjectCard3D({ project }: ProjectCard3DProps) {
  return (
    <div className="group min-w-[400px] h-[225px] flex-shrink-0">
      <div className="card3d">
        <div className="face front shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          className="face back shadow-lg"
          style={{ backgroundColor: project.bg, color: project.color }}
        >
          <h4>{project.title}</h4>
          <p className="mt-2 !text-current text-sm font-medium">Key Features:</p>
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