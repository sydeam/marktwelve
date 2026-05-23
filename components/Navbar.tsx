'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const logoSrc = mounted && resolvedTheme === 'light' ? '/LogoWhite.png' : '/LogoDark.png'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          backgroundColor: scrolled ? 'rgba(12,12,12,0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(85,85,85,0.15)' : '1px solid transparent',
        }}
      >
        <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-none">
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

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link cursor-none ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary cursor-none text-xs">
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-paper p-1 cursor-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-void flex flex-col transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
        }`}
        style={{ transition: 'opacity 0.35s ease' }}
      >
        <div className="container-narrow flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="cursor-none">
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
            className="text-paper p-1 cursor-none"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center container-narrow">
          <ul className="space-y-6">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  animation: mobileOpen
                    ? `fadeUp 0.5s ease ${i * 0.07}s both`
                    : 'none',
                }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-5xl tracking-tight cursor-none transition-colors hover:text-signal ${
                    pathname === link.href ? 'text-paper' : 'text-smoke'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              style={{
                animation: mobileOpen
                  ? `fadeUp 0.5s ease ${navLinks.length * 0.07}s both`
                  : 'none',
              }}
            >
              <Link
                href="/contact"
                className="font-display text-5xl tracking-tight text-signal cursor-none"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-16 pt-8 border-t border-ash/20">
            <p className="text-ash text-sm font-body tracking-widest uppercase">
              info.marktwelve@gmail.com
            </p>
            <p className="text-ash text-sm font-body mt-1">+91 93917 25839</p>
          </div>
        </nav>
      </div>
    </>
  )
}
