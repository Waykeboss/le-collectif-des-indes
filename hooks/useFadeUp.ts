'use client'
import { useEffect, useRef } from 'react'

export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    // Observe all .fade-up elements inside
    const targets = el.querySelectorAll('.fade-up')
    targets.forEach((t) => obs.observe(t))
    // Also observe el itself if it has fade-up
    if (el.classList.contains('fade-up')) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}
