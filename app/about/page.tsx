'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Bot, TrendingUp, Zap, Heart, Shield } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'
import { WhatsAppIcon, LinkedInIcon, InstagramIcon, XIcon } from '@/components/social-icons'
import { Metadata } from 'next'

// SEO of page
export const metadata: Metadata = {
  title: 'About Velina — Pakistan\'s AI-First Digital Agency',
  description: 'Velina is a Lahore-based digital agency offering premium web development, AI automation and digital marketing for Pakistani businesses.',
  alternates: { canonical: '/about' },
}
// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: '2022',
    color: 'text-violet',
    borderColor: 'border-violet',
    title: 'Started as a Solo Developer',
    desc: 'Built first client websites as a CS student. Realized Pakistani businesses were massively underserved digitally — most had no web presence at all.',
  },
  {
    year: '2023',
    color: 'text-cyan',
    borderColor: 'border-cyan',
    title: 'Discovered AI Automation',
    desc: 'Integrated n8n and GPT-4 into client workflows. Saw businesses save 10+ hours a week. Knew this was the future — especially for Pakistan.',
  },
  {
    year: '2024',
    color: 'text-gold',
    borderColor: 'border-gold',
    title: 'Added Digital Marketing',
    desc: 'First clients started asking for SEO and social media help. Brought on specialists and rounded out the service offering.',
  },
  {
    year: '2025',
    color: 'text-violet',
    borderColor: 'border-violet',
    title: 'Velina Digital Born',
    desc: 'Turned the freelance operation into a proper agency. Named it Velina — from "nexus" (connection) + "ara" (to build). That\'s exactly what we do.',
  },
  {
    year: '2026',
    color: 'text-cyan',
    borderColor: 'border-cyan',
    title: 'Scaling Up',
    desc: 'Expanding the team, refining our process, and helping more Pakistani businesses compete at a global level. The mission is just getting started.',
  },
]

const VALUES = [
  {
    icon: Zap,
    color: 'text-violet',
    bg: 'bg-violet/15',
    title: 'Obsession with Quality',
    desc: 'We lose sleep over pixel alignment and page speed scores. Average output is not something we ship.',
  },
  {
    icon: Shield,
    color: 'text-cyan',
    bg: 'bg-cyan/15',
    title: 'Radical Transparency',
    desc: 'No hidden fees. No ghost clients. You always know what we\'re working on and what it costs.',
  },
  {
    icon: Heart,
    color: 'text-gold',
    bg: 'bg-gold/15',
    title: 'Results Over Everything',
    desc: 'A beautiful website that doesn\'t bring leads is a failure. We measure success by your business growth, not aesthetics.',
  },
]

const TEAM = [
  {
    name: 'Aliyan',
    role: 'Founder & Lead Developer',
    bio: 'CS/CE student turned agency founder. Builds with Next.js, prompts with precision, and thinks about your ROI before writing a single line of code.',
    gradient: 'from-violet to-cyan',
    socials: [
      { Icon: LinkedInIcon, href: 'https://linkedin.com' },
      { Icon: XIcon, href: 'https://x.com' },
      { Icon: InstagramIcon, href: 'https://instagram.com' },
    ],
  },
  {
    name: 'AI Specialist',
    role: 'Automation & Agentic AI',
    bio: 'Designs n8n workflows and GPT-4 agents that eliminate repetitive work. If a human is doing it manually, they\'re probably automating it.',
    gradient: 'from-cyan to-violet',
    socials: [
      { Icon: LinkedInIcon, href: 'https://linkedin.com' },
      { Icon: XIcon, href: 'https://x.com' },
    ],
  },
  {
    name: 'Marketing Lead',
    role: 'SEO & Digital Marketing',
    bio: 'Local SEO wizard and Meta Ads strategist. Has a habit of turning invisible businesses into page-one results within weeks.',
    gradient: 'from-gold to-violet',
    socials: [
      { Icon: LinkedInIcon, href: 'https://linkedin.com' },
      { Icon: InstagramIcon, href: 'https://instagram.com' },
    ],
  },
]

const SERVICES_SUMMARY = [
  { icon: Code2, color: 'text-violet', bg: 'bg-violet/15', label: 'Web Development' },
  { icon: Bot, color: 'text-cyan', bg: 'bg-cyan/15', label: 'AI Automation' },
  { icon: TrendingUp, color: 'text-gold', bg: 'bg-gold/15', label: 'Digital Marketing' },
]

