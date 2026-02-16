import type { Metadata } from 'next'
import { About } from '../components/about/About'
import { getServerSideURL } from '@/utilities/getURL'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Pesino Pharmarceuticals, our mission, values, and commitment to delivering high-quality pharmaceutical products globaly.',
  openGraph: {
    title: 'About Us | Pesino Pharmarceuticals',
    description:
      'Learn about our journey, manufacturing excellence, and commitment to serving humankind.',
  },
  alternates: {
    canonical: '/Aboutus',
  },
}

export default function Aboutus() {
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
        name: 'About Us',
        item: `${getServerSideURL()}/Aboutus`,
      },
    ],
  }

  return (
    <div className=" pt-16 sm:pt-20 md:pt-32 mb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </div>
  )
}
