// Ambient declarations for project-level modules and global types
declare module '*.css'
declare module '*.scss'

// Swiper side-effect CSS imports (no types needed, declare as module)
declare module 'swiper/css'
declare module 'swiper/css/pagination'

// Minimal Image type used across the app
interface AppImage {
  url?: string
  alt?: string
  width?: number
  height?: number
}

// Common response shape used by fetch wrappers
interface PaginatedResponse<T> {
  docs?: T[]
  totalDocs?: number
  limit?: number
  page?: number
  totalPages?: number
}
