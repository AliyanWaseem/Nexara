'use client'

import { Reveal, RevealItem } from '@/components/reveal'

const STEPS = [
  { num: '01', title: 'Free Audit', body: 'We analyze your current setup and find gaps.' },
  { num: '02', title: 'Strategy Call', body: 'A clear, no-fluff plan tailored to your goals.' },
  { num: '03', title: 'Build & Launch', body: 'We design, develop, and ship — fast.' },
  { num: '04', title: 'Grow & Automate', body: 'We scale results and automate the busywork.' },
]

export function Process() {
  return (
    <section id="process" className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Our Process
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              How We Deliver Results
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-7 z-0 hidden h-px bg-border lg:block"
            aria-hidden
          />
          {STEPS.map((step) => (
            <RevealItem key={step.num} className="relative z-10">
              <div className="flex flex-col">
                <span className="inline-flex size-14 items-center justify-center rounded-xl border border-violet/40 bg-bg-card font-display text-xl font-bold text-violet">
                  {step.num}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
