'use client'

import { Reveal, RevealItem } from '@/components/reveal'

const STATS = [
  { value: '20+', label: 'Clients Served' },
  { value: '3', label: 'Core Services' },
  { value: '100%', label: 'Client Retention' },
  { value: '48hr', label: 'Avg. Delivery Start' },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-20">
      {/* violet gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }}
        aria-hidden
      />
      {/* dot pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <Reveal className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <RevealItem key={stat.label} className="text-center">
            <div className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium text-white/80 sm:text-base">
              {stat.label}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  )
}
