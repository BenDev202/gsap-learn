import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand">GSAP Learn</div>
      <div className="links">
        <NavLink to="/intro">Intro</NavLink>
        <NavLink to="/basics">Basics</NavLink>
        <NavLink to="/timelines">Timelines</NavLink>
        <NavLink to="/scrolltrigger">ScrollTrigger</NavLink>
        <NavLink to="/flip">Flip</NavLink>
        <NavLink to="/motionpath">MotionPath</NavLink>
      </div>
    </nav>
  )
}
