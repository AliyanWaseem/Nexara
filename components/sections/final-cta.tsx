'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'
import { WhatsAppIcon } from '@/components/social-icons'

export function FinalCta() {
  return (
    <section id="audit" className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      {/* violet-to-dark gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(160deg, #7c3aed 0%, #2a1065 45%, #0a0a0f 100%)' }}
        aria-hidden
      />
      {/* decorative geometric shapes */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 z-0 size-72 rotate-12 rounded-3xl border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 z-0 size-80 rounded-full border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[15%] bottom-[20%] z-0 size-24 rotate-45 rounded-2xl bg-cyan/10"
        aria-hidden
      />

      <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <RevealItem>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Ready to Scale Your Business?
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 max-w-md text-lg text-white/80">
            Book a free 30-minute strategy call. No fluff. Just a clear plan.
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Link
              href="#audit"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
            >
              Book Free Call
              <ArrowRight className="size-4" />
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/70">or WhatsApp us directly</span>
              <Link
                href="https://wa.me/"
                className="inline-flex items-center gap-2 rounded-lg bg-success px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  )
}
