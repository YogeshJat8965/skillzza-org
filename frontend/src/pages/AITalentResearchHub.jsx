import React from 'react';

const AITalentResearchHub = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/aIdataAnalyticsDecisions_tile.jpg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              AI TALENT RESEARCH HUB
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              2025 AI Talent & Salary Benchmark Report
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Global Insights into AI/ML Recruitment Trends, Compensation Patterns, and Emerging Hot Skills
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                EXECUTIVE SUMMARY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Key Market Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The AI talent market in 2025 represents one of the most dynamic and high-stakes sectors in technology recruitment. AI professionals command a median salary of <strong>$160,000 annually</strong>, with specialized skills adding <strong>25-45% premiums</strong> on top of base compensation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The landscape is characterized by unprecedented demand, significant wage premiums, and a clear bifurcation between entry-level opportunities and senior expert positions. Organizations are grappling with talent scarcity while professionals are navigating rapidly evolving skill requirements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-600 mb-6">Key Findings at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Market Premium:</strong>
                      <span className="text-gray-700"> AI professionals command a 9–13% cash premium over Data Scientists</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Engineering Premium:</strong>
                      <span className="text-gray-700"> 5% salary premium and 10-20% equity premium over other engineering roles</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Geographic Arbitrage:</strong>
                      <span className="text-gray-700"> 20-90% cost reduction when hiring from emerging markets</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Top-Tier Compensation:</strong>
                      <span className="text-gray-700"> Senior AI researchers at Big Tech: $500K - $2M annually</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Compensation Landscape */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-600 mb-6">
                COMPENSATION ANALYSIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Global Compensation Landscape
              </h2>
            </div>

            {/* Salary Ranges Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6">
                <h3 className="text-xl font-bold text-white">Base Salary Ranges by Experience Level</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Experience Level</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Median Base Salary (USD)</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Range</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Geographic Variation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Entry Level (0-2 years)</td>
                      <td className="px-6 py-4 text-sm text-orange-600 font-semibold">$95,000 - $130,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$75K - $180K</td>
                      <td className="px-6 py-4 text-sm text-gray-700">40-60% lower in emerging markets</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Mid-Level (3-5 years)</td>
                      <td className="px-6 py-4 text-sm text-orange-600 font-semibold">$140,000 - $220,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$110K - $280K</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30-50% geographic differential</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Senior (6-10 years)</td>
                      <td className="px-6 py-4 text-sm text-orange-600 font-semibold">$220,000 - $350,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$180K - $450K</td>
                      <td className="px-6 py-4 text-sm text-gray-700">20-40% geographic differential</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Principal/Staff (10+ years)</td>
                      <td className="px-6 py-4 text-sm text-orange-600 font-semibold">$350,000 - $600,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$300K - $800K</td>
                      <td className="px-6 py-4 text-sm text-gray-700">15-30% geographic differential</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Research Scientists</td>
                      <td className="px-6 py-4 text-sm text-orange-600 font-semibold">$400,000 - $1,200,000</td>
                      <td className="px-6 py-4 text-sm text-gray-700">$350K - $2M</td>
                      <td className="px-6 py-4 text-sm text-gray-700">10-25% geographic differential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regional Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">NA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">North America</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Silicon Valley</h4>
                    <p className="text-sm text-gray-700">15-25% above national averages</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Seattle</h4>
                    <p className="text-sm text-gray-700">10-20% premium over national</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">New York</h4>
                    <p className="text-sm text-gray-700">12-18% premium, finance-driven</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Canada (Toronto)</h4>
                    <p className="text-sm text-gray-700">20-30% below US equivalents</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">EU</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Europe</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">London, UK</h4>
                    <p className="text-sm text-gray-700">€80,000 - €200,000 for senior roles</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Berlin/Munich</h4>
                    <p className="text-sm text-gray-700">€70,000 - €180,000 senior positions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Amsterdam</h4>
                    <p className="text-sm text-gray-700">€75,000 - €190,000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">AP</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Asia-Pacific</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Singapore</h4>
                    <p className="text-sm text-gray-700">$90,000 - $250,000 regional hub</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Beijing/Shanghai</h4>
                    <p className="text-sm text-gray-700">$80,000 - $300,000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Bangalore/Hyderabad</h4>
                    <p className="text-sm text-gray-700">$25,000 - $120,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most In-Demand Skills */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                SKILLS ANALYSIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Most In-Demand Skills for 2025
              </h2>
            </div>

            {/* Programming Languages */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">Py</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Python</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Universal language for AI/ML</p>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-800">Salary Premium: 15-25%</p>
                    <p className="text-xs text-yellow-700 mt-1">TensorFlow, PyTorch, scikit-learn</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">R</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Statistical computing and analysis</p>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Salary Premium: 10-20%</p>
                    <p className="text-xs text-blue-700 mt-1">Strong in biotech and finance</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">SQL</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">SQL</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Data manipulation and analysis</p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Foundational skill</p>
                    <p className="text-xs text-green-700 mt-1">Advanced SQL: 20-30% boost</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Hot Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Emerging Hot Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Large Language Model (LLM) Specialization</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Market Demand:</span>
                      <span className="text-sm text-orange-600 font-bold">Explosive Growth</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Salary Impact:</span>
                      <span className="text-sm text-orange-600 font-bold">30-50% Premium</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Fine-tuning and PEFT techniques</li>
                        <li>• Retrieval-Augmented Generation (RAG)</li>
                        <li>• LLM evaluation and benchmarking</li>
                        <li>• Deployment and scaling strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Prompt Engineering & AI Product Management</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Salary Range:</span>
                      <span className="text-sm text-orange-600 font-bold">$130K - $300K+</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Advanced prompting techniques</li>
                        <li>• AI product strategy</li>
                        <li>• User experience for AI products</li>
                        <li>• Cross-functional collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">AI Safety & Alignment</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Salary Impact:</span>
                      <span className="text-sm text-orange-600 font-bold">25-40% Premium</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Bias detection and mitigation</li>
                        <li>• Robustness testing</li>
                        <li>• Interpretability methods</li>
                        <li>• Regulatory compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">AI Infrastructure & MLOps</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Salary Impact:</span>
                      <span className="text-sm text-orange-600 font-bold">15-30% Premium</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Kubernetes for ML workloads</li>
                        <li>• Model serving and monitoring</li>
                        <li>• Data pipeline orchestration</li>
                        <li>• Cloud-native AI architectures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Role Compensation */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Specialty Role Compensation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Prompt Engineering</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mid-level:</span>
                      <span className="text-sm font-semibold text-yellow-600">$130K-$150K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$200K-$250K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Top Labs:</span>
                      <span className="text-sm font-semibold text-orange-600">$300K+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Computer Vision</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$130K-$160K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$200K-$350K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Principal:</span>
                      <span className="text-sm font-semibold text-orange-600">$350K-$600K</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">NLP Specialists</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$125K-$155K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$195K-$340K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Principal:</span>
                      <span className="text-sm font-semibold text-orange-600">$340K-$580K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Trends */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-600 mb-6">
                MARKET DYNAMICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Recruitment Trends & Talent Acquisition
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Talent Scarcity Indicators</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Time to Fill (Senior Roles)</span>
                    <span className="text-lg font-bold text-orange-600">4-6 months</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Offer Acceptance Rate</span>
                    <span className="text-lg font-bold text-orange-600">60-70%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Counter-Offer Rate</span>
                    <span className="text-lg font-bold text-yellow-600">40-50%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Passive Candidates</span>
                    <span className="text-lg font-bold text-orange-600">70%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recruitment Channel Effectiveness</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-24 bg-green-200 h-4 rounded-l-lg"></div>
                    <div className="w-8 bg-green-400 h-4"></div>
                    <div className="w-4 bg-green-600 h-4 rounded-r-lg"></div>
                    <span className="ml-4 text-sm font-medium text-gray-700">Employee Referrals (35%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 bg-blue-200 h-4 rounded-l-lg"></div>
                    <div className="w-4 bg-blue-400 h-4 rounded-r-lg"></div>
                    <span className="ml-4 text-sm font-medium text-gray-700">Technical Recruiters (25%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 bg-purple-200 h-4 rounded-l-lg"></div>
                    <div className="w-4 bg-purple-400 h-4 rounded-r-lg"></div>
                    <span className="ml-4 text-sm font-medium text-gray-700">LinkedIn/Networks (20%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 bg-orange-200 h-4 rounded-l-lg"></div>
                    <div className="w-4 bg-orange-400 h-4 rounded-r-lg"></div>
                    <span className="ml-4 text-sm font-medium text-gray-700">University Partnerships (15%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 bg-red-400 h-4 rounded-lg"></div>
                    <span className="ml-4 text-sm font-medium text-gray-700">Technical Communities (5%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Retention Challenges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Talent Retention Challenges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-4">Primary Attrition Drivers</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Compensation Gaps</span>
                      <span className="text-sm font-bold text-orange-600">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Limited Growth Opportunities</span>
                      <span className="text-sm font-bold text-orange-600">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Inadequate Resources/Tools</span>
                      <span className="text-sm font-bold text-yellow-600">15%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Poor Management</span>
                      <span className="text-sm font-bold text-orange-600">10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Work-Life Balance</span>
                      <span className="text-sm font-bold text-orange-600">5%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-4">Retention Strategies</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Clear progression from IC to technical leadership</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conference attendance, course reimbursement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>20% time for exploration and experimentation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Academic collaboration and publishing support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Annual equity refreshes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                FUTURE OUTLOOK
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                2025-2027 Market Projections
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-4">35%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall AI Job Growth</h3>
                <p className="text-sm text-gray-600">Annually through 2027</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-4">50%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Roles Growth</h3>
                <p className="text-sm text-gray-600">For emerging specializations</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-4">40%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geographic Expansion</h3>
                <p className="text-sm text-gray-600">Growth in tier-2 cities and remote</p>
              </div>
            </div>

            {/* Skill Evolution Timeline */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skill Evolution Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2025</div>
                    <h4 className="text-lg font-bold text-gray-900">Current Focus</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• LLM application development</li>
                    <li>• AI safety and alignment</li>
                    <li>• Multimodal AI systems</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2026</div>
                    <h4 className="text-lg font-bold text-gray-900">Emerging Areas</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Quantum-classical hybrid algorithms</li>
                    <li>• Neuromorphic computing</li>
                    <li>• Autonomous AI agents</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2027</div>
                    <h4 className="text-lg font-bold text-gray-900">Next Generation</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• AI-AI collaboration systems</li>
                    <li>• Synthetic data generation</li>
                    <li>• Federated learning at scale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <h3 className="text-xl font-bold text-orange-600 mb-6">For Organizations</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Invest in internal talent development and AI academies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop competitive compensation strategies with regular benchmarking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Create flexible work arrangements and strong technical brands</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Partner with academic institutions for early pipeline development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-xl font-bold text-green-600 mb-6">For Professionals</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Focus on end-to-end skills from research to production deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Develop business acumen and understand AI's ROI impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build strong networks through active AI community participation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain ethical awareness and responsible AI development practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get the Complete Report
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Access the full 2025 AI Talent & Salary Benchmark Report with detailed data, interactive charts, and actionable insights for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Download Full Report (PDF)
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Request Custom Analysis
              </button>
            </div>
            <p className="text-sm text-orange-100 mt-6">
              Report updated quarterly • Next update: December 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AITalentResearchHub;
