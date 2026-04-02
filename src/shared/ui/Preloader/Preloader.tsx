"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

import { useBreakpoints } from "@/shared/lib/useBreakpoints";

import { useCounter } from "./useCounter";

const COMPLETE_DELAY = 200;

export const Preloader = ({
  onFinish,
  isReady,
}: {
  onFinish: () => void;
  isReady: boolean;
}) => {
  const count = useCounter(isReady);
  const [isDone, setIsDone] = useState(false);
  const hasFinishedRef = useRef(false);

  const { md, lg } = useBreakpoints();

  const columnCount = lg ? 6 : md ? 5 : 4;
  const columns = Array.from({ length: columnCount });

  useEffect(() => {
    if (count >= 100) {
      const t = setTimeout(() => setIsDone(true), COMPLETE_DELAY);
      return () => clearTimeout(t);
    }
  }, [count]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );

    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, []);

  const containerVariants: Variants = {
    exit: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const columnVariants: Variants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial="initial"
      animate={isDone ? "exit" : "initial"}
      onAnimationComplete={() => {
        if (isDone && !hasFinishedRef.current) {
          hasFinishedRef.current = true;
          onFinish();
        }
      }}
    >
      <motion.div
        className="absolute inset-0 flex"
        variants={containerVariants}
      >
        {columns.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-[#111827]"
            variants={columnVariants}
          />
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 text-white font-serif text-8xl font-bold"
        animate={{ opacity: isDone ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        {count}
      </motion.div>
    </motion.div>
  );
};