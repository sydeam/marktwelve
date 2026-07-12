'use client'

import { useEffect, useRef } from 'react'

const interactiveSelector = 'a, button, [role="button"]'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const moveCursor = (event: PointerEvent) => {
      dot.style.left = `${event.clientX}px`
      dot.style.top = `${event.clientY}px`
      ring.style.left = `${event.clientX}px`
      ring.style.top = `${event.clientY}px`
    }

    const getInteractiveElement = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(interactiveSelector) : null

    const handlePointerOver = (event: PointerEvent) => {
      if (getInteractiveElement(event.target)) ring.classList.add('hovered')
    }

    const handlePointerOut = (event: PointerEvent) => {
      const from = getInteractiveElement(event.target)
      const to = getInteractiveElement(event.relatedTarget)
      if (from && from !== to) ring.classList.remove('hovered')
    }

    const handlePointerDown = () => ring.classList.add('pressed')
    const handlePointerUp = () => ring.classList.remove('pressed')

    document.addEventListener('pointermove', moveCursor, { passive: true })
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointercancel', handlePointerUp)

    return () => {
      document.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  )
}
