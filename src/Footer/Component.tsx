'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone, Building2, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

export const Footer: React.FC = () => {
  const pathname = usePathname()
  const productColumns = [
    [
      'Antibiotics (Anti-infectives)',
      'Antifungal Medicines',
      'Antiviral Medicines',
      'Pain Management',
      'Cardiovascular Medicines',
      'Diabetes Medicines',
      'Gastrointestinal Medicines',
      'Respiratory Medicines',
      'Allergy Medicines',
      'Central Nervous System (CNS) Medicines',
    ],
    [
      'Oncology (Cancer) Medicines',
      'Hormonal Medicines',
      'Vitamins & Nutritional Supplements',
      'Obstetrics & Gynecology Medicines',
      'Pediatric Medicines',
      'Injectable Hospital Products',
      'Ophthalmic (Eye) Medicines',
      'Dermatology Medicines',
      'Vaccines & Immunological Products',
      'Pharmaceutical Excipients',
    ],
    [
      'Anesthetics',
      'Urology Medicines',
      'Rheumatology Medicines',
      'Endocrinology Medicines',
      'Anti-parasitic Medicines',
      'Anti-tuberculosis (TB) Medicines',
      'Antimalarial Medicines',
      'HIV/AIDS Medicines',
      'Hepatitis Medicines',
      'Intravenous (IV) Fluids',
    ],
    [
      'Nutrition Products (Enteral & Parenteral)',
      'Veterinary Medicines',
      'Over-the-Counter (OTC) Medicines',
      "Women's Health Products",
      "Men's Health Products",
      'Sexual Health Medicines',
      'Smoking Cessation Medicines',
      'Weight Management Medicines',
      'Sleep Disorder Medicines',
      'Rare Disease (Orphan) Medicines',
    ],
    [
      'Herbal & Phytopharmaceutical Products',
      'Homeopathic Medicines',
      'Ayurvedic Medicines',
      'Probiotics & Microbiome Products',
      'Wound Care Products',
      'Antiseptics & Disinfectants',
      'Drug Delivery Systems (Patches, Implants, etc.)',
      'Combination Medicines',
    ],
  ]

  const companies = [
    'Sashalife Healthcare, India',
    '4 Life Healthcare INC, Philippines',
    'BPC, Philippines',
    'Hira Pharmaceuticals, Philippines',
    'Sashalife Healthcare Africa, Zambia',
    'Pesino Group',
  ]

  return (
    <footer className="bg-[#101A25] text-white mt-24">
      <div className="responsive-mx md:py-16 py-14">
        {/* ================= PRODUCT RANGE ================= */}

        <h2 className="text-[#2BB564] text-3xl font-poppins-600 uppercase">Our Product Range</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 font-poppins-400 md:grid-cols-3 xl:grid-cols-5 gap-8 md:mt-10 mt-7">
          {productColumns.map((column, index) => (
            <div key={index} className="space-y-3">
              {column.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm whitespace-nowrap leading-relaxed"
                >
                  <span className="group flex items-center gap-2 cursor-pointer text-gray-300 hover:text-[#2BB564] transition">
                    {item}

                    <ArrowRight
                      size={15}
                      className="opacity-0 group-hover:opacity-100 text-[#2BB564] transition-opacity duration-200"
                    />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}

        {/* <div className="border-t border-white/10 my-14" /> */}

        {/* ================= BOTTOM GRID ================= */}

        <div className="grid xl:grid-cols-[1.2fr_.95fr] gap-10 md:mt-20 mt-12">
          {/* ================= LEFT SIDE ================= */}

          <div>
            <div className="border-t border-white/10 " />
            <h3 className="text-[#2BB564] text-2xl pt-7 md:hidden block font-bold">Quick Links:</h3>
            <div className="flex flex-wrap md:pt-10 pt-7 items-center justify-between gap-y-6">
              <h3 className="text-[#2BB564] text-2xl md:block hidden font-bold">Quick Links:</h3>
              <Link
                href="/"
                className={`transition pb-1 border-b-2 ${
                  pathname === '/'
                    ? 'text-[#2BB564] border-[#2BB564]'
                    : 'text-gray-300 border-transparent hover:text-[#2BB564]'
                }`}
              >
                Home
              </Link>

              <Link
                href="/ourfacility"
                className={`transition pb-1 border-b-2 ${
                  pathname === '/ourfacility'
                    ? 'text-[#2BB564] border-[#2BB564]'
                    : 'text-gray-300 border-transparent hover:text-[#2BB564]'
                }`}
              >
                Our Facility
              </Link>

              <Link
                href="/Products"
                className={`transition pb-1 border-b-2 ${
                  pathname === '/Products'
                    ? 'text-[#2BB564] border-[#2BB564]'
                    : 'text-gray-300 border-transparent hover:text-[#2BB564]'
                }`}
              >
                Products
              </Link>

              <Link
                href="/Contactus"
                className={`transition pb-1 border-b-2 ${
                  pathname === '/Contactus'
                    ? 'text-[#2BB564] border-[#2BB564]'
                    : 'text-gray-300 border-transparent hover:text-[#2BB564]'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="border-t border-white/10 md:my-10 my-7" />

            <h3 className="text-[#2BB564] text-2xl font-bold mb-8">Pesino Group of Companies</h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-5 gap-3">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className={`rounded-xl min-h-[130px] p-5 flex flex-col items-start justify-start transition hover:-translate-y-1 ${
                    index === 5 ? 'bg-[#2BB564] items-center justify-center' : 'bg-white'
                  }`}
                >
                  {index === 5 ? (
                    <Link href="/">
                      <Image
                        src="/plogo.png"
                        alt="Payload Logo"
                        width={80}
                        height={35}
                        className="w-20 h-20"
                      />
                    </Link>
                  ) : (
                    <>
                      <div className="md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#2BB564] flex items-center justify-center">
                        <Building2 className="text-white" size={22} />
                      </div>

                      <p className="text-[#4F4F51] md:text-base text-sm tracking-wide leading-6 mt-4">
                        {company}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="md:space-y-8 space-y-6">
            {/* Manufacturing */}

            <div className="border border-[#2BB564] rounded-xl md:p-6 p-4 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="md:w-14 md:h-14 w-10 h-10 shrink-0 rounded-full border border-[#2BB564] flex items-center justify-center">
                  <MapPin className="md:w-8 md:h-8 w-4 h-4 text-[#2BB564]" />
                </div>

                <div>
                  <h4 className="md:text-xl font-poppins-600">Manufacturing Plant</h4>

                  <p className="text-sm text-[#ffffff]/50 mt-2 font-poppins-400 leading-6">
                    Block No. B, Ta Kalol, Golden Industrial Estate, Gandhinagar, Gujarat 382721
                  </p>
                </div>
              </div>
            </div>

            {/* Head Office */}

            <div className="border border-[#2BB564] rounded-xl p-6 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="md:w-14 md:h-14 w-10 h-10 shrink-0 rounded-full border border-[#2BB564] flex items-center justify-center">
                  <MapPin className="md:w-8 md:h-8 w-4 h-4 text-[#2BB564]" />
                </div>

                <div>
                  <h4 className="text-xl font-font-poppins-600">Head Office</h4>

                  <p className="text-sm text-[#ffffff]/50 mt-2 leading-6 font-poppins-400">
                    11/B-405, Ashish Complex, Dahisar East, Mumbai-400068, India
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <a
                  href="tel:+919223445336"
                  className="bg-[#2BB564] font-poppins-500 rounded-full w-full items-center px-6 py-3 flex justify-center md:w-fit gap-2 text-xs font-medium"
                >
                  <Phone size={18} />
                  +91 9223445336 / +91 8591269348
                </a>

                <a
                  href="mailto:pesino.group@gmail.com"
                  className="bg-[#2BB564] font-poppins-500 rounded-full w-full items-center px-6 py-3 flex justify-center md:w-fit gap-2 text-xs font-medium"
                >
                  <Mail size={20} />
                  pesino.group@gmail.com
                </a>
              </div>
            </div>

            {/* Colombia */}

            <div className="border border-[#2BB564] rounded-xl p-6 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="md:w-14 md:h-14 w-10 h-10 shrink-0 rounded-full border border-[#2BB564] flex items-center justify-center">
                  <MapPin className="md:w-8 md:h-8 w-4 h-4 text-[#2BB564]" />
                </div>

                <div>
                  <h4 className="text-xl font-poppins-600">Pesino Pharmaceuticals S.A.S</h4>

                  <p className="text-sm text-[#ffffff]/50 font-poppins-400 mt-2 leading-6">
                    Ave. 4 Norte No. 7N-46, L 335 Cali, Colombia
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <a
                  href="tel:+919223445336"
                  className="bg-[#2BB564] font-poppins-500 rounded-full w-full items-center px-6 py-3 flex justify-center md:w-fit gap-2 text-xs font-medium"
                >
                  <Phone size={18} />
                  +57 3330740660
                </a>

                <a
                  href="mailto:colombia@pesinopharma.com"
                  className="bg-[#2BB564] font-poppins-500 rounded-full w-full items-center px-6 py-3 flex justify-center md:w-fit gap-2 text-xs font-medium"
                >
                  <Mail size={18} />
                  colombia@pesinopharma.com
                </a>
              </div>
            </div>

            <div className="flex md:justify-end justify-center">
              <p className="text-xs text-white/70">
                Designed & Developed by{' '}
                <Link
                  href="https://www.innovativecursor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2BB564] hover:underline font-medium"
                >
                  Innovative Cursor
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
