import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function XperiencePlatformPage() {
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
      const maxIndex = techStackCards.length - 3
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        
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
        
        .philosophy-card {
          opacity: 0;
          transform: scale(0.9);
          transition: all 1.3s cubic-bezier(0.16, 1, 0.3, 1);
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
          opacity: 0;
          transform: translateY(-30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .tech-heading.active {
          opacity: 1;
          transform: translateY(0);
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
      `}</style>
      
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px] overflow-hidden" style={{ backgroundColor: '#E0F2FE' }}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full hero-background">
          <img 
            src="/img/Group 41584.png" 
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

        <div className="relative w-full py-6 md:py-8 lg:py-12 xl:py-16">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8 lg:mb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px] mx-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base" style={{ color: '#71717A' }}>
              <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <span>&gt;</span>
              <Link to="/products" className="hover:opacity-70 transition-opacity">Products</Link>
              <span>&gt;</span>
              <span className="font-medium">Xperience Platform</span>
            </div>
          </nav>

          {/* Main Content - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start xl:items-center gap-6 md:gap-8 lg:gap-4 xl:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[55%] xl:w-1/2 space-y-4 md:space-y-6 lg:space-y-6 xl:space-y-8 z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
              {/* Heading */}
              <h1 
                className="hero-heading"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(28px, 4vw, 84px)',
                  lineHeight: 'clamp(34px, 4.5vw, 90px)',
                  letterSpacing: 'clamp(-1.5px, -0.15vw, -2.1px)',
                  color: '#0F1114'
                }}
              >
                Experience <br className="sm:hidden" />the <span style={{ fontWeight: '700' }}>Real World</span>—<br className="hidden sm:block" />Before You <br className="sm:hidden" />Enter It
              </h1>

              {/* Subheading */}
              <div 
                className="hero-subheading"
                style={{ 
                  maxWidth: '100%',
                  textAlign: 'left',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(16px, 1.8vw, 24px)',
                  lineHeight: 'clamp(24px, 2.5vw, 36px)',
                  letterSpacing: '0px',
                  color: '#71717A',
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
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2 md:pt-4 hero-buttons">
                {/* Start Free Virtual Internship Button */}
                <button
                  className="hero-button px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 text-white text-xs sm:text-sm lg:text-base font-semibold rounded-lg shadow-lg whitespace-nowrap"
                  style={{ backgroundColor: '#1F57C7' }}
                >
                  Start Free Virtual Internship
                </button>

                {/* Explore Simulations Button */}
                <button
                  className="hero-button px-5 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold rounded-lg border-2 whitespace-nowrap"
                  style={{ borderColor: '#71717A', color: '#71717A' }}
                >
                  Explore Simulations
                </button>

                {/* Book Demo Link */}
                <button
                  className="hero-button text-xs sm:text-sm lg:text-base font-semibold underline whitespace-nowrap"
                  style={{ color: '#71717A' }}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Image - Responsive positioning */}
            <div className="w-full lg:w-[45%] xl:w-1/2 relative z-10 lg:pr-0">
              <img 
                src="/img/young-female-teacher-headphones-having-video-conference-call-with-teenage-girl-student-using-laptop-home-online-lesson-elearning-distance-remote-class.png" 
                alt="Virtual Internship Platform"
                className="w-full h-auto shadow-xl md:shadow-2xl rounded-lg lg:rounded-l-lg lg:rounded-r-none hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Description Section */}
      <section ref={platformSectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Image - No left padding */}
            <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0 slide-in-left">
              <img 
                src="/img/Image 408.png" 
                alt="Xperience Platform Learning" 
                className="w-full h-auto"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 lg:px-0 lg:pr-16 xl:pr-24 2xl:pr-32 slide-in-right">
              <p 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(18px, 2vw, 30px)',
                  lineHeight: 'clamp(28px, 3vw, 50px)',
                  letterSpacing: '0px',
                  color: '#71717A',
                  textAlign: 'left'
                }}
              >
                The Xperience Platform is an immersive experiential learning ecosystem designed to prepare individuals for real-world professional roles through high-fidelity, job-aligned simulations.
              </p>

              <p 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '500',
                  fontSize: 'clamp(18px, 2vw, 30px)',
                  lineHeight: 'clamp(28px, 3vw, 50px)',
                  letterSpacing: '0px',
                  color: '#71717A',
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
      <section ref={stakeholderSectionRef} className="w-full bg-[#F9FAFB] py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {/* Heading */}
          <h2 
            className="section-heading text-center mb-8 md:mb-12 lg:mb-16"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500',
              fontSize: 'clamp(24px, 3vw, 48px)',
              lineHeight: 'clamp(32px, 4vw, 60px)',
              color: '#000000'
            }}
          >
            Built for every stakeholder in<br className="sm:hidden" /> workforce readiness
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex flex-wrap justify-center gap-0 bg-[#F3F4F6] rounded-lg p-1">
              {['Learners', 'Universities', 'Enterprises', 'Programs'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(index)}
                  className={`relative px-6 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4 text-sm md:text-base lg:text-lg font-medium transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-white text-black shadow-sm' 
                      : 'bg-transparent text-gray-700 hover:text-black'
                  }`}
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    borderRadius: '6px',
                    fontWeight: activeTab === index ? '600' : '500'
                  }}
                >
                  {tab}
                  {activeTab === index && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1F57C7]"
                      style={{ borderRadius: '0 0 6px 6px' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6">
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
                className="card-container stakeholder-card relative"
                style={{ 
                  perspective: '1000px',
                  height: '480px',
                  maxWidth: '394px',
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
                      src={`/img/${card.image}`}
                      alt={card.title}
                      className="card-image w-full h-full object-cover grayscale brightness-75"
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
                          fontSize: 'clamp(18px, 1.5vw, 24px)',
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
                            color: '#71717B'
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div 
                    className="absolute inset-0 overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br from-[#1F57C7] to-[#1442A0] p-8 flex flex-col justify-center items-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      boxShadow: '0 20px 60px rgba(31, 87, 199, 0.3)'
                    }}
                    onClick={() => toggleCard(index)}
                  >
                    <p 
                      className={`back-content text-white text-center ${flippedCards[index] ? '' : ''}`}
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '400',
                        fontSize: 'clamp(18px, 1.5vw, 22px)',
                        lineHeight: '1.5'
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
                            color: '#71717B'
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
      <section ref={howItHelpsRef} className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <h2 
            className="section-heading text-center mb-4 md:mb-6"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 'clamp(40px, 4.5vw, 72px)',
              color: '#393939',
              textTransform: 'capitalize',
              letterSpacing: '0px'
            }}
          >
            How It Helps: From Learning To<br className="hidden sm:block" /> Professional Readiness
          </h2>

          {/* Subheading */}
          <p 
            className="text-center mb-12 md:mb-16 lg:mb-20 help-subheading"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.5',
              color: '#71717A'
            }}
          >
            The Xperience Platform enables individuals and organizations to
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
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
                className="bg-[#F4F4F5] rounded-lg p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] help-card"
                style={{ 
                  minHeight: '320px',
                  width: '100%'
                }}
              >
                {/* Icon */}
                <img 
                  src={`/img/${card.icon}`}
                  alt={card.title}
                  className="mb-5 md:mb-6"
                  style={{ 
                    width: '90px',
                    height: '90px'
                  }}
                />

                {/* Card Title */}
                <h3 
                  className="mb-3"
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '500',
                    fontSize: 'clamp(24px, 2vw, 32px)',
                    lineHeight: 'clamp(32px, 2.5vw, 40px)',
                    letterSpacing: '-0.8px',
                    color: '#000000'
                  }}
                >
                  {card.title}
                </h3>

                {/* Card Description */}
                <p 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: '300',
                    fontSize: 'clamp(18px, 1.6vw, 28px)',
                    lineHeight: 'clamp(26px, 2vw, 38px)',
                    letterSpacing: '-0.6px',
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
      <section ref={capabilitiesSectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12">
          {/* Heading - Full Width */}
          <h2 
            className="mb-8 md:mb-10 lg:mb-12 capabilities-heading"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 'clamp(40px, 4.5vw, 72px)',
              color: '#393939',
              textTransform: 'capitalize',
              letterSpacing: '0px'
            }}
          >
            Key Platform Capabilities
          </h2>

          {/* Content: Image Left + Accordion Right */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-6 xl:gap-8">
            {/* Left Side - Image */}
            <div className="w-full lg:w-[55%] xl:w-[58%] capabilities-image">
              <img 
                src="/img/Group 41361.png"
                alt="Platform Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Right Side - Accordion Cards */}
            <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col gap-4">
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
                  className="bg-[#F4F4F5] rounded-lg transition-all duration-300 capability-accordion"
                  style={{ minHeight: '117px' }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 flex justify-between items-center text-left hover:bg-[#EDEDEE] transition-colors rounded-lg"
                  >
                    <h3 
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '600',
                        fontSize: 'clamp(20px, 1.8vw, 28px)',
                        lineHeight: '40px',
                        letterSpacing: '-0.7px',
                        color: '#000000'
                      }}
                    >
                      {item.title}
                    </h3>
                    
                    {/* Chevron Icon */}
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        expandedAccordion === index ? 'rotate-180' : ''
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
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedAccordion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p 
                      className="px-6 pb-6"
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '300',
                        fontSize: 'clamp(18px, 1.6vw, 28px)',
                        lineHeight: '40px',
                        letterSpacing: '-0.7px',
                        color: '#71717B'
                      }}
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
      <section ref={philosophySectionRef} className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <h2 
            className="philosophy-heading text-center mb-12 md:mb-16"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(36px, 4vw, 64px)',
              lineHeight: 'clamp(44px, 4.5vw, 72px)',
              color: '#393939',
              textTransform: 'capitalize',
              letterSpacing: '0px'
            }}
          >
            Our Product Philosophy
          </h2>

          {/* Cards Grid */}
          <div className="mb-8 md:mb-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-6"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {[...philosophyCards, ...philosophyCards].map((card, index) => (
                  <div 
                    key={index}
                    className="philosophy-card flex-shrink-0"
                    style={{ width: 'calc(33.333% - 16px)', minWidth: '520px' }}
                  >
                    <div 
                      className="rounded-lg flex items-center justify-center"
                      style={{ 
                        width: '100%',
                        height: '319px',
                        backgroundColor: card.bgColor,
                        opacity: 0.73
                      }}
                    >
                      <h3 
                        className="px-6 md:px-8"
                        style={{ 
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: '600',
                          fontSize: 'clamp(22px, 2vw, 28px)',
                          lineHeight: '40px',
                          letterSpacing: '-0.7px',
                          color: '#000000',
                          textAlign: 'center',
                          whiteSpace: 'nowrap'
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
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                lineHeight: '1.6',
                color: '#71717A'
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
                  src="/img/Group 41596.svg"
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
                  src="/img/Group 41595.svg"
                  alt="Next"
                  style={{ width: '48px', height: '48px' }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section ref={worksRef} className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12">
          {/* Main Heading */}
          <h2 
            className="works-heading text-center mb-3"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: 'clamp(36px, 4vw, 64px)',
              lineHeight: 'clamp(44px, 4.5vw, 74px)',
              letterSpacing: '-1.6px',
              color: '#0F1114'
            }}
          >
            How it Works
          </h2>

          {/* Subheading */}
          <p 
            className="works-subheading text-center mb-12 md:mb-16"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.5',
              color: '#71717B'
            }}
          >
            Simulation-Led, Outcome-Driven Learning
          </p>

          {/* Steps Description */}
          <p 
            className="works-description mb-12 md:mb-16 ml-8 md:ml-12 lg:ml-16"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500',
              fontSize: 'clamp(18px, 1.5vw, 22px)',
              lineHeight: '1.5',
              color: '#000000'
            }}
          >
            4 steps to real-world readiness with Skillzaa:
          </p>

          {/* Timeline and Image Container */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Left Side - Timeline */}
            <div className="w-full lg:w-[50%] relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-10 lg:left-12 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" style={{ height: 'calc(100% - 80px)' }}></div>

              {/* Steps */}
              <div className="space-y-8 md:space-y-12">
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
                        src="/img/Group 41598.svg"
                        alt={`Step ${step.number}`}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      {/* Hover state: Group 41597 */}
                      <img 
                        src="/img/Group 41597.svg"
                        alt={`Step ${step.number} Active`}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    {/* Card */}
                    <div 
                      className="flex-1 rounded-lg transition-all duration-300 flex flex-col justify-center bg-[#E6D6EF] group-hover:bg-[#F8F8FF] group-hover:justify-start"
                      style={{
                        maxWidth: '526px',
                        minHeight: '126px',
                        border: '1px solid #FFFFFF',
                        borderRadius: '8px',
                        padding: '24px'
                      }}
                    >
                      {/* Title - Always Visible */}
                      <h3 
                        className="transition-all duration-300 text-center group-hover:text-left"
                        style={{ 
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: '600',
                          fontSize: 'clamp(20px, 1.8vw, 24px)',
                          lineHeight: '40px',
                          color: '#682D99'
                        }}
                      >
                        {step.number}. {step.title}
                      </h3>

                      {/* Content - Visible on Hover */}
                      <p 
                        className="mt-3 transition-all duration-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40"
                        style={{ 
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: '500',
                          fontSize: 'clamp(16px, 1.4vw, 20px)',
                          lineHeight: '30px',
                          color: '#71717B'
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
            <div className="works-image w-full lg:w-[70%] flex items-end justify-center lg:justify-end pt-4">
              <img 
                src="/img/Mask Group 120.png"
                alt="How it Works Dashboard"
                className="w-full h-auto lg:w-auto"
                style={{ width: '760px', height: '519px', opacity: 1 }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="works-cta flex justify-center mt-12 md:mt-16">
            <button
              className="hero-button px-8 md:px-10 py-3 md:py-4 text-white text-base md:text-lg font-semibold rounded-lg shadow-lg"
              style={{ backgroundColor: '#1F57C7' }}
            >
              Register for Free Internship
            </button>
          </div>
        </div>
      </section>

      {/* Measured Impact Section */}
      <section 
        ref={impactSectionRef}
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/img/Mask Group 138.png')",
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
            backgroundImage: "url('/img/Mask Group 138.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.58,
            zIndex: 0
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
              letterSpacing: '0px'
            }}
          >
            Measured impact on<br />readiness and performance
          </h2>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
            {/* Stat 1: 3X */}
            <div className="text-center impact-stat">
              <div 
                className="mb-4"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99'
                }}
              >
                {Math.round(animatedNumbers.num1)}X
              </div>
              <p 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
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
              <div 
                className="mb-4"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99'
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
                  margin: '0 auto'
                }}
              >
                faster transition to workplace<br />productivity
              </p>
            </div>

            {/* Stat 3: 50% */}
            <div className="text-center impact-stat">
              <div 
                className="mb-4"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99'
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
                  margin: '0 auto'
                }}
              >
                higher placement confidence<br />for institutions
              </p>
            </div>

            {/* Stat 4: 40% */}
            <div className="text-center impact-stat">
              <div 
                className="mb-4"
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '600',
                  fontSize: 'clamp(56px, 7vw, 100px)',
                  lineHeight: '1',
                  color: '#682D99'
                }}
              >
                {Math.round(animatedNumbers.num4)}%
              </div>
              <p 
                style={{ 
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
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
      <section ref={techStackRef} className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          {/* Title */}
          <h2 
            className="tech-heading text-center mb-16 md:mb-20"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.2',
              color: '#000000',
              letterSpacing: '0px'
            }}
          >
            Our Technology Stack..Built on Scalable,<br />Secure, Intelligence-Driven Architecture
          </h2>

          {/* Cards Container */}
          <div className="relative">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {[0, 1, 2].map((offset) => {
                const actualIndex = (techStackIndex + offset) % techStackCards.length
                const card = techStackCards[actualIndex]
                
                return (
                  <div 
                    key={`${techStackIndex}-${offset}`}
                    className="tech-card p-8 rounded-lg"
                    style={{
                      background: '#F4F4F5',
                      minHeight: '350px'
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-8">
                      <img 
                        src={`/img/${card.icon}`}
                        alt={card.title}
                        className="w-auto h-auto"
                        style={{
                          width: offset === 0 ? '93px' : offset === 1 ? '101px' : '130px',
                          height: offset === 0 ? '100px' : offset === 1 ? '101px' : '99px',
                          opacity: 1
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3 
                      className="mb-4"
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '600',
                        fontSize: '32px',
                        lineHeight: '40px',
                        letterSpacing: '-0.8px',
                        color: '#000000',
                        textAlign: 'left'
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '500',
                        fontSize: '28px',
                        lineHeight: '36px',
                        letterSpacing: '-0.7px',
                        color: '#71717B',
                        textAlign: 'left'
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                )
              })}
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
                  src="/img/Group 41596.svg"
                  alt="Previous"
                  className="w-full h-full"
                />
              </button>
              <button
                onClick={nextTechStack}
                disabled={techStackIndex >= techStackCards.length - 3}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                aria-label="Next"
              >
                <img 
                  src="/img/Group 41595.svg"
                  alt="Next"
                  className="w-full h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare for the Role Section */}
      <section 
        ref={ctaSectionRef}
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/img/Group 41600.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '897px'
        }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1400px]">
          {/* Heading */}
          <h2 
            className="cta-heading text-center mb-6"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '600',
              fontSize: '64px',
              lineHeight: '74px',
              letterSpacing: '-1.6px',
              color: '#000000',
              maxWidth: '1265px',
              margin: '0 auto 24px'
            }}
          >
            Prepare for the role - before you are hired
          </h2>

          {/* Subheading */}
          <p 
            className="cta-subheading text-center mb-12 md:mb-16"
            style={{ 
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '500',
              fontSize: '24px',
              lineHeight: '40px',
              letterSpacing: '0px',
              color: '#000000',
              maxWidth: '747px',
              margin: '0 auto 64px'
            }}
          >
            Experience builds confidence. Simulation builds capability.
          </p>

          {/* Center Image */}
          <div className="cta-image flex justify-center mb-12 md:mb-16">
            <img 
              src="/img/Mask Group 122.png"
              alt="Platform Dashboard"
              className="w-full h-auto"
              style={{ 
                maxWidth: '981px',
                height: 'auto'
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              className="cta-button px-10 py-4 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
              style={{ 
                backgroundColor: '#1F57C7',
                minWidth: '230px'
              }}
            >
              Explore Simulations
            </button>
            <button
              className="cta-button px-10 py-4 text-black text-lg font-semibold rounded-lg border-2 hover:bg-black hover:text-white transition-all duration-300"
              style={{ 
                borderColor: '#000000',
                minWidth: '230px',
                backgroundColor: 'transparent'
              }}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default XperiencePlatformPage
