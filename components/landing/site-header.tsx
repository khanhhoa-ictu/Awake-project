import Link from "next/link";

import { navItems } from "./data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-950 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950 text-white dark:border dark:border-white/10 dark:bg-white/8 dark:text-white">
            A
          </span>
          Awake Studio
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white! transition hover:bg-zinc-800 dark:border dark:border-sky-400/20 dark:bg-white dark:text-zinc-950! dark:hover:bg-sky-50"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
