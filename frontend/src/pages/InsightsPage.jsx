import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Insights from '../components/Insights'
import { skillUnpluggedEpisodes } from '../data/skillUnpluggedEpisodes'
import { skillzzaLiveSessions } from '../data/skillzzaLiveSessions'
import { aiTalentResearchHubCards } from '../data/aiTalentResearchHubCards'


function ExpandableText({ text, limit = 155, onReadMore, forceReadMore = false }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  if (!text) return null;
  const hasOverflow = text.length > limit;
  const shouldShowReadMore = forceReadMore || hasOverflow;

  if (!shouldShowReadMore) return <>{text}</>;

  const handleReadMore = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onReadMore) {
      onReadMore();
      return;
    }

    setIsExpanded(true);
  };

  const handleReadLess = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <span className="relative block">
      <span
        className={isExpanded ? '' : 'insight-three-line-clamp pr-[86px]'}
      >
        {text}
      </span>

      {!isExpanded && (
        <button
          onClick={handleReadMore}
          className="absolute bottom-0 right-0 bg-white pl-2 text-[#E11313] hover:underline font-bold text-[14px] leading-[1.6]"
        >
          Read more
        </button>
      )}

      {isExpanded && !onReadMore && (
        <button
          onClick={handleReadLess}
          className="mt-1 block text-[#E11313] hover:underline font-bold text-[14px]"
        >
          Read less
        </button>
      )}
    </span>
  );
}

function InsightsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const getTabFromPath = () => {
    switch (location.pathname) {
      case '/insights/skill-blueprint': return "Skill Blueprint";
      case '/insights/skill-digest': return "The Skill Digest";
      case '/insights/ai-talent-research-hub': return "AI Talent Research Hub";
      case '/insights/skill-unplugged-podcast': return "The Skill Unplugged Podcast Series (3R )";
      case '/insights/skillzza-live': return "Skillzza Live";
      default: return "Skill Blueprint";
    }
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath());

  useEffect(() => {
    setActiveTab(getTabFromPath());
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "Skill Blueprint": navigate('/insights/skill-blueprint', { replace: false }); break;
      case "The Skill Digest": navigate('/insights/skill-digest', { replace: false }); break;
      case "AI Talent Research Hub": navigate('/insights/ai-talent-research-hub', { replace: false }); break;
      case "The Skill Unplugged Podcast Series (3R )": navigate('/insights/skill-unplugged-podcast', { replace: false }); break;
      case "Skillzza Live": navigate('/insights/skillzza-live', { replace: false }); break;
      default: navigate('/insights');
    }
  };

  const openSkillBlueprintCaseStudy = (slug) => {
    navigate(`/insights/skill-blueprint/${slug}`, { replace: false });
  };

  const openSkillDigestArticle = (slug) => {
    navigate(`/insights/skill-digest/${slug}`, { replace: false });
  };

  const openSkillUnpluggedEpisode = (slug) => {
    navigate(`/insights/skill-unplugged-podcast/${slug}`, { replace: false });
  };

  const openSkillzzaLiveSession = (slug) => {
    navigate(`/insights/skillzza-live/${slug}`, { replace: false });
  };

  const openResearchHubArticle = (slug) => {
    navigate(`/insights/ai-talent-research-hub/${slug}`, { replace: false });
  };

  const insightTabs = [
    "Skill Blueprint",
    "The Skill Digest",
    "AI Talent Research Hub",
    "The Skill Unplugged Podcast Series (3R )",
    "Skillzza Live"
  ];

  const tabDescriptions = {
    "Skill Blueprint": "Real-World Success Stories in Skill Development",
    "The Skill Digest": "Insights, Trends & Game-changers shaping the Future of Skills",
    "AI Talent Research Hub": "Data-Driven Insights on AI & Workforce Transformation.",
    "The Skill Unplugged Podcast Series (3R )": "Talks on the Future of Skills.",
    "Skillzza Live": "Interactive Sessions Bringing Learning to Life."
  };

  const breadcrumbMappings = {
    "Skill Blueprint": { left: "Case Studies", right: "Skill Blueprint" },
    "The Skill Digest": { left: "Blog", right: "The Skillzza Digest" },
    "AI Talent Research Hub": { left: "Reports & Whitepapers", right: "AI Talent Research Hub" },
    "The Skill Unplugged Podcast Series (3R )": { left: "Skill Unplugged Podcast", right: "A Podcast series" },
    "Skillzza Live": { left: "Knowledge in Action", right: "Skillzza Live" }
  };

  return (
    <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Banner */}
      <Insights showHero={true} showContent={false} />

      {/* Breadcrumbs */}
      <div className="bg-transparent pt-6 pb-2 px-4 md:px-8 w-full">
        <div className="max-w-[1440px] mx-auto border-b-2 border-dotted border-gray-500 pb-3 flex items-center gap-2 text-[14px] md:text-[16px] font-['DM_Sans',sans-serif]">
          <span className="text-[#0070AC] font-bold">
            {breadcrumbMappings[activeTab]?.left || "Home"}
          </span>
          <span className="text-gray-500">/</span>
          <span className="text-[#475569]">
            {breadcrumbMappings[activeTab]?.right || "Insights"}
          </span>
        </div>
      </div>

      {/* Main Filter Section */}
      <section className="w-full px-4 md:px-8 mt-2 md:mt-4">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          
          {/* Main Heading */}
          

          {/* 5 Buttons wrapped for mobile and big screens alike */}
          <div 
            className="w-full hidden justify-center pt-2 pb-2 px-2 md:px-4 lg:px-0 insight-btn-container"
          >
            <div className="flex flex-wrap gap-3 md:gap-5 mx-auto w-full lg:w-auto justify-center items-center">
              {insightTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
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
          
          <div className="mt-2 text-left transistion-all duration-300 w-full max-w-[1440px] px-4">
            <p className="font-['DM_Sans',sans-serif] text-[18px] md:text-[20px] font-bold text-[#475569]">
              {tabDescriptions[activeTab]}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section below the buttons */}
      <section className="w-full px-4 md:px-8 mt-6 md:mt-8 pb-20">
        <div className="max-w-[1440px] mx-auto">
          {activeTab === 'Skill Blueprint' && (
            <div className="flex flex-wrap gap-8">
              {[
                {
                  id: 1,
                  tag: "SKILL BLUEPRINT",
                  slug: 'ai-powered-reskilling-initiatives',
                  title: "AI-Powered Reskilling Initiatives",
                  subtitle: "Transforming Workforce Agility Through Intelligent Skill Gap Analysis",
                  desc: "In today's rapidly evolving business landscape, organizations face an unprecedented challenge: the skills their workforce possessed yesterday may not be sufficient for tomorrow's demands. Traditional approaches to identifying skill gaps often rely on annual reviews, manager assessments, and broad industry reports-methods that are slow, subjective, and frequently outdated by the time action is taken.",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "SKILL BLUEPRINT",
                  slug: 'ai-in-personalized-learning-paths',
                  title: "AI in Personalized Learning Paths",
                  subtitle: "Creating Custom Learning Journeys for Individual Career Growth",
                  desc: "Traditional one-size-fits-all training programs are giving way to hyper-personalized learning experiences powered by AI. These systems recognize that every learner has unique strengths, preferences, career goals, and learning patterns-and adapt accordingly.",
                  image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "SKILL BLUEPRINT",
                  slug: 'redefining-student-success-ai-potential-mapping',
                  title: "Redefining Student Success",
                  subtitle: "Looking Beyond Traditional Metrics",
                  desc: "Discover how a leading university utilized AI-based potential mapping to identify and nurture student talents that traditional grading systems overlooked, resulting in a more diverse, engaged, and successful student body.",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "SKILL BLUEPRINT",
                  slug: 'scores-to-skills-ai-inclusive-hiring',
                  title: "From Scores to Skills",
                  desc: "Learn how modern enterprises are shifting from traditional score-based filtering to AI-powered skill assessments, significantly improving hiring inclusivity, reducing bias, and finding the right organizational fit for every role.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "SKILL BLUEPRINT",
                  slug: 'unlocking-career-pathways-ai-potential-meters',
                  title: "Unlocking Career Pathways",
                  subtitle: "Mapping Intrinsic Skills to Future Careers",
                  desc: "Explore how AI Potential Meters are revolutionizing career guidance by analyzing students' intrinsic strengths and aligning them with emerging, future-ready professions, ensuring long-term career success and adaptability.",
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => {
                const isClickable = card.id === 1 || card.id === 2;
                return (
                <div 
                  key={card.id} 
                  className={`insight-card flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F3F4F6] transition-all duration-400 ${
                    isClickable ? "group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative top-0 hover:-top-1 cursor-pointer" : ""
                  }`}
                  role={isClickable ? "button" : "article"}
                  tabIndex={isClickable ? 0 : undefined}
                  onClick={() => isClickable && openSkillBlueprintCaseStudy(card.slug)}
                  onKeyDown={(e) => {
                    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      openSkillBlueprintCaseStudy(card.slug);
                    }
                  }}
                >
                  {/* Card Image */}
                  <div className="w-full h-[250px] overflow-hidden relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${isClickable ? 'group-hover:scale-110' : ''}`}
                    />
                    {/* Subtle gradient overlay on image */}
                    {isClickable && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                    <div className="mb-4">
                      <span className="inline-flex items-center bg-[#0F1114] text-white text-[11px] font-bold uppercase tracking-[0.1em] py-1.5 px-4 rounded-full font-['DM_Sans',sans-serif]">
                        {card.tag}
                      </span>
                    </div>
                    
                    <h3 className={`font-['League_Spartan',sans-serif] font-medium text-[26px] leading-[1.25] text-[#0F1114] mb-4 transition-colors duration-300 ${isClickable ? 'group-hover:text-[#E11313]' : ''}`}>
                      {card.title}
                    </h3>

                    {card.subtitle && (
                      <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#374151] mb-4">
                        {card.subtitle}
                      </p>
                    )}
                    
                    <div className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-4">
                      {isClickable ? (
                        <ExpandableText
                          text={card.desc}
                          limit={210}
                          forceReadMore={true}
                          onReadMore={() => openSkillBlueprintCaseStudy(card.slug)}
                        />
                      ) : (
                        <ExpandableText
                          text={card.desc}
                          limit={210}
                          forceReadMore={true}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}

          {activeTab === 'The Skill Digest' && (
            <div className="flex flex-wrap gap-8">
              {[
                {
                  id: 1,
                  tag: "THE SKILL DIGEST",
                  title: "Beyond Grades",
                  slug: 'beyond-grades-ai-potential-meters',
                  subtitle: 'How AI-Powered Potential Meters are Redefining Talent Discovery',
                  desc: 'For decades, grades and test scores have been the primary indicators of student potential. But as industries evolve, these traditional benchmarks are proving insufficient to capture the true spectrum of human capability.',
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 2,
                  tag: "THE SKILL DIGEST",
                  title: "Immersive Learning",
                  slug: 'immersive-learning-ai-xperience-platforms',
                  subtitle: 'How AI-Powered Experience Platforms are Shaping Future-Ready Talent',
                  desc: 'Classroom learning is no longer enough. Today\'s students and professionals need hands-on, immersive experiences that mirror the challenges of real-world workplaces.',
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 3,
                  tag: "THE SKILL DIGEST",
                  title: "Campus Hiring 2.0",
                  slug: 'campus-hiring-2-ai-marketplaces',
                  subtitle: 'How AI Marketplaces are Matching Job-Ready Talent with Employers',
                  desc: 'Campus recruitment is high-stakes for both students and employers, but traditional methods are often inefficient and biased. AI-powered hiring marketplaces are changing the model.',
                  image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 4,
                  tag: "THE SKILL DIGEST",
                  title: "From Workforce to Skillforce",
                  slug: 'from-workforce-to-skillforce-ai-transformation',
                  subtitle: 'How AI is Driving the Next Wave of Talent Transformation',
                  desc: 'Automation, AI, and digital transformation are reshaping roles across industries. The next frontier is a skillforce built on continuous learning and adaptability.',
                  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  id: 5,
                  tag: "THE SKILL DIGEST",
                  title: "AI Hackathons as Innovation Labs",
                  slug: 'ai-hackathons-new-innovation-labs',
                  subtitle: 'Crowdsourcing the Future of Tech',
                  desc: 'Innovation is moving from closed R&D teams to open hackathon ecosystems where coders, builders, and domain experts co-create high-impact solutions rapidly.',
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSkillDigestArticle(card.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openSkillDigestArticle(card.slug);
                    }
                  }}
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

                    {card.subtitle && (
                      <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#374151] mb-4">
                        {card.subtitle}
                      </p>
                    )}
                    
                    <div className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-4">
                      <ExpandableText
                        text={card.desc}
                        limit={190}
                        forceReadMore={true}
                        onReadMore={() => openSkillDigestArticle(card.slug)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'AI Talent Research Hub' && (
            <div className="flex flex-wrap gap-8">
              {aiTalentResearchHubCards.map((card) => (
                <div 
                  key={card.id} 
                  onClick={() => openResearchHubArticle(card.slug)}
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1 cursor-pointer"
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
                    
                    <div className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6">
                      <ExpandableText text={card.desc} forceReadMore={true} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'The Skill Unplugged Podcast Series (3R )' && (
            <div className="flex flex-wrap gap-8">
              {skillUnpluggedEpisodes.map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSkillUnpluggedEpisode(card.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openSkillUnpluggedEpisode(card.slug);
                    }
                  }}
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

                    <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#374151] mb-4">
                      {card.category}
                    </p>
                    
                    <div className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6">
                      <ExpandableText
                        text={card.desc}
                        limit={170}
                        forceReadMore={true}
                        onReadMore={() => openSkillUnpluggedEpisode(card.slug)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Skillzza Live' && (
            <div className="flex flex-wrap gap-8">
              {skillzzaLiveSessions.map((card) => (
                <div 
                  key={card.id} 
                  className="insight-card group flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[450px] lg:max-w-none bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-400 border border-[#F3F4F6] relative top-0 hover:-top-1 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openSkillzzaLiveSession(card.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openSkillzzaLiveSession(card.slug);
                    }
                  }}
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

                    <p className="font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[1.5] text-[#374151] mb-4">
                      {card.category}
                    </p>
                    
                    <div className="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[1.6] text-[#475569] mb-6">
                      <ExpandableText
                        text={card.desc}
                        limit={170}
                        forceReadMore={true}
                        onReadMore={() => openSkillzzaLiveSession(card.slug)}
                      />
                    </div>
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

        .insight-three-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: calc(1.6em * 3);
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
