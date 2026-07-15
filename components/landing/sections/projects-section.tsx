import Image from "next/image";

import { projects, ProjectsSection as projectImages } from "../data";

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-150 text-center text-[48px] leading-14 font-medium tracking-tight">
          How we{" "}
          <span className="font-instrument-serif font-normal italic">
            transformed
          </span>{" "}
          a small business's online presence
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className="group">
              <div className="relative aspect-[1.52/1] overflow-hidden rounded-4xl border border-zinc-200 shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition duration-300 group-hover:-translate-y-1 dark:border-white/8 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
                <Image
                  src={projectImages[index]}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5">
                <div className="flex gap-3 flex-col">
                  <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">
                    {project.name}
                  </h3>
                  <div className="flex gap-3">
                    {project.category.map((item, index) => (
                      <span key={index} className="w-fit px-4 py-2 border border-[#1B1D1E]/10 rounded-full bg-white text-sm text-[#1B1D1E] dark:bg-white/5 dark:text-zinc-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
