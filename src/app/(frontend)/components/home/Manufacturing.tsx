import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ManufacturingSectionProps {
  titleLine1: string
  titleLine2: string
  description: string
  image: string
  reverse?: boolean
}

const ManufacturingSection = ({
  titleLine1,
  titleLine2,
  description,
  image,
  reverse = false,
}: ManufacturingSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'restart none restart none',
      },
    })

    // TEXT – MAGNETIC EXPAND
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        scaleY: 0.85,
        transformOrigin: 'top',
      },
      {
        opacity: 1,
        scaleY: 1,
        duration: 1.1,
        ease: 'power4.out',
      },
    )

    // IMAGE – DEPTH SNAP
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.88,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'power4.out',
      },
      '-=0.7',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="lg:my-20 md:my-20 sm:my-16 my-16">
      <div
        className={`responsive-mx grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 items-center ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* TEXT */}
        <div ref={textRef} className={reverse ? 'md:order-2' : 'md:order-1'}>
          <h2 className="text-xl sm:text-3xl md:text-2xl sm:text-start text-center lg:text-[2.6vw] font-poppins-500 font-semibold text-black tracking-wide leading-relaxed">
            {titleLine1}
          </h2>
          <h2 className="text-xl md:text-2xl sm:text-3xl sm:text-start text-center lg:text-[2.6vw] font-poppins-500 font-semibold text-black tracking-wide leading-relaxed sm:mt-1 xl:mt-5">
            {titleLine2}
          </h2>

          <p className="xl:mt-8 md:mt-6 mt-3 text-gray text-xs sm:text-start text-justify font-poppins-400 xl:text-base tracking-wide sm:text-sm leading-relaxed lg:max-w-xl">
            {description}
          </p>
        </div>

        {/* IMAGE */}
        <div ref={imageRef} className={reverse ? 'md:order-1' : 'md:order-2'}>
          <Link href="/Products">
            <div className="relative w-full bg-white rounded-2xl shadow-lg h-[220px] sm:h-[460px] md:h-[320px] lg:h-[30vw] overflow-hidden">
              <Image
                src={image}
                alt={`${titleLine1} ${titleLine2}`}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ManufacturingSection
