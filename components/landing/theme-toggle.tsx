"use client";

import { DarkModeIcon, LightModeIcon } from "@/public/icon";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme: Theme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 text-zinc-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:bg-zinc-950"
    >
      <LightModeIcon className="dark:block hidden" />
      <DarkModeIcon className="dark:hidden bock" />
    </button>
  );
}
