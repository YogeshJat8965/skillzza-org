import React from 'react';

const OurMethodology = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/methodology_banner_img.png)',
          minHeight: '60vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              SKILLZZA METHODOLOGY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Skillzza Learning Framework
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-4">
              Transforming Potential Through Science-Backed Learning
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
              At Skillzza, we believe that effective skill development requires more than traditional training approaches. Our methodology integrates cognitive science, industry insights, and adaptive technology to create learning experiences that deliver measurable, lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* LEARN Framework Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Skillzza LEARN Framework</h2>
          </div>

          {/* L - Learner-Centric Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="/engaing_learning.jpg" 
                alt="Learner-Centric Assessment" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
                </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-500 mb-4">L - Learner-Centric Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Every journey begins with understanding. Our AI-powered diagnostic assessments map individual learning styles, skill gaps, and career aspirations to create personalized development pathways. 

              </p>
              <p className="text-gray-700 leading-relaxed">
                We analyze cognitive patterns, industry requirements, and performance metrics to ensure every learner receives a tailored experience that maximizes their potential.
              </p>
            </div>
          </div>

          {/* E - Experiential Learning Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">E - Experiential Learning Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Knowledge becomes expertise through application. Our immersive learning modules combine theoretical foundations with hands-on practice, utilizing real-world scenarios and industry-standard tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From virtual simulations to project-based challenges, learners engage with content that mirrors actual workplace demands.
              </p>
              </div>
            <div className="relative">
              <img 
                src="/explore_project.jpg" 
                alt="Experiential Learning Design" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>

          {/* A - Adaptive Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="/AIDataEngineergooglecloud.png"
                alt="Adaptive Intelligence" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
                </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-600 mb-4">A - Adaptive Intelligence</h3>
              <p className="text-gray-700 leading-relaxed">
                Learning evolves as you do. Our platform continuously analyzes performance data, engagement patterns, and skill acquisition rates to dynamically adjust content difficulty, pacing, and focus areas. This ensures optimal challenge levels that promote growth without overwhelming learners.
              </p>
            </div>
          </div>

          {/* R - Role-Based Simulations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">R - Role-Based Simulations</h3>
              <p className="text-gray-700 leading-relaxed">
                Context drives competency. Our comprehensive simulation library recreates authentic workplace environments where learners can practice decision-making, problem-solving, and collaboration in risk-free settings. These scenarios are developed in partnership with industry experts to ensure relevance and accuracy.
              </p>
              </div>
            <div className="relative">
              <img 
                src="/insight_roles.jpg" 
                alt="Role-Based Simulations" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
            </div>
          </div>

          {/* N - Network Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="/Hackathons_header_img.png" 
                alt="Network Integration" 
                className="w-full h-80 object-cover rounded-lg shadow-lg" 
              />
                </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-600 mb-4">N - Network Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Learning is a social endeavor. Our methodology emphasizes peer collaboration, mentor guidance, and industry connections that extend learning beyond individual study. We facilitate meaningful interactions between learners, professionals, and organizations to create lasting professional networks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Methodological Principles */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Core Methodological Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competency-Based Progression */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Competency-Based Progression</h3>
              <p className="text-gray-700 leading-relaxed">
                Rather than time-based completion, learners advance based on demonstrated mastery. Our assessment framework validates practical application of skills, ensuring graduates can perform effectively in real-world scenarios.
              </p>
        </div>
            
            {/* Industry-Academic Convergence */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Industry-Academic Convergence</h3>
              <p className="text-gray-700 leading-relaxed">
                We bridge the gap between theoretical knowledge and practical application by integrating current industry practices with academic rigor. Our content is continuously updated through partnerships with leading organizations across multiple sectors.
              </p>
            </div>
            
            {/* Cognitive Load Optimization */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4">Cognitive Load Optimization</h3>
              <p className="text-gray-700 leading-relaxed">
                Our learning design principles are rooted in cognitive science, ensuring information is presented in digestible formats that promote retention and transfer. We utilize spaced repetition, interleaving, and progressive complexity to maximize learning efficiency.
            </p>
          </div>
          
            {/* Cultural and Contextual Relevance */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Cultural and Contextual Relevance</h3>
              <p className="text-gray-700 leading-relaxed">
                Recognizing that effective learning must resonate with learners' backgrounds and environments, our methodology incorporates local contexts, cultural considerations, and regional industry needs while maintaining global standards.
                  </p>
                </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold mb-6">
              OUR APPROACH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic five-phase approach ensures consistent, measurable results across all learning initiatives
            </p>
          </div>
          
          {/* Timeline connector for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-80 h-96">
            <div className="w-1 h-full bg-gradient-to-b from-orange-500 via-blue-500 via-green-500 via-purple-500 to-red-500 rounded-full opacity-30"></div>
          </div>
          
          <div className="space-y-12 lg:space-y-16">
            {/* Phase 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      1
                    </div>
                    <div>
                      <div className="text-sm text-orange-500 font-semibold mb-1">PHASE 1</div>
                      <h3 className="text-2xl font-bold text-gray-900">Discovery and Mapping</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Comprehensive skill gap analysis",
                      "Learning preference identification",
                      "Career trajectory planning",
                      "Baseline competency establishment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/skill_mapping_vertical.jpg" 
                    alt="Discovery and Mapping" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      2
                    </div>
                    <div>
                      <div className="text-sm text-blue-500 font-semibold mb-1">PHASE 2</div>
                      <h3 className="text-2xl font-bold text-gray-900">Personalized Learning Path Creation</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "AI-generated curriculum customization",
                      "Resource allocation and scheduling",
                      "Milestone and checkpoint definition",
                      "Success metrics establishment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/mirroing_img.png" 
                    alt="Personalized Learning Path Creation" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      3
                    </div>
                    <div>
                      <div className="text-sm text-green-500 font-semibold mb-1">PHASE 3</div>
                      <h3 className="text-2xl font-bold text-gray-900">Active Learning Engagement</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Interactive content delivery",
                      "Real-time performance monitoring",
                      "Adaptive difficulty adjustment",
                      "Peer and mentor integration"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/one-and-ond-mentoring-img.jpg"  
                    alt="Active Learning Engagement" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Phase 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      4
                    </div>
                    <div>
                      <div className="text-sm text-purple-500 font-semibold mb-1">PHASE 4</div>
                      <h3 className="text-2xl font-bold text-gray-900">Application and Validation</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Project-based assessments",
                      "Industry simulation participation",
                      "Competency certification",
                      "Portfolio development"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/RiskAssessmentStrategist_tile_img.png" 
                    alt="Application and Validation" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Phase 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      5
                    </div>
                    <div>
                      <div className="text-sm text-red-500 font-semibold mb-1">PHASE 5</div>
                      <h3 className="text-2xl font-bold text-gray-900">Continuous Growth and Adaptation</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Ongoing skill maintenance",
                      "Emerging technology integration",
                      "Career advancement planning",
                      "Lifelong learning pathway creation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/digital_bugiess_growthBlog_img.jpg" 
                    alt="Continuous Growth and Adaptation" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 px-8 rounded-2xl inline-block shadow-xl">
              <h3 className="text-xl font-bold mb-2">Ready to Begin Your Learning Journey?</h3>
              <p className="text-orange-100">Experience our comprehensive methodology in action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Outcomes */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Measurable Outcomes</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our methodology consistently delivers:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Outcome 1 */}
            <div className="text-center bg-gray-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-orange-500 mb-4">85%+</div>
              <p className="text-gray-300">skill acquisition rates across all programs</p>
            </div>
            
            {/* Outcome 2 */}
            <div className="text-center bg-gray-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-500 mb-4">90%+</div>
              <p className="text-gray-300">learner satisfaction with learning experience quality</p>
            </div>
            
            {/* Outcome 3 */}
            <div className="text-center bg-gray-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-green-500 mb-4">75%+</div>
              <p className="text-gray-300">career advancement within 12 months of program completion</p>
                  </div>
            
            {/* Outcome 4 */}
            <div className="text-center bg-gray-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-purple-500 mb-4">95%+</div>
              <p className="text-gray-300">employer satisfaction with graduate competencies</p>
                </div>
              </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-orange-500 text-white py-8 px-8 rounded-lg inline-block">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your academic and professional journey?</h3>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default OurMethodology;