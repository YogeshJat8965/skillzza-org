import React from 'react';

const StudentsUseCase = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-400 to-purple-500"
        style={{ 
          backgroundImage: 'url(/forstudentuse.jpg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              FOR STUDENTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Student Success Ecosystem
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Building Tomorrow's Leaders Today
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your career trajectory through experience-based learning that goes beyond traditional education. Skillzza empowers students to discover their potential, develop marketable skills, and secure career opportunities with confidence.
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
              
              {/* Skillzza Persona */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Skillzza Persona™</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">AI-Powered Professional Role Immersion</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Step into authentic workplace scenarios across 70+ career functions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Practice client interactions, team leadership, and strategic decision-making</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Receive real-time feedback on communication, leadership, and problem-solving</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Build executive presence before entering the workforce</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 10x higher interview success rate through proven workplace readiness</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/ai_hacknex_tile_img.png" 
                      alt="Skillzza Persona" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Xperience Platform */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Xperience Platform</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Virtual Career Immersion Program</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Complete project-based assignments from real companies</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Work with AI team members in realistic business environments</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Deliver measurable outcomes that enhance your professional portfolio</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Gain industry exposure across multiple sectors before choosing your path</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Graduate with 1-2 years of equivalent professional experience</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/platformslide1.png" 
                      alt="Xperience Platform" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* The Potential Meter */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">The Potential Meter™</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">AI-Driven Career Intelligence Assessment</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive analysis of cognitive abilities, personality traits, and skill aptitudes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personalized career pathway recommendations based on market demand</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Continuous tracking of skill development and career readiness</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integration with global employer requirements and industry trends</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 95% accuracy in career-role compatibility matching</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/potential_meter_banner_img.png" 
                      alt="The Potential Meter" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Hackathon Arena */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Hackathon Arena (Talent Lab)</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Competitive Skill Development Platform</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Participate in industry-sponsored challenges and innovation contests</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Build a technical portfolio through real-world problem-solving</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Network with peers, mentors, and potential employers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Showcase capabilities through public project galleries</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Direct recruitment pipeline with 200+ partner companies</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/Hackathons_header_img.png" 
                      alt="Hackathon Arena" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Talent Intelligence Suite */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Talent Intelligence Suite</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Adaptive Learning Ecosystem</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>AI-curated learning paths based on career goals and skill gaps</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry-specific micro-credentials and competency development</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time market demand integration for emerging skill requirements</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personalized mentorship matching with industry professionals</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 40% faster skill acquisition compared to traditional learning methods</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/transformskill_futureset.png" 
                      alt="Talent Intelligence Suite" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Skillzza Marketplace */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Skillzza Marketplace</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Professional Visibility Platform</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Verified skill profiles visible to hiring partners</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Performance-based candidate ranking and recommendation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Direct communication channels with recruiters and hiring managers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Career opportunity matching based on demonstrated competencies</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 3x higher job placement rate within 6 months of graduation</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/insight_roles.jpg" 
                      alt="Skillzza Marketplace" 
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
                Student Success Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-4">89%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement Rate</h3>
                <p className="text-gray-600">within 12 months of program completion</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">35%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Starting Salaries</h3>
                <p className="text-gray-600">compared to traditional graduates</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-4">92%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Employer Satisfaction</h3>
                <p className="text-gray-600">with Skillzza-trained hires</p>
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
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform potential into performance. Create futures that matter. Let's build tomorrow's success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Career Journey
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Take Potential Assessment
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsUseCase;
