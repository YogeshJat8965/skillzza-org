import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const ResponsibleAI = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/AIDataEngineergooglecloud.png'),
          minHeight: '60vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              RESPONSIBLE AI AT SKILLZZA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Ethical Intelligence for the Future of Work
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-4">
              At Skillzza, we're shaping the future of workforce development through advanced, AI-driven technologies-built with responsibility, transparency, and equity at their core. We understand that with innovation comes a deep responsibility to design systems that are fair, explainable, and human-centric.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              As AI becomes a transformative force across industries, Skillzza is committed to ensuring that this power is used to amplify opportunity, not inequality. Our Responsible AI framework is embedded in every layer of our platform-from talent simulations and assessments to personalized upskilling journeys and employer insights.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to Responsible AI</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Responsible AI is more than a philosophy-it's a foundational element of how Skillzza designs and delivers impact. We are committed to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Ethical Innovation</h3>
              <p className="text-gray-600 text-center">
                That prioritizes fairness and inclusivity in every AI decision we make.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Transparent Systems</h3>
              <p className="text-gray-600 text-center">
                That empower users to understand and trust AI-driven decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Human-First Design</h3>
              <p className="text-gray-600 text-center">
                That supports, not replaces, workforce decision-makers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Through strategic collaborations with global ethics boards and workforce policy leaders, we ensure that our AI not only meets the highest standards but evolves with societal and regulatory expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Five Pillars of Responsible AI at Skillzza</h2>
          </div>

          {/* Pillar 1: Explainability & Interpretability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={getAssetPath('/aIdataAnalyticsDecisions_tile.jpg')} 
                alt="Explainability & Interpretability" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">Explainability & Interpretability</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every AI decision should be clear. Our models offer full visibility into how skills, roles, and experiences are matched-empowering users with actionable, understandable insights.
              </p>
            </div>
          </div>

          {/* Pillar 2: Fairness by Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Fairness by Design</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We build bias-aware algorithms that focus solely on skills and potential-intentionally removing demographic identifiers to ensure equitable hiring and advancement opportunities.
              </p>
            </div>
            <div className="relative">
              <img 
                src={getAssetPath('/transformskill_futureset.png')} 
                alt="Fairness by Design" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>

          {/* Pillar 3: Model Robustness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={getAssetPath('/data_ai.jpg')}
                alt="Model Robustness" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-green-600 mb-6 text-center">Model Robustness</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our systems are trained on dynamic, diverse datasets to ensure accuracy, reliability, and scalability across regions, industries, and workforce segments.
              </p>
            </div>
          </div>

          {/* Pillar 4: Data Rights & Privacy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">Data Rights & Privacy</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respecting data sovereignty is non-negotiable. We uphold strict compliance with global privacy regulations and maintain transparency in how we collect, use, and protect user data.
              </p>
            </div>
            <div className="relative">
              <img 
                src={getAssetPath('/citizen_data_privacy_tile.png')} 
                alt="Data Rights & Privacy" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>

          {/* Pillar 5: Accountability & Governance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={getAssetPath('/regulatorycompliance_tile.png')} 
                alt="Accountability & Governance" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">Accountability & Governance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                From internal audits to external ethics reviews, our AI systems are continuously monitored and improved through a rigorous governance framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human-Centric Intelligence Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Human-Centric Intelligence</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Skillzza's AI is designed to enhance human decision-making, not automate it blindly. By surfacing skill-based, data-driven recommendations, we empower:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Candidates */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6">
                <img 
                  src={getAssetPath('/forstudentuse.jpg')} 
                  alt="For Candidates" 
                  className="w-full h-64 object-contain rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Candidates</h3>
              <p className="text-gray-600">
                To discover career pathways that reflect their potential-not just past experience.
              </p>
            </div>

            {/* For Employers */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6">
                <img 
                  src={getAssetPath('/forproffession.jpg')} 
                  alt="For Employers" 
                  className="w-full h-64 object-contain rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Employers</h3>
              <p className="text-gray-600">
                To identify, evaluate, and grow talent with predictive, unbiased insights.
              </p>
            </div>

            {/* For Employees */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-6">
                <img 
                  src={getAssetPath('/upskilling_forAi_tile_img.jpeg')} 
                  alt="For Employees" 
                  className="w-full h-64 object-contain rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Employees</h3>
              <p className="text-gray-600">
                To plan their upskilling journey with confidence, clarity, and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Responsible Workforce Ecosystem */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={getAssetPath('/company_header_img.jpg')} 
                alt="Responsible Workforce Ecosystem" 
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Building a Responsible Workforce Ecosystem</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform spans the entire talent lifecycle-from career discovery and skill simulation to talent acquisition, upskilling, and retention. At every stage, Skillzza ensures that AI is deployed ethically to create inclusive, data-driven talent ecosystems that benefit both individuals and organizations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that the future of work must be intelligent, inclusive, and equitable-and we're building that future today, powered by Responsible AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: getBackgroundImageUrl('/cta_banner.png') }}>
        <div className="absolute inset-0 bg-orange-500/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building Ethical AI for the Future of Work
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Partner with Skillzza to create AI solutions that are not just powerful, but also principled, transparent, and purposeful.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Learn More About Our Standards
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleAI;
