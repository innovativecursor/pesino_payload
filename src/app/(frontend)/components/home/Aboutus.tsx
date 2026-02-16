import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Tick from '../ui/Tick'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const Aboutus = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Main About Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl.from('.about-img-main', {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
        .from(
          '.about-content > *',
          {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
          },
          '-=1',
        )
        .from(
          '.about-tick-item',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.5',
        )

      // Bottom Images Staggered Reveal
      gsap.from('.about-img-bottom', {
        scrollTrigger: {
          trigger: '.about-bottom-row',
          start: 'top 90%',
          toggleActions: 'play reverse play reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="xl:mt-32 md:mt-20 mt-12 responsive-mx">
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-5 items-center">
        <div className="w-full about-img-main">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/about.png"
              alt="Healthy lifestyle"
              width={900}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col about-content">
          <span className="text-green font-poppins-600 md:text-2xl sm:text-start text-center text-lg block md:mb-3">
            Supercharge Your Health
          </span>

          <h2 className="text-3xl md:text-5xl font-poppins-500 sm:text-start text-center xl:mb-8 md:mb-6 mb-4 lg:text-4xl font-bold text-gray-900">
            About Pesino Pharma
          </h2>

          <p className="text-gray text-xs md:text-base sm:text-start text-justify font-poppins-400 leading-relaxed">
            {` Elevate your well-being with Pesino Pharma's premium health solutions. Our
            scientifically backed formulas, crafted with natural ingredients, offer potent immunity
            boosters, joint health support, and essential nutritional supplements. Trust Pesino
            Pharma for quality-tested products and personalized plans, guiding you towards optimal
            health. Supercharge your vitality with us today.`}
          </p>

          <div className="flex flex-wrap xl:gap-9 gap-4 xl:mt-10 mt-6">
            {['Values', 'Partnering', 'Innovating', 'Leading'].map((item, _index) => (
              <div key={_index} className="about-tick-item flex items-center gap-2">
                <Tick />
                <span className="xl:text-xl md:text-base text-xs font-poppins-500 text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-bottom-row flex-between-center md:flex-row flex-col mt-6 sm:mt-10 md:mt-0 md:gap-4 gap-2 ">
        <div className="md:flex-between-start flex-between-center md:gap-4 gap-2">
          <div className="about-img-bottom overflow-hidden md:h-[200px] xl:h-[280px] sm:h-[200px] h-[120px] flex items-center">
            <Image
              src="/about1.png"
              alt="Healthy lifestyle"
              width={900}
              height={300}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          <Link
            href="/Aboutus"
            className="about-img-bottom overflow-hidden md:h-[200px] xl:h-[280px] sm:h-[200px] h-[120px] flex items-center"
          >
            <Image
              src="/about2.png"
              alt="Healthy lifestyle"
              width={900}
              height={300}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="about-img-bottom overflow-hidden md:h-[200px] xl:h-[280px] sm:h-[200px] h-[100px] flex items-center">
          <Image
            src="/about3.png"
            alt="Healthy lifestyle"
            width={900}
            height={300}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
