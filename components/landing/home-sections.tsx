import Image from "next/image";

import {
  ArrowRightUpIcon,
  CreativityIcon,
  HalfStartIcon,
  InnovationIcon,
  PlusIcon,
  StartIcon,
  StrategyIcon,
} from "@/public/icon";
import { listLogo, metrics } from "./data";
import { AwardsSection } from "./sections/awards-section";
import { CtaSection } from "./sections/cta-section";
import { FaqSection } from "./sections/faq-section";
import { PricingSection } from "./sections/pricing-section";
import { ProjectsSection } from "./sections/projects-section";
import { ServicesSection } from "./sections/services-section";
import { SiteFooter } from "./sections/site-footer";
import { TeamSection } from "./sections/team-section";
import { TestimonialsSection } from "./sections/testimonials-section";

function DeferredSection({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
      }}
    >
      {children}
    </div>
  );
}

function HeroSection() {
  const heroAvatars = [
    "/images/Ellipse%2021.png",
    "/images/Ellipse%2022.png",
    "/images/Ellipse%2023.png",
    "/images/Ellipse%2024.png",
  ];

  return (
    <section id="about" className="relative px-6 pb-20 pt-34 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-310">
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mt-6 font-semibold text-4xl leading-[1.3] text-[#1B1D1E] dark:text-white sm:text-6xl lg:text-[6rem]">
            Building bold brands
            <br />
            with{" "}
            <span className="font-instrument-serif font-normal italic text-[#1B1D1E] dark:text-white/75">
              thoughtful design
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-sm text-[#1B1D1E]/60 dark:text-zinc-400 sm:text-base">
            At Awake, we help small startups tackle the world’s biggest
            challenges with tailored solutions, guiding you from strategy to
            success in a competitive market.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#pricing"
              className="flex justify-between items-center min-w-[256px] rounded-full bg-indigo-600 px-7 py-4 text-sm font-semibold text-white! transition hover:bg-indigo-500 dark:shadow-[0_14px_36px_rgba(79,70,229,0.32)]"
            >
              <p>Get Started</p>
              <span className="w-8 h-8 bg-white flex justify-center items-center rounded-full">
                <ArrowRightUpIcon />
              </span>
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
                  {[...Array(5)].map((_, index) => {
                    if (index === 4)
                      return (
                        <span key={index} className="text-sm leading-none">
                          <HalfStartIcon />
                        </span>
                      );
                    return (
                      <span key={index} className="text-sm leading-none">
                        <StartIcon />
                      </span>
                    );
                  })}
                </div>
                <p className="text-sm text-[#1B1D1E]/60 dark:text-white">
                  Trusted by 1000+ clients
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
  const logoWidths = [164, 155, 135, 187, 192];

  return (
    <section className="relative px-6 py-10 lg:px-8">
      <div className="relative mx-auto max-w-7xl py-10">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
          <span className="h-px flex-1 bg-zinc-200 dark:bg-linear-to-r dark:from-transparent dark:via-sky-300/35 dark:to-transparent" />
          <p className="text-center text-base text-[#1B1D1E]/60 dark:rounded-full dark:border dark:border-white/10 dark:bg-white/4 dark:px-5 dark:py-2 dark:text-zinc-200 dark:shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
            Loved by 1000+ big and small brands around the worlds
          </p>
          <span className="h-px flex-1 bg-zinc-200 dark:bg-linear-to-r dark:from-transparent dark:via-sky-300/35 dark:to-transparent" />
        </div>
        <div className="mt-10 grid min-h-24 grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {listLogo.map((logo, index) => (
            <div
              key={logo}
              className="flex h-10 w-full items-center justify-center"
              style={{ maxWidth: `${logoWidths[index] ?? 164}px` }}
            >
              <Image
                src={logo}
                alt={`Brand logo ${index + 1}`}
                width={logoWidths[index] ?? 164}
                height={40}
                className="h-10 w-auto object-contain object-center transition duration-300 dark:brightness-0 dark:invert dark:opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="relative -mt-10 overflow-hidden px-6 py-24 lg:px-8 dark:bg-zinc-950">
      <div className="relative mx-auto max-w-310">
        <div className="mx-auto max-w-6xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="text-2xl font-medium text-[#1B1D1E] dark:text-white sm:text-[48px]">
              We fuse
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-violet-100 px-5 py-2 text-3xl font-medium text-violet-500 dark:bg-violet-400/12 dark:text-violet-300 sm:text-[48px] font-instrument-serif">
              <span>
                <CreativityIcon />
              </span>
              Creativity
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-5 py-2 text-3xl font-medium text-sky-500 dark:bg-sky-400/12 dark:text-sky-300 sm:text-[48px] font-instrument-serif">
              <span>
                <InnovationIcon />
              </span>
              Innovation
            </span>
            <span className="text-4xl font-medium text-[#1B1D1E] dark:text-white sm:text-5xl">
              &amp;
            </span>
            <span className="inline-flex items-center gap-3 rounded-full bg-amber-100 px-5 py-2 text-3xl font-medium text-amber-500 dark:bg-amber-300/12 dark:text-amber-300 sm:text-[48px] font-instrument-serif">
              <span>
                <StrategyIcon />
              </span>
              Strategy
            </span>
          </div>
          <p className="mx-auto tracking-tight font-medium mt-8 text-2xl leading-tight text-[#1B1D1E] dark:text-zinc-300 sm:text-[48px] sm:leading-tight">
            to craft exceptional, digital experiences strategy, and technology
            to drive exceptional, impactful results.
          </p>
        </div>
        <div className="mt-16 grid gap-0 overflow-hidden rounded-4xl border border-zinc-200/80 bg-white/70 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-white/8 dark:bg-[#1E2022] dark:shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:grid-cols-3">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`px-8 py-12 text-center ${index < metrics.length - 1 ? "border-b border-zinc-200/80 md:border-b-0 md:border-r" : ""} border-zinc-200/80 dark:border-white/8`}
            >
              <div className="w-full flex justify-center">
                <p className="relative text-[128px] text-zinc-950 dark:text-white w-fit text-center font-medium">
                  <span className="absolute top-8 -left-10.5 text-[#1B1D1E] dark:text-white">
                    <PlusIcon className="text-[#1B1D1E] dark:text-white" />{" "}
                  </span>
                  {metric.value}
                </p>
              </div>

              <p className="mt-4 text-base text-[#1B1D1E]/60 dark:text-zinc-400">
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
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-96 w-[70rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(217,243,252,0.84)_0%,rgba(255,255,255,0.94)_50%,rgba(253,241,211,0.84)_100%)] blur-[72px] sm:h-120 sm:w-[96rem] sm:blur-[110px] lg:h-145 lg:w-[120rem] lg:blur-[160px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.14)_0%,rgba(15,23,42,0.2)_50%,rgba(245,158,11,0.14)_100%)]" />
        </div>
        <HeroSection />
        <LogoStrip />
      </div>
      <DeferredSection>
        <MetricsSection />
      </DeferredSection>
      <DeferredSection>
        <ServicesSection />
      </DeferredSection>
      <DeferredSection>
        <ProjectsSection />
      </DeferredSection>
      <DeferredSection>
        <TeamSection />
      </DeferredSection>
      <DeferredSection>
        <TestimonialsSection />
      </DeferredSection>
      <DeferredSection>
        <PricingSection />
      </DeferredSection>
      <DeferredSection>
        <FaqSection />
      </DeferredSection>
      <DeferredSection>
        <AwardsSection />
      </DeferredSection>
      <DeferredSection>
        <CtaSection />
      </DeferredSection>
      <DeferredSection>
        <SiteFooter />
      </DeferredSection>
    </>
  );
}
