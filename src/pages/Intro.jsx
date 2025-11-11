import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Intro() {
  const boxRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="stack">
      <div className="card">
        <h1>GSAP: GreenSock Animation Platform</h1>
        <p className="muted">From first principles to production techniques.</p>
        <p>
          GSAP is a professional-grade animation library for the web. It offers a
          concise API, excellent performance, rich easing, timelines for complex sequences,
          and robust plugins like ScrollTrigger, Flip and MotionPath.
        </p>
        <p>
          In this repo, each page shows a working example with short guidance. Explore the
          nav to learn progressively.
        </p>
      </div>

      <div className="card">
        <h2>First Tween</h2>
        <p>Click the button to animate the box using a simple gsap.to call.</p>
        <div className="row" style={{ alignItems: 'center' }}>
          <div ref={boxRef} className="demo-box" id="introBox">Box</div>
          <button
            className="btn"
            onClick={() => {
              gsap.to('#introBox', { x: 150, rotation: 45, backgroundColor: '#0ea5e9', duration: 1.2, ease: 'power3.out' })
            }}
          >Run Tween</button>
          <button
            className="btn"
            onClick={() => gsap.set('#introBox', { clearProps: 'all' })}
          >Reset</button>
        </div>
      </div>

      <div className="card">
        <h3>Key Concepts</h3>
        <ul>
          <li><span className="badge">Tween</span> Animate properties of targets over time.</li>
          <li><span className="badge">Ease</span> Controls the rate of change (e.g. power3.out).</li>
          <li><span className="badge">Timeline</span> Sequence and coordinate multiple tweens.</li>
          <li><span className="badge">Plugins</span> Extend features (ScrollTrigger, Flip, MotionPath).</li>
          <li><span className="badge">Context</span> In React, wrap animations to auto-cleanup.</li>
        </ul>
      </div>
    </div>
  )
}
