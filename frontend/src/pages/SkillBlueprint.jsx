import React from 'react';

const SkillBlueprint = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/data_ai.jpg)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              INSIGHTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              AI & The Future of Work
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Exploring how technology is revolutionizing skill development and transforming the way organizations approach workforce transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1: AI-Powered Reskilling */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                CASE STUDY 1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI-Powered Reskilling Initiatives
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transforming Workforce Agility Through Intelligent Skill Gap Analysis
              </p>
            </div>

            {/* The Challenge */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-200 mb-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    In today's rapidly evolving business landscape, organizations face an unprecedented challenge: the skills their workforce possessed yesterday may not be sufficient for tomorrow's demands. Traditional approaches to identifying skill gaps often rely on annual reviews, manager assessments, and broad industry reports—methods that are slow, subjective, and frequently outdated by the time action is taken.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="/confused_person_banner.png" 
                    alt="Workforce Challenges" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg" 
                  />
                </div>
              </div>
            </div>

            {/* The AI Solution */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                The AI Solution: Precision-Driven Reskilling
              </h3>
              
              {/* Real-World Implementation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                  <div className="lg:w-2/3">
                    <h4 className="text-xl font-bold text-blue-600 mb-4">
                      Real-World Implementation: TechCorp Global's Digital Transformation
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      TechCorp Global, a multinational technology services company with 50,000 employees, faced a critical challenge when cloud computing and AI technologies began disrupting their traditional IT services model. Rather than resort to mass layoffs and external hiring, they implemented an AI-powered reskilling initiative that became an industry benchmark.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <img 
                      src="/corporate_model_img.jpg" 
                      alt="TechCorp Digital Transformation" 
                      className="w-full h-48 object-cover rounded-xl shadow-lg" 
                    />
                  </div>
                </div>

                {/* AI System Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="/AI_driven_customized_img.jpg" 
                        alt="Skills Intelligence Engine"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-3">Skills Intelligence Engine</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Analyzes job descriptions, project requirements, and industry trends</li>
                      <li>• Maps current employee skills through work history and certifications</li>
                      <li>• Identifies emerging skill demands through real-time market analysis</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="/datadriveninsights_ico.png" 
                        alt="Gap Detection Algorithm"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-3">Gap Detection Algorithm</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Compares individual skill profiles against future role requirements</li>
                      <li>• Prioritizes skill gaps based on business impact and urgency</li>
                      <li>• Segments employees into reskilling cohorts</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src="/engaing_learning.jpg" 
                        alt="Dynamic Learning System"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-3">Dynamic Learning System</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Suggests targeted training programs tailored to learning styles</li>
                      <li>• Adjusts recommendations based on progress</li>
                      <li>• Integrates multiple learning formats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results and Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h4 className="text-xl font-bold text-green-600 mb-6">Quantitative Outcomes</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-green-600">85%</div>
                      <div className="text-gray-700">of identified employees successfully transitioned to new roles within 18 months</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-green-600">$12.3M</div>
                      <div className="text-gray-700">saved in recruitment costs</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-green-600">40%</div>
                      <div className="text-gray-700">reduction in time-to-competency for new skills</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-green-600">78%</div>
                      <div className="text-gray-700">employee satisfaction rate with reskilling programs</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                  <h4 className="text-xl font-bold text-purple-600 mb-6">Qualitative Benefits</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced employee loyalty and engagement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Creation of a learning-oriented culture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Improved organizational agility and adaptability</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stronger employer brand in the competitive tech market</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Success Factors */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Success Factors</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Data-Driven Precision</h5>
                      <p className="text-gray-700 text-sm">AI eliminated guesswork, providing specific, actionable insights about skill requirements</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Personalization at Scale</h5>
                      <p className="text-gray-700 text-sm">Each employee received a customized reskilling pathway</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Continuous Adaptation</h5>
                      <p className="text-gray-700 text-sm">The system evolved with changing business needs and individual progress</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Leadership Commitment</h5>
                      <p className="text-gray-700 text-sm">C-suite support ensured adequate resources and organizational buy-in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Personalized Learning Paths */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                CASE STUDY 2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI in Personalized Learning Paths
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Creating Custom Learning Journeys for Individual Career Growth
              </p>
            </div>

            {/* Revolution in Personal Development */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Revolution in Personal Development</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Traditional one-size-fits-all training programs are giving way to hyper-personalized learning experiences powered by AI. These systems recognize that every learner has unique strengths, preferences, career goals, and learning patterns—and adapt accordingly.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="/personalizedpearningpaths_ico.png" 
                    alt="Personalized Learning Revolution" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg" 
                  />
                </div>
              </div>
            </div>

            {/* FinanceForward Case Study */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 mb-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                <div className="lg:w-2/3">
                  <h4 className="text-xl font-bold text-blue-600 mb-4">
                    Case Study: FinanceForward's Career Development Platform
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    FinanceForward, a leading financial services firm, revolutionized their employee development approach by implementing an AI-driven personalized learning platform that serves 25,000 employees across 40 countries.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src="/career_mentoring_img.jpg" 
                    alt="FinanceForward Career Development" 
                    className="w-full h-48 object-cover rounded-xl shadow-lg" 
                  />
                </div>
              </div>

              {/* The Personalization Engine */}
              <h5 className="text-lg font-bold text-gray-900 mb-6">The Personalization Engine:</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/potential_meter.png" 
                      alt="Individual Learning Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h6 className="text-lg font-bold text-gray-900 mb-3">Individual Learning Profile</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Analyzes learning history and preferences</li>
                    <li>• Assesses current skill levels through adaptive testing</li>
                    <li>• Maps career aspirations and growth trajectories</li>
                    <li>• Considers work schedule and time availability</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/industry_courses_img.png" 
                      alt="Dynamic Content Curation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h6 className="text-lg font-bold text-gray-900 mb-3">Dynamic Content Curation</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Selects from 10,000+ learning resources</li>
                    <li>• Adjusts content difficulty based on comprehension</li>
                    <li>• Incorporates various media types</li>
                    <li>• Prioritizes high-impact skills</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/career_readyness.jpg" 
                      alt="Adaptive Learning Pathways"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h6 className="text-lg font-bold text-gray-900 mb-3">Adaptive Learning Pathways</h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Creates unique learning sequences</li>
                    <li>• Adjusts pace based on progress</li>
                    <li>• Introduces reinforcement activities</li>
                    <li>• Suggests practical application opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Journey */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Journey</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h5 className="text-lg font-bold text-gray-900">Foundation Building</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 1-3</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Deployed AI assessment tools</li>
                    <li>• Integrated existing learning systems</li>
                    <li>• Trained managers on coaching</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h5 className="text-lg font-bold text-gray-900">Personalization Launch</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 4-8</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Rolled out personalized learning paths</li>
                    <li>• Refined algorithms based on feedback</li>
                    <li>• Established peer mentoring networks</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h5 className="text-lg font-bold text-gray-900">Scale & Optimization</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 9-12</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Extended to entire organization</li>
                    <li>• Integrated career planning tools</li>
                    <li>• Implemented predictive analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transformative Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h4 className="text-xl font-bold text-green-600 mb-6">Individual Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-green-600">92%</div>
                    <div className="text-gray-700">of employees reported higher engagement with learning content</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-green-600">67%</div>
                    <div className="text-gray-700">improvement in skill acquisition speed</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-green-600">58%</div>
                    <div className="text-gray-700">increase in internal mobility and promotions</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-green-600">89%</div>
                    <div className="text-gray-700">satisfaction rate with personalized career guidance</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                <h4 className="text-xl font-bold text-purple-600 mb-6">Organizational Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-purple-600">45%</div>
                    <div className="text-gray-700">reduction in external training costs</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-purple-600">35%</div>
                    <div className="text-gray-700">improvement in employee retention rates</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-purple-600">52%</div>
                    <div className="text-gray-700">increase in internal role fulfillment</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-purple-600">100%</div>
                    <div className="text-gray-700">enhanced succession planning accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Personalization Advantage */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">The Personalization Advantage</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Micro-Learning Adaptation</h5>
                    <p className="text-gray-700 text-sm">The AI system breaks down complex skills into micro-learning modules, allowing busy professionals to learn in 10-15 minute segments that fit their schedules.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Multi-Modal Learning Integration</h5>
                    <p className="text-gray-700 text-sm">Recognizing different learning styles, the AI seamlessly blends various formats for visual, kinesthetic, auditory, and reading-focused learners.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Real-Time Adjustment</h5>
                    <p className="text-gray-700 text-sm">The system continuously monitors engagement, comprehension, and application, making real-time adjustments to maintain optimal challenge levels.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Collaborative Intelligence Networks</h5>
                    <p className="text-gray-700 text-sm">AI facilitates peer-to-peer learning and knowledge sharing across the organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Landscape */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                FUTURE TRENDS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Future Landscape: What's Next?
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Emerging Trends in AI-Powered Workforce Development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/future_proofing_img.jpg" 
                    alt="Predictive Skill Forecasting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Predictive Skill Forecasting</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI systems predict skill demands 2-3 years in advance</li>
                  <li>• Proactive capability development before market pressures</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/future_workspace.jpg" 
                    alt="Immersive Learning Experiences"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Immersive Learning Experiences</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• VR/AR integration for hands-on skill practice</li>
                  <li>• AI-powered virtual mentors and coaching assistants</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/global_imgs.png" 
                    alt="Collaborative Intelligence Networks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Collaborative Intelligence Networks</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI facilitates peer-to-peer learning</li>
                  <li>• Cross-organizational skill development partnerships</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/essential_soft_ico.png" 
                    alt="Emotional Intelligence Integration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Emotional Intelligence Integration</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI considers emotional and social skills</li>
                  <li>• Develops well-rounded professionals for human-AI collaboration</li>
                </ul>
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Roadmap for Organizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h5 className="text-lg font-bold text-gray-900">Assessment & Strategy</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 1-2</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Evaluate current learning infrastructure</li>
                    <li>• Define strategic learning objectives</li>
                    <li>• Select appropriate AI platforms</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h5 className="text-lg font-bold text-gray-900">Pilot & Refinement</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 3-6</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Launch with select employee groups</li>
                    <li>• Gather feedback and metrics</li>
                    <li>• Refine algorithms and content</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h5 className="text-lg font-bold text-gray-900">Scale & Integration</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Months 7-12</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Roll out platform organization-wide</li>
                    <li>• Integrate with existing HR systems</li>
                    <li>• Establish continuous improvement</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                    <h5 className="text-lg font-bold text-gray-900">Advanced Optimization</h5>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Year 2+</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Implement predictive capabilities</li>
                    <li>• Explore cross-organizational partnerships</li>
                    <li>• Develop proprietary content</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways for Skillzza */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Takeaways for Skillzza</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Strategic insights for implementing AI-powered workforce development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/data_ai.jpg" 
                    alt="AI Enables Precision at Scale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">AI Enables Precision at Scale</h4>
                <p className="text-gray-300">Organizations can identify exact skill gaps and create targeted interventions for thousands of employees simultaneously.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/personalizedpearningpaths_ico.png" 
                    alt="Personalization Drives Engagement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Personalization Drives Engagement</h4>
                <p className="text-gray-300">When learning paths align with individual goals and learning styles, completion rates and skill acquisition improve dramatically.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/flexible_acesible_ico.png" 
                    alt="Continuous Adaptation is Crucial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Continuous Adaptation is Crucial</h4>
                <p className="text-gray-300">The most successful AI learning systems evolve constantly, adjusting to changing business needs and individual progress.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/datadriveninsights_ico.png" 
                    alt="Data Quality Determines Success"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Data Quality Determines Success</h4>
                <p className="text-gray-300">Rich, accurate data about skills, performance, and learning preferences is essential for effective AI recommendations.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/global_imgs.png" 
                    alt="Human-AI Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Human-AI Collaboration</h4>
                <p className="text-gray-300">The most effective systems combine AI intelligence with human coaching and mentorship.</p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/proven_impact.gif" 
                    alt="ROI Extends Beyond Cost Savings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">ROI Extends Beyond Cost Savings</h4>
                <p className="text-gray-300">While financial benefits are significant, the long-term value lies in organizational agility and employee satisfaction.</p>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Strategic Conclusion</h3>
                <p className="text-lg text-orange-100">
                  This case study demonstrates how forward-thinking organizations are using AI not just as a technological upgrade, but as a strategic advantage in developing their most valuable asset—their people.
                </p>
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
              Ready to Transform Your Workforce with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how Skillzza's AI-powered platform can revolutionize your organization's approach to skill development and workforce transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillBlueprint;
