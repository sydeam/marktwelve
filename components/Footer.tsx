'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const logoSrc =
    mounted && resolvedTheme === 'light' ? '/LogoWhite.png' : '/LogoDark.png'

  return (
    <>
      <style>{`
        .footer-link:hover  { color: var(--paper) !important; }
        .footer-social:hover { color: var(--paper) !important; }
      `}</style>

      <footer className="py-14 mt-0">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
            <div className="space-y-3">
              {mounted ? (
                <Image
                  src={logoSrc}
                  alt="Mark Twelve"
                  width={105}
                  height={36}
                  className="h-[36px] w-auto opacity-90"
                />
              ) : (
                <div className="h-7 w-24" />
              )}
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--smoke)', fontFamily: 'var(--font-body)' }}
              >
                Precision and high-value curation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/letsmarktwelve_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mark Twelve on Instagram"
                className="footer-social transition-colors"
                style={{ color: 'var(--ash)' }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/marktwelve"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mark Twelve on LinkedIn"
                className="footer-social transition-colors"
                style={{ color: 'var(--ash)' }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 gap-4"
            style={{ borderTop: '1px solid rgba(85,85,85,0.2)' }}
          >
            <p
              className="text-xs"
              style={{ color: 'var(--smoke)', fontFamily: 'var(--font-body)' }}
            >
              © 2025 Mark Twelve. Precision and high-value curation.
            </p>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-5">
                {['Privacy Policy', 'Terms of Service', 'Cookies', 'Careers'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="footer-link text-xs tracking-widest uppercase transition-colors"
                      style={{ color: 'var(--smoke)', fontFamily: 'var(--font-body)' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}