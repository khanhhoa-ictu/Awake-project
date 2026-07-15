import Link from "next/link";

import { GithubIcon, GoogleIcon, LogoIcon } from "@/public/icon";

import { MarketingHeader } from "./site-header";
import { SiteFooter } from "./sections/site-footer";

type AuthMode = "sign-in" | "sign-up";

function SocialButton({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer flex h-12 items-center justify-center gap-2.5 rounded-full border px-4 text-base font-medium tracking-[0.01em] transition ${
        active
          ? "border-[#1B1D1E] bg-[#1B1D1E] text-white shadow-[0_10px_25px_rgba(27,29,30,0.12)] dark:border-white/14 dark:bg-white/8 dark:text-white"
          : "border-black/10 bg-white text-[#1B1D1E] hover:border-black/20 dark:border-white/10 dark:bg-[#17191b] dark:text-white/88 dark:hover:border-white/20 dark:hover:bg-white/4"
      }`}
    >
      {label}
      <span className="shrink-0">{icon}</span>
    </button>
  );
}

function AuthInput({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: "text" | "email" | "password";
}) {
  return (
    <label className="block">
      <input
        type={type}
        placeholder={placeholder}
        className="auth-input h-14 w-full rounded-2xl border border-black/10 bg-white px-4 text-base text-[#1B1D1E] outline-none transition placeholder:text-[#1B1D1E]/45 focus:border-[#1B1D1E]/25 dark:border-white/10 dark:bg-[#1a1d21] dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/20"
      />
    </label>
  );
}

function AuthCard({ mode }: { mode: AuthMode }) {
  const isSignIn = mode === "sign-in";

  return (
    <div className="mx-auto max-w-[39rem] rounded-[2rem] border border-black/8 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#121417] dark:shadow-[0_20px_60px_rgba(0,0,0,0.34)]">
      <div className="px-6 py-14 sm:px-16">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 text-[1.75rem] font-medium tracking-tight text-[#1B1D1E] dark:text-white">
            <span className="text-[#1B1D1E] dark:text-white">
              <LogoIcon />
            </span>
            Awake
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <SocialButton
            label={isSignIn ? "Sign In" : "Sign Up"}
            icon={<GoogleIcon />}
          />
          <SocialButton
            label={isSignIn ? "Sign In" : "Sign Up"}
            icon={<GithubIcon />}
          />
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          <span className="text-sm font-medium text-[#1B1D1E]/45 dark:text-white/40">
            OR
          </span>
          <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <form className="mt-10 space-y-5">
          {!isSignIn ? <AuthInput placeholder="Name" /> : null}
          <AuthInput placeholder="Email" type="email" />
          <AuthInput placeholder="Password" type="password" />

          <button
            type="button"
            className="cursor-pointer mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1B1D1E] px-5 text-base font-medium tracking-[0.01em] text-white transition hover:bg-black dark:bg-white dark:text-[#1B1D1E] dark:shadow-[0_14px_34px_rgba(255,255,255,0.08)] dark:hover:bg-zinc-100"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {isSignIn ? (
          <div className="mt-10 space-y-2 text-center max-w-90 mx-auto">
            <p className="text-base leading-7 text-[#1B1D1E]/60 dark:text-white/60">
              <Link
                href="/"
                className="transition hover:text-[#1B1D1E] dark:hover:text-white"
              >
                Forget Password?
              </Link>
            </p>
            <p className="text-base leading-7 text-[#1B1D1E]/60 dark:text-white/60">
              Not a member yet?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-[#1B1D1E]! dark:text-white!"
              >
                Sign Up
              </Link>
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-2 text-center max-w-90 mx-auto">
            <p className="text-base leading-7 text-[#1B1D1E]/60 dark:text-white/60">
              By creating an account, you agree with our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-[#1B1D1E] dark:text-white"
              >
                <span className="text-[#1B1D1E] dark:text-white">Privacy</span> and{" "}
                <span className="text-[#1B1D1E] dark:text-white">Policy</span>
              </Link>
              .
            </p>
            <p className="text-base leading-7 text-[#1B1D1E]/60 dark:text-white/60">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-[#1B1D1E]! dark:text-white!"
              >
                Sign In
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthHero({ mode }: { mode: AuthMode }) {
  return (
    <main className="px-6 pb-20 pt-34 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-[#1B1D1E] sm:text-[48px] sm:leading-[1.2] dark:text-white">
            Love to hear from you,
            <br />
            Get in{" "}
            <span className="font-instrument-serif font-normal italic">
              touch
            </span>
          </h1>
        </div>

        <div className="mt-14">
          <AuthCard mode={mode} />
        </div>
      </div>
    </main>
  );
}

function AuthShell({ mode }: { mode: AuthMode }) {
  return (
    <div className="min-h-screen dark:bg-[linear-gradient(180deg,#090b0f_0%,#0c1117_28%,#090b0f_100%)]">
      <MarketingHeader />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-145 w-[120rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(217,243,252,0.9)_0%,rgba(255,255,255,0.96)_50%,rgba(253,241,211,0.9)_100%)] blur-[160px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.18)_0%,rgba(15,23,42,0.22)_50%,rgba(245,158,11,0.18)_100%)]" />
        </div>

        <div className="relative">
          <AuthHero mode={mode} />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

export function SignInPage() {
  return <AuthShell mode="sign-in" />;
}

export function SignUpPage() {
  return <AuthShell mode="sign-up" />;
}
