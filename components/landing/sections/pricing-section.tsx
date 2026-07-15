import { ArrowRightUpWhiteIcon, CheckIcon } from "@/public/icon";
import { pricingPlans } from "../data";

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-100 text-center text-[48px] leading-14 font-medium tracking-tight">
            Pick the plan that fits your{" "}
            <span className="font-instrument-serif font-normal italic">
              start-up
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {pricingPlans.map((plan) => {
            const isPro = plan.name === "Pro";

            return (
              <article
                key={plan.name}
                className={`rounded-4xl p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] ${
                  isPro
                    ? "bg-[#5338FF] text-white dark:border dark:border-indigo-300/20 dark:bg-[linear-gradient(180deg,rgba(99,102,241,0.92),rgba(79,70,229,0.9))]"
                    : "bg-[#FDEA83] text-[1B1D1E] dark:border dark:border-amber-300/20 dark:bg-[linear-gradient(180deg,rgba(250,204,21,0.9),rgba(245,158,11,0.82))] dark:text-[#1B1D1E]"
                }`}
              >
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:gap-6">
                  <div className="flex flex-col">
                    <span className="inline-flex w-fit rounded-full bg-[#1B1D1E] px-6 py-[9px] text-sm font-medium text-white">
                      {plan.name}
                    </span>

                    <p
                      className={`mt-4 max-w-62 text-base leading-[1.45] ${
                        isPro ? "text-white/60" : "text-[#1B1D1E]/60"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mt-auto pt-10">
                      <div className="flex items-end gap-1.5">
                        <p className="text-[3.5rem] leading-none tracking-[-0.04em]">
                          {plan.price}
                        </p>
                        <p
                          className={`mb-1 text-base ${
                            isPro ? "text-white/60" : "text-[#1B1D1E]/60"
                          }`}
                        >
                          /month
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-white px-4 py-2.5 text-[15px] font-medium text-[#1B1D1E]! transition hover:bg-zinc-100"
                      >
                        Let&apos;s Collaborate
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1B1D1E] text-white">
                          <ArrowRightUpWhiteIcon />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={`hidden md:block ${
                      isPro ? "bg-white/12" : "bg-[#1B1D1E]/10"
                    }`}
                  />

                  <div>
                    <p
                      className={`text-base ${
                        isPro ? "text-white font-medium" : "text-[#1B1D1E] font-medium"
                      }`}
                    >
                      Features
                    </p>

                    <ul className="mt-5 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-base leading-7 ${
                            isPro ? "text-white" : "text-[#1B1D1E]"
                          }`}
                        >
                          <span
                            className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center ${
                              isPro ? "text-white" : "text-[#1B1D1E]"
                            }`}
                          >
                            <CheckIcon />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
