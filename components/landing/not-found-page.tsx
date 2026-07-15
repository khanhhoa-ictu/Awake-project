import Link from "next/link";

import { ArrowRightUpIcon, ArrowRightUpWhiteIcon } from "@/public/icon";

import { MarketingHeader } from "./site-header";
import { SiteFooter } from "./sections/site-footer";

function ErrorArtwork() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-160 sm:h-88">
      <div className="absolute inset-x-[10%] top-[8%] h-[78%] rounded-sm border border-[#1B1D1E]/25 bg-[linear-gradient(180deg,rgba(222,239,249,0.4),rgba(255,255,255,0.12))] dark:border-white/18 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[7rem] font-bold leading-none tracking-tighter text-[#1B1D1E] sm:text-[12rem] dark:text-white">
          404
        </span>
      </div>

    
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fbfdff_0%,#ffffff_24%,#fffdfa_100%)] dark:bg-[linear-gradient(180deg,#090b0f_0%,#0c1117_28%,#090b0f_100%)]">
      <MarketingHeader />

      <div className="relative overflow-hidden">
       <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-145 w-[120rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(217,243,252,0.9)_0%,rgba(255,255,255,0.96)_50%,rgba(253,241,211,0.9)_100%)] blur-[160px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.18)_0%,rgba(15,23,42,0.22)_50%,rgba(245,158,11,0.18)_100%)]" />
        </div>

        <div className="relative">
          <main className="px-6 pb-20 pt-32 lg:px-8 lg:pt-36">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <ErrorArtwork />

              <h1 className="mt-10 text-4xl font-medium tracking-tight text-[#1B1D1E] sm:text-[48px] sm:leading-[1.2] dark:text-white">
                Oops! The page you are
                <br />
                looking for{" "}
                <span className="font-instrument-serif font-normal italic">
                  doesn&apos;t exist
                </span>
              </h1>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1B1D1E] px-5 py-2.5 text-sm font-medium text-white! transition hover:bg-black dark:bg-white dark:text-[#1B1D1E]! dark:hover:bg-zinc-100"
              >
                Back to home
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1B1D1E] dark:bg-[#1B1D1E] dark:text-white">
                  <span className="dark:hidden">
                    <ArrowRightUpIcon />
                  </span>
                  <span className="hidden dark:inline">
                    <ArrowRightUpWhiteIcon />
                  </span>
                </span>
              </Link>
            </div>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
