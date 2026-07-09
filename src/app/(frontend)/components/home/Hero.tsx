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
import type { Media } from '@/payload-types'

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

type CmsSlide = {
  id?: string
  title: string
  line1: string
  line2: string
  line3: string
  desktopImage: Media | number | string
  mobileImage?: Media | number | string | null
}

type HeroSlidesData = {
  slides?: CmsSlide[]
}

type SlideItem = {
  title: string
  titleLines: string[]
  desktopImage: string
  mobileImage: string
}

const Hero = () => {
  const [stats, setStats] = useState<HeroStat[]>([])
  const [slides, setSlides] = useState<SlideItem[]>([])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
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
    const fetchSlidesData = async () => {
      try {
        const data = (await fetchDataGet(endpoints.heroSlides.get)) as HeroSlidesData
        if (Array.isArray(data?.slides)) {
          const mappedSlides = data.slides.map((slide) => {
            const desktopImageUrl =
              slide.desktopImage &&
              typeof slide.desktopImage === 'object' &&
              'url' in slide.desktopImage
                ? slide.desktopImage.url || ''
                : ''
            const mobileImageUrl =
              slide.mobileImage &&
              typeof slide.mobileImage === 'object' &&
              'url' in slide.mobileImage
                ? slide.mobileImage.url || ''
                : desktopImageUrl
            return {
              title: slide.title || '',
              titleLines: [slide.line1 || '', slide.line2 || '', slide.line3 || ''],
              desktopImage: desktopImageUrl,
              mobileImage: mobileImageUrl || desktopImageUrl,
            }
          })
          setSlides(mappedSlides)
        }
      } catch (err) {
        console.error('Hero slides fetch error', err)
      }
    }

    fetchSlidesData()
  }, [])

  useEffect(() => {
    if (!sectionRef.current || slides.length === 0) return

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

      const slideshowTl = gsap.timeline({
        repeat: -1,
        delay: 2,
      })

      const slideSequence: number[] = []
      for (let i = 1; i < slides.length; i++) {
        slideSequence.push(i)
      }
      slideSequence.push(0)

      slideSequence.forEach((nextIdx) => {
        const line1 = slides[nextIdx].titleLines[0]
        const line2 = slides[nextIdx].titleLines[1]
        const line3 = slides[nextIdx].titleLines[2]

        slideshowTl

          .to(
            [
              '.hero-sub',
              '.hero-slide-img',
              '.hero-flag',
            ],
            {
              opacity: 0,
              duration: 0.7,
              ease: 'power2.inOut',
            },
            0,
          )
          .to(
            [
              '.hero-title-line-1',
              '.hero-title-line-2',
              '.hero-title-line-3',
              '.hero-desc',
              '.hero-buttons',
            ],
            {
              opacity: 0,
              y: -20,
              duration: 0.7,
              ease: 'power2.inOut',
            },
            0,
          )

          .call(() => {
            setCurrentSlideIndex(nextIdx)
          })

          .to({}, { duration: 0.2 })

          .set('.hero-slide-img', { scale: 1.05, opacity: 0 })
          .set('.hero-sub', { y: 10, opacity: 0 })
          .set('.hero-flag', { opacity: 0 })
          .set(
            [
              '.hero-title-line-1',
              '.hero-title-line-2',
              '.hero-title-line-3',
              '.hero-desc',
              '.hero-buttons',
            ],
            {
              opacity: 0,
              y: 20,
              filter: 'blur(10px)',
            },
          )

          .to('.hero-slide-img', {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
          })

          .to(
            '.hero-sub',
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
            },
            '-=0.6',
          )

          .to(
            '.hero-flag',
            {
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
            },
            '-=0.3',
          )

          .to(
            ['.hero-title-line-1', '.hero-title-line-2', '.hero-title-line-3'],
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.2,
              stagger: 0.18,
              ease: 'power3.out',
            },
            '-=0.45',
          )

          .to(
            '.hero-desc',
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.2,
              stagger: 0.18,
              ease: 'power3.out',
            },
            '-=0.85',
          )

          .to(
            '.hero-buttons',
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 1.2,
              ease: 'power3.out',
            },
            '-=0.85',
          )

          .to({}, { duration: 4.5 })
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
  }, [stats, slides])

  if (slides.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} className="pt-16 sm:pt-20 md:pt-28">
      <style>{`
        .typing-cursor {
          border-right: 3px solid currentColor;
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: currentColor }
        }
      `}</style>
      <div className="responsive-mx">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div ref={leftContentRef} className="md:pt-8 pt-4">
            <span className="hero-sub text-green font-poppins-600 text-2xl sm:mb-4 mb-2 block">
              {slides[currentSlideIndex].title}
            </span>

            <div className="hero-title">
              <h1 className="hero-title-line-1 font-poppins-500 md:tracking-wide tracking-wider text-2xl md:text-5xl lg:text-[3.6vw] text-navy inline-block">
                {slides[currentSlideIndex].titleLines[0]}
              </h1>
            </div>
            <div className="hero-title">
              <div className="hero-title-line-2 font-poppins-500 md:tracking-wide tracking-wider text-2xl md:text-5xl lg:text-[3.6vw] text-navy lg:mt-3 inline-block">
                {slides[currentSlideIndex].titleLines[1]}
              </div>
            </div>
            <div className="hero-title">
              <div className="hero-title-line-3 font-poppins-500 md:tracking-wide tracking-wider text-2xl md:text-5xl lg:text-[3.6vw] text-navy lg:mt-3 inline-block">
                {slides[currentSlideIndex].titleLines[2]}
              </div>
            </div>

            <div className="sm:mb-8 mb-6 mt-6">
              <p className="hero-desc text-gray font-poppins-400 tracking-wider text-xs md:text-base">
                Explore Pesino Pharma&#39;s State-of-the-Art Facilities and
              </p>
              <p className="hero-desc text-gray font-poppins-400 tracking-wider mt-1 text-xs md:text-base">
                Commitment to Quality Production.
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
            <Link href="/Products" className="relative flex items-end justify-end">
              <Image
                src={slides[currentSlideIndex].desktopImage}
                alt={slides[currentSlideIndex].title}
                width={570}
                height={570}
                priority
                className="hero-slide-img object-cover rounded-2xl"
              />
            </Link>
          </div>

          <div ref={mobileImageRef} className="hero-image lg:hidden block">
            <Link
              href="/Products"
              className="relative flex md:items-end items-center justify-center md:justify-end"
            >
              <Image
                src={slides[currentSlideIndex].mobileImage}
                alt={slides[currentSlideIndex].title}
                width={400}
                height={400}
                priority
                className="hero-slide-img object-cover rounded-2xl"
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
