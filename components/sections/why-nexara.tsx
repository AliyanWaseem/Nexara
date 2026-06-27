'use client'

import { Check } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'

const DIFFERENTIATORS = [
  {
    title: 'AI-first approach',
    body: 'We use the latest tools so you get results faster and cheaper.',
  },
  {
    title: 'Full-stack team',
    body: 'Design, dev, automation, and marketing under one roof.',
  },
  {
    title: 'Pakistan-based, globally competitive',
    body: 'Premium quality at honest pricing.',
  },
  {
    title: 'You talk to the builder',
    body: 'No account managers, no middlemen.',
  },
]

export function WhyNexara() {
  return (
    <section id="about" className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Why Nexara
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Why Businesses Choose Nexara
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-8 max-w-md text-balance font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              We&apos;re not an agency. We&apos;re your{' '}
              <span className="text-gradient">digital co-founder.</span>
            </p>
          </RevealItem>
        </Reveal>

        <Reveal className="flex flex-col gap-5">
          {DIFFERENTIATORS.map((item) => (
            <RevealItem key={item.title}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-5">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-violet/15">
                  <Check className="size-4 text-violet" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
