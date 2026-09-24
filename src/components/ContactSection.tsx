import { ArrowUpRight } from 'lucide-react'

import { profileContact } from '../data/projects'

const contactOptions = [
  {
    label: 'SEND EMAIL',
    href: profileContact.email,
    action: 'mailto',
  },
  {
    label: 'LINKEDIN',
    href: profileContact.linkedin,
    action: 'linkedin',
  },
  {
    label: 'GITHUB',
    href: profileContact.github,
    action: 'github',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="pt-16 md:pt-20">
      <div className="mb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          05 / CONTACT
        </div>
      </div>

      <div className="border border-zinc-200 bg-white/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/80 md:p-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.06em] text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg">
            Have a project, product or technical problem in mind? Let&apos;s talk.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {contactOptions.map(({ label, href }) => (
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 border border-zinc-900 bg-zinc-900 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                {label}
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <button
                key={label}
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 border border-zinc-300 bg-zinc-50 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-500"
              >
                {label}
                <ArrowUpRight size={14} />
              </button>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
