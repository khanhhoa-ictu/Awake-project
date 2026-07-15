import Link from "next/link";

import {
  ArrowDownIcon,
  ArrowRightUpIcon,
  ArrowRightUpWhiteIcon,
  ExplainIcon,
  LogoIcon,
} from "@/public/icon";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { ThemeToggle } from "@/components/landing/theme-toggle";

const marketingNavItems = [
  { label: "About us", href: "/#team" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Team", href: "/#team" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Awards", href: "/#awards" },
];

const contactFaqs = [
  {
    question: "What services does Awake Agency offer?",
    answer:
      "We combine brand strategy, product design, launch-ready websites and frontend implementation so growing teams can move with one cohesive creative partner.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most focused landing page projects take between 2 and 4 weeks. Larger product, brand or marketing engagements are scoped in phases so we can ship value earlier.",
  },
  {
    question: "How is pricing structured at Awake Agency?",
    answer:
      "We usually recommend a fixed-scope package or a monthly retainer depending on your goals, timeline and how much ongoing iteration your team needs.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
  },
  {
    question: "How often will I receive updates on my project?",
    answer:
      "You can expect regular progress updates throughout the week, with clear checkpoints for feedback, next steps and anything we need from your side.",
  },
  {
    question: "How do I get started with Awake Agency?",
    answer:
      "Send us your goals, timeline and any current materials. We will review the brief, suggest the right engagement model and map out the next steps with you.",
  },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/6 bg-white/70 backdrop-blur-xl dark:border-white/8 dark:bg-[#0c0f12]/84">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-semibold text-[#1B1D1E] dark:text-white"
        >
          <span className="text-[#1B1D1E] dark:text-white">
            <LogoIcon />
          </span>
          Awake
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-black/5 p-1 lg:flex dark:bg-white/6">
          {marketingNavItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2.5 text-sm transition ${
                index === 0
                  ? "border border-black/8 bg-white text-[#1B1D1E] shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white dark:text-[#1B1D1E]"
                  : "text-[#1B1D1E]/60 hover:text-[#1B1D1E] dark:text-white/55 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full border border-[#1B1D1E]/15 px-4 py-2 text-sm text-[#1B1D1E] transition hover:border-[#1B1D1E]/25 lg:inline-flex dark:border-white/12 dark:text-white dark:hover:border-white/25"
          >
            Sign In
          </a>
          <a
            href="#"
            className="hidden rounded-full bg-[#1B1D1E] px-4 py-2 text-sm text-white transition hover:bg-black lg:inline-flex dark:bg-white dark:text-[#1B1D1E] dark:hover:bg-zinc-100"
          >
            Sign Up
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ContactField({
  label,
  placeholder,
  textarea = false,
}: {
  label: string;
  placeholder: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-medium tracking-[0.01em] text-[#1B1D1E] dark:text-white">
        {label}
      </span>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-4 text-base text-[#1B1D1E] outline-none transition placeholder:text-[#1B1D1E]/45 focus:border-[#1B1D1E]/25 dark:border-white/10 dark:bg-[#17191b] dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/20"
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-base text-[#1B1D1E] outline-none transition placeholder:text-[#1B1D1E]/45 focus:border-[#1B1D1E]/25 dark:border-white/10 dark:bg-[#17191b] dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/20"
        />
      )}
    </label>
  );
}

function ContactSelect({
  label,
  defaultValue,
  options,
}: {
  label: string;
  defaultValue: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-base font-medium tracking-[0.01em] text-[#1B1D1E] dark:text-white">
        {label}
      </span>
      <div className="relative">
        <select
          defaultValue={defaultValue}
          className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-4 pr-12 text-base text-[#1B1D1E] outline-none transition focus:border-[#1B1D1E]/25 dark:border-white/10 dark:bg-[#17191b] dark:text-white dark:focus:border-white/20"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1B1D1E]/45 dark:text-white/40">
          <ArrowDownIcon />
        </span>
      </div>
    </label>
  );
}

function ContactFormSection() {
  return (
    <section className="px-6 pb-20 pt-14 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-[#1B1D1E] sm:text-[48px] sm:leading-[1.2] dark:text-white">
            Love to hear from you,
            <br />
            Get in{" "}
            <span className="font-instrument-serif font-normal italic">
              touch
            </span>
          </h1>
        </div>

        <div className="mt-14 rounded-3xl border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10 dark:border-white/8 dark:bg-[#111315] dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <ContactField label="Your Name" placeholder="Enter your name" />
              <ContactField label="Your email" placeholder="Enter your email" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ContactSelect
                label="What are you interested"
                defaultValue="Design & Branding"
                options={[
                  "Design & Branding",
                  "Web Design",
                  "Product Design",
                  "Frontend Development",
                ]}
              />
              <ContactSelect
                label="Project budget"
                defaultValue="Select your budget"
                options={[
                  "Select your budget",
                  "$2k - $5k",
                  "$5k - $10k",
                  "$10k+",
                ]}
              />
            </div>

            <ContactField
              label="Message"
              placeholder="Let tell us know your project about"
              textarea
            />

            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full bg-[#1B1D1E] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black dark:bg-white dark:text-[#1B1D1E] dark:hover:bg-zinc-100"
            >
              Send message
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1B1D1E] dark:bg-[#1B1D1E] dark:text-white">
                <span className="dark:hidden">
                  <ArrowRightUpIcon />
                </span>
                <span className="hidden dark:inline">
                  <ArrowRightUpWhiteIcon />
                </span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactFaqSection() {
  return (
    <section className="px-6 pb-8 pt-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-[#1B1D1E] sm:text-[48px] sm:leading-[1.2] dark:text-white">
            Got questions?
            <br />
            We&apos;ve got{" "}
            <span className="font-instrument-serif font-normal italic">
              answers
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-5xl space-y-4">
          {contactFaqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 3}
              className="group rounded-2xl border border-black/10 bg-white px-6 py-6 shadow-[0_8px_28px_rgba(15,23,42,0.03)] transition open:bg-black/4 dark:border-white/10 dark:bg-[#111315] dark:open:bg-white/6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-[#1B1D1E] sm:text-2xl dark:text-white">
                    {faq.question}
                  </h3>
                  {index === 3 ? (
                    <p className="mt-3 max-w-4xl text-sm leading-6 text-[#1B1D1E]/55 dark:text-white/60">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
                <span className="mt-1 text-[#1B1D1E]/45 transition duration-200 group-open:rotate-45 dark:text-white/45">
                  <ExplainIcon />
                </span>
              </summary>
              {index !== 3 ? (
                <p className="mt-4 max-w-4xl text-sm leading-6 text-[#1B1D1E]/55 dark:text-white/60">
                  {faq.answer}
                </p>
              ) : null}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbfdff_0%,#ffffff_22%,#fffdfa_100%)] dark:bg-[linear-gradient(180deg,#090b0f_0%,#0c1117_28%,#090b0f_100%)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-136 w-[120rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(217,243,252,0.9)_0%,rgba(255,255,255,0.96)_50%,rgba(253,241,211,0.9)_100%)] blur-[160px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.18)_0%,rgba(15,23,42,0.22)_50%,rgba(245,158,11,0.18)_100%)]" />
        </div>

        <div className="relative">
          <MarketingHeader />
          <ContactFormSection />
        </div>
      </div>

      <ContactFaqSection />
      <SiteFooter />
    </div>
  );
}
