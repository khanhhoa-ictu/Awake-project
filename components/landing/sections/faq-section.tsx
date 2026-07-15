import { ExplainIcon } from "@/public/icon";
import { faqs } from "../data";

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mx-auto max-w-100 text-center text-[48px] leading-14 font-medium tracking-tight text-[#1B1D1E] dark:text-white">
          Got questions? We’ve got{" "}
          <span className="font-instrument-serif font-normal italic">
            answers
          </span>
        </h2>
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-zinc-200 bg-white px-6 py-5 shadow-[0_12px_50px_rgba(15,23,42,0.04)] transition-colors open:bg-[#1B1D1E]/10 dark:border-white/10 dark:bg-[#1E2022] dark:shadow-[0_16px_45px_rgba(0,0,0,0.22)] dark:open:border-white/16 dark:open:bg-[#2A2D2F]"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-2xl font-medium text-[#1B1D1E] dark:text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-zinc-400 transition duration-200 group-open:rotate-45 dark:text-zinc-300">
                    <ExplainIcon />
                  </span>
                </div>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#1B1D1E]/60 dark:text-white/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
