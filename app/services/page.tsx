'use client'

import Link from 'next/link'
import {
  Code2,
  Bot,
  TrendingUp,
  Check,
  ArrowRight,
  Globe,
  FileText,
  Shield,
  Zap,
  BookOpen,
  Plane,
  Search,
  Share2,
  BarChart3,
  Mail,
  Target,
  Cpu,
  MessageSquare,
  Workflow,
  Database,
  Clock,
} from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'

// ─── Service Detail Cards ────────────────────────────────────────────────────

const WEB_FEATURES = [
  { icon: Globe, text: 'Custom Next.js / React websites' },
  { icon: Zap, text: 'Mobile-first, blazing fast (90+ Lighthouse score)' },
  { icon: Search, text: 'SEO-ready architecture from day one' },
  { icon: MessageSquare, text: 'WhatsApp & CRM integrations' },
  { icon: Shield, text: 'Deployed on Vercel — 99.9% uptime' },
  { icon: FileText, text: 'Handoff with training & documentation' },
]

const WEB_TAGS = ['Next.js', 'React', 'Tailwind', 'TypeScript', 'Vercel']

const AI_FEATURES = [
  { icon: Bot, text: 'Custom AI agents for lead handling' },
  { icon: Workflow, text: 'n8n workflow automation' },
  { icon: MessageSquare, text: 'WhatsApp AI chatbots' },
  { icon: Mail, text: 'Email automation pipelines' },
  { icon: Database, text: 'CRM auto-population' },
  { icon: Clock, text: '24/7 automated customer support' },
]

const AI_TAGS = ['n8n', 'OpenAI', 'LangChain', 'Python', 'Webhooks']

const MARKETING_FEATURES = [
  { icon: Search, text: 'SEO (on-page, technical, local)' },
  { icon: Target, text: 'Meta & Google Ads management' },
  { icon: Share2, text: 'Social media content strategy' },
  { icon: BarChart3, text: 'Monthly performance reports' },
  { icon: Globe, text: 'Competitor analysis' },
  { icon: Zap, text: 'Lead generation funnels' },
]

const MARKETING_TAGS = ['Google Analytics', 'Meta Ads', 'SEMrush', 'Search Console']

// ─── Pricing ────────────────────────────────────────────────────────────────

const PACKAGES = [
  {
    name: 'Starter',
    price: 'PKR 25k–40k',
    desc: 'Perfect for getting your digital presence launched fast.',
    features: [
      '5-page website or single workflow',
      'Mobile-responsive design',
      'WhatsApp integration',
      'Basic on-page SEO',
      '1 month support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'PKR 60k–90k',
    desc: 'The full package for businesses ready to scale.',
    features: [
      'Everything in Starter',
      'AI chatbot or automation workflow',
      'Google Business Profile setup',
      'Blog + 2 SEO articles',
      'Analytics dashboard',
      '3 months support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'End-to-end digital transformation for serious businesses.',
    features: [
      'Everything in Growth',
      'Full AI automation suite',
      'Ongoing marketing campaigns',
      'Dedicated account manager',
      'Monthly strategy calls',
      'Priority support',
    ],
    cta: 'Let\'s Talk',
    highlight: false,
  },
]

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How long does a website take to build?',
    a: 'A standard 5-page website takes 5–7 business days. Rush delivery is available for an additional fee.',
  },
  {
    q: 'Do you work with clients outside Lahore?',
    a: 'Yes — we work fully remotely with clients across Pakistan and internationally. All communication via WhatsApp and video call.',
  },
  {
    q: 'What\'s included in the free audit?',
    a: 'We analyze your current website, Google rankings, social presence, and competitor landscape — then give you a clear action plan.',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Absolutely. We offer a 50% upfront + 50% on delivery structure for all projects.',
  },
  {
    q: 'Do you offer monthly retainers?',
    a: 'Yes. Retainers start from PKR 8,000/month for maintenance and updates, up to full ongoing marketing management.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'All packages include a support period. After that, retainer plans or per-hour rates apply.',
  },
]

