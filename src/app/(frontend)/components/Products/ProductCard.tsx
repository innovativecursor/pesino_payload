// import Image from 'next/image'

// type ProductCardProps = {
//   item: {
//     name: string
//     strength: string
//     image: string
//   }
// }

// export const ProductCard = ({ item }: ProductCardProps) => {
//   return (
//     <div className="w-full ">
//       {/* Image Box */}
//       <div className="relative rounded-xl h-[150px] md:h-[180px] overflow-hidden">
//         <Image
//           src={item.image}
//           alt={item.name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex items-center justify-between md:mt-4 mt-3">
//         <h3 className="text-[11px] md:text-base font-poppins-500 text-black">
//           {item.name}
//         </h3>

//         <span className="text-[10px] md:text-sm md:px-6 px-3 py-1.5 rounded-full border border-gray-200 text-red-500 whitespace-nowrap">
//           {item.strength}
//         </span>
//       </div>
//     </div>
//   )
// }

'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

type ProductCardProps = {
  item: {
    name: string
    strength: string
    image: string
  }
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const [position, setPosition] = useState('50% 50%')
  const [modalPosition, setModalPosition] = useState('50% 50%')

  const [open, setOpen] = useState(false)
  const [modalZoom, setModalZoom] = useState(false)

  // Small Card Hover Zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setPosition(`${x}% ${y}%`)
  }

  // Modal Zoom Follow Cursor
  const handleModalMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!modalZoom) return

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setModalPosition(`${x}% ${y}%`)
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      setModalZoom(false)
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <>
      {/* Product Card */}
      <div className="w-full bg-white shadow-sm border border-gray-200 md:px-6 md:py-6 py-4 px-3 md:rounded-2xl rounded-xl">
        <div
          className="relative  md:rounded-xl rounded-lg h-[120px] md:h-[150px]  xl:h-[155px] overflow-hidden group cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onClick={() => setOpen(true)}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-150"
            style={{
              transformOrigin: position,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex items-center justify-between md:mt-4 mt-3">
          <h3 className="text-[11px] md:text-sm font-poppins-500 text-black">{item.name}</h3>

          <span className="text-[10px] md:text-xs md:px-5 px-3 py-1 rounded-full border border-gray-400 text-red-500 whitespace-nowrap">
            {item.strength}
          </span>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-4">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 z-50 bg-[#F1EEF8] rounded-full p-2 hover:scale-110 transition"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          {/* Large Image */}
          <div
            className={`relative w-full max-w-6xl h-[100vh] overflow-hidden rounded-2xl ${
              modalZoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onMouseMove={handleModalMouseMove}
            onClick={() => setModalZoom(!modalZoom)}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              className={`object-contain transition-transform duration-300 ease-out ${
                modalZoom ? 'scale-[2.5]' : 'scale-100'
              }`}
              style={{
                transformOrigin: modalPosition,
              }}
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#F1EEF8] text-black md:text-sm text-xs px-6 py-2 rounded-full">
              {modalZoom ? 'Click to zoom out' : 'Click image to zoom'}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
