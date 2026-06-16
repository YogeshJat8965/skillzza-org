import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getBackgroundImageUrl } from '../utils/assets'

// Import images
import heroLaptopImg from '../assets/AI Hacknex/ChatGPT Image Jan 12, 2026, 08_34_27 PM.png'
import heroBgSvg from '../assets/AI Hacknex/Rectangle 11564.svg'

// Built For section icons
import iconCorporate from '../assets/AI Hacknex/office-building_11342251.svg'
import iconInstitutions from '../assets/AI Hacknex/goverment_17213502.svg'
import iconDevelopers from '../assets/AI Hacknex/change_17930856.svg'
import iconCommunity from '../assets/AI Hacknex/initial-public-offering_15749347.svg'

// How AI Hacknex Helps section
import helpsImg from '../assets/AI Hacknex/Group 41601@2x.png'
import iconMindset from '../assets/AI Hacknex/mindset_17621247.svg'
import iconImprovement from '../assets/AI Hacknex/improvement_11726520.svg'
import iconPopulation from '../assets/AI Hacknex/population_18615181.svg'
import iconPortfolio from '../assets/AI Hacknex/improvement_11726520-1.svg'
import iconIdeas from '../assets/AI Hacknex/ideas_4616882.svg'

// Key Platform Capabilities section
import tabIconChallenge from '../assets/AI Hacknex/effective_7959214.svg'
import tabIconEvaluation from '../assets/AI Hacknex/evaluation_7651302.svg'
import tabIconRecognition from '../assets/AI Hacknex/ribbon_7107704.svg'
import tabIconBenchmark from '../assets/AI Hacknex/improvement_11726520.svg'
import capabilitiesImg1 from '../assets/AI Hacknex/Mask Group 123.png'
import capabilitiesImg2 from '../assets/AI Hacknex/image.png'
import capabilitiesImg3 from '../assets/AI Hacknex/image copy.png'
import capabilitiesImg4 from '../assets/AI Hacknex/image copy 2.png'

