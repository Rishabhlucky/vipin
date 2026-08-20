import { useEffect, useRef, useState } from 'react'

/**
 * useReveal
 * Returns a ref + boolean. Attach the ref to any element, and use the
 * boolean to toggle animate.css classes (e.g. "animate__fadeInUp") once
 * the element scrolls into the viewport. Keeps animation logic out of
 * markup and respects prefers-reduced-motion automatically via CSS.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
