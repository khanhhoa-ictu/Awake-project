import Image from "next/image";

import { LinkedinIcon, XIcon } from "@/public/icon";

import { team } from "../data";

export function TeamSection() {
  const socialLinks = [
    { label: "X", icon: <XIcon /> },
    { label: "LinkedIn", icon: <LinkedinIcon /> },
  ];
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
          <h2 className="mx-auto max-w-150 text-center text-[48px] leading-14 font-medium tracking-tight text-[#1B1D1E] dark:text-white">
            Meet the{" "}
            <span className="font-instrument-serif font-normal italic">
              creative minds
            </span>{" "}
            behind our success
          </h2>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {team.map((member, index) => {
            const portrait = teamPortraits[index] ?? teamPortraits[0];
            const displayName = member.name
              .replace("Ana BeliÄ‡", "Ana Belic")
              .replace("Darko StankoviÄ‡", "Darko Stankovic");

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
                  <h3 className="text-xl font-medium tracking-[-0.03em] text-[#1B1D1E] dark:text-white sm:text-[24px]">
                    {displayName}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#1B1D1E]/60 dark:text-zinc-400">
                    {member.role}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm text-zinc-500 dark:text-zinc-300">
                    {socialLinks.map((socialLink) => (
                      <a
                        key={`${displayName}-${socialLink.label}`}
                        href="#contact"
                        aria-label={`${displayName} social ${socialLink.label}`}
                        className="font-medium transition hover:text-zinc-950 dark:hover:text-white"
                      >
                        {socialLink.icon}
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
