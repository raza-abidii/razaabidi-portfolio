import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectArchive() {
  return (
    <section className="pt-24 md:pt-28">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          WORK / PROJECT ARCHIVE
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-zinc-300 bg-white/80 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
        >
          <ArrowLeft size={14} />
          Back Home
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-medium tracking-[-0.07em] text-zinc-900 dark:text-zinc-50 md:text-5xl">
          Selected Projects
        </h1>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
