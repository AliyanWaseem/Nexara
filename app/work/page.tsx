'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'

// ─── Data ─────────────────────────────────────────────────────────────────────

type Category = 'All' | 'Web Development' | 'AI Automation' | 'Digital Marketing'

type Project = {
  id: string
  title: string
  client: string
  category: Exclude<Category, 'All'>
  tags: string[]
  result: string
  resultIcon: React.ElementType
  description: string
  image: string
  color: string
  colorBg: string
  stats: { label: string; value: string }[]
  challenge: string
  solution: string
}

const PROJECTS: Project[] = [
  {
    id: 'edupath',
    title: 'EduPath Global',
    client: 'Study Abroad Consultancy — Lahore',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind', 'Vercel', 'WhatsApp API'],
    result: 'Full site live in 3 days',
    resultIcon: Clock,
    description:
      'A premium study abroad consultancy needed a website that builds trust with students and parents, clearly explains services, and drives WhatsApp consultations.',
    image: '/work/edupath.png',
    color: 'text-violet',
    colorBg: 'bg-violet/15',
    stats: [
      { label: 'Pages Built', value: '5' },
      { label: 'Days to Launch', value: '3' },
      { label: 'WhatsApp Leads', value: '+40/mo' },
    ],
    challenge:
      'The client had zero online presence. Students were going to competitors who had professional websites.',
    solution:
      'Built a full Next.js site with destination pages, success stories, and a WhatsApp consultation flow. Deployed on Vercel in 3 days.',
  },
  {
    id: 'ai-lead-bot',
    title: 'AI Lead Qualifier Bot',
    client: 'Real Estate Agency — Karachi',
    category: 'AI Automation',
    tags: ['n8n', 'OpenAI', 'WhatsApp', 'CRM'],
    result: 'Saved 15hrs/week',
    resultIcon: Clock,
    description:
      'A busy real estate agency was drowning in unqualified WhatsApp leads. Agents spent hours chatting with people who weren\'t serious buyers.',
    image: '/work/ai-lead-bot.png',
    color: 'text-cyan',
    colorBg: 'bg-cyan/15',
    stats: [
      { label: 'Hours Saved/Week', value: '15+' },
      { label: 'Leads Qualified', value: '85%' },
      { label: 'Response Time', value: '<30s' },
    ],
    challenge:
      'Agents were spending 3+ hours daily on WhatsApp answering the same 10 questions from leads who never converted.',
    solution:
      'Built an n8n + GPT-4 workflow that automatically qualifies leads via WhatsApp, scores them, and pushes hot leads to the CRM instantly.',
  },
  {
    id: 'clinic-seo',
    title: 'Dental Clinic Local SEO',
    client: 'Private Dental Clinic — Islamabad',
    category: 'Digital Marketing',
    tags: ['Local SEO', 'Google Business', 'Content', 'Analytics'],
    result: 'Page 1 Google in 6 weeks',
    resultIcon: TrendingUp,
    description:
      'A dental clinic in Islamabad was invisible on Google despite being open for 5 years. Competitors with worse service ranked above them.',
    image: '/work/clinic-seo.png',
    color: 'text-gold',
    colorBg: 'bg-gold/15',
    stats: [
      { label: 'Google Ranking', value: '#1' },
      { label: 'Weeks to Page 1', value: '6' },
      { label: 'New Patients/mo', value: '+28' },
    ],
    challenge:
      'Zero Google Business optimization, no reviews strategy, and no local keywords on their website.',
    solution:
      'Full Google Business Profile overhaul, on-page local SEO, review generation campaign, and 4 location-specific blog posts.',
  },
  {
    id: 'whatsapp-agent',
    title: 'WhatsApp AI Support Agent',
    client: 'E-commerce Store — Lahore',
    category: 'AI Automation',
    tags: ['n8n', 'OpenAI', 'WhatsApp Business API', 'Webhooks'],
    result: '300+ auto-replies daily',
    resultIcon: Users,
    description:
      'A fast-growing e-commerce store was losing customers because WhatsApp messages went unanswered for hours, especially at night.',
    image: '/work/ecommerce.png',
    color: 'text-cyan',
    colorBg: 'bg-cyan/15',
    stats: [
      { label: 'Daily Auto-Replies', value: '300+' },
      { label: 'Response Time', value: '< 5s' },
      { label: 'Support Cost', value: '-60%' },
    ],
    challenge:
      'A single support person handling 300+ daily WhatsApp messages about orders, tracking, and returns — burning out fast.',
    solution:
      'Deployed a GPT-4 powered WhatsApp agent that handles FAQs, order status checks, and escalates complex issues to a human.',
  },
  {
    id: 'fashion-brand',
    title: 'Fashion Brand Website',
    client: 'Clothing Brand — Lahore',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind', 'Shopify API', 'Instagram Feed'],
    result: '3× increase in inquiries',
    resultIcon: TrendingUp,
    description:
      'A growing Pakistani fashion brand was selling entirely through Instagram DMs. They needed a proper storefront to look premium and capture leads.',
    image: '/work/edupath.png',
    color: 'text-violet',
    colorBg: 'bg-violet/15',
    stats: [
      { label: 'Inquiry Increase', value: '3×' },
      { label: 'Bounce Rate', value: '-45%' },
      { label: 'Avg Session', value: '3.2min' },
    ],
    challenge:
      'Instagram-only presence meant no credibility. High-value customers were hesitant to order without a proper website.',
    solution:
      'Built a sleek Next.js storefront with lookbook gallery, size guide, WhatsApp order flow, and live Instagram feed integration.',
  },
  {
    id: 'restaurant-social',
    title: 'Restaurant Instagram Growth',
    client: 'Fine Dining Restaurant — Karachi',
    category: 'Digital Marketing',
    tags: ['Instagram', 'Content Strategy', 'Reels', 'Meta Ads'],
    result: '0 to 5K followers in 60 days',
    resultIcon: TrendingUp,
    description:
      'A new fine dining restaurant in Karachi had great food but zero social media presence. They needed visibility before their grand opening.',
    image: '/work/clinic-seo.png',
    color: 'text-gold',
    colorBg: 'bg-gold/15',
    stats: [
      { label: 'Followers Gained', value: '5,000+' },
      { label: 'Days', value: '60' },
      { label: 'Opening Reservations', value: 'Full' },
    ],
    challenge:
      'Zero followers, zero content, opening in 60 days. Needed to build enough buzz to fill tables from day one.',
    solution:
      'Content calendar with daily Reels, behind-the-scenes stories, chef spotlights, and a targeted Meta Ads campaign for food lovers in Karachi.',
  },
]

