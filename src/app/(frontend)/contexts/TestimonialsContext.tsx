'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { TestimonialData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface TestimonialContextType {
  testimonials: TestimonialData[]
  fetchTestimonials: () => Promise<void>
}

const TestimonialContext = createContext<TestimonialContextType>({
  testimonials: [],
  fetchTestimonials: async () => {},
})

export const useTestimonial = () => useContext(TestimonialContext)

export const TestimonialProvider = ({ children }: { children: ReactNode }) => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([])

  const fetchTestimonials = async () => {
    try {
      const data = (await fetchDataGet(
        endpoints.testimonials.getAll,
      )) as PaginatedResponse<TestimonialData>
      setTestimonials(Array.isArray(data?.docs) ? data?.docs : [])
    } catch (error) {
      console.error('Failed to fetch testimonials:', error)
    }
  }

  return (
    <TestimonialContext.Provider value={{ testimonials, fetchTestimonials }}>
      {children}
    </TestimonialContext.Provider>
  )
}
