import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  priority?: boolean
}

export const Logo = (props: Props) => {
  const { className, priority = false } = props

  return (
    <Image
      src="/logo.svg"
      alt="Payload Logo"
      width={100}
      height={48}
      priority={priority}
      className={clsx('xl:w-64 md:w-40 md:h-14 h-12 w-44', className)}
    />
  )
}
