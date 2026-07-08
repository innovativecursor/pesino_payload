'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactCountryFlag from 'react-country-flag'
import { SocialIcons } from './SocialLinks'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header className="w-full bg-white fixed top-0 z-[999]">
      <div className="md:py-4 py-2 flex justify-between responsive-mx">
        <Link href="/">
          <Logo priority={true} className="invert dark:invert-0" />
        </Link>

        <div className="hidden md:flex items-center">
          <HeaderNav />
        </div>
        <div className="hidden md:flex items-center gap-5">
          <SocialIcons />
          <Button
            size="lg"
            className="bg-blue text-white border border-blue lg:text-base text-sm rounded-full px-6 font-poppins-400 font-medium hover:bg-white hover:text-black hover:border-black transition-all"
          >
            <a href="tel:+573330740660" className="flex items-center gap-2">
              <ReactCountryFlag
                countryCode="CO"
                svg
                style={{
                  width: '1.3em',
                  height: '1.3em',
                }}
              />
              +57 3330740660
            </a>
          </Button>
        </div>

        <motion.button
          className="md:hidden text-black p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[1000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[1001] flex flex-col p-8 shadow-2xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <div className="flex justify-between  items-center mb-12">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Logo className=" sm:h-10 h-7 w-auto" />
                </Link>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={24} className="text-black" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-start">
                <HeaderNav setMenuOpen={setMenuOpen} mobile={true} />
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">
                    Quick Contact
                  </p>
                  <a href="tel:+573330740660" className="flex text-black items-center gap-2">
                    <ReactCountryFlag
                      countryCode="CO"
                      svg
                      style={{
                        width: '1.2em',
                        height: '1.2em',
                      }}
                    />
                    +57 3330740660
                  </a>
                </div>

                <SocialIcons />

                <Button
                  size="lg"
                  className="w-full bg-blue text-white border border-blue rounded-xl py-0 font-poppins-500 font-semibold text-base hover:bg-white hover:text-black hover:border-black transition-all shadow-lg shadow-blue/20"
                >
                  <a href="tel:+573330740660">Call Now</a>
                </Button>

                <p className="text-center text-xs text-black/30 font-medium">
                  © {new Date().getFullYear()} Pesino. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
