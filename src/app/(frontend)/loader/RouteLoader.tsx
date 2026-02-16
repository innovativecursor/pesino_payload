'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-[#0075c5] animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-b-transparent border-[#0075c5] animate-[spin_2s_linear_infinite_reverse]"></div>
      </div>
    </div>
  )
}
