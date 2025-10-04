import React from 'react';

const PotentialMeter = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-purple-400 to-blue-500"
        style={{ 
          backgroundImage: 'url(/potential_meter_banner_img.png)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              THE POTENTIAL METER
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Unlock Your True Potential
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Beyond Traditional Testing: Discover What You're Truly Capable Of
            </h2>
             <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
               The Potential Meter is a next-generation talent and capability assessment framework designed to unlock true human potential. It goes beyond conventional evaluations by combining advanced analytics, behavioral insights, and adaptive simulations to provide a holistic view of an individual's skills, aspirations, and growth trajectory.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
               <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-10 rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                 🚀 Start Your Assessment - Only 15 Minutes
               </button>
               <button className="border-2 border-white text-white font-semibold py-4 px-10 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 backdrop-blur-sm bg-white/10">
                 📅 Book Demo
               </button>
             </div>
             
             <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
               <div className="flex items-center space-x-2">
                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                 <span>No registration required</span>
               </div>
               <div className="flex items-center space-x-2">
                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                 <span>Instant results</span>
               </div>
               <div className="flex items-center space-x-2">
                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                 <span>Money-back guarantee</span>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Statistics Section */}
       <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16">
         <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
               <div className="group">
                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">2M+</div>
                 <div className="text-lg opacity-90">Professionals Assessed</div>
               </div>
               <div className="group">
                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                 <div className="text-lg opacity-90">Accuracy Rate</div>
               </div>
               <div className="group">
                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50M+</div>
                 <div className="text-lg opacity-90">Global Benchmarks</div>
               </div>
               <div className="group">
                 <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                 <div className="text-lg opacity-90">Fortune 1000 Companies</div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* The Challenge We Solve */}
       <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge We Solve
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-8">
                Beyond Traditional Testing: Why Potential Matters More Than Performance
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">✗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Traditional Assessments Measure Past Learning</h4>
                        <p className="text-gray-600">Not future potential</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">✗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Focus on Knowledge Recall</h4>
                        <p className="text-gray-600">Not adaptive thinking</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-600 text-sm">✗</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Evaluate Today's Skills</h4>
                        <p className="text-gray-600">Not tomorrow's capabilities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                    <p className="text-lg font-semibold text-gray-900 mb-2">The Reality Check:</p>
                    <p className="text-gray-700">
                      <span className="font-bold text-orange-600">65%</span> of today's students will work in jobs that don't yet exist
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/confused_person_banner.png" 
                    alt="Traditional vs Future Assessment" 
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg" 
                  />
                  <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">The Potential Meter changes everything.</h4>
                    <p className="text-gray-700">We measure what you're capable of becoming, not just what you know today.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Revolutionary */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Us Revolutionary
              </h2>
              <h3 className="text-xl font-semibold text-orange-600 mb-8">
                The Science of Human Potential
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We've cracked the code on measuring what matters most – your untapped potential. Our proprietary AI engine combines:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cognitive Intelligence Mapping */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cognitive Intelligence Mapping</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multi-dimensional thinking patterns</li>
                  <li>• Problem-solving agility</li>
                  <li>• Creative reasoning capabilities</li>
                  <li>• Adaptive learning velocity</li>
                </ul>
              </div>

              {/* Behavioral Prediction Analytics */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Behavioral Prediction Analytics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Leadership emergence indicators</li>
                  <li>• Collaboration effectiveness quotient</li>
                  <li>• Resilience and adaptability metrics</li>
                  <li>• Innovation potential scoring</li>
                </ul>
              </div>

              {/* Future-Readiness Assessment */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Readiness Assessment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Digital fluency evaluation</li>
                  <li>• Cross-functional skill mobility</li>
                  <li>• Industry evolution alignment</li>
                  <li>• Career pivot probability</li>
                </ul>
              </div>

              {/* Growth Trajectory Modeling */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Trajectory Modeling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Learning acceleration patterns</li>
                  <li>• Skill development velocity</li>
                  <li>• Career progression probability</li>
                  <li>• Performance ceiling prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How The Potential Meter Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How The Potential Meter Works
              </h2>
              <p className="text-xl text-gray-600">Your Journey from Assessment to Achievement</p>
            </div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Engagement</h3>
                  <p className="text-gray-600 mb-4">15-minute adaptive assessment that feels like a game</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dynamic question selection based on your responses</li>
                      <li>• Real-time difficulty adjustment</li>
                      <li>• Immersive scenario-based challenges</li>
                      <li>• Behavioral pattern recognition</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Analysis</h3>
                  <p className="text-gray-600 mb-4">AI processes 200+ data points in seconds</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cognitive pattern mapping</li>
                      <li>• Personality trait extraction</li>
                      <li>• Skill gap identification</li>
                      <li>• Potential ceiling calculation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Global Benchmarking</h3>
                  <p className="text-gray-600 mb-4">Compare against 50M+ global professionals</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Industry-specific percentile ranking</li>
                      <li>• Regional talent landscape positioning</li>
                      <li>• Future workforce requirements matching</li>
                      <li>• Competitive advantage identification</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Roadmap</h3>
                  <p className="text-gray-600 mb-4">Your custom blueprint for success</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Tailored learning recommendations</li>
                      <li>• Career path optimization</li>
                      <li>• Skill development priorities</li>
                      <li>• Growth milestone tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Evolution</h3>
                  <p className="text-gray-600 mb-4">Your potential grows, so does your assessment</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Quarterly progress reviews</li>
                      <li>• Dynamic goal adjustment</li>
                      <li>• New opportunity alerts</li>
                      <li>• Skill development tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What You Receive
              </h2>
              <p className="text-xl text-gray-600">Your Comprehensive Potential Profile</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Potential Score Dashboard */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Potential Score Dashboard</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Overall Potential Quotient (0-1000 scale)</li>
                  <li>• Cognitive, Creative, and Leadership sub-scores</li>
                  <li>• Industry-specific potential ratings</li>
                  <li>• Growth velocity indicators</li>
                </ul>
              </div>

              {/* Precision Career Mapping */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Precision Career Mapping</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Top 5 career matches (95%+ accuracy)</li>
                  <li>• Role-specific readiness scores</li>
                  <li>• Skill gap analysis with learning paths</li>
                  <li>• Industry transition possibilities</li>
                </ul>
              </div>

              {/* Personalized Growth Strategy */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Personalized Growth Strategy</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 90-day quick wins action plan</li>
                  <li>• 1-year skill development roadmap</li>
                  <li>• 3-year career advancement strategy</li>
                  <li>• Continuous learning recommendations</li>
                </ul>
              </div>

              {/* Achievement Probability Forecast */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Achievement Probability Forecast</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Success likelihood in target roles</li>
                  <li>• Timeline to career goals</li>
                  <li>• Potential earning trajectory</li>
                  <li>• Leadership emergence probability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Benefits
              </h2>
              <p className="text-xl text-gray-600">Transforming Futures Across All Stages</p>
            </div>

            <div className="space-y-12">
              {/* Students & Recent Graduates */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎓</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Students & Recent Graduates</h3>
                        <p className="text-lg text-blue-600 italic">"From Campus Confusion to Career Clarity"</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• Discover hidden strengths before choosing majors</li>
                      <li>• Align academic choices with future market demands</li>
                      <li>• Build competitive advantage early</li>
                      <li>• Make informed career decisions with confidence</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Success Story:</strong> "The Potential Meter revealed my untapped analytical thinking abilities. I switched from general business to data science and landed a role at Google within 6 months of graduation." - Sarah Chen, Data Scientist
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/forstudentuse.jpg" 
                      alt="Students Success" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Young Professionals */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Young Professionals</h3>
                        <p className="text-lg text-green-600 italic">"From Career Plateau to Exponential Growth"</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• Identify skill gaps holding you back</li>
                      <li>• Discover hidden leadership potential</li>
                      <li>• Navigate career pivots with precision</li>
                      <li>• Accelerate promotion timelines</li>
                    </ul>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Success Story:</strong> "My potential assessment showed strong strategic thinking but weak stakeholder management. After 6 months of targeted development, I was promoted to VP at 28." - Marcus Rodriguez, VP Strategy
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/career_readyness.jpg" 
                      alt="Young Professionals Success" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Organizations & HR Leaders */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🏢</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Organizations & HR Leaders</h3>
                        <p className="text-lg text-purple-600 italic">"From Talent Guesswork to Strategic Workforce Intelligence"</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• Identify high-potential employees early</li>
                      <li>• Optimize talent development investments</li>
                      <li>• Reduce hiring mistakes by 75%</li>
                      <li>• Build future-ready leadership pipelines</li>
                    </ul>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700 italic">
                        <strong>Success Story:</strong> "Using Potential Meter for campus recruitment, we increased new hire performance by 40% and reduced first-year attrition by 60%." - Jennifer Walsh, CHRO, Fortune 500
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/for_corporate_only_img.jpg" 
                      alt="Organizations Success" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Career Changers & Re-entrants */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🔄</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Career Changers & Re-entrants</h3>
                        <p className="text-lg text-orange-600 italic">"From Industry Uncertainty to Confident Transition"</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• Discover transferable skills you didn't know you had</li>
                      <li>• Identify industries where your potential shines</li>
                      <li>• Build transition strategies that minimize risk</li>
                      <li>• Accelerate entry into new fields</li>
                    </ul>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/future_workspace.jpg" 
                      alt="Career Changers Success" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Behind the Magic */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Science Behind the Magic
              </h2>
              <p className="text-xl text-gray-600">Powered by Breakthrough AI Research</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Proprietary Algorithms */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proprietary Algorithms</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 7 years of R&D with leading psychologists</li>
                  <li>• Trained on 10M+ assessment data points</li>
                  <li>• 95% accuracy in career success prediction</li>
                  <li>• Continuously learning from global talent outcomes</li>
                </ul>
              </div>

              {/* Academic Partnerships */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Partnerships</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Validated by Stanford Psychology Department</li>
                  <li>• Research collaboration with MIT Sloan</li>
                  <li>• Endorsed by Harvard Business School faculty</li>
                  <li>• Published in Journal of Applied Psychology</li>
                </ul>
              </div>

              {/* Global Recognition */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Recognition</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Winner: HR Tech Innovation Award 2024</li>
                  <li>• Featured: World Economic Forum Report</li>
                  <li>• Certified: ISO 27001 Data Security</li>
                  <li>• Trusted by: 500+ Fortune 1000 companies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose The Potential Meter */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose The Potential Meter
              </h2>
              <p className="text-xl text-gray-600">Beyond Assessment – Your Career Intelligence Partner</p>
            </div>

             {/* First Row - 3 Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Scientifically Rigorous</h3>
                 <p className="text-gray-600">Traditional assessments measure past performance. We predict future potential using cutting-edge behavioral science and AI.</p>
               </div>
 
               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Globally Validated</h3>
                 <p className="text-gray-600">Our algorithms are trained on diverse, global talent data ensuring accuracy across cultures, industries, and career stages.</p>
               </div>
 
               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Continuously Evolving</h3>
                 <p className="text-gray-600">Your potential isn't static – neither is our assessment. We update your profile as you grow and industries evolve.</p>
               </div>
             </div>

             {/* Second Row - 2 Cards Centered */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Action-Oriented</h3>
                 <p className="text-gray-600">We don't just tell you what you're good at – we show you exactly how to leverage it for maximum career impact.</p>
               </div>
 
               <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                 <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                   </svg>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy-First</h3>
                 <p className="text-gray-600">Your data is encrypted, anonymized, and never shared. You control who sees your potential profile.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pricing & Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Individual Assessment */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual Assessment</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$49</div>
                <p className="text-gray-600 mb-6">Complete Potential Analysis</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left">
                  <li>• Full assessment and scoring</li>
                  <li>• Detailed career matching report</li>
                  <li>• 90-day action plan</li>
                  <li>• 6-month progress tracking</li>
                </ul>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  Get Started
                </button>
              </div>

              {/* Professional Package */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-300 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Package</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$149</div>
                <p className="text-gray-600 mb-6">Career Acceleration Suite</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left">
                  <li>• Everything in Individual</li>
                  <li>• Quarterly reassessments</li>
                  <li>• 1-on-1 career coaching session</li>
                  <li>• Industry trend alerts</li>
                  <li>• Skill development course recommendations</li>
                </ul>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                  Upgrade Now
                </button>
              </div>

              {/* Enterprise Solutions */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                <div className="text-2xl font-bold text-purple-600 mb-4">Custom Pricing</div>
                <p className="text-gray-600 mb-6">Workforce Intelligence Platform</p>
                <ul className="space-y-3 text-gray-700 mb-8 text-left">
                  <li>• Bulk assessments</li>
                  <li>• Team potential mapping</li>
                  <li>• Succession planning tools</li>
                  <li>• Custom integration APIs</li>
                  <li>• Dedicated success manager</li>
                </ul>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Industry Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
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
                  "The most accurate predictor of career success I've encountered in 20 years of talent development."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Dr. Angela Mitchell</p>
                  <p className="text-gray-600">Former VP Talent Development, Microsoft</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
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
                  "Game-changing insights that our traditional hiring process completely missed."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">David Park</p>
                  <p className="text-gray-600">CEO, TechFlow Ventures</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
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
                  "My Potential Meter report was more insightful than 5 years of performance reviews."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Rachel Kumar</p>
                  <p className="text-gray-600">Senior Consultant, McKinsey</p>
                </div>
              </div>
            </div>

            {/* Media Coverage */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Media Coverage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">Forbes</p>
                  <p className="text-xs text-gray-600">"Top 10 HR Tech Innovations"</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">Harvard Business Review</p>
                  <p className="text-xs text-gray-600">Case Study Featured</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">Wall Street Journal</p>
                  <p className="text-xs text-gray-600">"Future of Career Development"</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">TED Talk</p>
                  <p className="text-xs text-gray-600">"Science of Unlocking Potential"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Q: How accurate is The Potential Meter?</h4>
                <p className="text-gray-700">A: Our AI model has been validated across 2M+ career outcomes with 95% accuracy in predicting career success within 24 months.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Q: What makes this different from other career tests?</h4>
                <p className="text-gray-700">A: Traditional tests measure what you know. We measure what you're capable of becoming using predictive AI and behavioral science.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Q: How long does the assessment take?</h4>
                <p className="text-gray-700">A: 15 minutes for the core assessment, though our adaptive AI may extend it to 25 minutes for higher accuracy based on your responses.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-2">Q: Is my data secure?</h4>
                <p className="text-gray-700">A: Absolutely. We use bank-level encryption and are SOC 2 compliant. Your data is never shared without explicit consent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover What You're Truly Capable Of?
            </h2>
            <p className="text-xl mb-4">Join 2M+ professionals who've unlocked their potential</p>
            <p className="text-lg mb-8 opacity-90">No registration required. Instant results. Money-back guarantee.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Assessment - Only 15 Minutes
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Book Demo
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg">
                "If The Potential Meter doesn't reveal at least 3 actionable insights that could transform your career trajectory, we'll refund your money – no questions asked."
              </p>
              <p className="text-sm mt-4 opacity-90">That's how confident we are in our ability to unlock your potential.</p>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-bold mb-4">Ready to Start?</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <button className="bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                  📞 Talk to Our Team
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                  💬 Live Chat 24/7
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                  📧 Email Us
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-lg hover:bg-white/30 transition-all duration-300">
                  📅 Book Demo
                </button>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The future belongs to those who understand their potential.</p>
              <p className="text-lg">Discover yours today.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PotentialMeter;
