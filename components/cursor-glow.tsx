'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // Skip on touch / coarse pointer devices and when reduced motion is requested.
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduced) {
      setEnabled(false)
      return
    }

    let frame = 0
    const handleMove = (e: MouseEvent) => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
        document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
        frame = 0
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return <div aria-hidden className="cursor-glow" />
}
