import React, { useEffect, useState } from 'react'
import Insights from '../components/Insights'

function InsightsPage() {
  const [activeTab, setActiveTab] = useState('Skill Blueprint');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insightTabs = [
    "Skill Blueprint",
    "The Skill Digest",
    "AI Talent Research Hub",
    "The Skill Unplugged Podcast Series (3R )",
    "Skillzza Live"
  ];

  const tabDescriptions = {
    "Skill Blueprint": "Solutions & Case Studies Real-World Success Stories in Skill Development",
    "The Skill Digest": "The Skillzza Digest Insights, Trends & Game-changers shaping the Future of Skills",
    "AI Talent Research Hub": "Reports & Whitepapers Data-Driven Insights on AI & Workforce Transformation.",
    "The Skill Unplugged Podcast Series (3R )": "Talks on the Future of Skills.",
    "Skillzza Live": "Knowledge in Action Interactive Sessions Bringing Learning to Life."
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Banner */}
      <Insights showHero={true} showContent={false} />

      {/* Main Filter Section */}
      <section className="w-full px-4 md:px-8 mt-16 md:mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          
          {/* Main Heading */}
          

          {/* 5 Buttons wrapped for mobile and big screens alike */}
          <div 
            className="w-full flex justify-center pt-8 pb-12 px-2 md:px-4 lg:px-0 insight-btn-container"
          >
            <div className="flex flex-wrap gap-3 md:gap-5 mx-auto w-full lg:w-auto justify-center items-center">
              {insightTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`insight-category-btn whitespace-normal md:whitespace-nowrap text-[14px] md:text-[17px] px-[16px] md:px-[36px] py-[10px] md:py-[18px] ${isActive ? 'active' : ''}`}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      textAlign: 'center',
                      borderRadius: '999px',
                      backgroundColor: isActive ? '#E11313' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#475569',
                      border: isActive ? '1px solid #E11313' : '1px solid #E2E8F0',
                      boxShadow: isActive 
                        ? '0px 12px 28px rgba(225, 19, 19, 0.35)' 
                        : '0px 4px 12px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          </div>
          
          <div className="mt-6 text-center transistion-all duration-300">
            <p className="font-['DM_Sans',sans-serif] text-[18px] md:text-[20px] font-medium text-[#475569] px-4">
              {tabDescriptions[activeTab]}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section below the buttons */}
      <section className="w-full px-4 md:px-8 mt-12 md:mt-20 pb-20">
        <div className="max-w-[1440px] mx-auto">
          {activeTab === 'Skill Blueprint' && (
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  id: 1,
                  tag: "SKILL BLUEPRINT",
                  title: "Redefining Student Success",
                  desc: "How AI-Based Potential Mapping Helped a University Identify Hidden Talent Beyond Grades",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "SKILL BLUEPRINT",
                  title: "From Scores to Skills",
                  desc: "A Case Study on AI-Powered Assessments Driving Inclusive Hiring",
                  image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "SKILL BLUEPRINT",
                  title: "Unlocking Career Pathways",
                  desc: "How AI Potential Meters Are Guiding Students Toward Future-Ready Professions",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "SKILL BLUEPRINT",
                  title: "Learning by Doing",
                  desc: "How an AI Xperience Platform Transformed Internship Readiness in 8 Weeks",
                  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "SKILL BLUEPRINT",
                  title: "From Theory to Simulation",
                  desc: "Building Industry-Ready Talent Through AI-Powered Role-Play Labs",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1"
                >
                  {/* Card Image */}
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className="font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 group-hover:text-[#E11313] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6 mt-auto">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'The Skill Digest' && (
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  id: 1,
                  tag: "THE SKILL DIGEST",
                  title: "Beyond Grades",
                  desc: "How AI-Powered Potential Meters are Redefining Talent Discovery",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "THE SKILL DIGEST",
                  title: "From Skill Gaps to Skill Maps",
                  desc: "The Future of Adaptive Career Assessment with AI",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "THE SKILL DIGEST",
                  title: "Immersive Learning",
                  desc: "How AI-Powered Experience Platforms are Shaping Future-Ready Talent",
                  image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "THE SKILL DIGEST",
                  title: "Campus Hiring 2.0",
                  desc: "How AI Marketplaces are Matching Job-Ready Talent with Employers",
                  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "THE SKILL DIGEST",
                  title: "Talent Transformation 2030",
                  desc: "Preparing Human Potential for an AI-Driven Future",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1"
                >
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className="font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 group-hover:text-[#E11313] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6 mt-auto">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'AI Talent Research Hub' && (
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  id: 1,
                  tag: "RESEARCH HUB",
                  title: "AI Fluency as the New Digital Literacy",
                  desc: "Discover why AI fluency is replacing traditional digital literacy as the core competency needed to thrive in the modern workplace.",
                  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "RESEARCH HUB",
                  title: "Rise of Human + AI Hybrid Workforce Models",
                  desc: "An exploration into how leading companies are restructuring teams to maximize synergy between human creativity and AI efficiency.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "RESEARCH HUB",
                  title: "Agentic AI & Autonomous Workflows",
                  desc: "Understand the shift from basic automation to agentic AI, where self-governing systems manage complex workflows to accelerate productivity.",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "RESEARCH HUB",
                  title: "AI Talent Shift Beyond Tech Roles (Blue-Collar + Infra Talent)",
                  desc: "Analyzing the unexpected ways AI adoption is reshaping blue-collar industries and transforming infrastructure and operational roles.",
                  image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "RESEARCH HUB",
                  title: "Skills-First Hiring & AI-Driven Talent Evaluation",
                  desc: "How AI-driven evaluations are permanently shifting the focus from resumes and pedigree to verified, demonstrable skills.",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1"
                >
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className="font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 group-hover:text-[#E11313] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6 mt-auto">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'The Skill Unplugged Podcast Series (3R )' && (
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  id: 1,
                  tag: "PODCAST",
                  title: "From AI Awareness to AI Mastery",
                  // desc: "Tune in as we discuss moving past the AI hype cycle and taking actionable steps to deeply integrate AI tools into professional workflows.",
                  image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "PODCAST",
                  title: "Prompt Engineering as a Core Career Skill",
                  desc: "Experts break down why communicating effectively with LLMs is becoming the most sought-after soft skill of the decade.",
                  image: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "PODCAST",
                  title: "Upskilling for the AI-Augmented Workplace",
                  desc: "Join our guest speakers to discover which legacy skills are fading and which human-centric skills are becoming more valuable.",
                  image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "PODCAST",
                  title: "Reskilling at Scale",
                  desc: "How Organizations Are Preparing for AI",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "PODCAST",
                  title: "The Rise of AI Generalists vs Specialists",
                  desc: "A debate on the future of work: should you specialize in narrow AI implementation or build broad horizontal knowledge across systems?",
                  image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1"
                >
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className="font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 group-hover:text-[#E11313] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6 mt-auto">
                      {/* {card.desc} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Skillzza Live' && (
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  id: 1,
                  tag: "SKILLZZA LIVE",
                  title: "How to Build a High-Income Skill Using AI",
                  // desc: "Learn actionable strategies in this comprehensive live session to monetize AI tools and rapidly build high-value freelance or corporate skills.",
                  image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "SKILLZZA LIVE",
                  title: "Live Workshop",
                  desc: "Automate Your Daily Work with AI",
                  image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "SKILLZZA LIVE",
                  title: "Top AI Career Paths You Can Start Without Coding",
                  desc: "Discover the fast-growing non-technical roles in the AI industry and the exact roadmap to transition into them today.",
                  image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "SKILLZZA LIVE",
                  title: "Create Content, Designs & Presentations Using AI (Live)",
                  desc: "Watch our experts build marketing campaigns, graphics, and slide decks from scratch in real-time leveraging the latest generative models.",
                  image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "SKILLZZA LIVE",
                  title: "AI for Students & Professionals",
                  desc: "Learn Smarter, Work Faster",
                  image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1"
                >
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className="font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 group-hover:text-[#E11313] transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6 mt-auto">
                      {/* {card.desc} */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        /* Hide scrollbar completely to make it look sleek on mobile */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;    /* Firefox */
        }

        /* Smooth pill hover states (matching main red brand colors) */
        .insight-category-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0px 14px 32px rgba(225, 19, 19, 0.25) !important;
          background-color: #E11313 !important;
          color: #FFFFFF !important;
          border-color: #E11313 !important;
        }
        
        .insight-category-btn:active {
          transform: translateY(0) scale(0.98);
          transition: all 0.1s;
        }
      `}</style>
    </div>
  )
}

export default InsightsPage
