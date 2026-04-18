import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/assets';

const SchoolOfTechnology = () => {
  const [isVisible, setIsVisible] = useState({
    image: false,
    heading: false,
    subheading: false,
    description: false,
    expertiseHeading: false,
    tags: false,
  });  
  const [showPopup, setShowPopup] = useState(false);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const expertiseHeadingRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
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
      { ref: imageRef, type: 'image' },
      { ref: headingRef, type: 'heading' },
      { ref: subheadingRef, type: 'subheading' },
      { ref: descriptionRef, type: 'description' },
      { ref: expertiseHeadingRef, type: 'expertiseHeading' },
      { ref: tagsRef, type: 'tags' },
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .sot-scale-shell {
          width: 100%;
          overflow-x: hidden;
        }

        .sot-scale-content {
          width: 100%;
          transform-origin: top left;
        }

        @media (max-width: 1600px) {
          .sot-scale-content {
            transform: scale(0.95);
            width: calc(100% / 0.95);
          }
        }

        @media (max-width: 1400px) {
          .sot-scale-content {
            transform: scale(0.9);
            width: calc(100% / 0.9);
          }
        }

        @media (max-width: 1200px) {
          .sot-scale-content {
            transform: scale(0.85);
            width: calc(100% / 0.85);
          }
        }

        @media (max-width: 1000px) {
          .sot-scale-content {
            transform: scale(0.8);
            width: calc(100% / 0.8);
          }
        }

        @media (max-width: 850px) {
          .sot-scale-content {
            transform: scale(0.74);
            width: calc(100% / 0.74);
          }
        }

        @media (max-width: 767px) {
          .sot-row {
            align-items: stretch !important;
          }
          .sot-content {
            width: 100% !important;
            flex: 0 0 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .sot-image {
            width: 100% !important;
            height: 300px !important;
            background-size: cover !important;
            background-position: center !important;
          }
          .sot-heading {
            font-size: 28px !important;
          }
          .sot-subheading {
            font-size: 18px !important;
          }
          .sot-description {
            font-size: 15px !important;
            margin-bottom: 24px !important;
          }
          .sot-expertise-heading {
            font-size: 20px !important;
          }
          .sot-tag {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
      <section className="w-full bg-white pt-0 pb-16 lg:pb-20">
        <div className="sot-scale-shell">
          <div className="sot-scale-content">
            <div className="max-w-[1920px] mx-auto">
              <div className="sot-row flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Left Side - Image */}
            <div
              ref={imageRef}
              className={`sot-image ${isVisible.image ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{
                left: '0px',
                width: '650px',
                height: '665px',
                background: `transparent url(${getAssetPath('/img/Group%2037833.png')}) 0% 0% no-repeat padding-box`,
                backgroundSize: 'contain',
                opacity: 1,
              }}
            >
            </div>

            {/* Right Side - Content */}
            <div className="sot-content flex-1 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
              {/* Main Heading */}
              <h2
                ref={headingRef}
                className={`sot-heading mb-4 ${isVisible.heading ? 'animate-fade-in-right' : 'opacity-0'}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '48px',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  color: '#0F1114',
                }}
              >
                School of Technology
              </h2>

              {/* Subheading */}
              <h3
                ref={subheadingRef}
                className={`sot-subheading mb-6 ${isVisible.subheading ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '1.2',
                  color: '#71717B',
                }}
              >
                Elevate Your Expertise with Future-Ready Skills
              </h3>

              {/* Description */}
              <p
                ref={descriptionRef}
                className={`sot-description mb-12 ${isVisible.description ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#71717B',
                }}
              >
                Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.
              </p>

              {/* Areas of Expertise */}
              <h4
                ref={expertiseHeadingRef}
                className={`sot-expertise-heading mb-6 ${isVisible.expertiseHeading ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  color: '#0F1114',
                }}
              >
                Areas of Expertise
              </h4>

              {/* Tags/Pills */}
              <div
                ref={tagsRef}
                className={`flex flex-wrap gap-3 md:gap-4 ${isVisible.tags ? 'animate-pop-in delay-400' : 'opacity-0'}`}
              >
                <div
                  onClick={() => setShowPopup(true)}
                  className="sot-tag cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    background: '#D4EDFA',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0F1114',
                  }}
                >
                  AI & Quantum
                </div>
                <a
                  href="https://globalschoolofsustainability.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sot-tag cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    background: '#D4EDFA',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0F1114',
                    textDecoration: 'none'
                  }}
                >
                  Sustainability & Climate Action
                </a>
                <div
                  onClick={() => setShowPopup(true)}
                  className="sot-tag cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    background: '#D4EDFA',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0F1114',
                  }}
                >
                  Aerial Intelligence
                </div>
                <div
                  onClick={() => setShowPopup(true)}
                  className="sot-tag cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    background: '#D4EDFA',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0F1114',
                  }}
                >
                  Design Thinking
                </div>
                <div
                  onClick={() => setShowPopup(true)}
                  className="sot-tag cursor-pointer hover:opacity-80 transition-opacity"
                  style={{
                    background: '#D4EDFA',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#0F1114',
                  }}
                >
                  EV & E-Mobility
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-2xl transform transition-all animate-pop-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#D4EDFA] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#713593]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['DM_Sans']">Coming Soon!</h3>
              <p className="text-gray-600 mb-6 font-['Lato']">We're working hard to bring this area of expertise to you. Stay tuned!</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="px-6 py-2 bg-[#713593] text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors font-['DM_Sans']"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolOfTechnology;
