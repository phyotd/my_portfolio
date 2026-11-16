"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toogle theme"
      className="
      rounded-full 
      border 
      border-border 
      p-2 
      hover:bg-primary hover:text-black transition-colors"
    >
      <Moon className="block dark:hidden" size={20} />
      <Sun className="hidden dark:block" size={20} />
    </button>
  );
}
