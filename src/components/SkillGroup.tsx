import { skillGroups } from '../data/projects'

export function SkillGroup() {
  return (
    <section id="stack" className="pt-16 md:pt-20">
      <div className="mb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          03 / STACK
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-medium tracking-[-0.06em] text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Technical Stack
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="border border-zinc-200 bg-white/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/80">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {group.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={`${group.title}-${skill}`}
                  className="border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
