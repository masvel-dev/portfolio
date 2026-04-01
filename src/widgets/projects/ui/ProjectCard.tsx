import type { Project } from '@/entities/project/model/types';

type Props = Project;

export const ProjectCard = ({ image, title, description }: Props) => {
  return (
    <div>
      <img src={image} alt={title} className="rounded-lg border border-gray-100 dark:border-white/10 shadow-lg transition-colors duration-300" />

      <div className="context mt-14">
        <h3>{title}</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300/80 font-medium transition-colors duration-300">Key Features:</p>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-500 dark:text-gray-300/80 transition-colors duration-300">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};