import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import {
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  WhatsAppIcon,
} from '@/components/social-icons'

const SERVICES = [
  { label: 'Web Development', href: '/services' },
  { label: 'AI Automation', href: '/services' },
  { label: 'Digital Marketing', href: '/services' },
  { label: 'Brand Strategy', href: '/services' },
]

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/work' },
  { label: 'About Us', href: '/#about' },
  { label: 'Process', href: '/process' },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Twitter / X', href: 'https://x.com', Icon: XIcon },
  { label: 'WhatsApp', href: 'https://wa.me/', Icon: WhatsAppIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              We build. We automate. We grow.
            </p>
            <ul className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-violet hover:text-foreground"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — services */}
          <FooterColumn title="Services" links={SERVICES} />

          {/* Col 3 — quick links */}
          <FooterColumn title="Quick Links" links={QUICK_LINKS} />

          {/* Col 4 — contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@nexara.digital"
                  className="transition-colors hover:text-foreground"
                >
                  hello@nexara.digital
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="transition-colors hover:text-foreground"
                >
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="font-mono text-xs">Remote · Worldwide</li>
            </ul>
            <Link
              href="/#audit"
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-violet px-4 py-2.5 text-sm font-semibold text-foreground transition-[filter] duration-200 hover:brightness-110"
            >
              Book a Call
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexara Digital. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Made with AI &amp; Obsession
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
