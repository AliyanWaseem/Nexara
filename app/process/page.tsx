'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Search,
  FileText,
  Hammer,
  CheckCircle2,
  Rocket,
  RefreshCw,
  MessageSquare,
  BarChart3,
  Clock,
  Shield,
  Zap,
} from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'
import { WhatsAppIcon } from '@/components/social-icons'

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    icon: Search,
    color: 'text-violet',
    bg: 'bg-violet/15',
    borderColor: 'border-violet',
    glowColor: 'rgba(124,58,237,0.2)',
    title: 'Free Discovery Audit',
    duration: 'Day 0 — Free',
    summary:
      'We analyze your entire digital presence before you spend a single rupee. No commitment, no pressure.',
    detail:
      'We look at your current website (if any), Google rankings, competitors in your city, and where you\'re losing potential customers. Most clients are shocked at what we find — and what\'s fixable.',
    deliverable: 'Audit Report PDF',
    includes: [
      'Website speed & SEO audit',
      'Competitor landscape snapshot',
      'Google Business Profile review',
      'Top 3 quick-win opportunities',
      'Clear recommended next steps',
    ],
  },
  {
    num: '02',
    icon: FileText,
    color: 'text-cyan',
    bg: 'bg-cyan/15',
    borderColor: 'border-cyan',
    glowColor: 'rgba(6,182,212,0.2)',
    title: 'Strategy & Proposal',
    duration: 'Day 1–2',
    summary:
      'A custom roadmap built around your goals and budget. You choose the path — we execute it.',
    detail:
      'We present a clear strategy document with scope, timeline, pricing, and expected outcomes. No jargon, no vague promises. If it doesn\'t make business sense for you, we\'ll tell you.',
    deliverable: 'Strategy Document + Fixed Quote',
    includes: [
      'Detailed project scope',
      'Fixed price — no surprise invoices',
      'Realistic timeline with milestones',
      'ROI projection for your niche',
      'Contract & payment terms',
    ],
  },
  {
    num: '03',
    icon: Hammer,
    color: 'text-gold',
    bg: 'bg-gold/15',
    borderColor: 'border-gold',
    glowColor: 'rgba(245,166,35,0.2)',
    title: 'Design & Development',
    duration: 'Week 1–2',
    summary:
      'Build phase. Daily WhatsApp updates. You\'re never in the dark about what\'s happening.',
    detail:
      'We design and build in parallel — no waiting weeks for a mockup before a single line of code is written. You see real progress daily. WhatsApp updates every working day, no exceptions.',
    deliverable: 'Staging Site / Workflow Demo',
    includes: [
      'Daily WhatsApp progress updates',
      'Staging link for live preview',
      'Mobile-first responsive build',
      'Performance optimized (90+ Lighthouse)',
      'WhatsApp & contact integrations',
    ],
  },
  {
    num: '04',
    icon: CheckCircle2,
    color: 'text-violet',
    bg: 'bg-violet/15',
    borderColor: 'border-violet',
    glowColor: 'rgba(124,58,237,0.2)',
    title: 'Review & Revisions',
    duration: 'Week 2–3',
    summary:
      'Up to 3 full revision rounds included. We don\'t launch until you\'re completely happy.',
    detail:
      'You review the staging build and give feedback directly on WhatsApp or a video call. We implement changes fast — usually same day for minor revisions. We\'ve never had a client unhappy at launch.',
    deliverable: 'Approved Final Version',
    includes: [
      '3 revision rounds included',
      'Same-day minor change turnaround',
      'Copy & content adjustments',
      'Final cross-browser & device testing',
      'Your sign-off before anything goes live',
    ],
  },
  {
    num: '05',
    icon: Rocket,
    color: 'text-cyan',
    bg: 'bg-cyan/15',
    borderColor: 'border-cyan',
    glowColor: 'rgba(6,182,212,0.2)',
    title: 'Launch & Handoff',
    duration: 'Week 3',
    summary:
      'We go live, configure everything, and make sure you know exactly what you now own.',
    detail:
      'Domain setup, SSL, hosting configuration, analytics, WhatsApp integration — all handled by us. Then a 30-minute handoff call where we walk you through everything. You leave knowing how to use your new asset.',
    deliverable: 'Live Site + Training Session',
    includes: [
      'Vercel deployment & domain setup',
      'Google Analytics configuration',
      'Google Business Profile update',
      '30-min training walkthrough',
      'Post-launch checklist completed',
    ],
  },
  {
    num: '06',
    icon: RefreshCw,
    color: 'text-gold',
    bg: 'bg-gold/15',
    borderColor: 'border-gold',
    glowColor: 'rgba(245,166,35,0.2)',
    title: 'Ongoing Support & Growth',
    duration: 'Month 1+',
    summary:
      'The launch is just the beginning. Retainer options keep your digital presence growing every month.',
    detail:
      'Most of our clients stay on monthly retainers for content updates, SEO, new features, or AI workflow expansion. We become a long-term growth partner — not a one-time vendor.',
    deliverable: 'Monthly Reports + Updates',
    includes: [
      'Monthly performance reports',
      'Content & SEO updates',
      'New feature development',
      'Priority WhatsApp support',
      'Quarterly strategy review call',
    ],
  },
]

