import { useEffect, useRef } from 'react'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const CallUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const items = Array.from(contentRef.current.children)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'restart none restart none',
      },
    })

    // LOGO
    tl.fromTo(
      items[0],
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

    // HEADING LINE 1
    tl.fromTo(
      items[1],
      {
        opacity: 0,
        y: 28,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.45',
    )

    // HEADING LINE 2
    tl.fromTo(
      items[2],
      {
        opacity: 0,
        y: 28,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.45',
    )


    tl.fromTo(
      items[3],
      {
        opacity: 0,
        y: 18,
        scale: 0.92,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.4)',
      },
      '-=0.3',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="lg:mt-16 mt-0">
      <div
        className="relative w-full h-[130px] sm:h-[280px] md:h-[340px] lg:h-[450px] overflow-hidden"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 h-full flex items-center justify-start px-2 md:px-10">
          <div className="bg-white/80 md:rounded-3xl rounded-lg lg:w-[570px] lg:h-[320px] md:w-[450px] md:h-[270px] sm:w-[350px] sm:h-[170px] w-[170px] h-[100px] flex flex-col items-center justify-center text-center">
            {/* SAME CONTENT – ONLY MOTION CHANGED */}
            <div ref={contentRef} className="flex flex-col items-center">
              <div className="md:mb-4 mb-1">
                <Image
                  src="/logo-2.svg"
                  alt="logo"
                  width={90}
                  height={90}
                  className="object-contain lg:w-[90px] lg:h-[90px] md:w-[60px] md:h-[60px] sm:h-10 sm:w-10 w-4 h-4"
                />
              </div>

              <h2 className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-poppins-500 tracking-wide font-semibold text-black">
                Transforming Healthcare,
              </h2>

              <h2 className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-poppins-500 tracking-wide font-semibold text-black md:mt-2">
                Empowering Lives
              </h2>

              <Link
                href="/Contactus"
                className="md:mt-4 sm:mt-2 mt-1 inline-flex items-center gap-1 md:gap-2 bg-green text-white lg:text-base md:text-sm text-[8px] font-medium sm:px-9 px-3 md:py-3 sm:py-2 py-1 rounded-full transition"
              >
                Contact Us
                <Phone size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
