import { Route, Routes } from 'react-router-dom'

import { ContactSection } from './components/ContactSection'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectArchive } from './components/ProjectArchive'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { SkillGroup } from './components/SkillGroup'
import { aboutContent, projects } from './data/projects'

function HomePage() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <>
      <Hero />

      <section id="work" className="pt-16 md:pt-20">
        <SectionHeading
          label="01 / WORK"
          title="Projects I've built"
          description="A selection of software, products and technical systems I've worked on."
        />

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ExperienceTimeline />
      <SkillGroup />

      <section id="about" className="pt-16 md:pt-20">
        <SectionHeading label="04 / ABOUT" title="A little about me" />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
            {aboutContent.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-3 border border-zinc-200 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/80">
            {[
              '01 SOFTWARE ENGINEERING',
              '02 FULL-STACK DEVELOPMENT',
              '03 BACKEND SYSTEMS',
              '04 AI / MACHINE LEARNING',
              '05 PRODUCT DEVELOPMENT',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-zinc-200 pb-2.5 last:border-b-0 dark:border-zinc-800"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {item.slice(0, 2)}
                </span>
                <span className="text-sm uppercase tracking-[0.15em] text-zinc-700 dark:text-zinc-200">
                  {item.slice(3)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-foreground)]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectArchive />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
