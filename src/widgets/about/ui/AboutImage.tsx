import { motion } from "framer-motion";

import workspace from "../assets/workspace.jpg";

export function AboutImage() {
  return(
    <div className="relative flex-1 order-2 md:order-none">
      <div className={`relative max-w-fit md:w-full rounded-2xl overflow-hidden shadow-lg mx-auto
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent`}>
        <img src={workspace} alt="Workspace" />
        
        <div className="absolute bottom-4 left-5 text-white">
          <span className="text-sm uppercase tracking-widest opacity-80">Focused on</span>
          <h4>Clean Code & UX Design</h4>
        </div>
      </div>

      <motion.svg
        className="absolute -top-24 -left-12 w-48 md:w-56 text-accent transition-colors duration-300"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="60"
          cy="140"
          r="40"
          fill="currentColor"
          animate={{ scale: [1, 0.94, 1] }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{ originX: "50%", originY: "50%" }}
        />
        <motion.circle
          cx="120"
          cy="100"
          r="25"
          fill="currentColor"
          className="opacity-80"
          animate={{ scale: [1, 0.9, 1] }}
          transition={{
            duration: 5.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.7,
          }}
          style={{ originX: "50%", originY: "50%" }}
        />
        <motion.circle
          cx="90"
          cy="60"
          r="15"
          fill="currentColor"
          className="opacity-60"
          animate={{ scale: [1, 0.87, 1] }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.4,
          }}
          style={{ originX: "50%", originY: "50%" }}
        />
      </motion.svg>
    </div>
  )
}