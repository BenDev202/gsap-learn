import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Timelines() {
  const boxA = useRef(null)
  const boxB = useRef(null)
  const boxC = useRef(null)
  const tl = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } })
        .from(boxA.current, { y: 40, opacity: 0, duration: 0.5 })
        .to(boxA.current, { x: 120, rotation: 20, duration: 0.6 })
        .from(boxB.current, { y: 40, opacity: 0, duration: 0.5 }, '-=0.2')
        .to(boxB.current, { x: 120, rotation: -20, duration: 0.6 })
        .from(boxC.current, { y: 40, opacity: 0, duration: 0.5 }, '-=0.2')
        .to(boxC.current, { x: 120, scale: 1.2, duration: 0.6 })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="stack">
      <div className="card">
        <h1>Timelines</h1>
        <p className="muted">Sequence animations with precise control and labels.</p>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="grid" style={{ flex: 1 }}>
            <div ref={boxA} className="demo-box">A</div>
            <div ref={boxB} className="demo-box">B</div>
            <div ref={boxC} className="demo-box">C</div>
          </div>
          <div className="col" style={{ minWidth: 260 }}>
            <div className="row" style={{ flexDirection: 'column', gap: 10 }}>
              <button className="btn" onClick={() => tl.current?.play(0)}>Play</button>
              <button className="btn" onClick={() => tl.current?.pause()}>Pause</button>
              <button className="btn" onClick={() => tl.current?.reverse()}>Reverse</button>
              <button className="btn" onClick={() => tl.current?.resume()}>Resume</button>
              <button className="btn" onClick={() => tl.current?.timeScale(2)}>
                Speed x2
              </button>
              <button className="btn" onClick={() => tl.current?.timeScale(1)}>
                Speed 1x
              </button>
              <button className="btn" onClick={() => gsap.set([boxA.current, boxB.current, boxC.current], { clearProps: 'all' })}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
