'use client'

import { Star, Quote } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'

const TESTIMONIALS = [
  {
    quote:
      'Velina rebuilt our website and set up an AI chatbot that now handles half our inquiries. Leads doubled in two months.',
    name: 'Ali Raza',
    role: 'Founder, EduPath Global',
    raised: false,
  },
  {
    quote:
      'The automation workflows they built save us 20+ hours a week. It genuinely feels like having an extra team member.',
    name: 'Maria Khan',
    role: 'CEO, BrightClinic',
    raised: true,
  },
  {
    quote:
      'Honest pricing, fast delivery, and you actually talk to the people building your product. Rare these days.',
    name: 'Sana Tariq',
    role: 'Owner, Luxe Commerce',
    raised: false,
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Testimonials
            </span>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              What Clients Say
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="grid items-start gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name} className={t.raised ? 'lg:-translate-y-6' : ''}>
              <figure className="relative h-full rounded-2xl border border-l-4 border-border border-l-violet bg-bg-card p-7">
                <Quote className="size-8 text-violet/40" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-pretty leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
