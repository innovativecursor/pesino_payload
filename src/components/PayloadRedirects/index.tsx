// import type React from 'react'
// import { getCachedRedirects } from '@/utilities/getRedirects'
// import { notFound, redirect } from 'next/navigation'

// interface Props {
//   disableNotFound?: boolean
//   url: string
// }

// interface RedirectItem {
//   from: string
//   to?: {
//     url?: string
//     reference?: {
//       relationTo: string
//       value: string | { slug: string }
//     }
//   }
// }

// export  PayloadRedirects: React.FC<Props> = async ({ disableNotFound, url }) => {
//   const redirectsRaw = await getCachedRedirects()()

//   // const redirects: RedirectItem[] = redirectsRaw.filter(
//   //   (r): r is RedirectItem => typeof (r as any).from === 'string',
//   // )

//   const redirects: RedirectItem[] = redirectsRaw.filter(
//   (r): r is RedirectItem => 'from' in r && typeof r.from === 'string',
// )

//   const redirectItem = redirects.find((redirect) => redirect.from === url)

//   if (redirectItem) {
//     if (redirectItem.to?.url) {
//       redirect(redirectItem.to.url)
//     } else if (redirectItem.to?.reference) {
//       const { relationTo, value } = redirectItem.to.reference
//       // let slug = typeof value === 'string' ? value : value.slug
//       const slug = typeof value === 'string' ? value : value.slug
//       const redirectUrl = `${relationTo !== 'pages' ? `/${relationTo}` : ''}/${slug}`
//       redirect(redirectUrl)
//     }
//   }

//   if (!disableNotFound) notFound()
// }

import type { Page, Post } from '@/payload-types'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'

interface Props {
  disableNotFound?: boolean
  url: string
}

interface RedirectItem {
  from: string
  to?: {
    url?: string
    reference?: {
      relationTo: string
      value: string | { slug: string }
    }
  }
}

export default async function PayloadRedirects({ disableNotFound, url }: Props) {
  // const redirectsRaw = await getCachedRedirects()()
  // const redirects: RedirectItem[] = redirectsRaw.filter(
  //   (r): r is RedirectItem => 'from' in r && typeof r.from === 'string'
  // )

  const redirectsRaw: unknown[] = await getCachedRedirects()()

  const redirects: RedirectItem[] = redirectsRaw.filter(
    (r): r is RedirectItem =>
      typeof r === 'object' && r !== null && 'from' in r && typeof r.from === 'string',
  )

  const redirectItem = redirects.find((redirect) => redirect.from === url)

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url)
    } else if (redirectItem.to?.reference) {
      const { relationTo, value } = redirectItem.to.reference
      const slug = typeof value === 'string' ? value : value.slug
      const redirectUrl = `${relationTo !== 'pages' ? `/${relationTo}` : ''}/${slug}`
      redirect(redirectUrl)
    }
  }

  if (!disableNotFound) notFound()

  return null
}
