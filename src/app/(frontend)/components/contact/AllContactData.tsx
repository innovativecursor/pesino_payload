'use client'
import Image from 'next/image'
import { TopBanner } from '../ui/TopBananer'
import { ContactData } from './ContactData'
import { MapPin, Phone, Mail } from 'lucide-react'

export const AllContactData = () => {
  const HeadOfficeCard = () => (
    <div className="bg-white rounded-xl md:shadow-xl md:p-6 p-3 max-w-lg w-full">
      <h3 className="text-xl font-extrabold text-black mb-4">Head Office</h3>

      <div className="space-y-4 md:text-sm text-xs text-black font-poppins-400">
        <div className="flex items-start gap-3">
          <div className="md:w-7 md:h-7 w-5 h-5 rounded-full flex justify-center items-center bg-blue">
            <MapPin className="md:w-4 md:h-4 w-3 h-3 text-white" />
          </div>
          <p>11/B-405, Ashish Complex, Dahisar East, Mumbai-400068, India</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="md:w-7 md:h-7 w-5 h-5 rounded-full flex justify-center items-center bg-blue">
            <Phone className="md:w-4 md:h-4 w-3 h-3 text-white" />
          </div>
          <p>+91 9082872218 / +91 8655100951 / +91 2249715862</p>
        </div>

        <div className="flex items-start gap-3">
          <div className="md:w-7 md:h-7 w-5 h-5 rounded-full flex justify-center items-center bg-blue">
            <Mail className="md:w-4 md:h-4 w-3 h-3 text-white" />
          </div>

          <p>pesino_pharma@yahoo.co.in / pesino.group@gmail.com</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="pt-20 md:pt-32 mb-12 responsive-mx">
      <TopBanner
        src="/product-banner.png"
        alt="contact us"
        title="Contact Us"
        description="Discover high-quality pharmaceutical imports with Pesino Pharma, an esteemed Indian manufacturer and exporter. We specialize in importing premium raw materials and components to ensure the excellence of our pharmaceutical products."
      />

      <div className="md:mt-28 mt-10  grid md:grid-cols-2 md:gap-16 gap-10">
        <div>
          <ContactData />
        </div>
        <TopBanner src="/contact-us.png" alt="contact us" />
      </div>

      <div className="flex flex-col md:my-20 my-7 gap-6">
        <div className="relative w-full rounded-xl h-[600px] overflow-hidden hidden md:block">
          <div className="absolute top-1/2 left-8 z-10">
            <HeadOfficeCard />
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.657726060615!2d72.8596049!3d19.262836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f74539954d%3A0xbb6b56faebc49ef4!2sAshish%20Complex%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            title="Ashish Complex Location"
          />
        </div>
        <div className="md:hidden ">
          <HeadOfficeCard />
        </div>

        <div className="w-full mt-4 rounded-xl h-[350px] overflow-hidden md:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.657726060615!2d72.8596049!3d19.262836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0f74539954d%3A0xbb6b56faebc49ef4!2sAshish%20Complex%2C%20Dahisar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            title="Ashish Complex Location"
          />
        </div>
      </div>
    </div>
  )
}
