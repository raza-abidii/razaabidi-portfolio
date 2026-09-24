import { ArrowUpRight, ExternalLink } from 'lucide-react'

import type { Project } from '../data/projects'
import { LivePreview } from './LivePreview'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-zinc-200 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-300 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            {project.number}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-medium tracking-[-0.06em] text-zinc-900 dark:text-zinc-50 md:text-3xl">
              {project.title}
            </h3>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {project.category}
            </div>
          </div>

          <p className="max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300 md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            {project.technologies.map((technology) => (
              <span
                key={`${project.id}-${technology}`}
                className="border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 dark:border-zinc-700 dark:bg-zinc-950/80"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Key Features
            </div>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={`${project.id}-${feature}`} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && project.metrics.length > 0 ? (
            <div className="grid gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:grid-cols-2 xl:grid-cols-3">
              {project.metrics.map(({ label, value }) => (
                <div key={`${project.id}-${label}`} className="rounded-none border border-zinc-200 p-3 dark:border-zinc-700">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                    {label}
                  </div>
                  <div className="mt-2 text-lg font-medium tracking-[-0.04em] text-zinc-900 dark:text-zinc-50">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-900 bg-zinc-900 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Project
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-500">
                Preview unavailable
                <ExternalLink size={14} />
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-300 bg-white px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="lg:pl-4">
          <LivePreview project={project} />
        </div>
      </div>
    </article>
  )
}
