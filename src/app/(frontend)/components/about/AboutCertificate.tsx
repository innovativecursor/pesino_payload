'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const certificates = [
  {
    id: 1,
    title: 'WHO GMP Approved',
    image: '/certificate1.png',
  },
  {
    id: 2,
    title: 'EU Approved',
    image: '/certificate2.png',
  },
  {
    id: 3,
    title: 'DIGIMED Approved',
    image: '/certificate3.png',
  },
  {
    id: 4,
    title: 'Philippines FDA Approved',
    image: '/certificate4.png',
  },
]

export default function AboutCertificate() {
  return (
    <section className="responsive-mx md:mt-0 mt-9 overflow-hidden">
      <div>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center tracking-wide"
        >
          <h2 className="text-3xl xl:text-5xl font-poppins-500 md:leading-tight text-black">
            Quality You Can Trust, <span className="text-[#0075C5]">Certified Globally</span>
          </h2>

          <p className="md:mt-5 mt-3 text-xs font-poppins-400 md:text-base text-[#676769] md:leading-7 leading-6 md:max-w-2xl md:mx-auto">
            Our manufacturing standards meet strict international regulations, ensuring safety,
            consistency, and reliability across every product we deliver.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-4 md:gap-12 md:mt-16 mt-7">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="bg-white md:rounded-2xl rounded-xl md:shadow-md shadow-sm cursor-pointer border border-gray-200 border-gray-100 md:py-4 px-3 py-3 hover:shadow-sm transition duration-300"
            >
              {/* Image Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.2,
                }}
                viewport={{ once: false }}
                className="rounded-xl flex items-center justify-center h-[160px] md:h-[260px] overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image src={item.image} alt={item.title} fill className="object-contain" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12 + 0.3,
                }}
                viewport={{ once: false }}
                className="text-center text-xs tracking-wide font-poppins-500 md:text-base font-medium text-[#000000] md:mt-3 mt-2"
              >
                {item.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
