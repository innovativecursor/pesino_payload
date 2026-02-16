'use client'

import Hero from './Hero'
import { Aboutus } from './Aboutus'
import { Global } from './Global'
import { CallUs } from './CallUs'
import Benefits from './Benefits'
import ManufacturingSection from './Manufacturing'

export const HomeData = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Benefits />
      <ManufacturingSection
        titleLine1="Excellence in Pharmaceutical"
        titleLine2="Manufacturing"
        description="At Pesino Pharma we operate a cutting-edge, fully automated manufacturing facility that meets WHO standards and adheres strictly to cGMP norms. Our advanced plant and machinery enable efficient, high-quality drug production under a comprehensive Total Quality Management (TQM) system covering production, storage, quality control, quality assurance and engineering services. With validated processes and rigorous controls, we ensure every product is manufactured with the highest levels of purity, safety and efficacy."
        image="/about-3.png"
      />
      <CallUs />
      <Global />
    </>
  )
}
