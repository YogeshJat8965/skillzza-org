import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';

const Partnerships = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    content: false,
    cards: false,
  });

  const contentRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: contentRef, type: 'content' },
      { ref: cardsRef, type: 'cards' },
    ];

    refs.forEach(({ ref, type }) => {
      if (ref.current) {
        ref.current.dataset.elementType = type;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    { id: 1, icon: getAssetPath('/img/g2475.svg'), title: 'Schools / Universities', description: 'Partnering to Cultivate the Next Generation of Leaders', bgColor: '#E6E6E6', targetHash: '#schools' },
    { id: 2, icon: getAssetPath('/img/corporation.svg'), title: 'Corporates', description: 'Driving Business Success through Workforce', bgColor: '#E6E6E6', targetHash: '#corporates' },
    { id: 3, icon: getAssetPath('/img/government.svg'), title: 'Government', description: 'Building a Skilled Workforce for a Stronger', bgColor: '#E6E6E6', targetHash: '#government' },
    { id: 4, icon: getAssetPath('/img/Group%2023779.svg'), title: 'Become our upskilling partner', description: 'Join Us in Shaping the Future of Work', bgColor: '#EAE8E8', targetHash: '#upskilling' },
  ];

  return (
    <>
      <style>{`
        /* ===== Partnerships Section Premium Scroll Animations ===== */
        
        @keyframes partnerBlurReveal {
          from {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
          }
        }
        
        @keyframes partnerTextSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes partnerCardPop {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.92);
          }
          60% {
            opacity: 1;
            transform: translateY(-6px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .partner-blur-reveal {
          animation: partnerBlurReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .partner-text-slide {
          animation: partnerTextSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .partner-text-slide-d1 {
          animation-delay: 0.15s;
        }
        
        .partner-text-slide-d2 {
          animation-delay: 0.3s;
        }
        
        .partner-card-pop {
          animation: partnerCardPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .partner-card-d1 { animation-delay: 0.1s; }
        .partner-card-d2 { animation-delay: 0.2s; }
        .partner-card-d3 { animation-delay: 0.35s; }
        .partner-card-d4 { animation-delay: 0.5s; }
        
        .partner-card-interactive {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.4s ease,
                      background 0.35s ease;
        }
        
        .partner-card-interactive:hover {
          transform: scale(1.05) translateY(-8px) !important;
          box-shadow: 0 24px 50px rgba(146, 104, 168, 0.3) !important;
        }
        
        .partner-card-interactive:hover .partner-card-icon {
          transform: scale(1.15) rotate(5deg);
          filter: brightness(0) invert(1);
        }
        
        .partner-card-icon {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      filter 0.35s ease;
        }

        @media (max-width: 767px) {
          .partnerships-heading {
            font-size: 28px !important;
          }
          .partnerships-desc {
            font-size: 15px !important;
          }
          .partner-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .partner-card-item {
            height: auto !important;
            min-height: unset !important;
            padding: 16px !important;
          }
          .partner-card-item h3 {
            font-size: 14px !important;
          }
          .partner-card-item p {
            font-size: 12px !important;
          }
          .partner-card-item .partner-card-icon {
            width: 32px !important;
            height: 32px !important;
          }
          .partner-card-offset {
            margin-top: 0px !important;
          }
        } /* Closing brace for max-width: 767px */

        .partnerships-wrapper-section {
          margin-top: -160px;
          z-index: 20;
        }
        @media (max-width: 1200px) {
          .partnerships-wrapper-section {
            margin-top: -100px;
          }
        }
        @media (max-width: 767px) {
          .partnerships-wrapper-section {
            margin-top: -40px;
          }
        }
      `}</style>
      <section
        className="partnerships-wrapper-section w-full relative flex items-start justify-center bg-white bg-cover bg-center bg-no-repeat min-h-0 sm:min-h-[460px] lg:min-h-[520px] xl:min-h-[560px]"
        style={{ backgroundImage: getBackgroundImageUrl('/img/Group%2037834.png') }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 w-full pt-2 sm:pt-3 lg:pt-4 pb-2 sm:pb-4 lg:pb-6">
          <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 w-full items-center justify-center">
            {/* Left — Content */}
            <div
              ref={contentRef}
              className={`flex-1 max-w-xl lg:text-left text-center ${isVisible.content ? '' : 'opacity-0'}`}
            >
              <h2
                className={`partnerships-heading mb-4 sm:mb-5 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-[46px] ${isVisible.content ? 'partner-blur-reveal' : 'opacity-0'}`}
              >
                Partnerships For <br className="hidden sm:block" />Impact
              </h2>
              <p
                className={`partnerships-desc mb-4 sm:mb-5 font-[Lato] text-[#71717B] font-normal leading-relaxed text-[18px] ${isVisible.content ? 'partner-text-slide partner-text-slide-d1' : 'opacity-0'}`}
              >
                At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce.
              </p>
              <p
                className={`partnerships-desc font-[Lato] text-[#71717B] font-normal leading-relaxed text-[18px] ${isVisible.content ? 'partner-text-slide partner-text-slide-d2' : 'opacity-0'}`}
              >
                Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
              </p>
            </div>

            {/* Right — Cards */}
            <div
              ref={cardsRef}
              className="flex-1 w-full max-w-[620px] mx-auto lg:mx-0 gap-x-[12px]"
            >
              <div className="partner-cards-grid grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-x-10 gap-y-3 sm:gap-y-0">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    onClick={() => { window.location.href = getRoutePath('/company/partnerships' + card.targetHash); }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`partner-card-item partner-card-interactive cursor-pointer flex flex-col justify-start p-4 sm:p-5 lg:p-6 h-auto sm:h-[196px] ${index === 1 || index === 3 ? 'sm:mt-[60px] partner-card-offset' : ''} ${isVisible.cards ? `partner-card-pop partner-card-d${index + 1}` : 'opacity-0'}`}
                    style={{
                      background: hoveredCard === card.id ? '#9268A8' : card.bgColor,
                      boxShadow: hoveredCard === card.id ? '0px 24px 50px rgba(146, 104, 168, 0.3)' : '0px 3px 6px #00000029',
                      borderRadius: index === 0 ? '8px' : '20px',
                    }}
                  >
                    <div className="mb-2 sm:mb-3">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="partner-card-icon w-9 h-9 sm:w-10 sm:h-10"
                        style={{
                          filter: hoveredCard === card.id ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                        }}
                      />
                    </div>
                    <h3
                      className="mb-2 sm:mb-2 font-[DM_Sans] font-semibold leading-tight text-sm sm:text-base lg:text-[18px] transition-colors duration-300"
                      style={{ color: hoveredCard === card.id ? '#FFFFFF' : '#0F1114' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-[Lato] font-normal leading-normal text-xs sm:text-[14px] lg:text-[15px] transition-colors duration-300"
                      style={{ color: hoveredCard === card.id ? '#FFFFFF' : '#71717B' }}
                    >
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
