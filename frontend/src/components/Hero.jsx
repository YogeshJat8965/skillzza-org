import React, { useState, useEffect } from 'react';
import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll for vanishing effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Scrolling strip data to avoid repetition
  const stripData = [
    { icon: getAssetPath('/img/Group 37828.svg'), alt: 'Assessments', text: 'Discover your strengths through smart assessments' },
    { icon: getAssetPath('/img/Group 37829.svg'), alt: 'Simulations', text: 'Simulate real-world roles to sharpen your edge' },
    { icon: getAssetPath('/img/Group 37830.svg'), alt: 'Portfolio', text: 'Build a portfolio that proves your potential' },
  ];

  const stripStyle = {
    width: 'max-content',
    height: isMobile ? '68px' : '82px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    alignItems: 'center',
    padding: isMobile ? '12px 20px' : '16px 28px',
    gap: isMobile ? '12px' : '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    flexShrink: 0,
  };

  const stripIconStyle = {
    width: isMobile ? '36px' : '50px',
    height: isMobile ? '36px' : '50px',
    flexShrink: 0,
  };

  const stripTextStyle = {
    fontSize: isMobile ? '14px' : '18px',
    fontWeight: '500',
    color: '#6B7280',
    lineHeight: '1.4',
    whiteSpace: 'nowrap',
  };

  const renderStripSet = (keyPrefix) => (
    <div style={{ display: 'flex', gap: isMobile ? '16px' : '24px', paddingRight: isMobile ? '16px' : '24px' }}>
      {stripData.map((strip, i) => (
        <div key={`${keyPrefix}-${i}`} style={stripStyle}>
          <img src={strip.icon} alt={strip.alt} style={stripIconStyle} />
          <span style={stripTextStyle}>{strip.text}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-25px) rotate(-1deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(20px) rotate(-0.5deg); }
          66% { transform: translateY(10px) rotate(0.5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .scroll-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .scroll-content {
          display: flex;
          animation: scrollLeft 30s linear infinite;
          animation-delay: -15s;
        }
        
        .scroll-content:hover {
          animation-play-state: paused;
        }
        
        .animate-float {

          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .parallax-layer {
          transition: transform 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .hero-heading-line {
          display: block;
          white-space: nowrap;
        }

        /* ===== Hero fluid responsive overrides ===== */
        @media (min-width: 768px) and (max-width: 1799px) {
          .hero-section {
            min-height: auto !important;
          }
          .hero-container {
            padding-bottom: 0px !important;
          }
          .hero-heading {
            font-size: clamp(24px, 2.8vw, 52px) !important;
            margin-top: clamp(-170px, -9.5vw, -92px) !important;
          }
          .hero-subheading {
            font-size: clamp(13px, 1.1vw, 19px) !important;
          }
          .hero-image-wrapper {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          .hero-image {
            width: clamp(360px, 39vw, 760px) !important;
            height: clamp(360px, 39vw, 760px) !important;
          }
          .hero-scroll-strip {
            margin-top: -80px !important;
            transform: translateY(-10px);
          }
          .hero-btn {
            padding: clamp(12px, 1vw, 18px) clamp(24px, 2.2vw, 40px) !important;
            font-size: clamp(13px, 0.9vw, 16px) !important;
          }
        }

        /* Keep the hero model anchored like large-screen composition on smaller laptops */
        @media (min-width: 768px) and (max-width: 1400px) {
          .hero-image-wrapper {
            align-self: flex-end !important;
            align-items: flex-end !important;
            margin-top: clamp(16px, 2vw, 36px) !important;
          }
        }
      `}</style>

      <section
        className="hero-section w-full relative bg-white flex"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: getBackgroundImageUrl('/img/Group%2037827.png'),
          backgroundPosition: isMobile ? 'top center' : 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: isMobile ? 'cover' : '100% 100%',
          overflowX: 'hidden',
          overflowY: 'visible',
          alignItems: 'flex-end',
          opacity: Math.max(1 - scrollY * 0.0015, 0),
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <div
          className={`hero-container w-full max-w-[1920px] mx-auto pt-6 lg:pt-0 relative z-10 ${isMobile ? 'px-4 pt-16' : ''}`}
          style={{ paddingBottom: '0px', ...(!isMobile ? { paddingLeft: 'clamp(48px, 5vw, 128px)', paddingRight: 'clamp(48px, 5vw, 128px)' } : {}) }}
        >
          <div className={`w-full flex flex-col lg:flex-row items-center justify-between ${isMobile ? 'gap-6' : 'gap-12'}`}>
            {/* Left Side - Content */}
            <div
              className={`${isMobile ? 'max-w-full ml-0 text-center' : 'ml-[40px]'}`}
              style={!isMobile ? { flex: '0 0 45%', maxWidth: '45%' } : {}}
            >
              {/* Main Heading */}
              <h1
                className={`hero-heading mb-6 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? 'clamp(18px, 5.4vw, 28px)' : 'clamp(24px, 2.8vw, 52px)',
                  fontWeight: 700,
                  lineHeight: isMobile ? '1.2' : '1.16',
                  color: '#0F1114',
                  animationDelay: '0.2s',
                  marginTop: isMobile ? '20px' : 'clamp(-120px, -10vw, -194px)',
                }}
              >
                <span className="hero-heading-line">The AI-Powered Career</span>
                <span className="hero-heading-line">Engine for Tomorrow's Talent</span>
              </h1>

              {/* Subheading */}
              <p
                className={`hero-subheading mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: isMobile ? '16px' : 'clamp(14px, 1.2vw, 20px)',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#71717B',
                  animationDelay: '0.4s',
                }}
              >
                From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation
              </p>

              {/* Buttons */}
              <div
                className={`flex gap-4 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'} ${isMobile ? 'justify-center flex-wrap' : ''}`}
                style={{ animationDelay: '0.6s', flexWrap: isMobile ? 'wrap' : 'nowrap' }}
              >
                {/* Start Your Journey Button */}
                <button
                  className="hover-lift"
                  onClick={() => { window.location.href = getRoutePath('/contact-us'); }}
                  style={{
                    background: 'linear-gradient(90deg, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 28px' : '16px 34px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: isMobile ? '14px' : '14px',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  Start Your Journey
                </button>

                {/* How It Works Button */}
                <button
                  className="hover-lift"
                  onClick={() => { window.location.href = getRoutePath('/') + '#ecosystem-diagram'; }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '8px',
                    padding: isMobile ? '14px 28px' : '16px 34px',
                    border: '1px solid #CC2B2E',
                    cursor: 'pointer',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: isMobile ? '14px' : '15px',
                    fontWeight: 600,
                    color: '#CA2C2E',
                  }}
                >
                  How It Works
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className={`hero-image-wrapper relative flex justify-center lg:justify-end ${isLoaded ? 'animate-fade-in-scale' : 'opacity-0'}`}
              style={{
                zIndex: 20,
                animationDelay: '0.3s',
                ...(!isMobile ? { flex: '0 0 55%', maxWidth: '55%' } : {}),
              }}
            >
              <div
                className="hero-image"
                style={{
                  background: `transparent url(${getAssetPath('/img/02.png')}) center bottom no-repeat padding-box`,
                  width: isMobile ? '320px' : 'clamp(450px, 50vw, 918px)',
                  height: isMobile ? '330px' : 'clamp(450px, 50vw, 918px)',
                  opacity: 1,
                  backgroundSize: 'contain',
                  zIndex: 20,
                  alignSelf: 'flex-end',
                  marginBottom: '0px',
                }}
              >
              </div>
            </div>
          </div>

          {/* Scrolling Strips Section - Full Width */}
          <div
            className="hero-scroll-strip scroll-container"
            style={{
              position: isMobile ? 'absolute' : 'relative',
              bottom: isMobile ? '100px' : 'auto',
              left: isMobile ? '0' : 'auto',
              zIndex: 30,
              width: '100vw',
              marginLeft: isMobile ? '0' : 'calc(-50vw + 50%)',
              marginTop: isMobile ? '0px' : '-80px',
              transform: isMobile ? 'none' : 'translateY(-70px)',
            }}
          >
            <div className="scroll-content">
              {renderStripSet('set-1')}
              {renderStripSet('set-2')}
              {renderStripSet('set-3')}
              {renderStripSet('set-4')}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
