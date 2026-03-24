import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Logo() {
  const letters = "Kopan.dev".split("");
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    await controls.start("flip");
    setIsAnimating(false);
  };

  return (
    <motion.h1
      className="text-3xl font-semibold tracking-tight"
      onHoverStart={handleHover}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d",
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          animate={controls}
          variants={{
            flip: {
              rotateY: [0, 360],
              transition: {
                delay: i * 0.04,
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
          className="inline-block"
          style={{
            transformOrigin: "center",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
