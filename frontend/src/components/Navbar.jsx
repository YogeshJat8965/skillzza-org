import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import {
  Target, Globe, Handshake, UserCheck, Bot, BrainCircuit, Leaf, PaintBucket,
  Zap, Rocket, GraduationCap, ShieldAlert, BookOpen, PenTool, Microscope,
  Mic, Activity, BarChart3, Compass, Settings, Layers, Route, Briefcase,
  FileText, School, Building, Hexagon, Gauge, Lightbulb, Users, MessageSquare, BookA, Clock
} from 'lucide-react';
import { getAssetPath, getRoutePath } from '../utils/assets';
import { aiTalentResearchHubCards } from '../data/aiTalentResearchHubCards';
import { skillUnpluggedEpisodes } from '../data/skillUnpluggedEpisodes';
import { skillzzaLiveSessions } from '../data/skillzzaLiveSessions';
import platformImg1 from '../assets/card grid/image 1.png';
import platformImg2 from '../assets/card grid/image 2.png';
import platformImg3 from '../assets/card grid/image 3.png';
import platformImg4 from '../assets/card grid/image 4.png';
import platformImg5 from '../assets/card grid/image 5.png';
import platformImg6 from '../assets/card grid/image 6.png';
import sot1Img from '../assets/card grid/School of Technology/sot1.png';
import sot2Img from '../assets/card grid/School of Technology/sot2.png';
import sot3Img from '../assets/card grid/School of Technology/sot3.png';
import sot4Img from '../assets/card grid/School of Technology/sot4.png';


// K-12 Dropdown images
import k12Img1 from '../assets/card grid/K-12/1.png';
import k12Img2 from '../assets/card grid/K-12/2.png';
import k12Img3 from '../assets/card grid/K-12/3.png';
import k12Img4 from '../assets/card grid/K-12/4.png';
import k12Img5 from '../assets/card grid/K-12/5.png';
import k12Img6 from '../assets/card grid/K-12/6.png';
import insightsAgentic1 from '../assets/card grid/insights/1agentic.png';
import insightsAgentic2 from '../assets/card grid/insights/2agentic.png';
import insightsPodcast1 from '../assets/card grid/insights/1podcast.png';
import insightsPodcast2 from '../assets/card grid/insights/2podcast.png';
import insightsLive1 from '../assets/card grid/insights/1skillzzaLive.png';
import insightsLive2 from '../assets/card grid/insights/2skillzzaLive.png';
import insightsTalent1 from '../assets/card grid/insights/1researchhub.png';
import insightsTalent2 from '../assets/card grid/insights/2researchhub.png';
import insightsBlueprint1 from '../assets/card grid/insights/1skillBlueprint.png';
import insightsBlueprint2 from '../assets/card grid/insights/2skillBlueprint.png';
import insightsDigest1 from '../assets/card grid/insights/1skillzzaDigest.png';
import insightsDigest2 from '../assets/card grid/insights/2skillzzaDigest.png';

/* ═══════════════════════════════════════════════════════════════
   NAV DATA - enriched with gradient icons, descriptions, pills
   All routes remain identical to the original navbar
═══════════════════════════════════════════════════════════════ */

