import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Velina — Get a Free Audit',
  description: 'Contact Velina Digital for a free website audit, AI automation consultation or digital marketing strategy. Based in Lahore, Pakistan.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}