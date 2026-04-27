import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';

const Insights = ({ showHero = false, showContent = true }) => {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    button: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
  });

  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: headingRef, type: 'heading' },
      { ref: buttonRef, type: 'button' },
      { ref: card1Ref, type: 'card1' },
      { ref: card2Ref, type: 'card2' },
      { ref: card3Ref, type: 'card3' },
      { ref: card4Ref, type: 'card4' },
      { ref: card5Ref, type: 'card5' },
    ];

    refs.forEach(({ ref, type }) => {
      if (ref.current) {
        ref.current.dataset.elementType = type;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes flipInX {
          from {
            opacity: 0;
            transform: perspective(400px) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateX(0deg);
          }
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-flip-in-x {
          animation: flipInX 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .insights-hero-bg {
          background-size: cover;
          background-position: center 35%;
          filter: brightness(0.65);
        }

        /* ===== Insights Card Hover Effects ===== */
        .insights-card-lg,
        .insights-card-md {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.4s ease;
          cursor: pointer;
        }

        .insights-card-lg:hover,
        .insights-card-md:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .insights-card-lg .insights-card-img img,
        .insights-card-md .insights-card-img img {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .insights-card-lg:hover .insights-card-img img,
        .insights-card-md:hover .insights-card-img img {
          transform: scale(1.06);
        }

        .insights-podcast {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.4s ease;
          cursor: pointer;
        }

        .insights-podcast:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(74, 159, 216, 0.25);
        }

        .insights-podcast:hover .insights-podcast-right img {
          transform: scale(1.1) rotate(-5deg);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* ===== Fluid Responsive Overrides (Desktop/Tablet) ===== */
        @media (min-width: 768px) {
          .insights-heading {
            font-size: clamp(30px, 3.2vw, 44px) !important;
            margin-top: 0px !important;
            margin-bottom: 16px !important;
          }
          .insights-view-btn {
            margin-top: 0px !important;
            margin-bottom: 24px !important;
            height: 44px !important;
            padding: 0 20px !important;
          }
          .insights-card-lg {
            width: clamp(260px, 25vw, 340px) !important;
            height: clamp(420px, 33vw, 500px) !important;
          }
          .insights-card-md {
            flex: 1;
            width: 100% !important; /* Reset inline width */
            height: clamp(300px, 24vw, 380px) !important;
          }
          .insights-card-lg .insights-card-img {
            height: 200px !important;
          }
          .insights-card-md .insights-card-img {
            height: 170px !important;
          }
          .insights-card-lg > div:last-child,
          .insights-card-md > div:last-child {
            padding: 16px 20px !important;
          }
          .insights-card-lg .insights-card-icon {
            margin-top: 16px !important;
            margin-bottom: 24px !important;
          }
          .insights-card-lg .insights-card-icon img {
            width: 44px !important;
            height: 44px !important;
          }
          .insights-card-md .insights-tag {
            width: auto !important;
            height: 38px !important;
            padding: 0 16px !important;
            font-size: 13px !important;
            margin-top: 8px !important;
            margin-bottom: 12px !important;
          }
          .insights-card-lg h3 {
            font-size: 24px !important;
            line-height: 1.3 !important;
            padding-bottom: 16px !important;
          }
          .insights-card-md h3 {
            font-size: 22px !important;
            line-height: 1.25 !important;
            padding-bottom: 14px !important;
          }
          .insights-podcast {
            width: 100% !important;
            height: auto !important;
            min-height: 230px;
            margin-top: 0px !important;
            padding: 22px 24px !important;
            gap: 20px !important;
          }
          .insights-podcast .insights-tag {
            width: auto !important;
            height: 38px !important;
            padding: 0 18px !important;
            font-size: 14px !important;
            margin-bottom: 18px !important;
          }
          .insights-podcast h3 {
            font-size: 24px !important;
            line-height: 1.25 !important;
          }
          .insights-podcast p {
            font-size: 16px !important;
            line-height: 1.55 !important;
          }
          .insights-podcast .insights-podcast-right img {
            width: 72px !important;
            height: 72px !important;
          }
        }

        @media (max-width: 767px) {
          .insights-hero-section {
            min-height: 180px !important;
            height: 180px !important;
            max-height: 180px !important;
          }
          .insights-hero-bg {
            background-size: 180% auto !important;
            background-position: center 52% !important;
          }
          .insights-heading {
            font-size: 28px !important;
            margin-top: 0px !important;
          }
          .insights-view-btn {
            margin-top: 16px !important;
            margin-bottom: 32px !important;
          }
          .insights-card-lg {
            width: 100% !important;
            height: auto !important;
          }
          .insights-card-lg .insights-card-img {
            height: 260px !important;
          }
          .insights-card-lg .insights-card-img img {
            object-fit: cover !important;
            object-position: center center !important;
          }
          .insights-card-lg .insights-card-icon img {
            width: 36px !important;
            height: 36px !important;
          }
          .insights-card-lg .insights-card-icon {
            margin-bottom: 12px !important;
            margin-top: 8px !important;
          }
          .insights-card-lg h3 {
            font-size: 18px !important;
          }
          .insights-card-lg > div:last-child {
            padding: 16px 20px !important;
          }
          .insights-card-md {
            width: 100% !important;
            height: auto !important;
          }
          .insights-card-md .insights-card-img {
            height: 240px !important;
          }
          .insights-card-md .insights-card-img img {
            object-fit: cover !important;
            object-position: center center !important;
          }
          .insights-card-md h3 {
            font-size: 18px !important;
          }
          .insights-card-md > div:last-child {
            padding: 12px 16px !important;
          }
          .insights-card-md .insights-tag {
            width: auto !important;
            padding: 0 14px !important;
            height: 32px !important;
            font-size: 12px !important;
            margin-bottom: 8px !important;
            margin-top: 4px !important;
          }
          .insights-podcast {
            width: 100% !important;
            height: auto !important;
            margin-left: 0 !important;
            margin-top: 10px !important;
            padding: 24px 20px !important;
            flex-direction: column !important;
            gap: 20px !important;
          }
          .insights-podcast .insights-tag {
            margin-bottom: 20px !important;
          }
          .insights-podcast h3 {
            font-size: 20px !important;
          }
          .insights-podcast p {
            font-size: 14px !important;
          }
          .insights-podcast .insights-podcast-right img {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>

      {/* Hero Banner Section */}
      {showHero && (
        <section
          className="insights-hero-section w-full relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: '280px', height: '35vh', maxHeight: '350px' }}
        >
          <div
            className="insights-hero-bg absolute inset-0 w-full h-full"
            style={{
              backgroundImage: getBackgroundImageUrl('/improvements/Untitled%20design.jpg.jpeg'),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="relative z-10 text-center px-4 w-full animate-fade-in-up md:pr-[20%]">
            <h1
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(48px, 6vw, 72px)',
                letterSpacing: '2px',
                color: '#FFFFFF',
                margin: 0,
                textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                transform: 'translateX(-10%)'
              }}
            >
              Insights
            </h1>
          </div>
        </section>
      )}

      {showContent && (
        <section className="w-full bg-white py-12 md:py-14">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
            {/* Main Content - 2 Columns on desktop, 1 column on mobile */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-6 mb-4">
              {/* Left Column - Heading + Button + Purple Card */}
              <div className="w-full lg:w-auto">
                {/* Heading */}
                <h2
                  ref={headingRef}
                  className={`insights-heading mb-4 md:mb-6 ${isVisible.heading ? 'animate-fade-in-left' : 'opacity-0'}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    lineHeight: '1.2',
                    color: '#0F1114',
                    marginTop: '40px',
                  }}
                >
                  Insights
                </h2>

                {/* View all resources button */}
                <button
                  ref={buttonRef}
                  className={`insights-view-btn mb-8 ${isVisible.button ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
                  style={{
                    height: '48px',
                    padding: '0 24px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '30px',
                    marginBottom: '80px',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                  onClick={() => { window.location.href = getRoutePath('/insights'); }}
                >
                  View all the resources
                </button>

                {/* Purple Card */}
                <div
                  ref={card1Ref}
                  className={`insights-card-lg ${isVisible.card1 ? 'animate-fade-in-scale delay-300' : 'opacity-0'}`}
                  style={{
                    background: '#F4F4FF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Image */}
                  <div className="insights-card-img" style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
                    <img
                      src={getAssetPath('/img/Mask%20Group%2096.png')}
                      alt="AI Assistant"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <div className="insights-card-icon" style={{ marginBottom: '20px', marginTop: '20px' }}>
                      <img
                        src={getAssetPath('/img/Group%2034192.svg')}
                        alt="Icon"
                        style={{
                          width: '56px',
                          height: '56px',
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '26px',
                        fontWeight: 600,
                        lineHeight: '1.4',
                        color: '#393939',
                        marginBottom: 'auto',
                        paddingBottom: '0',
                      }}
                    >
                      Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI
                    </h3>

                    {/* Button */}
                    <button
                      style={{
                        marginBottom: '20px',
                        width: '173px',
                        height: '48px',
                        padding: '0 16px',
                        background: 'transparent',
                        border: '1px solid #0F1114',
                        borderRadius: '8px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#0F1114',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#0F1114';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#0F1114';
                      }}
                      onClick={() => { window.location.href = getRoutePath('/insights'); }}
                    >
                      Read the Blog
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Top (2 cards) and Bottom (Podcast) */}
              <div className="flex-1 flex flex-col gap-4 md:gap-5">
                {/* Row for 2 side-by-side cards */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full">
                  {/* Card 2 - AI Talent Report (Robot - Beige) */}
                  <div
                    ref={card2Ref}
                    className={`insights-card-md ${isVisible.card2 ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}
                    style={{
                      background: '#F4E3CC',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Image */}
                    <div className="insights-card-img" style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
                      <img
                        src={getAssetPath('/img/Mask%20Group%20112.png')}
                        alt="AI Robot"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Tag */}
                      <span
                        className="insights-tag"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'flex-start',
                          width: '206px',
                          height: '50px',
                          background: '#E87444',
                          borderRadius: '20px',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#FFFFFF',
                          marginBottom: '12px',
                          marginTop: '4px',
                        }}
                      >
                        Research & Insights
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '28px',
                          fontWeight: 600,
                          lineHeight: '1.3',
                          color: '#393939',
                          marginBottom: 'auto',
                          paddingBottom: '0',
                        }}
                      >
                        2026 AI Talent & <br />Salary Benchmark Report
                      </h3>

                      {/* Button */}
                      <button
                        style={{
                          width: '188px',
                          height: '48px',
                          padding: '0 16px',
                          background: 'transparent',
                          border: '1px solid #0F1114',
                          borderRadius: '8px',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#0F1114',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#0F1114';
                          e.target.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#0F1114';
                        }}
                        onClick={() => { window.location.href = getRoutePath('/insights/ai-talent-research-hub'); }}
                      >
                        Read the reports
                      </button>
                    </div>
                  </div>

                  {/* Card 3 - Skill Blueprint (Digital Interface - Pink) */}
                  <div
                    ref={card3Ref}
                    className={`insights-card-md ${isVisible.card3 ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}
                    style={{
                      marginTop: '0',
                      background: '#F7C9C9',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Image */}
                    <div className="insights-card-img" style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
                      <img
                        src={getAssetPath('/img/Mask%20Group%2098.png')}
                        alt="Digital Interface"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Tag */}
                      <span
                        className="insights-tag"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'flex-start',
                          width: '206px',
                          height: '50px',
                          background: '#D02C2F',
                          borderRadius: '20px',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#FFFFFF',
                          marginBottom: '12px',
                          marginTop: '4px',
                        }}
                      >
                        Research & Insights
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '26px',
                          fontWeight: 600,
                          lineHeight: '1.3',
                          color: '#393939',
                          marginBottom: 'auto',
                          paddingBottom: '0',
                        }}
                      >
                        The Skill Blueprint<br />
                        AI & The Future of Work
                      </h3>

                      {/* Button */}
                      <button
                        style={{
                          width: '259px',
                          maxWidth: '100%',
                          height: '48px',
                          padding: '0 16px',
                          background: 'transparent',
                          border: '1px solid #0F1114',
                          borderRadius: '8px',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#0F1114',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#0F1114';
                          e.target.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#0F1114';
                        }}
                        onClick={() => { window.location.href = getRoutePath('/insights/skill-blueprint'); }}
                      >
                        Explore the Case studies
                      </button>
                    </div>
                  </div>
                </div> {/* Close Row for 2 cards */}

                {/* Bottom - Full Width Podcast Card */}
                <div
                  ref={card4Ref}
                  className={`insights-podcast ${isVisible.card4 ? 'animate-flip-in-x delay-400' : 'opacity-0'}`}
                  style={{
                    marginTop: '-22px', /* Adjust closer or further if needed, eg. -18px */
                    background: '#B6DFF5',
                    borderRadius: '12px',
                    padding: '36px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                  }}
                >
                  {/* Left Content */}
                  <div style={{ flex: 1 }}>
                    {/* Tag */}
                    <span
                      className="insights-tag"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '206px',
                        height: '50px',
                        background: '#4A9FD8',
                        borderRadius: '20px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        marginBottom: '50px',
                      }}
                    >
                      Podcast
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '26px',
                        fontWeight: 600,
                        lineHeight: '1.3',
                        color: '#393939',
                        marginBottom: '16px',
                      }}
                    >
                      Skills DECODED:<br />
                      Conversations that matter.
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '20px',
                        fontWeight: 400,
                        lineHeight: '1.7',
                        color: '#393939',
                        maxWidth: '700px',
                      }}
                    >
                      Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.
                    </p>
                  </div>

                  {/* Right - Icon + Button */}
                  <div className="insights-podcast-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    <img
                      src={getAssetPath('/img/Group%2034199.svg')}
                      alt="Microphone"
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'contain',
                      }}
                    />
                    <button
                      style={{
                        height: '48px',
                        padding: '0 16px',
                        background: 'transparent',
                        border: '1px solid #0F1114',
                        borderRadius: '8px',
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#0F1114',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#0F1114';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#0F1114';
                      }}
                      onClick={() => { window.location.href = getRoutePath('/insights/skill-unplugged-podcast'); }}
                    >
                      Listen now
                    </button>
                  </div>
                </div>
              </div> {/* Close Right Column */}
            </div> {/* Close Main Content */}
          </div>
        </section>
      )}
    </>
  );
};

export default Insights;