const navItems = [
  {
    name: 'Platform',
    layout: 'platform-tabs',
    width: 1020,
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    bottomCta: {
      text: 'Start your free skill assessment discover your strengths in under 10 minutes.',
      // sub: '',
      link: '/product/potential-meter',
    },
    tabs: [
      {
        name: 'The Potential Meter',
        subtitle: 'AI skill assessment engine',
        link: '/product/potential-meter',
        icon: <Gauge size={22} strokeWidth={2} />,
        heading: 'Discover your true potential with',
        headingHighlight: 'AI-powered assessments.',
        description: 'Our intelligent assessment engine maps your skills, strengths, and growth areas to help you make better career decisions.',
        bullets: [
          'Identify your top skills and strengths',
          'Benchmark your potential against industry standards',
          'Personalized insights for your growth journey',
        ],
        ctaText: 'Assess Your Potential',
        ctaLink: null,
        illustrationId: 'potential-meter',
      },
      {
        name: 'Talent Twin',
        subtitle: 'Job simulations',
        link: '/product/talent-twin',
        icon: <Briefcase size={22} strokeWidth={2} />,
        heading: 'Practice real roles.',
        headingHighlight: 'Build real confidence.',
        description: 'Our job simulations platform lets you experience real-world roles, solve industry challenges, and get AI-powered feedback to improve.',
        bullets: [
          'Simulate real job roles and tasks',
          'Get AI feedback on your performance',
          'Improve with role-specific recommendations',
        ],
        ctaText: 'Explore Simulations',
        ctaLink: null,
        illustrationId: 'xperience-platform',
      },
      {
        name: 'AI HackNex',
        subtitle: 'AI hackathons',
        link: '/product/ai-hacknex',
        icon: <BookA size={22} strokeWidth={2} />,
        heading: 'Compete. Build. Innovate.',
        headingHighlight: 'All with AI HackNex.',
        description: 'Join AI-powered hackathons, solve real-world challenges, and showcase your skills to top companies and opportunities.',
        bullets: [
          'Participate in AI-powered hackathons',
          'Solve real-world problems',
          'Earn recognition and unlock opportunities',
        ],
        ctaText: 'Explore Hackathons',
        ctaLink: null,
        illustrationId: 'ai-hacknex',
      },


      {
        name: 'Hire Twin',
        subtitle: 'Campus hiring marketplace',
        link: '/product/hire-twin',
        icon: <Users size={22} strokeWidth={2} />,
        heading: 'Connecting talent.',
        headingHighlight: 'Creating opportunities.',
        description: 'Hire Twinis your campus hiring marketplace that connects students with top companies and the right opportunities.',
        bullets: [
          'Discover verified job & internship opportunities',
          'Connect with top recruiters',
          'Stand out and get hired',
        ],
        ctaText: 'Explore Opportunities',
        ctaLink: null,
        illustrationId: 'Hire Twin',
      },
      {
        name: 'Skillzza Persona',
        subtitle: 'AI roleplay simulator',
        link: '/explore/skillzza-persona',
        icon: <MessageSquare size={22} strokeWidth={2} />,
        heading: 'Practice like real.',
        headingHighlight: 'Prepare for your AI interview.',
        description: 'Skillzza Persona is your AI agent that simulates real interviews, provides smart feedback, and helps you improve with every practice.',
        bullets: [
          'AI agent that conducts real interview simulations',
          'Instant, personalized feedback and improvement tips',
          'Boost confidence and ace your next interview',
        ],
        ctaText: 'Start Roleplay',
        ctaLink: null,
        illustrationId: 'skillzza-persona',
      },
      {
        name: 'Talent Intelligence',
        subtitle: 'Talent insights engine',
        link: '/product/talent-intelligence',
        icon: <Lightbulb size={22} strokeWidth={2} />,
        heading: 'Unlock data-driven',
        headingHighlight: 'Talent insights. Stay ahead always.',
        description: 'Our talent intelligence engine analyzes skills, trends, and market data to help you make smarter learning and career decisions.',
        bullets: [
          'Discover in-demand skills and emerging trends',
          'Compare your skills with top performers',
          'Make smarter career and learning choices',
        ],
        ctaText: 'Explore Insights',
        ctaLink: null,
        illustrationId: 'talent-intelligence',
      },
    ],
  },
  /* NEW */
  /*
  {
    name: 'Agentic AI',
    layout: 'agentic-ai',
    width: 820,
    eyebrow: 'Agentic AI - autonomous skill & talent intelligence',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    badge: 'New',
    agentFlow: ['Assess', 'Simulate', 'Coach', 'Match', 'Hire', 'Upskill Loop'],
    learnerAgents: [
      { name: 'Career Navigator Agent', desc: 'Proactively maps your skill gaps against live job market signals.', icon: <Bot size={24} color="#8947B3" strokeWidth={1.5} />, pill: 'Agent', pillColor: 'red' },
      { name: 'AI Learning Coach', desc: 'Personalised micro-learning paths, adapted in real time.', icon: <BrainCircuit size={24} color="#BD1723" strokeWidth={1.5} />, pill: 'Adaptive', pillColor: 'purple' },
      { name: 'Interview Simulation Agent', desc: 'Live AI interviewer with instant feedback and scoring.', icon: <Target size={24} color="#BD1723" strokeWidth={1.5} />, pill: 'Real-time', pillColor: 'red' },
      { name: 'Portfolio Builder Agent', desc: 'Auto-generates a verified portfolio from simulations and projects.', icon: <FileText size={24} color="#8947B3" strokeWidth={1.5} />, pill: 'New', pillColor: 'purple' },
    ],
    enterpriseAgents: [
      { name: 'AgentMatch Recruiter', desc: 'Autonomous screening, ranking and shortlisting at scale.', icon: <Settings size={24} color="#BD1723" strokeWidth={1.5} />, pill: 'Agentic', pillColor: 'red' },
      { name: 'Workforce Intelligence Agent', desc: 'Real-time skill mapping across departments and campuses.', icon: <Microscope size={24} color="#BD1723" strokeWidth={1.5} />, pill: 'Beta', pillColor: 'purple' },
      { name: 'Multi-Agent Talent Orchestrator', desc: 'Coordinates assess → match → hire → upskill as one agentic flow.', icon: <Globe size={24} color="#8947B3" strokeWidth={1.5} />, pill: 'Soon', pillColor: 'red' },
      { name: 'Skill Market Pulse', desc: 'Live labour market signal agent - trends, demand spikes, salary shifts.', icon: <Hexagon size={24} color="#8947B3" strokeWidth={1.5} />, pill: 'Live', pillColor: 'purple' },
    ],
  },
  */
  {
    name: 'K-12',
    layout: 'k12-Vedhya',
    width: 1120,
    eyebrow: 'SkillzzaK-12',
    studioLink: 'https://cognifyai.skillzza.com/',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    items: [
      { name: 'Skill Studio', link: 'https://skillzza-club.vercel.app/', desc: 'Immersive future skills programs focused on AI, creativity, coding, and innovation.', imagePos: 'left' },
      { name: 'Virtual Internship', link: 'https://cognifyai.skillzza.com/', desc: 'Real-world AI coding and deeptech internship simulations designed for school students aged 13-18.', imagePos: 'left' },
      { name: 'AI Playground', link: 'https://cognifyai.skillzza.com/#', desc: 'An interactive innovation hub for exploring AI tools, creativity, and emerging technologies.', imagePos: 'left' },
      { name: 'Vedya AI', link: 'https://cognifyai.skillzza.com/', desc: 'AI Co-Pilot built exclusively for K-12 learning ecosystems.', imagePos: 'left' },
      { name: 'Immersive Learning for Teachers', link: 'https://cognifyai.skillzza.com/for-tutor.html', desc: 'Empowering educators with practical AI skills and modern digital pedagogy.', imagePos: 'left' },
      { name: 'Cognitive Computing for Maturity Models', link: 'https://cognifyai.skillzza.com/for-school.html', desc: 'A strategic framework to assess and accelerate AI readiness in schools.', imagePos: 'left' },
    ],
  },
  {
    name: 'School of Technology',
    layout: 'image-card-grid',
    width: 960,
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    items: [
      {
        titleLines: ['School of AI & Quantum Intelligence'],
        image: sot1Img,
        link: null,
      },
      {
        titleLines: ['Global School of Sustainability & Climate Action'],
        image: sot2Img,
        link: 'https://globalschoolofsustainability.com/',
      },
      {
        titleLines: ['Centre of Digital & Design Excellence'],
        image: sot3Img,
        link: null,
      },
      {
        titleLines: ['Institute of Aerial Intelligence'],
        image: sot4Img,
        link: null,
      },
    ],
  },
  {
    name: 'Job Simulation',
    link: '/explore/job-simulations',
    isDirectLink: true,
  },
  {
    name: 'Insights',
    layout: 'insights-split',
    width: 1020,
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    items: [
      {
        name: 'Skill Blueprint',
        link: '/insights/skill-blueprint',
        desc: 'Real-world success stories in skill development',
        iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsBlueprint1,
          insightsBlueprint2,
        ],
      },
      {
        name: 'The Skillzza Digest',
        link: '/insights/skill-digest',
        desc: 'Insights, trends & game-changers shaping future skills',
        iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsDigest1,
          insightsDigest2,
        ],
      },
      {
        name: 'AI Talent Research Hub',
        link: '/insights/ai-talent-research-hub',
        desc: 'Reports & whitepapers on AI & workforce transformation',
        iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsTalent1,
          insightsTalent2,
        ],
      },
      {
        name: 'Skill Unplugged Podcast',
        link: '/insights/skill-unplugged-podcast',
        desc: 'Raw, Real & Revolutionary talks on the future of skills',
        iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsPodcast1,
          insightsPodcast2,
        ],
      },
      {
        name: 'Skillzza Live',
        link: '/insights/skillzza-live',
        desc: 'Interactive sessions bringing learning to life',
        iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsLive1,
          insightsLive2,
        ],
      },
      {
        name: 'Agentic Workforce Index 2026',
        link: null,
        desc: 'Annual report on AI agent adoption across industries',
        iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)',
        iconShadow: '0 4px 12px rgba(189,23,35,0.12)',
        sideImages: [
          insightsAgentic1,
          insightsAgentic2,
        ],
      },
    ],
  },
  {
    name: 'Company',
    layout: 'company-mega',
    width: 960,
    companyEyebrow: 'About Skillzza',
    servicesEyebrow: 'Services & Consulting',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    cta: {
      text: 'Partner with Skillzza',
      sub: 'universities, enterprises and governments building future-ready talent.',
      link: '/company/partnerships',
    },
    companyItems: [
      { name: 'About Us', link: '/company/about', desc: 'Our story, mission & vision', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Our Methodology', link: '/company/methodology', desc: 'How we build skill frameworks', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'What We Do', link: '/company/what-we-do', desc: 'Products, programmes & impact', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Our Pathway', link: '/company/pathway', desc: 'Roadmap for learners & partners', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'Partner Collaboration', link: '/company/partnerships', desc: 'Universities, enterprises, government & CSR partnerships', span: 2, iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Careers at Skillzza', link: null, desc: 'Join the team building the future of skills', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'Press & Media', link: null, desc: 'News, features & brand resources', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Responsible AI', link: '/company/responsible-ai', desc: 'Our commitment to ethical AI', span: 2, iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
    ],
    serviceItems: [
      { name: 'Institution Transformation', desc: 'Curriculum redesign & AI integration for universities.', link: '/company/partnerships#education' },
      { name: 'Enterprise Skill Audit', desc: 'Workforce gap analysis & 90-day upskilling roadmap.', link: '/company/partnerships#corporate' },
      { name: 'Govt & CSR Programmes', desc: 'National skill missions & youth employment schemes.', link: '/company/partnerships#government' },
      { name: 'Talent Intelligence Reports', desc: 'Workforce analytics & sector skill signals.', link: '/company/partnerships#partner' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PILL COLOUR PALETTE - vibrant with gradient-like feel
═══════════════════════════════════════════════════════════════ */

const pillColors = {
  red: { bg: 'linear-gradient(135deg, #fef2f2, #fee2e2)', color: '#BD1723', border: 'rgba(189,23,35,0.20)' },
  teal: { bg: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)', color: '#0d9488', border: 'rgba(20,184,166,0.20)' },
  blue: { bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)', color: '#2563eb', border: 'rgba(59,130,246,0.20)' },
  orange: { bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)', color: '#d97706', border: 'rgba(245,158,11,0.20)' },
  pink: { bg: 'linear-gradient(135deg, #fdf2f8, #fce7f3)', color: '#db2777', border: 'rgba(236,72,153,0.20)' },
  green: { bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', color: '#16a34a', border: 'rgba(34,197,94,0.20)' },
  purple: { bg: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', color: '#8947B3', border: 'rgba(137,71,179,0.20)' },
};

/* ───────────────────────────────────────────────────────────────
   Pill - vibrant gradient badge
─────────────────────────────────────────────────────────────── */

const Pill = ({ text, color = 'red' }) => {
  const c = pillColors[color] || pillColors.red;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: 20,
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        marginTop: 10,
        letterSpacing: 0.3,
        textTransform: 'uppercase',
      }}
    >
      {text}
    </span>
  );
};

/* ───────────────────────────────────────────────────────────────
   Eyebrow - premium section header with gradient accent line
─────────────────────────────────────────────────────────────── */

const Eyebrow = ({ text, dotColor, gradient }) => (
  <div
    style={{
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      marginBottom: 18,
      padding: '12px 16px',
      background: 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)',
      borderRadius: 10,
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative',
    }}
  >
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: gradient || dotColor || '#BD1723',
        flexShrink: 0,
        boxShadow: `0 0 8px ${dotColor || '#BD1723'}40`,
      }}
    />
    <span
      style={{
        color: '#0f172a',
        letterSpacing: 1.5,
        fontWeight: 800,
      }}
    >
      {text}
    </span>
  </div>
);

