import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CursorGlow } from '@/components/cursor-glow'
import { FloatingCta } from '@/components/floating-cta'


const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

// export const metadata: Metadata = {
//   title: 'Velina Digital — We build. We automate. We grow.',
//   description:
//     'Velina Digital is your full-stack digital partner for Web Development, AI Automation, and Digital Marketing.',
//   generator: 'v0.app',
// }


export const metadata: Metadata = {
  title: 'Velina Digital — Web Development, AI Automation & Digital Marketing Pakistan',
  description: 'Velina Digital is Pakistan\'s AI-first digital agency based in Lahore. We build premium websites, AI automation systems, and run data-driven marketing campaigns for Pakistani businesses.',
  keywords: [
    'digital agency lahore',
    'web development pakistan',
    'website design lahore',
    'AI automation pakistan',
    'digital marketing lahore',
    'next.js developer pakistan',
    'velina digital',
    'web agency pakistan',
    'velina',
    'velina agency',
  ],
  metadataBase: new URL('https://velina.com.pk'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Velina Digital — Pakistan\'s AI-First Digital Agency',
    description: 'Premium web development, AI automation, and digital marketing for Pakistani businesses.',
    url: 'https://velina.com.pk',
    siteName: 'Velina Digital',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velina Digital',
    description: 'Pakistan\'s AI-First Digital Agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'pbQGbuVxwOiurc7-Prug0v7W6SZdCN0IHzdXbPC5yf8',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <CursorGlow />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingCta />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
