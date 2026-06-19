import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Note: Ensure the image is in this path or adjust accordingly. 
import heroImg from '../assets/talent-intelligence/image.png'
import image416 from '../assets/talent-intelligence/Image 416.png'
import introFrameworkImg from '../assets/talent-intelligence/built on.png'
import chatGptImg from '../assets/talent-intelligence/ChatGPT Image Jun 15, 2026, 12_53_32 AM.png'
import whyTalentImg from '../assets/talent-intelligence/Why Talent Transformation.png'
import phase1Img from '../assets/talent-intelligence/phase1.png'
import phase2Img from '../assets/talent-intelligence/phase2.png'
import phase3Img from '../assets/talent-intelligence/phase3.png'
import gain1Img from '../assets/talent-intelligence/Clear visibility.png'
import gain2Img from '../assets/talent-intelligence/Faster.png'
import gain3Img from '../assets/talent-intelligence/A future-ready.png'
import gain4Img from '../assets/talent-intelligence/Higher engagement.png'
import gain5Img from '../assets/talent-intelligence/Data-backed.png'
// Designed For Icons
import govIcon from '../assets/talent-intelligence/goverment_17213502.svg'
import changeIcon from '../assets/talent-intelligence/change_17930856.svg'
import officeIcon from '../assets/talent-intelligence/office-building_11342251.svg'
import offeringIcon from '../assets/talent-intelligence/initial-public-offering_15749347.svg'
import offeringIcon1 from '../assets/talent-intelligence/initial-public-offering_15749347-1.svg'
import maskGroupImg from '../assets/Xperience Platform – 1/Mask Group 138.png'

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

        /* ── HERO gradient background ── */
        .ti-hero-gradient {
          background: linear-gradient(120deg, #4A2C6E 0%, #6B3FA0 30%, #A0527A 65%, #C0625A 100%);
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
        .ti-hero-img { transition-delay: 350ms; transform: translateX(60px) scale(0.96); }
        .ti-hero-img.active-3d { transform: translateX(0) scale(1) !important; }

        /* ── Hero CTA Buttons ── */
        .ti-btn-primary {
          background: #FFFFFF;
          color: #4A2C6E;
          border: 2px solid #FFFFFF;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(20px, 1.2vw, 24px);
          padding: 11px 26px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          white-space: nowrap;
        }
        .ti-btn-primary:hover {
          background: rgba(255,255,255,0.12);
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.18);
        }
        .ti-btn-secondary {
          background: transparent;
          color: #FFFFFF;
          border: 2px solid rgba(255,255,255,0.8);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: clamp(20px, 1.2vw, 24px);
          padding: 11px 26px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          white-space: nowrap;
        }
        .ti-btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.18);
        }

        /* ── Hero image card ── */
        .ti-hero-img-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.28), 0 6px 20px rgba(0,0,0,0.18);
        }

        /* ── Mobile: image below text ── */
        @media (max-width: 1023px) {
          .ti-hero-img {
            width: 100% !important;
            max-width: 100% !important;
            display: flex;
            justify-content: center;
            padding: 0 0 40px;
          }
          .ti-hero-img img {
            max-width: 560px !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* ════════════════════════ HERO SECTION ════════════════════════ */}
      <section ref={heroSectionRef} className="ti-section ti-hero-gradient relative w-full overflow-hidden">

        {/* ── Breadcrumb ── */}
        <nav className="ti-breadcrumb relative z-20 pt-3 pb-2 md:pt-4 md:pb-3 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1360px] mx-auto w-full text-left">
          <div
            className="flex items-center justify-start gap-1.5 sm:gap-2 text-[20px] md:text-[20px] font-medium w-full"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Lato', sans-serif" }}
          >
            <Link to="/" className="hover:opacity-80 transition-opacity" style={{ color: 'rgba(255,255,255,0.65)' }}>Home</Link>
            <span>&gt;</span>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Talent Transformation</span>
          </div>
        </nav>

        {/* ── Main content container ── */}
        <div className="relative max-w-[1360px] mx-auto z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-4 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-28 xl:py-32">

          {/* ════ LEFT column: Text ════ */}
          <div className="relative z-20 w-full lg:w-[50%] xl:w-[48%]">

            {/* H1 — DM Sans 700 — Bold white heading, exactly 3 lines */}
            <h1
              className="ti-heading mb-6 md:mb-8"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(28px, 3.2vw, 56px)',
                fontWeight: 800,
                lineHeight: '1.15',
                letterSpacing: '-0.5px',
                color: '#FFFFFF',
              }}
            >
              <span style={{ display: 'block' }}>Redesign Work.</span>
              <span style={{ display: 'block' }}>Activate Talent.</span>
              <span style={{ display: 'block' }}>Future-Proof the Workforce.</span>
            </h1>

            {/* Description — white, semi-transparent */}
            <p
              className="ti-para1"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(20px, 1.2vw, 24px)',
                fontWeight: 400,
                lineHeight: '1.7',
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '500px',
              }}
            >
              Talent Transformation is an AI-powered enterprise framework that
              enables organizations to redesign work, activate skills, and sustain
              workforce readiness in an era of rapid AI-led change.
            </p>
          </div>

          {/* ════ RIGHT column: Hero image ════ */}
          <div
            className="ti-hero-img w-full lg:w-[50%] xl:w-[52%] flex justify-center lg:justify-end items-center"
          >
            <div className="ti-hero-img-card w-full" style={{ maxWidth: '640px' }}>
              <img
                src={heroImg}
                alt="Talent Transformation Dashboard"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          NEW SECTION — Intro Framework
      ════════════════════════════════════════════════════════════════ */}
      <IntroFrameworkSection />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — Talent Transformation Roadmap
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 text-center">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center">

          <div className="w-full scroll-3d">
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                fontSize: 'clamp(32px, 3.5vw, 56px)', lineHeight: '1.2',
                letterSpacing: '-0.5px', color: '#0F1114',
                marginBottom: '16px'
              }}
            >
              A Structured, AI-Led Journey from Work Redesign to Workforce Readiness
            </h2>
          </div>

          <div className="w-full scroll-3d delay-100 flex flex-col gap-6">
            
            
            <div className="flex flex-col gap-5 mx-auto max-w-[1100px]">
              <p
                style={{
                  fontFamily: "'Lato', sans-serif", fontSize: 'clamp(20px, 1.25vw, 24px)',
                  fontWeight: 400, lineHeight: '1.8', color: '#3A3A42',
                  margin: '0'
                }}
              >
                The Talent Transformation Roadmap defines how enterprises
                systematically evolve from fragmented workforce models to a
                continuously adaptive, skills-driven organization.
                Rather than isolated initiatives, the roadmap follows a
                progressive, closed-loop journey that aligns work, skills, and
                capability at every stage.
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif", fontSize: 'clamp(20px, 1.25vw, 24px)',
                  fontWeight: 400, lineHeight: '1.8', color: '#3A3A42',
                  margin: '0'
                }}
              >
                This roadmap unfolds across three integrated phases, each building on the previous and reinforcing long-term transformation.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — Phase Roadmap
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
          SECTION 7 — What You Gain
      ════════════════════════════════════════════════════════════════ */}
      <WhatYouGainSection />


      {/* ════════════════════════════════════════════════════════════════
          SECTION 8 — Final CTA
      ════════════════════════════════════════════════════════════════ */}
      <FinalCtaSection />
    </>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Phase Roadmap — Left Sticky Buttons | Middle Scroll | Right Sticky Image
   ══════════════════════════════════════════════════════════════════ */

