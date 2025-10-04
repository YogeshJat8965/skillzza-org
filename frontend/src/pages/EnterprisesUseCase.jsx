import React from 'react';

const EnterprisesUseCase = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-purple-400 to-blue-500"
        style={{ 
          backgroundImage: 'url(/for_corporate_only_img.jpg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              FOR ENTERPRISES
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Enterprise Workforce Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Future-Proofing Organizations Through Strategic Talent Development
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your organization's talent strategy with AI-powered workforce development. From recruitment to retention, Skillzza provides the intelligence and tools needed to build high-performing teams ready for tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Intro Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Potential Into Performance Across Every Career Stage
            </h2>
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white font-semibold mb-8">
              Precision-Engineered Career Solutions
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Skillzza delivers AI-powered career transformation through immersive simulations, strategic skill development, and data-driven talent intelligence. From individual career acceleration to organizational workforce evolution, we create pathways that turn ambition into achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              
              {/* Intelligent Talent Acquisition */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Intelligent Talent Acquisition</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Hirenest & Skillzza Marketplace Integration</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Access to pre-assessed, job-ready candidate pools</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Skills-first hiring that reduces recruitment time by 50%</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Predictive analytics for candidate success probability</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Diversity and inclusion optimization through bias-free assessment</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 65% reduction in time-to-hire with 40% improvement in retention</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/insight_roles.jpg" 
                      alt="Intelligent Talent Acquisition" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Workforce Development */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Strategic Workforce Development</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Talent Intelligence Suite for Organizations</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Role-specific upskilling programs aligned with business objectives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Skill gap analysis across teams and departments</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personalized learning paths for high-potential employees</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Leadership development through scenario-based simulations</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 35% increase in internal mobility and promotion rates</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/transformskill_futureset.png" 
                      alt="Strategic Workforce Development" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Innovation Engagement Platform */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Innovation Engagement Platform</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Hackathon Arena & PoC Hub for Enterprises</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Employee innovation challenges aligned with business goals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cross-functional team building through collaborative projects</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>External talent scouting through public innovation challenges</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Intellectual property development and commercialization</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Generate 15-20 innovative solutions per quarter</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/Hackathons_header_img.png" 
                      alt="Innovation Engagement Platform" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Custom Learning Experiences */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Custom Learning Experiences</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Skill Labs Integration & Development</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Bespoke training programs designed for specific organizational needs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry-specific simulation development and deployment</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integration with existing Learning Management Systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>ROI tracking and learning outcome measurement</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 70% improvement in training effectiveness and knowledge retention</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/engaing_learning.jpg" 
                      alt="Custom Learning Experiences" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Talent Pipeline Development */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Talent Pipeline Development</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Xperience Platform Partnerships</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Co-design simulations that reflect your organization's unique challenges</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Early identification and nurturing of potential candidates</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Brand building within educational institutions and talent communities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Long-term talent relationship management</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Build sustainable talent pipeline reducing external recruitment costs by 30%</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/platformslide1.png" 
                      alt="Talent Pipeline Development" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Talent Intelligence */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Strategic Talent Intelligence</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Data-Driven Workforce Planning</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time analytics on skill trends and market demands</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Predictive modeling for future workforce needs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Competitive intelligence on talent acquisition strategies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>ROI measurement for all talent development initiatives</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Make strategic workforce decisions 6-12 months ahead of market</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/datadriveninsights_ico.png" 
                      alt="Strategic Talent Intelligence" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Success Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-4">50%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduction</h3>
                <p className="text-gray-600">in recruitment costs</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">65%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h3>
                <p className="text-gray-600">in employee skill development speed</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-4">80%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase</h3>
                <p className="text-gray-600">in internal candidate promotion success</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-4">25%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">in overall organizational agility and adaptability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skillzza */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Global Leaders Choose Skillzza
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Precision & Personalization</h3>
                <p className="text-gray-600 text-sm">Every solution is tailored to specific needs, whether individual career development or organizational transformation objectives.</p>
              </div>

              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Scale & Impact</h3>
                <p className="text-gray-600 text-sm">Proven ability to deliver results from individual learners to million-citizen national programs.</p>
              </div>

              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation & Evidence</h3>
                <p className="text-gray-600 text-sm">Cutting-edge AI technology combined with rigorous measurement of outcomes and continuous improvement.</p>
              </div>

              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Partnership & Support</h3>
                <p className="text-gray-600 text-sm">Comprehensive support throughout implementation, from strategy development to outcome measurement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform potential into performance. Create futures that matter. Let's build tomorrow's success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Book Strategy Session
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Request Custom Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Download ROI Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterprisesUseCase;
