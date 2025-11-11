import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Intro from './pages/Intro'
import Basics from './pages/Basics'
import Timelines from './pages/Timelines'
import ScrollTriggerDemo from './pages/ScrollTriggerDemo'
import FlipDemo from './pages/FlipDemo'
import MotionPathDemo from './pages/MotionPathDemo'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/timelines" element={<Timelines />} />
          <Route path="/scrolltrigger" element={<ScrollTriggerDemo />} />
          <Route path="/flip" element={<FlipDemo />} />
          <Route path="/motionpath" element={<MotionPathDemo />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}
