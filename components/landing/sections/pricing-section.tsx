import { pricingPlans } from "../data";

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Pricing
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[0.95]">
            Pick the plan that
            <br />
            fits your{" "}
            <span className="font-serif text-zinc-700 italic font-normal dark:text-zinc-200">
              start-up
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pricingPlans.map((plan) => {
            const isPro = plan.name === "Pro";

            return (
              <article
                key={plan.name}
                className={`rounded-[2rem] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.05)] ${
                  isPro
                    ? "bg-[#5338ff] text-white dark:border dark:border-indigo-300/20 dark:bg-[linear-gradient(180deg,rgba(99,102,241,0.92),rgba(79,70,229,0.9))]"
                    : "bg-[#f6e57a] text-zinc-950 dark:border dark:border-amber-300/20 dark:bg-[linear-gradient(180deg,rgba(250,204,21,0.9),rgba(245,158,11,0.82))] dark:text-zinc-950"
                }`}
              >
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
                        isPro
                          ? "border border-white/18 bg-black/12 text-white"
                          : "border border-zinc-950/10 bg-black/80 text-white"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <p
                      className={`mt-6 max-w-[14rem] text-sm leading-7 ${
                        isPro ? "text-white/76" : "text-zinc-800/75"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mt-12 flex items-end gap-2">
                      <p className="font-serif text-6xl tracking-tight">{plan.price}</p>
                      <p
                        className={`mb-2 text-sm ${
                          isPro ? "text-white/65" : "text-zinc-800/60"
                        }`}
                      >
                        /month
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className={`mt-8 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition ${
                        isPro
                          ? "bg-white text-zinc-950 hover:bg-zinc-200"
                          : "bg-zinc-950 text-white hover:bg-zinc-800"
                      }`}
                    >
                      Let&apos;s Collaborate
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          isPro ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"
                        }`}
                      >
                        ↗
                      </span>
                    </a>
                  </div>

                  <div>
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${
                        isPro ? "text-white/74" : "text-zinc-800/72"
                      }`}
                    >
                      Features
                    </p>
                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-sm leading-7 ${
                            isPro ? "text-white/92" : "text-zinc-900"
                          }`}
                        >
                          <span
                            className={`mt-2 inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${
                              isPro
                                ? "bg-white/12 text-white"
                                : "bg-white/55 text-zinc-900"
                            }`}
                          >
                            ✓
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
