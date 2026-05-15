'use client'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{
  setMenuOpen?: (open: boolean) => void
  mobile?: boolean
}> = ({ setMenuOpen, mobile }) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'Our Facility', url: '/ourfacility' },
    { label: 'Products', url: '/Products' },
    { label: 'Contact Us', url: '/Contactus' },
  ]

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVars: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  if (mobile) {
    return (
      <motion.nav
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 items-start"
      >
        {navItems.map(({ label, url }, i) => (
          <motion.div key={i} variants={itemVars} className="w-full">
            <Link
              href={url}
              onClick={() => setMenuOpen && setMenuOpen(false)}
              className={`text-lg font-poppins-600 font-semibold tracking-tight transition-all duration-300 block w-full ${
                pathname === url
                  ? 'text-blue pl-4 border-l-4 border-blue'
                  : 'text-black/80 hover:text-blue hover:pl-2'
              }`}
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    )
  }

  return (
    <nav className="flex flex-col font-nunito-500 md:flex-row gap-5 lg:gap-10 items-center text-black">
      {navItems.map(({ label, url }, i) => (
        <Link
          key={i}
          href={url}
          className={`pb-1 font-medium ${
            pathname === url ? 'text-blue' : 'text-black/70 hover:text-blue'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
