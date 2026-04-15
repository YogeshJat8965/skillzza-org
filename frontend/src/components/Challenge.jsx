import React, { useState, useEffect, useRef } from 'react';

const Challenge = () => {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    image: false,
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  const [counters, setCounters] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0,
  });

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);


  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        // Image and heading: animate once, never reset
        if (elementType === 'image' || elementType === 'heading') {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [elementType]: true }));
          }
        } else {
          // Cards: toggle so counters can reset
          setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: headingRef, type: 'heading' },
      { ref: imageRef, type: 'image' },
      { ref: card1Ref, type: 'card1' },
      { ref: card2Ref, type: 'card2' },
      { ref: card3Ref, type: 'card3' },
      { ref: card4Ref, type: 'card4' },
    ];

    refs.forEach(({ ref, type }) => {
      if (ref.current) {
        ref.current.dataset.elementType = type;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Animate counters when cards become visible
  useEffect(() => {
    const targetValues = {
      card1: 69,
      card2: 74,
      card3: 59,
      card4: 63,
    };

    const animateCounter = (cardKey, targetValue) => {
      if (!isVisible[cardKey]) {
        setCounters(prev => ({ ...prev, [cardKey]: 0 }));
        return;
      }

      const duration = 1800;
      const steps = 50;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        // Ease-out curve for more natural counting
        const easedProgress = 1 - Math.pow(1 - currentStep / steps, 3);
        if (currentStep >= steps) {
          setCounters(prev => ({ ...prev, [cardKey]: targetValue }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [cardKey]: Math.floor(targetValue * easedProgress) }));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const cleanup1 = animateCounter('card1', targetValues.card1);
    const cleanup2 = animateCounter('card2', targetValues.card2);
    const cleanup3 = animateCounter('card3', targetValues.card3);
    const cleanup4 = animateCounter('card4', targetValues.card4);

    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
      cleanup4 && cleanup4();
    };
  }, [isVisible.card1, isVisible.card2, isVisible.card3, isVisible.card4]);



  return (
    <>
      <style>{`
        /* ===== Challenge Section Premium Scroll Animations ===== */
        
        @keyframes challengeBlurReveal {
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
        
        @keyframes challengeImageReveal {
          from {
            opacity: 0;
            transform: scale(0.88) translateY(40px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }
        
        @keyframes challengeCardPop {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-8px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes challengeShine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .challenge-blur-reveal {
          animation: challengeBlurReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .challenge-image-reveal {
          animation: challengeImageReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .challenge-card-pop {
          animation: challengeCardPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .challenge-card-pop-delay-1 {
          animation-delay: 0.1s;
        }
        .challenge-card-pop-delay-2 {
          animation-delay: 0.25s;
        }
        .challenge-card-pop-delay-3 {
          animation-delay: 0.4s;
        }
        .challenge-card-pop-delay-4 {
          animation-delay: 0.55s;
        }
        
        .challenge-card-hover {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        
        .challenge-card-hover:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 50px rgba(208, 44, 47, 0.35);
        }
        
        .challenge-percent-shine {
          background: linear-gradient(
            90deg,
            #FFFFFF 0%,
            #FFFFFF 40%,
            rgba(255, 255, 255, 0.6) 50%,
            #FFFFFF 60%,
            #FFFFFF 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: challengeShine 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Mobile overrides for Challenge */
        @media (max-width: 767px) {
          .challenge-heading {
            font-size: 28px !important;
          }
          .challenge-sub-heading {
            font-size: 24px !important;
          }
          .challenge-desc {
            font-size: 15px !important;
          }
          .challenge-image {
            width: 100% !important;
            height: 300px !important;
            background-size: cover !important;
          }
          .challenge-cards-grid {
            width: 100% !important;
            grid-template-columns: 1fr !important;
          }
          .challenge-card {
            width: 100% !important;
            height: auto !important;
            min-height: 240px !important;
            padding: 24px 20px !important;
          }
          .challenge-card-percent {
            font-size: 48px !important;
          }
          .challenge-card-title {
            font-size: 20px !important;
          }
          .challenge-card-desc {
            font-size: 15px !important;
          }
        }
      `}</style>
      <section
        ref={sectionRef}
        className="w-full bg-white pb-16 lg:pb-20 relative"
        style={{
          marginTop: '-80px',
          paddingTop: '80px',
          zIndex: 10,
          overflow: 'hidden',
        }}
      >

        {/* Heading and Description */}
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32">
          <div
            ref={headingRef}
            className={`text-center mb-12 lg:mb-16 ${isVisible.heading ? 'challenge-blur-reveal' : 'opacity-0'}`}
          >
            <h2
              className="challenge-heading"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
                marginBottom: '16px',
              }}
            >
              The Challenge
            </h2>
            <h3
              className="challenge-sub-heading"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '42px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
                marginBottom: '24px',
              }}
            >
              A Widening Skill Gap
            </h3>
            <p
              className="max-w-4xl mx-auto challenge-desc"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-[1920px] mx-auto px-4 md:px-0">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left Side - Image */}
            <div
              ref={imageRef}
              className={`challenge-image ${isVisible.image ? 'challenge-image-reveal' : 'opacity-0'}`}
              style={{
                background: '#F8F8F8 url(/img/Group%2037831.png) center center no-repeat',
                backgroundSize: 'contain',
                width: '778px',
                height: '756px',
                opacity: 1,
                borderRadius: '8px',
              }}
            >
            </div>

            {/* Right Side - Stats Cards */}
            <div
              className="challenge-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              style={{
                width: '998px',
              }}
            >
              {/* Card 1: 69% */}
              <div
                ref={card1Ref}
                className={`challenge-card challenge-card-hover ${isVisible.card1 ? 'challenge-card-pop challenge-card-pop-delay-1' : 'opacity-0'}`}
                style={{
                  background: '#D02C2F 0% 0% no-repeat padding-box',
                  borderRadius: '8px',
                  opacity: 1,
                  width: '487px',
                  height: '366px',
                  padding: '32px 40px 40px 48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  letterSpacing: '-0.5px',
                }}
              >
                <h4
                  className={`challenge-card-percent ${isVisible.card1 ? 'challenge-percent-shine' : ''}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '96px',
                    fontWeight: 700,
                    lineHeight: '1',
                    color: '#FFFFFF',
                    marginBottom: '14px',
                  }}
                >
                  {counters.card1}%
                </h4>
                <h5
                  className="challenge-card-title"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    color: '#FFFFFF',
                    marginBottom: '24px',
                  }}
                >
                  The Recruitment Crisis
                </h5>
                <p
                  className="challenge-card-desc"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    color: '#FFFFFF',
                  }}
                >
                  Nearly 69% of organizations report ongoing difficulties recruiting for full-time roles reflecting persistent hiring challenges across sectors.
                </p>
              </div>

              {/* Card 2: 74% */}
              <div
                ref={card2Ref}
                className={`challenge-card challenge-card-hover ${isVisible.card2 ? 'challenge-card-pop challenge-card-pop-delay-2' : 'opacity-0'}`}
                style={{
                  background: '#D02C2F 0% 0% no-repeat padding-box',
                  borderRadius: '8px',
                  opacity: 1,
                  width: '487px',
                  height: '366px',
                  padding: '32px 40px 40px 48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <h4
                  className={`challenge-card-percent ${isVisible.card2 ? 'challenge-percent-shine' : ''}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '96px',
                    fontWeight: 700,
                    lineHeight: '1',
                    color: '#FFFFFF',
                    marginBottom: '14px',
                  }}
                >
                  {counters.card2}%
                </h4>
                <h5
                  className="challenge-card-title"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    color: '#FFFFFF',
                    marginBottom: '24px',
                  }}
                >
                  The AI Training Gap
                </h5>
                <p
                  className="challenge-card-desc"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    color: '#FFFFFF',
                  }}
                >
                  Although 74% of employees use AI tools  at work, only 33% have received formal training to use them effectively and safely.
                </p>
              </div>

              {/* Card 3: 59% */}
              <div
                ref={card3Ref}
                className={`challenge-card challenge-card-hover ${isVisible.card3 ? 'challenge-card-pop challenge-card-pop-delay-3' : 'opacity-0'}`}
                style={{
                  background: '#D02C2F 0% 0% no-repeat padding-box',
                  borderRadius: '8px',
                  opacity: 1,
                  width: '487px',
                  height: '366px',
                  padding: '32px 40px 40px 48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <h4
                  className={`challenge-card-percent ${isVisible.card3 ? 'challenge-percent-shine' : ''}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '96px',
                    fontWeight: 700,
                    lineHeight: '1',
                    color: '#FFFFFF',
                    marginBottom: '14px',
                  }}
                >
                  {counters.card3}%
                </h4>
                <h5
                  className="challenge-card-title"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    color: '#FFFFFF',
                    marginBottom: '24px',
                  }}
                >
                  The Reskilling Imperative
                </h5>
                <p
                  className="challenge-card-desc"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    color: '#FFFFFF',
                  }}
                >
                  By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025.
                </p>
              </div>

              {/* Card 4: 63% */}
              <div
                ref={card4Ref}
                className={`challenge-card challenge-card-hover ${isVisible.card4 ? 'challenge-card-pop challenge-card-pop-delay-4' : 'opacity-0'}`}
                style={{
                  background: '#D02C2F 0% 0% no-repeat padding-box',
                  borderRadius: '8px',
                  opacity: 1,
                  width: '487px',
                  height: '366px',
                  padding: '32px 40px 40px 48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <h4
                  className={`challenge-card-percent ${isVisible.card4 ? 'challenge-percent-shine' : ''}`}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '96px',
                    fontWeight: 700,
                    lineHeight: '1',
                    color: '#FFFFFF',
                    marginBottom: '14px',
                  }}
                >
                  {counters.card4}%
                </h4>
                <h5
                  className="challenge-card-title"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    color: '#FFFFFF',
                    marginBottom: '24px',
                  }}
                >
                  Skills Are the Biggest Barrier
                </h5>
                <p
                  className="challenge-card-desc"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    color: '#FFFFFF',
                  }}
                >
                  With 63% of employers citing skill gaps as the top barrier to transformation, 85% plan to prioritize workforce upskilling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenge;