const TURNAROUND = [
  { service: 'Website (5 pages)', timeline: '5–7 days', rush: true },
  { service: 'AI Chatbot', timeline: '3–5 days', rush: true },
  { service: 'n8n Automation Workflow', timeline: '3–5 days', rush: true },
  { service: 'Marketing Campaign Setup', timeline: '3–4 days', rush: true },
  { service: 'Local SEO Setup', timeline: '4–5 days', rush: false },
  { service: 'Full Package (Web + AI + Marketing)', timeline: '2–3 weeks', rush: false },
]

const GUARANTEES = [
  {
    icon: CheckCircle2,
    color: 'text-violet',
    bg: 'bg-violet/15',
    title: 'Free Revisions Until Satisfied',
    desc: 'We include 3 revision rounds in every project. We\'ve never launched something a client wasn\'t happy with.',
  },
  {
    icon: Clock,
    color: 'text-cyan',
    bg: 'bg-cyan/15',
    title: 'On-Time Delivery',
    desc: 'We\'ve never missed an agreed deadline. If we do, you get a 15% refund — no questions asked.',
  },
  {
    icon: Shield,
    color: 'text-gold',
    bg: 'bg-gold/15',
    title: '3 Months Post-Launch Support',
    desc: 'Free bug fixes and minor updates for 3 months after launch. WhatsApp us anytime.',
  },
]

