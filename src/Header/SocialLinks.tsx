import Image from 'next/image'
import Link from 'next/link'

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pesino-pharmaceuticals-pvt-ltd/',
    icon: '/linkedin.png',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: '/facebook.png',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/573330740660',
    icon: '/whatsapp.png',
  },
]

export const SocialIcons = () => {
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
