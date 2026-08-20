'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp
 * Animates a number from `start` to `end` over `duration` ms.
 * Pass `trigger=true` to start the animation (e.g. once an element
 * scrolls into view via useReveal).
 */
export default function useCountUp(end, { start = 0, duration = 1200, trigger = true } = {}) {
  const [value, setValue] = useState(start)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!trigger || startedRef.current) return
    startedRef.current = true

    let rafId
    let startTime = null

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutQuad — starts fast, settles smoothly instead of a linear tick
      const eased = 1 - (1 - progress) * (1 - progress)
      const current = Math.round(start + (end - start) * eased)
      setValue(current)

      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [trigger, end, start, duration])

  return value
}