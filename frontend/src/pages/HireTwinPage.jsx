import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

import heroBg  from '../assets/Hire Twin/abstract-technical-wave-graphic-white-background.png'
import heroImg from '../assets/Hire Twin/Mask Group 131.png'

// Key Capabilities icons
import icon1 from '../assets/Hire Twin/machine-learning_18565813.svg'
import icon2 from '../assets/Hire Twin/technology_15834785.svg'
import icon3 from '../assets/Hire Twin/management_8896151.svg'
import icon4 from '../assets/Hire Twin/assign_17172651.svg'
import icon5 from '../assets/Hire Twin/management_8896151-1.svg'
import whyImg from '../assets/Hire Twin/Group 41607.png'

// Tailored for B2B Leaders icons
import b2bIcon1 from '../assets/Hire Twin/company-stock_16847981.svg'
import b2bIcon2 from '../assets/Hire Twin/people_15512782.svg'
import b2bIcon3 from '../assets/Hire Twin/employee_9815540.svg'
import b2bIcon4 from '../assets/Hire Twin/profits_554146.svg'
import b2bIcon5 from '../assets/Hire Twin/office-building_11342251.svg'
import dashImg from '../assets/Gemini_Generated_Image_mq3oqmmq3oqmmq3o.png'

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let timer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0)
          let start = 0
          const end = parseFloat(value)
          if (isNaN(end)) return
          
          const duration = 2000 // 2 seconds animation
          const stepTime = 16
          const steps = duration / stepTime
          const increment = end / steps

          timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, stepTime)
        } else {
          // Reset when out of view so it animates again next time
          setCount(0)
          if (timer) clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (timer) clearInterval(timer)
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [value])

  const isFloat = value.toString().includes('.')
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count)

  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function HireTwinPage() {
  const heroSectionRef = useRef(null)

    /* ── Entrance & Scroll animations ── */
  useEffect(() => {
    // Original Hero animations
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;[
              '.ht-breadcrumb',
              '.ht-heading',
              '.ht-para1',
              '.ht-para2',
              '.ht-btn-wrap',
              '.ht-hero-img',
            ].forEach((sel) => {
              const el = entry.target.querySelector(sel)
              if (el) el.classList.add('ht-active')
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (heroSectionRef.current) heroObserver.observe(heroSectionRef.current)

    // Global 3D Scroll Animations
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
        /* ── Section: soft lavender→white gradient (exact from design ss) ── */
        .ht-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: transparent
            linear-gradient(110deg, #EAEAF7 0%, #EFEFFA 28%, #F5F5FC 55%, #FFFFFF 100%)
            0% 0% no-repeat padding-box;
        }

        /* ── Wave BG: handled via inline style div — no class needed ── */

        
        /* ── Modern 3D Scroll Animations ── */
        .scroll-3d {
          opacity: 0;
          transform: translateY(40px) scale(0.96) rotateX(-5deg);
          filter: blur(8px);
          transition: opacity 1s cubic-bezier(0.25, 1, 0.2, 1),
                      transform 1s cubic-bezier(0.25, 1, 0.2, 1),
                      filter 1s cubic-bezier(0.25, 1, 0.2, 1);
          will-change: transform, opacity, filter;
        }
        .scroll-3d.active-3d {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0);
          filter: blur(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }

        /* ── Entrance animations ── */
        .ht-breadcrumb {
          opacity: 0;
          transform: translateY(-14px);
          transition: opacity 1s cubic-bezier(.16,1,.3,1) 0.05s,
                      transform 1s cubic-bezier(.16,1,.3,1) 0.05s;
        }
        .ht-breadcrumb.ht-active { opacity: 1; transform: translateY(0); }

        .ht-heading {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1) 0.15s,
                      transform 1.2s cubic-bezier(.16,1,.3,1) 0.15s;
        }
        .ht-heading.ht-active { opacity: 1; transform: translateY(0); }

        .ht-para1 {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1) 0.30s,
                      transform 1.2s cubic-bezier(.16,1,.3,1) 0.30s;
        }
        .ht-para1.ht-active { opacity: 1; transform: translateY(0); }

        .ht-para2 {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1) 0.45s,
                      transform 1.2s cubic-bezier(.16,1,.3,1) 0.45s;
        }
        .ht-para2.ht-active { opacity: 1; transform: translateY(0); }

        .ht-btn-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1) 0.60s,
                      transform 1.2s cubic-bezier(.16,1,.3,1) 0.60s;
        }
        .ht-btn-wrap.ht-active { opacity: 1; transform: translateY(0); }

        /* Right image: slides in from right — NO continuous float/movement */
        .ht-hero-img {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1.5s cubic-bezier(.16,1,.3,1) 0.40s,
                      transform 1.5s cubic-bezier(.16,1,.3,1) 0.40s;
        }
        .ht-hero-img.ht-active {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── CTA Button ── */
        .ht-cta-btn {
          background: linear-gradient(90deg, #4B47F5 0%, #6C63FF 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .ht-cta-btn:hover {
          background: linear-gradient(90deg, #3a37e0 0%, #5850f0 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(75, 71, 245, 0.30);
        }
        .ht-cta-btn:active { transform: translateY(0); }

        /* ── Heading: always 2 lines — each phrase is a nowrap block ──
           Font: DM Sans 700, clamp(24px, 2.8vw, 52px) — EXACT same as Home page hero
           On desktop the font is large enough that each phrase stays on 1 line.
           On mobile we allow natural wrap (no forced nowrap below 768px). ── */
        .ht-h1-line {
          display: block;
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .ht-h1-line {
            white-space: normal !important;
          }
        }

        /* ── Responsive: tablet/mobile image below text ── */
        @media (max-width: 1023px) {
          .ht-hero-img {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            display: flex;
            justify-content: center;
            padding: 16px 16px 40px;
          }
          .ht-hero-img img {
            max-width: 600px !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* ════════════════════════════ HERO SECTION ════════════════════════════ */}
      <section
        ref={heroSectionRef}
        className="ht-section relative w-full overflow-hidden"
      >
        {/* ── Wave background image — inline style so Vite resolves URL correctly ── */}
        <div
          aria-hidden="true"
          style={{
            position:            'absolute',
            top:                 0,
            left:                0,
            width:               '100%',
            height:              '100%',
            backgroundImage:     `url(${heroBg})`,
            backgroundSize:      'cover',
            backgroundPosition:  'top left',
            backgroundRepeat:    'no-repeat',
            mixBlendMode:        'soft-light',
            opacity:             0.59,
            pointerEvents:       'none',
            zIndex:              0,
          }}
        />

        {/* ── Breadcrumb — same max-w-[1360px] & padding as site-wide ── */}
        <nav className="ht-breadcrumb relative z-10 pt-3 pb-2 md:pt-4 md:pb-3 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1360px] mx-auto">
          <div
            className="flex items-center gap-1.5 sm:gap-2 text-[20px] font-medium"
            style={{ color: '#71717A', fontFamily: "'Lato', sans-serif" }}
          >
            <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: '#71717A' }}>
              Home
            </Link>
            <span>&gt;</span>
            <span>Products</span>
            <span>&gt;</span>
            <span style={{ color: '#18181B', fontWeight: 500 }}>Hirenest</span>
          </div>
        </nav>

        {/* ── Main content container — same max-w / padding as AIHackNexPage ── */}
        <div className="relative max-w-[1360px] mx-auto z-10">

          {/* ════ LEFT column: Text ════ */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-4 md:py-6 lg:py-8 xl:py-10">

            {/* H1 — font matches Home page exactly:
                DM Sans 700, clamp(24px, 2.8vw, 52px), lineHeight 1.16, color #0F1114 */}
            <h1
              className="ht-heading mb-5 md:mb-6"
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      'clamp(24px, 2.8vw, 52px)',
                fontWeight:    700,
                lineHeight:    '1.16',
                letterSpacing: '-0.5px',
                color:         '#0F1114',
              }}
            >
              <span className="ht-h1-line">Hire Smarter. Hire Faster.</span>
              <span className="ht-h1-line">Hire with Confidence.</span>
            </h1>

            {/* Para 1 — Lato, clamp(20px, 1.2vw, 24px), exact same as home subheading */}
            <p
              className="ht-para1 mb-4 md:mb-5"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize:   'clamp(20px, 1.2vw, 24px)',
                fontWeight: 400,
                lineHeight: '1.6',
                color:      '#515158',
                maxWidth:   '510px',
              }}
            >
              Hirenest is AI-powered talent discovery and precision hiring platform built
              to connect validated, job-ready talent with real hiring needs.
            </p>

            {/* Para 2 — slightly lighter, same font */}
            <p
              className="ht-para2 mb-8 md:mb-10 lg:mb-12"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize:   'clamp(20px, 1.2vw, 24px)',
                fontWeight: 400,
                lineHeight: '1.6',
                color:      '#71717A',
                maxWidth:   '510px',
              }}
            >
              By integrating skill intelligence, behavioral analytics, and simulation-based
              performance validation, we help enterprises move from credential-based
              screening to capability-based hiring, reducing risk, improving outcomes,
              and accelerating time-to-productivity.
            </p>

            {/* CTA Button — DM Sans 700 14px, same as Home buttons */}
            <div className="ht-btn-wrap">
              <button
                className="ht-cta-btn px-7 md:px-9 py-3 md:py-3.5 text-white font-bold rounded-lg whitespace-nowrap cursor-pointer border-none"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px' }}
              >
                Request a Hiring Demo
              </button>
            </div>
          </div>

          {/* ════ RIGHT column: Hero image — absolutely positioned, NO float/movement ════
               Sits at right: 0, bleeds to edge (same pattern as AIHackNexPage) ════ */}
          <div
            className="ht-hero-img lg:absolute lg:right-0 lg:top-0 w-full lg:w-[57%] xl:w-[58%] flex justify-end items-start"
            style={{ paddingRight: 0 }}
          >
            <img
              src={heroImg}
              alt="Hirenest AI Platform Dashboard"
              style={{
                width:      '100%',
                maxWidth:   '900px',
                height:     'auto',
                display:    'block',
                marginLeft: 'auto',
              }}
            />
          </div>

        </div>{/* /max-w container */}
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — From Resume Screening To Readiness Validation
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-14 md:py-18 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20 xl:gap-28">

            {/* Left — heading */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex-shrink-0">
              <h2
                style={{
                  fontFamily:    "'DM Sans', sans-serif",
                  fontWeight:    700,
                  fontSize:      'clamp(24px, 2.8vw, 52px)',
                  lineHeight:    '1.18',
                  letterSpacing: '-0.3px',
                  color:         '#0F1114',
                }}
              >
                From Resume Screening To Readiness Validation
              </h2>
            </div>

            {/* Right — bullet points */}
            <div className="w-full lg:w-[62%] xl:w-[65%]">
              <ul
                style={{
                  listStyle:  'none',
                  margin:     0,
                  padding:    0,
                  display:    'flex',
                  flexDirection: 'column',
                  gap:        '18px',
                }}
              >
                {[
                  'Access pre-assessed, role-ready candidate pools',
                  'Evaluate real performance and execution capability, not theoretical claims',
                  'Improve role-fit accuracy and hiring confidence using readiness intelligence',
                  'Reduce early attrition, mis-hires, and onboarding failure',
                ].map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display:    'flex',
                      alignItems: 'flex-start',
                      gap:        '12px',
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize:   'clamp(20px, 1.2vw, 24px)',
                      lineHeight: '1.6',
                      color:      '#515158',
                    }}
                  >
                    {/* Bullet dot */}
                    <span
                      style={{
                        marginTop:   '9px',
                        width:       '6px',
                        height:      '6px',
                        borderRadius: '50%',
                        background:  '#0F1114',
                        flexShrink:  0,
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — KEY CAPABILITIES
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-14 md:py-18 lg:py-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

          {/* Section heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2
              style={{
                fontFamily:    "'DM Sans', sans-serif",
                fontWeight:    700,
                fontSize:      'clamp(22px, 2.8vw, 42px)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color:         '#0F1114',
                marginBottom:  '12px',
              }}
            >
              Key Capabilities
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                fontSize:   '20px',
                color:      '#515158',
                lineHeight: '1.5',
              }}
            >
              Intelligence-Led Workforce Transformation
            </p>
          </div>

          {/* Cards grid — 2 columns, last card left-aligned */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap:                 '20px',
            }}
            className="grid-cols-1 sm:grid-cols-2 scroll-3d delay-200"
          >
            {[
              {
                icon:  icon1,
                title: 'Live Talent Intelligence Feed',
                desc:  'Real-time updates on candidate skill validation, simulation performance, task readiness, and project outcomes\u2014not static resumes.',
              },
              {
                icon:  icon2,
                title: 'One-Click 360\u00b0 Candidate Profiles',
                desc:  'Unified, recruiter-ready visibility into skills, behavior, simulations, task-level readiness, and execution confidence.',
              },
              {
                icon:  icon3,
                title: 'Role Execution Readiness Index',
                desc:  'Clear, interpretable scores that indicate how quickly and effectively a candidate will perform in a specific role.',
              },
              {
                icon:  icon4,
                title: 'Attrition Risk Intelligence',
                desc:  'Predictive indicators highlighting candidate-role alignment, growth potential, and retention probability.',
              },
              {
                icon:  icon5,
                title: 'ATS & CRM Integration',
                desc:  'Enterprise-ready APIs enabling seamless integration with existing recruitment workflows.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-transparent hover:border-blue-100"
                style={{
                  /* Exact card background from design spec */
                  background:   '#F3F5FF',
                  borderRadius: '8px',
                  /* Reference size: 737×215px — fluid approach */
                  minHeight:    '215px',
                  padding:      '32px 28px',
                  display:      'flex',
                  alignItems:   'flex-start',
                  gap:          '20px',
                  /* 5th card stays in left col — grid auto handles it */
                  gridColumn:   i === 4 ? '1' : 'auto',
                }}
              >
                {/* Icon — 72×78px as per design spec */}
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{
                      width:     '72px',
                      height:    '78px',
                      objectFit: 'contain',
                      display:   'block',
                    }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontFamily:   "'DM Sans', sans-serif",
                      fontWeight:   700,
                      fontSize:     '20px',
                      lineHeight:   '1.3',
                      color:        '#0F1114',
                      marginBottom: '10px',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 400,
                      fontSize:   '20px',
                      lineHeight: '1.65',
                      color:      '#515158',
                      margin:     0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — Why Hirenest
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full relative overflow-hidden"
        style={{ background: '#F4F4F4' }}
      >
        {/* Inner: max-width container for left text, image breaks out to the right */}
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center">

          {/* LEFT: Text content */}
          <div className="w-full lg:w-[50%] xl:w-[48%] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 flex-shrink-0">

            <h2
              style={{
                fontFamily:   "'DM Sans', sans-serif",
                fontWeight:   700,
                fontSize:     'clamp(24px, 2.8vw, 52px)',
                lineHeight:   '1.16',
                color:        '#0F1114',
                marginBottom: '12px',
              }}
            >
              Why Hirenest
            </h2>

            <p
              style={{
                fontFamily:   "'DM Sans', sans-serif",
                fontWeight:   600,
                fontSize:     '20px',
                lineHeight:   '1.4',
                color:        '#0F1114',
                marginBottom: '20px',
              }}
            >
              Because Hiring Errors Are Expensive
            </p>

            <p
              style={{
                fontFamily:   "'Lato', sans-serif",
                fontWeight:   400,
                fontSize:     '20px',
                lineHeight:   '1.65',
                color:        '#515158',
                marginBottom: '20px',
                maxWidth:     '480px',
              }}
            >
              Traditional hiring methods obscure critical information: resumes
              hide capability gaps, interviews introduce bias, and credentials
              fail to predict on-the-job performance. The cost is
              significant, averaging $240K+ per mis-hire, 30–50% Year 1
              attrition, and delayed productivity that erodes margins.
            </p>

            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize:   '20px',
                lineHeight: '1.65',
                color:      '#515158',
                maxWidth:   '480px',
              }}
            >
              Hirenest replaces guesswork with data-driven certainty through
              capability validation, execution readiness, and alignment
              insights.
            </p>
          </div>

          {/* RIGHT: Image — flush to right edge, 0 gap */}
          <div
            className="w-full lg:w-[52%] xl:w-[55%] relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 flex-shrink-0"
            style={{
              /* On desktop, stretch full height of section */
              alignSelf: 'stretch',
            }}
          >
            {/* Hidden on mobile, shown as block below text */}
            <div
              className="hidden lg:block"
              style={{
                width:              '100%',
                height:             '100%',
                background:         `transparent url('${whyImg}') 0% 0% no-repeat padding-box`,
                backgroundSize:     'cover',
                backgroundPosition: 'center center',
              }}
            />
            {/* Mobile fallback — img tag */}
            <img
              src={whyImg}
              alt="Why Hirenest"
              className="block lg:hidden w-full h-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — Tailored for B2B Leaders
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <style>{`
          .b2b-card {
            background:    #FFFFFF;
            border:        1px solid #EBEBF0;
            border-radius: 12px;
            padding:       28px 24px 24px;
            display:       flex;
            flex-direction: column;
            align-items:   flex-start;
            gap:           16px;
            transition:    box-shadow 0.25s ease, transform 0.25s ease;
            cursor:        default;
          }
          .b2b-card:hover {
            box-shadow: 0 8px 28px rgba(0,0,0,0.09);
            transform:  translateY(-3px);
          }
          @media (max-width: 767px) {
            .b2b-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .b2b-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

          {/* Section heading — black, 24px, bold */}
          <h3
            style={{
              fontFamily:   "'DM Sans', sans-serif",
              fontWeight:   700,
              fontSize:     '24px',
              color:        '#0F1114',
              marginBottom: '28px',
              letterSpacing: '-0.2px',
            }}
          >
            Tailored for B2B Leaders
          </h3>

          {/* Cards grid — 3 cols row 1, 2 cols row 2 */}
          <div
            className="b2b-grid"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '20px',
            }}
          >
            {[
              { icon: b2bIcon1, label: 'Scaling Enterprises' },
              { icon: b2bIcon2, label: 'Talent Acquisition Teams' },
              { icon: b2bIcon3, label: 'HR Executives' },
              { icon: b2bIcon4, label: 'High-Growth Organizations' },
              { icon: b2bIcon5, label: 'Institutions & Partners' },
            ].map((item, i) => (
              <div key={i} className="b2b-card">

                {/* Icon — no border, just plain icon */}
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width:     '56px',
                    height:    '56px',
                    objectFit: 'contain',
                    display:   'block',
                  }}
                />

                {/* Label — bold, 20px */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize:   '20px',
                    lineHeight: '1.3',
                    color:      '#0F1114',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — How The Platform Works
          (Same section as PotentialMeterPage — exact copy)
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading + Subtitle — centered */}
          <h2
            className="scroll-3d font-bold text-center text-[#0F1114] mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize:   'clamp(24px, 2.8vw, 52px)',
              lineHeight: '1.2',
            }}
          >
            How Hirenest Works
          </h2>
          <p
            className="text-center mb-8 md:mb-10"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize:   '20px',
              color:      '#515158',
              lineHeight: '1.5',
            }}
          >
            A Streamlined, Intelligence-Driven Hiring Flow
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

            {/* Left Side — Timeline */}
            <div className="w-full lg:w-[45%] relative">

              {/* Sub-label */}
              <p
                className="mb-6 font-semibold"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize:   '20px',
                  color:      '#0F1114',
                }}
              >
                4 steps to real-world readiness with Skillzaa:
              </p>

              {/* Vertical line */}
              <div className="absolute left-[39px] top-[calc(3rem+5rem)] bottom-12 w-[2px] bg-[#2563eb]/20 hidden md:block" />

              <div className="space-y-5 relative z-10 w-full">
                {[
                  {
                    title:   'Step 1: Pre-Assessed Talent Onboarding',
                    content: 'Candidates complete AI-driven assessments, simulations, and behavioral analysis before entering your hiring pipeline.',
                    open:    false,
                  },
                  {
                    title:   'Step 2: AI-Driven Talent Intelligence',
                    content: 'Hirenest generates comprehensive 360° profiles combining technical skills, soft skills, adaptability, and task-level execution capability.',
                    open:    false,
                  },
                  {
                    title:   'Step 3: Role-Fit Matching & Predictive Insights',
                    content: 'AI maps candidate readiness to specific roles using live benchmarks, performance indicators, and time-to-productivity signals.',
                    open:    false,
                  },
                  {
                    title:   'Step 4: Instant Recruiter Access',
                    content: 'Hiring teams access validated profiles, readiness scores, and performance portfolios for faster, evidence-based decisions.',
                    open:    false,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 relative group w-full cursor-default scroll-3d"
                  >
                    {/* Circle indicator */}
                    <div className="hidden md:flex relative flex-shrink-0 z-10 w-20 h-20 items-center justify-center">
                      <div className={`w-14 h-14 bg-white flex items-center justify-center absolute transition-opacity duration-300 ${step.open ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                        <div className="w-4 h-4 rounded-full bg-[#2563eb]/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                        </div>
                      </div>
                      <div className={`w-16 h-16 rounded-full bg-[#eef2ff] flex items-center justify-center absolute transition-opacity duration-300 ${step.open ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <div className="w-6 h-6 rounded-full bg-white border-[2.5px] border-[#2563eb] flex items-center justify-center shadow-lg">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
                        </div>
                      </div>
                    </div>

                    {/* Step card — Step 1 starts expanded (white bg), rest blue */}
                    <div
                      className={`flex-1 w-full rounded-lg transition-all duration-300 flex flex-col justify-center text-left py-4 px-6 lg:px-8 border
                        ${step.open
                          ? 'bg-white border-gray-200 shadow-sm'
                          : 'bg-[#C9DBFF] border-transparent hover:bg-[#F4F7FA] hover:border-gray-200'
                        }`}
                      style={{ minHeight: '68px' }}
                    >
                      <h3
                        className="font-semibold text-[20px] transition-colors text-[#245CE2]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      {/* Step 1 content always visible; rest expand on hover */}
                      <div
                        className={`transition-all duration-300 ${
                          step.open
                            ? 'opacity-100 max-h-[160px] mt-3'
                            : 'opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[160px] group-hover:mt-3'
                        }`}
                      >
                        <p
                          className="font-medium text-[#475569] leading-[1.6]"
                          style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px' }}
                        >
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 md:mt-10 md:pl-[112px] w-full">
                <Link
                  to="/contact-us"
                  className="w-full inline-block text-center bg-[#3730C8] hover:bg-[#2a249e] transition-all duration-300 text-white font-semibold text-[20px] py-4 rounded-md shadow-[0_8px_20px_rgba(55,48,200,0.25)] no-underline"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  View a Sample Candidate Profile
                </Link>
              </div>
            </div>

            {/* Right Side — Dashboard image */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end xl:pl-4">
              <img
                src={dashImg}
                alt="Hirenest Platform Dashboard"
                className="w-full h-auto object-contain max-w-[850px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl scroll-3d delay-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 7 — The Impact (from SkillzzaPersona — exact copy)
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col items-center w-full">
            <h2
              className="scroll-3d text-center"
              style={{
                fontFamily:   "'DM Sans', sans-serif",
                fontWeight:   700,
                fontSize:     'clamp(24px, 2.8vw, 52px)',
                lineHeight:   '1.2',
                color:        '#0F1114',
                marginBottom: '40px',
              }}
            >
              The Impact <br /> Proven Results Across Learners and Institutions
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center scroll-3d delay-200">
            {[
              { number: '2.8', suffix: 'X', label: 'Improvement in professional confidence' },
              { number: '65',  suffix: '%', label: 'Faster readiness for leadership and client-facing roles' },
              { number: '50',  suffix: '%', label: 'Reduction in early-career performance gaps' },
              { number: '70',  suffix: '%', label: 'Higher employer confidence in behavioral preparedness' },
            ].map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '42px', color: '#1F57C7', marginBottom: '8px' }}>
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '20px', color: '#4B5563', lineHeight: '1.6' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA: exact copy from SkillzzaPersona */}
      <style>{`
        /* ── Final CTA Section Responsive Layout ── */
        .persona-final-cta {
          padding-top: 80px;
          padding-bottom: 80px;
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
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .persona-cta-heading {
            font-size: clamp(24px, 2.8vw, 52px) !important;
            line-height: 1.2 !important;
            margin-bottom: 24px !important;
          }
          .persona-cta-buttons {
            flex-direction: column !important; /* Stack buttons cleanly */
            gap: 12px !important;
            width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .persona-cta-btn {
            width: 100% !important; /* Full width native touch buttons */
            max-width: 280px !important;
            min-width: 0 !important;
            padding: 12px 24px !important; /* Elegant tighter vertical height */
            border-radius: 8px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
      <section
        className="persona-final-cta"
        style={{
          backgroundImage:    `url(${getAssetPath('/Group%2041612.png')})`,
          backgroundSize:     'cover',
          backgroundPosition: 'center center',
          backgroundRepeat:   'no-repeat',
          backgroundColor:    '#F59E0B',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="scroll-3d persona-cta-heading">
            Prepare for the Role,<br className="hidden md:block" />Before You Step Into It
          </h2>
          <div className="persona-cta-buttons scroll-3d delay-200">
            <Link
              to="/contact-us"
              className="persona-cta-btn text-white transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#1F57C7' }}
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact-us"
              className="persona-cta-btn transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: 'transparent', color: '#0F1114', border: '1.5px solid #0F1114' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
