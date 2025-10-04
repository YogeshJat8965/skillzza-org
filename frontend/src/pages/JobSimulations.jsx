import React from 'react';

const JobSimulations = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-orange-400 to-yellow-500"
        style={{ 
          backgroundImage: 'url(/xperience_img1.jpg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              IMMERSIVE JOB SIMULATIONS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Your Career, Simulated.<br />Your Future, Accelerated.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              In today's competitive job market, experience isn't just an advantage, it's a prerequisite. Skillzza's AI-Powered Job Simulation Program eliminates that barrier, offering a transformative journey from classroom learning to real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Careers Through Simulation
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                With our immersive, on-demand job simulations, you don't just prepare for the workforce, you step directly into it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">10X</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">More Likely</h3>
                <p className="text-gray-600">to land your first job</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">10M+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Learners</h3>
                <p className="text-gray-600">projected to achieve career success</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">70+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Programs</h3>
                <p className="text-gray-600">spanning high-growth career fields</p>
              </div>
              <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="text-4xl font-bold text-orange-600 mb-4">115+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Years</h3>
                <p className="text-gray-600">of collective industry leadership & guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                THE SOLUTION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Virtual Professional Experience, Real Career Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Gain virtual professional experience in any industry through job simulation opportunities, bridging the gap between learning and real-world application anytime, anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/global_imgs.png" 
                    alt="Global Readiness"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">🌍</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global Readiness</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Acquire cross-border competencies and practical exposure with virtual experiences modeled on global workplace environments.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/career_readyness.jpg" 
                    alt="Career Clarity"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">🎯</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Career Clarity & Direction</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Identify your strengths, discover your interests, and match them with real career paths.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/flexible_acesible_ico.png" 
                    alt="Flexible Learning"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">⚡</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Flexible & Immersive Learning</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Simulate authentic workplace tasks at your own pace, wherever you are.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/explore_project.jpg" 
                    alt="Problem Solving"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">🧩</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Real-World Problem Solving</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Engage in scenario-based learning built by real companies, tackling real challenges.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/mentorship_support_ico.png" 
                    alt="Mentorship"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">👥</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mentorship from Industry Experts</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Receive guidance from professional sherpas dedicated to helping you succeed.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/certificate_ico.png" 
                    alt="Certification"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}}
                  />
                  <div className="hidden text-gray-500 text-xs">🏆</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Prestigious Certification</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Validate your skills and boost your resume with recognized certifications aligned with top-tier company standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Role Play */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative w-full h-96 bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="/jobsimulation_img_bg_hero.png" 
                    alt="Real-Time Role Play" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <h3 className="text-xl font-bold">Job Simulations</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-block px-6 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-600 mb-6">
                  IMMERSIVE EXPERIENCE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Real-Time Role Play & Situational Dynamics
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience dynamic, role-specific simulations that replicate real job functions, team collaboration, and strategic decision-making delivering high-impact, experiential learning under real-world conditions.
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dynamic role-specific simulations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real job functions and team collaboration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strategic decision-making scenarios</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>High-impact experiential learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Simulations Table */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discover the Job Simulations
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Identify the perfect Job Simulation for you. All Job Simulations are thoughtfully curated, allowing you to navigate them at your own pace.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6">
                <h3 className="text-xl font-bold text-white">Available Job Simulations</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Program</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Domain</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Level</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">AI LifeBOT</td>
                      <td className="px-6 py-4 text-sm text-gray-700">ChatBOT Developer</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Technology</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Intermediate</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">35–40 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Suflex Media</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Social Media Strategy</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Marketing</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">Advanced</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">45–50 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">GreenGold Animation</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2D Animation & VFX</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Design</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Intermediate</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">40–45 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Edgespark IT Ventures</td>
                      <td className="px-6 py-4 text-sm text-gray-700">MVP for Startups</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Entrepreneurship</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Beginner</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">12–15 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Microsoft</td>
                      <td className="px-6 py-4 text-sm text-gray-700">AI Agents with Copilot Studio</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Technology</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">Advanced</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">90–100 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Appsolutely.ai</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Data Scientist</td>
                      <td className="px-6 py-4 text-sm text-gray-700">AI & Data</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Intermediate</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">60–80 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Appsolutely.ai</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Generative AI Engineer</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Technology</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Intermediate</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">60–80 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Midland Microfinance</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Microfinance Lending</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Banking</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Intermediate</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">25–30 hours</td>
                      <td className="px-6 py-4">
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                          Start Simulation
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Skillzza Stand Out */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Skillzza Stand Out
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Showcase Your Expertise</h3>
                <p className="text-gray-700 mb-6">Job simulations empower you to:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Execute real industry tasks in a risk-free environment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop practical, transferable skills that employers demand</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Earn industry-recognized certifications aligned with global standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Add weight to your resume and professional portfolio</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">The Skillzza Advantage</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engage with insightful video briefings and deep-dive resources curated by industry veterans</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Learn directly from seasoned professionals through step-by-step guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Earn certifications that validate your proficiency and prepare you for global opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Join a talent network of future-focused learners and employers looking for next-gen professionals</span>
                  </li>
                </ul>
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
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our AI career assistant help you identify the best simulation to match your aspirations. Just one click can move you one step closer to a future-ready profession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Simulation Today
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Explore All Programs
              </button>
            </div>
            <p className="text-lg mt-8 font-semibold">
              Join Skillzza – Transcend Traditional Learning
            </p>
            <p className="text-orange-100 mt-2">
              Start your simulation today. Step confidently into the future with skills that matter.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobSimulations;
