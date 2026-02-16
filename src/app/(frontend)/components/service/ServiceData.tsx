'use client'

import React from 'react'
import { motion, cubicBezier } from 'framer-motion'
import { TopBanner } from '../ui/TopBananer'

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: cubicBezier(0.25, 1, 0.5, 1) },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60, rotateY: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.25, 1, 0.5, 1) },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60, rotateY: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.9, ease: cubicBezier(0.25, 1, 0.5, 1) },
  },
}

const pop = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 180 },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const ServiceData = () => {
  return (
    <>
      <div className="bg-white md:mt-20 mt-16 overflow-hidden md:pb-20 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <TopBanner src="/services.png" alt="services banner" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw] md:mt-16 mt-8"
        >
          <h2 className="text-gray-800 text-xl md:text-2xl font-semibold mb-8 text-start tracking-wide">
            At GSL Construction, Design & Consultancy (GSL CDC), we <br /> specialize in providing
            comprehensive construction, design, and <br /> consultancy solutions.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw] grid md:grid-cols-2 md:gap-x-32 md:gap-y-16 gap-11 md:mt-20 mt-12"
        >
          <motion.div
            variants={fadeInLeft}
            className="flex flex-col md:items-start items-center gap-4"
          >
            <motion.div variants={pop} whileHover={{ scale: 1.1, rotate: 5 }}>
              <div className="flex-shrink-0 bg-[#FCD33D] text-white font-extrabold text-lg md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-md">
                01
              </div>
            </motion.div>
            <div>
              <h3 className="text-black font-bold md:text-xl mb-2">
                Architectural & Construction Services
              </h3>
              <p className="text-black mb-3 md:text-sm text-xs tracking-wide">
                We design and build spaces that combine functionality, sustainability, and modern
                aesthetics.
              </p>
              <div className="list-disc list-inside text-black space-y-2 md:text-sm text-xs tracking-wide">
                <p>
                  <span className="font-semibold text-gray-600">
                    Architectural Design & Planning –{' '}
                  </span>
                  Tailored designs that meet client needs while ensuring safety and efficiency.
                </p>
                <p>
                  <span className="font-semibold text-gray-600">
                    Residential & Commercial Construction –
                  </span>{' '}
                  From homes to commercial spaces, we build with precision and quality.
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Renovation & Remodeling –</span>{' '}
                  Upgrading and transforming spaces while preserving structural integrity.
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Project Management –</span>{' '}
                  End-to-end supervision to ensure projects are delivered on time and within budget.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="flex flex-col md:items-start items-center gap-4"
          >
            <motion.div variants={pop} whileHover={{ scale: 1.1, rotate: -5 }}>
              <div className="flex-shrink-0 bg-[#FCD33D] text-white font-extrabold text-lg md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-md">
                02
              </div>
            </motion.div>
            <div>
              <h3 className="text-black font-bold md:text-xl mb-2">
                Structural Steel Works & Fabrication
              </h3>
              <p className="text-black mb-3 md:text-sm text-xs tracking-wide">
                We provide engineering-grade structural steel solutions for large-scale projects.
              </p>
              <ul className="list-disc list-inside text-black space-y-3 md:text-sm text-xs mt-8 tracking-wide">
                <li>Fabrication and erection of structural steel billboard frames.</li>
                <li>
                  Structural brackets and holders for LED advertising & large signage installations.
                </li>
                <li>Monopole and 2-pole structures design and construction.</li>
                <li>Structural planning and detailing by ASEP-certified engineers.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInLeft}
            className="flex flex-col md:items-start items-center gap-4"
          >
            <motion.div variants={pop} whileHover={{ scale: 1.1, rotate: 5 }}>
              <div className="flex-shrink-0 bg-[#FCD33D] text-white font-extrabold text-lg md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-md">
                03
              </div>
            </motion.div>
            <div>
              <h3 className="text-black font-bold md:text-xl mb-2">
                Signage Works & Advertising Structures
              </h3>
              <p className="text-black mb-3 md:text-sm text-xs tracking-wide">
                We specialize in designing and constructing durable and safe advertising structures.
              </p>
              <ul className="list-disc list-inside text-black space-y-3 md:text-sm text-xs md:mt-8 mt-5 tracking-wide">
                <li>Structural steel frames for billboards, signages, and LED panels.</li>
                <li>Engineering and fabrication for large-scale outdoor displays.</li>
                <li>Consultation and compliance with structural safety standards.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="flex flex-col md:items-start items-center gap-4"
          >
            <motion.div variants={pop} whileHover={{ scale: 1.1, rotate: -5 }}>
              <div className="flex-shrink-0 bg-[#FCD33D] text-white font-extrabold text-lg md:text-3xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-md">
                04
              </div>
            </motion.div>
            <div>
              <h3 className="text-black font-bold md:text-xl mb-2">Specialized Projects</h3>
              <p className="text-black mb-3 md:text-sm text-xs tracking-wide">
                We cater to diverse client needs, ensuring top-quality execution.
              </p>
              <div className="list-disc list-inside text-black space-y-3 mt-4 md:text-sm text-xs tracking-wide">
                <p>
                  <span className="font-semibold text-gray-600">Residential Homes –</span> Modern,
                  sustainable, and functional house designs.
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Commercial Buildings –</span>{' '}
                  Offices, retail, and hospitality spaces built for efficiency.
                </p>
                <p>
                  <span className="font-semibold text-gray-600">Institutional Projects –</span>{' '}
                  Schools, hospitals, and other public facilities designed with community needs in
                  mind.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-0 sm:mx-5 md:mx-[4vw] lg:mx-[10vw] md:mt-16 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180 }}
            className="bg-[#FFF9E2] rounded-xl py-8 md:px-10 px-5 mt-16 shadow-md"
          >
            <h3 className="text-black font-bold text-xl tracking-wide mb-5">
              Why Choose Pelman Precision Construction?
            </h3>
            <ul className="space-y-2 text-black text-xs md:text-sm">
              <motion.li
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 transition-all duration-200"
              >
                <span className="bg-black text-white rounded-full w-3 h-3 flex items-center justify-center text-[7px]">
                  ✓
                </span>
                <span>Licensed Architects & ASEP Engineers</span>
              </motion.li>

              <motion.li
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 transition-all duration-200"
              >
                <span className="bg-black text-white rounded-full w-3 h-3 flex items-center justify-center text-[7px]">
                  ✓
                </span>
                <span>Quality & Safety Standards</span>
              </motion.li>

              <motion.li
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 transition-all duration-200"
              >
                <span className="bg-black text-white rounded-full w-3 h-3 flex items-center justify-center text-[7px]">
                  ✓
                </span>
                <span>End-to-End Project Solutions</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
