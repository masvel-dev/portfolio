import { Container } from "@/shared/ui/container";
import { Button } from "@/shared/ui/Button/Button";

import { HeroBackground } from "./HeroBackground";
import { HeroWave } from "./HeroWave";
import { HeroTechStack } from "./HeroTechStack";
import { HeroStats } from "./HeroStats";

import character from "../assets/character.webp";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden sm:overflow-visible">
      <HeroBackground />
      <HeroWave />

      <div className="absolute top-1/3 sm:top-auto sm:-bottom-6 -right-8 sm:right-8 lg:right-24 xl:left-2/3 pointer-events-none lg:animate-breathe">
        <img className="max-w-48 sm:max-w-64 lg:max-w-80 select-none" src={character} alt="Character" />
      </div>

      <Container>
        <div className="relative pt-24 sm:pt-28 lg:pt-64 pb-24 lg:pb-32 space-y-12 sm:space-y-20 lg:space-y-32">
          <div>
            <h2>
              Hey, I am{" "}
              <span className="relative inline-block text-accent transition-colors duration-300">
                Alexander Kopan
                <svg viewBox="0 0 273 10" fill="none" stroke="currentColor" strokeWidth="2"
                  className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-56 sm:w-64">
                  <path d="M0 6 Q136.5 3 273 6" />
                </svg>
              </span>
            </h2>
            <h1 className="mt-2">Frontend developer</h1>
            <h4 className="mt-2">focused on scalable UI systems</h4>
            <h5 className="max-w-xl text-gray-500 dark:text-gray-300/80 font-medium mt-6 sm:mt-10 transition-colors duration-300">
              I build scalable frontend architectures and complex UI systems with focus on performance and maintainability.
            </h5>
            
            <HeroTechStack />

            <div className="flex flex-wrap gap-3 mt-8 sm:mt-10">
              <Button text="See My Work" styleType="style2" type="scroll" scrollTo="projects" className="font-medium px-8" />
              <Button text="Let’s Talk" styleType="style1" type="scroll" scrollTo="contact" className="font-medium px-10" />
            </div>
          </div>

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}