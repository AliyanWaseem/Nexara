'use client'

import Link from 'next/link'
import { Code2, Bot, TrendingUp, ArrowRight } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  description: string
  tags: string[]
  popular?: boolean
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    iconColor: 'text-violet',
    iconBg: 'bg-violet/15',
    title: 'Premium Web Development',
    description:
      'Fast, modern websites and web apps that convert visitors into clients. Built with Next.js, React and a cutting-edge stack.',
    tags: ['Next.js', 'React', 'Tailwind', 'Vercel'],
  },
  {
    icon: Bot,
    iconColor: 'text-cyan',
    iconBg: 'bg-cyan/15',
    title: 'AI Automation & Agentic AI',
    description:
      'Eliminate repetitive work. We build intelligent agents and automated workflows that run your business while you sleep.',
    tags: ['n8n', 'GPT-4', 'LangChain', 'Custom Agents'],
    popular: true,
  },
  {
    icon: TrendingUp,
    iconColor: 'text-violet',
    iconBg: 'bg-violet/15',
    title: 'Digital Marketing & Growth',
    description:
      'Data-driven campaigns, SEO, and social strategies that bring real leads — not vanity metrics.',
    tags: ['SEO', 'Meta Ads', 'Content', 'Analytics'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              What We Do
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              One Partner. Every Digital Need.
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <RevealItem key={service.title} className="h-full">
                <article
                  className={`card-glow relative flex h-full flex-col p-7 ${
                    service.popular
                      ? 'border-violet/60 shadow-[0_0_30px_rgba(124,58,237,0.25)] lg:-translate-y-4'
                      : ''
                  }`}
                >
                  {service.popular && (
                    <span className="pill absolute right-6 top-6 bg-gold px-3 py-1 text-xs font-bold text-[#0A0A0F]">
                      Most Popular
                    </span>
                  )}
                  <div
                    className={`mb-6 inline-flex size-14 items-center justify-center rounded-xl ${service.iconBg}`}
                  >
                    <Icon className={`size-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="pill border border-border bg-bg-subtle px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#audit"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan transition-all hover:gap-2.5"
                  >
                    Explore Service
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
