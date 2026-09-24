import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

import type { Project } from '../data/projects'

interface LivePreviewProps {
  project: Project
}

export function LivePreview({ project }: LivePreviewProps) {
  const [isLoading, setIsLoading] = useState(() => Boolean(project.liveUrl && !project.previewBlocked))
  const [hasError, setHasError] = useState(false)

  const showIframe = Boolean(project.liveUrl) && !project.previewBlocked && !hasError

  if (!showIframe) {
    return (
      <div className="relative flex min-h-[220px] flex-col justify-between overflow-hidden border border-zinc-200 bg-zinc-100/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/80 md:min-h-[260px]">
        <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            {project.title}
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-8 text-center">
          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Live Preview Unavailable
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            This website prevents embedded previews.
          </p>
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 self-end border border-zinc-300 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
          >
            Open Project
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 self-end border border-zinc-300 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">
            Preview unavailable
            <ExternalLink size={14} />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden border border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-white/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            {project.title}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} in a new tab`}
            className="inline-flex items-center gap-1 text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <div className="relative min-h-[220px] md:min-h-[260px]">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/90 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 dark:bg-zinc-950/80 dark:text-zinc-400">
            Loading preview...
          </div>
        ) : null}

        <iframe
          title={`${project.title} preview`}
          src={project.liveUrl}
          className="h-[220px] w-full border-0 bg-white md:h-[260px]"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true)
            setIsLoading(false)
          }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
