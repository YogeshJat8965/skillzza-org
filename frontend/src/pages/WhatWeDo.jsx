import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const WhatWeDo = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/what_we_do_banner.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              What We Do
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Bridging the gap between education and employment, Skillzza empowers professionals, institutions, and enterprises with real-world capabilities. We combine AI-driven intelligence, immersive learning, and role-based simulations to create a future-ready workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Pillars Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Skillzza Framework: Three Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1: AI-Driven Assessments */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/AI_driven_customized_img.jpg')} 
                  alt="AI-Driven Assessments"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI-Driven Assessments</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                We move beyond traditional testing with intelligent diagnostics that map strengths, identify gaps, and create personalized learning paths aligned with career goals and industry demands.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-dimensional competency mapping</li>
                  <li>• Predictive career pathway analysis</li>
                  <li>• Real-time progress tracking & intervention</li>
                  <li>• Industry-specific skill benchmarking</li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Immersive Learning */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/engaing_learning.jpg')} 
                  alt="Immersive Learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Immersive Learning</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Our modules combine theory with simulations, case studies, and project-based learning that mirror real professional challenges.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Learning Modalities</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interactive simulations & virtual environments</li>
                  <li>• Project-based learning with industry problems</li>
                  <li>• Microlearning for continuous skill-building</li>
                  <li>• Collaborative peer & mentor communities</li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Role-Based Simulations */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/Job Stimulation_header_img.png')} 
                  alt="Role-Based Simulations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Role-Based Simulations</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Our simulations recreate authentic workplace scenarios, enabling safe decision-making, collaboration, and leadership practice.
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Simulation Categories</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Leadership & management scenarios</li>
                  <li>• Technical problem-solving challenges</li>
                  <li>• Client interaction & communication skills</li>
                  <li>• Crisis management & strategic planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Specialized Solutions Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Specialized Solutions by Audience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Individual Professionals */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/forproffession.jpg')} 
                  alt="For Individual Professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">For Individual Professionals</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Personalized skill-building</li>
                <li>• Career transition coaching</li>
                <li>• Leadership development</li>
                <li>• Emerging technology upskilling</li>
              </ul>
            </div>

            {/* For Educational Institutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/for_universities_only_img.jpg')} 
                  alt="For Educational Institutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">For Educational Institutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Curriculum enhancement</li>
                <li>• Faculty training</li>
                <li>• Student placement readiness</li>
                <li>• Industry partnerships</li>
              </ul>
            </div>

            {/* For Enterprises */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/for_corporate_only_img.jpg')} 
                  alt="For Enterprises"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">For Enterprises</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Workforce diagnostics</li>
                <li>• Custom training programs</li>
                <li>• Leadership pipelines</li>
                <li>• Digital transformation support</li>
                <li>• ROI-driven outcomes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Enablers Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology Enablers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Integration */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/data_ai.jpg')} 
                  alt="Artificial Intelligence Integration"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artificial Intelligence Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart personalization, adaptive pacing, and data-driven content recommendations.
              </p>
            </div>

            {/* Analytics & Insights */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/datadriveninsights_ico.png')} 
                  alt="Analytics & Insights"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                Dashboards that measure learning effectiveness, skill acquisition, and workforce readiness.
              </p>
            </div>

            {/* Mobile-First Accessibility */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath('/flexible_acesible_ico.png')} 
                  alt="Mobile-First Accessibility"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile-First Accessibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamless, device-agnostic access for learners across geographies and contexts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital & Technology Skills",
                description: "Emerging technologies, digital tools, computational thinking.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Leadership & Management Development",
                description: "Strategic decision-making, team leadership, organizational growth.",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Industry-Specific Competencies",
                description: "Healthcare, finance, technology, manufacturing, and sustainable energy.",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Soft Skills & Communication",
                description: "Critical thinking, collaboration, emotional intelligence, professional presence.",
                color: "from-orange-500 to-red-500"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Impact Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proof of Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our approach consistently delivers measurable outcomes:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "85%+", description: "skill acquisition across all programs" },
              { metric: "90%+", description: "learner satisfaction rates" },
              { metric: "75%+", description: "career advancement within 12 months" },
              { metric: "95%+", description: "employer satisfaction with graduate readiness" }
            ].map((outcome, index) => (
              <div key={index} className="text-center bg-gray-800 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-orange-500 mb-4">{outcome.metric}</div>
                <p className="text-gray-300">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Commitment to Excellence */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={getAssetPath('/our_impact_img.jpg')} 
                  alt="Our Commitment to Excellence" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                By integrating academic rigor, industry alignment, and cognitive science, we ensure learning becomes a lifelong advantage, empowering individuals and organizations to thrive in a rapidly evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Take the Next Step in Your Career and start your journey toward a successful and fulfilling career.
              </h2>
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Enroll
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={getAssetPath('/career_readyness.jpg')} 
                alt="Career Success" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
