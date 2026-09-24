interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-10 flex flex-col gap-4 ${alignClass}`}>
      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
      <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.06em] text-zinc-900 dark:text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
