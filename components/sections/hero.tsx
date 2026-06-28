'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const FLOATING_BADGES = [
  { label: 'Next.js', color: 'text-cyan', className: 'left-[4%] top-[22%]', delay: 0 },
  { label: 'AI Agents', color: 'text-violet', className: 'right-[5%] top-[18%]', delay: 0.6 },
  { label: 'n8n Automation', color: 'text-gold', className: 'left-[8%] bottom-[24%]', delay: 1.1 },
  { label: 'GPT-4', color: 'text-cyan', className: 'right-[7%] bottom-[28%]', delay: 0.3 },
  { label: 'React', color: 'text-violet', className: 'right-[18%] top-[46%]', delay: 0.9 },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-20 pt-28 lg:px-8">
      {/* dot-grid overlay */}
      <div className="dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />

      {/* blurred gradient orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-10 z-0 size-[480px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 z-0 size-[480px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
        aria-hidden
      />

      {/* floating tech badges (desktop) */}
      {FLOATING_BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          className={`pointer-events-none absolute z-10 hidden lg:block ${badge.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: badge.delay },
            scale: { duration: 0.6, delay: badge.delay },
            y: { duration: 4 + badge.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-border bg-bg-card/80 px-4 py-2.5 shadow-lg backdrop-blur-sm">
            <span className={`size-2 rounded-full ${badge.color} bg-current`} />
            <span className="font-mono text-sm font-medium text-foreground">{badge.label}</span>
          </div>
        </motion.div>
      ))}

      {/* content */}
      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pill mb-7 inline-flex items-center gap-2 border border-violet/50 bg-violet/10 px-4 py-1.5"
        >
          <Sparkles className="size-3.5 text-violet" />
          <span className="text-sm font-medium text-foreground">
            Pakistan&apos;s AI-First Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
        >
          We Don&apos;t Just Build Websites.
          <br />
          We Build <span className="text-gradient">Digital Empires.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Velina Digital is your full-stack growth partner — combining premium web
          development, intelligent AI automation, and data-driven marketing to scale
          your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="#audit"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
          >
            Get Your Free Audit
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-violet/60 px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-200 hover:bg-violet/10"
          >
            See Our Work
          </Link>
        </motion.div>

        {/* trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex -space-x-3">
            {['#7c3aed', '#06b6d4', '#f5a623'].map((c, i) => (
              <span
                key={c}
                className="inline-flex size-9 items-center justify-center rounded-full border-2 border-bg-primary font-mono text-xs font-bold text-[#0A0A0F]"
                style={{ background: c, zIndex: 3 - i }}
              >
                {['A', 'M', 'S'][i]}
              </span>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Trusted by 20+ businesses across Pakistan
          </span>
        </motion.div>
      </div>
    </section>
  )
}
