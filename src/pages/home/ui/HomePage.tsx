import { Hero, About, Tech, Experience, Projects, Contact } from "@/widgets";

export const HomePage = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};