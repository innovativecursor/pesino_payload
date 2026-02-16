import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Global = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 60%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      },
    })

    // HEADING
    tl.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 30,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
      },
    )

    // DESCRIPTION
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 24,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.45',
    )

    // IMAGE
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.3',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef}>
      <div className="bg-[#EEF7F9] py-9 sm:py-14 md:py-16 lg:py-28">
        <div className="responsive-mx">
          <div className="text-center sm:mb-8 mb-6 md:mb-12">
            <h2
              ref={headingRef}
              className="font-poppins-500 text-black tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[3.2vw] lg:mb-6 sm:mb-4 mb-2"
            >
              Our Global Footprint
            </h2>

            <p
              ref={textRef}
              className="font-poppins-400 text-gray tracking-wide lg:text-sm text-[9px] mx-auto leading-relaxed"
            >
              Delivering trusted pharmaceutical solutions to communities across four continents –
              Southeast Asia, Africa, Europe, and Latin America.
            </p>
          </div>

          <div ref={imageRef} className="md:mt-5">
            <Image
              src="/global.png"
              alt="global image"
              width={900}
              height={900}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
