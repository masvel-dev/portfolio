import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import { useTheme } from "@/shared/lib/useTheme";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return(
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-14 h-8 bg-gray-800 dark:bg-blue-600/90 rounded-full p-1 transition-colors duration-300 outline-none"
    >
      <IoSunnySharp size={16} className="absolute left-2 text-yellow-500" />
      <IoMoonSharp size={16} className="absolute right-2 text-blue-400" />

      <span className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 z-10
        ${isDark ? "translate-x-6" : "translate-x-0"}`}></span>
    </button>
  );
}