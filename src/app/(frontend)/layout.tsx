import type { Metadata } from 'next'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { draftMode } from 'next/headers'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { HeroProvider } from './contexts/HeroContext'
import { TestimonialProvider } from './contexts/TestimonialsContext'
import { ProductsProvider } from './contexts/ProductsContext'
import RouteLoader from './loader/RouteLoader'
import ScrollToTop from './components/scrolltotop/ScrollToTop'
import 'swiper/css'
import 'swiper/css/free-mode'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pesino Pharmarceuticals',
    url: getServerSideURL(),
    logo: `${getServerSideURL()}/logo-2.svg`,
    description:
      'Pesino Pharmarceuticals is a leading pharmaceutical manufacturer dedicated to precision, excellence, and serving humankind through quality medicines.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9082872218',
      contactType: 'customer service',
    },
  }

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/logo-2.svg" rel="icon" sizes="32x32" />
        <link href="/logoi-2.svg" rel="icon" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <>
          <RouteLoader />
          <ScrollToTop />
          <Providers>
            <ProductsProvider>
              <TestimonialProvider>
                <HeroProvider>
                  <Toaster position="top-right" />
                  <Header />
                  <main id="main-content">{children}</main>
                  <Footer />
                </HeroProvider>
              </TestimonialProvider>
            </ProductsProvider>
          </Providers>
        </>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Pesino Pharmarceuticals | Leading Pharmaceutical Manufacturer',
    template: '%s | Pesino Pharmarceuticals',
  },
  description:
    'Pesino Pharmarceuticals is a leading pharmaceutical manufacturer dedicated to precision, excellence, and serving humankind through quality medicines.',
  keywords: [
    'pharmaceutical manufacturer',
    'medicine production',
    'quality drugs',
    'Pesino Pharma',
    'WHO standards',
    'cGMP compliant',
  ],
  authors: [{ name: 'Pesino Pharmarceuticals' }],
  creator: 'Pesino Pharmarceuticals',
  publisher: 'Pesino Pharmarceuticals',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: getServerSideURL(),
    siteName: 'Pesino Pharmarceuticals',
    title: 'Pesino Pharmarceuticals | Leading Pharmaceutical Manufacturer',
    description:
      'Precision & Excellence in Pharmaceutical Manufacturing. Serving Humankind through quality Medicines.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Pesino Pharmarceuticals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pesino Pharmarceuticals | Leading Pharmaceutical Manufacturer',
    description:
      'Precision & Excellence in Pharmaceutical Manufacturing. Serving Humankind through quality Medicines.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}
