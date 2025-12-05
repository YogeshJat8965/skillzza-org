import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const Hirenest = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-400 to-purple-500"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/insight_roles.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              HIRENEST
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              The AI-Powered Campus Hiring Marketplace
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300">
              Connecting Pre-Assessed, Job-Ready Talent with Future-Ready Employers
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Revolutionize Campus Hiring. Accelerate Career Journeys. Shape Tomorrow's Workforce Today.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hirenest is a next-generation hiring marketplace designed to bridge the gap between academia and industry. By connecting employers with pre-assessed, job-ready students from colleges and universities, we eliminate inefficiencies in the hiring process and enable organizations to discover the right talent faster, smarter, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* The Campus Hiring Crisis */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Campus Hiring Crisis
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-8">
                Why Traditional Campus Recruitment is Broken
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Employers */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">For Employers</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>73% of campus hires leave within 18 months</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Average hiring cost per graduate: $15,000+</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>6-month average time-to-productivity</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited visibility into actual skills and potential</span>
                  </li>
                </ul>
              </div>

              {/* For Students */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">For Students</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Only 47% of graduates get placed through campus drives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>68% feel unprepared for job interviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited exposure to companies beyond top-tier recruiters</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Skills often don't match job requirements</span>
                  </li>
                </ul>
              </div>

              {/* For Institutions */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">For Institutions</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Declining placement rates affecting reputation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited industry partnership opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No standardized way to showcase student capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Administrative burden of managing multiple recruiters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white font-bold text-xl">
                Hirenest changes everything.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Approach */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Revolutionary Approach
              </h2>
              <div className="text-xl font-semibold text-orange-600 mb-8">
                Pre-Assessment + AI Matching + Seamless Hiring = Perfect Placements
              </div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We've reimagined campus hiring from the ground up, creating a three-sided marketplace that benefits everyone:
              </p>
            </div>

            <div className="space-y-16">
              {/* For Students */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/forstudentuse.jpg')} 
                      alt="For Students" 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students: Showcase Your True Potential</h3>
                    <p className="text-lg text-gray-700 mb-6 italic">Beyond grades, beyond college rankings - your skills speak louder</p>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">The Hirenest Student Advantage:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>AI-Powered Assessment Suite:</strong> Technical skills, cognitive abilities, personality traits, and cultural fit indicators</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Verified Skill Credentials:</strong> Industry-recognized certifications that employers trust</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Global Opportunity Access:</strong> Connect with 100+ companies across industries</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Career Readiness Score:</strong> Know exactly where you stand and what to improve</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Interview Preparation:</strong> AI-driven mock interviews and feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Employers */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/for_corporate_only_img.jpg')} 
                      alt="For Employers" 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers: Hire the Right Talent, Faster</h3>
                    <p className="text-lg text-gray-700 mb-6 italic">Access pre-qualified candidates who are ready to contribute from day one</p>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">The Hirenest Employer Advantage:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Pre-Assessed Talent Pool:</strong> 500,000+ students evaluated on 200+ skill parameters</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>50% Faster Hiring:</strong> Skip initial screening rounds with confidence</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>75% Better Retention:</strong> Skills-matched placements reduce early attrition</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Predictive Analytics:</strong> AI forecasts candidate success in specific roles</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Bulk Hiring Solutions:</strong> Scale recruitment across multiple colleges simultaneously</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Institutions */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <img 
                      src={getAssetPath('/for_universities_banner.jpeg')} 
                      alt="For Institutions" 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions: Elevate Your Placement Success</h3>
                    <p className="text-lg text-gray-700 mb-6 italic">Transform your students into industry-ready professionals</p>
                    <h4 className="text-xl font-semibold text-orange-600 mb-4">The Hirenest Institution Advantage:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Enhanced Placement Rates:</strong> 40% improvement in student job placement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Employer Partnership Hub:</strong> Connect with 1000+ hiring organizations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Student Analytics Dashboard:</strong> Track and improve student readiness metrics</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Brand Enhancement:</strong> Showcase job-ready graduate outcomes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Revenue Sharing:</strong> Earn from successful placements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Hirenest Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Hirenest Works
              </h2>
              <p className="text-xl text-gray-600">From Assessment to Employment in 5 Simple Steps</p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Student Onboarding & Assessment</h3>
                  <p className="text-gray-600 mb-4">Comprehensive evaluation in under 2 hours</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Technical skill assessment (coding, domain knowledge, tools proficiency)</li>
                      <li>• Cognitive ability testing (problem-solving, analytical thinking, learning agility)</li>
                      <li>• Behavioral evaluation (communication, teamwork, leadership potential)</li>
                      <li>• Cultural fit analysis (work style, values alignment, growth mindset)</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">Result: Detailed student profile with verified skill scores</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Creation & Optimization</h3>
                  <p className="text-gray-600 mb-4">AI-enhanced profiles that stand out</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dynamic resume generation based on assessment results</li>
                      <li>• Skill-based project portfolio recommendations</li>
                      <li>• Personal branding guidance and tips</li>
                      <li>• Interview readiness checklist and preparation materials</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">Result: Market-ready student profiles in the Hirenest talent pool</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Matching & Discovery</h3>
                  <p className="text-gray-600 mb-4">AI connects the right talent with the right opportunities</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Intelligent job matching based on skills and potential</li>
                      <li>• Company culture fit scoring for better long-term success</li>
                      <li>• Growth trajectory analysis for career progression planning</li>
                      <li>• Salary benchmarking and negotiation insights</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">Result: Targeted job opportunities that align with student capabilities</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Streamlined Interview Process</h3>
                  <p className="text-gray-600 mb-4">Efficient, fair, and data-driven selection</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pre-scheduled interview slots with matched employers</li>
                      <li>• AI-powered interview analytics and feedback</li>
                      <li>• Technical evaluation through live coding/case studies</li>
                      <li>• Behavioral assessment through structured interviews</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">Result: Faster decision-making with comprehensive candidate insights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Onboarding & Success Tracking</h3>
                  <p className="text-gray-600 mb-4">Ensuring successful transitions from campus to corporate</p>
                </div>
                <div className="lg:w-2/3">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Digital offer management and acceptance tracking</li>
                      <li>• Onboarding checklist and milestone tracking</li>
                      <li>• 90-day success monitoring and support</li>
                      <li>• Continuous feedback loop for improvement</li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">Result: Successful job placements with long-term retention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Platform Features & Capabilities
              </h2>
            </div>

            <div className="space-y-16">
              {/* For Students Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Students</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Assessment Suite</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Technical Skills: Role-specific assessments for 50+ domains</li>
                      <li>• Cognitive Abilities: Problem-solving, logical reasoning</li>
                      <li>• Soft Skills: Communication, leadership, teamwork</li>
                      <li>• Industry Knowledge: Sector-specific understanding</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200">
                    <div className="text-3xl mb-4">📈</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Career Development Tools</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Skill Gap Analysis: Identify improvement areas</li>
                      <li>• Learning Path Recommendations</li>
                      <li>• Interview Preparation: Mock interviews with AI feedback</li>
                      <li>• Salary Insights: Market rates for your skill level</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                    <div className="text-3xl mb-4">🌐</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Opportunity Marketplace</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Job Matching: AI-powered role recommendations</li>
                      <li>• Company Discovery: Explore 1000+ organizations</li>
                      <li>• Application Tracking: Monitor status</li>
                      <li>• Networking Hub: Connect with alumni</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                    <div className="text-3xl mb-4">💡</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Always Free</h4>
                    <p className="text-sm text-gray-700">
                      Complete access to all student features at no cost. Your career journey shouldn't come with a price tag.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Employers Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Employers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="text-3xl mb-4">🔍</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Talent Discovery Engine</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Advanced Filtering: Search by skills, college, location</li>
                      <li>• Predictive Analytics: Success probability scoring</li>
                      <li>• Bulk Actions: Shortlist and hire multiple candidates</li>
                      <li>• Custom Assessments: Role-specific evaluation</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200">
                    <div className="text-3xl mb-4">📊</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Hiring Analytics Dashboard</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pipeline Visibility: Track candidates through stages</li>
                      <li>• Performance Metrics: Time-to-hire, cost-per-hire</li>
                      <li>• Retention Insights: Track placed candidate success</li>
                      <li>• ROI Analysis: Compare vs. traditional methods</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                    <div className="text-3xl mb-4">🤝</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Campus Partnership Tools</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Virtual Hiring Drives: Host online recruitment</li>
                      <li>• College Collaboration: Partner with placement cells</li>
                      <li>• Brand Building: Showcase company culture</li>
                      <li>• Student Engagement: Interactive sessions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Institutions Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Institutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="text-3xl mb-4">📈</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Placement Management System</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Student Progress Tracking: Monitor assessment completion</li>
                      <li>• Employer Relationship Management: Manage partnerships</li>
                      <li>• Placement Analytics: Track job placement rates</li>
                      <li>• Success Stories: Showcase graduate achievements</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Curriculum Enhancement Tools</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry Skill Mapping: Understand market requirements</li>
                      <li>• Gap Analysis Reports: Identify improvement areas</li>
                      <li>• Faculty Development: Industry-relevant training</li>
                      <li>• Certification Integration: Embed industry certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pricing & Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Students</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">FREE</div>
                <p className="text-gray-600 mb-6">Always Free – because launching your career shouldn't come with a price tag.</p>
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
                  Start Your Assessment Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h3>
                <div className="text-2xl font-bold text-orange-600 mb-4">Custom Pricing</div>
                <p className="text-gray-600 mb-6">Tailored subscription plans to match your hiring needs and scale.</p>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Book Your Demo
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions</h3>
                <div className="text-2xl font-bold text-purple-600 mb-4">Partnership Model</div>
                <p className="text-gray-600 mb-6">Revenue sharing model with no upfront costs. Earn from successful placements.</p>
                <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors">
                  Explore Partnership
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                Contact Us to design a package that fits your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Getting Started
              </h2>
              <p className="text-xl text-gray-600">Ready to Transform Campus Hiring?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Students */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <div className="text-4xl mb-4 text-center">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Students</h3>
                <p className="text-gray-600 mb-6 text-center italic">Your career journey starts here</p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span>Complete Assessment (2 hours) - Showcase your true potential</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span>Build Profile (30 minutes) - Create your professional presence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span>Discover Opportunities - Get matched with perfect-fit roles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <span>Land Your Dream Job - Start your career with confidence</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  Start Your Assessment Now
                </button>
              </div>

              {/* For Employers */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-200">
                <div className="text-4xl mb-4 text-center">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Employers</h3>
                <p className="text-gray-600 mb-6 text-center italic">Hire better, hire faster</p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span>Platform Demo (15 minutes) - See Hirenest in action</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span>Define Requirements - Tell us what you're looking for</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span>Access Talent Pool - Browse pre-assessed candidates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <span>Make Your First Hire - Experience the difference</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-sm">
                    Book Demo
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-sm">
                    Chat with Expert
                  </button>
                </div>
              </div>

              {/* For Institutions */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="text-4xl mb-4 text-center">🏫</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">For Institutions</h3>
                <p className="text-gray-600 mb-6 text-center italic">Elevate your placement success</p>
                <div className="space-y-3 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span>Partnership Discussion - Understand mutual benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span>Platform Integration - Seamless setup and training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span>Student Onboarding - Get your students assessment-ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <span>Track Success - Monitor improved placement outcomes</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm">
                    Explore Partnership
                  </button>
                  <button className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm">
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* For Students FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">For Students</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: How long does the assessment take?</h4>
                    <p className="text-gray-600 text-sm">A: The complete assessment takes 90-120 minutes, but you can complete it in multiple sessions at your convenience.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: Is there any cost for students?</h4>
                    <p className="text-gray-600 text-sm">A: Absolutely not. Hirenest is completely free for students - assessment, profile creation, job applications, everything.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: What if I don't get placed immediately?</h4>
                    <p className="text-gray-600 text-sm">A: We provide continuous support, skill development recommendations, and new opportunity alerts until you find the right role.</p>
                  </div>
                </div>
              </div>

              {/* For Employers FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">For Employers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: How accurate is the skill assessment?</h4>
                    <p className="text-gray-600 text-sm">A: Our AI-powered assessments have 94% accuracy in predicting job performance, validated across 100,000+ placements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: Can we customize the assessment for our specific needs?</h4>
                    <p className="text-gray-600 text-sm">A: Yes, enterprise clients can create custom assessments tailored to their role requirements and company culture.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: What's the typical time-to-hire using Hirenest?</h4>
                    <p className="text-gray-600 text-sm">A: Our clients typically reduce their campus hiring time by 50%, from 12-16 weeks to 6-8 weeks on average.</p>
                  </div>
                </div>
              </div>

              {/* For Institutions FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">For Institutions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: How does the revenue sharing work?</h4>
                    <p className="text-gray-600 text-sm">A: Institutions earn 10% of the placement fee for every successful hire from their student pool - no upfront costs involved.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Q: Will this replace our existing placement cell?</h4>
                    <p className="text-gray-600 text-sm">A: No, Hirenest enhances your placement cell's capabilities by providing better tools, analytics, and employer connections.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact us & Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to transform your hiring process? Our team is here to help you get started with Hirenest and answer any questions you might have.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                {/* Email Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                  <a href="mailto:Contact@Skillzza.com" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Contact@Skillzza.com
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our team</p>
                  <p className="text-green-600 font-semibold">Available Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Call Back</h3>
                    <p className="text-gray-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Type</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white">
                          <option value="">Select organization type</option>
                          <option value="student">Student</option>
                          <option value="institution">Educational Institution</option>
                          <option value="enterprise">Enterprise/Company</option>
                          <option value="startup">Startup</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help you?</label>
                      <textarea 
                        placeholder="Tell us about your requirements, questions, or how you'd like to use Hirenest..." 
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive communications from Skillzza and understand that I can unsubscribe at any time.
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <p className="text-gray-600">Get started immediately with these popular options</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Student Assessment</h4>
                  <p className="text-sm text-gray-600">Start your free assessment now</p>
                </button>
                
                <button className="group bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🏢</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Employer Demo</h4>
                  <p className="text-sm text-gray-600">Book a 15-minute demo</p>
                </button>
                
                <button className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🏫</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Institution Partnership</h4>
                  <p className="text-sm text-gray-600">Explore collaboration opportunities</p>
                </button>
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
              Together, let's build a future where talent and opportunity find each other effortlessly.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Assessment Now
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Book Your Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hirenest;
