import React from 'react';

import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';
const SkillDigest = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: getBackgroundImageUrl('/digestbannerImg.jpeg'),
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white text-center mx-auto">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              THE SKILLZZA DIGEST
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Insights That Shape Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Stay updated with insights, trends, and game-changers that are shaping the future of skills and workforce development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
                FEATURED ARTICLES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Latest Insights from the Future of Work
              </h2>
            </div>

            {/* Article 1: Beyond Grades */}
            <article className="mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={getAssetPath('/potential_meter_banner_img.png')} 
                    alt="AI-Powered Potential Meters" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-600 mb-4">
                    TALENT DISCOVERY
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Beyond Grades: How AI-Powered Potential Meters are Redefining Talent Discovery
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For decades, grades and test scores have been the primary indicators of student potential. But as industries evolve, these traditional benchmarks are proving insufficient to capture the true spectrum of human capability. Enter the AI-powered Potential Meter—a transformative tool that shifts the focus from what students have memorized to what they can actually achieve.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unlike conventional assessments, AI-driven Potential Meters analyze skills, adaptability, creativity, and problem-solving through dynamic simulations and behavioral patterns. They don't just evaluate knowledge; they reveal how learners think, respond to challenges, and apply insights in real-world scenarios.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This shift is especially crucial as employers seek individuals with transferable skills—collaboration, critical thinking, digital literacy—over rote knowledge. By mapping a learner's strengths and growth areas, AI-powered assessments create personalized career pathways while enabling institutions and recruiters to tap into previously overlooked talent.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In the future, grades will be just one part of the equation. The real differentiator will be how effectively we measure potential, not performance—and AI is making that vision a reality.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2: Immersive Learning */}
            <article className="mb-20">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={getAssetPath('/platformslide1.png')} 
                    alt="AI-Powered Experience Platforms" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-600 mb-4">
                    IMMERSIVE LEARNING
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Immersive Learning: How AI-Powered Experience Platforms are Shaping Future-Ready Talent
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Classroom learning is no longer enough. Today's students and professionals need hands-on, immersive experiences that mirror the challenges of real-world workplaces. This is where AI-powered Xperience Platforms are rewriting the rules of education and talent development.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These platforms go beyond passive learning modules. They incorporate role-play simulations, gamified challenges, and industry-inspired projects, enabling learners to apply theory in dynamic environments. AI acts as a personalized guide—tracking performance, offering instant feedback, and recommending tailored learning journeys.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The biggest advantage? Learners build confidence, resilience, and practical problem-solving skills before entering the workforce. Employers, in turn, gain access to talent that is not just knowledgeable, but job-ready from day one.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In the coming years, we'll see Xperience Platforms evolve into career laboratories, where learners can experiment, innovate, and showcase their capabilities. This is the future of education—learning by doing, powered by AI.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 3: Campus Hiring 2.0 */}
            <article className="mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={getAssetPath('/insight_roles.jpg')} 
                    alt="AI Marketplaces for Campus Hiring" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-600 mb-4">
                    CAMPUS HIRING
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Campus Hiring 2.0: How AI Marketplaces are Matching Job-Ready Talent with Employers
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Campus recruitment has always been a high-stakes process—for students seeking opportunities and for employers scouting fresh talent. But traditional methods—resume shortlisting, aptitude tests, lengthy interviews—are often inefficient and biased. The rise of AI-powered hiring marketplaces like Hirenest is changing that.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These platforms don't just collect resumes. They offer pre-assessed, job-ready talent pools, where students are evaluated through AI-driven skill tests, behavioral assessments, and project simulations. Employers can filter candidates based on role-specific requirements, making the process faster, fairer, and more data-driven.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For students, the benefit is clear: a level playing field. Instead of competing purely on grades or prestige of their institution, they are judged on skills, adaptability, and readiness. For employers, it means reducing hiring cycles, improving retention, and ensuring a better cultural fit.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The future of campus hiring is about precision matching, not mass screening. AI marketplaces are bridging academia and industry—ensuring that the right talent finds the right opportunity at the right time.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4: Workforce to Skillforce */}
            <article className="mb-20">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={getAssetPath('/future_workspace.jpg')} 
                    alt="Skillforce Transformation" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-600 mb-4">
                    WORKFORCE TRANSFORMATION
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    From Workforce to 'Skillforce': How AI is Driving the Next Wave of Talent Transformation
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The workplace of tomorrow will look very different from today's. Automation, AI, and digital transformation are reshaping roles across industries. But instead of replacing humans, these shifts are emphasizing the need for a 'Skillforce'—a workforce built on continuous learning and adaptability.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    AI is at the heart of this transformation. It enables personalized upskilling by identifying skill gaps, recommending targeted learning, and even simulating future job roles. Talent transformation is no longer about one-time training programs; it's about lifelong learning ecosystems where employees evolve alongside technology.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Organizations that embrace this model gain a competitive edge—creating future-ready teams that can pivot with changing demands. For individuals, it means greater career resilience and the ability to thrive in multiple roles throughout their professional journey.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The shift from workforce to skillforce is not just semantic—it's a mindset change. And AI is the catalyst that will ensure human potential keeps pace with technological disruption.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 5: AI Hackathons */}
            <article className="mb-20">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={getAssetPath('/ai_hacknex_tile_img.png')} 
                    alt="AI Hackathons as Innovation Labs" 
                    className="w-full h-80 object-cover rounded-2xl shadow-lg" 
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-4">
                    INNOVATION LABS
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    AI Hackathons as the New Innovation Labs: Crowdsourcing the Future of Tech
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Innovation used to happen behind closed doors in R&D labs. Today, it's happening in open, collaborative spaces like AI hackathons. These high-energy events bring together coders, designers, entrepreneurs, and domain experts to solve real-world challenges—often in just 24 to 48 hours.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    What makes AI hackathons powerful is the fusion of creativity, speed, and collaboration. By democratizing access to innovation, they allow students, startups, and professionals to co-create solutions that might otherwise take months in traditional setups. Companies and governments are also leveraging hackathons to tap into crowdsourced intelligence, often discovering breakthrough ideas and potential hires.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Platforms like AI HackNex are taking this a step further by aligning hackathon themes with pressing global issues—sustainability, healthcare, fintech, and smart cities. This transforms hackathons from coding contests into launchpads for impactful innovations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    In the future, expect AI hackathons to serve as incubators for unicorn startups, testing grounds for emerging technologies, and gateways for young innovators to make their mark on the world.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-600 mb-6">
              STAY UPDATED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Subscribe to The Skillzza Digest and get the latest insights on AI, workforce transformation, and the future of talent development delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 10,000+ professionals who trust Skillzza for industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore More Topics
              </h2>
              <p className="text-xl text-gray-600">
                Dive deeper into the trends shaping the future of work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "AI & Automation",
                  description: "How artificial intelligence is reshaping industries",
                  color: "from-blue-500 to-indigo-500",
                  image: getAssetPath('/data_ai.jpg')
                },
                {
                  title: "Future Skills",
                  description: "Essential capabilities for tomorrow's workforce",
                  color: "from-green-500 to-emerald-500",
                  image: getAssetPath('/future_proofing_img.jpg')
                },
                {
                  title: "Digital Learning",
                  description: "Evolution of education in the digital age",
                  color: "from-purple-500 to-violet-500",
                  image: getAssetPath('/engaing_learning.jpg')
                },
                {
                  title: "Talent Analytics",
                  description: "Data-driven approaches to human capital",
                  color: "from-orange-500 to-red-500",
                  image: getAssetPath('/datadriveninsights_ico.png')
                }
              ].map((topic, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={topic.image} 
                      alt={topic.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{topic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{topic.description}</p>
                    <button className={`w-full bg-gradient-to-r ${topic.color} text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300`}>
                      Explore Articles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Talent Strategy?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how Skillzza's AI-powered platform can help you build a future-ready workforce and unlock human potential at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillDigest;
