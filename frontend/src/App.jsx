import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import DevelopersPage from './pages/DevelopersPage'
import About from './pages/About'
import ContactBar from './components/Contactbar'
import Topbar from './components/Topbar'  


export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers/team" element={<DevelopersPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        
      </Router>
    
  )
}
