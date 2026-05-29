'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X, Hand } from 'lucide-react'

import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Our Story', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Thoughts', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  // Mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const logoSrc =
    mounted && resolvedTheme === 'light'
      ? '/LogoWhite.png'
      : '/LogoDark.png'

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 select-none"
            aria-label="Go to homepage"
          >
            {mounted ? (
              <Image
                src={logoSrc}
                alt="Mark Twelve"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            ) : (
              <div className="h-8 w-32" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-all duration-300 text-m font-medium ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-5 py-2.5
                text-sm font-medium
                bg-[#C84B30]
                text-white
                hover:bg-orange-400
                transition-all duration-300
                hover:scale-105
                shadow-lg shadow-orange-500/20
              "
            >
              <span>Say Hello</span>

              <Hand
                size={18}
                strokeWidth={2.2}
                className="animate-wave"
              />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Mobile Top */}
        <div className="container-narrow flex items-center justify-between h-16">
          <Link href="/">
            {mounted && (
              <Image
                src={logoSrc}
                alt="Mark Twelve"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            )}
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col justify-center h-[80vh] container-narrow">
          <ul className="space-y-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{
                  animation: mobileOpen
                    ? `fadeUp 0.5s ease ${index * 0.08}s both`
                    : 'none',
                }}
              >
                <Link
                  href={link.href}
                  className={`
                    text-5xl font-bold tracking-tight
                    transition-colors duration-300
                    ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-gray-500 hover:text-orange-400'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Contact */}
            <li>
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-3
                  text-5xl font-bold text-orange-400
                "
              >
                Say Hello

                <Hand
                  size={34}
                  strokeWidth={2}
                  className="animate-wave"
                />
              </Link>
            </li>
          </ul>

          {/* Footer */}
          <div className="mt-20 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400 tracking-widest uppercase">
              info.marktwelve@gmail.com
            </p>

            <p className="text-sm text-gray-500 mt-2">
              +91 93917 25839
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}