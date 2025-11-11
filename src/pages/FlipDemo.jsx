import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

export default function FlipDemo() {
  const [isGrid, setIsGrid] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {})
    return () => ctx.revert()
  }, [])

  const toggleLayout = () => {
    const state = Flip.getState('.flip-item')
    setIsGrid(v => !v)
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.8,
        ease: 'power2.inOut',
        absolute: true,
        stagger: 0.05
      })
    })
  }

  return (
    <div ref={containerRef} className="stack">
      <div className="card">
        <h1>Flip</h1>
        <p className="muted">Animate between layout states without manual measurement.</p>
        <button className="btn" onClick={toggleLayout}>Toggle Layout</button>
        <div
          className="card"
          style={{
            display: 'grid',
            gridTemplateColumns: isGrid ? 'repeat(4, 1fr)' : '1fr',
            gap: 10
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flip-item demo-box" style={{ height: 80 }}>Item {i + 1}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
