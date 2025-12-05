import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const Udan = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-indigo-600 to-blue-700"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/precision_agriculture_tile.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-indigo-500 rounded-full text-sm font-semibold text-white mb-6">
              UDAN - AERIAL INTELLIGENCE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Udan
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
              Aerial Intelligence School
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Soar into the future of aerial technology and unmanned systems. Our comprehensive programs cover drone innovation, aerial data intelligence, and aerospace applications, preparing you for leadership in the rapidly expanding drone and aviation industry.
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
                Aerial Intelligence & Drone Innovation Programs
              </h2>
              <p className="text-xl text-gray-600">Master the skies with cutting-edge aerial technology</p>
            </div>

            <div className="space-y-12">
              {/* Drone Innovation Labs */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-indigo-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🚁</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Drone Innovation Labs</h3>
                        <p className="text-lg text-indigo-600">UAV Design, Simulation, and Piloting Skills</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>UAV Design & Engineering:</strong> Aerodynamics, propulsion, and structural design</li>
                      <li>• <strong>Flight Control Systems:</strong> Autopilot, navigation, and stability systems</li>
                      <li>• <strong>Drone Simulation:</strong> Virtual flight testing and mission planning</li>
                      <li>• <strong>Piloting & Operations:</strong> Manual and autonomous flight operations</li>
                      <li>• <strong>Payload Integration:</strong> Cameras, sensors, and specialized equipment</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-xl border border-indigo-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 12 months | <strong>Format:</strong> Hands-on Labs | <strong>Certification:</strong> FAA Part 107 & Beyond
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/future_workspace.jpg')} 
                      alt="Drone Innovation Labs" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Aerial Data Intelligence Hub */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Aerial Data Intelligence Hub</h3>
                        <p className="text-lg text-green-600">AI-driven Mapping, Surveillance & Geospatial Analytics</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Geospatial Analytics:</strong> GIS, remote sensing, and spatial data analysis</li>
                      <li>• <strong>Computer Vision:</strong> Object detection, tracking, and image recognition</li>
                      <li>• <strong>AI & Machine Learning:</strong> Automated analysis and pattern recognition</li>
                      <li>• <strong>Mapping & Surveying:</strong> 3D modeling, photogrammetry, and LiDAR</li>
                      <li>• <strong>Data Processing:</strong> Real-time analytics and cloud-based platforms</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Focus:</strong> AI & Data Science | <strong>Tools:</strong> Industry-Standard Software | <strong>Outcome:</strong> Data Intelligence Expertise
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/datadriveninsights_ico.png')} 
                      alt="Aerial Data Intelligence" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Defense & Disaster Response Pods */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-red-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🛡️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Defense & Disaster Response Pods</h3>
                        <p className="text-lg text-red-600">Drone Applications for National Security & Crisis Management</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Security & Surveillance:</strong> Border patrol, perimeter monitoring, and threat detection</li>
                      <li>• <strong>Search & Rescue:</strong> Emergency response, victim location, and coordination</li>
                      <li>• <strong>Disaster Assessment:</strong> Damage evaluation, risk analysis, and recovery planning</li>
                      <li>• <strong>Counter-Drone Systems:</strong> Detection, tracking, and neutralization technologies</li>
                      <li>• <strong>Mission Planning:</strong> Strategic deployment and tactical operations</li>
                    </ul>
                    <div className="bg-red-100 p-4 rounded-xl border border-red-200">
                      <p className="text-sm text-gray-700">
                        <strong>Partnerships:</strong> Defense Contractors | <strong>Clearance:</strong> Security Clearance Support | <strong>Training:</strong> Military-Grade Standards
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/essential_soft_ico.png')} 
                      alt="Defense Disaster Response" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Aerial Commerce Arena */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📦</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Aerial Commerce Arena</h3>
                        <p className="text-lg text-purple-600">Drone Delivery, Logistics, and Commercial Deployment</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Delivery Systems:</strong> Last-mile delivery, package handling, and route optimization</li>
                      <li>• <strong>Logistics Integration:</strong> Supply chain optimization and warehouse automation</li>
                      <li>• <strong>Commercial Operations:</strong> Business models, regulatory compliance, and scaling</li>
                      <li>• <strong>Fleet Management:</strong> Multi-drone coordination and maintenance systems</li>
                      <li>• <strong>Customer Experience:</strong> Service design, tracking, and quality assurance</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Industry:</strong> E-commerce Focus | <strong>Partners:</strong> Amazon, UPS, FedEx | <strong>Outcome:</strong> Commercial Deployment Skills
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/corporate_model_img.jpg')} 
                      alt="Aerial Commerce Arena" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Aviation & Aerospace Connect */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">✈️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Aviation & Aerospace Connect</h3>
                        <p className="text-lg text-blue-600">Exposure to Global Aerospace Innovation Networks</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Aerospace Industry:</strong> Traditional aviation, space exploration, and satellite technology</li>
                      <li>• <strong>Innovation Networks:</strong> NASA, ESA, SpaceX, and aerospace startups</li>
                      <li>• <strong>Advanced Materials:</strong> Composites, lightweight structures, and smart materials</li>
                      <li>• <strong>Propulsion Systems:</strong> Electric, hybrid, and alternative propulsion technologies</li>
                      <li>• <strong>Future Mobility:</strong> Urban air mobility, flying cars, and space tourism</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Network:</strong> Global Aerospace Leaders | <strong>Opportunities:</strong> Internships & Research | <strong>Vision:</strong> Next-Gen Aviation
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/career_mentoring_img.jpg')} 
                      alt="Aviation Aerospace Connect" 
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
                Aerial Specialization Tracks
              </h2>
              <p className="text-xl text-gray-600">Choose your flight path in the aerial intelligence ecosystem</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Drone Engineering Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Drone Engineering</h3>
                  <p className="text-gray-600">Design and build next-generation UAV systems</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• UAV Design & Aerodynamics</li>
                  <li>• Flight Control Systems</li>
                  <li>• Propulsion & Power Systems</li>
                  <li>• Avionics Integration</li>
                  <li>• Testing & Certification</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">15 Months</span>
                  <p className="text-sm text-gray-500">Engineering-focused | Hardware Labs</p>
                </div>
              </div>

              {/* Aerial Data Science Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Aerial Data Science</h3>
                  <p className="text-gray-600">Master AI-driven aerial intelligence and analytics</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Computer Vision & AI</li>
                  <li>• Geospatial Analytics</li>
                  <li>• Remote Sensing</li>
                  <li>• Data Processing Pipelines</li>
                  <li>• Machine Learning Applications</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">12 Months</span>
                  <p className="text-sm text-gray-500">Data-focused | AI/ML Intensive</p>
                </div>
              </div>

              {/* Commercial Drone Operations Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Operations</h3>
                  <p className="text-gray-600">Lead commercial drone deployment and business</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Commercial Drone Operations</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Business Model Development</li>
                  <li>• Fleet Management</li>
                  <li>• Market Strategy</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">10 Months</span>
                  <p className="text-sm text-gray-500">Business-focused | Industry Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry Applications & Career Paths
              </h2>
              <p className="text-xl text-gray-600">Diverse opportunities across multiple industries</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Defense & Security</h4>
                <p className="text-sm text-gray-600">Military, law enforcement, and security applications</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌾</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Agriculture</h4>
                <p className="text-sm text-gray-600">Precision farming, crop monitoring, and optimization</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Construction</h4>
                <p className="text-sm text-gray-600">Site surveying, progress monitoring, and inspection</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Logistics</h4>
                <p className="text-sm text-gray-600">Delivery services, inventory, and supply chain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Flight in Aerial Intelligence?
            </h2>
            <p className="text-xl mb-4">Join the aerial revolution and shape the future of unmanned systems</p>
            <p className="text-lg mb-8 opacity-90">The sky is not the limit – it's your playground</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-indigo-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply to Udan
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-indigo-500 transition-all duration-300">
                Visit Drone Labs
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-indigo-500 transition-all duration-300">
                Get Flight Training
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The future flies with those who dare to innovate.</p>
              <p className="text-lg">Soar with Udan – Aerial Intelligence School.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Udan;
