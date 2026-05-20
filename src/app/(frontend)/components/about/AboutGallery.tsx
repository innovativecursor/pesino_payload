'use client'

import type { Media } from '@/payload-types'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

type GalleryMedia = Media & {
  alt?: string | null
}

interface Props {
  gallery: {
    image: number | Media
  }[]
}

export default function AboutGallery({ gallery }: Props) {
  const slides = gallery
    .map((item) => (typeof item.image === 'object' ? item.image : null))
    .filter((image): image is GalleryMedia => Boolean(image?.url))

  if (slides.length === 0) {
    return null
  }

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
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.url || ''}
              alt={image.alt || image.filename || 'about image'}
              width={image.width || 1400}
              height={image.height || 900}
              sizes="100vw"
              priority={index === 0}
              unoptimized={image.url?.startsWith('/api/media/file/')}
              className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-2xl object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
