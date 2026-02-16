'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

const Button = ({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'flex justify-center items-center gap-2 rounded-full font-poppins-400 transition-all md:w-48 w-32 md:text-sm text-xs md:py-2.5 py-2'

  const variants = {
    primary: 'bg-blue text-white hover:bg-blue/90',
    outline: 'border border-blue text-blue hover:border-navy hover:bg-gray/5',
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export default Button
