import React from 'react';

const WhatWeDo = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/what_we_do_banner.jpg)',
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">SkillStratum</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                The first Skillzza program that helps employees start their competency and career development journey. It is designed to analyze current skills, and bridge career aspirations.
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">SkillSphere</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                SkillSphere is truly personalized learning at its best. Offering a 360-degree learning experience, it adapts to the unique learning style. Featuring programs, certifications, and assessments designed for real-world applications.
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">SkillScape Innovation Hub</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                A hub for innovation and knowledge sharing. SkillScape brings together industry needs and workforce skills, empowering organizations to bridge the gap between current skills and future demands.
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

      {/* Our Focus Areas */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Focus Areas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Digital AI", image: "/placeholder_img.jpg" },
              { title: "Sustainable Climate Action", image: "/placeholder_img.jpg" },
              { title: "Delivery Service", image: "/placeholder_img.jpg" },
              { title: "Human Workplace", image: "/placeholder_img.jpg" },
              { title: "EV & Mobility", image: "/placeholder_img.jpg" }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-40">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/placeholder_img_hori.jpg" 
                  alt="Our Approach" 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl"></div>
                {/* Success badge overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white rounded-full p-6 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-2">SUCCESS</div>
                      <div className="text-sm text-gray-600">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-6 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-600 mb-4">
                OUR APPROACH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Approach
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach focuses on practical, outcome-based learning that bridges the gap between academic knowledge and real-world applications. We leverage cutting-edge technology to deliver personalized, engaging experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By integrating data analytics and cognitive science, we can identify individual learning patterns and adapt our content delivery to maximize effectiveness and knowledge retention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We focus on effectiveness and measurable outcomes.
              </p>
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
              <h3 className="text-xl font-bold text-blue-600 mb-4">For Individual Professionals</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Personalized skill-building</li>
                <li>• Career transition coaching</li>
                <li>• Leadership development</li>
                <li>• Emerging technology upskilling</li>
              </ul>
            </div>

            {/* For Educational Institutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-600 mb-4">For Educational Institutions</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Curriculum enhancement</li>
                <li>• Faculty training</li>
                <li>• Student placement readiness</li>
                <li>• Industry partnerships</li>
              </ul>
            </div>

            {/* For Enterprises */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-600 mb-4">For Enterprises</h3>
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artificial Intelligence Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart personalization, adaptive pacing, and data-driven content recommendations.
              </p>
            </div>

            {/* Analytics & Insights */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                Dashboards that measure learning effectiveness, skill acquisition, and workforce readiness.
              </p>
            </div>

            {/* Mobile-First Accessibility */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
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

      {/* Key Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Tailored Learning Paths</h3>
              <p className="text-yellow-100 leading-relaxed">
                Our programs are customized to meet the needs of learners at all levels, delivering targeted skill development and career advancement opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Relevant Content</h3>
              <p className="text-yellow-100 leading-relaxed">
                Our curriculum is continuously updated to reflect the latest industry trends and requirements, ensuring learners gain practical, applicable skills.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Practical, Hands-On Training</h3>
              <p className="text-yellow-100 leading-relaxed">
                We prioritize experiential learning, our programs include hands-on exercises, projects, and practical training opportunities.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
              <p className="text-yellow-100 leading-relaxed">
                Our team is comprised of seasoned professionals and subject matter experts who bring real-world experience and deep knowledge.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Assessment</h3>
              <p className="text-yellow-100 leading-relaxed">
                Learn continuously through programs, both tracking learner progress and providing real-time feedback and support.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Network Access</h3>
              <p className="text-yellow-100 leading-relaxed">
                Gain access to opportunities worldwide. Our programs are designed to prepare learners for success in an increasingly connected global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Excellence */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              By integrating academic rigor, industry alignment, and cognitive science, we ensure learning becomes a lifelong advantage, empowering individuals and organizations to thrive in a rapidly evolving world.
            </p>
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
                src="/placeholder_img.jpg" 
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
