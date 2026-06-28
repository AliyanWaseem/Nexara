import { Hero } from '@/components/sections/hero'
import { MarqueeBar } from '@/components/sections/marquee'
import { Services } from '@/components/sections/services'
import { WhyVelina } from '@/components/sections/why-Velina'
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
      <WhyVelina />
      <Stats />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCta />
    </>
  )
}
