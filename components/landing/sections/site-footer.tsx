import Link from "next/link";

import {
  DribbleBlurIcon,
  InstagramIcon,
  LinkedinIcon,
  LogoIcon,
  XIcon,
} from "@/public/icon";

const sitemapLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "About us", href: "/#team" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
];

const otherPages = [
  { label: "Error 404", href: "/error-404" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Documentation", href: "#" },
];

const socialLinks = [
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedinIcon /> },
  { label: "Dribbble", href: "#", icon: <DribbleBlurIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
];

export function SiteFooter() {
  return (
    <footer className="px-6 pb-12 pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl px-8 py-14 sm:px-12 dark:rounded-[28px] dark:border dark:border-white/8 dark:bg-[#101214] dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-[#1B1D1E] dark:text-white"
            >
              <span className="text-[#1B1D1E] dark:text-white">
                <LogoIcon />
              </span>
              Awake
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#1B1D1E]/60 dark:text-white/72">
              Empowering businesses with innovative solutions. Let&apos;s create
              something amazing together.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[#1B1D1E]/55 dark:text-white/72">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  aria-label={socialLink.label}
                  className="transition hover:text-[#1B1D1E] dark:hover:text-white"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-[#1B1D1E] dark:text-white">
              Sitemap
            </p>
            <div className="mt-5 grid gap-3">
              {sitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-[#1B1D1E]/60! transition hover:text-[#1B1D1E] dark:text-white/60! dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-[#1B1D1E] dark:text-white">
              Other Pages
            </p>
            <div className="mt-5 grid gap-3">
              {otherPages.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-[#1B1D1E]/60! transition hover:text-[#1B1D1E] dark:text-white/60! dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-base font-medium text-[#1B1D1E] dark:text-white">
              Contact Details
            </p>
            <div className="mt-5 grid gap-3 text-base text-[#1B1D1E]/60 dark:text-white/72">
              <p>81 Rivington Street London</p>
              <p>EC2A 3AY</p>
              <a
                href="mailto:hello@awake.agency"
                className="transition hover:text-[#1B1D1E] dark:hover:text-white"
              >
                hello@awake.agency
              </a>
              <a
                href="tel:01051923556"
                className="transition hover:text-[#1B1D1E] dark:hover:text-white"
              >
                0105 192 356
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200/80 pt-10 dark:border-white/10">
          <p className="text-center text-xs text-[#1B1D1E]/35 dark:text-white/45">
            &copy;2025 Awake. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
