import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"ua" | "en">(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("lang") as "ua" | "en") || "en";
  });

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "ua" | "en" | null;
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ua" : "en")}
      className="px-3 py-1 text-sm font-medium border rounded-md border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
      title="Switch language"
    >
      {lang.toUpperCase()}
    </button>
  );
}