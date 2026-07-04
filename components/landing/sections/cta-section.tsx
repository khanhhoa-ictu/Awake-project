export function CtaSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(186,230,253,0.9),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(254,240,138,0.8),_transparent_32%),white] px-8 py-16 shadow-[0_30px_120px_rgba(15,23,42,0.08)] sm:px-14 dark:border-sky-400/10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_24%),linear-gradient(180deg,rgba(13,17,23,0.98),rgba(8,10,16,0.98))] dark:shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
              Ready when you are
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-zinc-950 dark:text-white sm:text-5xl">
              Innovative solutions for bold brands
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
              If you want a landing page that feels editorial, premium and conversion-aware, we can
              turn that direction into a production-ready build.
            </p>
            <a
              href="mailto:hello@awakestudio.dev"
              className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-50"
            >
              hello@awakestudio.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
