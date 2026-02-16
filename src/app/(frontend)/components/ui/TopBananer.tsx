import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Button from '../ui/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type TopBannerProps = {
  src: string
  alt: string
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  width?: number
  height?: number
  className?: string
}

export function TopBanner({
  src,
  alt,
  title,
  description,
  buttonText,
  buttonHref,
  width = 1200,
  height = 800,
  className = '',
}: TopBannerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 80%',
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      },
    })

    tl.fromTo(imageRef.current, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: 'power2.out' })

    tl.fromTo(
      contentRef.current?.children || [],
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.18,
      },
      '-=0.9',
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden">
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto ${className}`}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div ref={contentRef} className="flex flex-col items-center">
          {title && (
            <h1 className="text-black font-poppins-500 text-xs md:text-5xl font-extrabold md:mb-7 mb-1">
              {title}
            </h1>
          )}

          {description && (
            <p className="max-w-3xl px-4 md:px-0 font-poppins-400 text-gray text-[7px] md:text-base tracking-wide leading-relaxed">
              {description}
            </p>
          )}

          <div className="md:block hidden">
            {buttonText && buttonHref && (
              <div className="mt-4 md:mt-8">
                <Button href={buttonHref}>
                  {buttonText}
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
