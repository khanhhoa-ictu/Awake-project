import { services } from "../data";
import { SectionHeading } from "../section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Where innovation meets aesthetics" description="" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <article
              key={service.title}
              className={`min-h-48 rounded-[1.75rem] border border-white/70 bg-linear-to-br ${service.accent} p-8 transition hover:-translate-y-1 dark:border-white/8 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]`}
            >
              <div className="text-zinc-950 dark:text-white">{service.icon}</div>
              <h3 className="mt-10 max-w-[11rem] text-2xl leading-tight font-semibold text-zinc-950 dark:text-white">
                {service.title}
              </h3>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-zinc-950 px-8 py-8 text-white lg:flex-row lg:items-center dark:border dark:border-sky-400/10 dark:bg-[linear-gradient(135deg,rgba(17,24,39,0.96),rgba(10,14,24,0.96))] dark:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          <p className="max-w-md text-2xl leading-tight font-medium">
            See Our Work in Action. Start Your Creative Journey with Us!
          </p>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#pricing"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950! transition hover:bg-zinc-100"
            >
              View pricing
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
