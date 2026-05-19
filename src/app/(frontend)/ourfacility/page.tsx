import type { Metadata } from 'next'

import config from '@payload-config'
import { getPayload } from 'payload'

import { About } from '../components/about/About'
import { getServerSideURL } from '@/utilities/getURL'

export const metadata: Metadata = {
  title: 'Our Facility',

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

export default async function Aboutus() {
  const payload = await getPayload({
    config,
  })

  const aboutData = await payload.findGlobal({
    slug: 'about-page',
    depth: 1,
  })

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
    <div className="pt-16 sm:pt-20 md:pt-32 mb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <About gallery={aboutData.gallery || []} />
    </div>
  )
}
