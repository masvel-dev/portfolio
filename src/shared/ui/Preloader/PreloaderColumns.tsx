import { motion, type Variants } from "framer-motion";

export const PreloaderColumns = ({
  count,
}: {
  count: number;
}) => {
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
      className="absolute inset-0 flex"
      variants={containerVariants}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-[#111827]"
          variants={columnVariants}
        />
      ))}
    </motion.div>
  );
};