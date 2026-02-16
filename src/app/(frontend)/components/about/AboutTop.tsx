import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../ui/Button'
import Tick from '../ui/Tick'

gsap.registerPlugin(ScrollTrigger)

export const AboutTop = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const featuresRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      },
    })

    tl.fromTo(
      leftRef.current?.children || [],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
      },
    )

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: 'power3.out',
      },
      '-=0.4',
    )

    tl.fromTo(
      featuresRef.current?.children || [],
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.18,
      },
      '-=0.3',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="responsive-mx grid md:mt-0 mt-3 grid-cols-1 xl:grid-cols-3 md:gap-10 sm:gap-7 gap-6 items-center"
    >
      {/* LEFT */}
      <div ref={leftRef} className="xl:col-span-1">
        <h1 className="font-poppins-500 tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-[2.5vw] text-navy md:mb-6 mb-3">
          Your Strategic
          <span className="block lg:mt-3">Manufacturing Partner</span>
        </h1>

        <p className="sm:mt-5 text-gray font-poppins-400 md:text-base sm:text-sm text-xs leading-relaxed md:mb-8 sm:mb-5 mb-3">
          From proactive distribution to reliable supply chains, we bridge the gap between essential
          medication and patients worldwide, serving diverse communities across four continents.
        </p>

        <Button href="/Contactus" variant="outline">
          Contact us
        </Button>
      </div>

      {/* IMAGE */}
      <div ref={imageRef} className="xl:col-span-1 flex justify-center">
        <div className="relative w-full lg:max-w-full xl:max-w-none aspect-square rounded-2xl overflow-hidden">
          <Image src="/about-4.png" alt="Global Network" fill className="object-cover" priority />
        </div>
      </div>

      {/* FEATURES */}
      <div
        ref={featuresRef}
        className="xl:col-span-1 md:space-y-6 space-y-4 [&>div:last-child]:border-b-0"
      >
        <FeatureItem
          title="Extensive LATAM Network"
          description="We provide comprehensive pharmacy coverage across Panama, El Salvador, Ecuador, Peru, Chile, Venezuela, and Colombia."
        />

        <FeatureItem
          title="Trusted Care in Africa"
          description="Our dedicated supply chain reaches Angola, Mozambique, Zambia, Nigeria, the DRC, and Somalia ensuring timely access to medicine."
        />

        <FeatureItem
          title="Europe & Southeast Asia"
          description="Extending our high-quality services to key locations including the Netherlands, Portugal, Vietnam, and the Philippines."
        />
      </div>
    </section>
  )
}

const FeatureItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border-b border-black/10">
      <div className="flex gap-2">
        <div className="mt-1 shrink-0">
          <Tick />
        </div>

        <div className="tracking-wide">
          <h4 className="text-sm md:text-lg font-poppins-500 font-semibold text-black">{title}</h4>
          <p className="mt-1 mb-4 md:text-sm text-xs text-gray font-poppins-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
