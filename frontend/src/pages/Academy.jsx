import React, { useEffect, useRef, useState } from 'react'
import { getAssetPath } from '../utils/assets'

// Import Feature Icons
import iconIndustry from '../assets/Academy/computer_3598191.svg'
import iconFlexible from '../assets/Academy/call-split_566037.svg'
import iconApplied from '../assets/Academy/tools_1077198.svg'
import iconPractitioner from '../assets/Academy/celebrity_1169330.svg'
import iconStackable from '../assets/Academy/quality_6294011.svg'

// Import Images
import pathwaysImg from '../assets/Academy/Group 41602.png'

function AnimatedCounter({ valueStr }) {
  const [countStr, setCountStr] = useState(valueStr.replace(/[0-9]/g, '0'))
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setCountStr(valueStr.replace(/[0-9]/g, '0'))
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [valueStr])

  useEffect(() => {
    if (!isVisible) return

    const parts = valueStr.split(/(\d+)/)
    const duration = 2000 // 2 seconds
    const startTime = performance.now()

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const currentString = parts.map(part => {
        if (/^\d+$/.test(part)) {
          const target = parseInt(part, 10)
          return Math.floor(target * easeOut).toString()
        }
        return part
      }).join('')

      setCountStr(currentString)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        setCountStr(valueStr)
      }
    }
    requestAnimationFrame(update)
  }, [isVisible, valueStr])

  return <span ref={ref}>{countStr}</span>
}

