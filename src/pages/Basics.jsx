import { useRef } from 'react'
import { gsap } from 'gsap'

export default function Basics() {
  const itemsRef = useRef([])

  const runFrom = () => {
    gsap.from(itemsRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    })
  }

  const runTo = () => {
    gsap.to(itemsRef.current, {
      x: 40,
      backgroundColor: '#0ea5e9',
      duration: 0.8,
      ease: 'back.out(1.4)'
    })
  }

  const runFromTo = () => {
    gsap.fromTo(
      itemsRef.current,
      { scale: 0.8, filter: 'blur(2px)' },
      { scale: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    )
  }

  const reset = () => gsap.set(itemsRef.current, { clearProps: 'all' })

  return (
    <div className="stack">
      <div className="card">
        <h1>Basics: to / from / fromTo</h1>
        <p className="muted">Staggers, easing and property animation.</p>
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="grid" style={{ flex: 1 }}>
            {[1,2,3,4,5,6].map((i) => (
              <div
                key={i}
                className="demo-box"
                ref={el => itemsRef.current[i - 1] = el}
              >{i}</div>
            ))}
          </div>
          <div className="col" style={{ minWidth: 240 }}>
            <div className="row" style={{ flexDirection: 'column', gap: 10 }}>
              <button className="btn" onClick={runFrom}>gsap.from</button>
              <button className="btn" onClick={runTo}>gsap.to</button>
              <button className="btn" onClick={runFromTo}>gsap.fromTo</button>
              <button className="btn" onClick={reset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
