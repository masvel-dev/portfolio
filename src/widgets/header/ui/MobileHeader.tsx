import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/shared/ui/container";

import { Logo } from "./Logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
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
              className="fixed top-6 left-6 text-white z-50"
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
              className={`fixed top-9 right-6 text-white z-50 ${MENU_TOGGLE_BUTTON_CLASSES}`}
            >
              CLOSE
            </motion.button>
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
            className="fixed top-0 left-0 w-full h-screen bg-accent z-40 flex flex-col"
          >
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex-1 flex items-center justify-center"
            >
              <ul className="flex flex-col items-center gap-6 text-white font-serif text-5xl font-medium uppercase">
                {navItems.map((item) => (
                  <NavItem key={item.href} {...item} onClick={() => setIsOpen(false)} />
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) => {
  return (
    <li className="overflow-hidden">
      <motion.a
        href={href}
        onClick={onClick}
        variants={itemVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="block"
      >
        {label}
      </motion.a>
    </li>
  );
};