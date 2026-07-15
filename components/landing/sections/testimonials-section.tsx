import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-150 text-center text-[48px] leading-14 font-medium tracking-tight text-[#1B1D1E] dark:text-white">
            What our{" "}
            <span className="font-instrument-serif font-normal italic">
              satisfied
            </span>{" "}
            customers are saying about us
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <article className="relative min-h-140 overflow-hidden rounded-[2.25rem] bg-zinc-950 lg:col-span-8">
            <Image
              src="/images/background.png"
              alt="Happy client working on a laptop"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,18,0.1),rgba(12,14,18,0.72))]" />
            <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
              <span className="px-4 py-2 text-sm uppercase text-white/60 backdrop-blur-md">
                Customer story
              </span>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] p-4 text-white ">
              <p className="text-xl leading-tight sm:text-[22px]">
                Awake&apos;s expertise transformed my vision into success with
                creativity, precision, and a deep understanding of my goals.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div>
                  <p className="text-base">Anaya Shah</p>
                  <p className="text-sm text-white/60">Founder of Chipsland</p>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-[2.25rem] bg-[#f4de78] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] dark:border dark:border-amber-300/15 dark:bg-[#3A2D0F] dark:text-white dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:col-span-4">
            <span className="px-4 py-2 text-sm uppercase text-[#1B1D1E]/60 backdrop-blur-md dark:text-amber-100/70">
              Facts &amp; numbers
            </span>
            <div>
              <p className="text-[48px] font-semibold text-[#1B1D1E] dark:text-white">91%</p>
              <p className="mt-4 max-w-sm text-xl leading-[1.1] text-[#1B1D1E] dark:text-amber-50/90">
                clients recommend our design services.&rdquo;
              </p>
            </div>
          </article>

          <article className="rounded-[2.25rem] bg-[#1B1D1E] p-6 text-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] dark:border dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)] lg:col-span-4">
            <span className="px-4 py-2 text-sm uppercase text-white/60 backdrop-blur-md">
              Customer stories
            </span>
            <p className="mt-8 max-w-xs text-2xl tracking-tighter text-white">
              Their creativity and attention to detail transformed our brand
              completely!
            </p>
            <div className="relative mt-8 aspect-278/178 overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/desk.png"
                alt="Creative workspace"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>

          <article className="flex h-full flex-col rounded-[2.25rem] bg-[#1B1D1E]/5 p-8 dark:border dark:border-white/8 dark:bg-[#1E2022] dark:text-white dark:shadow-[0_20px_55px_rgba(0,0,0,0.22)] lg:col-span-8">
            <span className="px-4 py-2 text-sm uppercase text-[#1B1D1E]/60 backdrop-blur-md dark:text-white/60">
              Customer stories
            </span>
            <p className="mt-8 max-w-4xl text-[2.45rem] leading-[1.06] tracking-[-0.04em] text-zinc-900 dark:text-white sm:text-[48px]">
              &ldquo;Awake Design Agency brought our ideas to life with
              exceptional creativity and precision, exceeding
              expectations.&rdquo;
            </p>
            <div className="mt-auto pt-14">
              <p className="font-medium text-zinc-900 dark:text-white">
                Sarah Mitchell
              </p>
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
