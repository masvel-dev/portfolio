import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    title: "Frontend Developer (Sole Frontend)",
    company: "Private Company (marketing & web platforms)",
    years: "2018 — 2026",
    description: "Led and owned frontend development across multiple projects, building and maintaining interfaces from scratch in a PHP/Twig environment, while independently handling architecture, implementation, and delivery.",
    achievements: [
      "Built and maintained a scalable landing page system (~800 pages), significantly improving development efficiency and consistency.",
      "Designed and implemented reusable and scalable UI components and layout systems.",
      "Improved overall frontend structure and maintainability through refactoring and standardization.",
      "Applied React and TypeScript to build modern UI components and explore scalable frontend architecture approaches."
    ],
    responsibilities: [
      "Owned full frontend development lifecycle from implementation to production deployment.",
      "Developed dynamic, data-driven interfaces by integrating backend data into Twig templates.",
      "Built interactive UI features including transitions, loaders, dialogs, and micro-interactions.",
      "Redesigned and refactored legacy projects based on Figma mockups.",
      "Collaborated in a backend-driven environment while handling most frontend tasks independently.",
      "Continuously improved existing projects based on evolving requirements and stakeholder feedback."
    ],
    tech: {
      primary: ["React", "Next.js", "TypeScript"],
      experience: ["JavaScript (ES6+)", "HTML", "CSS/SCSS", "Tailwind", "Twig", "PHP (environment)"]
    }
  },
  {
    title: "Content Manager (Entry into Frontend)",
    company: "MEDIA-PRO",
    years: "2016 — 2018",
    description: "Started as a content manager with strong HTML/CSS basics, quickly gaining hands-on experience in frontend tasks including content structuring, responsive emails, and e-commerce pages, laying the foundation for a transition into frontend development.",
    achievements: [
      "Gained practical experience in frontend development by creating and maintaining content across multiple websites.",
      "Developed responsive, table-based email templates for marketing campaigns and newsletters.",
      "Built foundational skills in HTML, CSS, and Drupal 7, enabling a smooth transition into frontend engineering."
    ],
    responsibilities: [
      "Published and formatted news content across multiple websites, including text, images, banners, and partner integrations using HTML/CSS.",
      "Maintained visual consistency and improved layout structure across pages.",
      "Worked with Drupal 7 and e-commerce platforms to manage site content efficiently.",
      "Collaborated with designers and backend team members to implement content and UI updates."
    ],
    tech: {
      primary: ["HTML", "CSS"],
      experience: ["Email Development (table-based)", "Drupal 7"]
    }
  }
];