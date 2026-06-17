import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets'
import dashImg from '../assets/Gemini_Generated_Image_mq3oqmmq3oqmmq3o.png'

function XperiencePlatformPage() {
  const contactUsPath = getRoutePath('/contact-us')
  const [flippedCards, setFlippedCards] = useState([false, false, false, false])
  const [activeTab, setActiveTab] = useState(1) // 0: Learners, 1: Universities, 2: Enterprises, 3: Programs
  const [expandedAccordion, setExpandedAccordion] = useState(null) // Default: No accordion expanded
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animatedNumbers, setAnimatedNumbers] = useState({ num1: 0, num2: 0, num3: 0, num4: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const impactSectionRef = useRef(null)
  const [techStackIndex, setTechStackIndex] = useState(0)
  const platformSectionRef = useRef(null)
  const stakeholderSectionRef = useRef(null)
  const howItHelpsRef = useRef(null)
  const heroSectionRef = useRef(null)
  const capabilitiesSectionRef = useRef(null)
  const philosophySectionRef = useRef(null)
  const worksRef = useRef(null)
  const techStackRef = useRef(null)
  const ctaSectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Hero Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = entry.target.querySelector('.hero-background')
            const heading = entry.target.querySelector('.hero-heading')
            const subheading = entry.target.querySelector('.hero-subheading')
            const buttons = entry.target.querySelector('.hero-buttons')
            const image = entry.target.querySelector('.hero-image')
            if (bg) bg.classList.add('active')
            if (heading) heading.classList.add('active')
            if (subheading) subheading.classList.add('active')
            if (buttons) buttons.classList.add('active')
            if (image) image.classList.add('active')
          } else {
            const bg = entry.target.querySelector('.hero-background')
            const heading = entry.target.querySelector('.hero-heading')
            const subheading = entry.target.querySelector('.hero-subheading')
            const buttons = entry.target.querySelector('.hero-buttons')
            const image = entry.target.querySelector('.hero-image')
            if (bg) bg.classList.remove('active')
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

  // Platform Description Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const leftImage = entry.target.querySelector('.slide-in-left')
            const rightContent = entry.target.querySelector('.slide-in-right')
            if (leftImage) leftImage.classList.add('active')
            if (rightContent) rightContent.classList.add('active')
          } else {
            const leftImage = entry.target.querySelector('.slide-in-left')
            const rightContent = entry.target.querySelector('.slide-in-right')
            if (leftImage) leftImage.classList.remove('active')
            if (rightContent) rightContent.classList.remove('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (platformSectionRef.current) {
      observer.observe(platformSectionRef.current)
    }

    return () => {
      if (platformSectionRef.current) {
        observer.unobserve(platformSectionRef.current)
      }
    }
  }, [])

  // Stakeholder Cards Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.section-heading')
            const cards = entry.target.querySelectorAll('.stakeholder-card')
            if (heading) heading.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
          } else {
            const heading = entry.target.querySelector('.section-heading')
            const cards = entry.target.querySelectorAll('.stakeholder-card')
            if (heading) heading.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
          }
        })
      },
      { threshold: 0.15 }
    )

    if (stakeholderSectionRef.current) {
      observer.observe(stakeholderSectionRef.current)
    }

    return () => {
      if (stakeholderSectionRef.current) {
        observer.unobserve(stakeholderSectionRef.current)
      }
    }
  }, [])

  // How It Helps Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.section-heading')
            const subheading = entry.target.querySelector('.help-subheading')
            const cards = entry.target.querySelectorAll('.help-card')
            if (heading) heading.classList.add('active')
            if (subheading) subheading.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
          } else {
            const heading = entry.target.querySelector('.section-heading')
            const subheading = entry.target.querySelector('.help-subheading')
            const cards = entry.target.querySelectorAll('.help-card')
            if (heading) heading.classList.remove('active')
            if (subheading) subheading.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
          }
        })
      },
      { threshold: 0.15 }
    )

    if (howItHelpsRef.current) {
      observer.observe(howItHelpsRef.current)
    }

    return () => {
      if (howItHelpsRef.current) {
        observer.unobserve(howItHelpsRef.current)
      }
    }
  }, [])

  // Key Platform Capabilities Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.capabilities-heading')
            const image = entry.target.querySelector('.capabilities-image')
            const accordions = entry.target.querySelectorAll('.capability-accordion')
            if (heading) heading.classList.add('active')
            if (image) image.classList.add('active')
            accordions.forEach((accordion) => accordion.classList.add('active'))
          } else {
            const heading = entry.target.querySelector('.capabilities-heading')
            const image = entry.target.querySelector('.capabilities-image')
            const accordions = entry.target.querySelectorAll('.capability-accordion')
            if (heading) heading.classList.remove('active')
            if (image) image.classList.remove('active')
            accordions.forEach((accordion) => accordion.classList.remove('active'))
          }
        })
      },
      { threshold: 0.15 }
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

  // Product Philosophy Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.philosophy-heading')
            const cards = entry.target.querySelectorAll('.philosophy-card')
            const description = entry.target.querySelector('.philosophy-description')
            const arrows = entry.target.querySelector('.philosophy-arrows')
            if (heading) heading.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
            if (description) description.classList.add('active')
            if (arrows) arrows.classList.add('active')
          } else {
            const heading = entry.target.querySelector('.philosophy-heading')
            const cards = entry.target.querySelectorAll('.philosophy-card')
            const description = entry.target.querySelector('.philosophy-description')
            const arrows = entry.target.querySelector('.philosophy-arrows')
            if (heading) heading.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
            if (description) description.classList.remove('active')
            if (arrows) arrows.classList.remove('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (philosophySectionRef.current) {
      observer.observe(philosophySectionRef.current)
    }

    return () => {
      if (philosophySectionRef.current) {
        observer.unobserve(philosophySectionRef.current)
      }
    }
  }, [])

  // How it Works Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.works-heading')
            const subheading = entry.target.querySelector('.works-subheading')
            const description = entry.target.querySelector('.works-description')
            const steps = entry.target.querySelectorAll('.works-step')
            const image = entry.target.querySelector('.works-image')
            const cta = entry.target.querySelector('.works-cta')
            if (heading) heading.classList.add('active')
            if (subheading) subheading.classList.add('active')
            if (description) description.classList.add('active')
            steps.forEach((step) => step.classList.add('active'))
            if (image) image.classList.add('active')
            if (cta) cta.classList.add('active')
          } else {
            const heading = entry.target.querySelector('.works-heading')
            const subheading = entry.target.querySelector('.works-subheading')
            const description = entry.target.querySelector('.works-description')
            const steps = entry.target.querySelectorAll('.works-step')
            const image = entry.target.querySelector('.works-image')
            const cta = entry.target.querySelector('.works-cta')
            if (heading) heading.classList.remove('active')
            if (subheading) subheading.classList.remove('active')
            if (description) description.classList.remove('active')
            steps.forEach((step) => step.classList.remove('active'))
            if (image) image.classList.remove('active')
            if (cta) cta.classList.remove('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (worksRef.current) {
      observer.observe(worksRef.current)
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current)
      }
    }
  }, [])

  // Technology Stack Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.tech-heading')
            const cards = entry.target.querySelectorAll('.tech-card')
            const arrows = entry.target.querySelector('.tech-arrows')
            if (heading) heading.classList.add('active')
            cards.forEach((card) => card.classList.add('active'))
            if (arrows) arrows.classList.add('active')
          } else {
            const heading = entry.target.querySelector('.tech-heading')
            const cards = entry.target.querySelectorAll('.tech-card')
            const arrows = entry.target.querySelector('.tech-arrows')
            if (heading) heading.classList.remove('active')
            cards.forEach((card) => card.classList.remove('active'))
            if (arrows) arrows.classList.remove('active')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (techStackRef.current) {
      observer.observe(techStackRef.current)
    }

    return () => {
      if (techStackRef.current) {
        observer.unobserve(techStackRef.current)
      }
    }
  }, [techStackIndex])

  // Ensure tech cards are visible when index changes
  useEffect(() => {
    if (techStackRef.current) {
      const cards = techStackRef.current.querySelectorAll('.tech-card')
      const heading = techStackRef.current.querySelector('.tech-heading')
      const arrows = techStackRef.current.querySelector('.tech-arrows')

      // Check if section is in viewport
      const rect = techStackRef.current.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

      if (isInViewport) {
        if (heading) heading.classList.add('active')
        cards.forEach((card) => card.classList.add('active'))
        if (arrows) arrows.classList.add('active')
      }
    }
  }, [techStackIndex])

  // Prepare for the Role (CTA) Section Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const heading = entry.target.querySelector('.cta-heading')
            const subheading = entry.target.querySelector('.cta-subheading')
            const image = entry.target.querySelector('.cta-image')
            const buttons = entry.target.querySelectorAll('.cta-button')
            if (heading) heading.classList.add('active')
            if (subheading) subheading.classList.add('active')
            if (image) image.classList.add('active')
            buttons.forEach((button) => button.classList.add('active'))
          } else {
            const heading = entry.target.querySelector('.cta-heading')
            const subheading = entry.target.querySelector('.cta-subheading')
            const image = entry.target.querySelector('.cta-image')
            const buttons = entry.target.querySelectorAll('.cta-button')
            if (heading) heading.classList.remove('active')
            if (subheading) subheading.classList.remove('active')
            if (image) image.classList.remove('active')
            buttons.forEach((button) => button.classList.remove('active'))
          }
        })
      },
      { threshold: 0.15 }
    )

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current)
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current)
      }
    }
  }, [])

  const toggleCard = (index) => {
    setFlippedCards(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  const handleTabClick = (index) => {
    setActiveTab(index)
    // Reset all flipped cards when switching tabs
    setFlippedCards([false, false, false, false])
  }

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index)
  }

  const philosophyCards = [
    { title: 'High-fidelity simulation design', bgColor: '#D9EBFF' },
    { title: 'Domain-expert curated challenges', bgColor: '#D5E8D4' },
    { title: 'Scalable learning infrastructure', bgColor: '#FFE6CC' },
    { title: 'Evidence-based capability validation', bgColor: '#F4E1FF' }
  ]

  const techStackCards = [
    {
      icon: 'management-service_10404416.svg',
      title: 'Cloud-based simulation engine',
      description: 'Real-time scenario processing at scale across roles and domains.'
    },
    {
      icon: 'Group 41599.svg',
      title: 'AI-driven adaptive learning',
      description: 'That personalizes feedback and challenge levels.'
    },
    {
      icon: 'digital-business_17323178.svg',
      title: 'Portfolio intelligence system',
      description: 'that maps learner outputs to job competencies.'
    },
    {
      icon: 'g5073.svg',
      title: 'Integrated assessment framework',
      description: 'Comprehensive evaluation and skill tracking system.'
    },
    {
      icon: 'layer1.svg',
      title: 'Enterprise-grade security',
      description: 'Advanced protection for data and learning resources.'
    }
  ]

  const nextTechStack = () => {
    setTechStackIndex((prev) => {
      const maxIndex = isMobile ? techStackCards.length - 1 : techStackCards.length - 3
      return prev < maxIndex ? prev + 1 : prev
    })
  }

  const prevTechStack = () => {
    setTechStackIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  // Animated numbers on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger stats animation
            const stats = entry.target.querySelectorAll('.impact-stat')
            stats.forEach((stat) => stat.classList.add('active'))

            // Only animate numbers once
            if (hasAnimated) return
            setHasAnimated(true)

            // Animate 3X (from 0 to 3)
            let count1 = 0
            const timer1 = setInterval(() => {
              count1 += 0.1
              if (count1 >= 3) {
                count1 = 3
                clearInterval(timer1)
              }
              setAnimatedNumbers(prev => ({ ...prev, num1: count1 }))
            }, 30)

            // Animate 65% (from 0 to 65)
            let count2 = 0
            const timer2 = setInterval(() => {
              count2 += 2
              if (count2 >= 65) {
                count2 = 65
                clearInterval(timer2)
              }
              setAnimatedNumbers(prev => ({ ...prev, num2: count2 }))
            }, 30)

            // Animate 50% (from 0 to 50)
            let count3 = 0
            const timer3 = setInterval(() => {
              count3 += 2
              if (count3 >= 50) {
                count3 = 50
                clearInterval(timer3)
              }
              setAnimatedNumbers(prev => ({ ...prev, num3: count3 }))
            }, 30)

            // Animate 40% (from 0 to 40)
            let count4 = 0
            const timer4 = setInterval(() => {
              count4 += 2
              if (count4 >= 40) {
                count4 = 40
                clearInterval(timer4)
              }
              setAnimatedNumbers(prev => ({ ...prev, num4: count4 }))
            }, 30)
          } else {
            // Remove animation when leaving viewport
            const stats = entry.target.querySelectorAll('.impact-stat')
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

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1
      // Reset to 0 when reaching the end to create infinite loop
      return next >= philosophyCards.length ? 0 : next
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const previous = prev - 1
      // Jump to last slide when going before 0
      return previous < 0 ? philosophyCards.length - 1 : previous
    })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lato:wght@400&display=swap');
        
        /* Card flip animation */
        .card-inner {
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-front:hover .card-image {
          transform: scale(1.05);
        }
        
        .card-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(31, 87, 199, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(31, 87, 199, 0);
          }
        }
        
        .plus-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .plus-button:hover {
          transform: scale(1.15) rotate(90deg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        @keyframes slideContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .back-content {
          animation: slideContent 0.4s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        @keyframes meshGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-mesh-bg {
          background: linear-gradient(-45deg, #1F57C7, #5B2D8E, #1442A0, #713593);
          background-size: 300% 300%;
          animation: meshGradient 8s ease infinite;
        }
        
        .glass-overlay {
          background: radial-gradient(circle at top right, rgba(255,255,255,0.15), transparent 50%),
                      radial-gradient(circle at bottom left, rgba(255,255,255,0.1), transparent 50%);
        }
        
        /* Section heading repeatable animation */
        .section-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .section-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Subheading animation for How It Helps */
        .help-subheading {
          opacity: 0;
          transform: translateY(25px);
          transition: all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        
        .help-subheading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          background: #1F57C7;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }
        
        .tab-button:hover::after {
          width: 100%;
        }
        
        .tab-button.active::after {
          width: 100%;
        }
        
        .tab-hover-effect {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tab-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .hero-button:active {
          transform: translateY(0);
        }
        
        .accordion-content {
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Hero Section Loading Animations */
        .hero-background {
          opacity: 0;
          transform: scale(0.95);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hero-background.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .hero-heading {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hero-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-subheading {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
        }
        
        .hero-subheading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-buttons {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s;
        }
        
        .hero-buttons.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-image {
          opacity: 0;
          transform: translateX(60px) scale(0.98);
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }
        
        .hero-image.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        /* Platform Description Section Animations */
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .slide-in-left.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-in-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Stakeholder Cards Animation */
        .stakeholder-card {
          opacity: 0;
          transform: translateX(-120px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .stakeholder-card.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .stakeholder-card:nth-child(1) {
          transition-delay: 0.2s;
        }
        
        .stakeholder-card:nth-child(2) {
          transition-delay: 0.5s;
        }
        
        .stakeholder-card:nth-child(3) {
          transition-delay: 0.8s;
        }
        
        .stakeholder-card:nth-child(4) {
          transition-delay: 1.1s;
        }
        
        /* Impact Stats Animation */
        .impact-stat {
          opacity: 0;
          transform: translateX(-70px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .impact-stat.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .impact-stat:nth-child(1) {
          transition-delay: 0.2s;
        }
        
        .impact-stat:nth-child(2) {
          transition-delay: 0.5s;
        }
        
        .impact-stat:nth-child(3) {
          transition-delay: 0.8s;
        }
        
        .impact-stat:nth-child(4) {
          transition-delay: 1.1s;
        }
        
        /* How It Helps Cards Animation */
        .help-card {
          opacity: 0;
          transform: translateY(70px) scale(0.95);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .help-card.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .help-card:nth-child(1) {
          transition-delay: 0.2s;
        }
        
        .help-card:nth-child(2) {
          transition-delay: 0.45s;
        }
        
        .help-card:nth-child(3) {
          transition-delay: 0.7s;
        }
        
        .help-card:nth-child(4) {
          transition-delay: 0.95s;
        }
        
        /* Key Platform Capabilities Animations */
        .capabilities-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .capabilities-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .capabilities-image {
          opacity: 0;
          transform: translateX(-80px) scale(0.98);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        
        .capabilities-image.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        .capability-accordion {
          opacity: 0;
          transform: translateY(-50px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .capability-accordion.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .capability-accordion:nth-child(1) {
          transition-delay: 0.2s;
        }
        
        .capability-accordion:nth-child(2) {
          transition-delay: 0.45s;
        }
        
        .capability-accordion:nth-child(3) {
          transition-delay: 0.7s;
        }
        
        .capability-accordion:nth-child(4) {
          transition-delay: 0.95s;
        }
        
        /* Product Philosophy Section Animations */
        .philosophy-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .philosophy-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Default / Desktop Styles for Philosophy cards (Pristine & Untouched!) */
        .philosophy-track {
          display: flex;
          transition: transform 0.7s ease-in-out;
          gap: 24px !important;
          transform: translateX(calc(-1 * var(--current-slide) * (100% / 3))) !important;
        }
        
        .philosophy-card {
          opacity: 0;
          transform: scale(0.9);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
          width: calc(33.333% - 12px) !important;
          min-width: 380px !important;
          max-width: none !important;
        }
        
        .philosophy-card-inner {
          width: 100% !important;
          height: 210px !important;
        }
        
        .philosophy-card-title {
          font-size: clamp(18px, 1.6vw, 24px) !important;
          line-height: 1.4 !important;
          white-space: normal !important; /* ALLOW natural wrapping to prevent text overflow on desktop */
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        
        /* Mobile-Only Overrides for Philosophy cards (100% Isolated!) */
        @media (max-width: 767px) {
          .philosophy-track {
            gap: 0px !important; /* Zero gap ensures perfect 100% translations on mobile */
            transform: translateX(calc(-1 * var(--current-slide) * 100%)) !important;
          }
          
          .philosophy-card {
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
            padding-left: 12px !important; /* Safe margin from phone screen edges */
            padding-right: 12px !important;
            box-sizing: border-box !important;
          }
          
          .philosophy-card-inner {
            width: 100% !important;
            height: 135px !important; /* Shorter card height as requested */
            padding: 16px !important;
          }
          
          .philosophy-card-title {
            font-size: 17px !important;
            line-height: 1.4 !important;
            white-space: normal !important; /* ALLOW text wrapping on mobile so title is NOT clipped! */
            padding-left: 4px !important;
            padding-right: 4px !important;
          }
        }
        
        .philosophy-card.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .philosophy-card:nth-child(1) {
          transition-delay: 0.3s;
        }
        
        .philosophy-card:nth-child(2) {
          transition-delay: 0.5s;
        }
        
        .philosophy-card:nth-child(3) {
          transition-delay: 0.7s;
        }
        
        .philosophy-description {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s;
        }
        
        .philosophy-description.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Measured Impact Section - Number sizing and premium styling */
        .impact-number {
          font-family: 'DM Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: 42px !important; /* Beautiful impact size on mobile */
          line-height: 1 !important;
          color: #682D99 !important;
          transition: transform 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .impact-number {
            font-size: 64px !important; /* Extremely premium, huge and impactful size on desktop screens */
          }
        }
        
        .philosophy-arrows {
          opacity: 0;
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s;
        }
        
        .philosophy-arrows.active {
          opacity: 1;
        }
        
        /* How it Works Section Animations */
        .works-heading {
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .works-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .works-subheading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        
        .works-subheading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .works-description {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }
        
        .works-description.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .works-step {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .works-step.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .works-step:nth-child(1) {
          transition-delay: 0.7s;
        }
        
        .works-step:nth-child(2) {
          transition-delay: 1s;
        }
        
        .works-step:nth-child(3) {
          transition-delay: 1.3s;
        }
        
        .works-step:nth-child(4) {
          transition-delay: 1.6s;
        }
        
        .works-image {
          opacity: 0;
          transform: translateX(80px) scale(0.98);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1s;
        }
        
        .works-image.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        .works-cta {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.9s;
        }
        
        .works-cta.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        /* Technology Stack Section Animations */
        .tech-heading {
          opacity: 1 !important; /* Instant visibility on mobile ensures no clipping/invisible headings */
          transform: none !important;
          font-family: 'DM Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: clamp(24px, 2.8vw, 52px) !important;
          line-height: 1.2 !important;
          color: #0F1114 !important;
          margin-top: 16px !important;
          margin-bottom: 16px !important;
          text-align: center !important;
        }
        
        @media (min-width: 768px) {
          .tech-heading {
            opacity: 0 !important; /* Keep original transition fade flow on desktop */
            transform: translateY(-30px) !important;
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
            font-size: clamp(24px, 2.8vw, 52px) !important;
            line-height: 1.2 !important;
            margin-top: 28px !important;
            margin-bottom: 24px !important;
          }
          
          .tech-heading.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
        
        .tech-card {
          opacity: 0;
          transform: translateY(70px) scale(0.95);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .tech-card.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .tech-card:nth-child(1) {
          transition-delay: 0.3s;
        }
        
        .tech-card:nth-child(2) {
          transition-delay: 0.5s;
        }
        
        .tech-card:nth-child(3) {
          transition-delay: 0.7s;
        }
        
        .tech-arrows {
          opacity: 0;
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s;
        }
        
        .tech-arrows.active {
          opacity: 1;
        }
        
        /* Prepare for the Role (CTA) Section Animations */
        .cta-heading {
          opacity: 0;
          transform: translateY(-40px);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        
        .cta-heading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-subheading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }
        
        .cta-subheading.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-image {
          opacity: 0;
          transform: scale(0.95);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.7s;
        }
        
        .cta-image.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .cta-button {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cta-button.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .cta-button:nth-child(1) {
          transition-delay: 1s;
        }
        
        .cta-button:nth-child(2) {
          transition-delay: 1.2s;
        }

        /* ── Prepare for the Role Section Layout Classes ── */
        .role-prep-section {
          min-height: 610px;
          padding-top: 48px;
          padding-bottom: 48px;
        }
        .role-prep-heading {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(24px, 2.8vw, 52px);
          line-height: 1.2;
          letter-spacing: -1.6px;
          color: #0F1114;
          margin-bottom: 16px;
        }
        .role-prep-subheading {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: clamp(14px, 1.2vw, 20px);
          line-height: 1.6;
          color: #52525B;
          margin-bottom: 24px;
        }
        .role-prep-image {
          max-width: 880px;
          width: 100%;
          height: auto;
          margin-bottom: 24px;
        }
        .role-prep-buttons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }
        .role-prep-btn {
          min-width: 230px;
          padding: 16px 40px;
          font-size: 20px;
          font-weight: 600;
          border-radius: 8px;
        }

        /* ── Mobile Responsive Fixes ── */
        @media (max-width: 767px) {
          .role-prep-section {
            min-height: auto !important; /* Tight height on mobile! */
            padding-top: 36px !important;
            padding-bottom: 36px !important;
          }
          
          .role-prep-heading {
            font-size: 24px !important; /* Sleek heading on mobile */
            line-height: 1.3 !important;
            letter-spacing: -0.8px !important;
            margin-bottom: 12px !important;
            text-align: center !important;
          }
          
          .role-prep-subheading {
            font-size: 17px !important; /* Beautiful smaller text on mobile */
            line-height: 1.5 !important;
            margin-bottom: 20px !important;
            text-align: center !important;
          }
          
          .role-prep-image {
            max-width: 280px !important; /* Extremely elegant smaller image on mobile to save vertical space! */
            margin-bottom: 24px !important;
          }
          
          .role-prep-buttons {
            flex-direction: column !important; /* Stack buttons cleanly on mobile */
            gap: 12px !important; /* Elegant spacing between buttons */
            width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          .role-prep-btn {
            width: 100% !important; /* Full-width buttons on mobile for standard premium UI */
            max-width: 280px !important;
            min-width: 0 !important;
            padding: 12px 24px !important; /* Tighter padding for mobile buttons */
            font-size: 17px !important;
            border-radius: 8px !important;
          }

          .hero-heading {
            font-size: clamp(22px, 6vw, 30px) !important;
            line-height: 1.2 !important;
          }
          .section-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
            line-height: 1.22 !important;
          }
          .capabilities-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
          }
          .philosophy-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
          }
          .works-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
          }
          .tech-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
          }
          .cta-heading {
            font-size: clamp(20px, 5.5vw, 28px) !important;
          }
          
          /* How it Works Mobile Adjustments */
          .works-step {
            gap: 12px !important;
          }
          .works-step-indicator {
            width: 48px !important;
            height: 48px !important;
          }
          .works-step-title {
            white-space: normal !important;
            font-size: 18px !important;
            line-height: 1.3 !important;
            text-align: left !important;
          }
          .works-step-card {
            padding: 12px 16px !important;
            min-height: auto !important;
          }
          .works-description {
            margin-left: 16px !important;
            margin-right: 16px !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section ref={heroSectionRef} className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px] overflow-hidden" style={{ backgroundColor: '#E0F2FE' }}>
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full hero-background">
            <img
              src={getAssetPath('/img/Group 41584.png')}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dotted Pattern Overlay - Right Side */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 md:opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #1F57C7 1px, transparent 1px)',
              backgroundSize: '15px 15px',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.3), transparent)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.3), transparent)'
            }}
          />

          <div className="relative lg:static w-full py-6 md:py-8 lg:py-12 xl:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="relative z-20 pt-3 pb-2 md:pt-4 md:pb-3 px-0 max-w-[1360px] mx-auto w-full text-left mb-4">
              <div
                className="flex items-center justify-start gap-1.5 sm:gap-2 text-[16px] md:text-[20px] font-medium w-full"
                style={{ color: '#71717A', fontFamily: "'Lato', sans-serif" }}
              >
                <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: '#71717A' }}>Home</Link>
                <span>&gt;</span>
                <span style={{ color: '#18181B', fontWeight: 500 }}>Talent Twin</span>
              </div>
            </nav>

            {/* Main Content - Responsive Layout */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start xl:items-center gap-6 md:gap-8 lg:gap-4 xl:gap-0 lg:static">
              {/* Left Content */}
              <div className="w-full lg:w-[50%] xl:w-[45%] space-y-4 md:space-y-6 lg:space-y-6 xl:space-y-8 z-10 pr-0 lg:pr-8 xl:pr-12">
                {/* Heading */}
                <h1
                  className="hero-heading product-heading"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '700',
                    fontSize: 'clamp(24px, 2.8vw, 52px)',
                    lineHeight: '1.2',
                    letterSpacing: 'clamp(-1.5px, -0.15vw, -2.1px)',
                    color: '#0F1114'
                  }}
                >
                  Experience the Real World<br /> 
                  <span style={{ fontWeight: '700' }}>Before you enter it . . </span>
                </h1> 

                {/* Subheading */} 
                <div
                  className="hero-subheading"
                  style={{
                    maxWidth: '100%',
                    textAlign: 'left',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? '16px' : 'clamp(14px, 1.2vw, 20px)',
                    lineHeight: '1.6',
                    letterSpacing: '0px',
                    color: '#52525B',
                    opacity: 1
                  }}
                >
                  <p className="mb-3 md:mb-4">
                    The virtual internship platform that transforms learners into job-ready professionals through immersive, industry-aligned simulations.
                  </p>
                  <p>
                    Stop learning about work. Start doing the work, in a risk-free environment that builds real capability.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-row flex-nowrap items-center gap-2 md:gap-4 pt-2 md:pt-4 hero-buttons">
                  {/* Explore Simulations Button */}
                  <a
                    href="https://portal.skillzza.com/internships"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button px-3 sm:px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-lg border-2 whitespace-nowrap flex-1 text-center"
                    style={{ borderColor: '#52525B', color: '#52525B', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Explore Simulations
                  </a>

                  {/* Start Free Virtual Internship Button */}
                  <button
                    className="hero-button px-3 sm:px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-lg whitespace-nowrap flex-1 text-center"
                    style={{ backgroundColor: '#1F57C7' }}
                  >
                    Start Free Virtual Internship
                  </button>

                  {/* Book Demo Link */}
                  {/* <button
                    onClick={() => { window.location.href = contactUsPath }}
                    className="hero-button text-sm sm:text-base lg:text-lg font-semibold underline whitespace-nowrap pt-[2px]"
                    style={{ color: '#52525B' }}
                  >
                    Book Demo
                  </button> */}
                </div>
              </div>

              {/* Right Image - Responsive positioning */}
              <div className="w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[46%] xl:w-[50%] 2xl:w-[45%] flex justify-end relative z-10 mt-8 lg:mt-0 lg:pr-0 pl-4 sm:pl-8 lg:pl-0">
                <img
                  src={getAssetPath('/img/young-female-teacher-headphones-having-video-conference-call-with-teenage-girl-student-using-laptop-home-online-lesson-elearning-distance-remote-class.png')}
                  alt="Virtual Internship Platform"
                  className="w-full h-auto max-h-[350px] lg:max-h-[500px] xl:max-h-[600px] object-cover object-left shadow-2xl rounded-l-xl lg:rounded-l-2xl hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Platform Description Section */}
        <section ref={platformSectionRef} className="w-full bg-white py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Left Image - No left padding */}
              <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0 slide-in-left">
                <img
                  src={getAssetPath('/img/Image 408.png')}
                  alt="Talent Twin Learning"
                  className="w-full h-auto"
                  style={{ maxHeight: '460px', maxWidth: '560px' }}
                />
              </div>

              {/* Right Text Content */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 lg:px-0 lg:pr-16 xl:pr-24 2xl:pr-32 slide-in-right">
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? '16px' : 'clamp(14px, 1.2vw, 20px)',
                    lineHeight: '1.6',
                    letterSpacing: '0px',
                    color: '#52525B',
                    textAlign: 'left'
                  }}
                >
                  The Talent Twin is an immersive experiential learning ecosystem designed to prepare individuals for real-world professional roles through high-fidelity, job-aligned simulations.
                </p>

                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 400,
                    fontSize: isMobile ? '16px' : 'clamp(14px, 1.2vw, 20px)',
                    lineHeight: '1.6',
                    letterSpacing: '0px',
                    color: '#52525B',
                    textAlign: 'left'
                  }}
                >
                  By replicating authentic workplace environments, decision pressures, and execution challenges, the platform enables learners to develop practical competence, adaptive thinking, and execution confidence-long before they step into the workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Section */}
        <section ref={stakeholderSectionRef} className="w-full bg-[#F9FAFB] py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2
              className="section-heading text-center mt-8 mb-4 md:mb-6 lg:mb-8"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                color: '#0F1114'
              }}
            >
              Built for every Stakeholder 
            </h2>



            {/* Cards Flex Accordion */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-4 md:gap-6 lg:gap-4 lg:h-[480px]">
              {[
                {
                  title: 'Learners & Early Professionals',
                  image: 'Group 41585.png',
                  content: 'Gain real job experience and confidence before employment'
                },
                {
                  title: 'Universities & Colleges',
                  image: 'Group 41587.png',
                  content: 'Improve graduate employability with measurable readiness outcomes'
                },
                {
                  title: 'Enterprises & Corporates',
                  image: 'Group 41588.png',
                  content: 'Accelerate role readiness, onboarding, and internal mobility'
                },
                {
                  title: 'Skilling & Workforce Programs',
                  image: 'Group 41589.png',
                  content: 'Deliver outcome-driven, role-aligned experiential learning at scale'
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className="card-container stakeholder-card relative group flex-1 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] lg:hover:flex-[2.1]"
                  style={{
                    perspective: '1000px',
                    height: '480px',
                    width: '100%',
                    margin: '0 auto'
                  }}
                >
                  <div
                    className="card-inner relative w-full h-full"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className="card-front absolute inset-0 overflow-hidden rounded-lg cursor-pointer"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        boxShadow: flippedCards[index] ? 'none' : '0 10px 40px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s ease'
                      }}
                    >
                      {/* Card Image */}
                      <img
                        src={getAssetPath(`/img/${card.image}`)}
                        alt={card.title}
                        className="card-image w-full h-full object-cover grayscale brightness-75 transition-all duration-[600ms] lg:group-hover:grayscale-0 lg:group-hover:brightness-100"
                      />

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
                        style={{ transition: 'background 0.3s ease' }}
                      />

                      {/* Title */}
                      <div className="absolute top-6 left-6 right-6">
                        <h3
                          className="text-white"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '500',
                            fontSize: 'clamp(16px, 1.5vw, 20px)',
                            lineHeight: '1.3',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      {/* Plus Icon */}
                      <div
                        className="absolute bottom-6 right-6"
                        onClick={() => toggleCard(index)}
                      >
                        <div
                          className="plus-button w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <span
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontWeight: '200',
                              fontSize: '46px',
                              lineHeight: '25px',
                              color: '#52525B'
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-lg cursor-pointer animated-mesh-bg p-8 flex flex-col justify-center items-center"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        boxShadow: '0 20px 60px rgba(91, 45, 142, 0.4)'
                      }}
                      onClick={() => toggleCard(index)}
                    >
                      <div className="absolute inset-0 glass-overlay pointer-events-none" />

                      <p
                        className={`back-content relative z-10 text-white text-center ${flippedCards[index] ? '' : ''}`}
                        style={{
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: '500',
                          fontSize: '20px',
                          lineHeight: '1.6'
                        }}
                      >
                        {card.content}
                      </p>

                      {/* Close Icon */}
                      <div
                        className="absolute bottom-6 right-6"
                      >
                        <div
                          className="plus-button w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center cursor-pointer"
                          style={{ transform: 'rotate(45deg)' }}
                        >
                          <span
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontWeight: '200',
                              fontSize: '46px',
                              lineHeight: '25px',
                              color: '#52525B'
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Helps Section */}
        <section ref={howItHelpsRef} className="w-full bg-white py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <h2
              className="section-heading text-center mb-4 mt-10 md:mb-6"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                color: '#0F1114',
                textTransform: 'capitalize', 
                letterSpacing: '0px'
              }}
            >
              From Learning To Professional Readiness
            </h2>

            {/* Subheading */}
            <p
              className="text-center mb-6 md:mb-8 lg:mb-10 help-subheading"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.5',
                color: '#52525B'
              }}
            >
              The Talent Twin enables individuals and organizations to
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4">
              {[
                {
                  icon: 'XMLID_927_.svg',
                  title: 'Build hands-on role competence',
                  description: 'through real job simulations that mirror actual workplace responsibilities and workflows.'
                },
                {
                  icon: 'layer1.svg',
                  title: 'Develop decision-making confidence',
                  description: 'under realistic constraints, time pressures, and competing priorities.'
                },
                {
                  icon: 'framework_16761123.svg',
                  title: 'Translate theoretical knowledge',
                  description: 'into applied workplace skills through contextualized, scenario-based practice.'
                },
                {
                  icon: 'g5073.svg',
                  title: 'Produce validated, role-mapped portfolios',
                  description: 'that demonstrate tangible capability to employers.'
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-[#F4F4F5] rounded-lg p-5 md:p-6 flex flex-col items-center text-center transition-all duration-300 border border-gray-300 hover:border-gray-400 hover:-translate-y-2 hover:shadow-xl hover:bg-white help-card"
                  style={{
                    minHeight: '220px',
                    width: '100%'
                  }}
                >
                  {/* Icon */}
                  <img
                    src={getAssetPath(`/img/${card.icon}`)}
                    alt={card.title}
                    className="mb-3 md:mb-4"
                    style={{
                      width: '60px',
                      height: '60px'
                    }}
                  />

                  {/* Card Title */}
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '800',
                      fontSize: 'clamp(20px, 1.8vw, 20px)',
                      lineHeight: 'clamp(28px, 2.2vw, 34px)',
                      letterSpacing: '-0.5px',
                      color: '#000000'
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: '400',
                      fontSize: '17px',
                      lineHeight: 'clamp(24px, 1.8vw, 28px)',
                      letterSpacing: '-0.3px',
                      color: '#000000'
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Platform Capabilities Section */}
        <section ref={capabilitiesSectionRef} className="w-full bg-white py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading - Full Width */}
            <h2
              className="mb-4 md:mb-5 lg:mb-6 mt-10 capabilities-heading lg:ml-8 xl:ml-10"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                color: '#0F1114',
                textTransform: 'capitalize',
                letterSpacing: '0px'
              }}
            >
              Key Platform Capabilities
            </h2>

            {/* Content: Image Left + Accordion Right */}
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6 xl:gap-7">
              {/* Left Side - Image */}
              <div className="w-full lg:w-[55%] xl:w-[58%] capabilities-image">
                <img
                  src={getAssetPath('/img/Group 41361.png')}
                  alt="Platform Dashboard"
                  className="w-full h-auto"
                  style={{ maxWidth: '650px', margin: '0 auto' }}
                />
              </div>

              {/* Right Side - Accordion Cards */}
              <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col gap-3 self-center">
                {[
                  {
                    title: 'Scenario-Calibrated Simulations',
                    content: 'Simulations modeled on real industry workflows, timelines, and decision checkpoints.'
                  },
                  {
                    title: 'Validated Role-Mapped Portfolios',
                    content: 'Learners graduate with tangible proof of capability aligned to employer expectations.'
                  },
                  {
                    title: 'Competency Acceleration Framework',
                    content: 'Integrated development of technical acumen, critical thinking, and communication.'
                  },
                  {
                    title: 'Real-Time Adaptive Feedback',
                    content: 'Dynamic responses replicate real-world consequences of professional decisions.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#C9DBFF] rounded-lg transition-all duration-300 capability-accordion"
                    style={{ minHeight: '96px' }}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 flex justify-between items-center text-left hover:bg-[#B8CDFF] transition-colors rounded-lg"
                    >
                      <h3
                        className="font-medium text-[#0F1114] text-[18px] md:text-[clamp(18px,1.6vw,24px)] leading-tight tracking-[-0.7px]"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {item.title}
                      </h3>

                      {/* Chevron Icon */}
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ml-4 text-[#0F1114] ${expandedAccordion === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Answer Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${expandedAccordion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <p
                        className="px-5 pb-5 font-medium text-[#52525B] text-[18px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Product Philosophy Section */}
        <section ref={philosophySectionRef} className="w-full bg-white py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <h2
              className="philosophy-heading text-center mt-10 mb-6 md:mb-8"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                color: '#0F1114',
                textTransform: 'capitalize',
                letterSpacing: '0px'
              }}
            >
              Our Product Philosophy
            </h2>

            {/* Cards Grid */}
            <div className="mb-4 md:mb-6">
              <div className="overflow-hidden">
                <div
                  className="philosophy-track flex transition-transform duration-700 ease-in-out gap-4 md:gap-6"
                  style={{
                    '--current-slide': currentSlide,
                    transform: `translateX(-${currentSlide * (100 / 3)}%)`
                  }}
                >
                  {[...philosophyCards, ...philosophyCards].map((card, index) => (
                    <div
                      key={index}
                      className="philosophy-card flex-shrink-0"
                    >
                      <div
                        className="rounded-lg flex items-center justify-center p-6 md:p-8 philosophy-card-inner border border-gray-300"
                        style={{
                          backgroundColor: card.bgColor,
                          opacity: 0.73
                        }}
                      >
                        <h3
                          className="philosophy-card-title px-6 md:px-8"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '600',
                            letterSpacing: '-0.7px',
                            color: '#000000',
                            textAlign: 'center'
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description and Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Description */}
              <p
                className="philosophy-description max-w-2xl"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: '400',
                  fontSize: '17px',
                  lineHeight: '1.6',
                  color: '#52525B'
                }}
              >
                Every experience is engineered to reflect the <span style={{ fontWeight: '700' }}>complexity, ambiguity, and performance pressure of real jobs</span>, ensuring relevance and measurable readiness.
              </p>

              {/* Navigation Arrows */}
              <div className="philosophy-arrows flex gap-4 flex-shrink-0">
                <button
                  onClick={prevSlide}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Previous slide"
                >
                  <img
                    src={getAssetPath('/img/Group 41596.svg')}
                    alt="Previous"
                    style={{ width: '48px', height: '48px' }}
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Next slide"
                >
                  <img
                    src={getAssetPath('/img/Group 41595.svg')}
                    alt="Next"
                    style={{ width: '48px', height: '48px' }}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section ref={worksRef} className="w-full bg-white py-2 md:py-4 lg:py-4 xl:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <h2
              className="works-heading text-center mb-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                letterSpacing: '-1.6px',
                color: '#0F1114'
              }}
            >
              How it Works
            </h2>

            {/* Subheading */}
            <p
              className="works-subheading text-center mb-6 md:mb-8"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.5',
                color: '#52525B'
              }}
            >
              Simulation-Led, Outcome-Driven Learning
            </p>

            {/* Steps Description */}
            {/* <p
              className="works-description mb-6 md:mb-8 ml-8 md:ml-12 lg:ml-16"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: '400',
                fontSize: '17px',
                lineHeight: '1.5',
                color: '#000000'
              }}
            >
              :4 steps to real-world readiness 
            </p> */}

            {/* Timeline and Image Container */}
            <div className="flex flex-col lg:flex-row items-start gap-7 lg:gap-10">
              {/* Left Side - Timeline */}
              <div className="w-full lg:w-[50%] relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-10 lg:left-12 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" style={{ height: 'calc(100% - 80px)' }}></div>

                {/* Steps */}
                <div className="space-y-6 md:space-y-10">
                  {[
                    {
                      number: '1',
                      title: 'Role-Based Simulation Entry',
                      content: 'Learners are embedded into domain-specific job simulations designed around real workflows.'
                    },
                    {
                      number: '2',
                      title: 'Real-Time Decision Execution',
                      content: 'Participants respond to live scenarios, constraints, and variables that mirror actual workplace dynamics.'
                    },
                    {
                      number: '3',
                      title: 'Adaptive Feedback & Evaluation',
                      content: 'Decisions trigger outcomes, feedback loops, and performance insights-replicating real professional consequences.'
                    },
                    {
                      number: '4',
                      title: 'Portfolio & Readiness Validation',
                      content: 'Simulation outputs are converted into evidence-backed portfolios mapped directly to job roles and employer KPIs.'
                    }
                  ].map((step, index) => (
                    <div key={index} className="works-step flex items-start gap-4 md:gap-6 relative group">
                      {/* Circle Indicator with Hover Effect - Larger Size */}
                      <div className="relative flex-shrink-0 z-10">
                        {/* Default state: Group 41598 */}
                        <img
                          src={getAssetPath('/img/Group 41598.svg')}
                          alt={`Step ${step.number}`}
                          className="works-step-indicator w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-opacity duration-300 group-hover:opacity-0"
                        />
                        {/* Hover state: Group 41597 */}
                        <img
                          src={getAssetPath('/img/Group 41597.svg')}
                          alt={`Step ${step.number} Active`}
                          className="works-step-indicator w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      </div>

                      {/* Card */}
                      <div
                        className="works-step-card flex-1 rounded-lg transition-all duration-300 flex flex-col justify-center bg-[#E6D6EF] group-hover:bg-[#F8F8FF] group-hover:justify-start"
                        style={{
                          maxWidth: '600px',
                          minHeight: '80px',
                          border: '1px solid #FFFFFF',
                          borderRadius: '8px',
                          padding: '14px 20px'
                        }}
                      >
                        {/* Title - Always Visible */}
                        <h3
                          className="works-step-title transition-all duration-300 text-center group-hover:text-left"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '600',
                            fontSize: 'clamp(16px, 1.4vw, 19px)',
                            lineHeight: '28px',
                            color: '#682D99'
                          }}
                        >
                          {step.number}. {step.title}
                        </h3>

                        {/* Content - Visible on Hover */}
                        <p
                          className="mt-3 transition-all duration-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40"
                          style={{
                            fontFamily: 'Lato, sans-serif',
                            fontWeight: '400',
                            fontSize: '17px',
                            lineHeight: '30px',
                            color: '#52525B'
                          }}
                        >
                          {step.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="works-image w-full lg:w-[60%] flex items-center justify-center lg:justify-end pt-4 lg:-mr-16 xl:-mr-28">
                <img
                  src={dashImg}
                  alt="How it Works Dashboard"
                  className="w-full h-auto lg:w-auto object-contain"
                  style={{ maxWidth: '850px', width: '100%', height: 'auto', opacity: 1 }}
                />
              </div>
            </div>

            {/* CTA Button */}
            {/* <div className="works-cta flex justify-center mt-12 md:mt-16">
              <a
                href="https://portal.skillzza.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button px-8 md:px-10 py-3 md:py-4 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg"
                style={{ backgroundColor: '#1F57C7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Register for Free Internship
              </a>
            </div> */}
          </div>
        </section>

        {/* Measured Impact Section */}
        <section
          ref={impactSectionRef}
          className="relative py-2 md:py-4 lg:py-4 overflow-hidden"
          style={{
            backgroundImage: getBackgroundImageUrl('/img/Mask Group 138.png'),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1
          }}
        >
          {/* Overlay for opacity control */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: getBackgroundImageUrl('/img/Mask Group 138.png'),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.58,
              zIndex: 0
            }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Title */}
            <h2
              className="text-center mt-10 mb-6 md:mb-8 lg:mb-10"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                fontSize: 'clamp(24px, 2.8vw, 52px)',
                lineHeight: '1.2',
                color: '#0F1114',
                letterSpacing: '0px'
              }}
            >
              Measured impact on<br />readiness and performance
            </h2>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
              {/* Stat 1: 3X */}
              <div className="text-center impact-stat">
                <div className="impact-number mb-4">
                  {Math.round(animatedNumbers.num1)}X
                </div>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: '400',
                    fontSize: '17px',
                    lineHeight: '1.3',
                    color: '#000000',
                    maxWidth: '250px',
                    margin: '0 auto'
                  }}
                >
                  improvement in job<br />readiness scores
                </p>
              </div>

              {/* Stat 2: 65% */}
              <div className="text-center impact-stat">
                <div className="impact-number mb-4">
                  {Math.round(animatedNumbers.num2)}%
                </div>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: '400',
                    fontSize: '17px',
                    lineHeight: '1.3',
                    color: '#000000',
                    maxWidth: '250px',
                    margin: '0 auto'
                  }}
                >
                  faster transition to workplace<br />productivity
                </p>
              </div>

              {/* Stat 3: 50% */}
              <div className="text-center impact-stat">
                <div className="impact-number mb-4">
                  {Math.round(animatedNumbers.num3)}%
                </div>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: '400',
                    fontSize: '17px',
                    lineHeight: '1.3',
                    color: '#000000',
                    maxWidth: '250px',
                    margin: '0 auto'
                  }}
                >
                  higher placement confidence<br />for institutions
                </p>
              </div>

              {/* Stat 4: 40% */}
              <div className="text-center impact-stat">
                <div className="impact-number mb-4">
                  {Math.round(animatedNumbers.num4)}%
                </div>
                <p
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: '400',
                    fontSize: '17px',
                    lineHeight: '1.3',
                    color: '#000000',
                    maxWidth: '250px',
                    margin: '0 auto'
                  }}
                >
                  reduction in early-career<br />performance gaps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section ref={techStackRef} className="py-2 md:py-4 lg:py-4 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center text-center mb-6 md:mb-8">
              <h2 className="tech-heading mb-2 whitespace-nowrap">
                Our Technology Stack <br />
                Built on Scalable, Secure, Intelligence-Driven Architecture
              </h2>

            </div>

            {/* Cards Container */}
            <div className="relative overflow-hidden mb-4">
              {isMobile ? (
                /* Mobile: Horizontal Slider - One card at a time */
                <div
                  className="tech-track flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${techStackIndex * 100}%)`,
                    gap: '0px'
                  }}
                >
                  {techStackCards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-3"
                      style={{ boxSizing: 'border-box' }}
                    >
                      <div
                        className="tech-card p-6 rounded-lg border border-gray-300 transition-colors duration-300 hover:border-gray-400"
                        style={{
                          background: '#F4F4F5',
                          minHeight: '220px',
                          height: 'auto'
                        }}
                      >
                        {/* Icon */}
                        <div className="mb-4">
                          <img
                            src={getAssetPath(`/img/${card.icon}`)}
                            alt={card.title}
                            className="w-auto h-auto"
                            style={{
                              width: '60px',
                              height: '60px',
                              opacity: 1
                            }}
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-2"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '26px',
                            letterSpacing: '-0.5px',
                            color: '#000000',
                            textAlign: 'left'
                          }}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontFamily: 'Lato, sans-serif',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '20px',
                            letterSpacing: '-0.3px',
                            color: '#52525B',
                            textAlign: 'left'
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Desktop: Original sliding grid (Perfect & Untouched!) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {[0, 1, 2].map((offset) => {
                    const actualIndex = (techStackIndex + offset) % techStackCards.length
                    const card = techStackCards[actualIndex]

                    return (
                      <div
                        key={`${techStackIndex}-${offset}`}
                        className="tech-card p-6 rounded-lg border border-gray-300 transition-colors duration-300 hover:border-gray-400"
                        style={{
                          background: '#F4F4F5',
                          minHeight: '300px'
                        }}
                      >
                        {/* Icon */}
                        <div className="mb-6">
                          <img
                            src={getAssetPath(`/img/${card.icon}`)}
                            alt={card.title}
                            className="w-auto h-auto"
                            style={{
                              width: offset === 0 ? '86px' : offset === 1 ? '94px' : '120px',
                              height: offset === 0 ? '92px' : offset === 1 ? '94px' : '90px',
                              opacity: 1
                            }}
                          />
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-3"
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: '600',
                            fontSize: 'clamp(20px, 1.8vw, 24px)',
                            lineHeight: 'clamp(28px, 2.4vw, 32px)',
                            letterSpacing: '-0.5px',
                            color: '#000000',
                            textAlign: 'left',
                            marginTop: '6px'
                          }}
                        >
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontFamily: 'Lato, sans-serif',
                            fontWeight: '400',
                            fontSize: '17px',
                            lineHeight: 'clamp(24px, 2vw, 28px)',
                            letterSpacing: '-0.3px',
                            color: '#52525B',
                            textAlign: 'left',
                            marginTop: '2px'
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            <div className="tech-arrows flex justify-end gap-4">
              <button
                onClick={prevTechStack}
                disabled={techStackIndex === 0}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                aria-label="Previous"
              >
                <img
                  src={getAssetPath('/img/Group 41596.svg')}
                  alt="Previous"
                  className="w-full h-full"
                />
              </button>
              <button
                onClick={nextTechStack}
                disabled={techStackIndex >= (isMobile ? techStackCards.length - 1 : techStackCards.length - 3)}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                aria-label="Next"
              >
                <img
                  src={getAssetPath('/img/Group 41595.svg')}
                  alt="Next"
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Prepare for the Role Section */}
        <section
          ref={ctaSectionRef}
          className="role-prep-section relative overflow-hidden"
          style={{
            backgroundImage: getBackgroundImageUrl('/img/Group 41600.png'),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Heading */}
            <h2 className="cta-heading role-prep-heading text-center mb-6">
              Prepare for the role - before you are hired
            </h2>

            {/* Subheading */}
            <p className="cta-subheading role-prep-subheading text-center mb-6 md:mb-8">
              Experience builds confidence. Simulation builds capability.
            </p>

            {/* Center Image */}
            <div className="cta-image flex justify-center mb-5 md:mb-6">
              <img
                src={getAssetPath('/img/Mask Group 122.png')}
                alt="Platform Dashboard"
                className="role-prep-image h-auto"
              />
            </div>

            {/* Buttons */}
            <div className="role-prep-buttons flex justify-center items-center">
              <a
                href="https://portal.skillzza.com/internships"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button role-prep-btn text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                style={{
                  backgroundColor: '#1F57C7',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Explore Simulations
              </a>
              <a
                href="https://skillzza-org.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button role-prep-btn text-black font-semibold border-2 hover:bg-black hover:text-white transition-all duration-300"
                style={{
                  borderColor: '#000000',
                  backgroundColor: 'transparent',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Request a Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default XperiencePlatformPage
