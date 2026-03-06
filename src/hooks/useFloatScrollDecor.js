import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Applies float + scroll-linked rotation to all elements with data-float-decor.
 * Run once after mount (e.g. in App).
 */
export function useFloatScrollDecor() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReducedMotion) return

    const els = document.querySelectorAll('[data-float-decor]')
    const floatTweens = []
    const scrollTriggers = []

    els.forEach((el) => {
      // Elements with data-float-decor="center" use -translate-y-1/2; preserve that in GSAP
      if (el.dataset.floatDecor === 'center') {
        gsap.set(el, { yPercent: -50 })
      }

      // Continuous float: subtle up-down (starts after fade-in finishes ~0.7s)
      const floatTween = gsap.to(el, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8,
      })
      floatTweens.push(floatTween)

      // Scroll-linked rotation: rotate from -12deg to +12deg as element moves through viewport
      const scrollTween = gsap.fromTo(
        el,
        { rotation: -12 },
        {
          rotation: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      )
      scrollTriggers.push(scrollTween.scrollTrigger)
    })

    return () => {
      floatTweens.forEach((t) => t.kill())
      scrollTriggers.forEach((st) => st.kill())
    }
  }, [])
}
