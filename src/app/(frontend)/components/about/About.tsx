'use client'

import Image from 'next/image'
import ManufacturingSection from '../home/Manufacturing'
import { AboutQuality } from './AboutQuality'
import { AboutTop } from './AboutTop'
import AboutCertificate from './AboutCertificate'
import AboutManufacturingData from './AboutManufacturingData'

export const About = () => {
  return (
    <>
      <AboutTop />
      <div className="lg:my-28 md:my-20 sm:my-16 my-8 responsive-mx">
        <Image
          src="/about11.png"
          alt="about image"
          width={900}
          height={900}
          className="object-contain w-full h-auto"
        />
      </div>
      <AboutCertificate />
      <AboutManufacturingData />
      <AboutQuality />
      <ManufacturingSection
        titleLine1="Our Vision: Enhanced"
        titleLine2="Healthcare For Everyone"
        description="Pesino Pharmaceuticals Pvt. Ltd., incorporated in 1992 is a professionally managed integrated innovative organization with an objective of providing quality medicines at an affordable price. As a vision to provide excellence in product development, Pesino Pharma followed a mission of improved human healthcare. Pesino Pharma is a distinguished Indian pharmaceutical manufacturer and exporter. We prioritize consistency in quality, purity, and efficacy across our manufacturing units. With a focus on validated machinery, manufacturing processes, and cleaning procedures, we ensure that our products meet international standards."
        image="/about-5.png"
        reverse
      />
    </>
  )
}
