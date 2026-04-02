import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

type Props = {
  id: string;
  label: string;
  onClick?: () => void;
};

export const NavItem = ({ id, label, onClick }: Props) => {
  return (
    <li className="overflow-hidden">
      <motion.a
        href={`#${id}`}
        onClick={onClick}
        variants={itemVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="block font-serif text-5xl font-medium uppercase text-primary transition-colors duration-300"
      >
        {label}
      </motion.a>
    </li>
  );
};