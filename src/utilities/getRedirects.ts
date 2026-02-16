import { unstable_cache } from 'next/cache'

export async function getRedirects(depth = 1) {
  return [] // Redirects collection delete ho gaya, so empty list return kar rahe hain
}

export const getCachedRedirects = () =>
  unstable_cache(async () => getRedirects(), ['redirects'], {
    tags: ['redirects'],
  })
