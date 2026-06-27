'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'

const PROJECTS = [
  {
    name: 'EduPath Global',
    category: 'Study Abroad Website',
    image: '/work/edupath.png',
  },
  {
    name: 'AI Lead Bot',
    category: 'Agentic AI Automation',
    image: '/work/ai-lead-bot.png',
  },
  {
    name: 'Local Clinic SEO',
    category: 'Digital Marketing',
    image: '/work/clinic-seo.png',
  },
  {
    name: 'E-commerce Store',
    category: 'Web Development',
    image: '/work/ecommerce.png',
  },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-14 max-w-2xl">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Portfolio
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Recent Work
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-3 text-lg text-muted-foreground">
              A few things we&apos;ve built and grown lately.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <RevealItem key={project.name}>
              <Link
                href="/work"
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.name} — ${project.category}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* persistent bottom gradient + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="pill inline-flex border border-violet/40 bg-bg-primary/70 px-3 py-1 text-xs font-medium text-cyan backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>

                {/* slide-up hover overlay */}
                <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-3 bg-violet/90 p-6 text-center transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <h3 className="font-display text-2xl font-bold text-white">{project.name}</h3>
                  <span className="inline-flex items-center gap-1.5 text-base font-semibold text-white">
                    View Case Study
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
