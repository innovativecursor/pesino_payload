'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import endpoints from '../config/endpoints'
import { fetchDataGet } from '../utils/fetchData'

type CleanCategory = {
  id: string
  title: string
}

export type CleanProduct = {
  id: string
  title: string
  mg: string
  image: string // URL
  categoryId: string
  categoryName?: string
}

type PayloadListResponse<T> = {
  docs: T[]
  totalDocs?: number
  page?: number
  totalPages?: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
  limit?: number
}

type ProductDoc = {
  id: string
  title: string
  mg: string
  image: { url: string; alt?: string } | string
  category: { id: string; title: string } | string
}

type ProductsContextType = {
  categories: CleanCategory[]
  activeCategoryId: string
  setActiveCategoryId: (id: string) => void

  searchQuery: string
  setSearchQuery: (query: string) => void

  products: CleanProduct[]
  loading: boolean

  page: number
  setPage: (page: number) => void
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

const ProductsContext = createContext<ProductsContextType>({
  categories: [],
  activeCategoryId: 'all',
  setActiveCategoryId: () => {},

  searchQuery: '',
  setSearchQuery: () => {},

  products: [],
  loading: false,

  page: 1,
  setPage: () => {},
  totalPages: 1,
  hasNextPage: false,
  hasPrevPage: false,
})

export const useProducts = () => useContext(ProductsContext)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<CleanCategory[]>([])
  const [activeCategoryId, setActiveCategoryId] = useState('all')

  const [searchQuery, setSearchQuery] = useState('')

  const [allProducts, setAllProducts] = useState<CleanProduct[]>([])
  const [products, setProducts] = useState<CleanProduct[]>([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const ITEMS_PER_PAGE = 12

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const url = `${endpoints.categories.getAll}?limit=1000`
        const response = (await fetchDataGet(url)) as PayloadListResponse<{
          id: number | string
          title: string
        }>

        const cleanCategories: CleanCategory[] = Array.isArray(response.docs)
          ? response.docs.map((item) => ({
              id: String(item.id),
              title: item.title,
            }))
          : []

        setCategories(cleanCategories)
      } catch (error) {
        console.error('Category fetch failed', error)
        setCategories([])
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true)

        const url = `${endpoints.products.getAll}?limit=1000&depth=1&sort=-createdAt`

        const response = (await fetchDataGet(url)) as PayloadListResponse<ProductDoc>

        const cleanProducts: CleanProduct[] = Array.isArray(response.docs)
          ? response.docs.map((item) => {
              let imageUrl = '/fallback.png'
              if (item.image && typeof item.image === 'object' && item.image.url) {
                imageUrl = item.image.url
              }

              let catId = ''
              let catTitle = ''
              if (item.category && typeof item.category === 'object') {
                catId = String(item.category.id)
                catTitle = item.category.title
              } else if (typeof item.category === 'string') {
                catId = item.category
              }

              return {
                id: item.id,
                title: item.title,
                mg: item.mg,
                image: imageUrl,
                categoryId: catId,
                categoryName: catTitle,
              }
            })
          : []

        setAllProducts(cleanProducts)
      } catch (error) {
        console.error('Products fetch failed', error)
        setAllProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchAllProducts()
  }, [])

  useEffect(() => {
    let filtered = allProducts

    if (activeCategoryId !== 'all') {
      filtered = filtered.filter((p) => p.categoryId === activeCategoryId)
    }

    if (searchQuery.trim().length > 2) {
      const lowerQuery = searchQuery.toLowerCase()
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(lowerQuery))
    }

    const totalItems = filtered.length
    const totalPagesCount = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1

    const currentPage = Math.min(Math.max(1, page), totalPagesCount)
    if (currentPage !== page) {
      setPage(currentPage)
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    setProducts(paginatedItems)
  }, [allProducts, activeCategoryId, searchQuery, page])

  let filteredForCounts = allProducts
  if (activeCategoryId !== 'all') {
    filteredForCounts = filteredForCounts.filter((p) => p.categoryId === activeCategoryId)
  }
  if (searchQuery.trim().length > 3) {
    const lowerQuery = searchQuery.toLowerCase()
    filteredForCounts = filteredForCounts.filter((p) => p.title.toLowerCase().includes(lowerQuery))
  }

  const totalPages = Math.ceil(filteredForCounts.length / ITEMS_PER_PAGE) || 1
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  useEffect(() => {
    setPage(1)
  }, [activeCategoryId, searchQuery])

  return (
    <ProductsContext.Provider
      value={{
        categories,
        activeCategoryId,
        setActiveCategoryId,
        searchQuery,
        setSearchQuery,
        products,
        loading,
        page,
        setPage,
        totalPages,
        hasNextPage,
        hasPrevPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
