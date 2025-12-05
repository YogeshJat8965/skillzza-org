import React from 'react';

const InstitutionsUseCase = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-green-400 to-blue-500"
        style={{ 
          backgroundImage: 'url(/for_universities_banner.jpeg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              FOR INSTITUTIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Campus Transformation Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Bridging Academia and Industry Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Empower your institution to deliver career outcomes that matter. Skillzza provides comprehensive tools that transform educational programs into career launching platforms, enhancing student employability while strengthening industry partnerships.
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
            <p className="text-lg text-gray-500 font-medium mb-6">
              For Students | Universities | Enterprises | Governments
            </p>
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
              
              {/* Hirenest - Skillzza Recruit */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Hirenest – Skillzza Recruit</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Campus-to-Career Placement Engine</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Skill-based hiring platform connecting students directly with employers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>AI-powered candidate-role matching for optimal placement outcomes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive assessment integration for validated skill demonstration</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time placement tracking and outcome analytics</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 60% improvement in placement rates with 40% higher salary offerings</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/insight_roles.jpg" 
                      alt="Hirenest Skillzza Recruit" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Integrated Assessment Framework */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Integrated Assessment Framework</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Comprehensive Student Development Tracking</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Institution-wide skill mapping and competency gap analysis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Personalized learning pathway recommendations for every student</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Predictive analytics for career success probability</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry-aligned curriculum enhancement suggestions</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Transform curriculum relevance with data-driven insights</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/potential_meter_banner_img.png" 
                      alt="Integrated Assessment Framework" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Curriculum Integration Suite */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Curriculum Integration Suite</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Experiential Learning Embedded in Academics</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Seamless integration of simulations into existing coursework</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Faculty training and support for experiential teaching methods</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry project integration through partnership network</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Assessment tools that measure practical application alongside theory</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: 45% increase in student engagement and learning outcomes</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/for_universities_only_img.jpg" 
                      alt="Curriculum Integration Suite" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Innovation Catalyst Programs */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Innovation Catalyst Programs</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">PoC Hub & DeepTech Studio Integration</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Student-led research and development project incubation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry mentorship for cutting-edge technology exploration</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Intellectual property development and commercialization support</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cross-disciplinary collaboration platforms</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Generate additional revenue streams through student innovation</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/explore_project.jpg" 
                      alt="Innovation Catalyst Programs" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Faculty Development Framework */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Faculty Development Framework</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Industry-Academia Collaboration Enhancement</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Professional development programs for educators</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry immersion experiences for faculty members</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Guest expert integration and virtual classroom expansion</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Research collaboration opportunities with industry partners</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Strengthen faculty credentials while enhancing student learning</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/career_mentoring_img.jpg" 
                      alt="Faculty Development Framework" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Academic Intelligence Dashboard */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Academic Intelligence Dashboard</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Data-Driven Educational Excellence</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time student performance and engagement analytics</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Predictive modeling for at-risk student identification</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry trend integration for program planning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Alumni career tracking and success measurement</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Make strategic decisions based on concrete outcomes data</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src="/datadriveninsights_ico.png" 
                      alt="Academic Intelligence Dashboard" 
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
                Institutional Success Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-4">73%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement</h3>
                <p className="text-gray-600">in graduate employment rates</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">50%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase</h3>
                <p className="text-gray-600">in industry partnership opportunities</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-4">85%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Faculty Satisfaction</h3>
                <p className="text-gray-600">with enhanced teaching tools</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-4">42%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">in application rates due to improved reputation</p>
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
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform potential into performance. Create futures that matter. Let's build tomorrow's success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Schedule Campus Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Download Integration Guide
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Speak with Education Consultant
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstitutionsUseCase;
