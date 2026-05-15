'use client'

import { Pill, FlaskConical, Syringe, Cross } from 'lucide-react'
import { motion } from 'framer-motion'

const manufacturingData = [
  {
    id: 1,
    title: 'Oral Solid Dosage (OSD)',
    description:
      'Tablets, capsules, and other solid formulations designed for stability and accurate dosing.',
    icon: Pill,
  },
  {
    id: 2,
    title: 'Liquids',
    description:
      'Syrups and oral liquids formulated for effective absorption and patient convenience.',
    icon: Cross,
  },
  {
    id: 3,
    title: 'Creams & Ointments',
    description: 'Topical formulations developed for safe and targeted application.',
    icon: FlaskConical,
  },
  {
    id: 4,
    title: 'Injectables',
    description:
      'Sterile, high-quality injectable solutions manufactured under strict aseptic conditions.',
    icon: Syringe,
  },
]

export default function AboutManufacturingData() {
  return (
    <section className="bg-lavender py-12 md:mt-32 mt-20 md:py-20 overflow-hidden">
      <div className="responsive-mx">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-2xl md:text-4xl xl:text-5xl font-poppins-500 text-black"
        >
          What Do We Manufacture?
        </motion.h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-y-36 gap-x-72 mt-24 relative">
          <div className="absolute top-[26%] left-1/2 -translate-x-1/2 w-[300px] -mt-10 border-t-2 border-dashed border-[#1986e3]" />

          <div className="absolute top-[26%] left-[18%] h-[220px] border-l-2 border-dashed border-[#1986e3]" />

          <div className="absolute top-[26%] right-[18%] h-[220px] border-l-2 border-dashed border-[#1986e3]" />

          {manufacturingData.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm relative z-10"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.2,
                  }}
                  viewport={{ once: false }}
                  className="w-14 h-14 rounded-full bg-[#0f7bd8] flex items-center justify-center mb-5"
                >
                  <Icon className="text-white w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-black leading-snug">{item.title}</h3>

                <p className="text-gray-500 text-sm leading-6 mt-3 max-w-[440px]">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile + Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-4 md:gap-6 mt-6 md:mt-12 relative">
          {manufacturingData.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white rounded-xl p-6 pl-16 md:pl-20 shadow-sm relative"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: index * 0.12 + 0.2,
                  }}
                  viewport={{ once: false }}
                  className="absolute left-4 top-6 w-10 h-10 rounded-full bg-[#0f7bd8] flex items-center justify-center"
                >
                  <Icon className="text-white w-4 h-4" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-black">{item.title}</h3>

                <p className="text-gray-500 text-xs md:text-sm leading-5 md:mt-2 mt-1">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
