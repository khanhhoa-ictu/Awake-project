import { projects } from "../data";
import { SectionHeading } from "../section-heading";

function renderProjectPreview(projectName: string) {
  if (projectName === "FlowBank") {
    return (
      <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.55),_transparent_18%),linear-gradient(135deg,#d9efbe_0%,#daf0be_40%,#cbe9b2_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(135deg,#1b2a1b_0%,#23351f_45%,#1c2918_100%)]">
        <div className="absolute left-10 top-10 flex gap-3">
          {["Euro", "Pound", "Swiss Franc"].map((label) => (
            <div
              key={label}
              className="w-18 rounded-2xl bg-white/88 px-3 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.06)] dark:bg-white/8 dark:shadow-none"
            >
              <div className="h-2 w-5 rounded-full bg-emerald-300 dark:bg-emerald-400/60" />
              <p className="mt-3 text-[0.55rem] uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                {label}
              </p>
              <p className="mt-1 text-[0.7rem] font-semibold text-zinc-700 dark:text-zinc-200">
                {label === "Euro"
                  ? "1,952"
                  : label === "Pound"
                    ? "2,174"
                    : "3,156"}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-28 h-[18rem] w-[9rem] rotate-[10deg] rounded-[2.6rem] border-[6px] border-zinc-950 bg-white shadow-[0_40px_70px_rgba(0,0,0,0.22)] dark:border-zinc-900">
          <div className="mx-auto mt-3 h-5 w-16 rounded-full bg-zinc-950" />
          <div className="px-4 py-5">
            <div className="h-2 w-14 rounded-full bg-zinc-200" />
            <div className="mt-6 h-16 rounded-2xl bg-zinc-100" />
            <div className="mt-4 h-3 w-20 rounded-full bg-zinc-200" />
            <div className="mt-3 h-3 w-16 rounded-full bg-zinc-100" />
          </div>
          <div className="mx-auto mt-1 grid w-[78%] grid-cols-3 gap-2 px-2">
            {[...Array(9)].map((_, index) => (
              <span key={index} className="h-6 rounded-lg bg-zinc-100" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 right-6 rounded-[1.6rem] bg-amber-300 px-5 py-4 text-right shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:bg-amber-300/90">
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-zinc-700">
            USD
          </p>
          <p className="mt-2 text-3xl font-semibold text-zinc-950">$26,887</p>
          <p className="text-xs text-zinc-700">+421.03</p>
        </div>
        <div className="absolute bottom-0 left-0 h-28 w-44 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.9),_transparent_38%),linear-gradient(180deg,rgba(17,24,39,0.16),transparent)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.28),transparent)]" />
      </div>
    );
  }

  if (projectName === "Academy.co") {
    return (
      <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-[linear-gradient(135deg,#d9d4ef_0%,#d7d3ec_58%,#ece8f8_100%)] dark:bg-[linear-gradient(135deg,#18172a_0%,#201d35_60%,#161427_100%)]">
        <div className="absolute -left-3 top-11 h-56 w-18 -rotate-8 rounded-3xl bg-white/65 dark:bg-white/6" />
        <div className="absolute right-5 top-9 h-[20rem] w-[31rem] rotate-[-7deg] rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_60px_rgba(53,38,95,0.12)] dark:bg-white/8 dark:shadow-none">
          <div className="flex items-center justify-between">
            <div className="h-5 w-28 rounded-full bg-zinc-100 dark:bg-white/12" />
            <div className="h-10 w-28 rounded-2xl bg-zinc-50 dark:bg-white/10" />
          </div>
          <div className="mt-6 grid grid-cols-[8rem_1fr] gap-6">
            <div className="space-y-3">
              {["Dashboard", "Courses", "Chats", "Grades", "Settings"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl px-3 py-2 text-xs ${
                      index === 0
                        ? "bg-violet-100 text-zinc-900 dark:bg-violet-400/25 dark:text-white"
                        : "bg-transparent text-zinc-400 dark:text-zinc-500"
                    }`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "from-orange-300 to-amber-200",
                  "from-violet-300 to-fuchsia-200",
                  "from-sky-300 to-blue-200",
                ].map((tone) => (
                  <div
                    key={tone}
                    className={`rounded-3xl bg-gradient-to-br ${tone} p-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)] dark:shadow-none`}
                  >
                    <div className="h-18 rounded-2xl bg-white/35" />
                    <div className="mt-4 h-3 w-18 rounded-full bg-white/70" />
                    <div className="mt-2 flex gap-1">
                      {[...Array(3)].map((_, avatarIndex) => (
                        <span
                          key={avatarIndex}
                          className="h-4 w-4 rounded-full border border-white/70 bg-white/80"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-4 gap-3">
                {[...Array(8)].map((_, index) => (
                  <span
                    key={index}
                    className="h-3 rounded-full bg-zinc-100 dark:bg-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectName === "Genome") {
    return (
      <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-[linear-gradient(135deg,#e6eaef_0%,#d9dfe7_42%,#cfd8e1_100%)] dark:bg-[linear-gradient(135deg,#14181e_0%,#1b222b_42%,#161b22_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.65),_transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.2),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.04),_transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="absolute left-8 top-6 h-74 w-64 rotate-[4deg] rounded-[2.2rem] bg-[linear-gradient(180deg,#f8fafc,#e7edf3)] shadow-[0_20px_40px_rgba(15,23,42,0.05)] dark:bg-[linear-gradient(180deg,#232b35,#1c232d)] dark:shadow-none" />
        <div className="absolute left-44 top-10 h-76 w-70 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_transparent_22%),linear-gradient(180deg,#f4f6fa,#dde5ef)] shadow-[0_20px_45px_rgba(15,23,42,0.06)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_22%),linear-gradient(180deg,#212833,#171d26)] dark:shadow-none" />
        <div className="absolute bottom-0 right-0 h-44 w-52 bg-[linear-gradient(180deg,rgba(123,211,234,0.1),rgba(123,211,234,0.3))] dark:bg-[linear-gradient(180deg,rgba(34,211,238,0.05),rgba(34,211,238,0.14))]" />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-4">
          <span className="text-7xl font-black tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            G
          </span>
          <span className="text-6xl font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            Genome
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-[linear-gradient(135deg,#f3ece5_0%,#f6f1ec_34%,#eee4dc_100%)] dark:bg-[linear-gradient(135deg,#19161a_0%,#231d1c_38%,#171418_100%)]">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_24%)]" />
      <div className="absolute bottom-10 right-10 h-[17rem] w-[24rem] rotate-[6deg] rounded-[1.8rem] border border-zinc-800/10 bg-zinc-900 p-3 shadow-[0_26px_50px_rgba(0,0,0,0.18)] dark:border-white/6">
        <div className="h-full rounded-[1.3rem] bg-[linear-gradient(135deg,#2f7fd2,#4ea6e6_48%,#2f72cc_100%)] p-5">
          <div className="flex items-center justify-between text-[0.55rem] uppercase tracking-[0.24em] text-white/70">
            <span>Hotto</span>
            <span>Shop</span>
          </div>
          <div className="mt-8 max-w-[8rem] text-4xl leading-none font-medium text-white">
            Hotto
            <br />
            for Anyone
          </div>
          <div className="absolute bottom-6 left-5 text-7xl font-black leading-none text-white/95">
            Ho
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-6 h-44 w-44 rounded-t-[5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_46%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_46%)]" />
      <div className="absolute right-18 top-12 h-16 w-16 rounded-full bg-lime-200/70 blur-[2px] dark:bg-lime-200/20" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-150 text-[48px] tracking-tight leading-14 font-medium text-center">
          How we{" "}
          <span className="font-instrument-serif font-normal italic">transformed</span>{" "}
          a small business’s online presence
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="group">
              <div
                className={`aspect-[1.52/1] rounded-4xl border border-zinc-200 bg-linear-to-br ${project.tint} shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition duration-300 group-hover:-translate-y-1 dark:border-white/8 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900 dark:shadow-[0_22px_60px_rgba(0,0,0,0.24)]`}
              >
                {renderProjectPreview(project.name)}
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:bg-white/5 dark:text-zinc-400">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
