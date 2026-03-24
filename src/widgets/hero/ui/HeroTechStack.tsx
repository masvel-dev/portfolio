import { motion } from "framer-motion";
import { TECH_STACK } from "../model/constants";

export function HeroTechStack() {
  return (
    <div className="flex items-center gap-3 mt-6">
      <h5 className="text-gray-500 font-medium">Core technologies:</h5>
      <div className="flex items-center gap-3 text-[2.5rem]">
        {TECH_STACK.map(({ icon: Icon, color, name }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, rotate: 5 }}
            title={name}
            aria-label={name}
          >
            <Icon className={`${color} transition-colors duration-300`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}