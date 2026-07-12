'use client'

import { useEffect, useRef, useState } from 'react'

const interactiveSelector =
  'a, button, [role="button"], input, textarea, select, summary, label[for]'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>()
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    const syncCursorCapability = () => {
      setIsEnabled(mediaQuery.matches)
    }

    syncCursorCapability()
    mediaQuery.addEventListener('change', syncCursorCapability)

    return () => mediaQuery.removeEventListener('change', syncCursorCapability)
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const root = document.documentElement

    if (!isEnabled || !cursor) {
      root.classList.remove('has-custom-cursor')
      return
    }

    root.classList.add('has-custom-cursor')

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const easing = prefersReducedMotion ? 0.34 : 0.18

    const renderCursor = () => {
      const current = currentRef.current
      const target = targetRef.current

      current.x += (target.x - current.x) * easing
      current.y += (target.y - current.y) * easing

      cursor.style.left = `${current.x}px`
      cursor.style.top = `${current.y}px`

      frameRef.current = window.requestAnimationFrame(renderCursor)
    }

    const getInteractiveElement = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(interactiveSelector) : null

    const moveCursor = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }

      if (!cursor.classList.contains('is-visible')) {
        currentRef.current = { x: event.clientX, y: event.clientY }
        cursor.style.left = `${event.clientX}px`
        cursor.style.top = `${event.clientY}px`
        cursor.classList.add('is-visible')
      }
    }

    const handlePointerOver = (event: PointerEvent) => {
      if (getInteractiveElement(event.target)) {
        cursor.classList.add('is-hovered')
      }
    }

    const handlePointerOut = (event: PointerEvent) => {
      const from = getInteractiveElement(event.target)
      const to = getInteractiveElement(event.relatedTarget)

      if (from && from !== to) {
        cursor.classList.remove('is-hovered')
      }
    }

    const handlePointerDown = () => cursor.classList.add('is-pressed')
    const handlePointerUp = () => cursor.classList.remove('is-pressed')
    const hideCursor = () => {
      cursor.classList.remove('is-visible', 'is-hovered', 'is-pressed')
    }

    frameRef.current = window.requestAnimationFrame(renderCursor)

    document.addEventListener('pointermove', moveCursor, { passive: true })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointercancel', handlePointerUp)
    document.addEventListener('pointerleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      root.classList.remove('has-custom-cursor')

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      document.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointercancel', handlePointerUp)
      document.removeEventListener('pointerleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <div ref={cursorRef} className="brand-cursor" aria-hidden="true">
      <span className="brand-cursor__glow" />
      <span className="brand-cursor__hotspot" />
      <span className="brand-cursor__mark">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.5 8.5C29 7.9 35 7.7 40.3 8C43.3 8.2 43.8 11.3 40.9 11.9C34.9 13.2 29.2 13 24.7 12.2C21.7 11.7 21.5 8.9 24.5 8.5Z"
            fill="currentColor"
          />
          <path
            d="M16.8 16.7C24.4 15.2 36.3 14.9 48.1 15.6C51.9 15.8 53.2 19.6 49.6 20.5C38.6 23.2 25.4 23.1 17.8 21.7C14.2 21 13.2 17.4 16.8 16.7Z"
            fill="currentColor"
          />
          <path
            d="M11.4 26C21.1 24 38.6 23.4 53.8 24.6C58.1 24.9 59.4 29.1 55.4 30.2C40.7 34.2 22.4 34.1 12.7 32.2C8.8 31.4 7.5 26.8 11.4 26Z"
            fill="currentColor"
          />
          <path
            d="M13.7 36.5C22.5 34.7 39.1 34.5 54 35.4C58.1 35.7 59.2 39.8 55.5 40.8C41.3 44.4 24.1 44.4 14.9 42.8C11.1 42.1 9.9 37.3 13.7 36.5Z"
            fill="currentColor"
          />
          <path
            d="M18.2 47C25.1 45.8 36.4 45.5 47.5 46.2C50.9 46.4 51.8 49.8 48.7 50.7C38.5 53.4 26 53.2 19.1 51.9C15.8 51.3 14.9 47.5 18.2 47Z"
            fill="currentColor"
          />
          <path
            d="M24 55.2C28.4 54.6 34.1 54.5 39 54.9C41.7 55.1 42.3 57.9 39.8 58.6C34.9 59.9 29 59.9 24.6 59.2C22 58.8 21.4 55.5 24 55.2Z"
            fill="currentColor"
          />
          <path
            d="M19.5 20.4C25.8 19.8 34.8 19.8 42.2 20.6"
            stroke="rgba(12,12,12,0.26)"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
          <path
            d="M15.2 30.4C23.3 29.5 33.2 29.3 47.6 30"
            stroke="rgba(12,12,12,0.3)"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
          <path
            d="M20.8 40.9C27.9 40.3 37 40.1 49.2 40.8"
            stroke="rgba(12,12,12,0.3)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M24.2 50C29.3 49.4 35.6 49.4 43.5 49.9"
            stroke="rgba(12,12,12,0.3)"
            strokeLinecap="round"
            strokeWidth="1.3"
          />
        </svg>
      </span>
    </div>
  )
}
