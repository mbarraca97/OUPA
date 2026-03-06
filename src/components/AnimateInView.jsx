import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children and applies an animation class when the element enters the viewport.
 * @param {string} animation - Tailwind animation class (e.g. 'animate-fade-in-up')
 * @param {string} className - Additional classes
 * @param {React.ElementType} as - HTML element to render (default 'div')
 */
export default function AnimateInView({ animation, className = '', as: Component = 'div', children, ...props }) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReducedMotion) {
      setHasAnimated(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [hasAnimated])

  return (
    <Component
      ref={ref}
      className={`${!hasAnimated ? 'opacity-0' : ''} ${hasAnimated ? animation : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}
