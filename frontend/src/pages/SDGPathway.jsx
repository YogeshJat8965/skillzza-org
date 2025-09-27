import React, { useState } from 'react';

const SDGPathway = () => {
  const [activeTab, setActiveTab] = useState('individuals');

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/sdgs_banner.png)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              SDG ALIGNED PATHWAY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Lives Through<br />
              SDG-Aligned Skills Development
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-4">
              Empowering Communities. Bridging Gaps. Building Futures...
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
              Join thousands who have transformed their lives through our inclusive, impact-driven skill development programs aligned with UN Sustainable Development Goals.
            </p>
          </div>
        </div>
      </section>

      {/* Our SDG Commitment */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              OUR SDG COMMITMENT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building a More Equitable World Through Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Skillzza, we believe that quality education and decent work opportunities are fundamental human rights. Our SDG-aligned pathway is designed to create lasting impact across communities while addressing critical global challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SDG 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">4</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">SDG 4: Quality Education</h3>
              <p className="text-gray-700 text-center text-sm leading-relaxed">
                Ensuring inclusive and equitable quality education
              </p>
            </div>

            {/* SDG 5 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">5</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">SDG 5: Gender Equality</h3>
              <p className="text-gray-700 text-center text-sm leading-relaxed">
                Empowering women and girls through economic opportunities
              </p>
            </div>

            {/* SDG 8 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">8</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">SDG 8: Decent Work</h3>
              <p className="text-gray-700 text-center text-sm leading-relaxed">
                Promoting inclusive economic growth and decent work for all
              </p>
            </div>

            {/* SDG 10 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">10</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">SDG 10: Reduced Inequalities</h3>
              <p className="text-gray-700 text-center text-sm leading-relaxed">
                Reducing inequality within and among countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Skillzza SDG Pathway Difference */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Skillzza SDG Pathway Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond Traditional Training - Creating Systemic Change
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
              Unlike conventional skill development programs, our SDG-aligned pathway integrates:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Holistic Development Approach */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Holistic Development Approach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Life skills alongside technical competencies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial literacy and entrepreneurship mindset</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digital literacy for the modern economy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Soft skills for workplace success</span>
                </li>
              </ul>
            </div>

            {/* Inclusive Access Framework */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Inclusive Access Framework</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Barrier-free enrollment for marginalized communities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-language support and culturally sensitive content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Flexible learning modes (online, offline, hybrid)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scholarships and financial assistance programs</span>
                </li>
              </ul>
            </div>

            {/* Impact-Driven Outcomes */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Impact-Driven Outcomes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Measurable contribution to SDG targets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community-level transformation tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Long-term career progression support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Social impact measurement and reporting</span>
                </li>
              </ul>
            </div>

            {/* Industry-Aligned Curriculum */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Industry-Aligned Curriculum</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-world projects with actual employers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Industry mentorship and guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Certification recognized across sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Placement guarantee and career support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Creating Opportunities for Everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Youth & Students",
                items: [
                  "Recent graduates seeking industry-ready skills",
                  "College students looking for practical experience",
                  "Young entrepreneurs starting their journey"
                ],
                color: "blue"
              },
              {
                title: "Working Professionals",
                items: [
                  "Mid-career professionals seeking upskilling",
                  "Industry switchers exploring new opportunities",
                  "Managers developing leadership capabilities"
                ],
                color: "green"
              },
              {
                title: "Women Returning to Work",
                items: [
                  "Mothers re-entering the workforce",
                  "Women seeking economic independence",
                  "Female entrepreneurs building ventures"
                ],
                color: "purple"
              },
              {
                title: "Underemployed Individuals",
                items: [
                  "Those seeking better career opportunities",
                  "Informal sector workers transitioning to formal employment",
                  "Individuals from economically disadvantaged backgrounds"
                ],
                color: "orange"
              },
              {
                title: "Rural Communities",
                items: [
                  "Farmers and agricultural workers",
                  "Rural youth seeking urban opportunities",
                  "Small business owners in rural areas"
                ],
                color: "teal"
              },
              {
                title: "Persons with Disabilities",
                items: [
                  "Specially designed accessible programs",
                  "Assistive technology training",
                  "Inclusive workplace preparation"
                ],
                color: "indigo"
              }
            ].map((group, index) => (
              <div key={index} className={`bg-gradient-to-br from-${group.color}-50 to-${group.color}-100 p-8 rounded-2xl border border-${group.color}-200 hover:shadow-xl transition-all duration-300`}>
                <h3 className={`text-xl font-bold text-${group.color}-600 mb-6`}>{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-gray-700 text-sm">
                      <div className={`w-2 h-2 bg-${group.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real People. Real Transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Priya Sharma */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                PS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Priya Sharma</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">From Homemaker to Tech Professional</p>
              <p className="text-gray-700 leading-relaxed text-sm">
                "Skillzza's women-focused tech program gave me the confidence and skills to restart my career after a 5-year break. Today, I'm a senior software developer earning 3x my previous salary."
              </p>
            </div>

            {/* Raj Patel */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                RP
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Raj Patel</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">Rural Entrepreneur</p>
              <p className="text-gray-700 leading-relaxed text-sm">
                "The agritech program helped me modernize my farming practice. I now use IoT sensors and have increased my crop yield by 40% while reducing water usage."
              </p>
            </div>

            {/* Aisha Khan */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                AK
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Aisha Khan</h3>
              <p className="text-sm text-gray-500 mb-4 text-center">Breaking Barriers</p>
              <p className="text-gray-700 leading-relaxed text-sm">
                "As a first-generation college graduate, Skillzza's financial services program opened doors I never knew existed. I now run my own financial consulting firm."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partnership Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Collaborating for Greater Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* UN Partners */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">UN Partners</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>UNESCO for curriculum development</li>
                <li>ILO for decent work standards</li>
                <li>UN Women for gender equality initiatives</li>
              </ul>
            </div>

            {/* Government Collaborations */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Government Collaborations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Ministry of Skill Development alignment</li>
                <li>State government partnership programs</li>
                <li>Policy advocacy and implementation</li>
              </ul>
            </div>

            {/* Industry Partners */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Industry Partners</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Fortune 500 companies for placement</li>
                <li>Startups for innovation projects</li>
                <li>Social enterprises for community impact</li>
              </ul>
            </div>

            {/* Educational Institutions */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Educational Institutions</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Universities for academic credit transfer</li>
                <li>Research institutions for impact studies</li>
                <li>International institutions for global exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              GET STARTED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose Your Path to Impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['individuals', 'organizations', 'communities'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                For {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'individuals' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">For Individuals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Complete our SDG Skills Assessment",
                    "Get personalized pathway recommendations",
                    "Enroll in your chosen program",
                    "Start your transformation journey"
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-900">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'organizations' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">For Organizations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Partner with us for employee development",
                    "Create custom corporate programs",
                    "Support community development initiatives",
                    "Measure and report SDG impact"
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-900">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'communities' && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">For Communities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Nominate candidates from your area",
                    "Host local training centers",
                    "Become a Skillzza ambassador",
                    "Track community transformation"
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-purple-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-900">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-xl mb-4">Be Part of the Solution</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to Transform Your Life? Our next cohort starts in 30 days. Limited seats available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply Now - It's Free
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300">
                Schedule Counseling Call
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300">
                Download Program Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How is this different from your regular programs?",
                answer: "Our SDG pathway integrates impact measurement, community focus, and sustainable development principles into every aspect of learning, ensuring both personal growth and social contribution."
              },
              {
                question: "Is there any cost involved?",
                answer: "We offer need-based scholarships and sliding scale fees. No one is turned away due to financial constraints."
              },
              {
                question: "How do you measure SDG impact?",
                answer: "We use UN-approved indicators and third-party impact assessment tools to track and report our contribution to each SDG target."
              },
              {
                question: "Can I get international recognition?",
                answer: "Yes, our programs are aligned with global standards and offer internationally recognized certifications."
              },
              {
                question: "What support do you provide after completion?",
                answer: "Lifelong career support, alumni network access, continuous upskilling opportunities, and entrepreneurship mentorship."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q: {faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Skillzza SDG Pathway - Where Your Success Becomes the World's Progress
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span>United Nations Sustainable Development Goals Supporter</span>
            <span>•</span>
            <span>Certified B-Corporation</span>
            <span>•</span>
            <span>ISO 21001:2018 Educational Management Certified</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SDGPathway;