/* Phase data — defined OUTSIDE component so it's stable across renders */
const PHASE_DATA = [
  {
    tab: 'Infera', label: 'INFERA', fullLabel: 'Phase 1', img: phase1Img,
    tagline: 'Understand, Redesign, and Optimize Work',
    objective: 'Establish a clear, data-driven understanding of how work is performed today and how it should evolve in an AI-enabled enterprise.',
    objectiveDetail: 'Infera is the diagnostic and intelligence foundation of the roadmap. It replaces assumption-based workforce planning with task-level, AI-driven insight, enabling leaders to redesign work with confidence and precision.',
    focusAreas: ['Mapping how work is structured across roles, functions, and processes', 'Identifying effort, cost, risk, and value embedded in current work models', 'Determining where AI can automate, augment, or support work meaningfully', 'Understanding future work patterns driven by technology and business change'],
    whatHappens: ['Work and task intelligence is analyzed across the organization', 'High-impact opportunities for efficiency and value creation are identified', 'Roles are deconstructed into skills and activities rather than job titles', 'AI investments are aligned to business priorities and measurable outcomes'],
    outputs: ['Clear visibility into current and future work structures', 'Prioritized AI and workforce optimization opportunities', 'Data-backed guidance for work redesign and role evolution'],
    outcome: 'Leaders gain clarity on what work should change, why it should change, and where AI creates real value\u2014forming the foundation for all subsequent phases.',
  },
  {
    tab: 'Nexis', label: 'NEXIS', fullLabel: 'Phase 2', img: phase2Img,
    tagline: 'Activate Skills and Orchestrate Work Dynamically',
    objective: 'Ensure that redesigned work flows to the most relevant skills at the right time, maximizing talent utilization and execution speed.',
    objectiveDetail: 'Nexis operationalizes the intelligence generated in Phase 1. It shifts the organization from static, role-based execution to a skills-first, fluid operating model, enabling faster delivery without structural friction.',
    focusAreas: ['Skills-based matching of work, projects, and initiatives', 'Dynamic deployment of internal talent across functions', 'Breaking down silos that restrict collaboration and agility', 'Reducing reliance on external hiring by unlocking internal capability'],
    whatHappens: ['Work is routed based on skills rather than job titles', 'Internal talent becomes visible, accessible, and deployable', 'Cross-functional collaboration becomes easier and faster', 'Bottlenecks caused by rigid structures are reduced'],
    outputs: ['Improved utilization of existing workforce capability', 'Faster execution of critical initiatives', 'Reduced talent waste and hiring dependency'],
    outcome: 'The enterprise moves from knowing where skills exist to actively deploying them, turning insight into execution and productivity gains.',
  },
  {
    tab: 'Avanta', label: 'AVANTA', fullLabel: 'Phase 3', img: phase3Img,
    tagline: 'Prepare, Grow, and Sustain Future Capability',
    objective: 'Ensure long-term workforce readiness by continuously aligning people growth with evolving business and role requirements.',
    objectiveDetail: 'Avanta sustains transformation by focusing on capability continuity. It ensures that as work and skill demand evolve, the workforce evolves alongside\u2014without disruption or reactive reskilling.',
    focusAreas: ['Future role and capability readiness', 'Continuous reskilling aligned to emerging demand', 'Internal mobility and career progression', 'Workforce engagement and retention'],
    whatHappens: ['Skill gaps are anticipated before they become business risks', 'Employees are guided toward future-critical roles', 'Internal talent pipelines are strengthened', 'Learning and growth are directly linked to enterprise priorities'],
    outputs: ['Strong internal mobility and succession pipelines', 'Reduced long-term talent risk', 'Higher engagement through meaningful career pathways'],
    outcome: 'The organization becomes future-ready by design, with a workforce that continuously adapts as strategy, technology, and markets evolve.',
  },
]

