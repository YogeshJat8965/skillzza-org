import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const ByteMinds = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-600 to-indigo-700"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/data_ai.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold text-white mb-6">
              BYTEMINDS SCHOOL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              ByteMinds
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-cyan-300">
              The School of AI & Quantum Intelligence
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Dive deep into the future of artificial intelligence and quantum computing. Our comprehensive programs prepare you for the next generation of technological innovation, from foundational AI concepts to cutting-edge quantum algorithms.
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
                Core Programs & Tracks
              </h2>
              <p className="text-xl text-gray-600">Master the technologies that will define the future</p>
            </div>

            <div className="space-y-12">
              {/* AI Mastery Tracks */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🤖</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">AI Mastery Tracks</h3>
                        <p className="text-lg text-blue-600">From Foundations to Advanced AI, ML, and Generative AI</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Foundation Track:</strong> Python, Statistics, Linear Algebra, and AI Fundamentals</li>
                      <li>• <strong>Machine Learning:</strong> Supervised, Unsupervised, and Reinforcement Learning</li>
                      <li>• <strong>Deep Learning:</strong> Neural Networks, CNNs, RNNs, and Transformers</li>
                      <li>• <strong>Generative AI:</strong> GPT, DALL-E, Stable Diffusion, and Custom Models</li>
                      <li>• <strong>MLOps:</strong> Model Deployment, Monitoring, and Production Systems</li>
                    </ul>
                    <div className="bg-blue-100 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 12-18 months | <strong>Format:</strong> Hybrid Learning | <strong>Certification:</strong> Industry-Recognized
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/AI_driven_customized_img.jpg')} 
                      alt="AI Mastery Tracks" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Quantum Computing Pods */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">⚛️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Quantum Computing Pods</h3>
                        <p className="text-lg text-purple-600">Hands-on Labs to Explore Quantum Algorithms & Applications</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Quantum Fundamentals:</strong> Qubits, Superposition, and Entanglement</li>
                      <li>• <strong>Quantum Algorithms:</strong> Shor's, Grover's, and Variational Algorithms</li>
                      <li>• <strong>Quantum Programming:</strong> Qiskit, Cirq, and Q# Development</li>
                      <li>• <strong>Quantum Applications:</strong> Cryptography, Optimization, and Simulation</li>
                      <li>• <strong>Hardware Access:</strong> IBM Quantum, Google Quantum AI, and IonQ</li>
                    </ul>
                    <div className="bg-purple-100 p-4 rounded-xl border border-purple-200">
                      <p className="text-sm text-gray-700">
                        <strong>Duration:</strong> 6-12 months | <strong>Format:</strong> Lab-Intensive | <strong>Access:</strong> Real Quantum Hardware
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/future_proofing_img.jpg')} 
                      alt="Quantum Computing Labs" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* AI Playground */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎮</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">AI Playground</h3>
                        <p className="text-lg text-green-600">Real-world Projects, Simulations, and Role-based Internships</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>Industry Projects:</strong> Real client challenges from Fortune 500 companies</li>
                      <li>• <strong>AI Simulations:</strong> Virtual environments for testing and experimentation</li>
                      <li>• <strong>Hackathons:</strong> Monthly competitions with industry themes</li>
                      <li>• <strong>Research Labs:</strong> Collaborate on cutting-edge AI research</li>
                      <li>• <strong>Startup Incubation:</strong> Launch your own AI-powered venture</li>
                    </ul>
                    <div className="bg-green-100 p-4 rounded-xl border border-green-200">
                      <p className="text-sm text-gray-700">
                        <strong>Format:</strong> Project-Based | <strong>Mentorship:</strong> 1:1 Industry Experts | <strong>Outcome:</strong> Portfolio & Network
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/engaing_learning.jpg')} 
                      alt="AI Playground Projects" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Ethical AI Hub */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 lg:p-12 border border-orange-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">⚖️</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Ethical AI Hub</h3>
                        <p className="text-lg text-orange-600">Building Responsible AI Aligned with Global Governance Frameworks</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>AI Ethics:</strong> Bias, Fairness, Transparency, and Accountability</li>
                      <li>• <strong>Regulatory Compliance:</strong> GDPR, AI Act, and Global Standards</li>
                      <li>• <strong>Responsible Development:</strong> Ethical Design Principles and Practices</li>
                      <li>• <strong>Impact Assessment:</strong> Social, Economic, and Environmental Effects</li>
                      <li>• <strong>Policy Dialogue:</strong> Engage with policymakers and thought leaders</li>
                    </ul>
                    <div className="bg-orange-100 p-4 rounded-xl border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Focus:</strong> Ethics & Governance | <strong>Partnerships:</strong> UN, IEEE, Partnership on AI | <strong>Certification:</strong> Ethical AI Practitioner
                      </p>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <img 
                      src={getAssetPath('/essential_soft_ico.png')} 
                      alt="Ethical AI Hub" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Future Tech Mentorship */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-indigo-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <span className="text-white text-2xl">🎓</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Future Tech Mentorship</h3>
                        <p className="text-lg text-indigo-600">Guidance from AI Scientists, Quantum Experts & Industry Leaders</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li>• <strong>AI Pioneers:</strong> Learn from creators of breakthrough AI technologies</li>
                      <li>• <strong>Quantum Scientists:</strong> Direct access to quantum computing researchers</li>
                      <li>• <strong>Industry Leaders:</strong> CTOs and AI heads from leading tech companies</li>
                      <li>• <strong>Academic Experts:</strong> Professors from MIT, Stanford, and Oxford</li>
                      <li>• <strong>Entrepreneur Network:</strong> Successful AI startup founders and investors</li>
                    </ul>
                    <div className="bg-indigo-100 p-4 rounded-xl border border-indigo-200">
                      <p className="text-sm text-gray-700">
                        <strong>Mentorship:</strong> 1:1 & Group Sessions | <strong>Network:</strong> 500+ Global Experts | <strong>Access:</strong> Lifetime Alumni Network
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={getAssetPath('/career_mentoring_img.jpg')} 
                      alt="Future Tech Mentorship" 
                      className="w-full rounded-2xl shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choose Your Learning Pathway
              </h2>
              <p className="text-xl text-gray-600">Tailored tracks for different career goals and experience levels</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Beginner Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation Explorer</h3>
                  <p className="text-gray-600">Perfect for beginners with no prior AI experience</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Python Programming Fundamentals</li>
                  <li>• Mathematics for AI</li>
                  <li>• Introduction to Machine Learning</li>
                  <li>• Basic Neural Networks</li>
                  <li>• Ethics in AI</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">6 Months</span>
                  <p className="text-sm text-gray-500">Part-time | Weekend Classes</p>
                </div>
              </div>

              {/* Intermediate Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Specialist</h3>
                  <p className="text-gray-600">For developers and tech professionals</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Advanced Machine Learning</li>
                  <li>• Deep Learning & Transformers</li>
                  <li>• Computer Vision & NLP</li>
                  <li>• MLOps & Production Systems</li>
                  <li>• Quantum Computing Basics</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">12 Months</span>
                  <p className="text-sm text-gray-500">Full-time | Hybrid Learning</p>
                </div>
              </div>

              {/* Advanced Track */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quantum Pioneer</h3>
                  <p className="text-gray-600">For advanced practitioners and researchers</p>
                </div>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Advanced Quantum Algorithms</li>
                  <li>• Quantum Machine Learning</li>
                  <li>• Research Methodology</li>
                  <li>• Industry Collaboration</li>
                  <li>• Thesis/Capstone Project</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">18 Months</span>
                  <p className="text-sm text-gray-500">Research-focused | Thesis Required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Mentors */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Learn from the Best
              </h2>
              <p className="text-xl text-gray-600">World-class faculty and industry mentors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👨‍🔬</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Dr. AI Research</h4>
                <p className="text-gray-600 mb-2">Former Google AI, MIT Professor</p>
                <p className="text-sm text-gray-500">Specializes in Deep Learning & Neural Architecture Search</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👩‍💻</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Prof. Quantum Expert</h4>
                <p className="text-gray-600 mb-2">IBM Quantum, Stanford University</p>
                <p className="text-sm text-gray-500">Pioneer in Quantum Machine Learning Algorithms</p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👨‍💼</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">CTO Industry Leader</h4>
                <p className="text-gray-600 mb-2">OpenAI, Former Tesla AI</p>
                <p className="text-sm text-gray-500">Expert in Production AI Systems & MLOps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Master the Future of Intelligence?
            </h2>
            <p className="text-xl mb-4">Join the next generation of AI and quantum computing pioneers</p>
            <p className="text-lg mb-8 opacity-90">Limited seats available for our upcoming cohort</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Apply to ByteMinds
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300">
                Schedule Lab Tour
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300">
                Download Curriculum
              </button>
            </div>

            <div className="mt-8">
              <p className="text-xl font-bold">The future of AI is in your hands.</p>
              <p className="text-lg">Start building it today at ByteMinds.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ByteMinds;
