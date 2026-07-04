import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : systemPrefersDark
          ? "dark"
          : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();
`;

export const metadata: Metadata = {
  title: {
    default: "Awake Studio",
    template: "%s | Awake Studio",
  },
  description:
    "Creative agency landing page built with Next.js, inspired by the Awake Figma template.",
  openGraph: {
    title: "Awake Studio",
    description:
      "Creative agency landing page built with Next.js, inspired by the Awake Figma template.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awake Studio",
    description:
      "Creative agency landing page built with Next.js, inspired by the Awake Figma template.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
