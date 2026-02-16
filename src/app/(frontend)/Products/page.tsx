import type { Metadata } from 'next'
import { AllProducts } from '../components/Products/AllProducts'
import { getServerSideURL } from '@/utilities/getURL'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore our comprehensive range of high-quality pharmaceutical products, including tablets, capsules, and more, manufactured with precision and excellence.',
  openGraph: {
    title: 'Our Products | Pesino Pharmarceuticals',
    description:
      'Discover the range of quality pharmaceutical products manufactured by Pesino Pharma.',
  },
  alternates: {
    canonical: '/Products',
  },
}

export default function Products() {
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
        name: 'Our Products',
        item: `${getServerSideURL()}/Products`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AllProducts />
    </>
  )
}
