import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

import { profileContact } from '../data/projects'

const socialLinks = [
  {
    label: 'GitHub',
    href: profileContact.github,
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    href: profileContact.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    href: profileContact.email,
    icon: Mail,
  },
]

interface SocialLinksProps {
  className?: string
  compact?: boolean
}

export function SocialLinks({ className = '', compact = false }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={className}>
      <ul className={`flex items-center gap-2 ${compact ? 'flex-wrap' : ''}`}>
        {socialLinks.map(({ label, href, icon: Icon }) => {
          const content = (
            <>
              <Icon size={14} />
              <span>{label}</span>
            </>
          )

          if (!href) {
            return (
              <li key={label}>
                <span className="inline-flex items-center gap-2 border border-zinc-300/80 bg-zinc-50/70 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-500">
                  {content}
                </span>
              </li>
            )
          }

          return (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex items-center gap-2 border border-zinc-300 bg-white/80 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
              >
                {content}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
