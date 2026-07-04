import Image from "next/image";

import { metrics, partnerLogos } from "./data";
import { AwardsSection } from "./sections/awards-section";
import { CtaSection } from "./sections/cta-section";
import { FaqSection } from "./sections/faq-section";
import { PricingSection } from "./sections/pricing-section";
import { ProjectsSection } from "./sections/projects-section";
import { ServicesSection } from "./sections/services-section";
import { SiteFooter } from "./sections/site-footer";
import { TeamSection } from "./sections/team-section";
import { TestimonialsSection } from "./sections/testimonials-section";

function HeroSection() {
  const heroAvatars = [
    "/images/Ellipse%2021.png",
    "/images/Ellipse%2022.png",
    "/images/Ellipse%2023.png",
    "/images/Ellipse%2024.png",
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-44 -z-10 h-134 bg-[linear-gradient(90deg,rgba(210,240,255,0.78)_0%,rgba(247,244,236,0.92)_48%,rgba(255,239,186,0.78)_100%)] dark:bg-[linear-gradient(90deg,rgba(24,42,58,0.78)_0%,rgba(14,18,28,0.92)_48%,rgba(48,39,20,0.68)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-120 bg-[radial-gradient(circle_at_20%_50%,rgba(173,230,255,0.75),transparent_32%),radial-gradient(circle_at_82%_42%,rgba(255,229,154,0.55),transparent_28%)] opacity-90 dark:bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_42%,rgba(250,204,21,0.12),transparent_24%)]" />
      <div className="mx-auto max-w-310">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Creative agency for bold startups
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-zinc-950 dark:text-white sm:text-7xl lg:text-[6.5rem]">
            Building bold brands
            <br />
            with <span className="italic text-zinc-700 dark:text-zinc-300">thoughtful design</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Awake helps ambitious founders launch sharper identities, better product experiences
            and conversion-focused websites that feel premium from the very first scroll.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#pricing"
              className="min-w-[256px] rounded-full bg-indigo-600 px-7 py-4 text-sm font-semibold text-white! transition hover:bg-indigo-500 dark:shadow-[0_14px_36px_rgba(79,70,229,0.32)]"
            >
              View pricing
            </a>
            <div className="flex items-center gap-4 text-left">
              <div className="flex -space-x-3">
                {heroAvatars.map((src, index) => (
                  <div
                    key={src}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-zinc-100 shadow-[0_8px_20px_rgba(15,23,42,0.08)] dark:border-zinc-900"
                  >
                    <Image
                      src={src}
                      alt={`Client avatar ${index + 1}`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-1 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-sm leading-none">
                      *
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Trusted by 1000+ clients
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Product teams, founders and launch partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const renderLogoMark = (variant: string, tone: string) => {
    if (variant === "spark") {
      return (
        <span className={`relative inline-flex h-8 w-8 items-center justify-center ${tone}`}>
          <span className="absolute h-3 w-3 rounded-full bg-current" />
          {[...Array(8)].map((_, index) => (
            <span
              key={index}
              className="absolute h-1 w-4 rounded-full bg-current"
              style={{ transform: `rotate(${index * 45}deg)` }}
            />
          ))}
        </span>
      );
    }

    if (variant === "orbit") {
      return (
        <span className={`relative inline-flex h-8 w-8 items-center justify-center ${tone}`}>
          <span className="h-7 w-7 rounded-full border-[2.5px] border-current" />
          <span className="absolute h-2.5 w-6 -rotate-35 rounded-full border-[2px] border-current" />
        </span>
      );
    }

    if (variant === "shield") {
      return (
        <span className={`relative inline-flex h-8 w-8 items-center justify-center ${tone}`}>
          <span className="absolute inset-0 rounded-[0.7rem] border-[2.5px] border-current [clip-path:polygon(18%_10%,82%_10%,82%_52%,50%_90%,18%_52%)]" />
          <span className="absolute h-4 w-[2.5px] rounded-full bg-current" />
          <span className="absolute h-[2.5px] w-4 rounded-full bg-current" />
        </span>
      );
    }

    if (variant === "nodes") {
      return (
        <span className={`grid grid-cols-3 gap-0.5 ${tone}`}>
          {[...Array(9)].map((_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full bg-current ${
                index % 2 === 0 ? "opacity-100" : "opacity-75"
              }`}
            />
          ))}
        </span>
      );
    }

    return (
      <span className={`relative inline-flex h-8 w-8 items-center justify-center ${tone}`}>
        <span className="absolute h-3 w-7 -skew-x-30 rounded-full bg-current" />
        <span className="absolute h-3 w-7 translate-x-1.5 skew-x-30 rounded-full bg-current" />
      </span>
    );
  };

  return (
    <section className="px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl py-10">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
          <span className="h-px flex-1 bg-zinc-200 dark:bg-linear-to-r dark:from-transparent dark:via-sky-300/35 dark:to-transparent" />
          <p className="text-center text-sm text-zinc-500 dark:rounded-full dark:border dark:border-white/10 dark:bg-white/[0.04] dark:px-5 dark:py-2 dark:text-zinc-200 dark:shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            Loved by 1000+ big and small brands around the worlds
          </p>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-linear-to-r dark:from-transparent dark:via-sky-300/35 dark:to-transparent" />
        </div>
        <div className="mt-10 grid items-center gap-x-10 gap-y-8 text-zinc-950 dark:rounded-4xl dark:border dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] dark:px-8 dark:py-8 dark:text-white dark:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((logo) => (
            <div key={logo.name + logo.variant} className="flex items-center justify-center gap-3">
              {renderLogoMark(logo.variant, logo.tone)}
              <div className="leading-none">
                {logo.name.includes("University") ? (
                  <>
                    <p className="text-[1.35rem] font-semibold tracking-tight text-inherit">
                      Logoipsum
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">University</p>
                  </>
                ) : (
                  <p className="text-[1.65rem] font-semibold tracking-tight text-inherit">
                    {logo.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="text-4xl font-medium text-zinc-950 dark:text-white sm:text-5xl">
              We fuse
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-violet-100 px-5 py-2 text-3xl font-medium text-violet-500 dark:bg-violet-400/12 dark:text-violet-300 sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-lg dark:bg-white/8">
                +
              </span>
              Creativity
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-5 py-2 text-3xl font-medium text-sky-500 dark:bg-sky-400/12 dark:text-sky-300 sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-lg dark:bg-white/8">
                -&gt;
              </span>
              Innovation
            </span>
            <span className="text-4xl font-medium text-zinc-950 dark:text-white sm:text-5xl">
              &amp;
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-amber-100 px-5 py-2 text-3xl font-medium text-amber-500 dark:bg-amber-300/12 dark:text-amber-300 sm:text-4xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-lg dark:bg-white/8">
                &lt;&gt;
              </span>
              Strategy
            </span>
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-2xl leading-tight text-zinc-700 dark:text-zinc-300 sm:text-4xl sm:leading-tight">
            to craft exceptional, digital experiences strategy, and technology to drive
            exceptional, impactful results.
          </p>
        </div>
        <div className="mt-16 grid gap-0 overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/70 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:grid-cols-3">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`px-8 py-12 text-center ${index < metrics.length - 1 ? "border-b border-zinc-200/80 md:border-b-0 md:border-r" : ""} border-zinc-200/80 dark:border-white/8`}
            >
              <p className="font-serif text-7xl tracking-tight text-zinc-950 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <MetricsSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <AwardsSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