const COMMS = [
  {
    icon: MessageSquare,
    color: 'text-violet',
    bg: 'bg-violet/15',
    title: 'Daily WhatsApp Updates',
    desc: 'During the build phase, you get a daily progress message. No chasing, no silence.',
  },
  {
    icon: BarChart3,
    color: 'text-cyan',
    bg: 'bg-cyan/15',
    title: 'Weekly Progress Reports',
    desc: 'Every Friday — what was done, what\'s next, and any decisions needed from you.',
  },
  {
    icon: Zap,
    color: 'text-gold',
    bg: 'bg-gold/15',
    title: '2-Hour Response Time',
    desc: 'During office hours (Mon–Sat, 10AM–8PM PKT), we respond to every message within 2 hours.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <div className="dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/2 z-0 size-[480px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden
        />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              How We Work
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A Process Built Around{' '}
              <span className="text-gradient">Your Peace of Mind.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Clear steps. Fixed prices. Daily updates. You always know
              exactly what&apos;s happening and what&apos;s coming next.
            </p>
          </RevealItem>
        </Reveal>
      </section>

      {/* ── Steps ── */}
      <section className="px-5 pb-24 pt-8 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 1
              return (
                <Reveal key={step.num}>
                  <RevealItem>
                    <div
                      className={`card-glow overflow-hidden transition-all duration-300 hover:border-opacity-60`}
                      style={{
                        borderColor:
                          step.color === 'text-violet'
                            ? 'rgba(124,58,237,0.3)'
                            : step.color === 'text-cyan'
                            ? 'rgba(6,182,212,0.3)'
                            : 'rgba(245,166,35,0.3)',
                      }}
                    >
                      <div
                        className={`grid items-start gap-0 lg:grid-cols-[1fr_1px_1fr] ${
                          isEven ? 'lg:[&>*:first-child]:order-3 lg:[&>*:nth-child(2)]:order-2 lg:[&>*:last-child]:order-1' : ''
                        }`}
                      >
                        {/* Left / main content */}
                        <div className="flex flex-col gap-5 p-7 lg:p-10">
                          {/* Header */}
                          <div className="flex items-start gap-4">
                            <div className={`inline-flex size-14 shrink-0 items-center justify-center rounded-xl ${step.bg}`}>
                              <Icon className={`size-7 ${step.color}`} />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-3">
                                <span
                                  className={`font-display text-4xl font-bold opacity-25 ${step.color}`}
                                >
                                  {step.num}
                                </span>
                                <span
                                  className={`pill border px-3 py-1 text-xs font-semibold ${
                                    step.color === 'text-violet'
                                      ? 'border-violet/40 bg-violet/10 text-violet'
                                      : step.color === 'text-cyan'
                                      ? 'border-cyan/40 bg-cyan/10 text-cyan'
                                      : 'border-gold/40 bg-gold/10 text-gold'
                                  }`}
                                >
                                  {step.duration}
                                </span>
                              </div>
                              <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                                {step.title}
                              </h2>
                            </div>
                          </div>

                          <p className="text-base font-medium text-foreground">
                            {step.summary}
                          </p>
                          <p className="leading-relaxed text-muted-foreground">
                            {step.detail}
                          </p>

                          {/* Deliverable badge */}
                          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-bg-subtle px-4 py-2.5">
                            <CheckCircle2 className={`size-4 ${step.color}`} />
                            <span className="text-sm font-semibold text-foreground">
                              Deliverable:
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {step.deliverable}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden w-px self-stretch bg-border lg:block" />

                        {/* Right / includes */}
                        <div className="border-t border-border bg-bg-subtle p-7 lg:border-l-0 lg:border-t-0 lg:p-10">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            What&apos;s Included
                          </p>
                          <ul className="flex flex-col gap-3">
                            {step.includes.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${step.bg}`}
                                >
                                  <CheckCircle2 className={`size-3 ${step.color}`} />
                                </span>
                                <span className="text-sm leading-snug text-muted-foreground">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Communication promise ── */}
      <section className="border-y border-border bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
                Communication
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                You&apos;re Never in the Dark
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-3 text-muted-foreground">
                The #1 complaint about agencies is silence. We built our
                process around the opposite.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-3">
            {COMMS.map((c) => {
              const Icon = c.icon
              return (
                <RevealItem key={c.title}>
                  <div className="card-glow h-full p-7">
                    <div className={`inline-flex size-12 items-center justify-center rounded-xl ${c.bg}`}>
                      <Icon className={`size-6 ${c.color}`} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </RevealItem>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Turnaround table ── */}
      <section className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                Timelines
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How Fast Can We Deliver?
              </h2>
            </RevealItem>
          </Reveal>

          <Reveal>
            <RevealItem>
              <div className="card-glow overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-3 border-b border-border bg-bg-subtle px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <span>Service</span>
                  <span className="text-center">Typical Timeline</span>
                  <span className="text-center">Rush Available</span>
                </div>
                {/* Rows */}
                {TURNAROUND.map((row, i) => (
                  <div
                    key={row.service}
                    className={`grid grid-cols-3 items-center px-6 py-5 text-sm ${
                      i !== TURNAROUND.length - 1 ? 'border-b border-border' : ''
                    } ${i % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-subtle'}`}
                  >
                    <span className="font-medium text-foreground">{row.service}</span>
                    <span className="text-center font-mono text-cyan">{row.timeline}</span>
                    <span className="text-center">
                      {row.rush ? (
                        <span className="pill inline-flex border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                          Yes (+30%)
                        </span>
                      ) : (
                        <span className="text-muted-foreground">On Request</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
                Our Promise
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We Back Everything We Do
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-3 text-muted-foreground">
                These aren&apos;t just words — they&apos;re written into every contract we sign.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-3">
            {GUARANTEES.map((g) => {
              const Icon = g.icon
              return (
                <RevealItem key={g.title}>
                  <div className="card-glow h-full p-8 text-center">
                    <div className={`mx-auto inline-flex size-16 items-center justify-center rounded-2xl ${g.bg}`}>
                      <Icon className={`size-8 ${g.color}`} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {g.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {g.desc}
                    </p>
                  </div>
                </RevealItem>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(160deg, #7c3aed 0%, #2a1065 45%, #0a0a0f 100%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 z-0 size-72 rotate-12 rounded-3xl border border-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 z-0 size-80 rounded-full border border-white/10"
          aria-hidden
        />

        <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
          <RevealItem>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Get Started?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-md text-lg text-white/80">
              Step 1 is a free audit — takes 24 hours, costs nothing, and gives
              you a clear picture of what your business needs.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
              >
                Book Free Audit
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp Us
              </a>
            </div>
          </RevealItem>
        </Reveal>
      </section>
    </>
  )
}