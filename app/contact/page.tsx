'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { Reveal, RevealItem } from '@/components/reveal'
import { WhatsAppIcon, LinkedInIcon, InstagramIcon, XIcon } from '@/components/social-icons'

// ─── Types ───────────────────────────────────────────────────────────────────

type FormData = {
  name: string
  business: string
  email: string
  whatsapp: string
  city: string
  services: string[]
  budget: string
  description: string
  source: string
}

const INITIAL: FormData = {
  name: '',
  business: '',
  email: '',
  whatsapp: '',
  city: '',
  services: [],
  budget: '',
  description: '',
  source: '',
}

// ─── Options ─────────────────────────────────────────────────────────────────

const SERVICES_OPTIONS = [
  'Web Development',
  'AI Automation',
  'Agentic AI',
  'Digital Marketing',
  'Full Package',
]

const CITY_OPTIONS = ['Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Other']

const BUDGET_OPTIONS = [
  'Under PKR 30k',
  'PKR 30k – 60k',
  'PKR 60k – 100k',
  'PKR 100k+',
  "Let's Discuss",
]

const SOURCE_OPTIONS = [
  'Google Search',
  'Instagram',
  'LinkedIn',
  'WhatsApp',
  'Referral',
  'Other',
]

const FAQS = [
  {
    q: 'How fast can you start?',
    a: 'We typically kick off within 48 hours of signing off on scope and receiving the first payment.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — fully remote. We work with clients across Pakistan and internationally via WhatsApp and video call.',
  },
  {
    q: "What's included in the free audit?",
    a: 'Website analysis, Google ranking check, social presence review, competitor snapshot, and a clear action plan — all free.',
  },
  {
    q: 'Can I pay in installments?',
    a: '50% upfront, 50% on delivery for all projects. Retainers are billed monthly.',
  },
  {
    q: 'Do you offer monthly retainers?',
    a: 'Yes — starting from PKR 8,000/month for maintenance up to full ongoing marketing management.',
  },
]

// ─── Input component ──────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  )
}

