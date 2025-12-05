import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const XperiencePlatform = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-orange-500 to-yellow-600"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/platformslide1.png'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              XPERIENCE PLATFORM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Xperience Platform
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Simulate. Solve. Showcase.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your learning through immersive, role-based job simulations that mirror real-world challenges. Build practical skills, create verifiable portfolios, and enhance your workplace readiness through applied learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-lg opacity-90">Job Simulations</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg opacity-90">Industry Roles</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">100K+</div>
                <div className="text-lg opacity-90">Learners Engaged</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-lg opacity-90">Employer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Core Platform Features
              </h2>
              <p className="text-xl text-gray-600">Experience learning that mirrors real workplace challenges</p>
            </div>

            <div className="space-y-12">
              {/* Role-based Job Simulations */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎮</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Role-based Job Simulations</h3>
                        <p className="text-lg text-orange-600">Rooted in Real-world Challenges</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Authentic Scenarios:</strong> Simulations based on actual workplace situations and challenges</li>
                      <li>• <strong>Industry-Specific Roles:</strong> From software development to marketing, finance to healthcare</li>
                      <li>• <strong>Progressive Complexity:</strong> Start with basics and advance to expert-level challenges</li>
                      <li>• <strong>Interactive Environment:</strong> Engage with realistic tools, data, and constraints</li>
                      <li>• <strong>Decision Impact:</strong> See how your choices affect outcomes and learn from results</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Available Roles:</strong> 50+ industry positions | <strong>Difficulty:</strong> Beginner to Expert | <strong>Duration:</strong> 30 mins to 8 hours
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/jobsimulation_img_bg_hero.png')} 
                      alt="Job Simulations" 
                      className="w-full rounded-2xl shadow-lg" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-6xl">🎮</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge-based Learning */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-yellow-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🧩</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Challenge-based Learning</h3>
                        <p className="text-lg text-yellow-600">Develop Problem-solving Skills</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Real Problems:</strong> Tackle actual challenges faced by companies and organizations</li>
                      <li>• <strong>Critical Thinking:</strong> Develop analytical and problem-solving capabilities</li>
                      <li>• <strong>Creative Solutions:</strong> Explore multiple approaches to complex problems</li>
                      <li>• <strong>Time Management:</strong> Work within realistic deadlines and resource constraints</li>
                      <li>• <strong>Collaboration:</strong> Team-based challenges that mirror workplace dynamics</li>
                    </ul>
                    <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <strong>Challenge Types:</strong> Individual & Team | <strong>Industries:</strong> Tech, Finance, Healthcare, Marketing | <strong>Feedback:</strong> Instant & Detailed
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/engaing_learning.jpg')} 
                      alt="Challenge-based Learning" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Digital Portfolios */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📁</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Digital, Verifiable Portfolios</h3>
                        <p className="text-lg text-orange-600">Aligned with Employer Expectations</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Showcase Work:</strong> Display completed simulations, projects, and achievements</li>
                      <li>• <strong>Skill Verification:</strong> Blockchain-verified certificates and competency badges</li>
                      <li>• <strong>Employer-Ready:</strong> Portfolios designed to meet industry hiring standards</li>
                      <li>• <strong>Performance Metrics:</strong> Detailed analytics on problem-solving approaches</li>
                      <li>• <strong>Continuous Updates:</strong> Portfolio grows with each completed simulation</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Verification:</strong> Blockchain-secured | <strong>Sharing:</strong> One-click sharing | <strong>Analytics:</strong> Detailed performance insights
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/career_readyness.jpg')} 
                      alt="Digital Portfolios" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Workplace Readiness */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Workplace Readiness</h3>
                        <p className="text-lg text-orange-600">Through Applied Learning</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Soft Skills Development:</strong> Communication, leadership, and teamwork in action</li>
                      <li>• <strong>Professional Behavior:</strong> Learn workplace etiquette and professional standards</li>
                      <li>• <strong>Industry Knowledge:</strong> Understand sector-specific practices and terminology</li>
                      <li>• <strong>Adaptability Training:</strong> Handle changing requirements and unexpected challenges</li>
                      <li>• <strong>Performance Feedback:</strong> Continuous improvement through detailed assessments</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Readiness Score:</strong> Comprehensive evaluation | <strong>Improvement:</strong> Personalized recommendations | <strong>Tracking:</strong> Progress monitoring
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/potential_meter.png')} 
                      alt="Workplace Readiness" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Simulations */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Simulations Available
              </h2>
              <p className="text-xl text-gray-600">Choose from our comprehensive library of role-based simulations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technology */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology</h3>
                  <p className="text-gray-600">Software development, data science, and IT operations</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Full-stack Development</li>
                  <li>• Data Analysis & ML</li>
                  <li>• DevOps & Cloud</li>
                  <li>• Cybersecurity</li>
                  <li>• Product Management</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">120+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>

              {/* Business & Finance */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business & Finance</h3>
                  <p className="text-gray-600">Strategic planning, financial analysis, and operations</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Financial Modeling</li>
                  <li>• Business Strategy</li>
                  <li>• Operations Management</li>
                  <li>• Investment Analysis</li>
                  <li>• Risk Management</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">85+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>

              {/* Marketing & Sales */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing & Sales</h3>
                  <p className="text-gray-600">Digital marketing, brand management, and sales strategy</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Digital Marketing Campaigns</li>
                  <li>• Brand Strategy</li>
                  <li>• Sales Process Management</li>
                  <li>• Customer Analytics</li>
                  <li>• Content Strategy</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">95+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
                  <p className="text-gray-600">Clinical decision-making and healthcare administration</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Clinical Diagnostics</li>
                  <li>• Healthcare Analytics</li>
                  <li>• Patient Management</li>
                  <li>• Medical Research</li>
                  <li>• Healthcare Operations</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">60+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>

              {/* Engineering */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering</h3>
                  <p className="text-gray-600">Design, manufacturing, and systems engineering</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Product Design</li>
                  <li>• Systems Engineering</li>
                  <li>• Quality Assurance</li>
                  <li>• Project Management</li>
                  <li>• Manufacturing Processes</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">75+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>

              {/* Consulting */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consulting</h3>
                  <p className="text-gray-600">Problem-solving, analysis, and strategic recommendations</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Case Study Analysis</li>
                  <li>• Strategic Consulting</li>
                  <li>• Process Improvement</li>
                  <li>• Change Management</li>
                  <li>• Client Presentations</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">65+</span>
                  <p className="text-sm text-gray-500">Simulations Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">Real results from learners who transformed their careers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The Xperience Platform helped me transition from marketing to data science. The simulations gave me real experience that employers valued."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-gray-600">Data Scientist at Google</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Completing 15 consulting simulations gave me the confidence and portfolio I needed to land my dream job at McKinsey."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                  <p className="text-gray-600">Consultant at McKinsey & Company</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The healthcare simulations prepared me for real clinical scenarios. I felt confident from day one in my new role."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Dr. Priya Patel</p>
                  <p className="text-gray-600">Clinical Data Analyst at Mayo Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl mb-4">Join thousands of learners building real-world skills through immersive simulations</p>
            <p className="text-lg mb-8 opacity-90">Start your simulation journey today and build a portfolio that stands out</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Simulation Journey
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                View Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Browse Simulations
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">Experience the future of learning.</p>
              <p className="text-lg">Simulate. Solve. Showcase your potential.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default XperiencePlatform;
