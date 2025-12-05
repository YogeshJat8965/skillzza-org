import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const GovernmentUseCase = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-teal-400 to-green-500"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/government_banner_img.jpeg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              FOR GOVERNMENT
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Government & Public Sector Impact
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Driving Inclusive Economic Growth Through Strategic Workforce Development
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Partner with Skillzza to create large-scale, sustainable skill development programs that drive economic growth, reduce unemployment, and build competitive advantage for your region or nation.
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
              
              {/* National Skill Development Programs */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">National Skill Development Programs</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">AI-Powered Upskilling at Scale</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Large-scale deployment across priority economic sectors</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Multilingual, culturally adapted learning experiences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Integration with national qualification frameworks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time monitoring and impact measurement across thousands of participants</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Train 100,000+ citizens annually with 75% employment success rate</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/global_imgs.png')} 
                      alt="National Skill Development Programs" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Regional Economic Development */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Regional Economic Development</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Tier 2 & Tier 3 City Transformation</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Digital infrastructure development for remote learning access</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Local language content development and cultural adaptation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Partnership with regional employers for guaranteed placement programs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Entrepreneurship development and small business incubation support</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Create 50,000+ new employment opportunities in underserved regions</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/industry_innovation_infra_img.jpg')} 
                      alt="Regional Economic Development" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Population-Scale Assessment */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Population-Scale Assessment</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">The Potential Meter for Policy Planning</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive skill mapping across demographic segments</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data-driven policy development for education and employment initiatives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Identification of regional competitive advantages and focus areas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Evidence-based resource allocation for maximum impact</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Optimize national skill development investments with 300% better ROI</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/potential_meter_banner_img.png')} 
                      alt="Population-Scale Assessment" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Innovation & Entrepreneurship Ecosystem */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Innovation & Entrepreneurship Ecosystem</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Virtual Incubation & DeepTech Studio</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Youth entrepreneurship development programs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Technology innovation hubs in underserved areas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Startup incubation support with mentorship and funding connections</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Intellectual property development and commercialization assistance</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Launch 500+ new startups annually with 60% survival rate</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/explore_project.jpg')} 
                      alt="Innovation & Entrepreneurship Ecosystem" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* Public-Private Collaboration Framework */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Public-Private Collaboration Framework</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Sustainable Partnership Development</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Corporate engagement programs for skill development funding</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry-government collaborative training program design</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cross-sector mentorship and knowledge transfer initiatives</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Tax incentive optimization for participating organizations</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Mobilize $100M+ in private sector investment for public skill development</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/partnerships_for_the_goals_img.jpg')} 
                      alt="Public-Private Collaboration Framework" 
                      className="w-full h-full object-cover min-h-96" 
                    />
                  </div>
                </div>
              </div>

              {/* National Skill Intelligence */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">National Skill Intelligence</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">Evidence-Based Policy Development</h4>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive skill trend analysis and forecasting</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Economic impact measurement and reporting</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>International benchmarking and competitiveness analysis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Policy recommendation development based on real-world outcomes</span>
                      </li>
                    </ul>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-200">
                      <p className="font-semibold text-green-800">Impact: Inform national policy decisions with concrete data and measurable results</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/datadriveninsights_ico.png')} 
                      alt="National Skill Intelligence" 
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
                Government Success Metrics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-4">2.5M</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Citizens Skilled</h3>
                <p className="text-gray-600">across priority sectors</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">65%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Employment Rate</h3>
                <p className="text-gray-600">improvement in participating regions</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-4">40%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GDP Increase</h3>
                <p className="text-gray-600">in regional GDP through enhanced workforce capability</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-4">85%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Rate</h3>
                <p className="text-gray-600">from citizens participating in programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aligned with UN Sustainable Development Goals
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our government solutions directly contribute to achieving multiple SDGs through strategic workforce development and economic empowerment.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-04.jpg')} 
                  alt="Quality Education" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Quality Education</p>
              </div>
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-08.jpg')} 
                  alt="Decent Work" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Decent Work & Economic Growth</p>
              </div>
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-09.jpg')} 
                  alt="Industry Innovation" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Industry, Innovation & Infrastructure</p>
              </div>
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-10.jpg')} 
                  alt="Reduced Inequalities" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Reduced Inequalities</p>
              </div>
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-13.jpg')} 
                  alt="Climate Action" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Climate Action</p>
              </div>
              <div className="text-center">
                <img 
                  src={getAssetPath('/E_SDG_Icons-17.jpg')} 
                  alt="Partnerships" 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg shadow-lg" 
                />
                <p className="text-sm font-semibold text-gray-700">Partnerships for the Goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skillzza */}
      <section className="bg-white py-20">
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
              Ready to Transform Your Nation's Future?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform potential into performance. Create futures that matter. Let's build tomorrow's success today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Schedule Policy Briefing
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Request Pilot Program
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Download Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GovernmentUseCase;
