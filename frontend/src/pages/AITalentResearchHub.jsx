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

            {/* Overall Market Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Overall Market Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The AI talent market in 2025 exhibits significant stratification across experience levels, specializations, and geographic regions. The compensation structure reflects both the scarcity of qualified professionals and the transformative business impact of AI capabilities.
              </p>
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

            {/* Regional Compensation Analysis */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Regional Compensation Analysis</h3>
            </div>

            {/* Regional Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* North America - USA */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">NA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">North America</h3>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <h4 className="font-semibold text-orange-600 mb-3">United States - Premium Markets:</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Silicon Valley</h4>
                    <p className="text-sm text-gray-700">Highest compensation globally, 15-25% above national averages</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Seattle</h4>
                    <p className="text-sm text-gray-700">Strong tech ecosystem, 10-20% premium</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">New York</h4>
                    <p className="text-sm text-gray-700">Finance-driven AI roles, 12-18% premium</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Austin/Denver</h4>
                    <p className="text-sm text-gray-700">Emerging hubs, competitive with 5-10% discount to coast</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg mt-4">
                    <p className="text-xs text-orange-800 font-medium">Median base salary for technical staff at top AI startups: <strong>$310,000</strong></p>
                  </div>
                </div>
              </div>

              {/* North America - Canada */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">CA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Canada</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Toronto</h4>
                    <p className="text-sm text-gray-700 mb-2">20-30% below US equivalents but strong in research roles</p>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-blue-700">Research Hub Excellence</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Vancouver</h4>
                    <p className="text-sm text-gray-700 mb-2">25-35% below US, growing AI ecosystem</p>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">Emerging Tech Scene</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Montreal</h4>
                    <p className="text-sm text-gray-700 mb-2">30-40% below US, significant research concentration</p>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="text-xs text-purple-700">AI Research Leader</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Europe - UK */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">UK</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">United Kingdom</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">London</h4>
                    <p className="text-sm text-gray-700 mb-2">€80,000 - €200,000 for senior roles</p>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs text-blue-700">Strong fintech AI demand driving premiums</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Market Insights:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Leading European fintech hub</li>
                      <li>• Strong AI ethics regulation</li>
                      <li>• Competitive compensation packages</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Europe - Germany */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">DE</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Germany</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Berlin/Munich</h4>
                    <p className="text-sm text-gray-700 mb-2">€70,000 - €180,000 for senior positions</p>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">Industrial AI applications driving demand</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Specializations:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Automotive AI systems</li>
                      <li>• Manufacturing automation</li>
                      <li>• Industry 4.0 solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Europe - Netherlands */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">NL</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Netherlands</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Amsterdam</h4>
                    <p className="text-sm text-gray-700 mb-2">€75,000 - €190,000</p>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="text-xs text-purple-700">Strong in AI ethics and responsible AI roles</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Strengths:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• AI governance & ethics focus</li>
                      <li>• Strong startup ecosystem</li>
                      <li>• International talent hub</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Asia-Pacific - China */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">CN</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">China</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Beijing/Shanghai</h4>
                    <p className="text-sm text-gray-700 mb-2">$80,000 - $300,000</p>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-xs text-red-700">Rapid domestic AI industry growth</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Market Dynamics:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Massive government investment</li>
                      <li>• World-class research institutions</li>
                      <li>• Growing competitive landscape</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Asia-Pacific - Singapore */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">SG</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Singapore</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Regional Hub</h4>
                    <p className="text-sm text-gray-700 mb-2">$90,000 - $250,000</p>
                    <div className="bg-pink-50 p-2 rounded">
                      <p className="text-xs text-pink-700">Strong in financial AI applications</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Advantages:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• APAC regional headquarters</li>
                      <li>• Strong fintech sector</li>
                      <li>• Government-backed AI initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Asia-Pacific - India */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">IN</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">India</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-1">Bangalore/Hyderabad</h4>
                    <p className="text-sm text-gray-700 mb-2">$25,000 - $120,000</p>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-xs text-green-700">Massive talent pool with cost advantages</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Largest tech talent pool globally</li>
                      <li>• Cost-effective solutions</li>
                      <li>• Strong educational infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Role Compensation */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialty Role Compensation</h3>
              <p className="text-gray-600 mb-8">Emerging High-Value Specializations</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Prompt Engineering</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Mid-level:</span>
                      <span className="text-sm font-semibold text-yellow-600">$130K-$150K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Senior Lead:</span>
                      <span className="text-sm font-semibold text-yellow-600">$200K-$250K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Top AI Labs:</span>
                      <span className="text-sm font-semibold text-orange-600">$300K+</span>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg mt-4">
                      <p className="text-xs text-orange-800">Top labs like Anthropic & OpenAI offer &gt;$300K for expertise</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">AI Safety & Ethics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$110K-$140K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$180K-$280K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Principal:</span>
                      <span className="text-sm font-semibold text-orange-600">$300K-$500K</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg mt-4">
                      <p className="text-xs text-purple-800">Growing demand for responsible AI governance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">MLOps Engineers</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$120K-$150K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$190K-$320K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Staff:</span>
                      <span className="text-sm font-semibold text-orange-600">$320K-$500K</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg mt-4">
                      <p className="text-xs text-blue-800">Critical for AI infrastructure & deployment</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Computer Vision Specialists</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$130K-$160K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$200K-$350K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Principal:</span>
                      <span className="text-sm font-semibold text-orange-600">$350K-$600K</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg mt-4">
                      <p className="text-xs text-green-800">High demand in autonomous systems & robotics</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-lg font-bold text-orange-600 mb-4">Natural Language Processing (NLP)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Entry:</span>
                      <span className="text-sm font-semibold text-yellow-600">$125K-$155K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Senior:</span>
                      <span className="text-sm font-semibold text-yellow-600">$195K-$340K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Principal:</span>
                      <span className="text-sm font-semibold text-orange-600">$340K-$580K</span>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg mt-4">
                      <p className="text-xs text-indigo-800">Core to LLMs & conversational AI systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Compensation Trends */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-600 mb-6">
                INDUSTRY INSIGHTS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Industry-Specific Compensation Trends
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technology Companies */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-6">Technology Companies</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Big Tech (FAANG+ Microsoft, NVIDIA):</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Base salaries: 20-40% above market</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Equity compensation: 30-60% of total package</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Finance firms like Jane Street: ~$325,000 for new-grad engineers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">AI-First Startups:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>High equity upside potential</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Base salaries competitive with Big Tech</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>Higher risk/reward profile</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Financial Services */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Financial Services</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Premium compensation due to regulatory requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Strong demand for explainable AI specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Risk management AI roles commanding premiums</span>
                  </li>
                </ul>
              </div>

              {/* Healthcare & Life Sciences */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Healthcare & Life Sciences</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Specialized domain knowledge required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Regulatory compliance adds complexity and value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Growing demand for AI in drug discovery and diagnostics</span>
                  </li>
                </ul>
              </div>

              {/* Autonomous Vehicles */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Autonomous Vehicles</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Specialized perception and planning algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Safety-critical applications driving premium compensation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Geographic concentration in specific hubs</span>
                  </li>
                </ul>
              </div>

              {/* Consulting & Professional Services */}
              <div className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2">
                <h4 className="text-xl font-bold text-orange-600 mb-4">Consulting & Professional Services</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-sm text-gray-700">Client-facing AI implementation roles</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-sm text-gray-700">Business acumen combined with technical skills</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-sm text-gray-700">Project-based compensation models</span>
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

            {/* Core Technical Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Technical Skills</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Programming Languages (Ranked by Demand)</h4>
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
                    <p className="text-xs text-yellow-700 mt-1">Essential frameworks: TensorFlow, PyTorch, scikit-learn</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">R</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Statistical computing and data analysis</p>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Salary Premium: 10-20%</p>
                    <p className="text-xs text-blue-700 mt-1">Strong in biotech and finance sectors</p>
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
                    <p className="text-xs text-green-700 mt-1">Advanced SQL commands: 20-30% salary boost</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">JS</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">JavaScript/TypeScript</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">AI web applications</p>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-purple-800">Growing importance</p>
                    <p className="text-xs text-purple-700 mt-1">Full-stack AI engineers in high demand</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">J</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Java</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">Enterprise AI systems</p>
                  <div className="bg-red-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-red-800">Legacy integration</p>
                    <p className="text-xs text-red-700 mt-1">Particularly valuable in large corporations</p>
                  </div>
                </div>
              </div>

              {/* ML Frameworks */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Machine Learning & AI Frameworks</h4>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="bg-orange-500 text-white rounded-lg p-3 mb-2">
                        <p className="font-bold text-sm">PyTorch</p>
                      </div>
                      <p className="text-xs text-gray-600">Research & production</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-500 text-white rounded-lg p-3 mb-2">
                        <p className="font-bold text-sm">TensorFlow</p>
                      </div>
                      <p className="text-xs text-gray-600">Large-scale ML</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-lg p-3 mb-2">
                        <p className="font-bold text-sm">Hugging Face</p>
                      </div>
                      <p className="text-xs text-gray-600">NLP applications</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-500 text-white rounded-lg p-3 mb-2">
                        <p className="font-bold text-sm">LangChain</p>
                      </div>
                      <p className="text-xs text-gray-600">LLM development</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-500 text-white rounded-lg p-3 mb-2">
                        <p className="font-bold text-sm">OpenAI API</p>
                      </div>
                      <p className="text-xs text-gray-600">Generative AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Hot Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emerging Hot Skills</h3>
              <p className="text-gray-600 mb-8">The top emerging skills of 2025 are prompt engineering, AI risk management, consultative selling, virtual collaboration, and green skills in sustainability management</p>
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

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Multimodal AI</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Market Demand:</span>
                      <span className="text-sm text-orange-600 font-bold">Rapidly Growing</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Salary Impact:</span>
                      <span className="text-sm text-orange-600 font-bold">20-35% Premium</span>
                    </div>
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Competencies:</h5>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Vision-language models</li>
                        <li>• Audio processing</li>
                        <li>• Cross-modal learning</li>
                        <li>• Unified model architectures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Domain-Specific Expertise */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Domain-Specific Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Healthcare AI</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Medical imaging analysis</li>
                    <li>• Clinical decision support systems</li>
                    <li>• Drug discovery algorithms</li>
                    <li>• Regulatory knowledge (FDA, EMA)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">$</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Financial AI</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Algorithmic trading</li>
                    <li>• Risk assessment models</li>
                    <li>• Fraud detection systems</li>
                    <li>• Regulatory compliance (SOX, Basel III)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">🤖</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Autonomous Systems</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Computer vision for robotics</li>
                    <li>• Sensor fusion techniques</li>
                    <li>• Real-time decision making</li>
                    <li>• Safety-critical system design</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Additional Domains</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Energy optimization</li>
                    <li>• Climate modeling</li>
                    <li>• Manufacturing automation</li>
                    <li>• Smart city infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Trends & Talent Acquisition Strategies */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-600 mb-6">
                TALENT ACQUISITION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Recruitment Trends & Talent Acquisition Strategies
              </h2>
            </div>

            {/* Current Market Dynamics */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Market Dynamics</h3>
              
              {/* Talent Scarcity Indicators */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Talent Scarcity Indicators</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Time to Fill</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">4-6 months</div>
                    <div className="text-xs text-gray-500">Average for senior AI roles</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Offer Acceptance Rate</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">60-70%</div>
                    <div className="text-xs text-gray-500">For competitive packages</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Counter-Offer Rate</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">40-50%</div>
                    <div className="text-xs text-gray-500">Of candidates receive counter-offers</div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Passive Candidate Engagement</div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">70%</div>
                    <div className="text-xs text-gray-500">Top talent not actively seeking</div>
                  </div>
                </div>
              </div>

              {/* Recruitment Channel Effectiveness */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Recruitment Channel Effectiveness</h4>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Employee Referrals</span>
                        <span className="text-sm font-bold text-green-600">35% • Highest retention</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Technical Recruiters</span>
                        <span className="text-sm font-bold text-blue-600">25% • Fastest time-to-fill</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">LinkedIn/Professional Networks</span>
                        <span className="text-sm font-bold text-purple-600">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-4 rounded-full" style={{width: '20%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">University Partnerships</span>
                        <span className="text-sm font-bold text-yellow-600">15% • Entry-level focus</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-full" style={{width: '15%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Technical Communities/GitHub</span>
                        <span className="text-sm font-bold text-orange-600">5% • High quality</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-4 rounded-full" style={{width: '5%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Effective Hiring Strategies */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Effective Hiring Strategies</h3>
              
              {/* Technical Assessment Evolution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">Traditional Approaches</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Algorithm and data structure problems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Take-home coding assignments</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">System design interviews</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-200">
                  <h4 className="text-xl font-semibold text-purple-800 mb-6">AI-Specific Assessment Trends</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Model architecture discussions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Real dataset analysis challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Ethics and bias scenario evaluation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Production deployment case studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compensation Strategy Best Practices */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 mb-12">
                <h4 className="text-xl font-semibold text-green-800 mb-6">Compensation Strategy Best Practices</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-green-700 mb-3">Market-Rate Benchmarking</h5>
                    <p className="text-sm text-gray-600">Quarterly salary surveys</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-green-700 mb-3">Total Compensation Focus</h5>
                    <p className="text-sm text-gray-600">Base + equity + benefits</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-green-700 mb-3">Signing Bonuses</h5>
                    <p className="text-sm text-gray-600">15-25% of annual salary for competitive offers</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-green-700 mb-3">Equity Optimization</h5>
                    <p className="text-sm text-gray-600">Liquid equity alternatives gaining popularity</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl md:col-span-2">
                    <h5 className="text-sm font-bold text-green-700 mb-3">Learning & Development</h5>
                    <p className="text-sm text-gray-600">$5K-$15K annual learning budgets</p>
                  </div>
                </div>
              </div>

              {/* Remote Work Impact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Remote Work Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-sm text-gray-700">Fully Remote Roles</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
                    <div className="text-sm text-gray-700">Hybrid Arrangements</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-xl">
                    <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
                    <div className="text-sm text-gray-700">On-Site Required</div>
                    <div className="text-xs text-gray-500 mt-1">(Hardware/security sensitive)</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                  <h5 className="text-sm font-bold text-orange-700 mb-2">Geographic Arbitrage Strategies</h5>
                  <p className="text-sm text-gray-700">Geographic arbitrage can reduce AI talent costs by <strong>20-90%</strong> when hiring from emerging markets while maintaining quality standards</p>
                </div>
              </div>
            </div>

            {/* Talent Retention Challenges */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Talent Retention Challenges</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-xl font-semibold text-red-600 mb-6">Primary Attrition Drivers</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Compensation Gaps</span>
                      <span className="text-lg font-bold text-red-600">45%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Limited Growth Opportunities</span>
                      <span className="text-lg font-bold text-orange-600">25%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Inadequate Resources/Tools</span>
                      <span className="text-lg font-bold text-yellow-600">15%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Poor Management</span>
                      <span className="text-lg font-bold text-purple-600">10%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Work-Life Balance</span>
                      <span className="text-lg font-bold text-blue-600">5%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h4 className="text-xl font-semibold text-green-700 mb-6">Retention Strategies</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Career Pathing</div>
                        <div className="text-sm text-gray-600">Clear progression from IC to technical leadership</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Continuous Learning</div>
                        <div className="text-sm text-gray-600">Conference attendance, course reimbursement</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Research Time</div>
                        <div className="text-sm text-gray-600">20% time for exploration and experimentation</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Publication Support</div>
                        <div className="text-sm text-gray-600">Academic collaboration and publishing</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Competitive Refresh Grants</div>
                        <div className="text-sm text-gray-600">Annual equity refreshes</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Gap Analysis & Training Needs */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-6">
                SKILLS GAP ANALYSIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Skills Gap Analysis & Training Needs
              </h2>
            </div>

            {/* Critical Skill Shortages */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Critical Skill Shortages</h3>
              
              {/* Technical Skills Gap */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills Gap</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-gray-900">Production MLOps</h5>
                      <div className="text-2xl font-bold text-red-600">65%</div>
                    </div>
                    <p className="text-sm text-gray-600">Organizations report shortages</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-gray-900">AI Safety & Ethics</h5>
                      <div className="text-2xl font-bold text-orange-600">58%</div>
                    </div>
                    <p className="text-sm text-gray-600">Shortage in qualified professionals</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-gray-900">LLM Fine-tuning</h5>
                      <div className="text-2xl font-bold text-yellow-600">52%</div>
                    </div>
                    <p className="text-sm text-gray-600">Gap in specialized expertise</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-gray-900">Multimodal AI</h5>
                      <div className="text-2xl font-bold text-purple-600">48%</div>
                    </div>
                    <p className="text-sm text-gray-600">Shortage in cross-modal specialists</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-gray-900">AI Product Management</h5>
                      <div className="text-2xl font-bold text-blue-600">45%</div>
                    </div>
                    <p className="text-sm text-gray-600">Gap in business-technical hybrid roles</p>
                  </div>
                </div>
              </div>

              {/* Soft Skills in High Demand */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
                <h4 className="text-xl font-semibold text-indigo-800 mb-6">Soft Skills in High Demand</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-indigo-700 mb-2">Technical Communication</h5>
                    <p className="text-sm text-gray-600">Explaining AI to non-technical stakeholders</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-indigo-700 mb-2">Cross-functional Collaboration</h5>
                    <p className="text-sm text-gray-600">Working with product, design, business</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-indigo-700 mb-2">Ethical Decision Making</h5>
                    <p className="text-sm text-gray-600">Navigating AI bias and fairness issues</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h5 className="text-sm font-bold text-indigo-700 mb-2">Change Management</h5>
                    <p className="text-sm text-gray-600">Leading AI transformation initiatives</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl md:col-span-2">
                    <h5 className="text-sm font-bold text-indigo-700 mb-2">Strategic Thinking</h5>
                    <p className="text-sm text-gray-600">Aligning AI initiatives with business objectives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upskilling Pathways */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Upskilling Pathways</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-6">For Current Employees</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-xl">→</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900">Data Scientists</h5>
                      <p className="text-sm text-gray-600">→ AI Engineers</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Additional training in production systems</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Software engineering best practices</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Cloud platform expertise</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Timeline: 6-12 months</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-xl">→</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900">Software Engineers</h5>
                      <p className="text-sm text-gray-600">→ AI Engineers</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Machine learning fundamentals</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Statistical analysis</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Domain-specific AI applications</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Timeline: 8-15 months</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-xl">→</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900">Domain Experts</h5>
                      <p className="text-sm text-gray-600">→ AI Specialists</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Programming fundamentals</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">ML algorithm understanding</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">Data analysis techniques</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-purple-800">Timeline: 12-24 months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training ROI Analysis */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-8">Training ROI Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Internal Upskilling Cost</h4>
                    <div className="text-2xl font-bold text-green-600">$15K-$30K</div>
                  </div>
                  <p className="text-sm text-gray-600">Per employee</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">External Hiring Premium</h4>
                    <div className="text-2xl font-bold text-red-600">40-60%</div>
                  </div>
                  <p className="text-sm text-gray-600">Above current market rates</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Time to Productivity</h4>
                    <div className="text-lg font-bold text-gray-900">3-6 vs 6-12 months</div>
                  </div>
                  <p className="text-sm text-gray-600">Upskilled vs external hires</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Retention Impact</h4>
                    <div className="text-lg font-bold text-gray-900">85% vs 70%</div>
                  </div>
                  <p className="text-sm text-gray-600">Internally trained vs external</p>
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
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategic Recommendations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                  <h4 className="text-xl font-bold text-orange-600 mb-6">For Organizations</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Invest in Internal Talent Development</div>
                        <div className="text-sm text-gray-600">Build AI academies and learning paths</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Develop Competitive Compensation Strategies</div>
                        <div className="text-sm text-gray-600">Regular benchmarking and adjustment</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Create Flexible Work Arrangements</div>
                        <div className="text-sm text-gray-600">Remote-first or hybrid models</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Build Strong Technical Brands</div>
                        <div className="text-sm text-gray-600">Open source contributions, research publications</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Partner with Academic Institutions</div>
                        <div className="text-sm text-gray-600">Early pipeline development</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h4 className="text-xl font-bold text-green-600 mb-6">For Professionals</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Focus on End-to-End Skills</div>
                        <div className="text-sm text-gray-600">From research to production deployment</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Develop Business Acumen</div>
                        <div className="text-sm text-gray-600">Understand AI's business impact and ROI</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Build Strong Networks</div>
                        <div className="text-sm text-gray-600">Active participation in AI communities</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Continuous Learning</div>
                        <div className="text-sm text-gray-600">Stay current with rapidly evolving technologies</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Ethical Awareness</div>
                        <div className="text-sm text-gray-600">Understand responsible AI development practices</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                  <h4 className="text-xl font-bold text-blue-600 mb-6">For Educational Institutions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Industry-Aligned Curricula</div>
                        <div className="text-sm text-gray-600">Real-world project experiences</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Corporate Partnerships</div>
                        <div className="text-sm text-gray-600">Internship and mentorship programs</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Practical Skills Focus</div>
                        <div className="text-sm text-gray-600">Production systems, not just theory</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Cross-Disciplinary Programs</div>
                        <div className="text-sm text-gray-600">AI + domain expertise combinations</div>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Continuous Curriculum Updates</div>
                        <div className="text-sm text-gray-600">Quarterly reviews and adjustments</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Data Sources */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-6">
                METHODOLOGY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Methodology & Data Sources
              </h2>
            </div>

            {/* Research Approach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Approach</h3>
              <p className="text-gray-700 mb-6">This report synthesizes data from multiple authoritative sources including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Compensation survey data from Pave, Nua Group, and other HR analytics firms</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">H1B salary database analysis for visa-sponsored positions</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Startup equity data from Carta and similar platforms</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Job posting analysis from major career platforms</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Industry interviews and expert consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Validation */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Validation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Cross-referencing</h4>
                  </div>
                  <p className="text-sm text-gray-700">Multiple data sources for consistency</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Segmentation</h4>
                  </div>
                  <p className="text-sm text-gray-700">Geographic and industry analysis</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Statistical Confidence</h4>
                  </div>
                  <p className="text-sm text-gray-700">Confidence intervals for salary ranges</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Regular Updates</h4>
                  </div>
                  <p className="text-sm text-gray-700">Reflect market changes</p>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Limitations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">Rapid market evolution may affect accuracy over time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">Self-reported salary data may contain biases</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">Equity valuations subject to market volatility</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">Regional variations may not capture all local factors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-6">
                CONCLUSION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Conclusion
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The AI talent market in 2025 represents both unprecedented opportunity and significant challenges. Organizations that successfully navigate talent acquisition, development, and retention will gain substantial competitive advantages. For professionals, the market offers exceptional financial rewards for those who develop the right combination of technical skills, business acumen, and ethical awareness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The key to success lies in understanding that AI talent management is not just about compensation—it's about creating environments where exceptional professionals can do their best work while contributing to responsible AI development that benefits society as a whole.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we move forward, the organizations and individuals who invest in continuous learning, ethical AI development, and human-centered approaches will define the future of this transformative technology landscape.
              </p>
            </div>

            <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of the AI Talent Market</h3>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to our quarterly updates and be the first to know about emerging trends, salary benchmarks, and industry insights.
              </p>
              <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe to Updates
              </button>
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
