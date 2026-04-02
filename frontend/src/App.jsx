import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Home from './pages/Home'
import DevelopersPage from './pages/DevelopersPage'
import About from './pages/About'
import Methodology from './pages/Methodology'
import WhatWeDo from './pages/WhatWeDo'
import SDGPathway from './pages/SDGPathway'
import PartnerCollaboration from './pages/PartnerCollaboration'
// import SkillBlueprint from './pages/SkillBlueprint'
// import SkillDigest from './pages/SkillDigest'
// import AITalentResearchHub from './pages/AITalentResearchHub'
// import SkillUnpluggedPodcast from './pages/SkillUnpluggedPodcast'
// import SkillzzaLive from './pages/SkillzzaLive'
import JobSimulations from './pages/JobSimulations'
import CareerTrajectory from './pages/CareerTrajectory'
import SkillzzaPersona from './pages/SkillzzaPersona'
import StudentsUseCase from './pages/StudentsUseCase'
import InstitutionsUseCase from './pages/InstitutionsUseCase'
import EnterprisesUseCase from './pages/EnterprisesUseCase'
import GovernmentUseCase from './pages/GovernmentUseCase'
import Hirenest from './pages/Hirenest'
import PotentialMeter from './pages/PotentialMeter'
import XperiencePlatform from './pages/XperiencePlatform'
import TalentIntelligence from './pages/TalentIntelligence'
import AIHackNex from './pages/AIHackNex'
import Academy from './pages/Academy'
import ByteMinds from './pages/ByteMinds'
import Sustainability from './pages/Sustainability'
import DigitalDesign from './pages/DigitalDesign'
import EVMobility from './pages/EVMobility'
import Udan from './pages/Udan'
import ResponsibleAI from './pages/ResponsibleAI'
import ProductCatalog from './pages/ProductCatalog'

// ── Yogesh's pages ──
import OurPathwayPage from './pages/OurPathwayPage'
import AboutPage from './pages/AboutPage'
import PartnerCollaborationPage from './pages/PartnerCollaborationPage'
import InsightsPage from './pages/InsightsPage'
import JobSimulationPage from './pages/JobSimulationPage'
import XperiencePlatformPage from './pages/XperiencePlatformPage'
import AIHackNexPage from './pages/AIHackNexPage'

export default function App() {

  // smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers/team" element={<DevelopersPage />} />
        <Route path="/company/about" element={<AboutPage />} />
        <Route path="/company/methodology" element={<Methodology />} />
        <Route path="/company/what-we-do" element={<WhatWeDo />} />
        <Route path="/company/pathway" element={<OurPathwayPage />} />
        <Route path="/company/partnerships" element={<PartnerCollaborationPage />} />

        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/skill-blueprint" element={<InsightsPage />} />
        <Route path="/insights/skill-digest" element={<InsightsPage />} />
        <Route path="/insights/ai-talent-research-hub" element={<InsightsPage />} />
        <Route path="/insights/skill-unplugged-podcast" element={<InsightsPage />} />
        <Route path="/insights/skillzza-live" element={<InsightsPage />} />
        <Route path="/explore/job-simulations" element={<JobSimulationPage />} />
        <Route path="/explore/career-trajectory" element={<CareerTrajectory />} />
        <Route path="/explore/skillzza-persona" element={<SkillzzaPersona />} />
        <Route path="/use-case/students" element={<StudentsUseCase />} />
        <Route path="/use-case/institutions" element={<InstitutionsUseCase />} />
        <Route path="/use-case/enterprises" element={<EnterprisesUseCase />} />
        <Route path="/use-case/government" element={<GovernmentUseCase />} />

        <Route path="/product/hirenest" element={<Hirenest />} />
        <Route path="/product/potential-meter" element={<PotentialMeter />} />
        <Route path="/product/xperience-platform" element={<XperiencePlatformPage />} />
        <Route path="/product/talent-intelligence" element={<TalentIntelligence />} />
        <Route path="/product/ai-hacknex" element={<AIHackNexPage />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/byteminds" element={<ByteMinds />} />
        <Route path="/academy/sustainability" element={<Sustainability />} />
        <Route path="/academy/digital-design" element={<DigitalDesign />} />
        <Route path="/academy/ev-mobility" element={<EVMobility />} />
        <Route path="/academy/udan" element={<Udan />} />

        <Route path="/company/responsible-ai" element={<ResponsibleAI />} />
        <Route path="/company/product-catalog" element={<ProductCatalog />} />
      </Routes>
    </div>
  )
}