export default function Academy() {
  const heroSectionRef = useRef(null)

  useEffect(() => {
    // 3D Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.scroll-3d')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        /* ── Modern 3D Scroll Animations ── */
        .scroll-3d {
          opacity: 0;
          transform: perspective(1000px) rotateX(4deg) translateY(30px) scale(0.98);
          transition: all 0.8s cubic-bezier(0.25, 1, 0.2, 1);
          will-change: opacity, transform;
        }
        
        .scroll-3d.visible {
          opacity: 1;
          transform: perspective(1000px) rotateX(0deg) translateY(0) scale(1);
        }

        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        /* ── Academy Hero Gradient ── */
        .academy-hero-bg {
          background: transparent linear-gradient(255deg, #D5EFFF 0%, #E8F5FD 33%, #F2F8FC 51%, #D5EFFF 100%) 0% 0% no-repeat padding-box;
        }
        
        .academy-btn {
          background-color: #2974c9;
          transition: all 0.3s ease;
        }
        .academy-btn:hover {
          background-color: #1a5ea8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(41, 116, 201, 0.25);
        }

        /* ── H1 line blocks — force 2 exact lines on desktop ── */
        .academy-h1-line {
          display: block;
          white-space: nowrap;
        }
        @media (max-width: 767px) {
          .academy-h1-line { white-space: normal !important; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroSectionRef}
        className="w-full academy-hero-bg flex items-center justify-center relative overflow-hidden py-24"
        style={{ minHeight: '80vh', border: 'none' }}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 w-full relative z-10 flex flex-col items-center justify-center text-center">

          {/* Main Title */}
          <h1
            className="scroll-3d"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(40px, 4.5vw, 64px)',
              lineHeight: '1.15',
              letterSpacing: '-0.5px',
              color: '#0F1114',
              marginBottom: '20px',
              maxWidth: '900px'
            }}
          >
            <span className="academy-h1-line">An Integrated Multi-</span>
            <span className="academy-h1-line">Disciplinary Learning Platform</span>
          </h1>

          {/* Subtitle */}
          <h2
            className="scroll-3d delay-100"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              color: '#0F1114',
              lineHeight: '1.3',
              marginBottom: '32px'
            }}
          >
            Learn Deep. Learn Wide. Learn Future-First.
          </h2>

          {/* Paragraph description */}
          <p
            className="scroll-3d delay-200"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.5vw, 24px)',
              lineHeight: '1.7',
              color: '#515158',
              maxWidth: '950px',
              marginBottom: '40px'
            }}
          >
            Skillzza Academy operates as a unified ecosystem of specialized schools, enabling learners to either develop deep domain expertise or build cross-disciplinary capabilities. This structure supports career adaptability and sustained professional relevance in rapidly evolving industries.
          </p>

          {/* Call to action button */}
          <button
            className="academy-btn scroll-3d delay-300 text-white font-semibold rounded-lg"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '20px',
              padding: '16px 32px'
            }}
          >
            Explore All Academies
          </button>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — THE IMPACT
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative py-10 lg:py-16 overflow-hidden" style={{
        backgroundImage: `url(${getAssetPath('/abstract-technical-wave-graphic-white-background.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
      }}>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10 scroll-3d delay-100">
          <div className="flex flex-col items-center w-full mb-6">
            <h2 className="text-center whitespace-nowrap mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 3vw, 48px)', lineHeight: '1.2', color: '#0F1114' }}>
              <span className="academy-h1-line">Impact by the Numbers</span>
            </h2>
            <h3 className="text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 'clamp(20px, 1.8vw, 24px)', color: '#0F1114' }}>
              Proven Outcomes. Real Transformation.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
            {[
              { number: '100,000+', label: 'Learners empowered' },
              { number: '200+', label: 'Industry mentors & experts' },
              { number: '50+', label: 'Enterprise & institutional partners' },
              { number: '90%+', label: 'Learner satisfaction & completion' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(42px, 4vw, 56px)', color: '#6A2A94', marginBottom: '12px' }}>
                  <AnimatedCounter valueStr={stat.number} />
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '20px', color: '#0F1114', lineHeight: '1.4', maxWidth: '240px' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
        SECTION 3 — OUR ACADEMY DOMAINS
    ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-10 lg:py-16" style={{ background: '#F4F9FC 0% 0% no-repeat padding-box' }}>
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">

          {/* Headings */}
          <div className="text-center mb-10 scroll-3d">
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(36px, 4vw, 56px)',
                color: '#0F1114',
                marginBottom: '16px'
              }}
            >
              Our Academy Domains
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                color: '#71717A',
                fontWeight: 500
              }}
            >
              Learn Deep. Learn Wide. Learn Future-First.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 scroll-3d delay-100">
            {[
              {
                title: <>Future Skills Academy</>,
                cta: 'Explore More'
              },
              {
                title: <>School of AI &<br />Quantum Intelligence</>,
                cta: 'Discover New AI'
              },
              {
                title: <>Global School of Sustainability<br />& Climate Action</>,
                cta: 'Join the Sustainability Movement'
              },
              {
                title: <>Centre of Digital &<br />Design Excellence</>,
                cta: 'Lets Design'
              },
              {
                title: <>School of EV &<br />E-Mobility</>,
                cta: 'Power the Future'
              },
              {
                title: <>Institute of Aerial<br />Intelligence</>,
                cta: 'Enter Aerial Intelligence'
              },
            ].map((domain, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 lg:p-8 flex flex-col justify-between border border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(31,87,199,0.15)] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#1F57C7]/10 transition-all duration-500 ease-out min-h-[140px] lg:min-h-[160px] cursor-pointer"
              >
                {/* Card Title */}
                <h4
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#1F57C7',
                    lineHeight: '1.3'
                  }}
                >
                  {domain.title}
                </h4>

                {/* Card CTA */}
                <div className="flex justify-end mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[#71717A] group-hover:text-[#1F57C7] transition-colors duration-300"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '20px',
                      textDecoration: 'underline',
                      textUnderlineOffset: '6px',
                      textDecorationThickness: '1px'
                    }}
                  >
                    <span>{domain.cta}</span>
                    {/* SVG arrow alignment class: Use translate-y-[px] to move it up or down */}
                    <svg
                      width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="3.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="group-hover:translate-x-1.5 transition-transform duration-300 translate-y-[1px]"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — THE SKILLZZA APPROACH
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-10 lg:py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-center">
          
          <h2 className="scroll-3d" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)', color: '#0F1114', marginBottom: '8px' }}>
            The Skillzza Approach
          </h2>
          
          <h3 className="scroll-3d delay-100" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 'clamp(18px, 2vw, 22px)', color: '#0F1114', marginBottom: '20px' }}>
            Outcome-Driven Learning for a Dynamic Economy
          </h3>

          <div className="max-w-[900px] mx-auto scroll-3d delay-200" style={{ fontFamily: "'Lato', sans-serif", fontSize: '18px', lineHeight: '1.8', color: '#515158', marginBottom: '24px' }}>
            <p className="mb-6">
              Traditional educational models often lag behind industry requirements, following fixed curricula that don't reflect current workplace realities. Skillzza Academy delivers modular, application-focused learning designed around demonstrable outcomes rather than content completion.
            </p>
            <p>
              We prioritize career transformation through applied learning experiences that produce verifiable professional capabilities.
            </p>
          </div>

          <div className="w-full mx-auto h-[1px] bg-[#E4E4E7] my-8 scroll-3d delay-300" style={{ maxWidth: '85%' }}></div>

          <h3 className="scroll-3d" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 'clamp(20px, 2.5vw, 24px)', color: '#0F1114' }}>
            What Sets US Apart
          </h3>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left scroll-3d delay-100">
            {[
              {
                icon: iconIndustry,
                title: 'Industry-Validated Curriculum',
                desc: 'Programs co-developed with practitioners and subject matter experts across AI, sustainability, mobility, and emerging technology sectors.'
              },
              {
                icon: iconFlexible,
                title: 'Flexible Learning Architecture',
                desc: 'Select from certifications, simulation-based training, virtual internships, and executive programs structured around your professional objectives and constraints.'
              },
              {
                icon: iconApplied,
                title: 'Applied Learning Methodology',
                desc: 'Engage with realistic projects, industry simulations, and authentic professional challenges that build credible portfolio evidence.'
              },
              {
                icon: iconPractitioner,
                title: 'Practitioner-Led Instruction',
                desc: 'Access to professionals actively working in innovation, strategy, and technical implementation roles across target industries.'
              },
              {
                icon: iconStackable,
                title: 'Stackable Credential System',
                desc: 'Accumulate micro-credentials that aggregate into recognized certifications, with assessment frameworks that validate specific competencies employers value.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 md:p-8 flex items-start gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                style={{ backgroundColor: '#F4F9FC' }}
              >
                {/* Icon Box */}
                <div className="shrink-0 mt-1">
                  <img src={feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
                </div>
                {/* Text Content */}
                <div>
                  <h4
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#0F1114',
                      marginBottom: '8px'
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#515158'
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — OUR PROGRESSIVE LEARNING PATHWAYS
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-10 lg:py-16 bg-white relative overflow-hidden">
        
        {/* Headings */}
        <div className="text-center mb-10 relative z-10 scroll-3d">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(36px, 4vw, 48px)', color: '#333333', marginBottom: '16px' }}>
            Our Progressive Learning Pathways
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(18px, 2vw, 22px)', color: '#71717A', fontWeight: 500 }}>
            Choose How You Learn. Build What Matters.
          </p>
        </div>

        {/* Right Image Background (Attached to full-width section to guarantee 0 gap on right) */}
        <div className="absolute right-0 top-[55%] -translate-y-1/2 z-0 hidden lg:block" style={{ width: '850px' }}>
           <img src={pathwaysImg} alt="Pathways Background" className="w-full h-auto object-contain object-right scroll-3d delay-100" />
        </div>

        {/* Content Container */}
        <div className="max-w-[1360px] mx-auto relative min-h-[600px] px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-start scroll-3d delay-200">

          {/* Cards Grid */}
          <div className="relative z-10 flex flex-col md:flex-row gap-6 w-full lg:w-auto">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6 w-full max-w-[300px]">
              {/* Card 1 */}
              <div className="w-full min-h-[150px] bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-center border border-[#E4E4E7] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2563EB]/20 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] cursor-pointer">
                <h4 style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#2563EB] text-[20px] font-bold mb-3 leading-tight">Bootcamps</h4>
                <p style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[16px] leading-snug whitespace-pre-line">Immersive, Outcome-Focused{'\n'}Skill Acceleration</p>
              </div>
              
              {/* Card 3 */}
              <div className="w-full min-h-[150px] bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-center border border-[#E4E4E7] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2563EB]/20 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] cursor-pointer">
                <h4 style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#2563EB] text-[20px] font-bold mb-3 leading-tight">Masterclasses</h4>
                <p style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[16px] leading-snug whitespace-pre-line">Expert-Led Insights on Emerging{'\n'}Technologies & Strategy</p>
              </div>
              
              {/* Card 5 */}
              <div className="w-full min-h-[150px] bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-center border border-[#E4E4E7] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2563EB]/20 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] cursor-pointer">
                <h4 style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#2563EB] text-[20px] font-bold mb-3 leading-tight">Institutional & Enterprise{'\n'}Programs</h4>
                <p style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[16px] leading-snug whitespace-pre-line">Scalable Learning & Workforce{'\n'}Transformation Solutions</p>
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6 w-full max-w-[300px]">
              {/* Card 2 */}
              <div className="w-full min-h-[150px] bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-center border border-[#E4E4E7] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2563EB]/20 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] cursor-pointer">
                <h4 style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#2563EB] text-[20px] font-bold mb-3 leading-tight">Certification Programs</h4>
                <p style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[16px] leading-snug whitespace-pre-line">Industry-Recognised Credentials{'\n'}for Career Advancement</p>
              </div>
              
              {/* Card 4 */}
              <div className="w-full min-h-[150px] bg-[#F4F4F5] rounded-lg p-6 flex flex-col justify-center border border-[#E4E4E7] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#2563EB]/20 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] cursor-pointer">
                <h4 style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#2563EB] text-[20px] font-bold mb-3 leading-tight">Executive & CXO{'\n'}Learning Labs</h4>
                <p style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[16px] leading-snug whitespace-pre-line">Strategic, Peer-Driven Learning{'\n'}for Senior Leadership</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — CTA (READY TO BUILD YOUR FUTURE)
      ════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-8 md:py-10" style={{ backgroundColor: '#FBA93E' }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="scroll-3d" style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#0F1114] text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-3 tracking-tight">
            Ready to Build Your Future?
          </h2>
          
          <p className="scroll-3d delay-100" style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[20px] md:text-[24px] mb-4 font-medium">
            Upskill Smarter. Learn Faster. Lead Confidently.
          </p>
          
          <p className="scroll-3d delay-200" style={{ fontFamily: "'Lato', sans-serif" }} className="text-[#0F1114] text-[18px] md:text-[22px] mb-6 leading-relaxed">
            Skillzza Academy doesn't just teach skills<br className="hidden md:block" />
            we build careers, capability, and confidence for the next decade.
          </p>

          <button className="scroll-3d delay-300 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-medium text-[16px] md:text-[18px] py-4 px-16 rounded-lg transition-all hover:-translate-y-1 shadow-[0_4px_14px_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Apply Now
          </button>

          <div className="scroll-3d delay-400 text-[#0F1114] text-[14px] md:text-[16px] font-bold flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <a href="#advisor" className="hover:underline hover:opacity-80 transition-opacity cursor-pointer">Talk to an Academic Advisor</a>
            <span className="hidden sm:block">|</span>
            <a href="#brochure" className="hover:underline hover:opacity-80 transition-opacity cursor-pointer">Download Academy Brochure</a>
          </div>
          
        </div>
      </section>

    </>
  )
}
