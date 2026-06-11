import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/assets';

const SkillzzaEcosystem = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    diagram: false,
  });

  const headerRef = useRef(null);
  const diagramRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        // Toggle visibility - animations run every time element enters viewport
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: headerRef, type: 'header' },
      { ref: diagramRef, type: 'diagram' },
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
        @keyframes fadeInZoom {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-zoom {
          animation: fadeInZoom 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-from-bottom {
          animation: slideInFromBottom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      <section id="ecosystem-diagram"
        className="w-full pt-4 pb-8 lg:pt-6 lg:pb-12 overflow-hidden bg-white flex justify-center"
      >
        <div style={{ position: 'relative', width: '92%', maxWidth: '1440px', margin: '0 auto' }}>
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`w-full text-center ${isVisible.header ? 'animate-fade-in-zoom' : 'opacity-0'}`}
            style={{ position: 'absolute', top: '5%', left: 0, right: 0, zIndex: 10, padding: '0 20px' }}
          >
            <h2
              className="mb-2 sm:mb-3"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(20px, 2.8vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#0F1114',
              }}
            >
              Skill Ecosystem
            </h2>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 'clamp(14px, 2vw, 20px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#52525B',
                fontStyle: 'italic',
              }}
            >
              Empowering Every Learner, Every Step of the Way
            </p>
          </div>

          {/* Ecosystem Diagram */}
          <div
            ref={diagramRef}
            className={`w-full ${isVisible.diagram ? 'animate-slide-in-from-bottom' : 'opacity-0'}`}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <img
              src={getAssetPath('/img/Group 37832.jpeg')}
              alt="Skillzza Ecosystem diagram showing five interconnected platforms: The Potential Meter (AI Skill Engine), Talent Twin (Immersive Learning Labs), Talent Intelligence (Career Mobility Pipeline), AI HackNex (Talent Marketplace), and Hire Twin(Career Mobility Pipeline). Bottom process flow shows Assessment, Mentoring, Simulations, Project Showcase, and Get Hired."
              className="w-full"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillzzaEcosystem;
