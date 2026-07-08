import type { HeaderSocialIcon } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pesino-pharmaceuticals-pvt-ltd/',
    icon: '/linkedin.png',
  },
  // {
  //   name: 'WhatsApp',
  //   href: 'https://wa.me/573330740660',
  //   icon: '/whatsapp.png',
  // },
]

interface SocialIconsProps {
  socialIcons?: HeaderSocialIcon['socialIcons']
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ socialIcons }) => {
  const items = socialIcons && socialIcons.length > 0 ? socialIcons : null

  if (!items) {

    return (
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.icon}
              alt={social.name}
              width={28}
              height={28}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      {items.map((social) => {
        const image = social.iconImage
        const imageUrl = typeof image === 'object' && image ? image.url : ''
        const altText = typeof image === 'object' && image ? image.alt || 'Social Icon' : 'Social Icon'

        const whatsApp = social.whatsAppNumber ? social.whatsAppNumber.trim() : ''
        const linkVal = social.link ? social.link.trim() : ''

        let destinationUrl = ''
        if (whatsApp) {
          destinationUrl = `https://wa.me/${whatsApp}`
        } else if (linkVal) {
          destinationUrl = linkVal
        }

        if (!imageUrl || !destinationUrl) return null

        return (
          <Link key={social.id} href={destinationUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl}
              alt={altText}
              width={28}
              height={28}
              className="hover:scale-110 transition-transform duration-300"
            />
          </Link>
        )
      })}
    </div>
  )
}
