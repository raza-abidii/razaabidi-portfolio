import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

import { profileContact } from '../data/projects'

const socialFooter = [
  { label: 'GitHub', href: profileContact.github, icon: GitBranch },
  { label: 'LinkedIn', href: profileContact.linkedin, icon: BriefcaseBusiness },
  { label: 'Email', href: profileContact.email, icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 pb-8 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-900 dark:text-zinc-50">
          RAZA ABIDI
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          SOFTWARE ENGINEER
        </div>

        <div className="flex items-center justify-start gap-4 lg:justify-end">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            HYDERABAD, INDIA
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-zinc-200 px-4 py-5 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em]">© 2026 Raza Abidi</div>

        <div className="flex items-center gap-3">
          {socialFooter.map(({ label, href, icon: Icon }) => {
            if (!href) {
              return (
                <span key={label} className="inline-flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
                  <Icon size={14} />
                  {label}
                </span>
              )
            }

            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                aria-label={label}
              >
                <Icon size={14} />
                <span className="sr-only">{label}</span>
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
          <Link to="/" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50">
            Home
          </Link>
          <Link to="/projects" className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50">
            Projects
          </Link>
        </div>
      </div>
    </footer>
  )
}
