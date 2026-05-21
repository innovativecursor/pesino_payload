import { useEffect, useState } from 'react'

import type { Media } from '@/payload-types'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowUpRight } from 'lucide-react'

type GalleryMedia = Media & {
  alt?: string | null
}

interface AboutPageData {
  leftImage: Media

  address: string

  gallery: {
    image: number | Media
  }[]
}

export default function AboutGallery() {
  const [data, setData] = useState<AboutPageData | null>(null)

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        // API CALL
        const res = await fetch('/api/globals/about-page?depth=1')

        const result = await res.json()

        setData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAboutPage()
  }, [])

  if (!data) {
    return null
  }

  const slides = data.gallery
    .map((item) => (typeof item.image === 'object' ? item.image : null))
    .filter((image): image is GalleryMedia => Boolean(image?.url))

  return (
    <section className="responsive-mx lg:my-40 md:my-20 my-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:h-[650px] h-full gap-4 md:gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between md:gap-8 gap-4 min-h-[300px] md:min-h-[500px]">
          <div className="overflow-hidden md:rounded-[24px] rounded-xl">
            <Image
              src={data.leftImage?.url || ''}
              alt={'about'}
              width={700}
              height={500}
              className="h-full min-h-[300px] md:min-h-[500px] w-full object-cover"
            />
          </div>

          <div className="bg-[#0077C8] rounded-full md:px-8 px-5 py-3 md:py-4 flex items-center justify-between gap-5">
            <p className="text-white text-xs sm:text-sm md:text-xl md:leading-7 leading-5 md:max-w-[85%] max-w-[90%]">
              {data.address}
            </p>

            <button className="bg-white md:w-12 md:h-12 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
              <span className="text-[#0077C8] text-xs md:text-2xl">
                <ArrowUpRight />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="overflow-hidden md:rounded-[24px] rounded-xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="about-swiper h-full"
          >
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.url || ''}
                  alt={image.alt || 'gallery'}
                  width={800}
                  height={700}
                  className="h-full min-h-[300px] md:min-h-[500px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
