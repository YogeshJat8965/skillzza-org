import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const ProductCatalog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/transformskill_futureset.png'),
          minHeight: '60vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              PRODUCT CATALOG
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Careers with Our Complete Product Suite
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              Explore our comprehensive ecosystem of AI-powered products designed to transform talent development, workforce readiness, and career acceleration across the entire professional lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Xperience Platform */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Image - Left */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/transformskill_futureset.png')} alt="Xperience Platform" className="w-full h-full object-cover" />
            </div>
            
            {/* Content - Right */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-4">
                XPERIENCE PLATFORM
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Experience the Real World Before You Enter It</h2>
              <p className="text-lg text-gray-700">
                The Xperience Platform brings immersive, job-aligned simulations to life-empowering learners with actionable experience that mirrors the intensity, ambiguity, and precision of actual industry roles. It transcends theoretical instruction to foster real-time decision-making and execution confidence.
              </p>
              <p className="text-base text-gray-700">
                At Skillzza, we champion experiential competence as the cornerstone of future employability. Through challenge-based, domain-specific learning modules, individuals gain both the technical and human-centric capabilities demanded in the modern workplace.
              </p>
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Real-world Job Simulations</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Workplace Readiness</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Domain-Specific Challenges</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We operationalize experiential intelligence by embedding learners into high-fidelity simulations that replicate the nuance, pressure, and complexity of real-world job functions. This immersion cultivates agile problem-solving, adaptive execution, and domain-specific fluency-essential for thriving in dynamic professional environments.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Scenario-Calibrated Simulations</h4>
                <p className="text-gray-600 text-sm">Each module is modeled on real-time workflows, job pressures, and decision checkpoints reflective of industry-standard functions.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Validated, Role-Mapped Portfolios</h4>
                <p className="text-gray-600 text-sm">Learners graduate with a tangible, evidence-based portfolio mapped directly to employer expectations and job-level KPIs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Competency Acceleration Framework</h4>
                <p className="text-gray-600 text-sm">Builds multi-dimensional fluency-technical acumen, critical thinking, and communication-in synchronized, measurable pathways.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Adaptive Feedback</h4>
                <p className="text-gray-600 text-sm">Dynamic learner inputs trigger adaptive responses, mirroring actual consequences of workplace decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Potential Meter */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Content and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Content - Left */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold text-white mb-4">
                POTENTIAL METER
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Unlock Your Hidden Potential</h2>
              <p className="text-lg text-gray-700">
                Potential Meter is Skillzza's precision diagnostic tool that decodes individual strengths, aspirations, and readiness across cognitive, emotional, and technical dimensions.
              </p>
              <p className="text-base text-gray-700">
                More than an assessment-it's a strategic compass for personalized learning design, career direction, and growth optimization.
              </p>
            </div>
            
            {/* Image - Right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/potential_meter_right_img.png')} alt="Potential Meter" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">AI-Based Skill Assessment</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Career Guidance and Mapping</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Behavioral & Soft Skills Analysis</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We deploy AI-augmented diagnostics to distill granular insights across technical acumen, cognitive agility, and behavioral alignment. By mapping individual capability to role archetypes, we deliver precision-driven pathways for accelerated career navigation, personalized mentoring, and strategic upskilling.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Multilayered Competency Analytics</h4>
                <p className="text-gray-600 text-sm">Simultaneous assessment of IQ, EQ, technical depth, adaptability, and communication within contextual simulations.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Personalized Career Blueprints</h4>
                <p className="text-gray-600 text-sm">Role-fit mapping driven by user data, aligned to global career pathways, skill market trends, and future-of-work models.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">4M Career Readiness Index</h4>
                <p className="text-gray-600 text-sm">Proprietary model (Mirroring, Mentoring, Mapping, March Past) for continuous improvement and outcome orientation.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Mentor-Activated Insights</h4>
                <p className="text-gray-600 text-sm">Actionable reporting linked directly to mentoring tools, peer reviews, and feedback loops to support iterative growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Intelligence Suite */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Image - Left */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/DataIntelligence_tile.png')} alt="Talent Intelligence Suite" className="w-full h-96 object-cover" />
            </div>
            
            {/* Content - Right */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-purple-500 rounded-full text-sm font-semibold text-white mb-4">
                TALENT INTELLIGENCE SUITE (TIS)
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Transform Data into Talent Decisions</h2>
              <p className="text-lg text-gray-700">
                The Talent Intelligence Suite (TIS) is an integrated analytics engine that constructs deep, behavioral-talent graphs, enabling hyper-personalized role matching, future-readiness scoring, and predictive performance mapping.
              </p>
              <p className="text-base text-gray-700">
                TIS is not just a profiling system-it's an intelligent decision accelerator for individuals, organizations, and institutions navigating high-stakes workforce planning.
              </p>
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Behavioral and Technical Profiling</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-pink-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Predictive Talent Mapping</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Smart Workforce Planning</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-purple-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We synthesize behavioral analytics, performance data, and AI-driven inference to construct multidimensional talent profiles. This intelligence framework enables organizations and individuals to optimize role-fit, forecast potential, and drive informed workforce decisions at scale-with surgical accuracy.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">360-Degree Talent Graphs</h4>
                <p className="text-gray-600 text-sm">Combines hard and soft skills, aptitude analytics, domain alignment, and attitude quotients into a unified profile.</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">AI-Driven Match Intelligence</h4>
                <p className="text-gray-600 text-sm">Automated skill-to-role predictions calibrated using live performance data, job taxonomy, and career lifecycle models.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Actionable Intelligence Dashboards</h4>
                <p className="text-gray-600 text-sm">Visual insights for recruiters, mentors, and L&D leaders to track talent readiness and trajectory.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-violet-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Integrated Career/HR Decision Support</h4>
                <p className="text-gray-600 text-sm">TIS links seamlessly with HCM and LMS tools, empowering organizations to reduce bias and increase hiring precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hirenest */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Content and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Content - Left */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-green-500 rounded-full text-sm font-semibold text-white mb-4">
                HIRENEST
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Hire Smarter, Faster, and Better</h2>
              <p className="text-lg text-gray-700">
                Hirenest is Skillzza's precision hiring ecosystem, built to bridge the delta between high-potential candidates and opportunity pipelines through real-time, data-backed insights.
              </p>
              <p className="text-base text-gray-700">
                It facilitates strategic campus and early-career recruitment by delivering validated learner profiles equipped with performance benchmarks and project portfolios-making intelligent hiring truly scalable.
              </p>
            </div>
            
            {/* Image - Right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/career_mentoring_img.jpg')} alt="Hirenest" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Pre-Assessed Student Talent</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Campus Recruitment</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Smart Talent Discovery</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We re-engineer hiring workflows through algorithmic talent curation and validated skill visibility. By enabling on-demand access to pre-assessed, portfolio-backed candidates, we compress time-to-hire, elevate talent precision, and eliminate inefficiencies in early-career recruitment.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Live Talent Intelligence Feed</h4>
                <p className="text-gray-600 text-sm">Real-time updates on learner skill validation, challenge outcomes, and project completions.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">One-Click Profile Access</h4>
                <p className="text-gray-600 text-sm">Hiring managers get a 360° view of candidate readiness-skills, simulations, soft skills, and project delivery.</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Attrition Mitigation Engine</h4>
                <p className="text-gray-600 text-sm">Predictive insights into candidate-job alignment reduce onboarding failure and early exits.</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Seamless ATS & CRM Integration</h4>
                <p className="text-gray-600 text-sm">Enterprise-ready APIs for syncing with existing recruitment pipelines and CRMs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI HackNex */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Image - Left */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/step_slide_img.jpg')} alt="AI HackNex" className="w-full h-96 object-cover" />
            </div>
            
            {/* Content - Right */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-red-500 rounded-full text-sm font-semibold text-white mb-4">
                AI HACKNEX
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Code. Compete. Conquer.</h2>
              <p className="text-lg text-gray-700">
                AI HackNex is an elite coding and innovation battleground where emerging AI professionals test their mettle through high-stakes, real-world challenges. It is where AI acumen meets public visibility, peer benchmarking, and industry validation.
              </p>
              <p className="text-base text-gray-700">
                Designed to spotlight emerging talent and spark transformative innovation, AI HackNex accelerates capability through competitive intensity.
              </p>
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">AI Innovation Challenges</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Public Problem-Solving</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Skill Visibility & Recognition</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We architect high-stakes AI arenas where innovation, code fluency, and real-world relevance converge. Participants engage with mission-critical problem statements under competitive constraints-advancing not just technical depth but also innovation readiness, peer benchmarking, and public validation.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Enterprise-Calibrated AI Problems</h4>
                <p className="text-gray-600 text-sm">Real challenges sourced from Fortune 500 and impact-driven ecosystems.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Multi-Tiered Recognition System</h4>
                <p className="text-gray-600 text-sm">Awards, hiring spotlights, and media features amplify visibility.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Peer & Institutional Benchmarking</h4>
                <p className="text-gray-600 text-sm">Comparative dashboards track performance across cohorts, institutions, and national averages.</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">End-to-End Showcase Suite</h4>
                <p className="text-gray-600 text-sm">Personal branding tools, portfolio display, and public profiles for recruiters and collaborators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POC Hub */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Content and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Content - Left */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-indigo-500 rounded-full text-sm font-semibold text-white mb-4">
                POC HUB
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Innovation & Capstone Studio</h2>
              <p className="text-lg text-gray-700">
                The POC Hub empowers learners and researchers to transform innovative ideas into validated, functional prototypes-bridging academic exploration with enterprise-grade product thinking.
              </p>
              <p className="text-base text-gray-700">
                It serves as a crucible for interdisciplinary collaboration, real-world problem solving, and rapid innovation within controlled, outcome-driven cycles.
              </p>
            </div>
            
            {/* Image - Right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/innovations_data_tile.jpg')} alt="POC Hub" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Applied Innovation</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-violet-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Industry-Academia Collaboration</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-fuchsia-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Capstone Projects</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-indigo-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We facilitate structured ideation-to-prototype pipelines by fusing academic intellect with enterprise problem statements. Through rapid co-creation cycles and expert-guided sprints, we cultivate a product-oriented mindset that translates conceptual innovation into tangible, deployable outputs.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Live Industry Brief Repositories</h4>
                <p className="text-gray-600 text-sm">Curated list of real-world challenges across sectors for ideation and execution.</p>
              </div>
              <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-violet-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Agile Co-Creation Frameworks</h4>
                <p className="text-gray-600 text-sm">Guided innovation sprints involving faculty, mentors, and industry sponsors.</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-fuchsia-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Capstone Showcases & Market Trials</h4>
                <p className="text-gray-600 text-sm">Public demos, investor exposure, and test launches build external traction.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">IP and Prototype Support Systems</h4>
                <p className="text-gray-600 text-sm">Resources for IP filing, tech validation, and incubation transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DeepTech Studio */}
      <section className="bg-gradient-to-br from-cyan-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Image and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
            {/* Image - Left */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={getAssetPath('/startuplaunchpad_img.jpg')} alt="DeepTech Studio" className="w-full h-full object-cover" />
            </div>
            
            {/* Content - Right */}
            <div className="space-y-4">
              <div className="inline-block px-6 py-2 bg-cyan-500 rounded-full text-sm font-semibold text-white mb-4">
                DEEPTECH STUDIO
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Virtual Incubation Center</h2>
              <p className="text-lg text-gray-700">
                DeepTech Studio is Skillzza's borderless incubation hub designed to empower early-stage entrepreneurs with a digital-first model that accelerates idea validation, product-market fit, and fundraising potential-without physical limitations.
              </p>
              <p className="text-base text-gray-700">
                It is tailored for founders in emerging tech domains seeking structure, guidance, and visibility from seed to scale.
              </p>
            </div>
          </div>

          {/* Focus Areas (Left) and Approach (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Focus Areas - Left */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Digital Incubation</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-sky-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Remote Startup Growth</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Early-Stage Innovation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach - Right */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-cyan-500">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We deliver a digitally-native incubation architecture that empowers entrepreneurs to scale from zero to validation with strategic velocity. Leveraging modular playbooks, asynchronous mentorship, and milestone-based acceleration, we de-risk early-stage innovation and foster investible outcomes.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Structured Startup Playbooks</h4>
                <p className="text-gray-600 text-sm">Curated workflows across validation, GTM, user growth, and investment readiness.</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-sky-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Founder-Led Remote Sprints</h4>
                <p className="text-gray-600 text-sm">On-demand mentor matching and expert-led business design sessions.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Demo Day Infrastructure</h4>
                <p className="text-gray-600 text-sm">Pitch-stage exposure to VCs, accelerators, and innovation councils.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">MVP Engineering Support</h4>
                <p className="text-gray-600 text-sm">Guidance on architecture, tech stacks, and beta launch execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;
