import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { useState } from 'react'

const qualitySlides = [
  {
    id: 1,
    title: 'Automation',
    desc: "Revolutionizing Precision: Explore Pesino Pharma's Innovative Pharmaceutical Manufacturing through Advanced Automation",
    icon: '/quality-2.svg',
  },
  {
    id: 2,
    title: 'Integrity',
    desc: "Revolutionizing Precision: Explore Pesino Pharma's Innovative Pharmaceutical Manufacturing through Advanced Integrity",
    icon: '/quality-1.svg',
  },
  {
    id: 3,
    title: 'Safety',
    desc: "Revolutionizing Precision: Explore Pesino Pharma's Innovative Pharmaceutical Manufacturing through Advanced Safety",
    icon: '/quality-3.svg',
  },
]

export const AboutQuality = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="xl:py-36 sm:py-20 py-10 sm:pb-28 pb-24  ml-4 sm:ml-5 md:ml-[4vw] lg:ml-[6vw]">
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-20 gap-5 items-center">
        {/* Left Content */}
        <div>
          <h2 className="font-poppins-500 tracking-wide sm:text-start text-center text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-[2.5vw] text-navy md:mb-6 mb-3">
            Total Quality
            <span className="xl:block xl:mt-3"> Commitment</span>
          </h2>

          <p className="sm:mt-5 text-gray font-poppins-400 md:text-base sm:text-start text-center sm:text-sm text-xs leading-relaxed md:mb-8 sm:mb-5 mb-3 xl:max-w-lg">
            Precision and Excellence in Pharmaceutical Manufacturing. Explore Pesino Pharma’s
            state-of-the-art facilities and commitment to quality production.
          </p>
        </div>

        {/* Right Swiper Card */}
        <div className="relative bg-lavender col-span-2 rounded-xl sm:p-6 p-2 md:px-20 sm:pt-32 pt-14 sm:pb-12 pb-7 flex-between-center">
          <div className="absolute left-1/2 sm:top-60 top-40 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <Swiper
              modules={[Navigation]}
              loop
              slidesPerView={1}
              navigation={{
                nextEl: '.quality-next',
              }}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              className="w-full sm:max-w-[350px] max-w-52"
            >
              {qualitySlides.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="relative bg-white sm:rounded-2xl rounded-xl shadow-[0_4px_6px_-3px_rgba(0,0.2,0.2,0.2)] mb-1 sm:p-6 p-4 sm:min-h-[280px] min-h-[200px] cursor-pointer flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col items-start gap-2">
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={50}
                          height={50}
                          className="object-contain w-8 h-8 sm:w-14 sm:h-14 md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px]"
                        />
                        <h3 className="font-poppins-500 tracking-wide text-xs sm:text-2xl md:text-3xl xl:text-[1.8vw] text-navy">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 sm:text-sm text-[9px] text-gray tracking-wide leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-center sm:mt-6 mt-3">
                      <div className="flex  items-center gap-2">
                        {qualitySlides.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`rounded-full bg-navy transition-all duration-300 ${
                              activeSlide === dotIndex ? 'w-5 h-0.5' : 'w-1 h-1 opacity-40'
                            }`}
                          />
                        ))}
                      </div>
                      <Image
                        src="/arrow-2.svg"
                        alt="icon"
                        width={70}
                        height={70}
                        className="quality-next object-contain w-12 h-8 cursor-pointer sm:w-14 sm:h-14 md:h-[50px] md:w-[50px] lg:w-[70px] lg:h-[70px]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Static Right Content (unchanged) */}
          <div className="flex flex-col items-start gap-2">
            <Image
              src="/quality-1.svg"
              alt="icon"
              width={50}
              height={50}
              className="object-contain w-8 h-8 sm:w-14 sm:h-14 md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px]"
            />
            <h3 className="font-poppins-500 tracking-wide text-xs sm:text-2xl md:text-3xl xl:text-[1.8vw] text-navy">
              Integrity
            </h3>
          </div>

          <div className="flex flex-col items-start gap-2">
            <Image
              src="/quality-3.svg"
              alt="icon"
              width={50}
              height={50}
              className="object-contain w-8 h-8 sm:w-14 sm:h-14 md:h-[50px] md:w-[50px] lg:w-[50px] lg:h-[50px]"
            />
            <h3 className="font-poppins-500 tracking-wide text-xs sm:text-2xl md:text-3xl xl:text-[1.8vw] text-navy">
              Safety
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
