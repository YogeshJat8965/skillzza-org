import React from 'react';

const PartnerCollaboration = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/partner-bg.png)',
          minHeight: '70vh'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-6 py-2 bg-orange-500 rounded-full text-sm font-semibold text-white mb-6">
              STRATEGIC PARTNERSHIPS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Strategic Partnerships That<br />
              Transform Futures
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-4">
              Building Tomorrow's Workforce Together
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-8">
              Skillzza forges strategic alliances across sectors to drive meaningful skill development and innovation. Our collaborative approach delivers customized solutions that meet the unique needs of corporates, governments, and educational institutions—creating shared value and sustainable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              CORPORATE PARTNERSHIPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Upskill Your Workforce. Empower Innovation.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              In today's rapidly evolving business landscape, organizations need agile, skilled talent to stay competitive. Skillzza partners with forward-thinking companies to create future-ready upskilling and reskilling programs that align with your strategic vision.
            </p>
          </div>

          {/* Why Choose Skillzza */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Skillzza as Your Learning Partner?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tailored Workforce Solutions */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Tailored Workforce Solutions</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom learning ecosystems designed for your industry's specific challenges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scalable programs that grow with your organization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>ROI-focused training that delivers measurable results</span>
                  </li>
                </ul>
              </div>

              {/* Enhanced Employee Experience */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Enhanced Employee Experience</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cutting-edge skills development that boosts engagement and retention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Career progression pathways that attract top talent</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance-driven learning that increases productivity</span>
                  </li>
                </ul>
              </div>

              {/* Future-Focused Curriculum */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔮</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Future-Focused Curriculum</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI, emerging technologies, and digital transformation training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leadership development and soft skills enhancement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sustainability and green skills for responsible business growth</span>
                  </li>
                </ul>
              </div>

              {/* Meaningful CSR Impact */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Meaningful CSR Impact</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Purpose-driven programs that uplift underserved communities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Skills-based social impact initiatives with measurable outcomes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Employee volunteer opportunities that build team culture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partnership Models */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partnership Models We Offer:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Custom Learning Academies",
                  description: "End-to-end skill development programs tailored to your workforce"
                },
                {
                  title: "Innovation Challenges",
                  description: "Hackathons and bootcamps to discover and nurture internal talent"
                },
                {
                  title: "CSR Skill Initiatives",
                  description: "Community-focused programs that create social value while engaging employees"
                },
                {
                  title: "Skillzza Xperience Platform",
                  description: "Immersive virtual simulations for hands-on learning and assessment"
                }
              ].map((model, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{model.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-gray-900">
                Ready to build a workforce that's skilled for today and prepared for tomorrow?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              GOVERNMENT PARTNERSHIPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building a Skilled Nation Together
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Skillzza collaborates with government bodies at every level to design scalable, sustainable skill development programs that bridge workforce gaps, accelerate economic growth, and promote social equity across communities.
            </p>
          </div>

          {/* How We Empower Governments */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              How We Empower Governments:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📋",
                  title: "Policy-Integrated Programs",
                  items: [
                    "Co-develop initiatives aligned with national development goals and UN SDGs",
                    "Evidence-based program design with clear success metrics",
                    "Flexible implementation models adapted to local contexts"
                  ]
                },
                {
                  icon: "💼",
                  title: "Employment-Ready Training",
                  items: [
                    "Industry-specific upskilling in high-demand sectors (AI, EV, renewable energy, healthcare)",
                    "Job placement partnerships with leading employers",
                    "Entrepreneurship development for economic self-reliance"
                  ]
                },
                {
                  icon: "🤝",
                  title: "Public-Private Partnerships",
                  items: [
                    "Collaborative funding and implementation models",
                    "Industry expertise combined with public reach",
                    "Sustainable programs with long-term impact"
                  ]
                },
                {
                  icon: "💻",
                  title: "Technology-Enabled Delivery",
                  items: [
                    "Digital-first platforms for accessible, scalable learning",
                    "Real-time progress tracking and impact measurement",
                    "Mobile-friendly solutions for diverse populations"
                  ]
                }
              ].map((area, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-red-600">{area.title}</h4>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Focus Areas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Priority Focus Areas:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Youth Empowerment", description: "Job-ready skills for emerging workforce" },
                { title: "Women's Economic Participation", description: "Gender-inclusive skill programs" },
                { title: "Rural Development", description: "Bringing opportunities to underserved regions" },
                { title: "Green Transition", description: "Skills for sustainable economy jobs" },
                { title: "Digital Inclusion", description: "Bridging the digital divide through skill development" }
              ].map((focus, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{focus.title}</h4>
                  <p className="text-sm text-gray-600">{focus.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Process */}
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Proven Engagement Process:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Vision Alignment", description: "Understanding your development priorities and constraints" },
                { step: "2", title: "Strategic Co-Creation", description: "Designing impactful, evidence-based programs" },
                { step: "3", title: "Technology-Enabled Delivery", description: "Implementing with digital tools for scale and efficiency" },
                { step: "4", title: "Impact Measurement", description: "Continuous monitoring and evaluation for sustainable success" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-red-100">{process.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-semibold">Together, let's build a skilled and future-ready nation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Partnerships */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-red-100 rounded-full text-sm font-semibold text-red-600 mb-6">
              EDUCATIONAL PARTNERSHIPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Students for Tomorrow's World
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Skillzza partners with schools and educational institutions to equip young minds with essential 21st-century skills. Our programs go beyond traditional academics to inspire innovation, creativity, and leadership—preparing students to become tomorrow's changemakers.
            </p>
          </div>

          {/* Why Educational Institutions Choose Skillzza */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Educational Institutions Choose Skillzza:
            </h3>
            
            {/* First row with 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Holistic Skill Development",
                  items: [
                    "Critical thinking, communication, collaboration, and creativity",
                    "Social-emotional learning integrated with technical skills",
                    "Growth mindset and resilience building"
                  ]
                },
                {
                  title: "Future-Ready Learning",
                  items: [
                    "Hands-on exposure to AI, robotics, and emerging technologies",
                    "Sustainability education and climate action projects",
                    "Design thinking and entrepreneurship workshops"
                  ]
                },
                {
                  title: "Real-World Application",
                  items: [
                    "Project-based learning with industry connections",
                    "Hackathons and innovation challenges",
                    "Community problem-solving initiatives"
                  ]
                }
              ].map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{area.title}</h4>
                  <ul className="space-y-3 text-gray-700">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Second row with 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Career & College Preparation",
                  items: [
                    "Industry-aligned curriculum development",
                    "Higher education pathway guidance",
                    "Professional skill development and networking"
                  ]
                },
                {
                  title: "Educator Excellence",
                  items: [
                    "Teacher training in modern pedagogies and digital tools",
                    "Professional development workshops",
                    "Collaborative curriculum design support"
                  ]
                }
              ].map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{area.title}</h4>
                  <ul className="space-y-3 text-gray-700">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Program Offerings */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comprehensive Program Offerings:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Skill Development Bootcamps", description: "Intensive programs in technology, creativity, and leadership" },
                { title: "STEM Innovation Labs", description: "Hands-on science, technology, engineering, and math experiences" },
                { title: "Sustainability Champions", description: "Environmental leadership and climate action programs" },
                { title: "Creative Arts Integration", description: "Design thinking, media, and artistic expression workshops" },
                { title: "Career Exploration", description: "Industry mentorship and professional skill development" },
                { title: "Teacher Excellence Programs", description: "Educator training and curriculum enhancement" }
              ].map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Commitment */}
          <div className="bg-gradient-to-r from-red-600 to-orange-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Impact Commitment:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Future Workforce Readiness", description: "Skills and mindset for tomorrow's job market" },
                { title: "Inclusive Access", description: "Reaching underserved and diverse student communities" },
                { title: "Sustainability Leadership", description: "Inspiring climate action and environmental stewardship" },
                { title: "Leadership Development", description: "Building confidence, resilience, and social responsibility" }
              ].map((commitment, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{commitment.title}</h4>
                  <p className="text-sm text-red-100">{commitment.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-xl font-semibold">Let's shape the innovators and leaders of tomorrow—together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Skillzza?
            </h2>
            <p className="text-xl mb-4">
              Contact us today to explore how we can create impactful, sustainable skill development programs tailored to your unique needs and goals.
            </p>
            <p className="text-lg mb-8 font-semibold">
              Together, we're not just building skills, we're building futures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Partnership Discussion
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerCollaboration;
