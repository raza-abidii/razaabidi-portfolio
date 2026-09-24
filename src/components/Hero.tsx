import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { heroSummary } from '../data/projects'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const systemRows = [
    { label: 'LOCATION', value: heroSummary.location },
    { label: 'FOCUS', value: heroSummary.focus },
    { label: 'EXPLORING', value: heroSummary.exploring },
    { label: 'STACK', value: heroSummary.stack },
    { label: 'STATUS', value: 'Building' },
  ]

  return (
    <section className="pt-24 md:pt-28">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="animate-[fadeUp_0.6s_ease-out_both]">
          <div className="mb-4 font-mono text-4xl uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            RAZA ABIDI
          </div>

          <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.26em] text-zinc-500 dark:text-zinc-400">
            {heroSummary.label}
          </div>

          <div className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" aria-hidden="true" />
            <span>{heroSummary.status}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-medium tracking-[-0.08em] text-zinc-900 dark:text-zinc-50 md:text-6xl">
            {heroSummary.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg md:leading-8">
            {heroSummary.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 border border-zinc-900 bg-zinc-900 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View Selected Work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 border border-zinc-300 bg-white/70 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
            >
              Get In Touch
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <MapPin size={14} />
              Hyderabad, India
            </div>
            <div className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <Sparkles size={14} />
              Product-minded engineer
            </div>
          </div>

          <div className="mt-8">
            <SocialLinks className="" compact />
          </div>
        </div>

        <aside className="animate-[fadeUp_0.8s_ease-out_both] rounded-none border border-zinc-200 bg-white/70 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <div className="mb-5 flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              System Status
            </div>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
          </div>

          <dl className="space-y-4">
            {systemRows.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[90px_1fr] items-center gap-3 border-b border-zinc-200 pb-3 last:border-b-0 dark:border-zinc-800">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {label}
                </dt>
                <dd className="text-sm text-zinc-700 dark:text-zinc-200">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
