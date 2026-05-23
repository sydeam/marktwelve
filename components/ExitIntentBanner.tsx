'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { X, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes' 

export default function ExitIntentBanner() {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (timerRef.current) clearTimeout(timerRef.current)
        setVisible(true)
        // Auto-dismiss after 7 seconds
        timerRef.current = setTimeout(() => setVisible(false), 7000)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setVisible(false)
  }

  const isDark = resolvedTheme !== 'light'

  return (
    <>
      <style>{`
        @keyframes exitFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes exitCardUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes exitLineGrow {
          from { width: 0; }
          to   { width: 2.5rem; }
        }
        .exit-overlay { animation: exitFadeIn 0.35s ease both; }
        .exit-card    { animation: exitCardUp 0.45s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .exit-line    { animation: exitLineGrow 0.6s ease 0.4s both; }
      `}</style>

      {visible && (
        <div
          className="exit-overlay fixed inset-0 z-[999] flex items-center justify-center p-6"
          style={{
            backgroundColor: isDark
              ? 'rgba(12, 12, 12, 0.88)'
              : 'rgba(245, 240, 240, 0.92)',
            backdropFilter: 'blur(8px)',
          }}
          // onClick={dismiss}
        >
          <div
            className="exit-card relative w-full max-w-lg text-center px-10 py-14"
            style={{
              background: isDark ? '#1A1A1A' : '#FFFFFF',
              border: `1px solid ${isDark ? 'rgba(85,85,85,0.25)' : 'rgba(0,0,0,0.1)'}`,
              boxShadow: isDark
                ? '0 32px 80px rgba(0,0,0,0.6)'
                : '0 32px 80px rgba(0,0,0,0.12)',
            }}
          >
            {/* X — only way to dismiss without navigating */}
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-5 right-5 cursor-none transition-colors"
              style={{ color: isDark ? '#555555' : '#AAAAAA' }}
            >
              <X size={16} />
            </button>

            {/* Animated accent line */}
            <div
              className="exit-line mx-auto mb-8"
              style={{ height: '1px', background: '#C84B30', display: 'block' }}
            />

            {/* Eyebrow */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C84B30',
                marginBottom: '1.25rem',
              }}
            >
              A Moment Before You Go
            </p>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: isDark ? '#F5F0F0' : '#0C0C0C',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Every great brand started
              <br />
              <em style={{ color: '#C84B30', fontStyle: 'italic' }}>
                with one conversation.
              </em>
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: isDark ? '#AAAAAA' : '#555555',
                maxWidth: '360px',
                margin: '0 auto 2.5rem',
              }}
            >
              We don&apos;t chase volume. We partner with a handful of visionary
              founders each year. That next spot could be yours.
            </p>

            {/* CTA — navigates to /contact and closes modal */}
            <Link
              href="/contact"
              onClick={dismiss}
              className="inline-flex items-center gap-3 cursor-none group"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isDark ? '#F5F0F0' : '#0C0C0C',
                padding: '0.875rem 2rem',
                border: `1px solid ${isDark ? 'rgba(245,240,240,0.25)' : 'rgba(0,0,0,0.2)'}`,
                transition: 'all 0.25s ease',
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1"
                style={{ transition: 'transform 0.25s ease' }}
              />
            </Link>

            {/* Soft dismiss */}
            <p
              onClick={dismiss}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                color: isDark ? '#555555' : '#AAAAAA',
                marginTop: '1.5rem',
                cursor: 'none',
              }}
            >
              No thanks, I&apos;ll pass for now
            </p>
          </div>
        </div>
      )}
    </>
  )
}