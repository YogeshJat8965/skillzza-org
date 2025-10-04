import React from 'react';

const DigitalDesign = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-purple-600 to-pink-700"
        style={{ 
          backgroundImage: 'url(/platformslide1.png)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-purple-500 rounded-full text-sm font-semibold text-white mb-6">
              DIGITAL & DESIGN EXCELLENCE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Centre of Digital & Design Excellence
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-pink-300">
              Innovation Through Design & Technology
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Master the convergence of design thinking and digital innovation. Our programs blend creativity with cutting-edge technology to prepare you for the future of digital experiences, from Web 3.0 and metaverse to human-centered design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Digital Innovation & Design Programs
              </h2>
              <p className="text-xl text-gray-600">Where creativity meets technology</p>
            </div>

            <div className="space-y-12">
              {/* Digital Fluency Tracks */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🌐</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Digital Fluency Tracks</h3>
                        <p className="text-lg text-blue-600">Web 3.0, Metaverse, Blockchain & Cloud-Native Systems</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Web 3.0 Development:</strong> Decentralized applications and blockchain integration</li>
                      <li>• <strong>Metaverse Creation:</strong> Virtual worlds, AR/VR experiences, and spatial computing</li>
                      <li>• <strong>Blockchain Technology:</strong> Smart contracts, DeFi, and NFT ecosystems</li>
                      <li>• <strong>Cloud-Native Architecture:</strong> Microservices, containers, and serverless computing</li>
                      <li>• <strong>Digital Transformation:</strong> Enterprise modernization and digital strategy</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 15 months | <strong>Format:</strong> Immersive Labs | <strong>Certification:</strong> Industry-Recognized
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/future_workspace.jpg" 
                      alt="Digital Fluency Tracks" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Design Innovation Lab */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 lg:p-12 border border-pink-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">✨</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Design Innovation Lab</h3>
                        <p className="text-lg text-pink-600">UI/UX, Product Design & Creative Problem-solving Workshops</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>User Experience Design:</strong> Research, prototyping, and usability testing</li>
                      <li>• <strong>Interface Design:</strong> Visual design, interaction patterns, and design systems</li>
                      <li>• <strong>Product Strategy:</strong> Design thinking, user journey mapping, and product roadmaps</li>
                      <li>• <strong>Creative Workshops:</strong> Ideation, brainstorming, and innovation methodologies</li>
                      <li>• <strong>Design Leadership:</strong> Team management, design culture, and strategic thinking</li>
                    </ul>
                    <div className="bg-pink-100 p-4 rounded-xl border border-pink-200">
                      <p className="text-sm text-gray-700">
                        <strong>Format:</strong> Studio-based Learning | <strong>Projects:</strong> Real Client Work | <strong>Mentorship:</strong> Design Leaders
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/personalizedpearningpaths_ico.png" 
                      alt="Design Innovation Lab" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Smart Industry Pods */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🤖</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Smart Industry Pods</h3>
                        <p className="text-lg text-orange-600">Industry 4.0 Simulations with Robotics & Automation</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Industrial IoT:</strong> Connected devices, sensors, and data analytics</li>
                      <li>• <strong>Robotics & Automation:</strong> Collaborative robots and intelligent systems</li>
                      <li>• <strong>Digital Twins:</strong> Virtual replicas and predictive modeling</li>
                      <li>• <strong>Smart Manufacturing:</strong> Lean production and quality optimization</li>
                      <li>• <strong>Supply Chain 4.0:</strong> Transparent, efficient, and resilient networks</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Equipment:</strong> Industrial-grade Hardware | <strong>Partnerships:</strong> Manufacturing Leaders | <strong>Outcome:</strong> Industry Certification
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/corporate_model_img.jpg" 
                      alt="Smart Industry Pods" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Human-Centered Design Hub */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">👥</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Human-Centered Design Hub</h3>
                        <p className="text-lg text-green-600">Design Thinking for Business, Education & Social Impact</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Design Thinking Methodology:</strong> Empathy, ideation, and rapid prototyping</li>
                      <li>• <strong>Social Innovation:</strong> Designing solutions for global challenges</li>
                      <li>• <strong>Service Design:</strong> End-to-end experience optimization</li>
                      <li>• <strong>Inclusive Design:</strong> Accessibility, diversity, and universal design principles</li>
                      <li>• <strong>Impact Measurement:</strong> Evaluating design effectiveness and social outcomes</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Approach:</strong> Human-Centered | <strong>Projects:</strong> Social Impact Focus | <strong>Network:</strong> Global NGOs & Foundations
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src="/career_mentoring_img.jpg" 
                      alt="Human-Centered Design Hub" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Digital Storytelling Studio */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Digital Storytelling Studio</h3>
                        <p className="text-lg text-purple-600">Blending Creativity, Tech, and Media for Global Communication</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Content Strategy:</strong> Multi-platform storytelling and audience engagement</li>
                      <li>• <strong>Interactive Media:</strong> Immersive experiences and multimedia narratives</li>
                      <li>• <strong>Brand Communication:</strong> Visual identity, messaging, and digital presence</li>
                      <li>• <strong>Video Production:</strong> Cinematography, editing, and post-production</li>
                      <li>• <strong>Global Reach:</strong> Cross-cultural communication and localization</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Facilities:</strong> Professional Studio Equipment | <strong>Distribution:</strong> Global Media Partners | <strong>Showcase:</strong> International Festivals
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/global_imgs.png" 
                      alt="Digital Storytelling Studio" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Creative Path
              </h2>
              <p className="text-xl text-gray-600">Specialized tracks for different creative and technical interests</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* UX/UI Designer Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UX/UI Designer</h3>
                  <p className="text-gray-600">Create exceptional digital experiences</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• User Research & Testing</li>
                  <li>• Interface Design Systems</li>
                  <li>• Prototyping & Wireframing</li>
                  <li>• Interaction Design</li>
                  <li>• Design Leadership</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-pink-600">12 Months</span>
                  <p className="text-sm text-gray-500">Portfolio-focused | Industry Projects</p>
                </div>
              </div>

              {/* Full-Stack Developer Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Developer</h3>
                  <p className="text-gray-600">Build the future of web and mobile</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Web 3.0 Development</li>
                  <li>• Blockchain Applications</li>
                  <li>• Cloud-Native Architecture</li>
                  <li>• Mobile & AR/VR Development</li>
                  <li>• DevOps & Deployment</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">15 Months</span>
                  <p className="text-sm text-gray-500">Code-intensive | Real Projects</p>
                </div>
              </div>

              {/* Creative Technologist Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Technologist</h3>
                  <p className="text-gray-600">Bridge creativity and technology</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Interactive Media Design</li>
                  <li>• Digital Art & Animation</li>
                  <li>• Immersive Experiences</li>
                  <li>• Creative Coding</li>
                  <li>• Innovation Leadership</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">18 Months</span>
                  <p className="text-sm text-gray-500">Interdisciplinary | Exhibition Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Partnerships & Opportunities
              </h2>
              <p className="text-xl text-gray-600">Connected to leading design and technology companies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tech Giants</h4>
                <p className="text-sm text-gray-600">Google, Apple, Microsoft, Meta partnerships</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Design Studios</h4>
                <p className="text-sm text-gray-600">IDEO, Pentagram, Frog Design collaborations</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Startups</h4>
                <p className="text-sm text-gray-600">Y Combinator, Techstars portfolio companies</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Global NGOs</h4>
                <p className="text-sm text-gray-600">UN, Gates Foundation, social impact projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape Digital Experiences?
            </h2>
            <p className="text-xl mb-4">Join the next generation of digital creators and innovators</p>
            <p className="text-lg mb-8 opacity-90">Where creativity meets cutting-edge technology</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-purple-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply to Digital & Design
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-purple-500 transition-all duration-300">
                Tour Design Studios
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-purple-500 transition-all duration-300">
                View Student Portfolio
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">Design the future. Code the impossible.</p>
              <p className="text-lg">Start your creative-tech journey today.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalDesign;
