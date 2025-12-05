import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const EVMobility = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-orange-600 to-red-700"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/future_workspace.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              EV & E-MOBILITY SCHOOL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              School of EV & E-Mobility
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-300">
              Electric Vehicle Innovation & Sustainable Transport
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Drive the electric revolution in transportation. Our comprehensive programs cover everything from battery technology and charging infrastructure to sustainable manufacturing and mobility entrepreneurship, preparing you for leadership in the rapidly growing EV industry.
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
                EV Innovation & Mobility Programs
              </h2>
              <p className="text-xl text-gray-600">Powering the future of sustainable transportation</p>
            </div>

            <div className="space-y-12">
              {/* EV Technology Labs */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🔋</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">EV Technology Labs</h3>
                        <p className="text-lg text-orange-600">Battery Design, Charging Infrastructure & Power Electronics</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Battery Technology:</strong> Li-ion, solid-state, and next-gen battery systems</li>
                      <li>• <strong>Charging Infrastructure:</strong> Fast charging, wireless, and smart grid integration</li>
                      <li>• <strong>Power Electronics:</strong> Inverters, converters, and motor control systems</li>
                      <li>• <strong>Energy Management:</strong> BMS, thermal management, and safety systems</li>
                      <li>• <strong>Testing & Validation:</strong> Performance testing and certification processes</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 15 months | <strong>Format:</strong> Lab-Intensive | <strong>Certification:</strong> Industry-Recognized
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/datadriveninsights_ico.png')} 
                      alt="EV Technology Labs" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Mobility Innovation Arena */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🚗</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Mobility Innovation Arena</h3>
                        <p className="text-lg text-blue-600">Intelligent Transport Systems & Connected Vehicles</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Autonomous Vehicles:</strong> Self-driving technology and AI systems</li>
                      <li>• <strong>Connected Mobility:</strong> V2V, V2I communication and IoT integration</li>
                      <li>• <strong>Smart Traffic Systems:</strong> Traffic optimization and urban planning</li>
                      <li>• <strong>Mobility as a Service:</strong> Shared mobility and platform economics</li>
                      <li>• <strong>Fleet Management:</strong> Optimization, tracking, and maintenance systems</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Focus:</strong> Smart Systems | <strong>Partnerships:</strong> Automotive OEMs | <strong>Outcome:</strong> System Integration Skills
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/global_imgs.png')} 
                      alt="Mobility Innovation Arena" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Sustainable Auto Hub */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🌱</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Sustainable Auto Hub</h3>
                        <p className="text-lg text-green-600">Green Manufacturing & Low-Carbon Transportation Models</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Sustainable Manufacturing:</strong> Lean production and circular economy principles</li>
                      <li>• <strong>Life Cycle Assessment:</strong> Environmental impact analysis and optimization</li>
                      <li>• <strong>Material Innovation:</strong> Recycled materials and bio-based components</li>
                      <li>• <strong>Carbon Footprint:</strong> Measurement, reduction, and offset strategies</li>
                      <li>• <strong>Supply Chain Sustainability:</strong> Ethical sourcing and green logistics</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Approach:</strong> Sustainability-First | <strong>Standards:</strong> ISO 14001 Certified | <strong>Impact:</strong> Carbon Neutral Operations
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/engaing_learning.jpg')} 
                      alt="Sustainable Auto Hub" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* EV Policy & Business Forum */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">EV Policy & Business Forum</h3>
                        <p className="text-lg text-purple-600">Linking Tech, Entrepreneurship & Regulations</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Policy Analysis:</strong> EV incentives, regulations, and market dynamics</li>
                      <li>• <strong>Business Strategy:</strong> Market entry, competitive analysis, and growth planning</li>
                      <li>• <strong>Financial Modeling:</strong> Investment analysis, ROI, and funding strategies</li>
                      <li>• <strong>Regulatory Compliance:</strong> Safety standards, emissions, and certification</li>
                      <li>• <strong>Market Research:</strong> Consumer behavior, trends, and demand forecasting</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Network:</strong> Industry Leaders | <strong>Format:</strong> Case Studies & Simulations | <strong>Outcome:</strong> Strategic Thinking Skills
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/corporate_model_img.jpg')} 
                      alt="EV Policy Business Forum" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Start-up Garage */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 lg:p-12 border border-yellow-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Start-up Garage</h3>
                        <p className="text-lg text-yellow-600">Supporting EV-based Entrepreneurship & New-age Mobility Ventures</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Incubation Program:</strong> Idea validation, prototyping, and business development</li>
                      <li>• <strong>Funding Support:</strong> Seed funding, investor connections, and pitch preparation</li>
                      <li>• <strong>Mentorship Network:</strong> Industry veterans, successful entrepreneurs, and investors</li>
                      <li>• <strong>Market Access:</strong> Customer connections, pilot programs, and go-to-market support</li>
                      <li>• <strong>Technical Resources:</strong> Labs, equipment, and engineering expertise</li>
                    </ul>
                    <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm text-gray-700">
                        <strong>Funding:</strong> Up to $100K Seed | <strong>Duration:</strong> 12-18 months | <strong>Success Rate:</strong> 70% Series A Ready
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/career_mentoring_img.jpg')} 
                      alt="Start-up Garage" 
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
                EV Specialization Tracks
              </h2>
              <p className="text-xl text-gray-600">Choose your path in the electric mobility ecosystem</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* EV Engineering Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">EV Engineering</h3>
                  <p className="text-gray-600">Master the technical aspects of electric vehicles</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Battery System Design</li>
                  <li>• Electric Motor Technology</li>
                  <li>• Power Electronics</li>
                  <li>• Vehicle Integration</li>
                  <li>• Testing & Validation</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">15 Months</span>
                  <p className="text-sm text-gray-500">Engineering-focused | Lab-intensive</p>
                </div>
              </div>

              {/* Mobility Business Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mobility Business</h3>
                  <p className="text-gray-600">Lead the business side of transportation innovation</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• EV Market Analysis</li>
                  <li>• Business Model Innovation</li>
                  <li>• Policy & Regulations</li>
                  <li>• Financial Modeling</li>
                  <li>• Strategic Planning</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">12 Months</span>
                  <p className="text-sm text-gray-500">Business-focused | Industry Projects</p>
                </div>
              </div>

              {/* Sustainable Mobility Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Mobility</h3>
                  <p className="text-gray-600">Focus on environmental impact and sustainability</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Life Cycle Assessment</li>
                  <li>• Circular Economy</li>
                  <li>• Carbon Footprint Analysis</li>
                  <li>• Sustainable Manufacturing</li>
                  <li>• Environmental Policy</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">18 Months</span>
                  <p className="text-sm text-gray-500">Sustainability-focused | Research Component</p>
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
                Industry Partnerships & Collaborations
              </h2>
              <p className="text-xl text-gray-600">Connected to leading automotive and mobility companies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Automotive OEMs</h4>
                <p className="text-sm text-gray-600">Tesla, BYD, Rivian, Lucid Motors partnerships</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔋</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Battery Companies</h4>
                <p className="text-sm text-gray-600">CATL, Panasonic, LG Energy collaborations</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Charging Networks</h4>
                <p className="text-sm text-gray-600">ChargePoint, EVgo, Electrify America projects</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Government Agencies</h4>
                <p className="text-sm text-gray-600">DOE, EPA, state transportation departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Drive the Electric Revolution?
            </h2>
            <p className="text-xl mb-4">Join the transformation of global transportation</p>
            <p className="text-lg mb-8 opacity-90">Be part of the sustainable mobility future</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply to EV School
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Tour EV Labs
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Join Startup Garage
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The future is electric. Your career should be too.</p>
              <p className="text-lg">Accelerate your journey in sustainable mobility.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EVMobility;
