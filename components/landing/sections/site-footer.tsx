export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/80 px-6 py-10 lg:px-8 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-zinc-950 dark:text-white">Awake Studio</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Design, strategy and frontend execution for startups that need launch energy and a more
            memorable visual voice.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-zinc-500 dark:text-zinc-400 sm:text-right">
          <span>hello@awakestudio.dev</span>
          <span>Ho Chi Minh City / Remote worldwide</span>
          <span>© 2026 Awake Studio. Crafted in Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
