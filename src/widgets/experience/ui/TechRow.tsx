import { motion } from "framer-motion";

const styles = {
  primary: "bg-blue-100/75 text-blue-500",
  secondary: "bg-gray-200/75 text-gray-500",
} as const;

type Variant = keyof typeof styles;

type Props = {
  label: string;
  items: string[];
  variant: Variant;
};

export function TechRow({ label, items, variant }: Props) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="font-medium">{label}</span>
      {items.map((techItem, idx) => (
        <motion.div
          key={idx}
          className={`text-sm px-2 py-0.5 rounded cursor-default ${styles[variant]}`}
          whileHover={{ y: -2, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 250, damping: 20, }}
        >
          {techItem}
        </motion.div>
      ))}
    </div>
  );
}