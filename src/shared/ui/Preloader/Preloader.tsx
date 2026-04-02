"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { useBreakpoints } from "@/shared/lib/useBreakpoints";

import { useCounter } from "./useCounter";
import { useScrollLock } from "./useScrollLock";
import { PRELOADER_CONFIG } from "./config";
import { PreloaderColumns } from "./PreloaderColumns";

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

  const columnCount = lg
    ? PRELOADER_CONFIG.COLUMNS.DESKTOP
    : md
    ? PRELOADER_CONFIG.COLUMNS.TABLET
    : PRELOADER_CONFIG.COLUMNS.MOBILE;

  useScrollLock();

  useEffect(() => {
    if (count >= 100) {
      const t = setTimeout(
        () => setIsDone(true),
        PRELOADER_CONFIG.COMPLETE_DELAY
      );
      return () => clearTimeout(t);
    }
  }, [count]);

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
      <PreloaderColumns count={columnCount} />

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