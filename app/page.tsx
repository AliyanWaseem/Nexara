import { Hero } from '@/components/sections/hero'
import { MarqueeBar } from '@/components/sections/marquee'
import { Services } from '@/components/sections/services'
import { WhyNexara } from '@/components/sections/why-nexara'
import { Stats } from '@/components/sections/stats'
import { Process } from '@/components/sections/process'
import { Portfolio } from '@/components/sections/portfolio'
import { Testimonials } from '@/components/sections/testimonials'
import { FinalCta } from '@/components/sections/final-cta'

export default function Page() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <Services />
      <WhyNexara />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCta />
    </>
  )
}
