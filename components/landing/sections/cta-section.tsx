import { ArrowRightUpIcon, ArrowRightUpWhiteIcon } from "@/public/icon";

export function CtaSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-full overflow-hidden rounded-4xl border border-zinc-200/80 bg-[linear-gradient(90deg,rgba(214,239,255,0.9)_0%,rgba(255,255,255,0.98)_24%,rgba(255,255,255,0.98)_76%,rgba(255,241,194,0.9)_100%)] px-8 py-20 text-center shadow-[0_24px_90px_rgba(15,23,42,0.06)] sm:px-12 dark:border-white/10 dark:bg-[linear-gradient(90deg,rgba(34,211,238,0.09)_0%,rgba(12,14,20,0.98)_24%,rgba(12,14,20,0.98)_76%,rgba(250,204,21,0.09)_100%)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
          <h2 className="mx-auto text-balance text-[48px] font-medium tracking-tight text-[#1B1D1E] dark:text-white lg:text-[3.5rem] lg:leading-[1.05]">
            Innovative solutions for bold brands
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#1B1D1E]/60 dark:text-white/60">
            Looking to elevate your brand? We craft immersive experiences that
            captivate, engage, and make your business unforgettable in every
            interaction.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1B1D1E] px-4 py-2.5 text-[15px] font-medium text-white! transition hover:bg-black dark:bg-white dark:text-[#1B1D1E]! dark:hover:bg-zinc-100"
          >
            Let&apos;s Collaborate
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-white dark:bg-[#1B1D1E]">
              <span className="dark:hidden">
                <ArrowRightUpIcon />
              </span>
              <span className="hidden dark:inline">
                <ArrowRightUpWhiteIcon />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
