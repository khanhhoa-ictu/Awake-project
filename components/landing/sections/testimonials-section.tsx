import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Social proof
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[0.95]">
            What satisfied customers
            <br />
            are{" "}
            <span className="font-serif text-zinc-700 italic font-normal dark:text-zinc-200">
              saying
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <article className="relative min-h-[560px] overflow-hidden rounded-[2.25rem] bg-zinc-950 lg:col-span-8">
            <Image
              src="/images/background.png"
              alt="Happy client working on a laptop"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,18,0.1),rgba(12,14,18,0.72))]" />
            <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                Customer story
              </span>
              <div className="rounded-[1.4rem] bg-white/10 px-4 py-3 text-right text-white backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/65">Rating</p>
                <p className="mt-1 font-serif text-3xl">4.9/5</p>
              </div>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/12 bg-white/10 p-6 text-white backdrop-blur-xl">
              <p className="max-w-2xl font-serif text-2xl leading-tight sm:text-[2rem]">
                Awake&apos;s approach turned messy ambition into a website our team was proud to
                share, and our conversion rate improved within weeks of launch.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src="/images/Ellipse%2021.png"
                    alt="Sarah Mitchell"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-sm text-white/70">Marketing Head at TalentConnect</p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[2.25rem] bg-[#f4de78] p-8 text-zinc-950 shadow-[0_20px_70px_rgba(15,23,42,0.06)] dark:border dark:border-amber-300/15 dark:bg-[linear-gradient(180deg,rgba(250,204,21,0.18),rgba(245,158,11,0.08)),linear-gradient(180deg,#18120a,#0f0d0a)] dark:text-white dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-700 dark:text-amber-100/70">
              Facts &amp; numbers
            </p>
            <p className="mt-34 font-serif text-7xl leading-none">91%</p>
            <p className="mt-5 max-w-sm text-[2rem] leading-[1.1] tracking-[-0.04em] text-zinc-900 dark:text-zinc-200">
              clients recommend our design services.&rdquo;
            </p>
          </article>

          <article className="rounded-[2.25rem] bg-zinc-950 p-6 text-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] dark:border dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)] lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Customer stories</p>
            <p className="mt-8 max-w-xs text-[2.05rem] leading-[1.06] tracking-[-0.05em] text-white">
              Their creativity and attention to detail transformed our brand completely!
            </p>
            <div className="relative mt-8 aspect-[278/178] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/desk.png"
                alt="Creative workspace"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="rounded-[2.25rem] bg-[#f3f1ed] p-8 text-zinc-950 shadow-[0_20px_70px_rgba(15,23,42,0.05)] dark:border dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] dark:text-white dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)] lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Customer stories
            </p>
            <p className="mt-8 max-w-4xl text-[2.45rem] leading-[1.06] tracking-[-0.06em] text-zinc-900 dark:text-white sm:text-[3.2rem]">
              &ldquo;Awake Design Agency brought our ideas to life with exceptional creativity
              and precision, exceeding expectations.&rdquo;
            </p>
            <div className="mt-10">
              <p className="font-medium text-zinc-900 dark:text-white">Sarah Mitchell</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Marketing Head at TalentConnect
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
