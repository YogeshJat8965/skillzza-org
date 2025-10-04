import React from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-600 to-purple-700"
        style={{ 
          backgroundImage: 'url(/for_universities_banner.jpeg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              SKILLZZA LEARNING ACADEMY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Skillzza Learning Academy
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Shaping Tomorrow's Innovators Through Specialized Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover five cutting-edge schools designed to prepare you for the future of work. From AI and quantum computing to sustainability and aerial intelligence, our academy offers immersive learning experiences that bridge theory with real-world application.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Industry-Aligned Curriculum</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Hands-On Learning Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Global Expert Mentorship</span>
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
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
                <div className="text-lg opacity-90">Specialized Schools</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-lg opacity-90">Industry Programs</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-lg opacity-90">Expert Mentors</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-lg opacity-90">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Schools Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Five Schools of Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Each school is designed to provide deep expertise in emerging technologies and critical global challenges, preparing students for leadership roles in tomorrow's economy.
              </p>
            </div>

            <div className="space-y-8">
              {/* ByteMinds */}
              <Link to="/academy/byteminds" className="block group">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">🧠</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">1️⃣ ByteMinds</h3>
                          <p className="text-lg text-blue-600 italic">The School of AI & Quantum Intelligence</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li>• AI Mastery Tracks – From foundations to advanced AI, ML, and generative AI</li>
                        <li>• Quantum Computing Pods – Hands-on labs for quantum algorithms & applications</li>
                        <li>• AI Playground – Real-world projects, simulations, and role-based internships</li>
                        <li>• Ethical AI Hub – Building responsible AI with global governance frameworks</li>
                        <li>• Future Tech Mentorship – Guidance from AI scientists & quantum experts</li>
                      </ul>
                      <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Explore ByteMinds →
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/data_ai.jpg" 
                        alt="ByteMinds AI School" 
                        className="w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Sustainability School */}
              <Link to="/academy/sustainability" className="block group">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">🌱</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">2️⃣ Global School of Sustainability</h3>
                          <p className="text-lg text-green-600 italic">Climate Action & Environmental Innovation</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li>• Green Skills Curriculum – Renewable energy, circular economy & climate finance</li>
                        <li>• Sustainability by Design Labs – Waste management & ESG solutions</li>
                        <li>• Climate Action Incubator – Student-driven initiatives for global impact</li>
                        <li>• Policy & Impact Forum – Dialogue with policymakers & NGOs</li>
                        <li>• Carbon Innovation Hub – Net-zero, carbon capture & green tech</li>
                      </ul>
                      <div className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                        Explore Sustainability School →
                      </div>
                    </div>
                    <div className="lg:order-1">
                      <img 
                        src="/future_proofing_img.jpg" 
                        alt="Sustainability School" 
                        className="w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Digital & Design Excellence */}
              <Link to="/academy/digital-design" className="block group">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">🎨</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">3️⃣ Centre of Digital & Design Excellence</h3>
                          <p className="text-lg text-purple-600 italic">Innovation Through Design & Technology</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li>• Digital Fluency Tracks – Web 3.0, metaverse, blockchain & cloud systems</li>
                        <li>• Design Innovation Lab – UI/UX, product design & creative workshops</li>
                        <li>• Smart Industry Pods – Industry 4.0 simulations with robotics</li>
                        <li>• Human-Centered Design Hub – Design thinking for social impact</li>
                        <li>• Digital Storytelling Studio – Creative tech & media communication</li>
                      </ul>
                      <div className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                        Explore Digital & Design →
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/platformslide1.png" 
                        alt="Digital Design School" 
                        className="w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* EV & E-Mobility */}
              <Link to="/academy/ev-mobility" className="block group">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">⚡</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">4️⃣ School of EV & E-Mobility</h3>
                          <p className="text-lg text-orange-600 italic">Electric Vehicle Innovation & Sustainable Transport</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li>• EV Technology Labs – Battery design, charging infra & power electronics</li>
                        <li>• Mobility Innovation Arena – Intelligent transport & connected vehicles</li>
                        <li>• Sustainable Auto Hub – Green manufacturing & low-carbon models</li>
                        <li>• EV Policy & Business Forum – Tech, entrepreneurship & regulations</li>
                        <li>• Start-up Garage – EV-based entrepreneurship & mobility ventures</li>
                      </ul>
                      <div className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                        Explore EV & E-Mobility →
                      </div>
                    </div>
                    <div className="lg:order-1">
                      <img 
                        src="/future_workspace.jpg" 
                        alt="EV Mobility School" 
                        className="w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Udan - Aerial Intelligence */}
              <Link to="/academy/udan" className="block group">
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">🚁</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">5️⃣ Udan</h3>
                          <p className="text-lg text-indigo-600 italic">Aerial Intelligence School</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li>• Drone Innovation Labs – UAV design, simulation, and piloting skills</li>
                        <li>• Aerial Data Intelligence Hub – AI-driven mapping & geospatial analytics</li>
                        <li>• Defense & Disaster Response Pods – National security & crisis management</li>
                        <li>• Aerial Commerce Arena – Drone delivery, logistics & commercial deployment</li>
                        <li>• Aviation & Aerospace Connect – Global aerospace innovation networks</li>
                      </ul>
                      <div className="inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                        Explore Udan →
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/global_imgs.png" 
                        alt="Udan Aerial Intelligence" 
                        className="w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skillzza Academy */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Skillzza Academy
              </h2>
              <p className="text-xl text-gray-600">The Future of Learning is Here</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Aligned Curriculum</h3>
                <p className="text-gray-700">Programs designed with industry leaders to meet current and future market demands.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-On Learning Labs</h3>
                <p className="text-gray-700">State-of-the-art facilities with real-world projects and cutting-edge technology.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Expert Mentorship</h3>
                <p className="text-gray-700">Learn from industry leaders, researchers, and innovators from around the world.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation-Driven</h3>
                <p className="text-gray-700">Focus on emerging technologies and future-ready skills that drive innovation.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Network</h3>
                <p className="text-gray-700">Connect with peers, mentors, and opportunities across the global innovation ecosystem.</p>
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
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl mb-4">Join thousands of students building tomorrow's world today</p>
            <p className="text-lg mb-8 opacity-90">Explore our schools and find your path to innovation</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Schedule Campus Visit
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Download Brochure
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The future belongs to those who prepare for it today.</p>
              <p className="text-lg">Start your journey with Skillzza Academy.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academy;
