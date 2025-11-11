import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export default function MotionPathDemo() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#mp-dot', {
        duration: 6,
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: '#mp-path',
          align: '#mp-path',
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      })
    }, svgRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="stack">
      <div className="card">
        <h1>MotionPath</h1>
        <p className="muted">Move elements precisely along arbitrary paths.</p>
        <div ref={svgRef} style={{ background: '#0b1020', borderRadius: 12, padding: 16 }}>
          <svg viewBox="0 0 600 240" width="100%" height="240">
            <path id="mp-path" d="M20,200 C120,20 280,20 380,200 S560,220 580,40" fill="none" stroke="#334155" strokeWidth="3"/>
            <circle id="mp-dot" r="10" fill="#22d3ee" />
          </svg>
        </div>
      </div>
    </div>
  )
}
