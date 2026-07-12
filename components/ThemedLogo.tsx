'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemedLogoProps {
  className?: string
}

export default function ThemedLogo({ className }: ThemedLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Before mount, render a transparent placeholder the same size
  // so there's no layout shift when hydration completes.
  if (!mounted) {
    return <div className={className} style={{ opacity: 0 }} />
  }

  // Light mode → dark-coloured logo (visible on light background)
  // Dark mode  → white logo (visible on dark background)
  const src = resolvedTheme === 'light' ? '/LogoWhite.png' : '/LogoDark.png'

  return (
    <img
      src={src}
      alt="Mark Twelve Logo"
      className={className}
    />
  )
}
