import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/shared/ui/container";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher/ThemeSwitcher";

import { navLinks } from "../config/navLinks";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";

const MENU_TOGGLE_BUTTON_CLASSES = `
  text-sm font-semibold leading-none before:content-[''] before:absolute before:w-12 before:h-12
  before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full py-6 z-40">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <button onClick={() => setIsOpen(true)} className={`relative ${MENU_TOGGLE_BUTTON_CLASSES}`}>MENU</button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
              animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
              exit={{ opacity: 0, y: -10, pointerEvents: "none" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.15,
              }}
              className="fixed top-6 left-6 text-primary z-50 transition-colors duration-300"
            >
              <Logo />
            </motion.div>

            <motion.button
              key="close"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
              animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
              exit={{ opacity: 0, y: -10, pointerEvents: "none" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 0.15,
              }}
              className={`fixed top-9 right-6 text-primary z-50 transition-colors duration-300 ${MENU_TOGGLE_BUTTON_CLASSES}`}
            >
              CLOSE
            </motion.button>

            <motion.div
              key="theme"
              initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
              animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
              exit={{ 
                opacity: 0,
                y: 10,
                pointerEvents: "none",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0,
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 1.15,
              }}
              className="fixed bottom-6 left-0 flex justify-center items-center gap-3 w-full text-white z-50"
            >
              <span className="text-primary text-sm font-bold transition-colors duration-300">Theme:</span>
              <ThemeSwitcher />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.25,
                ease: "easeInOut",
                delay: 0.4,
              },
            }}
            className="fixed top-0 left-0 w-full h-screen bg-stone-200 dark:bg-indigo-900 z-40 flex flex-col transition-colors duration-300"
          >
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center justify-center h-dvh"
            >
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((item) => (
                  <NavItem key={item.id} {...item} onClick={() => setIsOpen(false)} />
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};