import { MoonStar, SunMedium, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'WORK', href: '/#work' },
  { label: 'EXPERIENCE', href: '/#experience' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'CONTACT', href: '/#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const logoSrc = resolvedTheme === 'dark' ? '/blacklogo.png' : '/whitelogo.png'
  const faviconSrc = resolvedTheme === 'dark' ? '/blacklogo.ico' : '/whitelogo.ico'

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null

    if (favicon) {
      favicon.href = faviconSrc
      return
    }

    const newFavicon = document.createElement('link')
    newFavicon.rel = 'icon'
    newFavicon.type = 'image/x-icon'
    newFavicon.href = faviconSrc
    document.head.appendChild(newFavicon)
  }, [faviconSrc])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[rgba(247,245,241,0.8)] backdrop-blur-md dark:border-zinc-800 dark:bg-[rgba(13,13,13,0.72)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Raza Abidi home">
          <img src={logoSrc} alt="Raza Abidi logo" className="h-8 w-auto object-contain sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-9 w-9 items-center justify-center border border-zinc-300 bg-white/80 text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-zinc-300 dark:hover:text-zinc-50"
          >
            {resolvedTheme === 'dark' ? <SunMedium size={14} /> : <MoonStar size={14} />}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-zinc-300 bg-white/80 text-zinc-700 md:hidden dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-zinc-200 bg-[rgba(247,245,241,0.96)] dark:border-zinc-800 dark:bg-[rgba(13,13,13,0.96)] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-700 dark:text-zinc-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
