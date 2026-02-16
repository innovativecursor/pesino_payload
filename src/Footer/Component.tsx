'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/Logo/Logo'

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const companyLinks = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/Aboutus' },
    { label: 'Products', url: '/Products' },
    { label: 'Contact Us', url: '/Contactus' },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="bg-navy text-white py-12 md:py-24">
      <div className="responsive-mx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="">
            <Link href="/">
              <Logo priority={true} className="invert dark:invert-0" />
            </Link>

            <p className=" font-poppins-400 text-sm leading-relaxed max-w-sm mt-2">
              Precision and Excellence in Pharmaceutical Manufacturing: Explore Pesino Pharma&apos;s
              State-of-the-Art Facilities and Commitment to Quality Production.
            </p>

            <div className="space-y-3 mt-8">
              <h4 className="font-poppins-600 text-lg">Subscribe</h4>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1a2836]  placeholder-gray/60 px-4 py-3 rounded-l-lg w-full max-w-[220px] text-sm focus:outline-none focus:ring-1 focus:ring-blue"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1a2836]  px-4 py-3 rounded-r-lg hover:bg-blue/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          <div className="md:pl-10 lg:pl-20">
            <h4 className="font-poppins-600 text-white text-lg mb-6">Company</h4>
            <nav className="space-y-5">
              {companyLinks.map(({ label, url }) => (
                <Link
                  key={label}
                  href={url}
                  className="block hover:text-blue transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-poppins-600 text-lg mb-6">Head Office</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className=" flex-shrink-0" />
                <span className=" text-xs leading-relaxed">
                  11/8-405, Ashish Complex, Dahisar East, Mumbai-400068, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className=" flex-shrink-0" />
                <a href="tel:+919082872218" className=" transition-colors text-xs">
                  +91 9082872218
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className=" flex-shrink-0" />
                <a href="tel:+918655100951" className=" transition-colors text-xs">
                  +91 8655100951
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className=" flex-shrink-0" />
                <a
                  href="mailto:pesino_pharma@yahoo.co.in"
                  className="transition-colors text-xs break-all"
                >
                  pesino_pharma@yahoo.co.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className=" flex-shrink-0" />
                <a
                  href="mailto:pesino.group@gmail.com"
                  className="transition-colors text-xs break-all"
                >
                  pesino.group@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