function AIHackNexPage() {
  const heroSectionRef = useRef(null)
  const whySectionRef = useRef(null)
  const builtForSectionRef = useRef(null)
  const helpsSectionRef = useRef(null)
  const capabilitiesSectionRef = useRef(null)
  const impactSectionRef = useRef(null)
  const [activeCapTab, setActiveCapTab] = useState(0)
  const [animatedNumbers, setAnimatedNumbers] = useState({ num1: 0, num2: 0, num3: 0, num4: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Hero Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = entry.target.querySelector('.hacknex-hero-background')
            const breadcrumb = entry.target.querySelector('.hacknex-breadcrumb')
            const heading = entry.target.querySelector('.hacknex-hero-heading')
            const subheading = entry.target.querySelector('.hacknex-hero-subheading')
            const buttons = entry.target.querySelector('.hacknex-hero-buttons')
            const image = entry.target.querySelector('.hacknex-hero-image')
            if (bg) bg.classList.add('active')
            if (breadcrumb) breadcrumb.classList.add('active')
            if (heading) heading.classList.add('active')
            if (subheading) subheading.classList.add('active')
            if (buttons) buttons.classList.add('active')
            if (image) image.classList.add('active')
          } else {
            const bg = entry.target.querySelector('.hacknex-hero-background')
            const breadcrumb = entry.target.querySelector('.hacknex-breadcrumb')
            const heading = entry.target.querySelector('.hacknex-hero-heading')
            const subheading = entry.target.querySelector('.hacknex-hero-subheading')
            const buttons = entry.target.querySelector('.hacknex-hero-buttons')
            const image = entry.target.querySelector('.hacknex-hero-image')
            if (bg) bg.classList.remove('active')
            if (breadcrumb) breadcrumb.classList.remove('active')
            if (heading) heading.classList.remove('active')
            if (subheading) subheading.classList.remove('active')
            if (buttons) buttons.classList.remove('active')
            if (image) image.classList.remove('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current)
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current)
      }
    }
  }, [])

  // Why AI HackNex Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const left = entry.target.querySelector('.hacknex-why-left')
            const right = entry.target.querySelector('.hacknex-why-right')
            if (left) left.classList.add('active')
            if (right) right.classList.add('active')
          } else {
            const left = entry.target.querySelector('.hacknex-why-left')
            const right = entry.target.querySelector('.hacknex-why-right')
            if (left) left.classList.remove('active')
            if (right) right.classList.remove('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (whySectionRef.current) {
      observer.observe(whySectionRef.current)
    }

    return () => {
      if (whySectionRef.current) {
        observer.unobserve(whySectionRef.current)
      }
    }
  }, [])

  // Built For Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.hacknex-builtfor-heading')
            const cards = entry.target.querySelectorAll('.hacknex-builtfor-card')
            if (heading) heading.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
          } else {
            const heading = entry.target.querySelector('.hacknex-builtfor-heading')
            const cards = entry.target.querySelectorAll('.hacknex-builtfor-card')
            if (heading) heading.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
          }
        })
      },
      { threshold: 0.15 }
    )

    if (builtForSectionRef.current) {
      observer.observe(builtForSectionRef.current)
    }

    return () => {
      if (builtForSectionRef.current) {
        observer.unobserve(builtForSectionRef.current)
      }
    }
  }, [])

  // How AI Hacknex Helps Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.hacknex-helps-heading')
            const subtitle = entry.target.querySelector('.hacknex-helps-subtitle')
            const cards = entry.target.querySelectorAll('.hacknex-helps-card')
            const image = entry.target.querySelector('.hacknex-helps-image')
            if (heading) heading.classList.add('active')
            if (subtitle) subtitle.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
            if (image) image.classList.add('active')
          } else {
            const heading = entry.target.querySelector('.hacknex-helps-heading')
            const subtitle = entry.target.querySelector('.hacknex-helps-subtitle')
            const cards = entry.target.querySelectorAll('.hacknex-helps-card')
            const image = entry.target.querySelector('.hacknex-helps-image')
            if (heading) heading.classList.remove('active')
            if (subtitle) subtitle.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
            if (image) image.classList.remove('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (helpsSectionRef.current) {
      observer.observe(helpsSectionRef.current)
    }

    return () => {
      if (helpsSectionRef.current) {
        observer.unobserve(helpsSectionRef.current)
      }
    }
  }, [])

  // Key Platform Capabilities Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.hacknex-cap-heading')
            const tabs = entry.target.querySelector('.hacknex-cap-tabs')
            const content = entry.target.querySelector('.hacknex-cap-content')
            if (heading) heading.classList.add('active')
            if (tabs) tabs.classList.add('active')
            if (content) content.classList.add('active')
          } else {
            const heading = entry.target.querySelector('.hacknex-cap-heading')
            const tabs = entry.target.querySelector('.hacknex-cap-tabs')
            const content = entry.target.querySelector('.hacknex-cap-content')
            if (heading) heading.classList.remove('active')
            if (tabs) tabs.classList.remove('active')
            if (content) content.classList.remove('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (capabilitiesSectionRef.current) {
      observer.observe(capabilitiesSectionRef.current)
    }

    return () => {
      if (capabilitiesSectionRef.current) {
        observer.unobserve(capabilitiesSectionRef.current)
      }
    }
  }, [])

  // Impact Section Number Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.hacknex-impact-stat')
            stats.forEach((stat) => stat.classList.add('active'))

            if (hasAnimated) return
            setHasAnimated(true)

            // Animate 3× (from 0 to 3)
            let count1 = 0
            const timer1 = setInterval(() => {
              count1 += 0.1
              if (count1 >= 3) { count1 = 3; clearInterval(timer1) }
              setAnimatedNumbers(prev => ({ ...prev, num1: count1 }))
            }, 30)

            // Animate 70% (from 0 to 70)
            let count2 = 0
            const timer2 = setInterval(() => {
              count2 += 2
              if (count2 >= 70) { count2 = 70; clearInterval(timer2) }
              setAnimatedNumbers(prev => ({ ...prev, num2: count2 }))
            }, 30)

            // Animate 60% (from 0 to 60)
            let count3 = 0
            const timer3 = setInterval(() => {
              count3 += 2
              if (count3 >= 60) { count3 = 60; clearInterval(timer3) }
              setAnimatedNumbers(prev => ({ ...prev, num3: count3 }))
            }, 30)

            // Animate 2× (from 0 to 2)
            let count4 = 0
            const timer4 = setInterval(() => {
              count4 += 0.1
              if (count4 >= 2) { count4 = 2; clearInterval(timer4) }
              setAnimatedNumbers(prev => ({ ...prev, num4: count4 }))
            }, 40)
          } else {
            const stats = entry.target.querySelectorAll('.hacknex-impact-stat')
            stats.forEach((stat) => stat.classList.remove('active'))
          }
        })
      },
      { threshold: 0.3 }
    )

    if (impactSectionRef.current) {
      observer.observe(impactSectionRef.current)
    }

    return () => {
      if (impactSectionRef.current) {
        observer.unobserve(impactSectionRef.current)
      }
    }
  }, [hasAnimated])

  // Tab data for Key Platform Capabilities
  const capabilityTabs = [
    { icon: tabIconChallenge, label: 'Challenge\nManagement' },
    { icon: tabIconEvaluation, label: 'Evaluation\nFramework' },
    { icon: tabIconRecognition, label: 'Recognition\n& Visibility' },
    { icon: tabIconBenchmark, label: 'Benchmarking\n& Analytics' },
  ]

  const capabilityContent = [
    {
      title: 'Challenge Management',
      sections: [
        {
          heading: 'Enterprise & Impact-Calibrated Problem Statements',
          bullets: [
            'Problems sourced from corporates, startups, public sector, and community missions',
            'Domains spanning business, governance, sustainability, and technology',
            'Real-world constraints and success criteria mirroring production environments',
          ],
        },
        {
          heading: 'Time-Bound Competitive Execution',
          bullets: [
            'Structured timelines from ideation to solution delivery',
            'Resource constraints reflecting real-world limitations',
            'Collaborative and individual participation modes',
          ],
        },
      ],
      image: capabilitiesImg1,
    },
    {
      title: 'Evaluation Framework',
      sections: [
        {
          heading: 'Multi-Dimensional Assessment Engine',
          bullets: [
            'Technical depth and code quality scoring',
            'Innovation and creativity benchmarking',
            'Business viability and impact assessment',
          ],
        },
        {
          heading: 'Expert-Led Review Process',
          bullets: [
            'Industry expert judges and mentors',
            'Structured rubrics aligned with real-world standards',
            'Transparent scoring and feedback loops',
          ],
        },
      ],
      image: capabilitiesImg2,
    },
    {
      title: 'Recognition & Visibility',
      sections: [
        {
          heading: 'Public Achievement Profiles',
          bullets: [
            'Verified skill badges and certifications',
            'Portfolio showcasing with project outcomes',
            'Leaderboard rankings across domains',
          ],
        },
        {
          heading: 'Industry-Connected Visibility',
          bullets: [
            'Direct exposure to recruiters and sponsors',
            'Featured profiles for top performers',
            'Community recognition and peer endorsements',
          ],
        },
      ],
      image: capabilitiesImg3,
    },
    {
      title: 'Benchmarking & Analytics',
      sections: [
        {
          heading: 'Performance Intelligence Dashboard',
          bullets: [
            'Real-time analytics on participant performance',
            'Cross-institution and cross-region benchmarks',
            'Skill gap analysis and growth tracking',
          ],
        },
        {
          heading: 'Organizational Insights',
          bullets: [
            'Talent density mapping across geographies',
            'Innovation readiness scoring for enterprises',
            'ROI measurement for challenge investments',
          ],
        },
      ],
      image: capabilitiesImg4,
    },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
        /* AI HackNex Hero Section Loading Animations */
        .hacknex-hero-background {
          opacity: 0;
          transform: scale(0.97);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hacknex-hero-background.active {
          opacity: 1;
          transform: scale(1);
        }

        .hacknex-breadcrumb {
          opacity: 0;
          transform: translateY(-15px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        .hacknex-breadcrumb.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hacknex-hero-heading {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        
        .hacknex-hero-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hacknex-hero-subheading {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }
        
        .hacknex-hero-subheading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hacknex-hero-buttons {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.8s;
        }
        
        .hacknex-hero-buttons.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hacknex-hero-image {
          opacity: 0;
          transform: translateX(80px) scale(0.95);
          transition: all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
        }
        
        .hacknex-hero-image.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .hacknex-register-btn {
          background-color: #703593;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hacknex-register-btn:hover {
          background-color: #5c2a7a;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(112, 53, 147, 0.35);
        }

        .hacknex-register-btn:active {
          transform: translateY(0);
        }

        .hacknex-explore-link {
          color: #0F1114;
          transition: all 0.3s ease;
        }

        .hacknex-explore-link:hover {
          color: #703593;
        }

        .hacknex-explore-link:hover .hacknex-arrow {
          transform: translateX(4px);
        }

        .hacknex-arrow {
          transition: transform 0.3s ease;
        }

        /* Subtle floating animation for the laptop */
        @keyframes hacknexFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hacknex-hero-image.active .hacknex-laptop-float {
          animation: hacknexFloat 4s ease-in-out infinite;
          animation-delay: 1.6s;
        }

        /* ── Why AI HackNex Section Animations ── */
        .hacknex-why-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-why-left.active {
          opacity: 1;
          transform: translateX(0);
        }

        .hacknex-why-right {
          opacity: 0;
          transform: translateX(60px);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .hacknex-why-right.active {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Built For Section Animations ── */
        .hacknex-builtfor-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-builtfor-heading.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-builtfor-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-builtfor-card.active {
          opacity: 1;
          transform: translateY(0);
        }
        .hacknex-builtfor-card:nth-child(1) { transition-delay: 0.1s; }
        .hacknex-builtfor-card:nth-child(2) { transition-delay: 0.25s; }
        .hacknex-builtfor-card:nth-child(3) { transition-delay: 0.4s; }
        .hacknex-builtfor-card:nth-child(4) { transition-delay: 0.55s; }

        /* ── How AI Hacknex Helps Section Animations ── */
        .hacknex-helps-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-helps-heading.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-helps-subtitle {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .hacknex-helps-subtitle.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-helps-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-helps-card.active {
          opacity: 1;
          transform: translateY(0);
        }
        .hacknex-helps-card:nth-child(1) { transition-delay: 0.15s; }
        .hacknex-helps-card:nth-child(2) { transition-delay: 0.3s; }
        .hacknex-helps-card:nth-child(3) { transition-delay: 0.45s; }
        .hacknex-helps-card:nth-child(4) { transition-delay: 0.6s; }
        .hacknex-helps-card:nth-child(5) { transition-delay: 0.75s; }

        .hacknex-helps-image {
          opacity: 0;
          transform: translateX(60px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        .hacknex-helps-image.active {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Key Platform Capabilities Section Animations ── */
        .hacknex-cap-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-cap-heading.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-cap-tabs {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .hacknex-cap-tabs.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-cap-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
        }
        .hacknex-cap-content.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hacknex-cap-tab-btn {
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1.5px solid #E4E4E7;
        }
        .hacknex-cap-tab-btn:hover {
          background-color: #F3E8FF;
        }
        .hacknex-cap-tab-btn.active-tab {
          background-color: #F3E8FF;
          border-color: #703593;
        }

        /* ── Impact Stats Animation ── */
        .hacknex-impact-stat {
          opacity: 0;
          transform: translateX(-70px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hacknex-impact-stat.active {
          opacity: 1;
          transform: translateX(0);
        }
        .hacknex-impact-stat:nth-child(1) { transition-delay: 0.2s; }
        .hacknex-impact-stat:nth-child(2) { transition-delay: 0.5s; }
        .hacknex-impact-stat:nth-child(3) { transition-delay: 0.8s; }
        .hacknex-impact-stat:nth-child(4) { transition-delay: 1.1s; }
      `}</style>

      {/* ── Hero Section ── */}
      <section
        ref={heroSectionRef}
        className="relative w-full overflow-hidden"
        style={{ background: '#FFFFFF' }}
      >
        {/* ── Breadcrumb ── */}
        <nav
          className="relative z-20 pt-3 pb-2 md:pt-4 md:pb-3 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1360px] mx-auto w-full text-left"
        >
          <div
            className="flex items-center justify-start gap-1.5 sm:gap-2 text-[16px] md:text-[20px] font-medium w-full"
            style={{ color: '#71717A', fontFamily: "'Lato', sans-serif" }}
          >
            <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: '#71717A' }}>Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#18181B', fontWeight: 500 }}>AI HackNex</span>
          </div>
        </nav>

        {/* Main Content - overlapping layout */}
        <div className="relative max-w-[1360px] mx-auto">
          {/* Left Column: Text + Buttons - positioned with z-index above image */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-3 md:py-4 lg:py-6 xl:py-8">
            {/* Heading */}
            <h1
              className="hacknex-hero-heading mb-5 md:mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(28px, 3.2vw, 52px)',
                lineHeight: '1.18',
                letterSpacing: '-1px',
                color: '#18181B',
                maxWidth: '550px',
              }}
            >
              Connect, Create, & Conquer Challenges Together!
            </h1>

            {/* Description paragraph */}
            <div
              className="hacknex-hero-subheading mb-6 md:mb-8"
              style={{
                maxWidth: '520px',
                fontFamily: "'Lato', sans-serif",
                fontWeight: '400',
                fontSize: 'clamp(14px, 1.05vw, 17px)',
                lineHeight: '1.65',
                color: '#71717A',
              }}
            >
              <p>
                AI HackNex is an AI hackathon and innovation challenge platform
                designed to validate real-world AI capability, accelerate innovation, and
                surface credible talent across corporate enterprises and community
                ecosystems. Operating as both a competitive platform and managed
                service, AI HackNex bridges the gap between declared skills and
                demonstrated execution in an AI-first economy.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 md:gap-5 hacknex-hero-buttons">
              <button
                className="hacknex-register-btn px-7 md:px-9 py-3 md:py-3.5 text-white text-sm md:text-base font-semibold rounded-lg whitespace-nowrap cursor-pointer border-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Register Now
              </button>
              <button
                className="hacknex-explore-link flex items-center gap-1.5 text-sm md:text-base font-semibold bg-transparent border-none cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="underline decoration-1 underline-offset-4">Explore Challenges</span>
                <svg className="hacknex-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Laptop Image - absolutely positioned, bleeding right */}
          <div
            className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[58%] xl:w-[60%] z-10 flex justify-center lg:justify-end lg:items-start hacknex-hero-image"
          >
            <img
              src={heroLaptopImg}
              alt="AI HackNex Platform Dashboard"
              className="w-full h-auto"
              style={{ maxWidth: '820px' }}
            />
          </div>
        </div>
      </section>

      {/* ── Why AI HackNex Section ── */}
      <section
        ref={whySectionRef}
        className="w-full bg-white py-16 md:py-20 lg:py-24 xl:py-28"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-20 xl:gap-28">
            {/* Left – heading + subtitle */}
            <div className="hacknex-why-left lg:w-[38%] xl:w-[35%] flex-shrink-0">
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(24px, 2.8vw, 52px)',
                  lineHeight: '1.2',
                  color: '#0F1114',
                }}
              >
                Why AI HackNex
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '28px',
                  lineHeight: '1.4',
                  color: '#0F1114',
                  marginTop: '8px',
                }}
              >
                Because Capability Must Be<br />Demonstrated–Not Declared
              </p>
            </div>

            {/* Right – description paragraph */}
            <div className="hacknex-why-right lg:w-[62%] xl:w-[65%]">
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: '#52525B',
                }}
              >
                Resumes list skills. Certifications signal intent. AI HackNex validates execution.
                <br />
                In today's fast-evolving AI landscape, organizations-across corporate, public, and social sectors-require talent that can solve complex problems under constraints, collaborate at speed, and deliver deployable outcomes. AI HackNex creates a trusted proving ground where AI talent is assessed on performance, innovation depth, and impact-not claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Built For Section ── */}
      <section
        ref={builtForSectionRef}
        className="w-full bg-white pb-10 md:pb-12 lg:pb-14 xl:pb-16"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          {/* Section heading */}
          <h2
            className="hacknex-builtfor-heading mb-10 md:mb-12 lg:mb-14"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(24px, 2.8vw, 52px)',
              lineHeight: '1.2',
              color: '#0F1114',
            }}
          >
            Built For
          </h2>

          {/* 4-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                icon: iconCorporate,
                title: 'Corporate Enterprises',
                desc: 'Seeking innovation, internal upskilling, and proven AI talent',
                iconW: 111,
                iconH: 111,
              },
              {
                icon: iconInstitutions,
                title: 'Institutions & Academia',
                desc: 'Promoting applied learning and innovation excellence',
                iconW: 111,
                iconH: 111,
              },
              {
                icon: iconDevelopers,
                title: 'Developers, Students & Professionals',
                desc: 'Building credible AI careers',
                iconW: 118,
                iconH: 111,
              },
              {
                icon: iconCommunity,
                title: 'Community & Social Impact Ecosystems',
                desc: 'Solving public and societal challenges using AI',
                iconW: 111,
                iconH: 111,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="hacknex-builtfor-card group rounded-xl p-6 md:p-7 lg:p-8 flex flex-col items-center text-center border border-[#E4E4E7] bg-[#F4F4F5] hover:bg-white hover:border-[#D4D4D8] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-default"
                style={{
                  minHeight: '280px',
                }}
              >
                {/* Card title */}
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '700',
                    fontSize: 'clamp(16px, 1.2vw, 20px)',
                    lineHeight: 'clamp(22px, 1.6vw, 28px)',
                    color: '#0F1114',
                    marginBottom: '24px',
                    minHeight: '52px',
                  }}
                >
                  {card.title}
                </h3>

                {/* Icon */}
                <div className="mb-6 mt-auto flex justify-center w-full transform group-hover:scale-[1.08] transition-transform duration-500 ease-out">
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{ width: card.iconW, height: card.iconH }}
                  />
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: 'clamp(13px, 1vw, 16px)',
                    lineHeight: 'clamp(20px, 1.5vw, 26px)',
                    color: '#3F3F46',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How AI Hacknex Helps Section ── */}
      <section
        ref={helpsSectionRef}
        className="w-full bg-white py-10 md:py-12 lg:py-14 xl:py-16 relative"
        style={{ overflowX: 'clip' }}
      >
        {/* Heading area */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="text-center mb-3 md:mb-4">
            <h2
              className="hacknex-helps-heading"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              How AI Hacknex Helps
            </h2>
          </div>
          <p
            className="hacknex-helps-subtitle text-center mb-10 md:mb-14 lg:mb-16"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#52525B',
            }}
          >
            From Skill Development to Industry &amp; Community Recognition
          </p>
        </div>

        {/* Content area */}
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          {/* Cards grid - wider to overlap image */}
          <div className="w-full lg:w-[60%] xl:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 auto-rows-min relative z-20">
            {[
              { icon: iconMindset, iconW: 67, iconH: 64, text: 'Validate AI skills through real-world, domain-specific challenges' },
              { icon: iconImprovement, iconW: 58, iconH: 64, text: 'Benchmark performance across peers, institutions, and regions' },
              { icon: iconPopulation, iconW: 73, iconH: 64, text: 'Gain public, merit-based visibility with industry and ecosystem partners' },
              { icon: iconPortfolio, iconW: 58, iconH: 64, text: 'Build execution-backed AI portfolios trusted by recruiters and sponsors' },
              { icon: iconIdeas, iconW: 64, iconH: 64, text: 'Channel AI innovation toward business outcomes and societal impact' },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`hacknex-helps-card group rounded-xl p-4 md:p-5 flex flex-col gap-3 border border-[#E4E4E7] bg-[#F4F4F5] hover:bg-white hover:border-[#D4D4D8] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-default ${
                  idx === 4 ? 'sm:col-span-2 sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)] mx-auto w-full' : 'w-full'
                }`}
              >
                <div className="transform group-hover:scale-[1.08] transition-transform duration-500 ease-out origin-left">
                  <img src={card.icon} alt="" style={{ width: Math.round(card.iconW * 0.8), height: Math.round(card.iconH * 0.8) }} />
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: '400', fontSize: '16px', lineHeight: '1.6', color: '#52525B' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image - absolutely positioned, bleeding to viewport right */}
          <div
            className="hidden lg:block absolute top-0 z-10 hacknex-helps-image"
            style={{ right: 'calc(-50vw + 50%)', width: 'calc(45% + 50vw - 50%)', height: '100%' }}
          >
            <img src={helpsImg} alt="Team collaborating on AI challenges" className="relative z-10 w-full h-full object-cover object-right rounded-l-lg" />
          </div>

          {/* Mobile image fallback */}
          <div className="lg:hidden mt-8 relative">
            <img src={helpsImg} alt="Team collaborating on AI challenges" className="w-full h-auto object-cover rounded-lg" style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </section>

      {/* ── Key Platform Capabilities Section ── */}
      <section
        ref={capabilitiesSectionRef}
        className="w-full bg-[#F9FAFB] py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden"
      >
        {/* Decorative circle bottom-left */}
        <div
          className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full opacity-20"
          style={{ backgroundColor: '#703593' }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          {/* Heading */}
          <h2
            className="hacknex-cap-heading text-center mb-8 md:mb-12"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(24px, 2.8vw, 52px)',
              lineHeight: '1.2',
              color: '#0F1114',
            }}
          >
            Key Platform Capabilities
          </h2>

          {/* Tab navigation */}
          <div className="hacknex-cap-tabs flex flex-wrap justify-center items-stretch gap-2 md:gap-3 mb-12 md:mb-16">
            {capabilityTabs.map((tab, idx) => (
              <React.Fragment key={idx}>
                <button
                  className={`hacknex-cap-tab-btn flex-1 min-w-[200px] max-w-[260px] flex items-center justify-center gap-2 md:gap-3 px-4 md:px-5 lg:px-6 py-3 md:py-4 rounded-lg bg-white shadow-sm ${activeCapTab === idx ? 'active-tab' : ''
                    }`}
                  onClick={() => setActiveCapTab(idx)}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <img
                    src={tab.icon}
                    alt=""
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
                    style={{
                      filter: 'invert(16%) sepia(87%) saturate(5831%) hue-rotate(345deg) brightness(97%) contrast(106%)'
                    }}
                  />
                  <span
                    className="text-sm md:text-base lg:text-[17px] font-semibold text-left whitespace-pre-line"
                    style={{ color: '#0F1114' }}
                  >
                    {tab.label}
                  </span>
                </button>
                {/* Chevron separator (not after last tab) */}
                {idx < capabilityTabs.length - 1 && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#703593"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden sm:block flex-shrink-0 self-center"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tab content */}
          <div className="hacknex-cap-content">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
              {/* Left - text content */}
              <div className="w-full lg:w-[50%] xl:w-[48%]">
                {/* Tab title */}
                <h3
                  className="mb-6 md:mb-8"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '700',
                    fontSize: 'clamp(24px, 2.8vw, 40px)',
                    lineHeight: 'clamp(30px, 3.2vw, 48px)',
                    color: '#703593',
                  }}
                >
                  {capabilityContent[activeCapTab].title}
                </h3>

                {capabilityContent[activeCapTab].sections.map((section, sIdx) => (
                  <div key={sIdx} className={sIdx > 0 ? 'mt-6 md:mt-8' : ''}>
                    <h4
                      className="mb-3 md:mb-4"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: 'clamp(14px, 1.1vw, 17px)',
                        lineHeight: 'clamp(20px, 1.6vw, 26px)',
                        color: '#3F3F46',
                      }}
                    >
                      {section.heading}
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      {section.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '400',
                            fontSize: 'clamp(13px, 1vw, 15px)',
                            lineHeight: 'clamp(20px, 1.5vw, 24px)',
                            color: '#52525B',
                          }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#52525B] flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right - image */}
              <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center">
                <img
                  src={capabilityContent[activeCapTab].image}
                  alt="Platform capabilities diagram"
                  className="w-full max-w-[794px] aspect-[16/10] object-cover object-top rounded-lg shadow-sm"
                  style={{ transition: 'opacity 0.3s ease-in-out' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Across Corporate & Community Deployments Section ── */}
      <section
        ref={impactSectionRef}
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-white"
        style={{
          backgroundImage: getBackgroundImageUrl('/img/Mask Group 138.png'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      >

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          {/* Title */}
          {/* <h2
            className="text-center mb-10 md:mb-14 lg:mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.2',
              color: '#000000',
              letterSpacing: '0px',
            }}
          >
            Impact Across Corporate &<br />Community Deployments
          </h2> */}

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
            {/* Stat 1: 3× */}
            <div className="text-center hacknex-impact-stat">
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99',
                }}
              >
                {Math.round(animatedNumbers.num1)}×
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  lineHeight: '1.3',
                  color: '#000000',
                  maxWidth: '250px',
                  margin: '0 auto',
                }}
              >
                increase in applied AI<br />problem-solving<br />capability
              </p>
            </div>

            {/* Stat 2: 70% */}
            <div className="text-center hacknex-impact-stat">
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99',
                }}
              >
                {Math.round(animatedNumbers.num2)}%
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  lineHeight: '1.3',
                  color: '#000000',
                  maxWidth: '250px',
                  margin: '0 auto',
                }}
              >
                improvement in<br />participant skill visibility
              </p>
            </div>

            {/* Stat 3: 60% */}
            <div className="text-center hacknex-impact-stat">
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99',
                }}
              >
                {Math.round(animatedNumbers.num3)}%
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  lineHeight: '1.3',
                  color: '#000000',
                  maxWidth: '250px',
                  margin: '0 auto',
                }}
              >
                faster recruiter and<br />sponsor validation of AI<br />talent
              </p>
            </div>

            {/* Stat 4: 2× */}
            <div className="text-center hacknex-impact-stat">
              <div
                className="mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99',
                }}
              >
                {Math.round(animatedNumbers.num4)}×
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  lineHeight: '1.3',
                  color: '#000000',
                  maxWidth: '250px',
                  margin: '0 auto',
                }}
              >
                higher confidence in<br />real-world AI readiness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="w-full py-12 md:py-16 lg:py-20 xl:py-24"
        style={{ backgroundColor: '#FBA93E' }}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: '1.15',
              color: '#0F1114',
              marginBottom: 'clamp(24px, 3vw, 40px)',
            }}
          >
            Compete. Innovate.. Impact...
          </h2>

          {/* Join the Challenge button */}
          <button
            className="px-8 md:px-10 lg:px-12 py-3.5 md:py-4 text-white text-base md:text-lg lg:text-xl font-semibold rounded-lg border-none cursor-pointer shadow-lg"
            style={{
              backgroundColor: '#1F57C7',
              fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(31, 87, 199, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Join the Challenge
          </button>

          {/* Sub-links */}
          <div
            className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-5"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              color: '#0F1114',
            }}
          >
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#0F1114', textDecoration: 'none' }}>
              Partner as a Sponsor
            </a>
            <span style={{ color: '#0F1114' }}>|</span>
            <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#0F1114', textDecoration: 'none' }}>
              Explore More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default AIHackNexPage
