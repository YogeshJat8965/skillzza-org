import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const Sustainability = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-green-600 to-teal-700"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/future_proofing_img.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-green-500 rounded-full text-sm font-semibold text-white mb-6">
              SUSTAINABILITY SCHOOL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Global School of Sustainability
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-300">
              Climate Action & Environmental Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Lead the charge in building a sustainable future. Our comprehensive programs combine environmental science, green technology, and climate policy to prepare you for careers that make a real difference in addressing global climate challenges.
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
                Sustainability Programs & Initiatives
              </h2>
              <p className="text-xl text-gray-600">Building tomorrow's green leaders and innovators</p>
            </div>

            <div className="space-y-12">
              {/* Green Skills Curriculum */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📚</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Green Skills Curriculum</h3>
                        <p className="text-lg text-green-600">Renewable Energy, Circular Economy & Climate Finance</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Renewable Energy Systems:</strong> Solar, Wind, Hydro, and Emerging Technologies</li>
                      <li>• <strong>Circular Economy:</strong> Waste Reduction, Resource Efficiency, and Sustainable Design</li>
                      <li>• <strong>Climate Finance:</strong> Green Bonds, Carbon Markets, and ESG Investment</li>
                      <li>• <strong>Environmental Policy:</strong> Regulations, Compliance, and International Frameworks</li>
                      <li>• <strong>Sustainable Business:</strong> Triple Bottom Line and Impact Measurement</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 12 months | <strong>Format:</strong> Blended Learning | <strong>Certification:</strong> UNEP Recognized
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/future_workspace.jpg')} 
                      alt="Green Skills Curriculum" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Sustainability by Design Labs */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🔬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Sustainability by Design Labs</h3>
                        <p className="text-lg text-blue-600">Practical Projects on Waste Management & ESG Solutions</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Waste Management Systems:</strong> Zero-waste design and circular processes</li>
                      <li>• <strong>ESG Implementation:</strong> Environmental, Social, and Governance frameworks</li>
                      <li>• <strong>Life Cycle Assessment:</strong> Product impact analysis and optimization</li>
                      <li>• <strong>Green Building Design:</strong> LEED certification and sustainable architecture</li>
                      <li>• <strong>Supply Chain Sustainability:</strong> Ethical sourcing and carbon footprint reduction</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Format:</strong> Hands-on Labs | <strong>Projects:</strong> Real Industry Challenges | <strong>Outcome:</strong> Certified Solutions
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/engaing_learning.jpg')} 
                      alt="Sustainability Labs" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Climate Action Incubator */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Climate Action Incubator</h3>
                        <p className="text-lg text-orange-600">Student-driven Initiatives for Local & Global Impact</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Innovation Challenges:</strong> Solve real climate problems with creative solutions</li>
                      <li>• <strong>Startup Support:</strong> Funding, mentorship, and business development</li>
                      <li>• <strong>Community Projects:</strong> Local environmental initiatives and partnerships</li>
                      <li>• <strong>Global Collaboration:</strong> International climate action networks</li>
                      <li>• <strong>Impact Measurement:</strong> Track and scale environmental benefits</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Support:</strong> Seed Funding Available | <strong>Network:</strong> Global Climate Leaders | <strong>Timeline:</strong> 6-18 months
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/corporate_model_img.jpg')} 
                      alt="Climate Action Incubator" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Policy & Impact Forum */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🏛️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Policy & Impact Forum</h3>
                        <p className="text-lg text-purple-600">Dialogue with Policymakers, NGOs & Industry Leaders</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Policy Workshops:</strong> Understanding climate legislation and regulations</li>
                      <li>• <strong>Stakeholder Engagement:</strong> Direct access to government and NGO leaders</li>
                      <li>• <strong>Industry Roundtables:</strong> Corporate sustainability executives and practitioners</li>
                      <li>• <strong>International Forums:</strong> UN Climate conferences and global summits</li>
                      <li>• <strong>Advocacy Training:</strong> Effective communication and policy influence</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Access:</strong> High-level Decision Makers | <strong>Format:</strong> Monthly Forums | <strong>Outcome:</strong> Policy Influence Skills
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/global_imgs.png')} 
                      alt="Policy Impact Forum" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Carbon Innovation Hub */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-slate-700 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">⚗️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Carbon Innovation Hub</h3>
                        <p className="text-lg text-gray-600">Experimentation with Net-zero, Carbon Capture & Green Tech</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Carbon Capture Technologies:</strong> Direct air capture and storage solutions</li>
                      <li>• <strong>Net-zero Strategies:</strong> Comprehensive decarbonization planning</li>
                      <li>• <strong>Green Technology R&D:</strong> Emerging clean tech innovations</li>
                      <li>• <strong>Carbon Accounting:</strong> Measurement, reporting, and verification systems</li>
                      <li>• <strong>Offset Development:</strong> Nature-based and technological carbon credits</li>
                    </ul>
                    <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-700">
                        <strong>Equipment:</strong> Advanced Lab Facilities | <strong>Partnerships:</strong> Leading Research Institutes | <strong>Focus:</strong> Breakthrough Innovation
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/datadriveninsights_ico.png')} 
                      alt="Carbon Innovation Hub" 
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
                Specialization Tracks
              </h2>
              <p className="text-xl text-gray-600">Choose your path to environmental leadership</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Climate Science Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Climate Science & Research</h3>
                  <p className="text-gray-600">Deep dive into climate modeling and environmental science</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Climate Modeling & Prediction</li>
                  <li>• Environmental Data Analysis</li>
                  <li>• Ecosystem Assessment</li>
                  <li>• Research Methodology</li>
                  <li>• Scientific Communication</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">18 Months</span>
                  <p className="text-sm text-gray-500">Research-focused | Thesis Required</p>
                </div>
              </div>

              {/* Green Business Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Business</h3>
                  <p className="text-gray-600">Lead corporate sustainability and green innovation</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• ESG Strategy & Implementation</li>
                  <li>• Sustainable Supply Chains</li>
                  <li>• Green Finance & Investment</li>
                  <li>• Corporate Sustainability</li>
                  <li>• Impact Measurement</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">12 Months</span>
                  <p className="text-sm text-gray-500">Business-focused | Industry Projects</p>
                </div>
              </div>

              {/* Policy Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Policy</h3>
                  <p className="text-gray-600">Shape climate policy and environmental governance</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Climate Policy Analysis</li>
                  <li>• International Environmental Law</li>
                  <li>• Stakeholder Engagement</li>
                  <li>• Policy Development</li>
                  <li>• Advocacy & Communication</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">15 Months</span>
                  <p className="text-sm text-gray-500">Policy-focused | Internship Included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Partnerships */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Global Impact & Partnerships
              </h2>
              <p className="text-xl text-gray-600">Connected to the world's leading environmental organizations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">UN Environment</h4>
                <p className="text-sm text-gray-600">Official partnership for SDG implementation</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏭</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Global Companies</h4>
                <p className="text-sm text-gray-600">Sustainability projects with Fortune 500</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔬</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Research Institutes</h4>
                <p className="text-sm text-gray-600">Collaboration with leading climate labs</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Policy Organizations</h4>
                <p className="text-sm text-gray-600">Direct access to climate policymakers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Lead the Climate Revolution?
            </h2>
            <p className="text-xl mb-4">Join the global movement for environmental sustainability</p>
            <p className="text-lg mb-8 opacity-90">Be part of the solution to the world's greatest challenge</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-green-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply to Sustainability School
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-500 transition-all duration-300">
                Visit Climate Labs
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-green-500 transition-all duration-300">
                Download Program Guide
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The planet needs leaders. Be one of them.</p>
              <p className="text-lg">Start your sustainability journey today.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
