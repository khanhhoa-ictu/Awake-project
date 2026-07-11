export function CtaSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-full overflow-hidden rounded-3xl border border-zinc-200/80 bg-[linear-gradient(90deg,rgba(214,239,255,0.9)_0%,rgba(255,255,255,0.98)_24%,rgba(255,255,255,0.98)_76%,rgba(255,241,194,0.9)_100%)] px-8 py-20 text-center shadow-[0_24px_90px_rgba(15,23,42,0.06)] sm:px-12 dark:border-white/10 dark:bg-[linear-gradient(90deg,rgba(34,211,238,0.09)_0%,rgba(12,14,20,0.98)_24%,rgba(12,14,20,0.98)_76%,rgba(250,204,21,0.09)_100%)] dark:shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
          <h2 className="text-balance text-4xl font-semibold tracking-tighter text-zinc-950 dark:text-white sm:text-5xl lg:text-[3.45rem] lg:leading-none">
            Innovative solutions for bold brands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:text-base">
            Looking to elevate your brand? We craft immersive experiences that captivate,
            engage, and make your business unforgettable in every interaction.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Let&apos;s Collaborate
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-zinc-950 dark:bg-zinc-950 dark:text-white">
              -&gt;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