function Input({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 outline-none focus:border-violet focus:ring-1 focus:ring-violet/40 ${className}`}
      {...props}
    />
  )
}

function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="w-full rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-foreground transition-colors duration-200 outline-none focus:border-violet focus:ring-1 focus:ring-violet/40 appearance-none"
      {...props}
    >
      {children}
    </select>
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={4}
      className="w-full resize-none rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 outline-none focus:border-violet focus:ring-1 focus:ring-violet/40"
      {...props}
    />
  )
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

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

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function toggleService(s: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }))
  }

  function validate() {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'Your name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.whatsapp.trim()) e.whatsapp = 'WhatsApp number is required'
    if (!form.budget) e.budget = 'Please select a budget range'
    if (form.services.length === 0) e.services = 'Select at least one service'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate submission — replace with your actual API call / form service
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8">
        <div className="dot-grid pointer-events-none absolute inset-0 z-0" aria-hidden />
        <div
          className="pointer-events-none absolute -top-20 left-1/2 z-0 size-[440px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden
        />
        <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
          <RevealItem>
            <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
              Get In Touch
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Great.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Tell us about your project — we&apos;ll get back within 2 hours during office hours.
            </p>
          </RevealItem>
        </Reveal>
      </section>

      {/* Main content */}
      <section className="px-5 pb-24 pt-8 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_380px]">

          {/* ── Form ── */}
          <Reveal>
            <RevealItem>
              <div className="card-glow p-7 sm:p-10">
                {submitted ? (
                  /* Success state */
                  <div className="flex flex-col items-center gap-5 py-16 text-center">
                    <CheckCircle2 className="size-16 text-violet" />
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Inquiry Received!
                    </h2>
                    <p className="max-w-sm text-muted-foreground">
                      Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''}! We&apos;ll review
                      your details and get back to you within 2 hours.
                    </p>
                    <Link
                      href="/"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-violet hover:bg-violet/10"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Send Your Inquiry
                    </h2>

                    {/* Row 1 */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your Name *" error={errors.name}>
                        <Input
                          placeholder="Ahmed Raza"
                          value={form.name}
                          onChange={(e) => set('name', e.target.value)}
                        />
                      </Field>
                      <Field label="Business Name">
                        <Input
                          placeholder="Raza Consultants"
                          value={form.business}
                          onChange={(e) => set('business', e.target.value)}
                        />
                      </Field>
                    </div>

                    {/* Row 2 */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Email Address *" error={errors.email}>
                        <Input
                          type="email"
                          placeholder="ahmed@example.com"
                          value={form.email}
                          onChange={(e) => set('email', e.target.value)}
                        />
                      </Field>
                      <Field label="WhatsApp Number *" error={errors.whatsapp}>
                        <Input
                          type="tel"
                          placeholder="+92 300 0000000"
                          value={form.whatsapp}
                          onChange={(e) => set('whatsapp', e.target.value)}
                        />
                      </Field>
                    </div>

                    {/* Row 3 */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your City">
                        <Select value={form.city} onChange={(e) => set('city', e.target.value)}>
                          <option value="">Select city</option>
                          {CITY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
                        </Select>
                      </Field>
                      <Field label="Budget Range *" error={errors.budget}>
                        <Select value={form.budget} onChange={(e) => set('budget', e.target.value)}>
                          <option value="">Select budget</option>
                          {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
                        </Select>
                      </Field>
                    </div>

                    {/* Services multi-select */}
                    <Field label="Services Interested In *" error={errors.services}>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {SERVICES_OPTIONS.map((s) => {
                          const active = form.services.includes(s)
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleService(s)}
                              className={`pill border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                active
                                  ? 'border-violet bg-violet/15 text-foreground'
                                  : 'border-border bg-bg-card text-muted-foreground hover:border-violet/60 hover:text-foreground'
                              }`}
                            >
                              {s}
                            </button>
                          )
                        })}
                      </div>
                    </Field>

                    {/* Description */}
                    <Field label="Tell Us About Your Project">
                      <Textarea
                        placeholder="Describe your business, goals, and what you need help with..."
                        value={form.description}
                        onChange={(e) => set('description', e.target.value)}
                      />
                    </Field>

                    {/* Source */}
                    <Field label="How Did You Hear About Us?">
                      <Select value={form.source} onChange={(e) => set('source', e.target.value)}>
                        <option value="">Select an option</option>
                        {SOURCE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                      </Select>
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-base font-semibold text-[#0A0A0F] transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-[#0A0A0F] border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send My Inquiry
                          <Send className="size-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      🔒 Your information is 100% confidential. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </RevealItem>
          </Reveal>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-6">

            {/* Contact card */}
            <Reveal>
              <RevealItem>
                <div className="card-glow overflow-hidden">
                  <div className="border-b border-border bg-violet/10 px-7 py-5">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Prefer Direct Contact?
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5 p-7">

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/923000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-border bg-bg-subtle p-4 transition-colors duration-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                        <WhatsAppIcon className="size-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">WhatsApp Us</div>
                        <div className="text-xs text-muted-foreground">+92 300 000 0000</div>
                      </div>
                      <ArrowRight className="ml-auto size-4 text-muted-foreground" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:hello@Velinadigital.com"
                      className="flex items-center gap-4 rounded-xl border border-border bg-bg-subtle p-4 transition-colors duration-200 hover:border-violet/60 hover:bg-violet/10"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-violet/15 text-violet">
                        <Mail className="size-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Email Us</div>
                        <div className="text-xs text-muted-foreground">hello@Velinadigital.com</div>
                      </div>
                      <ArrowRight className="ml-auto size-4 text-muted-foreground" />
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-subtle p-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                        <MapPin className="size-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Based In</div>
                        <div className="text-xs text-muted-foreground">Lahore, Pakistan</div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-subtle p-4">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                        <Clock className="size-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Office Hours</div>
                        <div className="text-xs text-muted-foreground">Mon–Sat, 10AM–8PM PKT</div>
                      </div>
                    </div>

                    {/* Response promise */}
                    <div className="rounded-xl border border-gold/30 bg-gold/10 p-4 text-center">
                      <p className="text-sm font-semibold text-gold">⚡ We respond within 2 hours</p>
                      <p className="mt-1 text-xs text-muted-foreground">during office hours</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            </Reveal>

            {/* Social links */}
            <Reveal>
              <RevealItem>
                <div className="card-glow p-7">
                  <h3 className="mb-4 font-display text-base font-bold text-foreground">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com' },
                      { label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com' },
                      { label: 'Twitter / X', Icon: XIcon, href: 'https://x.com' },
                      { label: 'WhatsApp', Icon: WhatsAppIcon, href: 'https://wa.me/923000000000' },
                    ].map(({ label, Icon, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-lg border border-border bg-bg-subtle px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-violet hover:text-foreground"
                      >
                        <Icon className="size-4 shrink-0" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </RevealItem>
            </Reveal>

            {/* WhatsApp CTA */}
            <Reveal>
              <RevealItem>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-4 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="size-5" />
                  Chat on WhatsApp Now
                </a>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Most clients get a reply within minutes
                </p>
              </RevealItem>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-subtle px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <RevealItem>
              <span className="pill inline-flex border border-violet/40 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
                FAQ
              </span>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Quick Answers
              </h2>
            </RevealItem>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Bottom WhatsApp strip */}
      <section className="border-t border-border bg-bg-primary px-5 py-12 lg:px-8">
        <Reveal className="mx-auto flex max-w-[1280px] flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <RevealItem>
            <div className="flex items-center gap-3">
              <MessageSquare className="size-6 text-violet" />
              <p className="font-display text-lg font-bold text-foreground">
                Prefer to just chat?
              </p>
            </div>
            <p className="mt-1 text-muted-foreground">
              Send us a WhatsApp message and we&apos;ll figure out the rest together.
            </p>
          </RevealItem>
          <RevealItem>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
            >
              <WhatsAppIcon className="size-4" />
              Open WhatsApp
              <ArrowRight className="size-4" />
            </a>
          </RevealItem>
        </Reveal>
      </section>
    </>
  )
}