// ─── Tech stack ──────────────────────────────────────────────────────────────

const TECH = [
  { name: 'Next.js', color: 'text-foreground' },
  { name: 'React', color: 'text-cyan' },
  { name: 'Tailwind', color: 'text-violet' },
  { name: 'TypeScript', color: 'text-cyan' },
  { name: 'Python', color: 'text-gold' },
  { name: 'n8n', color: 'text-violet' },
  { name: 'OpenAI', color: 'text-cyan' },
  { name: 'Vercel', color: 'text-foreground' },
  { name: 'Framer', color: 'text-violet' },
  { name: 'Figma', color: 'text-gold' },
  { name: 'Meta Ads', color: 'text-cyan' },
  { name: 'GA4', color: 'text-violet' },
]

// ─── FAQ Item ────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-border py-5 [&>summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
        {q}
        <span className="ml-auto shrink-0 text-violet transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
    </details>
  )
}

// ─── Service Block ────────────────────────────────────────────────────────────

function ServiceBlock({
  id,
  num,
  numColor,
  icon: Icon,
  iconColor,
  iconBg,
  title,
  description,
  features,
  tags,
  cta,
  flip = false,
  bg = 'bg-bg-primary',
}: {
  id: string
  num: string
  numColor: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
  title: string
  description: string
  features: { icon: React.ElementType; text: string }[]
  tags: string[]
  cta: string
  flip?: boolean
  bg?: string
}) {
  const content = (
    <>
      {/* Text side */}
      <Reveal className="flex flex-col justify-center">
        <RevealItem>
          <span className={`font-display text-6xl font-bold ${numColor} opacity-30 leading-none`}>
            {num}
          </span>
        </RevealItem>
        <RevealItem>
          <div className={`mt-4 inline-flex size-14 items-center justify-center rounded-xl ${iconBg}`}>
            <Icon className={`size-7 ${iconColor}`} />
          </div>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
        </RevealItem>
        <RevealItem>
          <ul className="mt-6 flex flex-col gap-3">
            {features.map(({ icon: FIcon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-violet/15">
                  <Check className="size-3.5 text-violet" />
                </span>
                <span className="leading-snug text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </RevealItem>
        <RevealItem>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="pill border border-border bg-bg-subtle px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </RevealItem>
        <RevealItem>
          <Link
            href="#audit"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
          >
            {cta}
            <ArrowRight className="size-4" />
          </Link>
        </RevealItem>
      </Reveal>

      {/* Visual side */}
      <Reveal>
        <RevealItem>
          <div className="card-glow flex aspect-square max-h-[420px] w-full flex-col items-center justify-center gap-6 p-8">
            <div className={`inline-flex size-24 items-center justify-center rounded-2xl ${iconBg}`}>
              <Icon className={`size-12 ${iconColor}`} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground text-center">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="pill border border-border bg-bg-subtle px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* decorative dots */}
            <div className="mt-2 grid grid-cols-5 gap-2" aria-hidden>
              {Array.from({ length: 15 }).map((_, i) => (
                <span
                  key={i}
                  className="size-1.5 rounded-full bg-border"
                  style={{ opacity: Math.random() * 0.6 + 0.2 }}
                />
              ))}
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </>
  )

  return (
    <section id={id} className={`${bg} px-5 py-24 lg:px-8 lg:py-32`}>
      <div
        className={`mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {content}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <div className="dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/2 z-0 size-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden
        />
        <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Our Services
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Everything Your Business Needs to{' '}
              <span className="text-gradient">Dominate Online</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Three powerful services. One focused team. Infinite growth possibilities.
            </p>
          </RevealItem>
          <RevealItem>
            <Link
              href="#audit"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
            >
              Get a Free Audit
              <ArrowRight className="size-4" />
            </Link>
          </RevealItem>
        </Reveal>
      </section>

      {/* Service 01 — Web Development */}
      <ServiceBlock
        id="web-development"
        num="01"
        numColor="text-violet"
        icon={Code2}
        iconColor="text-violet"
        iconBg="bg-violet/15"
        title="Premium Web Development"
        description="Fast, modern websites and web apps that convert visitors into paying clients. We don't use bloated WordPress templates — everything is custom-built on Next.js for speed, SEO, and scalability."
        features={WEB_FEATURES}
        tags={WEB_TAGS}
        cta="Get a Website Quote"
        bg="bg-bg-primary"
      />

      {/* Service 02 — AI Automation */}
      <ServiceBlock
        id="ai-automation"
        num="02"
        numColor="text-cyan"
        icon={Bot}
        iconColor="text-cyan"
        iconBg="bg-cyan/15"
        title="AI Automation & Agentic AI"
        description="Stop wasting hours on repetitive tasks. We build intelligent agents and n8n workflows that handle lead qualification, customer support, email follow-ups, and CRM management — running 24/7 so you don't have to."
        features={AI_FEATURES}
        tags={AI_TAGS}
        cta="Automate My Business"
        flip
        bg="bg-bg-subtle"
      />

      {/* Service 03 — Digital Marketing */}
      <ServiceBlock
        id="digital-marketing"
        num="03"
        numColor="text-gold"
        icon={TrendingUp}
        iconColor="text-gold"
        iconBg="bg-gold/15"
        title="Digital Marketing & Growth"
        description="Data-driven SEO, Meta Ads, and content strategies that bring real leads — not vanity metrics. We track what actually makes you money and double down on it every month."
        features={MARKETING_FEATURES}
        tags={MARKETING_TAGS}
        cta="Grow My Business"
        bg="bg-bg-primary"
      />

      {/* Pricing */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
                Pricing
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Transparent Pricing
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-3 text-lg text-muted-foreground">
                No hidden fees. No surprises. Just honest quotes.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <RevealItem key={pkg.name} className="h-full">
                <div
                  className={`card-glow relative flex h-full flex-col p-7 ${
                    pkg.highlight
                      ? 'border-violet/60 shadow-[0_0_30px_rgba(124,58,237,0.25)] lg:-translate-y-4'
                      : ''
                  }`}
                >
                  {pkg.highlight && (
                    <span className="pill absolute right-6 top-6 bg-gold px-3 py-1 text-xs font-bold text-[#0A0A0F]">
                      Best Value
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground">{pkg.name}</h3>
                  <div className="mt-3 font-display text-3xl font-bold text-gradient">
                    {pkg.price}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pkg.desc}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-violet/15">
                          <Check className="size-3 text-violet" />
                        </span>
                        <span className="text-sm leading-snug text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#audit"
                    className={`mt-auto pt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${
                      pkg.highlight
                        ? 'bg-violet text-foreground hover:brightness-110'
                        : 'border border-border text-foreground hover:border-violet hover:bg-violet/10'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </RevealItem>
            ))}
          </Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All prices in PKR. Custom quotes available for larger projects.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-bg-primary px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tools We Use
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-3 text-muted-foreground">
                Best-in-class stack — chosen for performance, reliability, and results.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {TECH.map((t) => (
              <RevealItem key={t.name}>
                <div className="card-glow flex flex-col items-center gap-3 p-5 text-center">
                  <span className={`font-mono text-sm font-semibold ${t.color}`}>{t.name}</span>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Common Questions
              </h2>
            </RevealItem>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(160deg, #7c3aed 0%, #2a1065 45%, #0a0a0f 100%)' }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-20 -top-20 z-0 size-72 rotate-12 rounded-3xl border border-white/10" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -left-16 z-0 size-80 rounded-full border border-white/10" aria-hidden />

        <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
          <RevealItem>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Not Sure Where to Start?
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-md text-lg text-white/80">
              Book a free audit — we'll tell you exactly what your business needs and what it'll cost. No commitment.
            </p>
          </RevealItem>
          <RevealItem>
            <Link
              href="#audit"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.03]"
            >
              Get My Free Audit
              <ArrowRight className="size-4" />
            </Link>
          </RevealItem>
        </Reveal>
      </section>
    </>
  )
}
