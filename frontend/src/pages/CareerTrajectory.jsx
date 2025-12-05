import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const CareerTrajectory = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/career_readyness.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              CAREER TRAJECTORY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Your Structured Roadmap to Career Success
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Bring together industry-relevant job simulations, providing a structured roadmap to help you secure your ideal entry-level role.
            </p>
          </div>
        </div>
      </section>

      {/* Career Pathway Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Career Trajectory Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A comprehensive, step-by-step approach to building your professional future through structured learning and real-world application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discover & Assess</h3>
                <p className="text-gray-700 leading-relaxed">
                  Identify your strengths, interests, and career aspirations through comprehensive skill assessments and personality profiling.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Simulate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Engage in industry-relevant job simulations and structured learning paths tailored to your chosen career trajectory.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply & Succeed</h3>
                <p className="text-gray-700 leading-relaxed">
                  Leverage your simulation experience, certifications, and portfolio to secure your ideal entry-level position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Popular Career Trajectories
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Explore structured pathways designed to guide you from learning to landing your dream job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technology Track */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/AI_driven_customized_img.jpg')} 
                    alt="Technology Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technology & AI</h3>
                  <p className="text-gray-600 mb-4">
                    From software development to AI engineering, build your tech career with hands-on simulations.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Software Developer</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>AI/ML Engineer</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Data Scientist</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>DevOps Engineer</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Tech Path
                  </button>
                </div>
              </div>

              {/* Business & Marketing */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/for_corporate_only_img.jpg')} 
                    alt="Business Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business & Marketing</h3>
                  <p className="text-gray-600 mb-4">
                    Build strategic thinking and leadership skills through real business scenarios and case studies.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Business Analyst</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Marketing Manager</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Product Manager</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Consultant</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Business Path
                  </button>
                </div>
              </div>

              {/* Design & Creative */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/engaing_learning.jpg')} 
                    alt="Design Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Creative</h3>
                  <p className="text-gray-600 mb-4">
                    Develop your creative portfolio through real design challenges and client projects.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>UX/UI Designer</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Graphic Designer</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Animation Artist</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Creative Director</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Design Path
                  </button>
                </div>
              </div>

              {/* Finance & Banking */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/career_mentoring_img.jpg')} 
                    alt="Finance Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Finance & Banking</h3>
                  <p className="text-gray-600 mb-4">
                    Master financial analysis, risk management, and investment strategies through real market scenarios.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Financial Analyst</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Investment Banker</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Risk Manager</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Portfolio Manager</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Finance Path
                  </button>
                </div>
              </div>

              {/* Healthcare & Life Sciences */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/industry_courses_img.png')} 
                    alt="Healthcare Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare & Life Sciences</h3>
                  <p className="text-gray-600 mb-4">
                    Gain experience in healthcare administration, research, and patient care through realistic simulations.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Healthcare Administrator</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Clinical Research Associate</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Medical Writer</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Health Informatics Specialist</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Healthcare Path
                  </button>
                </div>
              </div>

              {/* Entrepreneurship */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <img 
                    src={getAssetPath('/explore_project.jpg')} 
                    alt="Entrepreneurship Career" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurship & Startups</h3>
                  <p className="text-gray-600 mb-4">
                    Learn to build and scale businesses through startup simulations and real entrepreneurial challenges.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Startup Founder</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Business Development Manager</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Innovation Manager</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span>Venture Capital Analyst</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Explore Startup Path
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory Timeline */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your 12-Month Career Trajectory Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A structured roadmap to transform from student to professional in one year.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Month 1-3 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Months 1-3: Foundation</h3>
                      <p className="text-gray-700 mb-4">Complete skill assessments, choose your career path, and begin foundational learning.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Career assessment & goal setting</li>
                        <li>• Core skill development</li>
                        <li>• Industry fundamentals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Month 4-6 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Months 4-6: Simulation</h3>
                      <p className="text-gray-700 mb-4">Engage in job simulations, build practical skills, and start building your portfolio.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Job simulation participation</li>
                        <li>• Portfolio development</li>
                        <li>• Peer collaboration projects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Month 7-9 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Months 7-9: Specialization</h3>
                      <p className="text-gray-700 mb-4">Focus on advanced simulations, earn certifications, and connect with industry mentors.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced skill certification</li>
                        <li>• Mentorship program</li>
                        <li>• Industry networking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Month 10-12 */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Months 10-12: Launch</h3>
                      <p className="text-gray-700 mb-4">Job search preparation, interview practice, and securing your ideal entry-level position.</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Resume & portfolio optimization</li>
                        <li>• Interview preparation</li>
                        <li>• Job placement support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trajectory Success Metrics
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Track your progress and celebrate milestones on your journey to career success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Skill Proficiency</h3>
                <p className="text-gray-600 text-sm">Measure your technical and soft skill development</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Simulation Completion</h3>
                <p className="text-gray-600 text-sm">Track your progress through job simulations</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certifications Earned</h3>
                <p className="text-gray-600 text-sm">Validate your expertise with industry credentials</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Job Readiness Score</h3>
                <p className="text-gray-600 text-sm">Overall assessment of your employment readiness</p>
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
              Ready to Chart Your Career Trajectory?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have successfully navigated their career journey with Skillzza's structured approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Trajectory
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Schedule Career Consultation
              </button>
            </div>
            <p className="text-lg mt-8 font-semibold">
              Your Future Starts Today
            </p>
            <p className="text-orange-100 mt-2">
              Take the first step towards your dream career with confidence and clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerTrajectory;
