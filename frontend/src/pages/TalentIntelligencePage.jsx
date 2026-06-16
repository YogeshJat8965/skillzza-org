import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Note: Ensure the image is in this path or adjust accordingly. 
import heroImg from '../assets/talent-intelligence/ChatGPT Image Jun 15, 2026, 12_53_32 AM.png'
import image416 from '../assets/talent-intelligence/Image 416.png'

// Designed For Icons
import govIcon from '../assets/talent-intelligence/goverment_17213502.svg'
import changeIcon from '../assets/talent-intelligence/change_17930856.svg'
import officeIcon from '../assets/talent-intelligence/office-building_11342251.svg'
import offeringIcon from '../assets/talent-intelligence/initial-public-offering_15749347.svg'
import offeringIcon1 from '../assets/talent-intelligence/initial-public-offering_15749347-1.svg'

export default function TalentIntelligencePage() {
  const heroSectionRef = useRef(null)

  /* ── Entrance & Scroll animations ── */
  useEffect(() => {
    // Hero animations
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;[
              '.ti-breadcrumb',
              '.ti-heading',
              '.ti-para1',
              '.ti-para2',
              '.ti-hero-img',
            ].forEach((sel) => {
              const el = entry.target.querySelector(sel)
              if (el) el.classList.add('active-3d')
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (heroSectionRef.current) heroObserver.observe(heroSectionRef.current)

    // Global 3D Scroll Animations for rest of the page
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active-3d')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.scroll-3d')
    elements.forEach(el => scrollObserver.observe(el))

    return () => {
      if (heroSectionRef.current) heroObserver.unobserve(heroSectionRef.current)
      elements.forEach(el => scrollObserver.unobserve(el))
    }
  }, [])

  return (
    <>
      <style>{`
        /* ── Section Background ── */
        .ti-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #FFFFFF;
        }

        /* ── Modern 3D Scroll Animations ── */
        .scroll-3d,
        .ti-breadcrumb,
        .ti-heading,
        .ti-para1,
        .ti-para2,
        .ti-hero-img {
          opacity: 0;
          transform: translateY(40px) scale(0.96) rotateX(-5deg);
          filter: blur(8px);
          transition: opacity 1s cubic-bezier(0.25, 1, 0.2, 1),
                      transform 1s cubic-bezier(0.25, 1, 0.2, 1),
                      filter 1s cubic-bezier(0.25, 1, 0.2, 1);
          will-change: transform, opacity, filter;
        }
        .active-3d {
          opacity: 1 !important;
          transform: translateY(0) scale(1) rotateX(0) !important;
          filter: blur(0) !important;
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        /* ── Staggered entrance delays ── */
        .ti-heading  { transition-delay: 150ms; }
        .ti-para1    { transition-delay: 300ms; }
        .ti-para2    { transition-delay: 450ms; }
        .ti-hero-img { transition-delay: 400ms; transform: translateX(60px) scale(0.96); }
        .ti-hero-img.active-3d { transform: translateX(0) scale(1) !important; }

        /* ── Heading colours ── */
        .ti-h1-dark   { color: #0F1114; }
        .ti-h1-purple { color: #79529A; }

        /* ── H1 line blocks — force 3 exact lines on desktop ── */
        .ti-h1-line {
          display: block;
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .ti-h1-line { white-space: normal !important; }
        }

        /* ── CTA Button ── */
        .ti-cta-btn {
          background: linear-gradient(90deg, #79529A 0%, #9B6FC2 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .ti-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(121, 82, 154, 0.35);
        }
        .ti-cta-btn:active { transform: translateY(0); }

        /* ── Mobile: image below text ── */
        @media (max-width: 1023px) {
          .ti-hero-img {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            display: flex;
            justify-content: center;
            padding: 16px 16px 40px;
          }
          .ti-hero-img img {
            max-width: 600px !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* ════════════════════════ HERO SECTION ════════════════════════ */}
      <section ref={heroSectionRef} className="ti-section relative w-full overflow-hidden">

        {/* ── Breadcrumb ── */}
        <nav className="ti-breadcrumb relative z-20 pt-3 pb-2 md:pt-4 md:pb-3 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1360px] mx-auto w-full text-left">
          <div
            className="flex items-center justify-start gap-1.5 sm:gap-2 text-[16px] md:text-[20px] font-medium w-full"
            style={{ color: '#71717A', fontFamily: "'Lato', sans-serif" }}
          >
            <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: '#71717A' }}>Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#18181B', fontWeight: 500 }}>Talent Transformation</span>
          </div>
        </nav>

        {/* ── Main content container ── */}
        <div className="relative max-w-[1360px] mx-auto z-10">

          {/* ════ LEFT column: Text ════ */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-4 md:py-6 lg:py-8 xl:py-10">

            {/* H1 — DM Sans 700, clamp(24px, 2.8vw, 52px) — same as HireTwinPage */}
            <h1
              className="ti-heading mb-5 md:mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                fontWeight: 700,
                lineHeight: '1.16',
                letterSpacing: '-0.5px',
              }}
            >
              <span className="ti-h1-line">
                <span className="ti-h1-purple">Redesign</span> <span className="ti-h1-dark">Work.</span> <br /> 
              </span>
              <span className="ti-h1-line">
                <span className="ti-h1-purple">Talent</span> <span className="ti-h1-dark">Activate.</span> <br /> 
              </span>
              <span className="ti-h1-line"> 
                <span className="ti-h1-dark">Talent.</span> <span className="ti-h1-purple">Future-Proof the</span>
              </span>
              <span className="ti-h1-line">
                <span className="ti-h1-purple">Workforce.</span>
              </span>
            </h1>

            {/* Para 1 — Lato, clamp(20px, 1.2vw, 24px) */}
            <p
              className="ti-para1 mb-4 md:mb-5"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(20px, 1.2vw, 24px)',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#515158',
                maxWidth: '510px',
              }}
            >
              Talent Transformation is an AI-powered enterprise framework that
              enables organizations to redesign work, activate skills, and sustain
              workforce readiness in an era of rapid AI-led change.
            </p>

            {/* Para 2 */}
            <p
              className="ti-para2 mb-8 md:mb-10 lg:mb-12"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(20px, 1.2vw, 24px)',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717A',
                maxWidth: '510px',
              }}
            >
              Built on three integrated capability phases—Infera, Nexis, and Avanta—
              the framework helps enterprises move beyond static job structures to
              adaptive, skills-driven operating models. By combining work
              intelligence, skills orchestration, and continuous capability
              development, Talent Transformation delivers measurable productivity,
              agility, and workforce resilience—without operational complexity.
            </p>
          </div>

          {/* ════ RIGHT column: Hero image ════ */}
          <div
            className="ti-hero-img lg:absolute lg:right-0 lg:-top-8 xl:-top-12 w-full lg:w-[52%] xl:w-[54%] flex justify-end items-start"
            style={{ paddingRight: 0 }}
          >
            <img
              src={heroImg}
              alt="Talent Intelligence Dashboard"
              style={{
                width: '100%',
                maxWidth: '750px',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
              }}
            />
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — Talent Transformation Roadmap
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-4 md:py-6 lg:py-8">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 xl:gap-28">

            {/* Left — heading */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex-shrink-0 scroll-3d">
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 2.8vw, 52px)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                  color: '#0F1114',
                }}
              >
                Talent Transformation Roadmap
              </h2>
            </div>

            {/* Right — subtitle + body */}
            <div className="w-full lg:flex-1 scroll-3d delay-200">
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(20px, 1.2vw, 24px)',
                  color: '#0F1114',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                }}
              >
                A Structured, AI-Led Journey from Work Redesign to Workforce Readiness
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: 'clamp(20px, 1.2vw, 24px)',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  color: '#515158',
                  maxWidth: '620px',
                }}
              >
                The Talent Transformation Roadmap defines how enterprises
                systematically evolve from fragmented workforce models to a
                continuously adaptive, skills-driven organization.
                Rather than isolated initiatives, the roadmap follows a
                progressive, closed-loop journey that aligns work, skills, and
                capability at every stage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — Phase Roadmap (exact talent-twin "How it Works" pattern)
      ════════════════════════════════════════════════════════════════ */}
      <PhaseRoadmapSection />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — Integration Section
      ════════════════════════════════════════════════════════════════ */}
      <IntegrationSection />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — Why Talent Transformation
      ════════════════════════════════════════════════════════════════ */}
      <WhyTalentTransformationSection />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — Designed For
      ════════════════════════════════════════════════════════════════ */}
      <DesignedForSection />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7 — Outcomes
      ════════════════════════════════════════════════════════════════ */}


      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — Final CTA
      ════════════════════════════════════════════════════════════════ */}
      <FinalCtaSection />
    </>
  )
}

/* ── Phase Roadmap — directly lifted from XperiencePlatformPage "How it Works" ── */
function PhaseRoadmapSection() {
  const [activePhase, setActivePhase] = React.useState(0)

  const phases = [
    {
      number: '1',
      title: 'Phase 1: Infera',
      subtitle: 'Understand, Redesign, and Optimize Work',
      label: 'PHASE 1: INFERA',
      detail: {
        strategicObjective:
          'Establish a clear, data-driven understanding of how work is performed today and how it should evolve in an AI-enabled enterprise.\nInfera is the diagnostic and intelligence foundation of the roadmap. It replaces assumption-based workforce planning with task-level, AI-driven insight, enabling leaders to redesign work with confidence and precision.',
        keyFocusAreas: [
          'Mapping how work is structured across roles, functions, and processes',
          'Identifying effort, cost, risk, and value embedded in current work models',
          'Determining where AI can automate, augment, or support work meaningfully',
          'Understanding future work patterns driven by technology and business change',
        ],
        whatHappens: [
          'Work and task intelligence is analyzed across the organization',
          'High-impact opportunities for efficiency and value creation are identified',
          'Roles are deconstructed into skills and activities rather than job titles',
          'AI investments are aligned to business priorities and measurable outcomes',
        ],
        outputsLabel: 'Outputs of Phase 1',
        outputs: [
          'Clear visibility into current and future work structures',
          'Prioritized AI and workforce optimization opportunities',
          'Data-backed guidance for work redesign and role evolution',
        ],
        outcome:
          'Leaders gain clarity on what work should change, why it should change, and where AI creates real value—forming the foundation for all subsequent phases.',
      },
    },
    {
      number: '2',
      title: 'Phase 2: Nexis',
      subtitle: 'Activate Skills and Orchestrate Work Dynamically',
      label: 'PHASE 2: NEXIS',
      detail: {
        strategicObjective:
          'Ensure that redesigned work flows to the most relevant skills at the right time, maximizing talent utilization and execution speed.\nNexis operationalizes the intelligence generated in Phase 1. It shifts the organization from static, role-based execution to a skills-first, fluid operating model, enabling faster delivery without structural friction.',
        keyFocusAreas: [
          'Skills-based matching of work, projects, and initiatives',
          'Dynamic deployment of internal talent across functions',
          'Breaking down silos that restrict collaboration and agility',
          'Reducing reliance on external hiring by unlocking internal capability',
        ],
        whatHappens: [
          'Work is routed based on skills rather than job titles',
          'Internal talent becomes visible, accessible, and deployable',
          'Cross-functional collaboration becomes easier and faster',
          'Bottlenecks caused by rigid structures are reduced',
        ],
        outputsLabel: 'Outputs of Phase 2',
        outputs: [
          'Improved utilization of existing workforce capability',
          'Faster execution of critical initiatives',
          'Reduced talent waste and hiring dependency',
        ],
        outcome:
          'The enterprise moves from knowing where skills exist to actively deploying them, turning insight into execution and productivity gains.',
      },
    },
    {
      number: '3',
      title: 'Phase 3: Avanta',
      subtitle: 'Prepare, Grow, and Sustain Future Capability',
      label: 'PHASE 3: AVANTA',
      detail: {
        strategicObjective:
          'Ensure long-term workforce readiness by continuously aligning people growth with evolving business and role requirements.\nAvanta sustains transformation by focusing on capability continuity. It ensures that as work and skill demand evolve, the workforce evolves alongside—without disruption or reactive reskilling.',
        keyFocusAreas: [
          'Future role and capability readiness',
          'Continuous reskilling aligned to emerging demand',
          'Internal mobility and career progression',
          'Workforce engagement and retention',
        ],
        whatHappens: [
          'Skill gaps are anticipated before they become business risks',
          'Employees are guided toward future-critical roles',
          'Internal talent pipelines are strengthened',
          'Learning and growth are directly linked to enterprise priorities',
        ],
        outputsLabel: 'Outputs of Phase 3',
        outputs: [
          'Strong internal mobility and succession pipelines',
          'Reduced long-term talent risk',
          'Higher engagement through meaningful career pathways',
        ],
        outcome:
          'The organization becomes future-ready by design, with a workforce that continuously adapts as strategy, technology, and markets evolve.',
      },
    },
  ]

  const active = phases[activePhase]

  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d">

        {/* Timeline and Detail Container */}
        <div className="flex flex-col lg:flex-row items-stretch gap-7 lg:gap-0">

          {/* ── LEFT Side — Timeline ── */}
          <div className="w-full lg:w-[40%] relative lg:pr-[40px] xl:pr-[50px] z-20">

            {/* Steps */}
            <div className="space-y-6 md:space-y-10">
              {phases.map((phase, index) => {
                const isActive = index === activePhase
                return (
                  <div
                    key={index}
                    className="works-step flex items-start gap-4 md:gap-6 relative group"
                    onMouseEnter={() => setActivePhase(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Line segment connecting to next step (hidden for last step) */}
                    {index !== phases.length - 1 && (
                      <div
                        className="absolute left-[31px] md:left-[39px] lg:left-[47px] top-[32px] md:top-[40px] lg:top-[48px] -bottom-[56px] md:-bottom-[80px] lg:-bottom-[88px] w-[2px] bg-[#D8D8DF] hidden md:block z-0"
                      />
                    )}

                    {/* Circle Indicator */}
                    <div className="relative flex-shrink-0 z-10 bg-white rounded-full">
                      {/* Default state */}
                      <img
                        src={`${import.meta.env.BASE_URL || '/'}img/Group 41598.svg`}
                        alt={`Step ${phase.number}`}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-opacity duration-300"
                        style={{ opacity: isActive ? 0 : 1 }}
                      />
                      {/* Active state */}
                      <img
                        src={`${import.meta.env.BASE_URL || '/'}img/Group 41597.svg`}
                        alt={`Step ${phase.number} Active`}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-0 left-0 transition-opacity duration-300"
                        style={{ opacity: isActive ? 1 : 0 }}
                      />
                    </div>

                    {/* Card container */}
                    <div className="flex-1 relative">
                      <div
                        className={`w-full rounded-lg transition-all duration-300 flex flex-col relative z-20 ${isActive ? 'bg-[#F8F6F9] justify-start shadow-sm' : 'bg-[#F2E9F5] justify-center'
                          }`}
                        style={{
                          maxWidth: '600px',
                          minHeight: '80px',
                          borderRadius: '8px',
                          padding: '14px 20px',
                        }}
                      >
                        {/* Title - Always Visible */}
                        <h3
                          className={`transition-all duration-300 ${isActive ? 'text-left underline underline-offset-4 decoration-[1.5px]' : 'text-center'}`}
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '600',
                            fontSize: 'clamp(16px, 1.4vw, 19px)',
                            lineHeight: '28px',
                            color: '#212529',
                          }}
                        >
                          {phase.title}
                        </h3>

                        {/* Subtitle — visible on active */}
                        <p
                          className="mt-2 transition-all duration-300"
                          style={{
                            fontFamily: 'Lato, sans-serif',
                            fontWeight: '500',
                            fontSize: '20px',
                            lineHeight: '28px',
                            color: '#79529A',
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? '60px' : 0,
                            overflow: 'hidden',
                          }}
                        >
                          {phase.subtitle}
                        </p>
                      </div>

                      {/* Connecting Arrow for Active Card (Mathematically aligned using clip-path) */}
                      {isActive && (
                        <div
                          className="absolute top-1/2 hidden lg:block z-10 transition-all duration-300 w-[40px] xl:w-[50px] h-[52px] xl:h-[64px] -right-[40px] xl:-right-[50px]"
                          style={{
                            background: '#F8F6F9',
                            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                            transform: 'translateY(-50%)'
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT Side — Detail Panel ── */}
          <div
            className="w-full lg:flex-1 rounded-xl p-7 md:p-9 z-10 relative"
            style={{
              background: '#F8F6F9',
              minHeight: '420px',
            }}
          >
            {/* Phase label */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '20px',
                fontWeight: 700,
                color: '#79529A',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              {active.label}
            </p>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(24px, 2.8vw, 36px)',
                fontWeight: 700,
                color: '#0F1114',
                lineHeight: '1.2',
                marginBottom: '24px',
              }}
            >
              {active.subtitle}
            </h3>

            {/* Strategic Objective */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0F1114', marginBottom: '6px' }}>
              Strategic Objective
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#515158', lineHeight: '1.7', marginBottom: '20px', whiteSpace: 'pre-line' }}>
              {active.detail.strategicObjective}
            </p>

            {/* Key Focus Areas */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0F1114', marginBottom: '10px' }}>
              Key Focus Areas
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              {active.detail.keyFocusAreas.map((item, i) => (
                <li key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#515158', lineHeight: '1.6', marginBottom: '4px' }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* What Happens in This Phase */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0F1114', marginBottom: '10px' }}>
              What Happens in This Phase
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              {active.detail.whatHappens.map((item, i) => (
                <li key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#515158', lineHeight: '1.6', marginBottom: '4px' }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Outputs */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0F1114', marginBottom: '10px' }}>
              {active.detail.outputsLabel}
            </p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              {active.detail.outputs.map((item, i) => (
                <li key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#515158', lineHeight: '1.6', marginBottom: '4px' }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Outcome */}
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#0F1114', marginBottom: '6px' }}>
              Outcome
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#515158', lineHeight: '1.7' }}>
              {active.detail.outcome}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Integration Section ── */
function IntegrationSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8" style={{ border: 'none' }}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d delay-100">

        {/* Main FBF9FB Container */}
        <div
          className="w-full rounded-3xl py-6 md:py-8 lg:py-10 px-6 md:px-10 flex items-center justify-center"
          style={{ background: '#FBF9FB' }}
        >
          {/* Central Image (Contains all text & headings) */}
          <div className="w-full max-w-[1100px] mx-auto relative flex justify-center">
            <img
              src={image416}
              alt="How the 3 Phases Work Together Diagram"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Why Talent Transformation ── */
function WhyTalentTransformationSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8" style={{ border: 'none' }}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d delay-100">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 items-start">

          {/* Left Column - Heading */}
          <div className="w-full lg:w-[40%]">
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: '1.2',
                color: '#0F1114'
              }}
            >
              Why Talent<br className="hidden md:block" /> Transformation
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(18px, 2vw, 22px)',
                lineHeight: '1.6',
                color: '#515158'
              }}
            >
              Traditional workforce models are no longer sufficient. <br className="hidden lg:block" />
              Jobs are static. Skills are hidden. AI investments lack clarity.
            </p>

            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  lineHeight: '1.6',
                  color: '#333333'
                }}
              >
                Talent Transformation solves this by:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#515158' }}>
                {[
                  "Shifting from job-based to skills-based workforce models",
                  "Turning AI adoption into a measurable business strategy",
                  "Redesigning work instead of reducing headcount",
                  "Enabling continuous reskilling and internal mobility",
                  "Aligning people growth with enterprise priorities"
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize: 'clamp(18px, 2vw, 22px)',
                      lineHeight: '1.6',
                      color: '#515158'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Designed For Section ── */
function DesignedForSection() {
  const cards = [
    {
      title: "HR, People Strategy & Workforce Transformation Teams",
      icon: govIcon
    },
    {
      title: "L&D and Capability Development Leaders",
      icon: changeIcon
    },
    {
      title: "CXOs and Enterprise Leaders",
      icon: officeIcon
    },
    {
      title: "Large Enterprises and PSUs",
      icon: offeringIcon
    },
    {
      title: "Organizations undergoing AI-led transformation",
      icon: offeringIcon1 // Using the second version of the icon as there are two in the directory
    }
  ]

  return (
    <section className="w-full bg-white py-4 md:py-6 lg:py-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d delay-200">

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {/* Card 1 - Title Card */}
          <div
            className="w-full aspect-[4/3] md:aspect-auto md:min-h-[250px] lg:min-h-[280px] rounded-lg flex items-center justify-center p-8 transition-transform hover:-translate-y-1 duration-300"
            style={{ backgroundColor: '#865CA4' }} // adjusted purple for accuracy
          >
            <h2
              className="text-white text-center"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px, 3vw, 40px)'
              }}
            >
              Designed For
            </h2>
          </div>

          {/* Other Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="group w-full aspect-[4/3] md:aspect-auto md:min-h-[250px] lg:min-h-[280px] rounded-lg p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#865CA4]/10 cursor-pointer border border-transparent hover:border-[#865CA4]/20"
              style={{ backgroundColor: '#F8F6F9' }}
            >
              <h3
                className="transition-colors duration-300 group-hover:text-[#865CA4]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(18px, 1.5vw, 22px)',
                  color: '#0F1114',
                  lineHeight: '1.4'
                }}
              >
                {card.title}
              </h3>
              <div className="mt-8 flex justify-start">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}



/* ── Final CTA Section (from Hire Twin) ── */
function FinalCtaSection() {
  const getAssetPath = (path) => `${import.meta.env.BASE_URL || '/'}${path.replace(/^\//, '')}`

  return (
    <>
      <style>{`
        .persona-final-cta {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .persona-cta-heading {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(24px, 2.8vw, 52px);
          line-height: 1.2;
          color: #0F1114;
          margin-bottom: 16px;
        }
        .persona-cta-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 16px;
        }
        .persona-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 600;
          padding: 16px 36px;
          border-radius: 8px;
          min-width: 220px;
          transition: all 0.3s ease;
        }

        @media (max-width: 767px) {
          .persona-final-cta {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .persona-cta-heading {
            font-size: clamp(24px, 2.8vw, 52px) !important;
            line-height: 1.2 !important;
            margin-bottom: 24px !important;
          }
          .persona-cta-buttons {
            flex-direction: column !important; 
            gap: 12px !important;
            width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .persona-cta-btn {
            width: 100% !important; 
            max-width: 280px !important;
            min-width: 0 !important;
            padding: 12px 24px !important; 
            border-radius: 8px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
      <section
        className="persona-final-cta"
        style={{
          backgroundImage: `url(${getAssetPath('Group%2041612.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#F59E0B',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="scroll-3d persona-cta-heading">
            Start building a workforce that<br className="hidden md:block" />evolves as fast as your business.
          </h2>
          <div className="persona-cta-buttons scroll-3d delay-200 mt-4">
            <Link
              to="/contact-us"
              className="persona-cta-btn text-white transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#0F1114' }}
            >
              Book a Demo
            </Link>
            <Link
              to="/contact-us"
              className="persona-cta-btn transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: 'transparent', color: '#0F1114', border: '1.5px solid #0F1114' }}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

