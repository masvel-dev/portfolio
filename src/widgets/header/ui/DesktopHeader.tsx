import { Link as ScrollLink } from "react-scroll";

import { useHeaderScroll } from "../model/useHeaderScroll";

import { Container } from "@/shared/ui/container";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher/ThemeSwitcher";

import { Logo } from "./Logo";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export function DesktopHeader() {
  const { scrollY, direction } = useHeaderScroll();

  const isTop = scrollY < 50;
  const isHidden = direction === "down" && scrollY > 100;

  const base = "fixed top-0 left-0 w-full z-50 transition-[transform,background-color,box-shadow,backdrop-filter] duration-300 transform-gpu will-change-transform"; // pr-[var(--scrollbar-width)]
  const transform = isHidden ? "-translate-y-full" : "translate-y-0";
  const style = isTop ? "bg-transparent shadow-none" : "bg-white/85 dark:bg-[#121a3a]/80 backdrop-blur-md shadow-md dark:shadow-black/30";

  return (
    <header className={`${base} ${transform} ${style}`}>
      <Container>
        <div className="flex items-center justify-between py-6">
          <Logo />

          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex items-center gap-6">
                {links.map(({ to, label }, i) => {
                  const isDefaultActive = isTop && i === 0;

                  return (
                    <li key={to}>
                      <ScrollLink
                        to={to}
                        smooth
                        duration={500}
                        spy
                        hashSpy
                        activeClass="before:!scale-x-100 before:!origin-left"
                        className={`
                          relative text-sm font-semibold uppercase cursor-pointer hover:text-accent transition-colors duration-200
                          before:content-[''] before:absolute before:left-1 before:-bottom-0.5 before:-z-10
                          before:w-full before:h-2 before:bg-accent before:opacity-25 dark:before:opacity-60
                          before:scale-x-0 before:origin-right before:transition-[transform,opacity] before:duration-300
                          ${isDefaultActive ? "before:!scale-x-100 before:!origin-left" : ""}
                        `}
                      >
                        {label}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}