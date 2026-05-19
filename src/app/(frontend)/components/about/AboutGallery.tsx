'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
  gallery: {
    image: {
      url: string
      alt?: string
    }
  }[]
}

export default function AboutGallery({ gallery }: Props) {
  return (
    <div className="lg:my-28 md:my-20 sm:my-16 my-8 responsive-mx">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
      >
        {gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.image.url}
              alt={item.image.alt || 'about image'}
              width={1400}
              height={900}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
