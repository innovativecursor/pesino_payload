'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type CardRef = HTMLDivElement | null

const benefitsData = [
  {
    id: 1,
    title: 'Quality',
    image: '/benifit-1.svg',
    points: [
      'Strict standards ensure safe and pure medicines.',
      'Quality Circles enforce full cGMP compliance.',
      'Every product is rigorously checked for consistency.',
    ],
  },
  {
    id: 2,
    title: 'Manufacturing',
    image: '/benifit-2.svg',
    points: [
      'We follow strict WHO-compliant cGMP norms.',
      'Automated, modern machinery boosts efficiency.',
      'TQM ensures controlled and consistent operations.',
    ],
  },
  {
    id: 3,
    title: 'Export Markets',
    image: '/benifit-3.svg',
    points: [
      'Strong exports across Central/South America, Africa, & Middle East.',
      'Focused brand marketing drives global reach.',
      'Promotions help us hold a niche in international markets.',
    ],
  },
  {
    id: 4,
    title: 'Research & Development',
    image: '/benifit-4.svg',
    points: [
      'Skilled experts with 20+ years lead our R&D team.',
      'We specialize in advanced formulation and development.',
      'Our team is dedicated to continuous pharmaceutical innovation.',
    ],
  },
]

const Benefits = () => {
  const cardsRef = useRef<CardRef[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const fromX = index % 2 === 0 ? -140 : 140
      const fromY = 60
      const rotate = index % 2 === 0 ? -4 : 4

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: fromX,
          y: fromY,
          rotate,
          scale: 0.94,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.6,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 60%',
            toggleActions: 'restart none restart none',
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="lg:mt-20 mt-12 md:mt-0">
      <div className="bg-lavender py-10 md:py-16 lg:py-20">
        <div className="responsive-mx">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-poppins-500 text-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.8vw] mb-3">
              Benefits of Choosing Us
            </h2>
            <p className="font-poppins-400 text-gray text-[11px] sm:text-xs lg:text-sm max-w-2xl mx-auto leading-relaxed">
              As a vision to provide excellence in product development, Pesino Pharma
              <br className="hidden sm:block" />
              followed a mission of improved human healthcare.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <div
                key={benefit.id}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-5 lg:gap-8">
                  <div className="hidden md:block">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={70}
                      height={70}
                      className="object-contain w-12 sm:w-14 md:w-[50px] lg:w-[70px]"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex md:hidden items-center gap-2 mb-3">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={24}
                        height={24}
                      />
                      <h3 className="font-poppins-500 text-black text-lg">
                        {benefit.title}
                      </h3>
                    </div>

                    <h3 className="hidden md:block font-poppins-500 text-black text-xl md:text-2xl lg:text-[1.7vw] mb-4">
                      {benefit.title}
                    </h3>

                    <ul className="space-y-2">
                      {benefit.points.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="font-poppins-500 text-black">
                            {i + 1}
                          </span>
                          <p className="font-poppins-400 text-gray text-[12px] lg:text-sm leading-relaxed">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Benefits
