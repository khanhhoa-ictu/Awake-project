import { faqs } from "../data";
import { SectionHeading } from "../section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Got questions? We&apos;ve got answers"
          description="Structured content like this helps both visitors and search engines understand the offer more clearly."
        />
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-[1.5rem] border border-zinc-200 bg-white px-6 py-5 shadow-[0_12px_50px_rgba(15,23,42,0.04)] dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] dark:shadow-[0_16px_45px_rgba(0,0,0,0.2)]"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-zinc-950 dark:text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-zinc-400 transition group-open:rotate-45 dark:text-zinc-500">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