const TECH = [
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'React', color: 'text-cyan' },
  { name: 'Tailwind', color: 'text-violet' },
  { name: 'TypeScript', color: 'text-cyan' },
  { name: 'n8n', color: 'text-violet' },
  { name: 'OpenAI', color: 'text-cyan' },
  { name: 'Python', color: 'text-gold' },
  { name: 'Vercel', color: 'text-foreground' },
  { name: 'Framer', color: 'text-violet' },
  { name: 'Figma', color: 'text-gold' },
  { name: 'Meta Ads', color: 'text-cyan' },
  { name: 'GA4', color: 'text-violet' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 pb-24 pt-32 lg:px-8">
        <div className="dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/2 z-0 size-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <Reveal>
            <RevealItem>
              <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
                About Velina
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                We&apos;re Not Your{' '}
                <span className="text-gradient">Average Agency.</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We&apos;re a lean, AI-powered team of builders obsessed with
                delivering real results for Pakistani businesses. No fluff.
                No bloated retainers. Just work that moves the needle.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 flex flex-wrap gap-3">
                {SERVICES_SUMMARY.map(({ icon: Icon, color, bg, label }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-2 rounded-lg border border-border ${bg} px-4 py-2 text-sm font-medium text-foreground`}
                  >
                    <Icon className={`size-4 ${color}`} />
                    {label}
                  </span>
                ))}
              </div>
            </RevealItem>
            <RevealItem>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
              >
                Work With Us
                <ArrowRight className="size-4" />
              </Link>
            </RevealItem>
          </Reveal>

          {/* Visual card */}
          <Reveal>
            <RevealItem>
              <div className="card-glow relative overflow-hidden p-8">
                {/* Orb */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full opacity-30 blur-3xl"
                  style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
                  aria-hidden
                />
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Our Mission
                </p>
                <blockquote className="mt-4 font-display text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                  &ldquo;Pakistani businesses deserve world-class digital services
                  at honest prices.&rdquo;
                </blockquote>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Most agencies in Pakistan either over-charge for mediocre work
                  or under-deliver on big promises. We built Velina to be the
                  agency we always wished existed — transparent, technical, and
                  obsessed with your growth.
                </p>
                {/* Stat row */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {[
                    { val: '20+', label: 'Clients', color: 'text-violet' },
                    { val: '3', label: 'Services', color: 'text-cyan' },
                    { val: '100%', label: 'Retention', color: 'text-gold' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`font-display text-3xl font-bold ${s.color}`}>
                        {s.val}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline / Story ── */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mb-14">
            <RevealItem>
              <span className="pill inline-flex border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
                Our Story
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                How Velina Was Built
              </h2>
            </RevealItem>
          </Reveal>

          {/* Timeline */}
          <div className="relative ml-4 border-l border-border pl-10 lg:ml-0 lg:pl-0">
            <div className="flex flex-col gap-0 lg:gap-0">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year}>
                  <RevealItem>
                    <div className="relative mb-12 lg:grid lg:grid-cols-[160px_1fr] lg:gap-12">
                      {/* Year */}
                      <div className="mb-3 lg:mb-0 lg:pt-1 lg:text-right">
                        <span
                          className={`font-display text-2xl font-bold ${item.color}`}
                        >
                          {item.year}
                        </span>
                      </div>
                      {/* Dot — desktop */}
                      <div
                        className={`absolute -left-[41px] top-1.5 hidden size-4 rounded-full border-2 bg-bg-subtle lg:block ${item.borderColor}`}
                        style={{ left: '155px' }}
                      />
                      {/* Content */}
                      <div className="card-glow p-6">
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                What Drives Us
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
            </RevealItem>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="card-glow group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`inline-flex size-14 items-center justify-center rounded-xl ${v.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <v.icon className={`size-7 ${v.color}`} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
                The Team
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The People Behind the Work
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-3 text-muted-foreground">
                Small team. Massive output. Everyone here builds, ships, and owns results.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-3">
            {TEAM.map((member) => (
              <RevealItem key={member.name}>
                <div className="card-glow group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  {/* Avatar */}
                  <div className="flex items-center justify-center border-b border-border bg-bg-primary py-10">
                    <div
                      className={`inline-flex size-24 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} font-display text-3xl font-bold text-white shadow-lg`}
                    >
                      {member.name[0]}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet">{member.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    {/* Socials */}
                    <div className="mt-5 flex gap-2">
                      {member.socials.map(({ Icon, href }, i) => (
                        <a
                          key={i}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-bg-subtle text-muted-foreground transition-colors hover:border-violet hover:text-foreground"
                        >
                          <Icon className="size-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Why Pakistan needs this ── */}
      <section className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <RevealItem>
              <div className="border-l-2 border-violet pl-6">
                <p className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl lg:text-4xl">
                  &ldquo;Pakistani businesses deserve world-class digital services
                  at honest prices.&rdquo;
                </p>
                <p className="mt-4 text-muted-foreground">— Aliyan, Founder</p>
              </div>
            </RevealItem>
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            {[
              {
                title: 'The gap is massive',
                desc: '90% of small businesses in Pakistan have no professional website. Customers are searching — and finding competitors instead.',
              },
              {
                title: 'AI is a game changer here',
                desc: 'Automation tools that cost Western agencies thousands are accessible to us at a fraction of the price. We pass that advantage to our clients.',
              },
              {
                title: 'Local beats global for local businesses',
                desc: 'We understand Pakistani customer psychology, pricing sensitivity, and platform habits better than any foreign agency ever could.',
              },
            ].map((point, i) => (
              <RevealItem key={i}>
                <div className="flex gap-4">
                  <div className="mt-1 size-2 shrink-0 rounded-full bg-violet" />
                  <div>
                    <h3 className="font-display font-bold text-foreground">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="bg-bg-subtle px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-12 max-w-xl text-center">
            <RevealItem>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Tools We Trust
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-2 text-muted-foreground">
                Hand-picked for performance, reliability, and results.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {TECH.map((t) => (
              <RevealItem key={t.name}>
                <div className="card-glow flex items-center justify-center p-5 transition-all duration-200 hover:-translate-y-0.5">
                  <span className={`font-mono text-sm font-semibold ${t.color}`}>
                    {t.name}
                  </span>
                </div>
              </RevealItem>
            ))}
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
              Let&apos;s Build Something Together.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-md text-lg text-white/80">
              Whether you need a website, an AI system, or a full growth strategy
              — we&apos;re ready to get to work.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
              >
                Start a Project
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
