import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Velina Digital Portfolio',
  description: 'Case studies and projects by Velina Digital — websites, AI automation systems and marketing campaigns for Pakistani businesses.',
  alternates: { canonical: '/work' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}