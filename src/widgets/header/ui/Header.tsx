import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { useHeaderScroll } from "../model/useHeaderScroll";

import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

import Logo from "./Logo";

const links = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export function Header() {
  const { scrollY, direction } = useHeaderScroll();

  const isTop = scrollY < 50;
  const isHidden = direction === "down" && scrollY > 100;

  const base = "fixed top-0 left-0 w-full z-50 transition-all duration-300 transform-gpu will-change-transform";
  const transform = isHidden ? "-translate-y-full" : "translate-y-0";
  const style = isTop ? "bg-transparent shadow-none" : "bg-white/85 backdrop-blur-md shadow-md";

  return (
    <header className={`${base} ${transform} ${style}`}>
      <div className="max-w-6xl mx-auto px-3 py-6 flex items-center justify-between">
        <Link to="/" className="outline-none">
          <Logo />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {links.map(({ to, label }, i) => {
              const isDefaultActive = isTop && i === 0;

              return (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth
                  duration={500}
                  spy
                  hashSpy
                  activeClass="before:!scale-x-100 before:!origin-left"
                  className={`
                    relative text-primary font-medium cursor-pointer
                    hover:text-accent transition-colors duration-200
                    before:content-['']
                    before:absolute before:left-1 before:bottom-0
                    before:w-full before:h-2
                    before:bg-accent before:opacity-25
                    before:scale-x-0 before:origin-right
                    before:transition-transform before:duration-300
                    before:-z-10
                    ${isDefaultActive ? "before:!scale-x-100 before:!origin-left" : ""}
                  `}
                >
                  {label}
                </ScrollLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-6">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}