const CATEGORIES: Category[] = [
  'All',
  'Web Development',
  'AI Automation',
  'Digital Marketing',
]

// ─── Case study modal ─────────────────────────────────────────────────────────

function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const Icon = project.resultIcon
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0A0A0F]/90 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="card-glow relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="border-b border-border p-7"
          style={{
            background: `linear-gradient(135deg, ${project.color === 'text-violet' ? 'rgba(124,58,237,0.12)' : project.color === 'text-cyan' ? 'rgba(6,182,212,0.12)' : 'rgba(245,166,35,0.12)'}, transparent)`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`pill border text-xs font-semibold ${project.color === 'text-violet'
                    ? 'border-violet/40 bg-violet/10 text-violet'
                    : project.color === 'text-cyan'
                      ? 'border-cyan/40 bg-cyan/10 text-cyan'
                      : 'border-gold/40 bg-gold/10 text-gold'
                  } px-3 py-1`}
              >
                {project.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                {project.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-violet hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-bg-subtle p-4 text-center"
              >
                <div className={`font-display text-2xl font-bold ${project.color}`}>
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 p-7">
          <div>
            <h3 className="mb-2 font-display text-base font-bold text-foreground">
              The Challenge
            </h3>
            <p className="leading-relaxed text-muted-foreground">{project.challenge}</p>
          </div>
          <div>
            <h3 className="mb-2 font-display text-base font-bold text-foreground">
              Our Solution
            </h3>
            <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
          </div>
          <div>
            <h3 className="mb-3 font-display text-base font-bold text-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="pill border border-border bg-bg-subtle px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3.5 text-sm font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.02]"
          >
            Start a Similar Project
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  const Icon = project.resultIcon
  return (
    <div
      className={`card-glow group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-${project.color === 'text-violet'
          ? 'violet'
          : project.color === 'text-cyan'
            ? 'cyan'
            : 'gold'
        }/60`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <div className="relative h-52 w-full overflow-hidden bg-bg-subtle">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // fallback if image missing
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement!.classList.add(
                'flex', 'items-center', 'justify-center'
              )
            }}
          />
        </div>
        {/* <div
          className="flex h-52 w-full items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${project.color === 'text-violet'
                ? 'rgba(124,58,237,0.15), rgba(124,58,237,0.05)'
                : project.color === 'text-cyan'
                  ? 'rgba(6,182,212,0.15), rgba(6,182,212,0.05)'
                  : 'rgba(245,166,35,0.15), rgba(245,166,35,0.05)'
              })`,
          }}
        >
          <div
            className={`inline-flex size-16 items-center justify-center rounded-2xl ${project.colorBg}`}
          >
            <Icon className={`size-8 ${project.color}`} />
          </div>
        </div> */}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0F]/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-105"
          >
            View Case Study
            <ExternalLink className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span
          className={`pill border text-xs font-semibold w-fit ${project.color === 'text-violet'
              ? 'border-violet/40 bg-violet/10 text-violet'
              : project.color === 'text-cyan'
                ? 'border-cyan/40 bg-cyan/10 text-cyan'
                : 'border-gold/40 bg-gold/10 text-gold'
            } px-3 py-1`}
        >
          {project.category}
        </span>
        <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.client}</p>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Result badge */}
        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border">
          <Icon className={`size-4 ${project.color}`} />
          <span className={`text-sm font-semibold ${project.color}`}>
            {project.result}
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [active, setActive] = useState<Category>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
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
              Our Work
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built with Purpose.{' '}
              <span className="text-gradient">Designed to Perform.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Real projects. Real results. Every case study below is a business
              that trusted us — and grew because of it.
            </p>
          </RevealItem>
        </Reveal>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-bg-subtle px-5 py-10 lg:px-8">
        <Reveal className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: '20+', label: 'Projects Delivered', color: 'text-violet' },
            { value: '6', label: 'Niches Served', color: 'text-cyan' },
            { value: '100%', label: 'Client Retention', color: 'text-gold' },
            { value: '3', label: 'Core Services', color: 'text-violet' },
          ].map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className={`font-display text-4xl font-bold ${s.color}`}>{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      {/* Filter + Grid */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">

          {/* Filter tabs */}
          <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <RevealItem key={cat}>
                <button
                  onClick={() => setActive(cat)}
                  className={`pill border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${active === cat
                      ? 'border-violet bg-violet/15 text-foreground'
                      : 'border-border bg-bg-subtle text-muted-foreground hover:border-violet/50 hover:text-foreground'
                    }`}
                >
                  {cat}
                </button>
              </RevealItem>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id}>
                <RevealItem>
                  <ProjectCard project={project} onOpen={setSelected} />
                </RevealItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="border-y border-border bg-bg-subtle px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mb-12 text-center">
            <RevealItem>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Clients Say
              </h2>
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  'Velina built our site in 3 days. Clients actually comment on how professional it looks compared to our competitors.',
                name: 'Ahmed Raza',
                role: 'Study Abroad Consultant, Lahore',
                color: 'border-violet',
              },
              {
                quote:
                  'The AI bot handles 80% of our WhatsApp queries automatically. It feels like we hired 3 extra support agents overnight.',
                name: 'Sara Malik',
                role: 'E-commerce Owner, Karachi',
                color: 'border-cyan',
              },
              {
                quote:
                  'We went from invisible on Google to the top result in our area. New patient bookings are up every single month.',
                name: 'Dr. Kamran',
                role: 'Dental Clinic, Islamabad',
                color: 'border-gold',
              },
            ].map((t) => (
              <RevealItem key={t.name}>
                <div
                  className={`card-glow h-full border-l-2 ${t.color} p-7`}
                >
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="size-4 fill-gold text-gold" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-violet/20 font-display text-base font-bold text-violet">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(160deg, #7c3aed 0%, #2a1065 45%, #0a0a0f 100%)',
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
              Ready to Be Our Next Case Study?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-md text-lg text-white/80">
              Book a free audit and let&apos;s figure out exactly how we can grow your business.
            </p>
          </RevealItem>
          <RevealItem>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
            >
              Start Your Project
              <ArrowRight className="size-4" />
            </Link>
          </RevealItem>
        </Reveal>
      </section>

      {/* Case study modal */}
      {selected && (
        <CaseStudyModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
