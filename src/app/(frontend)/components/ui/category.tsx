import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { useProducts } from '../../contexts/ProductsContext'

export default function Category() {
  const { categories = [], loading, activeCategoryId, setActiveCategoryId } = useProducts()

  if (loading) return null
  if (categories.length === 0) return null

  const allCategories = [{ id: 'all', title: 'All Products' }, ...categories]

  return (
    <div className="w-full">
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={6}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.4,
          momentumBounce: false,
        }}
        grabCursor
        className="w-full"
      >
        {allCategories.map((item, index) => (
          <SwiperSlide key={item.id} style={{ width: 'auto' }}>
            <div
              className={`
                h-[48px] md:h-[52px] flex items-center justify-start whitespace-nowrap
                ${index === 0 ? 'pl-0 md:pl-0 pr-1 md:pr-3' : 'px-1 md:px-3'}
              `}
            >
              <span
                onClick={() => setActiveCategoryId(item.id)}
                className={`
                  text-xs md:text-sm
                  md:py-2.5 py-2
                  md:px-9 px-4
                  rounded-full
                  flex items-center
                  cursor-pointer
                  border border-gray-300
                  ${
                    activeCategoryId === String(item.id)
                      ? 'bg-secondary text-white border-secondary bg-blue'
                      : 'bg-neutral text-black'
                  }
                `}
              >
                {item.title}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
