import { Container } from "@/shared/ui/container";

import { AboutImage } from "./AboutImage";
import { SocialLinks } from "./SocialLinks"

export function About() {
  return (
    <section id="about" className="pt-10 md:pt-20">
      <Container>
        <div className="flex flex-col md:flex-row lg:items-center gap-x-8 lg:gap-x-10 xl:gap-x-14 gap-y-20">
          <AboutImage />
          
          <div className="flex-1 order-1 md:order-none">
            <h6>About me</h6>
            <h2 className="mb-6">Who is Alexander Kopan?</h2>
            <div className="space-y-3">
              <p>I’m a frontend developer with 8+ years of experience, currently focused on building modern web applications using React, Next.js, and TypeScript.</p>
              <p>I started my career working with HTML and CSS in content management, which gave me a strong foundation in layout, structure, and attention to detail. Over time, I moved into frontend development and contributed to multiple marketing and platform projects, working in a PHP/Twig environment while gradually introducing more modern approaches.</p>
              <p>In recent years, I’ve been focusing on component-driven development with React and TypeScript, building reusable UI systems, improving maintainability, and bringing more structure to growing codebases.</p>
              <p>One of my key projects was a large-scale landing page system (~800 pages), where I applied reusable patterns and consistent architecture to simplify development and reduce duplication.</p>
              <p>I enjoy working on interfaces where structure matters: designing systems, refining existing solutions, and making code easier to understand and extend. I aim to build frontend solutions that stay manageable as projects evolve.</p>
            </div>

            <SocialLinks />
          </div>
        </div>
      </Container>
    </section>
  );
}