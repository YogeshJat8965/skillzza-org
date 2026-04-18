import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Import images
import heroLaptopImg from '../assets/AI Hacknex/ChatGPT Image Jan 12, 2026, 08_34_27 PM.png'
import heroBgSvg from '../assets/AI Hacknex/Rectangle 11564.svg'

// Built For section icons
import iconCorporate from '../assets/AI Hacknex/office-building_11342251.svg'
import iconInstitutions from '../assets/AI Hacknex/goverment_17213502.svg'
import iconDevelopers from '../assets/AI Hacknex/change_17930856.svg'
import iconCommunity from '../assets/AI Hacknex/initial-public-offering_15749347.svg'

// How AI Hacknex Helps section
import helpsImg from '../assets/AI Hacknex/Group 41601.png'
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
import capabilitiesImg from '../assets/AI Hacknex/Mask Group 123.png'

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
          border: 2px solid transparent;
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
        style={{ minHeight: 'clamp(480px, 60vw, 854px)' }}
      >
        {/* Background gradient (Rectangle 11564) */}
        <div className="absolute inset-0 w-full h-full hacknex-hero-background">
          <img
            src={heroBgSvg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Content wrapper */}
        <div className="relative w-full h-full py-6 md:py-10 lg:py-14 xl:py-16">
          {/* Breadcrumb */}
          <nav className="hacknex-breadcrumb mb-6 md:mb-8 lg:mb-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto">
            <div
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base font-semibold"
              style={{ color: '#71717B', opacity: 0.76, fontFamily: 'Lato, sans-serif' }}
            >
              <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <span>&gt;</span>
              <Link to="/products" className="hover:opacity-70 transition-opacity">Products</Link>
              <span>&gt;</span>
              <span>AI HackNex</span>
            </div>
          </nav>

          {/* Main Content — two-column layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 md:gap-10 lg:gap-4 xl:gap-0 max-w-[1920px] mx-auto">
            {/* ── Left Column: Text + Buttons ── */}
            <div className="w-full lg:w-[50%] xl:w-[45%] space-y-5 md:space-y-6 lg:space-y-7 z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
              {/* Heading */}
              <h1
                className="hacknex-hero-heading"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(30px, 4.2vw, 72px)',
                  lineHeight: 'clamp(36px, 5vw, 82px)',
                  letterSpacing: 'clamp(-1px, -0.12vw, -1.8px)',
                  color: '#0F1114',
                }}
              >
                Connect, create, and{' '}
                <br className="hidden sm:block" />
                conquer challenges{' '}
                <br className="hidden sm:block" />
                together!
              </h1>

              {/* Description paragraph */}
              <div
                className="hacknex-hero-subheading"
                style={{
                  maxWidth: '540px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'clamp(14px, 1.3vw, 18px)',
                  lineHeight: 'clamp(22px, 2vw, 30px)',
                  letterSpacing: '0px',
                  color: '#3F3F46',
                  opacity: 1,
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
              <div className="flex flex-wrap items-center gap-4 md:gap-5 pt-1 md:pt-3 hacknex-hero-buttons">
                {/* Register Now button */}
                <button
                  className="hacknex-register-btn px-6 md:px-8 lg:px-9 py-3 md:py-3.5 lg:py-4 text-white text-sm sm:text-[15px] lg:text-base font-semibold rounded-lg shadow-lg whitespace-nowrap cursor-pointer border-none"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Register Now
                </button>

                {/* Explore Challenges link */}
                <button
                  className="hacknex-explore-link flex items-center gap-1.5 text-sm sm:text-[15px] lg:text-base font-semibold bg-transparent border-none cursor-pointer whitespace-nowrap"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="underline decoration-1 underline-offset-4">Explore Challenges</span>
                  <svg
                    className="hacknex-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Right Column: Laptop Image ── */}
            <div className="w-full lg:w-[50%] xl:w-[55%] relative z-10 flex justify-center lg:justify-end hacknex-hero-image">
              <div className="hacknex-laptop-float w-[85%] sm:w-[75%] md:w-[70%] lg:w-[95%] xl:w-[90%]">
                <img
                  src={heroLaptopImg}
                  alt="AI HackNex Platform Dashboard"
                  className="w-full h-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why AI HackNex Section ── */}
      <section
        ref={whySectionRef}
        className="w-full bg-white py-16 md:py-20 lg:py-24 xl:py-28"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-20 xl:gap-28">
            {/* Left – heading + subtitle */}
            <div className="hacknex-why-left lg:w-[38%] xl:w-[35%] flex-shrink-0">
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(28px, 3.5vw, 48px)',
                  lineHeight: 'clamp(34px, 4vw, 56px)',
                  color: '#0F1114',
                }}
              >
                Why AI HackNex
              </h2>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  lineHeight: 'clamp(20px, 1.8vw, 28px)',
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
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'clamp(14px, 1.15vw, 17px)',
                  lineHeight: 'clamp(24px, 2vw, 30px)',
                  color: '#3F3F46',
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
        className="w-full bg-white pb-16 md:pb-20 lg:pb-24 xl:pb-28"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {/* Section heading */}
          <h2
            className="hacknex-builtfor-heading mb-10 md:mb-12 lg:mb-14"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 'clamp(34px, 4vw, 56px)',
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
                className="hacknex-builtfor-card rounded-lg p-6 md:p-7 lg:p-8 flex flex-col"
                style={{
                  backgroundColor: '#F4F4F5',
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
                <div className="mb-6 mt-auto">
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
        className="w-full bg-white py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {/* Section heading - centered */}
          <div className="text-center mb-3 md:mb-4">
            <h2
              className="hacknex-helps-heading"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                lineHeight: 'clamp(34px, 4vw, 56px)',
                color: '#0F1114',
              }}
            >
              How AI Hacknex Helps
            </h2>
          </div>
          {/* Subtitle - centered */}
          <p
            className="hacknex-helps-subtitle text-center mb-10 md:mb-14 lg:mb-16"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'clamp(14px, 1.2vw, 18px)',
              lineHeight: 'clamp(20px, 1.8vw, 28px)',
              color: '#71717A',
            }}
          >
            From Skill Development to Industry &amp; Community Recognition
          </p>

          {/* Content: Cards left + Image right */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 items-stretch">
            {/* Left — 5 benefit cards in 2-col grid */}
            <div className="w-full lg:w-[48%] xl:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 auto-rows-min">
              {[
                {
                  icon: iconMindset,
                  iconW: 67,
                  iconH: 64,
                  text: 'Validate AI skills through real-world, domain-specific challenges',
                },
                {
                  icon: iconImprovement,
                  iconW: 58,
                  iconH: 64,
                  text: 'Benchmark performance across peers, institutions, and regions',
                },
                {
                  icon: iconPopulation,
                  iconW: 73,
                  iconH: 64,
                  text: 'Gain public, merit-based visibility with industry and ecosystem partners',
                },
                {
                  icon: iconPortfolio,
                  iconW: 58,
                  iconH: 64,
                  text: 'Build execution-backed AI portfolios trusted by recruiters and sponsors',
                },
                {
                  icon: iconIdeas,
                  iconW: 64,
                  iconH: 64,
                  text: 'Channel AI innovation toward business outcomes and societal impact',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="hacknex-helps-card rounded-lg p-5 md:p-6 flex flex-col gap-4"
                  style={{ backgroundColor: '#F4F4F5' }}
                >
                  <img
                    src={card.icon}
                    alt=""
                    style={{ width: card.iconW, height: card.iconH }}
                  />
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '400',
                      fontSize: 'clamp(13px, 1vw, 16px)',
                      lineHeight: 'clamp(20px, 1.5vw, 26px)',
                      color: '#3F3F46',
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — Image with decorative accents */}
            <div className="w-full lg:w-[52%] xl:w-[55%] relative hacknex-helps-image">
              {/* Red accent top-right */}
              <div
                className="absolute top-0 right-0 w-[140px] md:w-[180px] lg:w-[200px] h-[140px] md:h-[180px] lg:h-[200px] rounded-bl-[80px] z-0"
                style={{ backgroundColor: '#C01421' }}
              />
              {/* Orange accent right side */}
              <div
                className="absolute top-[30%] right-0 w-[30px] md:w-[40px] lg:w-[50px] z-0"
                style={{ backgroundColor: '#FBA93E', height: '45%' }}
              />
              {/* Red accent bottom */}
              <div
                className="absolute bottom-0 right-[10%] h-[28px] md:h-[36px] z-0"
                style={{ backgroundColor: '#C01421', width: '55%' }}
              />
              {/* Main image */}
              <img
                src={helpsImg}
                alt="Team collaborating on AI challenges"
                className="relative z-10 w-full h-full object-cover rounded-lg"
                style={{ maxHeight: '705px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Platform Capabilities Section ── */}
      <section
        ref={capabilitiesSectionRef}
        className="w-full bg-[#F9FAFB] py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
      >
        {/* Decorative circle bottom-left */}
        <div
          className="absolute bottom-[-40px] left-[-40px] w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full opacity-20"
          style={{ backgroundColor: '#703593' }}
        />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {/* Heading */}
          <h2
            className="hacknex-cap-heading text-center mb-8 md:mb-12"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 'clamp(34px, 4vw, 56px)',
              color: '#0F1114',
            }}
          >
            Key Platform Capabilities
          </h2>

          {/* Tab navigation */}
          <div className="hacknex-cap-tabs flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12 md:mb-16">
            {capabilityTabs.map((tab, idx) => (
              <React.Fragment key={idx}>
                <button
                  className={`hacknex-cap-tab-btn flex items-center gap-2 md:gap-3 px-4 md:px-5 lg:px-6 py-3 md:py-4 rounded-lg bg-white shadow-sm border-none ${activeCapTab === idx ? 'active-tab' : ''
                    }`}
                  onClick={() => setActiveCapTab(idx)}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <img
                    src={tab.icon}
                    alt=""
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
                  />
                  <span
                    className="text-xs md:text-sm lg:text-[15px] font-semibold text-left whitespace-pre-line"
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
                    className="hidden sm:block flex-shrink-0"
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
              {/* Left — text content */}
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

              {/* Right — image */}
              <div className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center">
                <img
                  src={capabilitiesImg}
                  alt="Platform capabilities diagram"
                  className="w-full max-w-[794px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Across Corporate & Community Deployments Section ── */}
      <section
        ref={impactSectionRef}
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/img/Mask Group 138.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      >
        {/* Overlay for opacity control */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/Mask Group 138.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.58,
            zIndex: 0,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          {/* Title */}
          <h2
            className="text-center mb-16 md:mb-20 lg:mb-24"
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
          </h2>

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
        className="w-full py-20 md:py-28 lg:py-32 xl:py-36"
        style={{ backgroundColor: '#FBA93E' }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center">
          {/* Heading */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(32px, 4.5vw, 64px)',
              lineHeight: '1.15',
              color: '#0F1114',
              marginBottom: 'clamp(32px, 4vw, 56px)',
            }}
          >
            Compete. Innovate.<br />Create Impact.
          </h2>

          {/* Join the Challenge button */}
          <button
            className="px-8 md:px-10 lg:px-12 py-3.5 md:py-4 text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg border-none cursor-pointer shadow-lg"
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
