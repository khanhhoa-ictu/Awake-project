import { AwardIcon, DribbleIcon, FramerIcon } from "@/public/icon";
import { awards } from "../data";

export function AwardsSection() {
  const awardIcons = [
    <FramerIcon key="framer" />,
    <DribbleIcon key="dribbble" />,
    <AwardIcon key="award" />,
  ];

  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-[52rem] text-center text-[48px] leading-14 font-medium tracking-tight text-[#1B1D1E] dark:text-white">
          Accolades and achievements celebrating our{" "}
          <span className="font-instrument-serif font-normal italic">
            design excellence
          </span>
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {awards.map((award, index) => (
            <article
              key={award.title}
              className="flex min-h-88 flex-col rounded-4xl border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#1E2022] dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)]"
            >
              <div className="inline-flex h-18 w-18 items-center justify-center rounded-3xl dark:bg-white">
                {awardIcons[index] ?? <AwardIcon />}
              </div>
              <h3 className="mt-10 text-base tracking-tight text-[#1B1D1E] dark:text-white">
                {award.title}
              </h3>
              <p className="mt-4 font-medium text-2xl text-[#1B1D1E] dark:text-white/60">
                {award.description}
              </p>
              <div className="mt-auto pt-10">
                <p className="text-base uppercase text-[#1B1D1E] dark:text-white/35">
                  {award.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
