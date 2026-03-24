import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
      title="Переключить тему"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}