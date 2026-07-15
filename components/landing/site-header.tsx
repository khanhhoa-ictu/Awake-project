"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LogoIcon } from "@/public/icon";

import { ThemeToggle } from "./theme-toggle";

const marketingNavItems = [
  { label: "About us", href: "/#about", hash: "#about" },
  { label: "Services", href: "/#services", hash: "#services" },
  { label: "Work", href: "/#work", hash: "#work" },
  { label: "Team", href: "/#team", hash: "#team" },
  { label: "Pricing", href: "/#pricing", hash: "#pricing" },
  { label: "Awards", href: "/#awards", hash: "#awards" },
];

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function smoothScrollWindowTo(top: number) {
  const startTop = window.scrollY;
  const distance = top - startTop;
  const duration = 700;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  };

  window.requestAnimationFrame(animate);
}

export function MarketingHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHash, setActiveHash] = useState("#about");
  const [isScrolled, setIsScrolled] = useState(false);
  const headerOffset = 92;

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    event.preventDefault();

    if (pathname !== "/") {
      window.sessionStorage.setItem("pending-home-hash", hash);
      router.push("/");
      return;
    }

    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) {
      return;
    }

    window.history.pushState(null, "", hash);
    setActiveHash(hash);
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    smoothScrollWindowTo(Math.max(0, targetTop));
  };

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash || "#about");
    };

    const frame = window.requestAnimationFrame(syncHash);
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const pendingHash = window.sessionStorage.getItem("pending-home-hash");
    if (!pendingHash) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.querySelector(pendingHash);
      if (!(target instanceof HTMLElement)) {
        window.sessionStorage.removeItem("pending-home-hash");
        return;
      }

      window.history.replaceState(null, "", pendingHash);
      setActiveHash(pendingHash);

      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      smoothScrollWindowTo(Math.max(0, targetTop));

      window.sessionStorage.removeItem("pending-home-hash");
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [headerOffset, pathname]);

  useEffect(() => {
    const syncScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScroll);
    };
  }, []);

  const currentHash = pathname === "/" ? activeHash : "";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition duration-150 ${
          isScrolled
            ? "border-b border-black/6 bg-white/70 backdrop-blur-xl dark:border-white/8 dark:bg-[#0c0f12]/84"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-2xl font-semibold text-[#1B1D1E] dark:text-white"
          >
            <span className="text-[#1B1D1E] dark:text-white">
              <LogoIcon />
            </span>
            Awake
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-black/5 p-1 lg:flex dark:bg-white/6">
            {marketingNavItems.map((item) => {
              const isActive = currentHash === item.hash;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleSectionNavigation(event, item.hash)}
                  className={`rounded-full px-4 py-2.5 text-sm transition ${
                    isActive
                      ? "border border-black/8 bg-white text-[#1B1D1E] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white dark:text-[#1B1D1E]!"
                      : "text-[#1B1D1E]/60 hover:text-[#1B1D1E] dark:text-white/55 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className={`hidden rounded-full px-4 py-2 text-sm transition lg:inline-flex border border-[#1B1D1E]/15 text-[#1B1D1E] hover:border-[#1B1D1E]/25 dark:border-white/12 dark:text-white dark:hover:border-white/25`}
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className={`hidden rounded-full px-4 py-2 text-sm transition lg:inline-flex border border-[#1B1D1E]/15 text-[#1B1D1E] hover:border-[#1B1D1E]/25 dark:border-white/12 dark:text-white dark:hover:border-white/25`}
            >
              Sign Up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
