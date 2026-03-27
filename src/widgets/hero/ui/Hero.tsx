import { Button } from "@/shared/ui/Button/Button";

import { HeroBackground } from "./HeroBackground";
import { HeroWave } from "./HeroWave";
import { HeroTechStack } from "./HeroTechStack";
import { HeroStats } from "./HeroStats";

import character from "../assets/character.png";

export function Hero() {
  return (
    <section id="home" className="relative">
      <HeroBackground />
      <HeroWave />

      <div className="absolute top-[14%] left-[66%] pointer-events-none animate-breathe">
        <img className="w-[350px] select-none" src={character} alt="Character" />
      </div>

      <div className="flex flex-col justify-end gap-36 py-36 min-h-[calc(100vh+40px)]">
        <div className="relative w-full max-w-6xl mx-auto px-3 flex items-center">
          <div className="max-w-xl text-left">
            <h2>
              Hey, I am <span className="relative text-accent transition-colors duration-300">Alexander Kopan
                <svg viewBox="0 0 273 10" fill="none" stroke="currentColor" strokeWidth="2"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[10px]">
                  <path d="M0 6 Q136.5 3 273 6" />
                </svg>
              </span>
            </h2>
            <h1 className="mb-1">Frontend developer</h1>
            <h4 className="mb-6">focused on scalable UI systems</h4>
            <h5 className="text-gray-500 dark:text-gray-300/80 font-medium transition-colors duration-300">
              I build scalable frontend architectures and complex UI systems with focus on performance and maintainability.
            </h5>
            
            <HeroTechStack />

            <div className="flex flex-wrap gap-3 mt-8">
              <Button text="See My Work" styleType="style2" type="scroll" scrollTo="projects" className="font-medium px-8" />
              <Button text="Let’s Talk" styleType="style1" type="scroll" scrollTo="contact" className="font-medium px-10" />
            </div>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
}