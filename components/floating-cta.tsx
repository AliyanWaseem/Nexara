'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FloatingCta() {
  return (
    <Link
      href="/#audit"
      className="animate-gold-pulse fixed bottom-5 right-5 z-50 inline-flex items-center gap-1.5 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-[#0A0A0F] shadow-lg transition-transform duration-200 hover:scale-[1.04] sm:bottom-8 sm:right-8"
    >
      Free Audit
      <ArrowRight className="size-4" />
    </Link>
  )
}
