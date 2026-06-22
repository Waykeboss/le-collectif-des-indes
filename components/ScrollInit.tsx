'use client'
import { useEffect } from 'react'

export default function ScrollInit() {
  useEffect(() => {
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
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
