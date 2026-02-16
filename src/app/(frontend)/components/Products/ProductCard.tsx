import Image from 'next/image'

type ProductCardProps = {
  item: {
    name: string
    strength: string
    image: string
  }
}

export const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="w-full">
      {/* Image Box */}
      <div className="relative rounded-xl h-[150px] md:h-[240px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between md:mt-4 mt-3">
        <h3 className="text-[11px] md:text-base font-poppins-500 text-black">
          {item.name}
        </h3>

        <span className="text-[10px] md:text-sm md:px-6 px-3 py-1.5 rounded-full border border-gray-200 text-red-500 whitespace-nowrap">
          {item.strength}
        </span>
      </div>
    </div>
  )
}
