import { awards } from "../data";
import { SectionHeading } from "../section-heading";

export function AwardsSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Accolades that celebrate design excellence"
          description="This section mirrors the three-card editorial rhythm from the Figma composition."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {awards.map((award) => (
            <article
              key={award.title}
              className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)]"
            >
              <div className="h-10 w-10 rounded-full bg-zinc-950/5 dark:bg-white/10" />
              <h3 className="mt-10 text-2xl font-semibold text-zinc-950 dark:text-white">
                {award.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {award.description}
              </p>
              <p className="mt-10 text-sm uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                {award.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
