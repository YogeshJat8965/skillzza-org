import React from 'react';

import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';
const TalentIntelligence = () => {
  const contactUsPath = getRoutePath('/contact-us');

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-orange-500 to-yellow-600"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/transformskill_futureset.png'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              TALENT INTELLIGENCE SUITE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Talent Intelligence Suite
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Power Smarter Workforce Decisions with 360° Talent Intelligence
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your workforce strategy with comprehensive talent analytics, predictive insights, and intelligent matching. Make data-driven decisions that drive organizational success and employee growth.
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
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">5M+</div>
                <div className="text-lg opacity-90">Talent Profiles</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-lg opacity-90">Enterprise Clients</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-lg opacity-90">Prediction Accuracy</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">60%</div>
                <div className="text-lg opacity-90">Faster Hiring</div>
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
                Core Intelligence Capabilities
              </h2>
              <p className="text-xl text-gray-600">Comprehensive talent analytics for strategic workforce decisions</p>
            </div>

            <div className="space-y-12">
              {/* Workforce Skill Mapping */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🗺️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Complete Workforce Skill Mapping</h3>
                        <p className="text-lg text-orange-600">& Gap Analysis</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Comprehensive Skills Inventory:</strong> Map all technical and soft skills across your organization</li>
                      <li>• <strong>Real-time Skill Assessment:</strong> Continuous evaluation through work performance and assessments</li>
                      <li>• <strong>Gap Identification:</strong> Pinpoint skill shortages and surpluses by department and role</li>
                      <li>• <strong>Future Skills Forecasting:</strong> Predict skill needs based on business strategy and market trends</li>
                      <li>• <strong>Benchmarking:</strong> Compare your talent capabilities against industry standards</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Coverage:</strong> 500+ Skills | <strong>Assessment:</strong> Continuous | <strong>Accuracy:</strong> 95%+ | <strong>Updates:</strong> Real-time
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/data_ai.jpg')} 
                      alt="Workforce Skill Mapping" 
                      className="w-full rounded-2xl shadow-lg" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-lg flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-6xl">🗺️</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role-Specific Upskilling */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Role-Specific Upskilling Pathways</h3>
                        <p className="text-lg text-blue-600">Aligned with Business Needs</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Personalized Learning Paths:</strong> Custom upskilling journeys for each employee</li>
                      <li>• <strong>Business-Aligned Training:</strong> Learning programs tied to strategic objectives</li>
                      <li>• <strong>Competency-Based Progression:</strong> Clear milestones and achievement tracking</li>
                      <li>• <strong>ROI Measurement:</strong> Track the impact of training on performance and productivity</li>
                      <li>• <strong>Adaptive Recommendations:</strong> AI-powered suggestions based on role evolution</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Pathways:</strong> 200+ Role-specific | <strong>Completion:</strong> 85% average | <strong>ROI:</strong> 3.5x training investment
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/personalizedpearningpaths_ico.png')} 
                      alt="Upskilling Pathways" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🔮</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Predictive Talent Analytics</h3>
                        <p className="text-lg text-green-600">For Succession Planning</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Performance Prediction:</strong> Forecast employee performance and potential</li>
                      <li>• <strong>Succession Readiness:</strong> Identify and prepare high-potential employees</li>
                      <li>• <strong>Retention Risk Analysis:</strong> Predict and prevent talent attrition</li>
                      <li>• <strong>Career Trajectory Modeling:</strong> Map optimal career paths for employees</li>
                      <li>• <strong>Leadership Pipeline:</strong> Build robust succession plans for critical roles</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Accuracy:</strong> 92% prediction rate | <strong>Timeline:</strong> 6-24 months | <strong>Coverage:</strong> All employee levels
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/future_proofing_img.jpg')} 
                      alt="Predictive Analytics" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Behavioral Intelligence */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🧠</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Behavioral Intelligence Matching</h3>
                        <p className="text-lg text-purple-600">For Optimal Team Performance</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Personality Profiling:</strong> Deep insights into work styles and preferences</li>
                      <li>• <strong>Team Compatibility:</strong> Optimize team composition for maximum synergy</li>
                      <li>• <strong>Communication Styles:</strong> Match complementary communication preferences</li>
                      <li>• <strong>Conflict Resolution:</strong> Predict and prevent team conflicts</li>
                      <li>• <strong>Cultural Fit Analysis:</strong> Ensure alignment with organizational values</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Profiles:</strong> 16 personality types | <strong>Team Performance:</strong> +35% improvement | <strong>Retention:</strong> +40% increase
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/corporate_model_img.jpg')} 
                      alt="Behavioral Intelligence" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Real-time Dashboard */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-indigo-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Real-time Dashboard</h3>
                        <p className="text-lg text-indigo-600">For HR and L&D Decision-making</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Executive Dashboards:</strong> High-level talent metrics for leadership</li>
                      <li>• <strong>Operational Views:</strong> Detailed analytics for HR and L&D teams</li>
                      <li>• <strong>Custom Reports:</strong> Tailored insights for specific business needs</li>
                      <li>• <strong>Automated Alerts:</strong> Proactive notifications for critical talent events</li>
                      <li>• <strong>Mobile Access:</strong> Key metrics available anywhere, anytime</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-xl border border-indigo-200">
                      <p className="text-sm text-gray-700">
                        <strong>Updates:</strong> Real-time | <strong>Customization:</strong> Fully configurable | <strong>Access:</strong> Role-based permissions
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/flexible_acesible_ico.png')} 
                      alt="Real-time Dashboard" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Use Cases
              </h2>
              <p className="text-xl text-gray-600">How leading organizations leverage Talent Intelligence Suite</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Strategic Workforce Planning */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Workforce Planning</h3>
                  <p className="text-gray-600">Align talent strategy with business objectives</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Future skill demand forecasting</li>
                  <li>• Workforce capacity planning</li>
                  <li>• Budget optimization</li>
                  <li>• Risk mitigation strategies</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">25%</span>
                  <p className="text-sm text-gray-500">Reduction in hiring costs</p>
                </div>
              </div>

              {/* Talent Acquisition */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Talent Acquisition</h3>
                  <p className="text-gray-600">Find and hire the right talent faster</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• AI-powered candidate matching</li>
                  <li>• Bias-free hiring processes</li>
                  <li>• Predictive hiring success</li>
                  <li>• Cultural fit assessment</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">60%</span>
                  <p className="text-sm text-gray-500">Faster time-to-hire</p>
                </div>
              </div>

              {/* Performance Management */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Optimization</h3>
                  <p className="text-gray-600">Maximize individual and team performance</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Performance prediction models</li>
                  <li>• Personalized development plans</li>
                  <li>• Real-time feedback systems</li>
                  <li>• Goal alignment tracking</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">40%</span>
                  <p className="text-sm text-gray-500">Performance improvement</p>
                </div>
              </div>

              {/* Learning & Development */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intelligent L&D</h3>
                  <p className="text-gray-600">Optimize learning investments and outcomes</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Skill gap-based training</li>
                  <li>• Learning ROI measurement</li>
                  <li>• Adaptive learning paths</li>
                  <li>• Competency tracking</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">3.5x</span>
                  <p className="text-sm text-gray-500">Training ROI improvement</p>
                </div>
              </div>

              {/* Succession Planning */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👑</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Pipeline</h3>
                  <p className="text-gray-600">Build robust succession plans</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• High-potential identification</li>
                  <li>• Leadership readiness assessment</li>
                  <li>• Development planning</li>
                  <li>• Risk mitigation</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">90%</span>
                  <p className="text-sm text-gray-500">Internal promotion success</p>
                </div>
              </div>

              {/* Diversity & Inclusion */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">D&I Analytics</h3>
                  <p className="text-gray-600">Drive inclusive workforce decisions</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6 text-sm">
                  <li>• Bias detection in processes</li>
                  <li>• Diversity metrics tracking</li>
                  <li>• Inclusive team formation</li>
                  <li>• Pay equity analysis</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-indigo-600">50%</span>
                  <p className="text-sm text-gray-500">Improvement in D&I metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proven ROI & Business Impact
              </h2>
              <p className="text-xl text-gray-600">Measurable results from organizations using Talent Intelligence Suite</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Reduced hiring costs</span>
                    <span className="text-2xl font-bold text-orange-600">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Lower turnover rates</span>
                    <span className="text-2xl font-bold text-orange-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Training cost optimization</span>
                    <span className="text-2xl font-bold text-orange-600">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Reduced time-to-productivity</span>
                    <span className="text-2xl font-bold text-orange-600">50%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Gains</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Employee performance improvement</span>
                    <span className="text-2xl font-bold text-blue-600">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Team productivity increase</span>
                    <span className="text-2xl font-bold text-blue-600">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Employee engagement boost</span>
                    <span className="text-2xl font-bold text-blue-600">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Internal promotion success</span>
                    <span className="text-2xl font-bold text-blue-600">90%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-600 p-8 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-4">Average ROI: 450% within 12 months</h3>
                <p className="text-xl opacity-90">Organizations see significant returns through improved hiring, retention, and performance</p>
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
              Transform Your Workforce Strategy Today
            </h2>
            <p className="text-xl mb-4">Join 1000+ organizations making smarter talent decisions with AI-powered intelligence</p>
            <p className="text-lg mb-8 opacity-90">Experience the power of 360° talent analytics and predictive insights</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button onClick={() => { window.location.href = contactUsPath; }} className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                📊 Book Your Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                📥 Download TIS Overview
              </button>
              <button onClick={() => { window.location.href = contactUsPath; }} className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                📞 Speak with Expert
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">Power smarter workforce decisions.</p>
              <p className="text-lg">Unlock the full potential of your talent with 360° intelligence.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentIntelligence;
