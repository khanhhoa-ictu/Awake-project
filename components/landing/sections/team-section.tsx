import Image from "next/image";

import { team } from "../data";

export function TeamSection() {
  const socialLinks = ["X", "in"];
  const teamPortraits = [
    "/images/team2.png",
    "/images/team1.png",
    "/images/team4.png",
    "/images/team3.png",
  ];

  return (
    <section id="team" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Team
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white sm:text-5xl lg:text-[4.2rem] lg:leading-[0.94]">
            Meet the creative minds
            <br />
            behind{" "}
            <span className="font-serif text-zinc-700 italic font-normal dark:text-zinc-200">
              our success
            </span>
          </h2>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => {
            const displayName = member.name
              .replace("Ana BeliÃ„â€¡", "Ana Belic")
              .replace("Darko StankoviÃ„â€¡", "Darko Stankovic");
            const portrait = teamPortraits[index] ?? teamPortraits[0];

            return (
              <article key={member.name} className="group text-center">
                <div className="relative mx-auto aspect-300/373 w-full max-w-75 transition duration-300 group-hover:-translate-y-1">
                  <div className="absolute inset-0">
                    <Image
                      src={portrait}
                      alt={displayName}
                      fill
                      sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 92vw"
                      className="object-contain object-center"
                    />
                  </div>
                </div>

                <div className="px-2 pt-5">
                  <h3 className="text-[1.05rem] font-medium tracking-[-0.03em] text-zinc-950 dark:text-white sm:text-[1.12rem]">
                    {displayName}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">{member.role}</p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    {socialLinks.map((label) => (
                      <a
                        key={`${displayName}-${label}`}
                        href="#contact"
                        aria-label={`${displayName} social ${label}`}
                        className="font-medium transition hover:text-zinc-950 dark:hover:text-white"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
