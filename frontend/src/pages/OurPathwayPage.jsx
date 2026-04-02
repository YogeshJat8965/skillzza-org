import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ── Custom hook for scroll-reveal animation ── */
function useScrollReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('pathway-revealed')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function OurPathwayPage() {
  const [activeTab, setActiveTab] = useState('individuals')

  const tabOptions = [
    { id: 'individuals', label: 'For Individuals' },
    { id: 'organizations', label: 'For Organizations' },
    { id: 'communities', label: 'For Communities' },
  ]

  const tabContent = {
    individuals: {
      heading: 'For Individuals',
      image: '/Company/Get Started TodayIndividuals.png',
      bullets: [
        'Complete our SDG Skills Assessment',
        'Get personalized pathway recommendations',
        'Enroll in your chosen program',
        'Start your transformation journey',
      ],
    },
    organizations: {
      heading: 'For Organizations',
      image: '/Company/Get Started TodayOrganizations.png',
      bullets: [
        'Diagnose workforce gaps with our SDG Skills Index',
        'Co-create tailored capability pathways for every team',
        'Track progress with transparent impact dashboards',
        'Start your transformation journey',
      ],
    },
    communities: {
      heading: 'For Communities',
      image: '/Company/Get Started TodayCommunities.png',
      bullets: [
        'Partner with us for employee development',
        'Create custom corporate programs',
        'Support community development initiatives',
        'Measure and report SDG impact',
      ],
    },
  }

  const activeTabContent = tabContent[activeTab]

  // Scroll reveal refs for each section
  const heroRef = useScrollReveal()
  const commitmentRef = useScrollReveal()
  const differenceRef = useScrollReveal()
  const serveRef = useScrollReveal()
  const partnershipRef = useScrollReveal()
  const getStartedRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  // Hover state for buttons
  const [hoveredBtn, setHoveredBtn] = useState(null)

  return (
    <>
      {/* ── Inline CSS for animations, hover, and responsive ── */}
      <style>{`
        /* Scroll reveal base - 3D smooth scrolling effect */
        .pathway-reveal {
          opacity: 0;
          transform: perspective(1200px) rotateX(-10deg) translateY(60px) translateZ(-40px);
          transform-origin: top center;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .pathway-revealed {
          opacity: 1 !important;
          transform: perspective(1200px) rotateX(0deg) translateY(0) translateZ(0) !important;
        }

        /* Staggered children animation - 3D */
        .pathway-revealed.pathway-stagger > *, .pathway-revealed .pathway-stagger > * {
          opacity: 0;
          transform: perspective(1200px) rotateX(-10deg) translateY(40px) translateZ(-40px);
          transform-origin: top center;
          animation: pathway-fade-up-3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        .pathway-revealed.pathway-stagger > *:nth-child(1), .pathway-revealed .pathway-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .pathway-revealed.pathway-stagger > *:nth-child(2), .pathway-revealed .pathway-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .pathway-revealed.pathway-stagger > *:nth-child(3), .pathway-revealed .pathway-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .pathway-revealed.pathway-stagger > *:nth-child(4), .pathway-revealed .pathway-stagger > *:nth-child(4) { animation-delay: 0.4s; }
        .pathway-revealed.pathway-stagger > *:nth-child(5), .pathway-revealed .pathway-stagger > *:nth-child(5) { animation-delay: 0.5s; }
        .pathway-revealed.pathway-stagger > *:nth-child(6), .pathway-revealed .pathway-stagger > *:nth-child(6) { animation-delay: 0.6s; }

        @keyframes pathway-fade-up-3d {
          to { opacity: 1; transform: perspective(1200px) rotateX(0deg) translateY(0) translateZ(0); }
        }

        /* Button hover effects */
        .pathway-btn {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease !important;
        }
        .pathway-btn:hover {
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0px 10px 25px rgba(207, 12, 12, 0.25) !important;
          background-color: #B00A0A !important;
        }
        .pathway-btn:active {
          transform: translateY(0) scale(0.98) !important;
        }

        /* Tab button hover */
        .pathway-tab-btn {
          transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .pathway-tab-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0px 6px 16px rgba(137, 4, 4, 0.15) !important;
        }

        /* Card hover - normal and soft */
        .pathway-card {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease !important;
          will-change: transform, box-shadow;
        }
        .pathway-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          box-shadow: 0px 24px 48px rgba(15, 16, 18, 0.12) !important;
          z-index: 10;
        }

        /* Serve card hover - Smooth Hover Effect */
        .pathway-serve-card {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
          will-change: transform, box-shadow;
        }
        .pathway-serve-card:hover {
          transform: translateY(-10px) scale(1.02) !important;
          box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.28), 0px 12px 24px rgba(0, 0, 0, 0.14) !important;
          z-index: 10;
        }

        /* Image hover effects */
        img, .pathway-tab-content > div:first-child {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        img:hover, .pathway-tab-content > div:first-child:hover {
          transform: scale(1.03) !important;
        }

        /* Partnership pill hover */
        .pathway-pill {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background-color 0.3s ease !important;
        }
        .pathway-pill:hover {
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2) !important;
          background-color: #6D0303 !important;
        }

        /* Icon highlight row hover */
        .pathway-highlight-row {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .pathway-highlight-row:hover {
          transform: translateX(8px) !important;
        }

        /* ── Mobile Responsive (< 768px) ── */
        @media (max-width: 768px) {
          .pathway-hero-heading {
            font-size: 32px !important;
            line-height: 1.2 !important;
            -webkit-line-clamp: unset !important;
            overflow: visible !important;
            display: block !important;
          }
          .pathway-hero-subheading {
            font-size: 20px !important;
            line-height: 1.3 !important;
            white-space: normal !important;
            margin-top: 12px !important;
          }
          .pathway-hero-description {
            font-size: 16px !important;
            line-height: 1.4 !important;
            -webkit-line-clamp: unset !important;
            overflow: visible !important;
            display: block !important;
          }
          .pathway-hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .pathway-hero-buttons button {
            min-width: unset !important;
            width: 100% !important;
            max-width: 320px !important;
            padding: 14px 28px !important;
            font-size: 17px !important;
            white-space: normal !important;
          }
          .pathway-hero-image {
            margin-top: 24px !important;
          }
          /* page scoped mobile typography fixes */
          section h2, section h3, section h2 *, section h3 * {
            white-space: normal !important;
          }
          section h2 {
            font-size: 28px !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }
          section h3 {
            font-size: 24px !important;
            line-height: 1.25 !important;
          }
          section p {
            font-size: 16px !important;
            line-height: 1.5 !important;
          }
          section span {
            white-space: normal !important;
            display: inline !important;
          }
          .pathway-section-subtitle {
            font-size: 20px !important;
          }
          .pathway-section-title {
            font-size: 28px !important;
          }
          .pathway-section-desc {
            font-size: 16px !important;
            margin-top: 10px !important;
          }
          .pathway-section-desc span {
            white-space: normal !important;
          }
          .pathway-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .pathway-cards-grid > div {
            width: 100% !important;
            max-width: 380px !important;
            height: auto !important;
            min-height: 480px !important;
          }
          .pathway-highlight-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .pathway-highlight-row {
            gap: 16px !important;
          }
          .pathway-highlight-row h3 {
            font-size: 22px !important;
            margin-bottom: 8px !important;
          }
          .pathway-highlight-row p {
            font-size: 15px !important;
          }
          .pathway-serve-grid {
            grid-template-columns: 1fr !important;
          }
          .pathway-serve-card {
            width: 100% !important;
            max-width: 380px !important;
          }
          .pathway-partnership-pills {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .pathway-pill {
            width: 100% !important;
            max-width: none !important;
            text-align: center !important;
            justify-content: center !important;
            padding: 16px !important;
          }
          .pathway-tab-bar {
            flex-direction: column !important;
            border-radius: 16px !important;
            padding: 12px !important;
            gap: 10px !important;
          }
          .pathway-tab-btn {
            width: 100% !important;
            height: auto !important;
            padding: 14px !important;
            font-size: 18px !important;
            border-radius: 12px !important;
          }
          .pathway-tab-content {
            flex-direction: column !important;
          }
          .pathway-tab-content > div:first-child {
            min-height: 220px !important;
          }
          .pathway-tab-content > div:last-child {
            padding: 24px 20px !important;
          }
          .pathway-cta-inner {
            flex-direction: column !important;
            padding: 32px 20px 0 !important;
            text-align: center !important;
          }
          .pathway-cta-inner h2 {
            font-size: 26px !important;
            text-align: center !important;
          }
          .pathway-cta-inner > div:first-child {
            flex: unset !important;
            padding: 20px 0 !important;
          }
          .pathway-cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 14px !important;
            width: 100% !important;
          }
          .pathway-cta-buttons button {
            width: 100% !important;
            max-width: 320px !important;
            white-space: normal !important;
            font-size: 16px !important;
            padding: 14px 20px !important;
          }
          .pathway-cta-image {
            width: 100% !important;
            flex: unset !important;
            height: 280px !important;
            margin: -30px auto -40px auto !important;
          }
          .pathway-cta-image > img:first-child {
            width: 100% !important;
            height: 125% !important;
            object-fit: cover !important;
            object-position: center top !important;
            margin: 0 auto !important;
          }
        }

        /* ── Tablet (769px - 1024px) ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .pathway-hero-heading {
            font-size: 42px !important;
          }
          .pathway-hero-subheading {
            font-size: 26px !important;
          }
          .pathway-hero-description {
            font-size: 22px !important;
          }
          .pathway-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pathway-serve-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pathway-cta-image {
            width: 400px !important;
          }
          .pathway-tab-btn {
            font-size: 22px !important;
            width: 240px !important;
          }
        }
      `}</style>
      {/* ── Hero Section ── */}
      <section ref={heroRef} className="w-full pathway-reveal" style={{ backgroundColor: '#F8F8F8' }}>
        <div
          className="pathway-stagger"
          style={{
            width: '100%',
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '40px 24px 32px',
          }}
        >
          {/* Text Content — Centered */}
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <h1
              className="pathway-hero-heading"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 500,
                fontSize: '56px',
                lineHeight: '1',
                letterSpacing: '0%',
                color: '#E11313',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                width: '100%',
                maxWidth: '1100px',
                margin: '0 auto',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Transforming Lives Through
              <br />
              SDG-Aligned Skills Development
            </h1>

            {/* Subheading */}
            <p
              className="pathway-hero-subheading"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '1',
                letterSpacing: '0%',
                color: '#0F1114',
                marginTop: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              Empowering Communities. Bridging Gaps.. Building Futures...
            </p>

            {/* Description */}
            <p
              className="pathway-hero-description"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '1.35',
                color: '#3F3F46',
                marginTop: '12px',
                maxWidth: '1100px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Join thousands who have transformed their lives through our inclusive, impact-driven skill
              development programs aligned with UN Sustainable Development Goals.
            </p>

            {/* Buttons */}
            <div
              className="pathway-hero-buttons"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '26px',
                marginTop: '32px',
                marginBottom: '18px',
                position: 'relative',
                zIndex: 20,
                opacity: 1,
                transform: 'translateY(0)',
              }}
            >
              {[
                'Start Your Journey',
                'Explore Programs',
              ].map((label) => (
                <button
                  key={label}
                  className="pathway-btn"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    padding: '16px 52px',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    backgroundColor: '#E11313',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    letterSpacing: '0.5px',
                    minWidth: '240px',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Puzzle Image — same width as content */}
          <div
            className="pathway-hero-image"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '8px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <img
              src="/Company/25412d49d304b2df2e2cae48121b10e56bca89fb.png"
              alt="Skillzza and UN SDG partnership - people connecting puzzle pieces"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Our Commitment Section ── */}
      <section
        ref={commitmentRef}
        className="pathway-reveal pathway-stagger"
        style={{
          width: '100%',
          backgroundColor: '#F8F8F8',
          padding: '60px 24px 80px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Our Commitment
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.05',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
                marginBottom: '16px',
              }}
            >
              Building a More Equitable World Through Skills
            </h2>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                leadingTrim: 'none',
                color: '#3F3F46',
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                At Skillzza, we believe that quality education and decent work opportunities are fundamental human rights.
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Our SDG-aligned pathway is designed to create lasting impact across communities while
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                addressing critical global challenges.
              </span>
            </p>
          </div>

          {/* Cards Grid */}
          <div
            className="pathway-stagger pathway-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(309px, 1fr))',
              gap: '28px',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {[
              {
                image: '/Company/1image.png',
                sdg: 'SDG 04',
                title: 'Quality Education',
                description: 'Ensuring inclusive and equitable quality education',
                sdgColor: '#C78888',
                titleColor: '#8A0303',
                textColor: '#4A1A18',
                borderColor: '#D5A6A3',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FBEEEE 100%)',
              },
              {
                image: '/Company/2image.png',
                sdg: 'SDG 05',
                title: 'Gender Equality',
                description: 'Empowering women and girls through economic opportunities',
                sdgColor: '#BCA6CF',
                titleColor: '#7B1C6B',
                textColor: '#3C1141',
                borderColor: '#D9C4E4',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F6EFFB 100%)',
              },
              {
                image: '/Company/3image.png',
                sdg: 'SDG 08',
                title: 'Decent Work & Economic Growth',
                description: 'Promoting inclusive economic growth and decent work for all',
                sdgColor: '#E4CC94',
                titleColor: '#7C3B00',
                textColor: '#3C1F00',
                borderColor: '#E8D2AA',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FDF5E9 100%)',
              },
              {
                image: '/Company/4image.png',
                sdg: 'SDG 10',
                title: 'Reduced Inequalities',
                description: 'Reducing inequality within and among countries',
                sdgColor: '#A9BEDF',
                titleColor: '#1F3F66',
                textColor: '#122338',
                borderColor: '#C4D5EA',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F6FB 100%)',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="pathway-card"
                style={{
                  width: '309px',
                    height: '500px',
                  borderRadius: '22px',
                  border: `1.5px solid ${card.borderColor}`,
                  background: '#FEFAFA',
                  boxShadow: '0px 20px 30px rgba(15, 16, 18, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Card Image */}
                <div
                  style={{
                    width: '100%',
                    height: '205px',
                    borderRadius: '15px 15px 0 0',
                    position: 'relative',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px 15px 0 0',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '22px 24px 28px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'League Spartan, sans-serif',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '1',
                        color: card.sdgColor,
                        letterSpacing: '2px',
                        filter: 'drop-shadow(0px 3px 0px rgba(0, 0, 0, 0.25))',
                        margin: 0,
                        textAlign: 'left',
                      }}
                    >
                      {card.sdg}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: '28px',
                        lineHeight: '1.25',
                        color: '#890404',
                        margin: 0,
                        textAlign: 'left',
                      }}
                    >
                      {card.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '400',
                      fontSize: '22px',
                      lineHeight: '1.4',
                      marginTop: 0,
                      textAlign: 'left',
                      color: card.textColor,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pathway Difference Icons Section ── */}
      <section
        ref={differenceRef}
        className="pathway-reveal pathway-stagger"
        style={{
          width: '100%',
          backgroundColor: '#F8F7F6',
          padding: '80px 24px 100px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          {/* Section headings */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '14px',
              }}
            >
              The Skillzza Pathway Difference
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              Building a More Equitable World Through Skills
            </h2>
          </div>

          {/* Icons highlight grid */}
          <div
            className="pathway-stagger pathway-highlight-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '46px 56px',
              alignItems: 'start',
            }}
          >
            {[
              {
                icon: '/Company/1icon.png',
                title: 'Holistic Development Approach',
                description:
                  'We go beyond technical skills to nurture leadership, emotional intelligence, and sustainable mindsets.',
              },
              {
                icon: '/Company/2icon.png',
                title: 'Inclusive Access Framework',
                description:
                  'Designed to remove barriers and ensure everyone, regardless of background, has equal opportunity to succeed.',
              },
              {
                icon: '/Company/3icon.png',
                title: 'Impact-Driven Outcomes',
                description:
                  'Every program is measured against real-world SDG targets with transparent reporting and accountability.',
              },
              {
                icon: '/Company/4icon.png',
                title: 'Industry-Aligned Curriculum',
                description:
                  'Co-created with leading employers to ensure skills taught today meet the demands of tomorrow.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="pathway-highlight-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '56px',
                }}
              >
                <div
                  style={{
                    width: '75px',
                    height: '75px',
                    borderRadius: '10px',
                    background: '#D8D8D8',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 600,
                      fontSize: '30px',
                      lineHeight: '1.15',
                      color: '#0F0F0F',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '1.45',
                      color: '#181818',
                      maxWidth: '420px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve Section ── */}
      <section
        ref={serveRef}
        className="pathway-reveal pathway-stagger"
        style={{
          width: '100%',
          backgroundColor: '#F8F8F8',
          padding: '70px 24px 90px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Who We Serve
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              Creating Opportunities for Everyone
            </h2>
          </div>

          <div
            className="pathway-stagger pathway-serve-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {[
              {
                image: '/Company/youth.png',
                icon: '/Company/Who We Serveicon1.png',
                title: 'Youth & Students',
              },
              {
                image: '/Company/working.png',
                icon: '/Company/Who We Serveicon2.png',
                title: 'Working Professionals',
              },
              {
                image: '/Company/women.png',
                icon: '/Company/Who We Serveicon3.png',
                title: 'Women Returning to Work',
              },
              {
                image: '/Company/underemployed.png',
                icon: '/Company/Who We Serveicon4.png',
                title: 'Underemployed Individuals',
              },
              {
                image: '/Company/rural.png',
                icon: '/Company/Who We Serveicon5.png',
                title: 'Rural Communities',
              },
              {
                image: '/Company/persons.png',
                icon: '/Company/Who We Serveicon6.png',
                title: 'Persons with Disabilities',
              },
            ].map((segment, index) => (
                <div
                  key={index}
                  className="pathway-serve-card"
                  style={{
                    width: '399px',
                    maxWidth: '100%',
                    height: '328px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.18)',
                    opacity: 0.9,
                  }}
                >
                  <img
                    src={segment.image}
                    alt={segment.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(9, 11, 19, 0.1) 15%, rgba(9, 11, 19, 0.78) 90%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '34px',
                      left: '28px',
                      right: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {/* <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '12px',
                        background: '#D9D9D9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          transform: 'translateY(-12px)',
                      }}
                    >
                      <img
                        src={segment.icon}
                        alt={`${segment.title} icon`}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      />
                    </div> */}
                    <div
                      style={{
                          color: '#FFFFFF',
                        fontFamily: 'League Spartan, sans-serif',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '1.2',
                        textShadow: '0px 4px 12px rgba(0, 0, 0, 0.45)',
                      }}
                    >
                      {segment.title}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership Ecosystem Section ── */}
      <section
        ref={partnershipRef}
        className="pathway-reveal pathway-stagger"
        style={{
          width: '100%',
          backgroundColor: '#F5F5F5',
          padding: '60px 24px 72px',
        }}
      >
        <div
          style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: 1,
              color: '#0F0F0F',
              marginBottom: '10px',
            }}
          >
            Partnership Ecosystem
          </p>
          <h2
            style={{
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: 1,
              color: '#C00F0F',
              textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
              marginBottom: '42px',
            }}
          >
            Collaborating for Greater Impact
          </h2>
          <div
            className="pathway-stagger pathway-partnership-pills"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'center',
            }}
          >
            {[
              'UN Partners',
              'Government Collaborations',
              'Industry Partners',
              'Educational Institutions',
            ].map((label) => (
              <div
                key={label}
                className="pathway-pill"
                style={{
                  minWidth: '220px',
                  padding: '18px 34px',
                  borderRadius: '999px',
                  backgroundColor: '#8B0404',
                  boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.25)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#FFFFFF',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey of Launching Your Career Section ── */}
     

      <section
        ref={getStartedRef}
        className="pathway-reveal"
        style={{
          width: '100%',
          backgroundColor: '#F6F6F6',
          padding: '80px 24px 110px',
        }}
      >
        <div className="pathway-stagger" style={{ width: '100%', maxWidth: '1320px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Get Started Today
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.05',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
                marginBottom: '18px',
              }}
            >
              Choose Your Path to Impact
            </h2>
          </div>

          <div
            className="pathway-tab-bar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              width: '100%',
              maxWidth: '957px',
              margin: '0 auto',
              minHeight: '96px',
              background: '#FFFFFF',
              borderRadius: '50px',
              padding: '12px 20px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderBottom: '4px solid #D9D9D9',
            }}
          >
            {tabOptions.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  className="pathway-tab-btn"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: '307px',
                    height: '72px',
                    textAlign: 'center',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '32px',
                    color: isActive ? '#FFFFFF' : '#8A0303',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    background: isActive ? '#890404' : 'transparent',
                    boxShadow: isActive ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '32px',
              boxShadow: '0px 20px 45px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                flex: '1 1 460px',
                minHeight: '456px',
              }}
            >
              <img
                src={activeTabContent.image}
                alt={`${activeTabContent.heading} visual`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderTopLeftRadius: '25px',
                  borderBottomLeftRadius: '25px',
                }}
              />
            </div>
            <div
              style={{
                flex: '1 1 380px',
                padding: '56px 60px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontWeight: 700,
                  fontSize: '30px',
                  color: '#8A0303',
                }}
              >
                {activeTabContent.heading}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '20px',
                  color: '#181818',
                }}
              >
                {activeTabContent.bullets.map((text) => (
                  <li key={text} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '999px',
                        backgroundColor: '#CF0C0C',
                      }}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className="pathway-reveal"
        style={{
          width: '100%',
          backgroundColor: '#F6F6F6',
          padding: '60px 24px 80px',
          overflow: 'hidden',
        }}
      >
        <div
          className="pathway-cta-inner"
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px 16px 0 0',
            padding: '0 0 0 52px',
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            minHeight: '380px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              flex: '1 1 420px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              padding: '60px 0',
            }}
          >
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '42px',
                lineHeight: 1.1,
                color: '#0B0B0B',
                margin: 0,
                textAlign: 'left',
              }}
            >
              Ready to Transform Your Life?
            </h2>
            <div
              className="pathway-cta-buttons"
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '18px',
                alignItems: 'center',
              }}
            >
              {[
                "Apply Now - It's Free",
                'Schedule Counseling Call',
              ].map((label) => (
                <button
                  key={label}
                  className="pathway-btn"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#FFFFFF',
                    backgroundColor: '#CF0C0C',
                    borderRadius: '999px',
                    border: 'none',
                    padding: '14px 32px',
                    cursor: 'pointer',
                    boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.15)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            className="pathway-cta-image"
            style={{
              flex: '0 0 520px',
              height: '420px',
              position: 'relative',
              marginLeft: 'auto',
              marginRight: '0',
              alignSelf: 'flex-end',
              marginBottom: '-30px',
            }}
          >
            <img
              src="/Company/ourPathwayLatImage.png"
              alt="Colorful head silhouette with learning icons"
              style={{
                width: '82%',
                height: '120%',
                objectFit: 'cover',
                objectPosition: 'top center',
                marginLeft: 'auto',
                display: 'block',
              }}
            />
            {[
              { src: '/Company/lastIcon3.png', top: '10%', left: '20%' },
              { src: '/Company/lastIcon1.png', top: '4%', right: '14%' },
              { src: '/Company/lastIcon2.png', top: '42%', right: '2%' },
              { src: '/Company/lastIcon4.png', bottom: '18%', right: '18%' },
            ].map((icon) => (
              <img
                key={icon.src}
                src={icon.src}
                alt="SDG icon"
                style={{
                  position: 'absolute',
                  width: '52px',
                  height: '52px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.18))',
                  ...icon,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPathwayPage
