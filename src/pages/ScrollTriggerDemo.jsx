import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollTriggerDemo() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.st-section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%'
          }
        })
      })

      const pinEl = document.querySelector('#pin')
      if (pinEl) {
        ScrollTrigger.create({
          trigger: pinEl,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
        })
        gsap.to('#pin .demo-circle', {
          x: 300,
          rotation: 360,
          scale: 1.3,
          ease: 'none',
          scrollTrigger: { trigger: pinEl, start: 'top top', end: '+=150%', scrub: true }
        })
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="stack">
      <div className="spacer" />
      <div className="card st-section">
        <h1>ScrollTrigger</h1>
        <p className="muted">Animate in response to scroll position, pin elements and scrub timelines.</p>
      </div>
      <div id="pin" className="card st-section" style={{ height: '60vh', display: 'grid', placeItems: 'center' }}>
        <div className="demo-circle">PIN</div>
      </div>
      <div className="card st-section">
        <h3>More Content</h3>
        <p>As you scroll, sections reveal and the pinned circle animates based on scroll.</p>
      </div>
      <div className="spacer" />
    </div>
  )
}