/* Sub-label style — stable reference */
const PH_SUB_LABEL = {
  fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
  fontSize: 'clamp(20px, 1.2vw, 24px)', color: '#79529A',
  marginBottom: '10px', marginTop: '4px',
}

function PhaseRoadmapSection() {
  const [activePhase, setActivePhase] = React.useState(0)
  const prevPhaseRef = React.useRef(0)

  // Separate refs for desktop and mobile because React overwrites refs if used on multiple elements
  const desktopRefs = React.useRef([])
  const mobileRefs = React.useRef([])

  /* Scroll-spy: detect which phase is in view */
  React.useEffect(() => {
    const detect = () => {
      const trigger = window.innerHeight * 0.35
      let cur = 0
      // lg breakpoint is usually 1024px in Tailwind
      const isMobile = window.innerWidth < 1024
      const activeRefs = isMobile ? mobileRefs.current : desktopRefs.current

      for (let i = 0; i < 3; i++) {
        const el = activeRefs[i]
        if (el) {
          const rect = el.getBoundingClientRect()
          // Check height to ensure we don't trigger on display:none elements
          if (rect.height > 0 && rect.top <= trigger) {
            cur = i
          }
        }
      }
      
      setActivePhase(prev => {
        if (prev !== cur) prevPhaseRef.current = prev
        return cur
      })
    }
    window.addEventListener('scroll', detect, { passive: true })
    window.addEventListener('resize', detect, { passive: true })
    detect()
    return () => {
      window.removeEventListener('scroll', detect)
      window.removeEventListener('resize', detect)
    }
  }, [])

  const scrollTo = (i) => {
    const isMobile = window.innerWidth < 1024
    const activeRefs = isMobile ? mobileRefs.current : desktopRefs.current
    activeRefs[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const imgClass = (i) =>
    i === activePhase ? 'phase-img-item img-active' :
    i === prevPhaseRef.current ? 'phase-img-item img-leaving' :
    'phase-img-item img-hidden'

  /* Render a bullet list inline (plain function, NOT a component) */
  const bullets = (items) => (
    <div style={{ marginBottom: '24px' }}>
      {items.map((t, j) => (
        <div key={j} style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#79529A', flexShrink: 0, marginTop: 4 }} />
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(20px, 1.2vw, 24px)', color: '#515158', lineHeight: 1.65 }}>{t}</span>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <style>{`
        .ph-pill-btn {
          width: 56px; padding: 22px 0; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          border: 2px solid transparent; position: relative; overflow: hidden;
        }
        .ph-pill-btn::before {
          content: ''; position: absolute; inset: 0; border-radius: 14px;
          background: radial-gradient(circle, rgba(121,82,154,0.3) 0%, transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .ph-pill-btn.active {
          background: linear-gradient(135deg, #79529A 0%, #9B6FC0 100%);
          box-shadow: 0 6px 28px rgba(121,82,154,0.5), 0 0 0 3px rgba(121,82,154,0.15);
          border-color: transparent;
          animation: phBtnPop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .ph-pill-btn.active::before { opacity: 1; animation: phGlow 2s ease-in-out infinite; }
        .ph-pill-btn:not(.active) { background: #F0EAF5; border-color: #E4D9F0; }
        .ph-pill-btn:not(.active):hover {
          background: #E4D9F0; transform: scale(1.08);
          border-color: #C9A8E8; box-shadow: 0 4px 16px rgba(121,82,154,0.2);
        }
        .ph-pill-btn span {
          writing-mode: vertical-rl; transform: rotate(180deg);
          font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 13px;
          letter-spacing: 1.5px; white-space: nowrap;
          transition: color 0.4s ease, text-shadow 0.4s ease;
          position: relative; z-index: 2;
        }
        .ph-pill-btn.active span { color: #fff; text-shadow: 0 1px 8px rgba(255,255,255,0.3); }
        .ph-pill-btn:not(.active) span { color: #79529A; }
        @keyframes phBtnPop { 0%{transform:scale(.92)} 40%{transform:scale(1.12)} 70%{transform:scale(.97)} 100%{transform:scale(1)} }
        @keyframes phGlow { 0%,100%{opacity:.4;transform:scale(.8)} 50%{opacity:.8;transform:scale(1.1)} }

        .phase-img-wrap {
          position: relative; width: 100%; max-width: 560px; aspect-ratio: 4/3;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(121,82,154,0.16), 0 6px 20px rgba(0,0,0,0.06);
        }
        .phase-img-item {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
          backface-visibility: hidden; will-change: opacity, transform, filter;
        }
        .phase-img-item.img-active {
          opacity: 1; transform: scale(1) translateX(0); filter: blur(0); z-index: 10;
          animation: phImgIn 0.7s cubic-bezier(0.25,1,0.3,1) forwards;
        }
        .phase-img-item.img-leaving {
          opacity: 0; transform: scale(.94) translateX(-30px); filter: blur(6px); z-index: 5;
          transition: opacity .5s ease-out, transform .5s ease-out, filter .5s ease-out;
        }
        .phase-img-item.img-hidden {
          opacity: 0; transform: scale(1.08) translateX(40px); filter: blur(10px); z-index: 1;
        }
        @keyframes phImgIn {
          0% { opacity:0; transform:scale(1.06) translateX(50px); filter:blur(12px); }
          50% { opacity:.8; filter:blur(3px); }
          100% { opacity:1; transform:scale(1) translateX(0); filter:blur(0); }
        }
        .ph-btn-line { width: 2px; height: 12px; border-radius: 2px; background: linear-gradient(180deg, #C9A8E8, #E4D9F0); }
      `}</style>

      <section className="w-full bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Desktop 3-col ── */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: '80px 1fr 42%', gap: '40px' }}>

            {/* LEFT: Sticky buttons */}
            <div style={{ position:'sticky', top:0, height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:50 }}>
              {PHASE_DATA.map((p, i) => (
                <React.Fragment key={p.tab}>
                  <div className={`ph-pill-btn ${i === activePhase ? 'active' : ''}`} onClick={() => scrollTo(i)}>
                    <span>{p.tab}</span>
                  </div>
                  {i < 2 && <div className="ph-btn-line" />}
                </React.Fragment>
              ))}
            </div>

            {/* MIDDLE: Scrolling content — ALL INLINE, no sub-components */}
            <div>
              {PHASE_DATA.map((ph, idx) => (
                <div key={idx} ref={el => desktopRefs.current[idx] = el} style={{ paddingTop: idx === 0 ? '24px' : '80px', paddingBottom: '80px' }}>
                  {idx > 0 && <div style={{ width:60, height:3, borderRadius:3, background:'linear-gradient(90deg,#79529A,#C9A8E8)', marginBottom:40 }} />}
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:20, color:'#79529A', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>{ph.label}</p>
                  <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:800, fontSize:'clamp(24px,2.4vw,40px)', color:'#0F1114', lineHeight:1.12, marginBottom:22 }}>{ph.tagline}</h3>
                  <p style={PH_SUB_LABEL}>Strategic Objective</p>
                  <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#3A3A42', lineHeight:1.7, marginBottom:10 }}>{ph.objective}</p>
                  <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#515158', lineHeight:1.7, marginBottom:30 }}>{ph.objectiveDetail}</p>
                  <p style={PH_SUB_LABEL}>Key Focus Areas</p>
                  {bullets(ph.focusAreas)}
                  <p style={PH_SUB_LABEL}>What Happens in This Phase</p>
                  {bullets(ph.whatHappens)}
                  <p style={PH_SUB_LABEL}>Outputs of {ph.fullLabel}</p>
                  {bullets(ph.outputs)}
                  <p style={PH_SUB_LABEL}>Outcome</p>
                  <div style={{ background:'#F8F3FD', borderRadius:12, padding:'16px 20px', borderLeft:'4px solid #79529A' }}>
                    <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#3D1F5C', lineHeight:1.7, margin:0, fontStyle:'italic' }}>{ph.outcome}</p>
                  </div>
                  <div className="block lg:hidden mt-12 mb-8">
                    <div style={{ width:'100%', borderRadius:20, overflow:'hidden', boxShadow:'0 16px 56px rgba(121,82,154,0.14), 0 4px 16px rgba(0,0,0,0.05)' }}>
                      <img src={ph.img} alt={ph.tab} style={{ width:'100%', height:'auto', display:'block' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Sticky image */}
            <div style={{ position:'sticky', top:0, height:'100vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div className="phase-img-wrap">
                {PHASE_DATA.map((p, i) => (
                  <img key={p.tab} src={p.img} alt={p.tab} className={imgClass(i)} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile stacked ── */}
          <div className="block lg:hidden">
            {PHASE_DATA.map((ph, idx) => (
              <div key={idx} ref={el => mobileRefs.current[idx] = el} style={{ paddingTop: idx === 0 ? '24px' : '80px', paddingBottom: '80px' }}>
                {idx > 0 && <div style={{ width:60, height:3, borderRadius:3, background:'linear-gradient(90deg,#79529A,#C9A8E8)', marginBottom:40 }} />}
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:700, fontSize:20, color:'#79529A', letterSpacing:2, textTransform:'uppercase', marginBottom:10 }}>{ph.label}</p>
                <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:800, fontSize:'clamp(24px,2.4vw,40px)', color:'#0F1114', lineHeight:1.12, marginBottom:22 }}>{ph.tagline}</h3>
                <p style={PH_SUB_LABEL}>Strategic Objective</p>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#3A3A42', lineHeight:1.7, marginBottom:10 }}>{ph.objective}</p>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#515158', lineHeight:1.7, marginBottom:30 }}>{ph.objectiveDetail}</p>
                <p style={PH_SUB_LABEL}>Key Focus Areas</p>
                {bullets(ph.focusAreas)}
                <p style={PH_SUB_LABEL}>What Happens in This Phase</p>
                {bullets(ph.whatHappens)}
                <p style={PH_SUB_LABEL}>Outputs of {ph.fullLabel}</p>
                {bullets(ph.outputs)}
                <p style={PH_SUB_LABEL}>Outcome</p>
                <div style={{ background:'#F8F3FD', borderRadius:12, padding:'16px 20px', borderLeft:'4px solid #79529A' }}>
                  <p style={{ fontFamily:"'Lato',sans-serif", fontSize:'clamp(20px,1.2vw,24px)', color:'#3D1F5C', lineHeight:1.7, margin:0, fontStyle:'italic' }}>{ph.outcome}</p>
                </div>
                <div className="mt-12 mb-8">
                  <div style={{ width:'100%', borderRadius:20, overflow:'hidden', boxShadow:'0 16px 56px rgba(121,82,154,0.14), 0 4px 16px rgba(0,0,0,0.05)' }}>
                    <img src={ph.img} alt={ph.tab} style={{ width:'100%', height:'auto', display:'block' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

function IntegrationSection() {
  return (
    <section className="w-full bg-[#FBF9FB] pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20" style={{ border: 'none' }}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d delay-100">

        {/* Main Gray Container */}
        <div
          className="w-full rounded-3xl py-6 md:py-8 lg:py-10 px-6 md:px-10 flex items-center justify-center"
        >
          {/* Central Image (Contains all text & headings) */}
          <div className="w-full max-w-[1280px] mx-auto relative flex justify-center">
            <img
              src={image416}
              alt="How the 3 Phases Work Together Diagram"
              className="w-full h-auto object-contain scale-[1.15] transform origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Why Talent Transformation ── */
function WhyTalentTransformationSection() {
  const points = [
    "Shifting from job-based to skills-based workforce models",
    "Turning AI adoption into a measurable business strategy",
    "Redesigning work instead of reducing headcount",
    "Enabling continuous reskilling and internal mobility",
    "Aligning people growth with enterprise priorities"
  ];

  return (
    <section className="w-full bg-[#F4F9FF] pt-10 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${maskGroupImg})` }}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 scroll-3d delay-100">
        {/* Centered Heading */}
        <div className="w-full text-center mb-12 lg:mb-16">
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.2',
              color: '#0F1114'
            }}
          >
            Why Talent Transformation
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">

          {/* Left Column - Image Only */}
          <div className="w-full lg:w-[40%] flex justify-center items-center">
            <img
              src={whyTalentImg}
              alt="Talent Transformation Context"
              className="w-full max-w-[420px] h-auto max-h-[520px] object-contain"
            />
          </div>

          {/* Right Column - Content & Cards */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between gap-6 lg:pt-2">
            <div>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(20px, 1.2vw, 24px)',
                  lineHeight: '1.6',
                  color: '#515158',
                  marginBottom: '16px'
                }}
              >
                Traditional workforce models are no longer sufficient. <br className="hidden xl:block" />
                Jobs are static. Skills are hidden. AI investments lack clarity.
              </p>

              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 1.2vw, 24px)',
                  lineHeight: '1.6',
                  color: '#333333',
                  marginBottom: '8px'
                }}
              >
                Talent Transformation solves this by:
              </p>
            </div>

            <div className="flex flex-col justify-between flex-1 gap-3">
              {points.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '18px 24px',
                    background: '#FFFFFF',
                    border: '1px solid #E8E8E8',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(121,82,154,0.12)';
                    e.currentTarget.style.borderColor = '#79529A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = '#E8E8E8';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '8px', height: '8px',
                    background: '#79529A',
                    transform: 'rotate(45deg)',
                    flexShrink: 0
                  }} />
                  <span style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 1.1vw, 22px)',
                    color: '#3D1F5C'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
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
      icon: offeringIcon1
    }
  ]

  return (
    <section className="w-full bg-white pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 scroll-3d delay-200">

        <h2 className="text-center mb-8 md:mb-12" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#0F1114', letterSpacing: '-0.5px' }}>
          Designed For
        </h2>

        {/* 5-Column Seamless Row Container (overflow-hidden removed to allow hover pop-out) */}
        <div className="flex flex-col lg:flex-row w-full rounded-[24px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative flex-1 p-8 lg:p-10 flex flex-col items-start lg:items-center lg:text-center border-b lg:border-b-0 lg:border-r border-gray-200 last:border-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${index === 0 ? 'rounded-t-[24px] lg:rounded-tr-none lg:rounded-l-[24px]' : ''
                } ${index === cards.length - 1 ? 'rounded-b-[24px] lg:rounded-bl-none lg:rounded-r-[24px]' : ''
                }`}
              style={{ backgroundColor: '#F0EAF5' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#79529A';
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                e.currentTarget.style.zIndex = '10';
                e.currentTarget.style.boxShadow = '0 32px 64px rgba(121,82,154,0.35)';
                e.currentTarget.style.borderRadius = '24px';
                e.currentTarget.querySelector('h3').style.color = '#FFFFFF';
                e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F0EAF5';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.zIndex = '1';
                e.currentTarget.style.boxShadow = 'none';

                // Restore original border radius based on position
                if (index === 0) {
                  e.currentTarget.style.borderRadius = window.innerWidth >= 1024 ? '24px 0 0 24px' : '24px 24px 0 0';
                } else if (index === cards.length - 1) {
                  e.currentTarget.style.borderRadius = window.innerWidth >= 1024 ? '0 24px 24px 0' : '0 0 24px 24px';
                } else {
                  e.currentTarget.style.borderRadius = '0px';
                }

                e.currentTarget.querySelector('h3').style.color = '#0F1114';
                e.currentTarget.querySelector('img').style.filter = 'none';
              }}
            >
              <div className="mb-8 w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-full h-full object-contain transition-all duration-500"
                />
              </div>
              <h3
                className="transition-colors duration-500"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 1.2vw, 24px)',
                  color: '#0F1114',
                  lineHeight: '1.4'
                }}
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}



/* ── What You Gain Section ── */
function WhatYouGainSection() {
  const gains = [
    { title: "Clear visibility into AI and workforce impact", img: gain1Img },
    { title: "Faster, smarter execution of critical work", img: gain2Img },
    { title: "A future-ready, continuously skilled workforce", img: gain3Img },
    { title: "Higher engagement, retention, and agility", img: gain4Img },
    { title: "Data-backed confidence in talent decisions", img: gain5Img },
  ];

  return (
    <section className="w-full pt-10 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32" style={{ backgroundColor: '#0A0D36' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 scroll-3d delay-200">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Heading Block */}
          <div className="flex flex-col justify-start md:justify-center p-4 md:p-8">
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(40px, 4vw, 56px)',
                color: '#FFFFFF',
                lineHeight: '1.2',
                marginBottom: '16px'
              }}
            >
              What You Gain
            </h2>
          </div>

          {/* Cards */}
          {gains.map((gain, index) => (
            <div
              key={index}
              className="flex flex-col border border-white transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              {/* Image Box */}
              <div className="w-full h-[240px] md:h-[280px] overflow-hidden bg-[#1E225A]">
                <img
                  src={gain.img}
                  alt={gain.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* White Text Box */}
              <div className="bg-white p-6 md:p-8 flex-1 flex items-start">
                <div className="w-[3px] h-[28px] mr-4 flex-shrink-0 mt-1" style={{ backgroundColor: '#0A0D36' }} />
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 1.2vw, 24px)',
                    color: '#0A0D36',
                    lineHeight: '1.4'
                  }}
                >
                  {gain.title}
                </h3>
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
              style={{ backgroundColor: '#2563EB' }}
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


/* ── Intro Framework Section ── */
function IntroFrameworkSection() {
  return (
    <section className="w-full bg-[#FBF9FB] pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">

          {/* Left Text Column */}
          <div className="w-full lg:w-[50%] scroll-3d flex flex-col justify-center py-4 lg:py-8">
            <p style={{
              fontFamily: "'Lato', sans-serif", fontWeight: 400,
              fontSize: 'clamp(20px, 1.2vw, 24px)', lineHeight: 1.7,
              color: '#515158', marginBottom: '24px'
            }}>
              Built on three integrated capability phases—Infera, Nexis, and Avanta—the framework helps enterprises move beyond static job structures to adaptive, skills-driven operating models.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif", fontWeight: 400,
              fontSize: 'clamp(20px, 1.2vw, 24px)', lineHeight: 1.7,
              color: '#515158'
            }}>
              By combining work intelligence, skills orchestration, and continuous capability development, Talent Transformation delivers measurable productivity, agility, and workforce resilience—without operational complexity.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-[50%] relative scroll-3d delay-100 min-h-[300px] lg:min-h-0">
            <img 
              src={introFrameworkImg} 
              alt="Talent Transformation Phases" 
              className="lg:absolute lg:inset-0 w-full h-full object-cover rounded-[20px]"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
