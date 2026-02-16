const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  ? `${process.env.NEXT_PUBLIC_SERVER_URL.replace(/\/$/, '')}/api`
  : '/api'

const endpoints = {
  hero: {
    getAll: `${baseUrl}/globals/hero`,
  },
  testimonials: {
    getAll: `${baseUrl}/testimonials`,
  },
  products: {
    getAll: `${baseUrl}/products`,
  },
  categories: {
    getAll: `${baseUrl}/categories`,
  },
  sociallinks: {
    getAll: `${baseUrl}/globals/social-links`,
  },
  contactSubmissions: {
    create: `${baseUrl}/contact`,
  },
}

export default endpoints
