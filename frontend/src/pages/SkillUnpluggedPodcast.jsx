import React from 'react';
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

const SkillUnpluggedPodcast = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/digital_bugiess_growthBlog_img.jpg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              THE SKILL UNPLUGGED SERIES
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              3R Talks: Raw, Real & Revolutionary
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Bold conversations shaping the future of skills
            </p>
          </div>
        </div>
      </section>

      {/* Agentic AI Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                FEATURED SERIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agentic AI & The Future of Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Agentic AI: The Mindshift Moment</h3>
                </div>
                <p className="text-gray-700">
                  How autonomous AI is redefining industries and leadership.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">AI at Work: Navigating the New Normal</h3>
                </div>
                <p className="text-gray-700">
                  Human–AI collaboration and workplace reinvention.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Future of Work: From Jobs to Journeys</h3>
                </div>
                <p className="text-gray-700">
                  Embracing fluid careers and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Roles & Transformation */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full text-sm font-semibold text-orange-700 mb-6 shadow-md">
                TECH ROLES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tech Roles & Transformation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">From Coders to Architects</h3>
                <p className="text-gray-700">
                  The evolution of developers into system designers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Rise of Vibe Coding</h3>
                <p className="text-gray-700">
                  Beyond syntax: how intuition and creativity drive coding.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Generative AI & Creativity</h3>
                <p className="text-gray-700">
                  Reinventing storytelling, design, and content creation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity in the AI Era</h3>
                <p className="text-gray-700">
                  New threats, new defenses, and the rise of AI-first security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Professions Disrupted */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-600 mb-6">
                PROFESSIONS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI & Professions Disrupted
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-2xl hover:scale-105 hover:border-yellow-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">AI & the Legal Frontier</h3>
                    <p className="text-gray-700">
                      Automation, contracts, and the courtroom of the future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 hover:shadow-2xl hover:scale-105 hover:border-green-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Transformed by AI</h3>
                    <p className="text-gray-700">
                      Precision care, predictive analytics, and patient trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Education Reimagined</h3>
                    <p className="text-gray-700">
                      Personalized learning powered by AI tutors and co-pilots.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200 hover:shadow-2xl hover:scale-105 hover:border-purple-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Finance & Recruitment in the AI Age</h3>
                    <p className="text-gray-700">
                      Smarter hiring, augmented decision-making, and ethical dilemmas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Societal Shifts & Ethics */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full text-sm font-semibold text-red-700 mb-6 shadow-md">
                ETHICS & SOCIETY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Societal Shifts & Ethics
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Women in AI & Tech</h3>
                <p className="text-sm text-gray-700">
                  Closing the gender gap and amplifying diverse voices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI & Mental Health</h3>
                <p className="text-sm text-gray-700">
                  Balancing opportunity with emotional well-being.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:border-yellow-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI & Climate Action</h3>
                <p className="text-sm text-gray-700">
                  Harnessing intelligence to fight the climate crisis.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Ethical AI: Beyond Compliance</h3>
                <p className="text-sm text-gray-700">
                  Responsible innovation as a competitive edge.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-rose-100 hover:border-rose-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI & Data Privacy</h3>
                <p className="text-sm text-gray-700">
                  Navigating trust, security, and regulation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Government & AI Regulation</h3>
                <p className="text-sm text-gray-700">
                  Balancing innovation with public good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture, Creativity & Human Impact */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-pink-100 rounded-full text-sm font-semibold text-pink-600 mb-6">
                CULTURE & CREATIVITY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Culture, Creativity & Human Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Intersection of AI & Art</h3>
                <p className="text-gray-700">
                  Exploring machine imagination and human expression.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Gig Economy & AI</h3>
                <p className="text-gray-700">
                  How freelancers and platforms evolve together.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Building AI Literacy</h3>
                <p className="text-gray-700">
                  The must-have skills for tomorrow's workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-red-500 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Conversation
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the boldest discussions shaping the future of skills, AI, and work. Subscribe to stay updated on new episodes.
            </p>
            <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get Notified When We Launch
            </button>
            <p className="text-sm text-orange-100 mt-6">
              Coming Soon • Follow us for updates
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillUnpluggedPodcast;
