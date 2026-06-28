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

export const metadata: Metadata = {
  title: 'Velina Digital — We build. We automate. We grow.',
  description:
    'Velina Digital is your full-stack digital partner for Web Development, AI Automation, and Digital Marketing.',
  generator: 'v0.app',
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
