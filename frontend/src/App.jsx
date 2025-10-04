import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import DevelopersPage from './pages/DevelopersPage'
import About from './pages/About'
import Methodology from './pages/Methodology'
import WhatWeDo from './pages/WhatWeDo'
import SDGPathway from './pages/SDGPathway'
import PartnerCollaboration from './pages/PartnerCollaboration'
import SkillBlueprint from './pages/SkillBlueprint'
import SkillDigest from './pages/SkillDigest'
import AITalentResearchHub from './pages/AITalentResearchHub'
import JobSimulations from './pages/JobSimulations'
import CareerTrajectory from './pages/CareerTrajectory'
import SkillzzaPersona from './pages/SkillzzaPersona'
import StudentsUseCase from './pages/StudentsUseCase'
import InstitutionsUseCase from './pages/InstitutionsUseCase'
import EnterprisesUseCase from './pages/EnterprisesUseCase'
import GovernmentUseCase from './pages/GovernmentUseCase'
import Hirenest from './pages/Hirenest'
import PotentialMeter from './pages/PotentialMeter'
import Academy from './pages/Academy'
import ByteMinds from './pages/ByteMinds'
import Sustainability from './pages/Sustainability'
import DigitalDesign from './pages/DigitalDesign'
import EVMobility from './pages/EVMobility'
import Udan from './pages/Udan'
import XperiencePlatform from './pages/XperiencePlatform'
import TalentIntelligence from './pages/TalentIntelligence'
import AIHackNex from './pages/AIHackNex'
// import ContactBar from './components/Contactbar'
// import Topbar from './components/Topbar'  


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
            <Route path="/company/about" element={<About />} />
            <Route path="/company/methodology" element={<Methodology />} />
            <Route path="/company/what-we-do" element={<WhatWeDo />} />
            <Route path="/company/pathway" element={<SDGPathway />} />
            <Route path="/company/partnerships" element={<PartnerCollaboration />} />
            <Route path="/insights/skill-blueprint" element={<SkillBlueprint />} />
            <Route path="/insights/skill-digest" element={<SkillDigest />} />
            <Route path="/insights/ai-talent-research-hub" element={<AITalentResearchHub />} />
            <Route path="/explore/job-simulations" element={<JobSimulations />} />
            <Route path="/explore/career-trajectory" element={<CareerTrajectory />} />
            <Route path="/explore/skillzza-persona" element={<SkillzzaPersona />} />
            <Route path="/use-case/students" element={<StudentsUseCase />} />
            <Route path="/use-case/institutions" element={<InstitutionsUseCase />} />
            <Route path="/use-case/enterprises" element={<EnterprisesUseCase />} />
            <Route path="/use-case/government" element={<GovernmentUseCase />} />
            <Route path="/product/hirenest" element={<Hirenest />} />
            <Route path="/product/potential-meter" element={<PotentialMeter />} />
            <Route path="/product/xperience-platform" element={<XperiencePlatform />} />
            <Route path="/product/talent-intelligence" element={<TalentIntelligence />} />
            <Route path="/product/ai-hacknex" element={<AIHackNex />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/byteminds" element={<ByteMinds />} />
            <Route path="/academy/sustainability" element={<Sustainability />} />
            <Route path="/academy/digital-design" element={<DigitalDesign />} />
            <Route path="/academy/ev-mobility" element={<EVMobility />} />
            <Route path="/academy/udan" element={<Udan />} />
          </Routes>
        </div>
        
      </Router>
    
  )
}
