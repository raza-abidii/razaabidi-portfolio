import { experienceEntries } from '../data/projects'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="pt-16 md:pt-20">
      <div className="mb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          02 / EXPERIENCE
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Experience
        </h2>
      </div>

      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-[8px] before:top-2 before:w-px before:bg-zinc-200 before:content-[''] dark:before:bg-zinc-800">
        {experienceEntries.map((entry) => (
          <article key={`${entry.company}-${entry.role}`} className="relative pl-12">
            <div className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white text-[9px] font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
              01
            </div>

            <div className="border border-zinc-200 bg-white/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/80">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-lg font-medium tracking-[-0.04em] text-zinc-900 dark:text-zinc-50 md:text-xl">
                    {entry.company}
                  </div>
                  <div className="mt-2 text-base text-zinc-700 dark:text-zinc-200">{entry.role}</div>
                </div>

                <div className="flex flex-col items-start gap-2 md:items-end">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {entry.status}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {entry.dates}
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 md:text-base">
                {entry.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
