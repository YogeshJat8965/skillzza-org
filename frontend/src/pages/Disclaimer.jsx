import React, { useEffect } from 'react';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F5] flex flex-col font-sans relative">
      {/* Decorative top gradient bar */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#BD1723] via-[#8947B3] to-[#CF2C2E] z-10"></div>
      
      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle background circle for branding flair */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BD1723] opacity-5 rounded-full blur-2xl"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#0F1114] mb-4 font-display tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Disclaimer<span className="text-[#BD1723]"></span>
          </h1>
          <p className="text-[#52525B] mb-10 font-medium pb-8 border-b border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD1723]"></span>
            Important Notice
          </p>
          
          <div className="prose prose-gray max-w-none text-[#4B5563] leading-relaxed space-y-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: '18px' }}>
            <h2 className="text-2xl font-bold text-[#0F1114] mt-8 mb-5 flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-[#BD1723]">Caution</span>
            </h2>
            
            <div className="bg-[#FEF2F2] border-l-4 border-[#BD1723] p-6 rounded-r-xl shadow-sm mb-8 text-[#991B1B]">
              <p className="font-semibold mb-0">
                It has come to the notice of Skillzza that some unidentified persons are claiming to have tie-ups with Skillzza and have been assuring collaboration with Skillzza, placements, and training opportunities.
              </p>
            </div>

            <p>
              It is hereby brought to the notice of the general public that any such communication from any third party claiming to have tie-ups with Skillzza assuring placements are completely false and have not been authorized by Skillzza.
            </p>

            <p>
              Skillzza has not engaged any such third parties to provide such services for Skillzza, and all these are misleading unauthorized representations.
            </p>

            <p className="font-medium text-[#1F2937]">
              The public is hereby cautioned that they should not fall prey to such false communication/advertisement and share their personal details or money with such persons.
            </p>

            <p>
              Skillzza shall not be liable for any loss, damages, or claims that may arise on account of relying on such false advertisements. We request the general public to be vigilant on such matters and if such misleading advertisements are noticed, we request that such matters be reported to Skillzza at the email mentioned below.
            </p>

            <div className="bg-gradient-to-r from-[#faf2f3] to-[#F8FAFC] p-6 rounded-xl border border-[#f5d0d3] mt-10 shadow-sm relative overflow-hidden inline-block pr-16">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#BD1723]"></div>
              <p className="mb-0">
                <strong className="text-[#374151]">Report to:</strong>{' '}
                <a href="mailto:contact@skillzza.com" className="text-[#BD1723] hover:text-[#8b1019] hover:underline transition-colors font-medium text-lg ml-2">
                  contact@skillzza.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