/* ───────────────────────────────────────────────────────────────
   CtaBar - gradient CTA strip
─────────────────────────────────────────────────────────────── */
const CtaBar = ({ cta, gradient, onClose }) => {
  const [hovered, setHovered] = useState(false);

  if (cta.secondary) {
    const ctaButtons = [
      { ...cta, icon: '→' },
      { ...cta.secondary, icon: '↗' },
    ];

    return (
      <div
        style={{
          marginTop: 18,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
        }}
      >
        {ctaButtons.map((btn) => (
          <a
            key={btn.text}
            href={getRoutePath(btn.link)}
            onClick={() => onClose?.()}
            className="sz-dual-cta"
            style={{
              background: 'linear-gradient(120deg, #ffffff 0%, #fef2f2 35%, #f3e8ff 70%, #ffffff 100%)',
              backgroundSize: '220% 220%',
              animation: 'szCtaGradientShift 5.5s ease-in-out infinite',
              border: '1px solid #f1f5f9',
              borderRadius: 14,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
              textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.borderColor = 'rgba(189,23,35,0.25)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(189,23,35,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#f1f5f9';
              e.currentTarget.style.boxShadow = '0 1px 4px rgba(15,23,42,0.04)';
            }}
          >
            <div
              className="sz-dual-cta-shimmer"
              style={{
                position: 'absolute',
                top: 0,
                left: '-60%',
                width: '52%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.52), transparent)',
                transform: 'skewX(-18deg)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ minWidth: 0, position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 15, color: '#0f172a', fontWeight: 700, lineHeight: 1.3 }}>{btn.text}</div>
              <div style={{ fontSize: 13.5, color: '#475569', marginTop: 3, lineHeight: 1.35 }}>{btn.sub}</div>
            </div>
            <div
              className="sz-dual-cta-icon"
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: gradient || 'linear-gradient(135deg, #BD1723, #8947B3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 16,
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(189,23,35,0.20)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <span
                className="sz-dual-cta-spark"
                style={{
                  position: 'absolute',
                  top: -4,
                  right: -3,
                  fontSize: 12,
                  color: '#fde68a',
                  textShadow: '0 0 8px rgba(253,230,138,0.9)',
                }}
              >
                ✦
              </span>
              <span className="sz-dual-cta-arrow">➜</span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <a
      href={getRoutePath(cta.link)}
      onClick={() => onClose?.()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: 18,
        background: hovered
          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'
          : '#f4f5f7',
        border: `1px solid ${hovered ? 'rgba(189,23,35,0.25)' : '#f1f5f9'}`,
        borderRadius: 14,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hovered ? '0 4px 16px rgba(189,23,35,0.06)' : 'none',
      }}
    >
      <div style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.5 }}>
        <strong style={{ color: '#1e293b', fontWeight: 600 }}>{cta.text}</strong> {cta.sub}
      </div>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: gradient || 'linear-gradient(135deg, #BD1723, #8947B3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 16,
          flexShrink: 0,
          marginLeft: 14,
          boxShadow: '0 2px 8px rgba(189,23,35,0.20)',
          transition: 'transform 0.25s ease',
          transform: hovered ? 'translateX(2px)' : 'translateX(0)',
        }}
      >
        →
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PREMIUM ICON - gradient container with shadow
═══════════════════════════════════════════════════════════════ */

const GradientIcon = ({ icon, gradient, shadow, size = 44, fontSize = 20 }) => (
  <div
    className="sz-nav-icon"
    style={{
      width: size,
      height: size,
      borderRadius: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize,
      background: gradient || 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
      boxShadow: shadow || '0 2px 8px rgba(0,0,0,0.06)',
      flexShrink: 0,
      transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease',
    }}
  >
    {icon}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   CARD GRID DROPDOWN - Products, Use Cases, Explore
═══════════════════════════════════════════════════════════════ */

const CardGridDropdown = ({ navItem, onComingSoon }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${navItem.columns}, 1fr)`,
        gap: 10,
      }}
    >
      {navItem.items.map((item, i) => (
        <CardItem key={item.name} item={item} index={i} onComingSoon={onComingSoon} />
      ))}
    </div>
    {navItem.cta && <CtaBar cta={navItem.cta} gradient={navItem.accentGradient} />}
  </div>
);

const CardItem = ({ item, index, onComingSoon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={!item.link ? (e) => {
        e.preventDefault();
        onComingSoon?.(item.name);
      } : undefined}
      className="sz-card-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        cursor: item.link ? 'pointer' : 'default',
        background: hovered
          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'
          : '#f4f5f7',
        border: '1px solid rgba(15, 23, 42, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: 14,
        padding: '14px 14px 12px',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        display: 'block',
        transform: hovered ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: 'none',
        overflow: 'hidden',
        animationDelay: `${index * 40}ms`,
      }}
    >
      {/* Shimmer - fixed geometry so white center stays off-screen when idle */}
      <div
        className={hovered ? 'sz-shimmer-active' : ''}
        style={{
          position: 'absolute',
          top: 0, left: '-75%',
          width: '65%', height: '100%',
          zIndex: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)',
          pointerEvents: 'none',
          borderRadius: 16,
          transform: 'skewX(-8deg)',
        }}
      />

      {/* All real content above overlays */}
      <div style={{ position: 'relative' }}>
        {item.icon && (
          <GradientIcon
            icon={item.icon}
            gradient={item.iconGradient}
            shadow={hovered ? item.iconShadow : 'none'}
            size={36}
            fontSize={17}
          />
        )}
        <div
          style={{
            fontSize: item.icon ? 13 : 14.5,
            fontWeight: 800,
            color: '#0f172a',
            marginTop: item.icon ? 9 : 0,
            marginBottom: 7,
            lineHeight: 1.25,
            letterSpacing: -0.2,
            transition: 'all 0.2s',
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: item.icon ? 11.5 : 12.5,
            color: '#4b6280',
            lineHeight: 1.55,
            letterSpacing: 0,
            transition: 'all 0.2s',
          }}
        >
          {item.desc}
        </div>
        {item.pill && <Pill text={item.pill} color={item.pillColor} />}
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   LIST ROWS DROPDOWN - School of Technology, Insights
═══════════════════════════════════════════════════════════════ */

const ListRowsDropdown = ({ navItem, onComingSoon }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {navItem.items.map((item, i) => (
          <ListRowItem key={item.name} item={item} index={i} onComingSoon={onComingSoon} />
        ))}
      </div>
    </div>
  );
};

const ListRowItem = ({ item, index, onComingSoon }) => {
  const [hovered, setHovered] = useState(false);
  const glowRaw = item.iconShadow?.match(/rgba\([^)]+\)/)?.[0] || 'rgba(99,102,241,0.15)';
  const bgWash = glowRaw.replace(/,[\s]*[\d.]+\)/, ',0.05)');
  const glowMid = glowRaw.replace(/,[\s]*[\d.]+\)/, ',0.18)');
  const borderGradient = item.iconGradient || 'linear-gradient(135deg,#BD1723,#8947B3)';
  const isExternal = item.link?.startsWith('http');

  return (
    <a
      href={item.link ? (isExternal ? item.link : getRoutePath(item.link)) : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={!item.link ? (e) => {
        e.preventDefault();
        onComingSoon?.(item.name);
      } : undefined}
      className="sz-list-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '12px 15px',
        borderRadius: 13,
        border: '1px solid rgba(15, 23, 42, 0.05)',
        background: hovered
          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'
          : '#f4f5f7',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.28s cubic-bezier(0.34,1.2,0.64,1)',
        textDecoration: 'none',
        position: 'relative',
        transform: hovered ? 'translateX(5px)' : 'translateX(0)',
        boxShadow: 'none',
        animationDelay: `${index * 30}ms`,
      }}
    >
      {/* Shimmer - fixed geometry */}
      <div
        className={hovered ? 'sz-shimmer-active' : ''}
        style={{
          position: 'absolute',
          top: 0, left: '-75%',
          width: '60%', height: '100%',
          zIndex: 0,
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)',
          pointerEvents: 'none',
          transform: 'skewX(-8deg)',
          borderRadius: 13,
        }}
      />

      {item.icon && (
        <GradientIcon
          icon={item.icon}
          gradient={item.iconGradient}
          shadow={hovered ? `0 6px 20px ${glowMid}` : 'none'}
          size={38}
          fontSize={17}
        />
      )}

      <div style={{ flex: 1, minWidth: 0, paddingLeft: item.icon ? 0 : 6 }}>
        <div style={{
          fontSize: item.icon ? 14 : 15, fontWeight: 800,
          color: hovered ? '#0f172a' : '#1e293b',
          letterSpacing: -0.2,
          transition: 'color 0.2s ease',
        }}>
          {item.name}
        </div>
        <div style={{ fontSize: item.icon ? 12 : 13, color: hovered ? '#374f6b' : '#5a7394', lineHeight: 1.6, marginTop: 4, transition: 'color 0.2s ease' }}>
          {item.desc}
        </div>
      </div>

      {item.pill ? (
        <div style={{ flexShrink: 0 }}>
          <Pill text={item.pill} color={item.pillColor} />
        </div>
      ) : (
        <div style={{
          color: hovered ? '#334155' : '#cbd5e1',
          fontSize: 17, flexShrink: 0,
          transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'translate(2px,-2px) rotate(-45deg)' : 'translate(0,0) rotate(0deg)',
          fontWeight: 600,
        }}>↗</div>
      )}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   IMAGE CARD GRID DROPDOWN - School of Technology
═══════════════════════════════════════════════════════════════ */

const ImageCardGridDropdown = ({ navItem, onComingSoon }) => (
  <div style={{ padding: '8px 24px 24px' }}>
    <div style={{ textAlign: 'center', marginBottom: 28 }}>
      {/* <div style={{ color: '#4543D9', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        SCHOOL OF TECHNOLOGY
      </div> */}
      <h3 style={{ color: '#0F1114', fontSize: 26, fontWeight: 800, marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Where Technology Meets Purpose
      </h3>
      <p style={{ color: '#4B5563', fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
        Four transformative schools. One mission – shaping a smarter, sustainable & innovative tomorrow.
      </p>
    </div>
    <style>{`
      @keyframes szCardRise {
        0% { opacity: 0; transform: translateY(12px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
    `}</style>
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: 20,
      }}
    >
      {navItem.items.map((item, i) => (
        <ImageCardItem key={`${item.titleLines?.join('-')}-${i}`} item={item} index={i} onComingSoon={onComingSoon} />
      ))}
    </div>
  </div>
);

const ImageCardItem = ({ item, index, onComingSoon }) => {
  const [hovered, setHovered] = useState(false);
  const isExternal = item.link?.startsWith('http');
  const titleStr = item.titleLines?.join(' ') || 'School of Technology';

  let num, title, desc, linkColor, blankSide;
  if (titleStr.includes('AI & Quantum')) {
    num = '01'; title = 'School of AI &\nQuantum Intelligence'; desc = 'Exploring the frontiers of AI and quantum computing to solve complex global challenges and shape the future.'; linkColor = '#6366f1'; blankSide = 'left';
  } else if (titleStr.includes('Sustainability')) {
    num = '02'; title = 'Global School of\nSustainability &\nClimate Action'; desc = 'Empowering changemakers and innovators to build a sustainable planet for future generations.'; linkColor = '#22c55e'; blankSide = 'right';
  } else if (titleStr.includes('Digital & Design')) {
    num = '03'; title = 'Centre of Digital &\nDesign Excellence'; desc = 'Nurturing creativity and digital innovation through design thinking, future skills and immersive learning.'; linkColor = '#f97316'; blankSide = 'right';
  } else {
    num = '04'; title = 'Institute of\nAerial Intelligence'; desc = 'Advancing the future of drones, robotics and autonomous systems through research and real-world experiential learning.'; linkColor = '#3b82f6'; blankSide = 'right';
  }

  return (
    <a
      href={item.link ? (isExternal ? item.link : getRoutePath(item.link)) : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={!item.link ? (e) => {
        e.preventDefault();
        onComingSoon?.(titleStr);
      } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        cursor: item.link ? 'pointer' : 'default',
        textDecoration: 'none',
        transition: 'all 0.35s ease',
        overflow: 'hidden',
        animation: 'szCardRise 520ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        animationDelay: `${index * 80}ms`,
        opacity: 0,
      }}
    >
      <img
        src={item.image}
        alt={titleStr}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        [blankSide]: 0,
        width: '52%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: blankSide === 'left' ? '10px 32px 10px 24px' : (titleStr.includes('Sustainability') || titleStr.includes('Aerial') ? '10px 12px 10px 60px' : '10px 24px 10px 48px'),
        textAlign: 'left',
      }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: linkColor, marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{num}</div>
        <div style={{ fontSize: 17, fontWeight: 800, color: '#0F1114', marginBottom: 6, lineHeight: 1.15, whiteSpace: 'pre-wrap', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{title}</div>
        <div style={{ fontSize: 11, color: '#374151', marginBottom: 10, lineHeight: 1.4, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{desc}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: linkColor, fontSize: 11, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          EXPLORE SCHOOL
          <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: linkColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s cubic-bezier(0.34,1.2,0.64,1)', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   INSIGHTS SPLIT DROPDOWN - list left, images right
═══════════════════════════════════════════════════════════════ */

const InsightsSplitDropdown = ({ navItem, onComingSoon }) => {
  return (
    <div>
      <style>{`
        @keyframes szInsightsRise {
          0% { opacity: 0; transform: translateY(12px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 16,
        }}
      >
        {navItem.items.map((item, i) => (
          <InsightsGridCard key={item.name} item={item} index={i} onComingSoon={onComingSoon} />
        ))}
      </div>
    </div>
  );
};

const InsightsGridCard = ({ item, index, onComingSoon }) => {
  const [hovered, setHovered] = useState(false);
  const isExternal = item.link?.startsWith('http');

  return (
    <a
      href={item.link ? (isExternal ? item.link : getRoutePath(item.link)) : undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={!item.link ? (e) => {
        e.preventDefault();
        onComingSoon?.(item.name);
      } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        padding: 20,
        background: '#ffffff',
        border: '1px solid #f1f5f9',
        boxShadow: hovered ? '0 12px 24px rgba(15, 23, 42, 0.08)' : '0 4px 6px rgba(15, 23, 42, 0.02)',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        animation: 'szInsightsRise 400ms ease forwards',
        animationDelay: `${index * 50}ms`,
        opacity: 0,
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 6, fontFamily: 'Inter, system-ui, sans-serif' }}>
        {item.name}
      </div>
      <div style={{ fontSize: 14, color: '#475569', marginBottom: 16, fontFamily: 'Inter, system-ui, sans-serif', minHeight: 36 }}>
        {item.desc}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, height: 110 }}>
        {item.sideImages && item.sideImages.map((img, i) => (
          <div key={i} style={{ flex: 1, borderRadius: 8, overflow: 'hidden' }}>
            <img
              src={img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
        ))}
      </div>

      <div style={{ fontSize: 15, fontWeight: 600, color: '#6D28D9', display: 'flex', alignItems: 'center', gap: 4 }}>
        Learn more <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   COMPACT GRID DROPDOWN - Company
═══════════════════════════════════════════════════════════════ */

const CompactGridDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${navItem.columns}, 1fr)`,
        gap: 12,
      }}
    >
      {navItem.items.map((item, i) => (
        <CompactItem key={item.name} item={item} index={i} />
      ))}
    </div>
  </div>
);

const CompactItem = ({ item, index, onClose }) => {
  const [hovered, setHovered] = useState(false);
  const glowRaw = item.iconGradient
    ? `rgba(${item.iconGradient.includes('fee2e2') ? '239,68,68' :
      item.iconGradient.includes('fef3c7') ? '245,158,11' :
        item.iconGradient.includes('dbeafe') ? '59,130,246' :
          item.iconGradient.includes('ccfbf1') ? '20,184,166' :
            item.iconGradient.includes('dcfce7') ? '34,197,94' :
              item.iconGradient.includes('f3e8ff') ? '168,85,247' : '99,102,241'},0.14)`
    : 'rgba(99,102,241,0.14)';

  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={(e) => {
        if (!item.link) {
          e.preventDefault();
          return;
        }
        onClose?.();
      }}
      className="sz-compact-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)'
          : '#f4f5f7',
        border: '1px solid rgba(15, 23, 42, 0.05)',
        borderRadius: 13,
        padding: '15px 17px',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)',
        textDecoration: 'none',
        display: 'flex', alignItems: 'flex-start', gap: 13,
        transform: hovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: 'none',
        ...(item.span ? { gridColumn: `span ${item.span}` } : {}),
        animationDelay: `${index * 30}ms`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        zIndex: 0,
        background: item.iconGradient || 'linear-gradient(135deg,#BD1723,#8947B3)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.28s ease',
        borderRadius: '13px 13px 0 0',
      }} />

      {/* Shimmer - fixed geometry */}
      <div
        className={hovered ? 'sz-shimmer-active' : ''}
        style={{
          position: 'absolute',
          top: 0, left: '-75%',
          width: '62%', height: '100%',
          zIndex: 0,
          background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)',
          pointerEvents: 'none', transform: 'skewX(-12deg)',
        }}
      />

      {/* Content - DOM-order + position:relative guarantees above z:0 absolutes */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 13 }}>

        {item.icon && (
          <div
            className="sz-nav-icon"
            style={{
              width: 28, height: 28, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15,
              background: item.iconGradient || '#f1f5f9',
              flexShrink: 0, marginTop: 1,
              transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
              boxShadow: 'none',
            }}
          >
            {item.icon}
          </div>
        )}
        <div style={{ marginLeft: item.icon ? 0 : 5 }}>
          <div style={{
            fontSize: item.icon ? 13.5 : 14.5, fontWeight: 800,
            color: hovered ? '#0f172a' : '#1a2332',
            letterSpacing: -0.2,
            transition: 'color 0.2s ease',
          }}>
            {item.name}
          </div>
          <div style={{
            fontSize: item.icon ? 11.5 : 12.5, color: hovered ? '#374f6b' : '#5a7394',
            marginTop: 4, lineHeight: 1.55,
            transition: 'color 0.2s ease',
          }}>
            {item.desc}
          </div>
        </div>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   AgenticAIDropdown - agent flow + two-column list
═══════════════════════════════════════════════════════════════ */

const AgenticAIDropdown = ({ navItem }) => {
  const pc = pillColors;
  const AgentRow = ({ agent }) => {
    const [h, setH] = useState(false);
    const pc = pillColors;
    return (
      <div
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          padding: '9px 12px', borderRadius: 10,
          border: '1px solid rgba(15, 23, 42, 0.05)',
          background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f4f5f7',
          transition: 'all 0.28s cubic-bezier(0.34,1.2,0.64,1)',
          transform: h ? 'translateX(4px) scale(1.01)' : 'translateX(0) scale(1)',
          boxShadow: 'none',
          cursor: 'default',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Left teal bar */}
        <div style={{
          position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 3, borderRadius: 3,
          background: 'linear-gradient(135deg,#00e5b0,#38d9f5)',
          opacity: h ? 1 : 0,
          transform: h ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'center',
          transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }} />
        <span style={{
          fontSize: 20, lineHeight: 1,
          display: 'inline-block',
          transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          transform: h ? 'scale(1.18) rotate(-6deg)' : 'scale(1) rotate(0deg)',
        }}>{agent.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: h ? '#065f46' : '#1e293b', transition: 'color 0.2s' }}>{agent.name}</span>
            {agent.pill && pc[agent.pillColor] && (
              <span style={{ fontSize: 12, fontWeight: 600, padding: '1px 7px', borderRadius: 20, ...pc[agent.pillColor] }}>{agent.pill}</span>
            )}
          </div>
          <div style={{ fontSize: 13.5, color: h ? '#374f6b' : '#5a7394', lineHeight: 1.45, transition: 'color 0.2s' }}>{agent.desc}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} badge={navItem.badge} />
      {/* Agent flow bar */}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
        border: '1px solid #d1fae5', borderRadius: 10,
        padding: '8px 14px', marginBottom: 18, flexWrap: 'wrap', gap: 4,
      }}>
        {navItem.agentFlow.map((step, i) => (
          <span key={step} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{
              fontSize: 13, fontWeight: 600, color: '#BD1723',
              padding: '2px 10px', borderRadius: 20,
              background: 'rgba(189,23,35,0.08)', border: '1px solid rgba(189,23,35,0.15)',
            }}>{step}</span>
            {i < navItem.agentFlow.length - 1 && (
              <span style={{ color: '#e4909a', fontSize: 14, fontWeight: 700 }}>→</span>
            )}
          </span>
        ))}
      </div>
      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Learner agents */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8 }}>
            AI Agents - Learner
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navItem.learnerAgents.map(a => <AgentRow key={a.name} agent={a} />)}
          </div>
        </div>
        {/* Enterprise agents */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8 }}>
            AI Agents - Enterprise & Campus
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navItem.enterpriseAgents.map(a => <AgentRow key={a.name} agent={a} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   K12VedhyaDropdown - banner header + 3-column card grid
═══════════════════════════════════════════════════════════════ */

const K12Header = ({ text }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 20px',
      background: '#f1f5f9',
      borderRadius: '12px',
      marginBottom: 20,
      width: '100%',
    }}
  >
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: '#fca5a5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#dc2626',
        }}
      />
    </div>
    <span
      style={{
        fontSize: '16.5px',
        fontWeight: 700,
        color: '#0f172a',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {text}
    </span>
  </div>
);

const K12VedhyaDropdown = ({ navItem, onClose }) => (
  <div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
      {navItem.items.map((item, i) => (
        <K12Card key={item.name} item={item} index={i} onClose={onClose} />
      ))}
    </div>
  </div>
);

const K12Card = ({ item, index, onClose }) => {
  const [h, setH] = useState(false);
  const isExternal = item.link?.startsWith('http');

  const cardImages = [k12Img1, k12Img2, k12Img3, k12Img4, k12Img5, k12Img6];
  const cardImage = cardImages[index] || k12Img1;
  const imgLeft = item.imagePos === 'left';
  const isItalic = false;

  const renderBadgeIcon = (pill) => {
    const sc = item.pillColor === 'red' ? '#BD1723' : '#8947B3';
    const props = { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: sc, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', style: { flexShrink: 0 } };
    if (pill === 'Flagship') return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    if (pill === 'Grades 6-12') return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>;
    if (pill === 'CPD certified') return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 11 2 2 4-4" /></svg>;
    if (pill === 'Assessment') return <svg {...props}><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6M9 16h6" /></svg>;
    if (pill === 'Bridge') return <svg {...props}><path d="M3 12h18M3 18h18M6 12v6M18 12v6M12 12v6M9 12v6M15 12v6" /></svg>;
    if (pill === 'New') return <svg {...props}><circle cx="12" cy="12" r="10" /><polygon points="12 8 13.5 11 16.5 11.5 14.25 13.5 15 16.5 12 15 9 16.5 9.75 13.5 7.5 11.5 10.5 11 12 8" /></svg>;
    return null;
  };

  const imageBlock = (
    <div style={{ width: '45%', minHeight: '100px', flexShrink: 0, overflow: 'hidden', position: 'relative', borderRadius: imgLeft ? '14px 0 0 14px' : '0 14px 14px 0', transform: 'translateZ(0)' }}>
      <img src={cardImage} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease', transform: h ? 'scale(1.06)' : 'scale(1)', backfaceVisibility: 'hidden', imageRendering: '-webkit-optimize-contrast' }} />
    </div>
  );

  const contentBlock = (
    <div style={{ flex: 1, padding: '14px 15px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
      <div>
        <div style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', lineHeight: 1.2, marginBottom: '6px', fontFamily: 'Inter, system-ui, sans-serif', fontStyle: isItalic ? 'italic' : 'normal' }}>
          {item.name}
        </div>
        <div style={{ fontSize: '13.5px', color: '#334155', lineHeight: 1.5, fontFamily: 'Inter, system-ui, sans-serif' }}>
          {item.desc}
        </div>
      </div>
      {item.pill && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
          {renderBadgeIcon(item.pill)}
          <span style={{ fontSize: '13px', fontWeight: 700, color: item.pillColor === 'red' ? '#BD1723' : '#8947B3', fontFamily: 'Inter, system-ui, sans-serif' }}>
            {item.pill}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <a
      href={item.link || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={(e) => { if (!item.link || item.link === '#') { e.preventDefault(); return; } onClose?.(); }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'stretch',
        background: '#ffffff',
        borderRadius: '14px',
        border: h ? '1px solid #cbd5e1' : '1px solid #e8edf3',
        textDecoration: 'none', overflow: 'hidden', position: 'relative',
        cursor: (item.link && item.link !== '#') ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: h ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: h ? '0 8px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.04)',
        minHeight: '160px',
      }}
    >
      {imgLeft ? <>{imageBlock}{contentBlock}</> : <>{contentBlock}{imageBlock}</>}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ServicesGridDropdown - 3×2 service card grid + CTA
═══════════════════════════════════════════════════════════════ */

const ServicesGridDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
      {navItem.items.map((item, i) => <SvcCard key={item.name} item={item} index={i} />)}
    </div>
    {navItem.cta && <CtaBar cta={navItem.cta} accentGradient={navItem.accentGradient} />}
  </div>
);

const SvcCard = ({ item, onClose }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={item.link || undefined}
      onClick={(e) => {
        if (!item.link) {
          e.preventDefault();
          return;
        }
        onClose?.();
      }}
      className="sz-svc-card"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '13px 13px 11px', borderRadius: 12,
        border: '1px solid rgba(15, 23, 42, 0.05)',
        background: h ? 'linear-gradient(135deg, #e4dafc 0%, #def1f7 50%, #daf4ef 100%)' : '#f4f5f7',
        textDecoration: 'none', overflow: 'hidden', position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)',
        transform: h ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: 'none',
      }}
    >
      {/* Shimmer - fixed geometry */}
      <div className={h ? 'sz-shimmer-active' : ''} style={{
        position: 'absolute', top: 0, left: '-75%',
        width: '62%', height: '100%', zIndex: 0,
        background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)',
        pointerEvents: 'none', transform: 'skewX(-12deg)',
      }} />
      {/* Content above overlays */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        {item.icon && (
          <span
            className="sz-svc-icon"
            style={{
              fontSize: 20, lineHeight: 1, flexShrink: 0,
              display: 'inline-block',
              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              transform: h ? 'scale(1.3) rotate(-8deg)' : 'scale(1) rotate(0)',
            }}
          >{item.icon}</span>
        )}
        <div style={{ marginLeft: item.icon ? 0 : 5 }}>
          <div style={{
            fontSize: item.icon ? 12.5 : 13.5, fontWeight: 800,
            color: h ? '#0f172a' : '#1e293b',
            marginBottom: 3, lineHeight: 1.2, transition: 'color 0.2s ease',
          }}>{item.name}</div>
          <div style={{
            fontSize: item.icon ? 11 : 12, color: h ? '#374f6b' : '#475569',
            lineHeight: 1.45, transition: 'color 0.2s ease',
          }}>{item.desc}</div>
        </div>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CompanyMegaDropdown
═══════════════════════════════════════════════════════════════ */

const CompanyLeftCard = ({ item, onClose }) => {
  const [h, setH] = useState(false);

  const bg = '#f3e8ff';
  const color = '#8947B3';

  let svg;
  switch (item.name) {
    case 'About Us': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="4" height="12" /><rect x="10" y="8" width="4" height="12" /><rect x="16" y="8" width="4" height="12" /><path d="M2 20h20" /><path d="M12 3 2 8h20Z" /></svg>; break;
    case 'Our Methodology': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>; break;
    case 'What We Do': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>; break;
    case 'Our Pathway': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></svg>; break;
    case 'Partner Collaboration': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3-6 6" /><path d="m14 10-2-2" /><path d="m12 12-2-2" /><path d="m10 14-2-2" /><path d="m8 16-2-2" /><path d="m6 18-2-2" /><path d="M4 20l-1 1" /><path d="m3 21 2 2" /><path d="M5 23l1-1" /></svg>; break;
    case 'Careers at Skillzza': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>; break;
    case 'Press & Media': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>; break;
    case 'Responsible AI': svg = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>; break;
  }

  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={(e) => {
        if (!item.link) { e.preventDefault(); return; }
        onClose?.();
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '14px 16px', borderRadius: 14,
        background: h ? 'linear-gradient(145deg, #ffffff 0%, #fcf7ff 100%)' : '#ffffff',
        border: h ? '1px solid #e9d5ff' : '1px solid #f1f5f9',
        boxShadow: h ? '0 10px 25px rgba(137, 71, 179, 0.08)' : 'none',
        textDecoration: 'none',
        gridColumn: item.span ? `span ${item.span}` : 'span 1',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        transform: h ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {svg}
      </div>
      <div>
        <div style={{ fontSize: 15.5, fontWeight: 700, color: '#0f172a', marginBottom: 1 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: '#475569' }}>{item.desc}</div>
      </div>
    </a>
  );
};

const CompanyRightCard = ({ item, onClose }) => {
  const [h, setH] = useState(false);

  const bg = '#f3e8ff';
  const color = '#8947B3';

  let svg;
  switch (item.name) {
    case 'Institution Transformation': svg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>; break;
    case 'Enterprise Skill Audit': svg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><circle cx="18" cy="18" r="3" /><line x1="20" y1="20" x2="22" y2="22" /></svg>; break;
    case 'Govt & CSR Programmes': svg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="4" height="12" /><rect x="10" y="8" width="4" height="12" /><rect x="16" y="8" width="4" height="12" /><path d="M2 20h20" /><path d="M12 3 2 8h20Z" /></svg>; break;
    case 'Talent Intelligence Reports': svg = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path d="M12 14v4" /><path d="M12 14h-4" /></svg>; break;
  }

  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={(e) => {
        if (!item.link) { e.preventDefault(); return; }
        onClose?.();
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '10px 14px', borderRadius: 12,
        background: h ? 'linear-gradient(145deg, #ffffff 0%, #fcf7ff 100%)' : '#ffffff',
        border: h ? '1px solid #e9d5ff' : '1px solid #f1f5f9',
        textDecoration: 'none',
        boxShadow: h ? '0 10px 25px rgba(137, 71, 179, 0.08)' : 'none',
        transition: 'all 0.3s',
        transform: h ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div style={{ width: 34, height: 34, borderRadius: 10, background: bg, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {svg}
      </div>
      <div>
        <div style={{ fontSize: 15.5, fontWeight: 700, color: '#0f172a', marginBottom: 1 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: '#475569' }}>{item.desc}</div>
      </div>
    </a>
  );
};

const CompanyMegaDropdown = ({ navItem, onClose }) => {
  const [hCta, setHCta] = useState(false);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) 1px minmax(0, 0.9fr)', gap: 18 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-between' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: '1fr', gap: 10 }}>
          {(navItem.companyItems || []).map((item, i) => (
            <CompanyLeftCard key={item.name} item={item} onClose={onClose} />
          ))}
        </div>
        {/* CTA Row directly in grid */}
        <a
          href={navItem.cta.link}
          onClick={() => onClose?.()}
          onMouseEnter={() => setHCta(true)}
          onMouseLeave={() => setHCta(false)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 18px', background: '#f8fafc', borderRadius: 14,
            border: '1px solid #f1f5f9', textDecoration: 'none',
            transition: 'all 0.3s',
            transform: hCta ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hCta ? '0 8px 16px rgba(15, 23, 42, 0.04)' : 'none',
            marginTop: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f3e8ff', color: '#8947B3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div style={{ fontSize: 15, color: '#0f172a' }}>
              <span style={{ fontWeight: 700 }}>{navItem.cta.text}</span> - <span style={{ color: '#475569' }}>{navItem.cta.sub}</span>
            </div>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #BD1723, #8947B3)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: hCta ? 'translateX(3px)' : 'translateX(0)' }}>
            →
          </div>
        </a>
      </div>

      {/* Decorative Separator Line */}
      <div style={{ background: '#f1f5f9', width: '1px', alignSelf: 'stretch' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {(navItem.serviceItems || []).map((item, i) => (
            <CompanyRightCard key={item.name} item={item} onClose={onClose} />
          ))}
        </div>

        {/* Assessment Ad Image */}
        <div style={{ display: 'flex', flex: 1, marginTop: 4, position: 'relative', minHeight: 200 }}>
          <img
            src={getAssetPath('/img/upskilling.webp')}
            alt="Company Feature"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 14, objectFit: 'contain', objectPosition: 'bottom' }}
          />
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   PLATFORM TABS DROPDOWN - Sidebar + Content + Illustration
   Matches the 6-tab reference design
   Enhanced with per-tab animations and animated circle backgrounds
═══════════════════════════════════════════════════════════════ */

/* ── Platform illustration images map ── */

const platformImageMap = {
  'potential-meter': platformImg1,
  'xperience-platform': platformImg2,
  'talent-intelligence': platformImg3,
  'ai-hacknex': platformImg4,
  'Hire Twin': platformImg5,
  'skillzza-persona': platformImg6,
};

/* ── Per-tab entrance animation names (each tab gets a unique animation) ── */
const tabAnimations = [
  'szImgSlideUp',       // Potential Meter: slide up + slight rotate
  'szImgZoomRotate',    // Talent Twin: zoom + rotate in
  'szImgFlipIn',        // Talent Intelligence: 3D flip in
  'szImgBounceScale',   // AI HackNex: bounce scale
  'szImgSwingIn',       // Hire Twin: swing from top
  'szImgElasticPop',    // Skillzza Persona: elastic pop
];

/* ── Per-tab accent colors for circle animations ── */
const tabCircleColors = [
  { ring1: 'rgba(124,58,237,0.18)', ring2: 'rgba(167,139,250,0.22)', ring3: 'rgba(139,92,246,0.12)', dot: '#a78bfa' },
  { ring1: 'rgba(79,70,229,0.18)', ring2: 'rgba(99,102,241,0.20)', ring3: 'rgba(129,140,248,0.12)', dot: '#818cf8' },
  { ring1: 'rgba(14,165,233,0.16)', ring2: 'rgba(56,189,248,0.20)', ring3: 'rgba(125,211,252,0.12)', dot: '#38bdf8' },
  { ring1: 'rgba(245,158,11,0.18)', ring2: 'rgba(251,191,36,0.22)', ring3: 'rgba(253,224,71,0.12)', dot: '#fbbf24' },
  { ring1: 'rgba(236,72,153,0.16)', ring2: 'rgba(244,114,182,0.20)', ring3: 'rgba(251,207,232,0.12)', dot: '#f472b6' },
  { ring1: 'rgba(16,185,129,0.18)', ring2: 'rgba(52,211,153,0.22)', ring3: 'rgba(110,231,183,0.12)', dot: '#34d399' },
];

/* ── PlatformTabsDropdown (main component) ── */

const PlatformTabsDropdown = ({ navItem }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [imgKey, setImgKey] = useState(0); // forces re-mount to replay animation
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevTab = useRef(0);

  const switchTab = (index) => {
    if (index === activeTab) return;
    setIsTransitioning(true);
    prevTab.current = activeTab;
    setTimeout(() => {
      setActiveTab(index);
      setImgKey(k => k + 1);
      setIsTransitioning(false);
    }, 120);
  };

  const tab = navItem.tabs[activeTab];
  const colors = tabCircleColors[activeTab] || tabCircleColors[0];
  const animName = tabAnimations[activeTab] || 'szImgSlideUp';
  const isPotentialMeter = activeTab === 0;

  return (
    <div>
      <div style={{ display: 'flex', gap: 0, minHeight: 340 }}>
        {/* ─── Left Sidebar ─── */}
        <div style={{
          width: 260, flexShrink: 0,
          borderRight: '1px solid #e2e8f0',
          paddingRight: 14,
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {navItem.tabs.map((t, i) => (
            <a
              key={t.name}
              href={t.link ? getRoutePath(t.link) : undefined}
              onMouseEnter={() => switchTab(i)}
              style={{
                padding: '12px 14px',
                borderLeft: i === activeTab ? '3px solid #BD1723' : '3px solid transparent',
                background: i === activeTab ? 'rgba(189,23,35,0.04)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                borderRadius: '0 8px 8px 0',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {t.icon && (
                  <div style={{
                    color: i === activeTab ? '#BD1723' : '#8947B3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.25s ease',
                  }}>
                    {t.icon}
                  </div>
                )}
                <div>
                  <div style={{
                    fontSize: 15.5, fontWeight: 700, lineHeight: 1.3,
                    color: i === activeTab ? '#BD1723' : '#0f172a',
                    transition: 'color 0.25s ease',
                  }}>{t.name}</div>
                  <div style={{
                    fontSize: 13.5, color: '#94a3b8', marginTop: 2,
                    fontWeight: 400, lineHeight: 1.3,
                  }}>{t.subtitle}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ─── Center Content ─── */}
        <div style={{
          flex: 1, padding: '8px 20px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 0.12s ease, transform 0.12s ease',
        }}>
          <h3 style={{
            fontSize: 26, fontWeight: 800, lineHeight: 1.25,
            color: '#0f172a', margin: 0,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {tab.heading}<br />
            <span style={{ color: '#BD1723' }}>{tab.headingHighlight}</span>
          </h3>

          <p style={{
            fontSize: 15, color: '#334155', lineHeight: 1.6,
            margin: '12px 0 16px', maxWidth: 320,
          }}>{tab.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
            {tab.bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  backgroundColor: '#BD1723',
                  flexShrink: 0,
                  marginTop: 6,
                  marginLeft: 4,
                  marginRight: 4
                }} />
                <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          <a
            href={tab.ctaLink ? getRoutePath(tab.ctaLink) : undefined}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#BD1723', color: '#fff',
              padding: '9px 20px', borderRadius: 10,
              fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
              cursor: tab.ctaLink ? 'pointer' : 'default',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 14px rgba(189,23,35,0.25)',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#99121c';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(189,23,35,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#BD1723';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(189,23,35,0.25)';
            }}
          >
            {tab.ctaText} <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>

        {/* ─── Right Illustration with Animated Circles ─── */}
        <div className="sz-platform-illust" key={imgKey} style={{
          width: 300, flexShrink: 0, marginLeft: -12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          overflow: 'visible',
        }}>
          {/* ── Animated circle rings (like reference design) ── */}
          <div className="sz-circle-ring sz-circle-ring-1" style={{
            position: 'absolute',
            width: 260, height: 260,
            borderRadius: '50%',
            border: `2px solid ${colors.ring1}`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'szRingPulse 4s ease-in-out infinite, szOrbitSpin 25s linear infinite',
            pointerEvents: 'none',
          }} />
          <div className="sz-circle-ring sz-circle-ring-2" style={{
            position: 'absolute',
            width: 200, height: 200,
            borderRadius: '50%',
            border: `1.5px dashed ${colors.ring2}`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'szRingPulse 5s ease-in-out infinite 1s, szOrbitSpin 35s linear infinite reverse',
            pointerEvents: 'none',
          }} />
          <div className="sz-circle-ring sz-circle-ring-3" style={{
            position: 'absolute',
            width: 320, height: 320,
            borderRadius: '50%',
            border: `1px solid ${colors.ring3}`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'szRingPulse 6s ease-in-out infinite 2s, szOrbitSpin 45s linear infinite',
            pointerEvents: 'none',
            opacity: 0.5,
          }} />

          {/* ── Floating orbit dots ── */}
          <div style={{
            position: 'absolute',
            width: 8, height: 8, borderRadius: '50%',
            background: colors.dot,
            boxShadow: `0 0 12px ${colors.dot}`,
            animation: 'szDotOrbit1 8s linear infinite',
            pointerEvents: 'none',
            zIndex: 3,
          }} />
          <div style={{
            position: 'absolute',
            width: 6, height: 6, borderRadius: '50%',
            background: colors.dot,
            opacity: 0.6,
            boxShadow: `0 0 8px ${colors.dot}`,
            animation: 'szDotOrbit2 12s linear infinite reverse',
            pointerEvents: 'none',
            zIndex: 3,
          }} />
          <div style={{
            position: 'absolute',
            width: 5, height: 5, borderRadius: '50%',
            background: colors.dot,
            opacity: 0.4,
            boxShadow: `0 0 6px ${colors.dot}`,
            animation: 'szDotOrbit3 15s linear infinite',
            pointerEvents: 'none',
            zIndex: 3,
          }} />

          {/* ── Background glow blob ── */}
          <div style={{
            position: 'absolute',
            width: 180, height: 180,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.ring1} 0%, transparent 70%)`,
            filter: 'blur(30px)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'szGlowBreath 4s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }} />

          {/* Decorative sparkles */}
          <div className="sz-sparkle" style={{ top: -8, right: 15, fontSize: 20, animationDelay: '0s' }}>✦</div>
          <div className="sz-sparkle" style={{ top: 14, right: 55, fontSize: 12, animationDelay: '1.2s' }}>✦</div>
          <div className="sz-sparkle" style={{ bottom: 25, right: 0, fontSize: 15, animationDelay: '2.4s' }}>✦</div>
          <div className="sz-sparkle" style={{ top: '40%', left: -8, fontSize: 14, animationDelay: '0.6s' }}>✧</div>
          <div className="sz-sparkle" style={{ bottom: 10, left: 30, fontSize: 11, animationDelay: '1.8s' }}>✦</div>

          {/* Image container with per-tab animation */}
          <div style={{
            width: '100%', position: 'relative', zIndex: 1,
            animation: `${animName} 0.55s cubic-bezier(0.34,1.56,0.64,1) both`,
          }}>
            <img
              src={platformImageMap[tab.illustrationId]}
              alt={tab.name}
              style={{
                width: '100%', height: 300, objectFit: 'contain',
                borderRadius: 14,
                filter: 'drop-shadow(0 8px 24px rgba(189,23,35,0.12))',
                transform: isPotentialMeter ? 'rotate(-3deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* ─── Bottom CTA Bar ─── */}
      {navItem.bottomCta && (
        <a
          href={getRoutePath(navItem.bottomCta.link)}
          style={{
            marginTop: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#fafbfc',
            border: '1px solid #e2e8f0',
            borderRadius: 14,
            padding: '12px 18px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(189,23,35,0.3)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(189,23,35,0.08)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: '#f3e8ff', color: '#8947B3',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={20} strokeWidth={2} />
            </div>
            <div>
              <div style={{ fontSize: 15, color: '#0f172a', fontWeight: 700, lineHeight: 1.3 }}>{navItem.bottomCta.text}</div>
              <div style={{ fontSize: 13.5, color: '#475569', marginTop: 2, lineHeight: 1.3 }}>{navItem.bottomCta.sub}</div>
            </div>
          </div>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #BD1723, #f87171)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 17, flexShrink: 0, marginLeft: 12,
          }}>→</div>
        </a>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MegaDropdown - dispatches to layout-specific component
═══════════════════════════════════════════════════════════════ */

const MegaDropdown = ({ navItem, onComingSoon, onClose }) => {
  const renderers = {
    'platform-tabs': PlatformTabsDropdown,
    'card-grid': CardGridDropdown,
    'list-rows': ListRowsDropdown,
    'insights-split': InsightsSplitDropdown,
    'image-card-grid': ImageCardGridDropdown,
    'compact-grid': CompactGridDropdown,
    'agentic-ai': AgenticAIDropdown,
    'k12-Vedhya': K12VedhyaDropdown,
    'services-grid': ServicesGridDropdown,
    'company-mega': CompanyMegaDropdown,
  };
  const Renderer = renderers[navItem.layout];
  if (!Renderer) return null;
  return <Renderer navItem={navItem} onComingSoon={onComingSoon} onClose={onClose} />;
};

/* ═══════════════════════════════════════════════════════════════
   DesktopNavItem - hover-activated mega dropdown
═══════════════════════════════════════════════════════════════ */

/* Module-level singleton - tracks which dropdown is currently open so
   switching between nav items is instant (no overlap / glitch). */
let _activeNavClose = null;

const DesktopNavItem = ({ item, onComingSoon }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const itemRef = useRef(null);
  const [pos, setPos] = useState({ left: 0 });

  if (item.isDirectLink) {
    return (
      <a
        href={getRoutePath(item.link)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          padding: '8px 14px',
          fontSize: 15.5,
          fontWeight: 500,
          color: '#334155',
          background: 'none',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
          letterSpacing: -0.1,
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#BD1723';
          e.currentTarget.style.background = 'rgba(189,23,35,0.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#334155';
          e.currentTarget.style.background = 'none';
        }}
      >
        {item.name}
      </a>
    );
  }

  const show = () => {
    clearTimeout(timeoutRef.current);
    // Immediately close whichever dropdown is currently open (not this one)
    if (_activeNavClose && _activeNavClose !== setOpen) {
      _activeNavClose(false);
    }
    _activeNavClose = setOpen;
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      if (_activeNavClose === setOpen) _activeNavClose = null;
    }, 160);
  };

  // Close on outside click - no backdrop needed (backdrop was blocking hover on other nav items)
  useEffect(() => {
    if (!open) return;
    const onOutside = (e) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        clearTimeout(timeoutRef.current);
        setOpen(false);
        if (_activeNavClose === setOpen) _activeNavClose = null;
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, [open]);

  // Cleanup timeout on unmount
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  // Centre dropdown under the trigger, but clamp to viewport
  useEffect(() => {
    if (open && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const centre = rect.left + rect.width / 2;
      const ddWidth = item.width || 600;
      let left = centre - ddWidth / 2;
      if (left < 20) left = 20;
      if (left + ddWidth > window.innerWidth - 20) left = window.innerWidth - 20 - ddWidth;
      setPos({ left });
    }
  }, [open, item.width]);

  return (
    <div ref={itemRef} onMouseEnter={show} onMouseLeave={hide} style={{ position: 'relative' }}>
      {/* Trigger button */}
      <button
        onClick={show}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          padding: '8px 14px',
          fontSize: 15.5,
          fontWeight: 500,
          color: open ? '#BD1723' : '#334155',
          background: open ? 'rgba(189,23,35,0.04)' : 'none',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap',
          fontFamily: 'inherit',
          letterSpacing: -0.1,
        }}
      >
        {item.name}
        {item.badge && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1,
              padding: '2px 7px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #fee2e2, #fecaca)',
              color: '#9f1239',
              border: '1px solid rgba(244,63,94,0.28)',
              marginLeft: 2,
              marginRight: 1,
            }}
          >
            {item.badge}
          </span>
        )}
        <IoIosArrowDown
          style={{
            fontSize: 13,
            marginLeft: 1,
            opacity: 0.5,
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown panel - no backdrop, outside-click handled by document.mousedown */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: pos.left,
            width: item.width || 600,
            zIndex: 300,
            paddingTop: 12,
          }}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <div
            className="sz-mega-dropdown"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 60%, #f1f5f9 100%)',
              borderRadius: 20,
              padding: 0,
              boxShadow:
                '0 32px 80px rgba(0,0,0,0.14), 0 12px 36px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.7)',
              overflow: 'hidden',
              animation: 'szDdIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Top gradient accent bar */}
            <div
              style={{
                height: 4,
                background: 'linear-gradient(135deg, #BD1723 0%, #8947B3 50%, #4f46e5 100%)',
                borderRadius: '20px 20px 0 0',
              }}
            />
            {/* Content */}
            <div style={{ padding: '22px 24px 20px' }}>
              <MegaDropdown navItem={item} onComingSoon={onComingSoon} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MobileNavItem - accordion with icons
═══════════════════════════════════════════════════════════════ */

const MobileNavItem = ({ item, open, onToggle, onClose, onComingSoon }) => {
  const mobileCompanyItems = item.companyItems || [];
  const mobileServiceItems = item.serviceItems || [];
  const isCompanyMenu = item.name === 'Company' && mobileCompanyItems.length > 0;
  const mobileSubItems = item.items
    ? item.items.map((subItem) => ({
      ...subItem,
      name: subItem.name || subItem.titleLines?.join(' '),
    }))
    : item.tabs
      ? item.tabs.map(t => ({ name: t.name, link: t.link, desc: t.subtitle }))
      : [...mobileCompanyItems, ...mobileServiceItems];
  const hasSubItems = mobileSubItems.length > 0;

  if (item.isDirectLink) {
    return (
      <a
        href={getRoutePath(item.link)}
        onClick={() => onClose?.()}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          fontSize: 16,
          fontWeight: 600,
          color: '#1e293b',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          textDecoration: 'none',
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        <span>{item.name}</span>
      </a>
    );
  }

  return (
    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
      <button
        onClick={() => hasSubItems && onToggle?.(item.name)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          fontSize: 16,
          fontWeight: 600,
          color: '#1e293b',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span>{item.name}</span>
        {hasSubItems && (
          <IoIosArrowDown
            style={{
              fontSize: 16,
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              color: '#94a3b8',
            }}
          />
        )}
      </button>
      {open && (
        <div style={{ background: '#f8fafc', padding: '6px 0 12px' }}>
          {(isCompanyMenu ? mobileCompanyItems : mobileSubItems).map((sub) => (
            <a
              key={sub.name}
              href={sub.link ? getRoutePath(sub.link) : undefined}
              onClick={(e) => {
                if (!sub.link) {
                  e.preventDefault();
                  onClose?.();
                  onComingSoon?.(sub.name);
                  return;
                }
                onClose?.();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 24px',
                fontSize: 15,
                color: '#334155',
                textDecoration: 'none',
              }}
            >
              {sub.icon && (
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    background: sub.iconGradient || '#f1f5f9',
                  }}
                >
                  {sub.icon}
                </span>
              )}
              <span style={{ fontWeight: 500 }}>{sub.name}</span>
            </a>
          ))}

          {isCompanyMenu && mobileServiceItems.length > 0 && (
            <>
              <div
                style={{
                  height: 1,
                  background: '#e2e8f0',
                  margin: '8px 24px',
                }}
              />
              {mobileServiceItems.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.link ? getRoutePath(sub.link) : undefined}
                  onClick={(e) => {
                    if (!sub.link) {
                      e.preventDefault();
                      onClose?.();
                      onComingSoon?.(sub.name);
                      return;
                    }
                    onClose?.();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 24px',
                    fontSize: 15,
                    color: '#334155',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{sub.name}</span>
                </a>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   NAVBAR - main component
═══════════════════════════════════════════════════════════════ */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [comingSoonText, setComingSoonText] = useState('');

  useEffect(() => {
    if (comingSoonText) {
      const timer = setTimeout(() => {
        setComingSoonText('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [comingSoonText]);

  return (
    <>
      <header
        style={{
          background: '#ffffff',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Main bar */}
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
            gap: 16,
          }}
        >
          {/* Logo */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <a href={getRoutePath('/')}>
              <img
                src={getAssetPath('/skillzza-logo.png')}
                alt="Skillzza Logo"
                style={{ height: 40, width: 'auto' }}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            className="sz-desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.name}
                item={item}
                onComingSoon={(name) => setComingSoonText(`${name} is coming soon.`)}
              />
            ))}
          </nav>

          {/* CTA buttons */}
          <div
            className="sz-cta-group"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}
          >
            <a
              href={getRoutePath('/book-demo')}
              className="sz-cta-primary"
              style={{
                background: 'linear-gradient(135deg, #BD1723 0%, #8947B3 100%)',
                color: '#fff',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(189,23,35,0.25)',
                transition: 'all 0.25s ease',
              }}
            >
              Book a Demo
            </a>
            {/* <a
              href={`${getRoutePath('/')}#ecosystem-diagram`}
              className="sz-cta-secondary"
              style={{
                background: '#fff',
                color: '#BD1723',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                border: '1.5px solid rgba(189,23,35,0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              Product Tour
            </a> */}
          </div>

          {/* Hamburger */}
          <button
            className="sz-hamburger"
            onClick={() => {
              setMobileOpen((prev) => {
                const next = !prev;
                if (!next) setActiveMobileDropdown(null);
                return next;
              });
            }}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#374151',
              padding: 6,
              borderRadius: 6,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1px solid #f1f5f9',
              background: '#fff',
              maxHeight: 'calc(100vh - 64px)',
              overflowY: 'auto',
            }}
          >
            {navItems.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                open={activeMobileDropdown === item.name}
                onToggle={(name) => {
                  setActiveMobileDropdown((prev) => (prev === name ? null : name));
                }}
                onClose={() => {
                  setMobileOpen(false);
                  setActiveMobileDropdown(null);
                }}
                onComingSoon={(name) => setComingSoonText(`${name} is coming soon.`)}
              />
            ))}
            <div
              style={{
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <a
                href={getRoutePath('/book-demo')}
                style={{
                  background: 'linear-gradient(135deg, #BD1723 0%, #8947B3 100%)',
                  color: '#fff',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Book a Demo
              </a>
              {/* <a
                href={`${getRoutePath('/')}#ecosystem-diagram`}
                style={{
                  background: '#fff',
                  color: '#BD1723',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  border: '1.5px solid rgba(189,23,35,0.3)',
                }}
              >
                Product Tour
              </a> */}
            </div>
          </div>
        )}
      </header>

      {comingSoonText && (
        <div
          onClick={() => setComingSoonText('')}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              minWidth: 280,
              maxWidth: 380,
              width: '100%',
              borderRadius: 24,
              background: '#ffffff',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '36px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              animation: 'szIconPop 0.3s ease-out',
            }}
          >
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '24px',
                fontWeight: 700,
                color: '#0F1114',
                margin: '0 0 24px 0',
              }}
            >
              Coming Soon!
            </h3>
            <button
              onClick={() => setComingSoonText('')}
              style={{
                border: 'none',
                borderRadius: '9999px',
                padding: '10px 32px',
                background: '#713593',
                color: '#ffffff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '17px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Animations + responsive */}
      <style>{`
        /* ── Dropdown entrance ── */
        @keyframes szDdIn {
          from { opacity:0; transform:translateY(-12px) scale(0.96); filter:blur(3px); }
          to   { opacity:1; transform:translateY(0)    scale(1);     filter:blur(0); }
        }

        /* ── Card / list item entrance ── */
        @keyframes szCardIn {
          from { opacity:0; transform:translateY(10px) scale(0.94); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }

        /* ── Shimmer sweep ── */
        @keyframes szShimmer {
          from { left:-110%; }
          to   { left: 200%; }
        }

        /* ── Icon spring pop ── */
        @keyframes szIconPop {
          0%   { transform: scale(1)    rotate(0deg); }
          30%  { transform: scale(1.22) rotate(-6deg); }
          55%  { transform: scale(1.1)  rotate(4deg); }
          75%  { transform: scale(1.17) rotate(-2deg); }
          100% { transform: scale(1.12) rotate(0deg); }
        }

        /* ── Left accent bar slide-in ── */
        @keyframes szBarIn {
          from { transform: scaleY(0); opacity:0; }
          to   { transform: scaleY(1); opacity:1; }
        }

        /* ── Arrow wiggle ── */
        @keyframes szArrowPop {
          0%   { transform: translate(0,0)    rotate(-45deg); }
          40%  { transform: translate(4px,-4px) rotate(-45deg); }
          70%  { transform: translate(2px,-2px) rotate(-45deg); }
          100% { transform: translate(3px,-3px) rotate(-45deg); }
        }

        /* ── Glow pulse ── */
        @keyframes szGlowPulse {
          0%,100% { opacity:.7; }
          50%     { opacity:1; }
        }

        /* ── Dual CTA gradient movement ── */
        @keyframes szCtaGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Dual CTA shimmer sweep ── */
        @keyframes szCtaSweep {
          0% { left: -65%; }
          100% { left: 145%; }
        }

        /* ── Dual CTA icon float ── */
        @keyframes szCtaIconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        /* ── Dual CTA arrow nudge ── */
        @keyframes szCtaArrowNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); }
        }

        /* ── Entrance base ── */
        .sz-card-item, .sz-list-item, .sz-compact-item {
          animation: szCardIn 0.35s cubic-bezier(0.16,1,0.3,1) backwards;
        }

        /* ── Card hover - icon spring ── */
        .sz-card-item:hover .sz-nav-icon {
          animation: szIconPop 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
        }

        /* ── Card shimmer ── */
        .sz-shimmer-active {
          animation: szShimmer 0.75s ease-in-out !important;
        }

        /* ── Product dropdown dual CTA animations ── */
        .sz-dual-cta .sz-dual-cta-shimmer {
          animation: szCtaSweep 2.6s ease-in-out infinite;
        }

        .sz-dual-cta .sz-dual-cta-icon {
          animation: szCtaIconFloat 2.4s ease-in-out infinite;
        }

        .sz-dual-cta .sz-dual-cta-arrow {
          display: inline-block;
          animation: szCtaArrowNudge 1.4s ease-in-out infinite;
        }

        .sz-dual-cta .sz-dual-cta-spark {
          animation: szGlowPulse 1.8s ease-in-out infinite;
        }

        .sz-dual-cta:hover {
          animation-duration: 2.8s !important;
        }

        /* ── List hover - icon ── */
        .sz-list-item:hover .sz-nav-icon {
          animation: szIconPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
        }

        /* ── Compact hover - icon ── */
        .sz-compact-item:hover .sz-nav-icon,
        .sz-svc-card:hover .sz-svc-icon {
          animation: szIconPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
        }

        /* ── CTA hover ── */
        .sz-cta-primary:hover {
          box-shadow: 0 8px 28px rgba(189,23,35,0.38) !important;
          transform: translateY(-2px) scale(1.02);
        }
        .sz-cta-secondary:hover {
          background: linear-gradient(135deg,#fef2f2,#fff7ed) !important;
          border-color: #f87171 !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 4px 16px rgba(189,23,35,0.12) !important;
        }

        /* ── Responsive ── */
        .sz-desktop-nav { display:flex !important; }
        .sz-cta-group   { display:flex !important; }
        .sz-hamburger   { display:none !important; }
        @media (max-width:1023px) {
          .sz-desktop-nav { display:none !important; }
          .sz-cta-group   { display:none !important; }
          .sz-hamburger   { display:flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;