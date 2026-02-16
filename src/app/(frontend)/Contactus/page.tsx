import type { Metadata } from 'next'
import { AllContactData } from '../components/contact/AllContactData'
import { getServerSideURL } from '@/utilities/getURL'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Pesino Pharmarceuticals. We are here to answer your questions and provide support regarding our pharmaceutical products and services.',
  openGraph: {
    title: 'Contact Us | Pesino Pharmarceuticals',
    description: 'Connect with us for any inquiries, partnerships, or support.',
  },
  alternates: {
    canonical: '/Contactus',
  },
}

export default function Contactus() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getServerSideURL(),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: `${getServerSideURL()}/Contactus`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AllContactData />
    </>
  )
}
