import React from 'react';

const OurPartners = () => {
  const firstRowPartners = [
    { img: '/img/Group%2023862.png', alt: 'NSDC' },
    { img: '/img/Group%2034185.png', alt: 'Adobe' },
    { img: '/img/Group%2023863.png', alt: 'Meta' },
    { img: '/img/Mask%20Group%2030.png', alt: 'Microsoft' },
    { img: '/img/Group%2023839.png', alt: 'Google' },
  ];

  const secondRowPartners = [
    { img: '/img/Group%2023838.png', alt: 'Startup India' },
    { img: '/img/Group%2023867.png', alt: 'Ministry of MSME' },
    { img: '/img/Group%2023868.png', alt: 'Startup India' },
    { img: '/img/Group%2023869.png', alt: 'HP' },
    { img: '/img/Group%2023864.png', alt: 'AWS' },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
            Our Partners
          </h2>
          <p className="font-[Lato] text-[#71717B] font-normal leading-relaxed text-base sm:text-lg lg:text-xl">
            Take your skill transformation to the next level.
          </p>
        </div>
      </div>

      {/* Row 1 — Scrolling Right to Left */}
      <div className="relative mb-6 sm:mb-8 h-[70px] sm:h-[90px] lg:h-[112px] w-full">
        <div className="absolute flex gap-4 sm:gap-6 lg:gap-8 animate-[scrollRTL_30s_linear_infinite]">
          {[...firstRowPartners, ...firstRowPartners, ...firstRowPartners].map((partner, i) => (
            <div key={`r1-${i}`} className="w-[180px] sm:w-[230px] lg:w-[293px] h-[70px] sm:h-[90px] lg:h-[112px] flex items-center justify-center flex-shrink-0">
              <img src={partner.img} alt={partner.alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        {/* Left Fade - extends to viewport edge */}
        <div className="absolute left-0 top-0 w-48 sm:w-56 lg:w-64 h-full pointer-events-none z-10" 
             style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
        {/* Right Fade - extends to viewport edge */}
        <div className="absolute right-0 top-0 w-48 sm:w-56 lg:w-64 h-full pointer-events-none z-10" 
             style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
      </div>

      {/* Row 2 — Scrolling Left to Right */}
      <div className="relative h-[70px] sm:h-[90px] lg:h-[112px] w-full">
        <div className="absolute flex gap-4 sm:gap-6 lg:gap-8 animate-[scrollLTR_30s_linear_infinite]">
          {[...secondRowPartners, ...secondRowPartners, ...secondRowPartners].map((partner, i) => (
            <div key={`r2-${i}`} className="w-[180px] sm:w-[230px] lg:w-[293px] h-[70px] sm:h-[90px] lg:h-[112px] flex items-center justify-center flex-shrink-0">
              <img src={partner.img} alt={partner.alt} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        {/* Left Fade - extends to viewport edge */}
        <div className="absolute left-0 top-0 w-48 sm:w-56 lg:w-64 h-full pointer-events-none z-10" 
             style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
        {/* Right Fade - extends to viewport edge */}
        <div className="absolute right-0 top-0 w-48 sm:w-56 lg:w-64 h-full pointer-events-none z-10" 
             style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
      </div>

      <style>{`
        @keyframes scrollRTL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollLTR {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
