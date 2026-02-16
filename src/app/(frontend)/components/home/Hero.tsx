import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import endpoints from '../../config/endpoints'
import { fetchDataGet } from '../../utils/fetchData'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

type HeroStat = {
  value: string
  suffix?: string
  label: string
  id?: string
}

type HeroData = {
  stats?: HeroStat[]
}

const rotatingWords = ['Globalisation', 'Manufacturing', 'Research']

const Hero = () => {
  const [stats, setStats] = useState<HeroStat[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsContainerRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightImageRef = useRef<HTMLDivElement>(null)
  const mobileImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = (await fetchDataGet(endpoints.hero.getAll)) as HeroData
        if (Array.isArray(data?.stats)) {
          setStats(data.stats)
        }
      } catch (err) {
        console.error('Hero stats error', err)
      }
    }

    fetchHeroData()
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      })

      tl.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
        .from(
          '.hero-title',
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out',
          },
          '-=0.8',
        )
        .from(
          '.hero-desc',
          {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.8',
        )
        .from(
          '.hero-buttons',
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6',
        )
        .from(
          '.hero-image',
          {
            scale: 1.1,
            opacity: 0,
            duration: 1.8,
            ease: 'power2.out',
          },
          0,
        )

      const subTextTl = gsap.timeline({
        repeat: -1,
        delay: 1.2,
      })

      rotatingWords.forEach((word) => {
        subTextTl
          .to('.hero-sub', {
            opacity: 0,
            y: -10,
            duration: 0.35,
            ease: 'power2.in',
          })
          .set('.hero-sub', {
            text: word,
            y: 10,
          })
          .to('.hero-sub', {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          })
          .to({}, { duration: 1.5 })
      })

      if (stats.length > 0) {
        gsap.from('.stat-item', {
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          onStart: () => {
            const counters = document.querySelectorAll('.stat-number')
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target') || '0', 10)
              const obj = { val: 0 }
              gsap.to(obj, {
                val: target,
                duration: 2.5,
                ease: 'power4.out',
                onUpdate: () => {
                  counter.innerHTML = Math.floor(obj.val).toString()
                },
              })
            })
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [stats])

  return (
    <section ref={sectionRef} className="pt-16 sm:pt-20 md:pt-28">
      <div className="responsive-mx">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div ref={leftContentRef} className="md:pt-8 pt-4">
            <span className="hero-sub text-green font-poppins-600 text-2xl sm:mb-4 mb-2 block">
              Research
            </span>

            <div className="hero-title">
              <h1 className="font-poppins-500 tracking-wide text-3xl md:text-5xl lg:text-[3.9vw] text-navy">
                Precision & Excellence
              </h1>
            </div>
            <div className="hero-title">
              <div className="font-poppins-500 tracking-wide text-3xl md:text-5xl lg:text-[3.9vw] text-navy lg:mt-3">
                in Pharmaceutical
              </div>
            </div>
            <div className="hero-title">
              <div className="font-poppins-500 tracking-wide text-3xl md:text-5xl lg:text-[3.9vw] text-navy lg:mt-3">
                Manufacturing
              </div>
            </div>

            <div className="sm:mb-8 mb-6 mt-4">
              <p className="hero-desc text-gray font-poppins-400 tracking-wide text-sm md:text-base">
                Quality our way of life....
              </p>
              <p className="hero-desc text-gray font-poppins-400 tracking-wide text-sm md:text-base">
                Serving Humankind through quality Medicines
              </p>
            </div>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Button href="/Products">
                View Products
                <ArrowRight size={18} />
              </Button>

              <Button href="/Contactus" variant="outline">
                Contact us
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div ref={rightImageRef} className="hero-image lg:block hidden">
            <Link href="/Products" className="flex items-end justify-end">
              <Image
                src="/hero.png"
                alt="Pharmaceutical Research Scientist"
                width={570}
                height={570}
                priority
              />
            </Link>
          </div>

          <div ref={mobileImageRef} className="hero-image lg:hidden block">
            <Link
              href="/Products"
              className="flex md:items-end items-center justify-center md:justify-end"
            >
              <Image
                src="/hero1.png"
                alt="Pharmaceutical Research Scientist"
                width={400}
                height={400}
                priority
              />
            </Link>
          </div>
        </div>

        <div
          ref={statsContainerRef}
          className="flex justify-center items-center lg:-mt-[9vw] lg:mr-[25vw] xl:-mt-[8vw] xl:mr-[20vw]"
        >
          <div
            className="bg-white flex justify-center items-center sm:h-28 h-20 lg:h-[8vw] lg:w-[56.3vw] w-full rounded-2xl
            shadow-[0_5px_8px_-2px_rgba(0,0,0,0.3)]"
          >
            {stats.length > 0 && (
              <div
                className={`grid grid-cols-${stats.length > 4 ? 4 : stats.length} sm:gap-16 md:gap-28 lg:gap-[5vw]`}
              >
                {stats.map((stat, index) => (
                  <div key={stat.id || index} className="stat-item text-center">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span
                        className="stat-number text-navy font-poppins-500 text-lg sm:text-3xl lg:text-[3vw]"
                        data-target={stat.value.replace(/,/g, '')}
                      >
                        0
                      </span>
                      <span className="text-blue font-poppins-600 text-lg sm:text-3xl lg:text-[3vw]">
                        {stat.suffix}
                      </span>
                    </div>

                    <p className="text-gray font-poppins-400 xl:mt-5 mt-2 sm:text-xs text-[7px] tracking-wide font-medium lg:text-[0.9vw]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
