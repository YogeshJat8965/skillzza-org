import React from 'react'
import Hero from '../components/Hero'
import Challenge from '../components/Challenge'
import SchoolOfTechnology from '../components/SchoolOfTechnology'
import Partnerships from '../components/Partnerships'
// import OurPartners from '../components/OurPartners'
import PartnerForm from '../components/PartnerForm'
import Insights from '../components/Insights'
import SkillzzaEcosystem from '../components/SkillzzaEcosystem'
import SolutionSkillStudio from '../components/SolutionSkillStudio'

function HomePage() {
  return (
    <div className="home-scale-shell">
      <div className="home-scale-content">
        <Hero />
        <Challenge />
        <SkillzzaEcosystem />
        <SolutionSkillStudio />
        <SchoolOfTechnology />
        <Partnerships />
        {/* <OurPartners /> */}
        <PartnerForm />
        <Insights />
      </div>
    </div>
  )
}

export default HomePage
