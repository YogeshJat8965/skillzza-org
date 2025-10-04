import React from 'react';

const AIHackNex = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-orange-500 to-yellow-600"
        style={{ 
          backgroundImage: 'url(/ai_hacknex_tile_img.png)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              AI HACKNEX
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              AI HackNex
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Innovate, Compete, and Get Discovered
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Join the world's most prestigious AI innovation platform. Participate in global challenges, solve real-world problems, and showcase your skills to industry leaders, institutions, and peers worldwide.
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
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-lg opacity-90">Global Challenges</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-lg opacity-90">Active Participants</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">$2M+</div>
                <div className="text-lg opacity-90">Prize Pool</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-lg opacity-90">Industry Partners</div>
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
                Platform Features
              </h2>
              <p className="text-xl text-gray-600">Everything you need to compete, innovate, and get discovered</p>
            </div>

            <div className="space-y-12">
              {/* Global AI Challenges */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🌍</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Global AI Challenges</h3>
                        <p className="text-lg text-orange-600">& Themed Innovation Sprints</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Diverse Challenge Categories:</strong> Computer Vision, NLP, Robotics, Healthcare AI, FinTech, and more</li>
                      <li>• <strong>Multiple Difficulty Levels:</strong> From beginner-friendly to expert-level competitions</li>
                      <li>• <strong>Team & Individual Formats:</strong> Compete solo or collaborate with global teams</li>
                      <li>• <strong>Regular Competitions:</strong> New challenges launched weekly with varying durations</li>
                      <li>• <strong>Themed Sprints:</strong> Special events focusing on emerging technologies and trends</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Active Challenges:</strong> 25+ ongoing | <strong>Frequency:</strong> Weekly launches | <strong>Duration:</strong> 1 week to 3 months
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/global_imgs.png" 
                      alt="Global AI Challenges" 
                      className="w-full rounded-2xl shadow-lg" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-6xl">🌍</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-world Problems */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Real-world Problems</h3>
                        <p className="text-lg text-blue-600">From Enterprise and Public Sectors</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Industry Partnerships:</strong> Challenges sourced from Fortune 500 companies and government agencies</li>
                      <li>• <strong>Practical Applications:</strong> Solutions that can be implemented in real business environments</li>
                      <li>• <strong>Social Impact Projects:</strong> AI for good initiatives addressing global challenges</li>
                      <li>• <strong>Cutting-edge Research:</strong> Collaborate on breakthrough AI research projects</li>
                      <li>• <strong>Intellectual Property:</strong> Opportunity to patent and commercialize winning solutions</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Partners:</strong> 500+ organizations | <strong>Sectors:</strong> Healthcare, Finance, Manufacturing, Government | <strong>Impact:</strong> Real-world deployment
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/future_workspace.jpg" 
                      alt="Real-world Problems" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Recognition & Awards */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-yellow-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🏆</span>
                      </div>
                      <div>
                <h3 className="text-2xl font-bold text-gray-900">Recognition & Awards</h3>
                <p className="text-lg text-orange-600">From Institutions, Industry Leaders, and Peers</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Prestigious Awards:</strong> Recognition from top universities and tech companies</li>
                      <li>• <strong>Cash Prizes:</strong> Substantial monetary rewards for winning solutions</li>
                      <li>• <strong>Career Opportunities:</strong> Direct recruitment by participating organizations</li>
                      <li>• <strong>Research Publications:</strong> Co-authorship opportunities in top-tier journals</li>
                      <li>• <strong>Global Leaderboards:</strong> Build your reputation in the AI community</li>
                    </ul>
                    <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <strong>Total Prizes:</strong> $2M+ annually | <strong>Recognition:</strong> IEEE, ACM partnerships | <strong>Career Impact:</strong> 85% job placement rate
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/proven_impact.gif" 
                      alt="Recognition & Awards" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Skill Showcase */}
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 lg:p-12 border border-yellow-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">💡</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Skill Showcase Platform</h3>
                        <p className="text-lg text-yellow-600">AI, Data, and Coding Skills on Leading Platforms</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Portfolio Building:</strong> Comprehensive showcase of your AI projects and achievements</li>
                      <li>• <strong>Skill Verification:</strong> Blockchain-verified certificates for competition wins and participation</li>
                      <li>• <strong>Performance Analytics:</strong> Detailed metrics on your problem-solving approaches</li>
                      <li>• <strong>Peer Networking:</strong> Connect with top AI talent from around the world</li>
                      <li>• <strong>Employer Visibility:</strong> Get discovered by leading tech companies and research institutions</li>
                    </ul>
                    <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <strong>Portfolio Views:</strong> 1M+ monthly | <strong>Employer Partners:</strong> 200+ companies | <strong>Verification:</strong> Blockchain-secured
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/career_readyness.jpg" 
                      alt="Skill Showcase" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Challenge Categories
              </h2>
              <p className="text-xl text-gray-600">Compete across diverse AI domains and showcase your expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Computer Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision</h3>
                  <p className="text-gray-600">Image recognition, object detection, and visual AI</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Medical Image Analysis</li>
                  <li>• Autonomous Vehicle Vision</li>
                  <li>• Satellite Image Processing</li>
                  <li>• Facial Recognition Systems</li>
                  <li>• Augmented Reality Applications</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">25+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
                </div>
              </div>

              {/* Natural Language Processing */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Language Processing</h3>
                  <p className="text-gray-600">Text analysis, chatbots, and language understanding</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Sentiment Analysis</li>
                  <li>• Machine Translation</li>
                  <li>• Conversational AI</li>
                  <li>• Document Understanding</li>
                  <li>• Content Generation</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">20+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
                </div>
              </div>

              {/* Machine Learning */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h3>
                  <p className="text-gray-600">Predictive modeling and intelligent algorithms</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Predictive Analytics</li>
                  <li>• Recommendation Systems</li>
                  <li>• Fraud Detection</li>
                  <li>• Time Series Forecasting</li>
                  <li>• Anomaly Detection</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">30+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
                </div>
              </div>

              {/* Robotics & IoT */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Robotics & IoT</h3>
                  <p className="text-gray-600">Intelligent automation and connected systems</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Autonomous Navigation</li>
                  <li>• Smart Home Systems</li>
                  <li>• Industrial Automation</li>
                  <li>• Drone Applications</li>
                  <li>• Edge AI Computing</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">15+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
                </div>
              </div>

              {/* Healthcare AI */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare AI</h3>
                  <p className="text-gray-600">Medical diagnosis and healthcare optimization</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Disease Diagnosis</li>
                  <li>• Drug Discovery</li>
                  <li>• Patient Monitoring</li>
                  <li>• Medical Imaging</li>
                  <li>• Treatment Optimization</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">18+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
                </div>
              </div>

              {/* FinTech AI */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">FinTech AI</h3>
                  <p className="text-gray-600">Financial technology and algorithmic trading</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Algorithmic Trading</li>
                  <li>• Risk Assessment</li>
                  <li>• Credit Scoring</li>
                  <li>• Blockchain Analytics</li>
                  <li>• Regulatory Compliance</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">12+</span>
                  <p className="text-sm text-gray-500">Active Challenges</p>
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
                Winner Success Stories
              </h2>
              <p className="text-xl text-gray-600">How AI HackNex participants transformed their careers</p>
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
                  <span className="ml-2 text-sm text-gray-600">Winner - Computer Vision Challenge</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Winning the medical imaging challenge led to a direct offer from Google DeepMind. The recognition opened doors I never imagined."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Alex Kumar</p>
                  <p className="text-gray-600">AI Research Scientist at Google DeepMind</p>
                  <p className="text-orange-600 font-medium">Prize: $50,000 + Job Offer</p>
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
                  <span className="ml-2 text-sm text-gray-600">Winner - NLP Challenge</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "My NLP solution for multilingual sentiment analysis caught the attention of OpenAI. Now I'm working on GPT models!"
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                  <p className="text-gray-600">Senior ML Engineer at OpenAI</p>
                  <p className="text-yellow-600 font-medium">Prize: $75,000 + Research Publication</p>
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
                  <span className="ml-2 text-sm text-gray-600">Winner - Healthcare AI Challenge</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Our COVID-19 detection algorithm is now deployed in 50+ hospitals worldwide. The impact has been incredible."
                </p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Dr. James Chen</p>
                  <p className="text-gray-600">Co-founder, MedAI Solutions</p>
                  <p className="text-orange-600 font-medium">Prize: $100,000 + Startup Funding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Challenges */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Upcoming Challenges
              </h2>
              <p className="text-xl text-gray-600">Join the next wave of AI innovation competitions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Starting Soon
                  </span>
                  <span className="text-sm text-gray-500">Deadline: March 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Change AI Challenge</h3>
                <p className="text-gray-600 mb-4">Develop AI solutions for carbon footprint reduction and climate monitoring using satellite data and IoT sensors.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600">$150,000</span>
                  <span className="text-sm text-gray-500">Prize Pool</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Computer Vision</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Time Series</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">IoT</span>
                </div>
                <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Register Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Registration Open
                  </span>
                  <span className="text-sm text-gray-500">Deadline: April 20, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Vehicle Safety Challenge</h3>
                <p className="text-gray-600 mb-4">Create AI systems for enhanced autonomous vehicle safety in complex urban environments and edge cases.</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">$200,000</span>
                  <span className="text-sm text-gray-500">Prize Pool</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Computer Vision</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Reinforcement Learning</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Robotics</span>
                </div>
                <button className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  Learn More
                </button>
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
              Ready to Showcase Your AI Expertise?
            </h2>
            <p className="text-xl mb-4">Join 50,000+ innovators competing in the world's most prestigious AI challenges</p>
            <p className="text-lg mb-8 opacity-90">Solve real problems, win prizes, and get discovered by industry leaders</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                🚀 Join the Next Challenge
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                🏆 See Winner Showcases
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                📊 Browse Challenges
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">Innovate. Compete. Get Discovered.</p>
              <p className="text-lg">Your next breakthrough starts here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIHackNex;
