import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import {
  Target, Globe, Handshake, UserCheck, Bot, BrainCircuit, Leaf, PaintBucket, 
  Zap, Rocket, GraduationCap, ShieldAlert, BookOpen, PenTool, Microscope, 
  Mic, Activity, BarChart3, Compass, Settings, Layers, Route, Briefcase, 
  FileText, School, Building, Hexagon
} from 'lucide-react';
import { getAssetPath, getRoutePath } from '../utils/assets';
import platformImg1 from '../assets/card grid/image 1.png';
import platformImg2 from '../assets/card grid/image 2.png';
import platformImg3 from '../assets/card grid/image 3.png';
import platformImg4 from '../assets/card grid/image 4.png';
import platformImg5 from '../assets/card grid/image 5.png';
import platformImg6 from '../assets/card grid/image 6.png';

/* ═══════════════════════════════════════════════════════════════
   NAV DATA — enriched with gradient icons, descriptions, pills
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
      text: 'Start your free skill assessment',
      sub: 'discover your strengths in under 10 minutes.',
      link: '/product/potential-meter',
    },
    tabs: [
      {
        name: 'The Potential Meter',
        subtitle: 'AI skill assessment engine',
        link: '/product/potential-meter',
        heading: 'Discover your true potential with',
        headingHighlight: 'AI-powered assessments.',
        description: 'Our intelligent assessment engine maps your skills, strengths, and growth areas to help you make better career decisions.',
        bullets: [
          'Identify your top skills and strengths',
          'Benchmark your potential against industry standards',
          'Personalized insights for your growth journey',
        ],
        ctaText: 'Assess Your Potential',
        ctaLink: '/product/potential-meter',
        illustrationId: 'potential-meter',
      },
      {
        name: 'Xperience Platform',
        subtitle: 'Job simulations',
        link: '/product/xperience-platform',
        heading: 'Practice real roles.',
        headingHighlight: 'Build real confidence.',
        description: 'Our job simulations platform lets you experience real-world roles, solve industry challenges, and get AI-powered feedback to improve.',
        bullets: [
          'Simulate real job roles and tasks',
          'Get AI feedback on your performance',
          'Improve with role-specific recommendations',
        ],
        ctaText: 'Explore Simulations',
        ctaLink: '/product/xperience-platform',
        illustrationId: 'xperience-platform',
      },
      {
        name: 'Talent Intelligence',
        subtitle: 'Talent insights engine',
        link: null,
        heading: 'Unlock data-driven',
        headingHighlight: 'talent insights. Stay ahead always.',
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
      {
        name: 'AI HackNex',
        subtitle: 'AI hackathons',
        link: null,
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
        name: 'Hirenest',
        subtitle: 'Campus hiring marketplace',
        link: null,
        heading: 'Connecting talent.',
        headingHighlight: 'Creating opportunities.',
        description: 'Hirenest is your campus hiring marketplace that connects students with top companies and the right opportunities.',
        bullets: [
          'Discover verified job & internship opportunities',
          'Connect with top recruiters',
          'Stand out and get hired',
        ],
        ctaText: 'Explore Opportunities',
        ctaLink: null,
        illustrationId: 'hirenest',
      },
      {
        name: 'Skillzza Persona',
        subtitle: 'AI roleplay simulator',
        link: '/explore/skillzza-persona',
        heading: 'Practice like real.',
        headingHighlight: 'Prepare for your AI interview.',
        description: 'Skillzza Persona is your AI agent that simulates real interviews, provides smart feedback, and helps you improve with every practice.',
        bullets: [
          'AI agent that conducts real interview simulations',
          'Instant, personalized feedback and improvement tips',
          'Boost confidence and ace your next interview',
        ],
        ctaText: 'Start Roleplay',
        ctaLink: '/explore/skillzza-persona',
        illustrationId: 'skillzza-persona',
      },
    ],
  },
  /* NEW */
  /*
  {
    name: 'Agentic AI',
    layout: 'agentic-ai',
    width: 820,
    eyebrow: 'Agentic AI — autonomous skill & talent intelligence',
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
      { name: 'Skill Market Pulse', desc: 'Live labour market signal agent — trends, demand spikes, salary shifts.', icon: <Hexagon size={24} color="#8947B3" strokeWidth={1.5} />, pill: 'Live', pillColor: 'purple' },
    ],
  },
  */
  /* NEW */
  /*
  {
    name: 'Vedya',
    layout: 'k12-vidya',
    width: 780,
    eyebrow: 'K-12 Vidya AI — school intelligence ecosystem',
    studioLink: 'https://cognifyai.skillzza.com/',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    badge: 'K-12',
    items: [
      { name: 'Vidya AI Virtual Internship', link: 'https://cognifyai.skillzza.com/', desc: 'Real-world AI, coding and deeptech internship simulations designed for school students aged 13-18.', pill: 'Flagship', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Skill Studio for Students', link: 'https://skillzza-club.vercel.app/', desc: 'Gamified AI-powered skill tracks — ML basics, robotics, sustainability, drone tech, quantum intro.', pill: 'Grades 6-12', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Teacher AI Upskill Lab', link: 'https://cognifyai.skillzza.com/for-tutor.html', desc: 'Structured AI literacy programme for educators — pedagogy, tools, classroom integration, assessments.', pill: 'CPD certified', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'CCMM — AI Maturity for Schools', link: 'https://cognifyai.skillzza.com/for-tutor.html', desc: 'Continuous Capability & Maturity Model — benchmarks school AI readiness across 5 dimensions.', pill: 'Assessment', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Campus Connect — K12', link: 'https://cognifyai.skillzza.com/#', desc: 'Links top-performing school students directly to university and early internship pipelines.', pill: 'Bridge', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Future Founders Track', link: 'https://cognifyai.skillzza.com/#', desc: 'Entrepreneurship & innovation bootcamp — problem-solving, pitching, and startup thinking for teens.', pill: 'New', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
    ],
  },
  */
  {
    name: 'School of Technology',
    layout: 'list-rows',
    width: 710,
    eyebrow: 'The Deeptech Studio — Specialisations',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    items: [
      { name: 'School of AI & Quantum Intelligence', link: null, desc: 'ML, neural architectures, quantum algorithms, agentic AI systems', pill: 'AI + Quantum', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Global School of Sustainability & Climate Action', link: 'https://globalschoolofsustainability.com/', desc: 'Green tech, carbon markets, ESG frameworks, climate data science', pill: 'New', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Centre of Digital & Design Excellence', link: null, desc: 'UX/UI, VFX, generative AI art, immersive media, spatial design', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      // { name: 'School of EV & E-Mobility', link: null, desc: 'Electric vehicles, battery systems, smart transport, grid tech', pill: 'Beta', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Institute of Aerial Intelligence', link: null, desc: 'Drone systems, UAV operations, aerial data & AI navigation', pill: 'New', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      // { name: 'Future Skill Academy', link: null, desc: 'Future-ready learning tracks for AI, product, and digital careers.', pill: 'New', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      // { name: 'Cybersecurity & Ethical AI School', link: null, desc: 'Threat intelligence, AI safety, responsible automation, governance', pill: 'New', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
    ],
  },
  {
    name: 'Job Simulation',
    link: '/explore/job-simulations',
    isDirectLink: true,
  },
  {
    name: 'Insights',
    layout: 'list-rows',
    width: 600,
    eyebrow: 'Resources & Knowledge',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    items: [
      { name: 'Skill Blueprint', link: '/insights/skill-blueprint', desc: 'Real-world success stories in skill development', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'The Skillzza Digest', link: '/insights/skill-digest', desc: 'Insights, trends & game-changers shaping future skills', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'AI Talent Research Hub', link: '/insights/ai-talent-research-hub', desc: 'Reports & whitepapers on AI & workforce transformation', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Skill Unplugged Podcast', link: '/insights/skill-unplugged-podcast', desc: 'Raw, Real & Revolutionary talks on the future of skills', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Skillzza Live', link: '/insights/skillzza-live', desc: 'Interactive sessions bringing learning to life', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
      { name: 'Agentic Workforce Index 2026', link: null, desc: 'Annual report on AI agent adoption across industries', pill: 'New', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)', iconShadow: '0 4px 12px rgba(189,23,35,0.12)' },
    ],
  },
  {
    name: 'Company',
    layout: 'company-mega',
    width: 810,
    companyEyebrow: 'About Skillzza',
    servicesEyebrow: 'Services & Consulting',
    dotColor: '#BD1723',
    accentGradient: 'linear-gradient(135deg, #BD1723, #8947B3)',
    cta: {
      text: 'Partner with Skillzza',
      sub: '— universities, enterprises and governments building future-ready talent.',
      link: '/contact-us',
    },
    companyItems: [
      { name: 'About Us', link: '/company/about', desc: 'Our story, mission & vision', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Our Methodology', link: '/company/methodology', desc: 'How we build skill frameworks', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'What We Do', link: '/company/what-we-do', desc: 'Products, programmes & impact', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Our Pathway', link: '/company/pathway', desc: 'Roadmap for learners & partners', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'Partner Collaboration', link: '/company/partnerships', desc: 'Universities, enterprises, government & CSR partnerships', span: 2, iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
      { name: 'Careers at Skillzza', link: '/contact-us', desc: 'Join the team building the future of skills', iconGradient: 'linear-gradient(135deg, #f4eaf9, #e0c8f0)' },
      { name: 'Press & Media', link: null, desc: 'News, features & brand resources', iconGradient: 'linear-gradient(135deg, #fce8eb, #f7d1d6)' },
    ],
    serviceItems: [
      { name: 'Institution Transformation', desc: 'Curriculum redesign & AI integration for universities.', link: null },
      { name: 'Enterprise Skill Audit', desc: 'Workforce gap analysis & 90-day upskilling roadmap.', link: null },
      { name: 'Govt & CSR Programmes', desc: 'National skill missions & youth employment schemes.', link: null },
      { name: 'Talent Intelligence Reports', desc: 'Workforce analytics & sector skill signals.', link: null },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PILL COLOUR PALETTE — vibrant with gradient-like feel
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
   Pill — vibrant gradient badge
─────────────────────────────────────────────────────────────── */

const Pill = ({ text, color = 'red' }) => {
  const c = pillColors[color] || pillColors.red;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 10,
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
   Eyebrow — premium section header with gradient accent line
─────────────────────────────────────────────────────────────── */

const Eyebrow = ({ text, dotColor, gradient }) => null;

/* ───────────────────────────────────────────────────────────────
   CtaBar — gradient CTA strip
─────────────────────────────────────────────────────────────── */

const CtaBar = ({ cta, gradient }) => {
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
              <div style={{ fontSize: 13, color: '#0f172a', fontWeight: 700, lineHeight: 1.3 }}>{btn.text}</div>
              <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 3, lineHeight: 1.35 }}>{btn.sub}</div>
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
                fontSize: 14,
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
                  fontSize: 10,
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
      <div style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.5 }}>
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
          fontSize: 14,
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
   PREMIUM ICON — gradient container with shadow
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
   CARD GRID DROPDOWN — Products, Use Cases, Explore
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
      {/* Shimmer — fixed geometry so white center stays off-screen when idle */}
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
   LIST ROWS DROPDOWN — School of Technology, Insights
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
      {/* Shimmer — fixed geometry */}
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
          color: hovered ? '#475569' : '#cbd5e1',
          fontSize: 15, flexShrink: 0,
          transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
          transform: hovered ? 'translate(2px,-2px) rotate(-45deg)' : 'translate(0,0) rotate(0deg)',
          fontWeight: 600,
        }}>↗</div>
      )}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   COMPACT GRID DROPDOWN — Company
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

const CompactItem = ({ item, index }) => {
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
      onClick={!item.link ? e => e.preventDefault() : undefined}
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

      {/* Shimmer — fixed geometry */}
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

      {/* Content — DOM-order + position:relative guarantees above z:0 absolutes */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 13 }}>

        {item.icon && (
          <div
            className="sz-nav-icon"
            style={{
              width: 28, height: 28, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13,
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
   AgenticAIDropdown — agent flow + two-column list
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
          fontSize: 18, lineHeight: 1,
          display: 'inline-block',
          transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          transform: h ? 'scale(1.18) rotate(-6deg)' : 'scale(1) rotate(0deg)',
        }}>{agent.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: h ? '#065f46' : '#1e293b', transition: 'color 0.2s' }}>{agent.name}</span>
            {agent.pill && pc[agent.pillColor] && (
              <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 20, ...pc[agent.pillColor] }}>{agent.pill}</span>
            )}
          </div>
          <div style={{ fontSize: 11.5, color: h ? '#374f6b' : '#5a7394', lineHeight: 1.45, transition: 'color 0.2s' }}>{agent.desc}</div>
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
              fontSize: 11, fontWeight: 600, color: '#BD1723',
              padding: '2px 10px', borderRadius: 20,
              background: 'rgba(189,23,35,0.08)', border: '1px solid rgba(189,23,35,0.15)',
            }}>{step}</span>
            {i < navItem.agentFlow.length - 1 && (
              <span style={{ color: '#e4909a', fontSize: 12, fontWeight: 700 }}>→</span>
            )}
          </span>
        ))}
      </div>
      {/* Two columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Learner agents */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8 }}>
            AI Agents — Learner
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {navItem.learnerAgents.map(a => <AgentRow key={a.name} agent={a} />)}
          </div>
        </div>
        {/* Enterprise agents */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 8 }}>
            AI Agents — Enterprise & Campus
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
   K12VidyaDropdown — banner header + 3-column card grid
═══════════════════════════════════════════════════════════════ */

const K12VidyaDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} badge={navItem.badge} />
    {/* Banner */}
    <a href={navItem.studioLink || undefined} target={navItem.studioLink?.startsWith('http') ? '_blank' : undefined} rel={navItem.studioLink?.startsWith('http') ? 'noopener noreferrer' : undefined} style={{
      background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
      border: '1px solid #d1fae5', borderRadius: 12,
      padding: '10px 16px', marginBottom: 18,
      display: 'flex', alignItems: 'center', gap: 10,
      textDecoration: 'none',
      cursor: navItem.studioLink ? 'pointer' : 'default',
    }}>
      <span style={{ fontSize: 20 }}>🏫</span>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#065f46' }}>Vidya AI Studio</div>
        <div style={{ fontSize: 11, color: '#BD1723', lineHeight: 1.4 }}>AI-powered K-12 school intelligence — assessments, simulations & teacher upskilling.</div>
      </div>
    </a>
    {/* 3-col card grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
      {navItem.items.map((item, i) => <K12Card key={item.name} item={item} index={i} />)}
    </div>
  </div>
);

const K12Card = ({ item }) => {
  const [h, setH] = useState(false);
  const glowRaw = item.iconShadow?.match(/rgba\([^)]+\)/)?.[0] || 'rgba(20,184,166,0.15)';
  const glowMid = glowRaw.replace(/,[\s]*[\d.]+\)/, ',0.22)');
  const isExternal = item.link?.startsWith('http');
  return (
    <a
      href={item.link || undefined}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={!item.link ? e => e.preventDefault() : undefined}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 8,
        padding: '13px 13px 11px', borderRadius: 12,
        border: h
          ? `1.5px solid ${glowMid}`
          : '1px solid #f0f4f8',
        background: h
          ? `linear-gradient(145deg,#ffffff,${glowRaw.replace(/,[\s]*[\d.]+\)/, ',0.06)')})`
          : '#f4f5f7',
        textDecoration: 'none', overflow: 'hidden', position: 'relative',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.3s cubic-bezier(0.34,1.2,0.64,1)',
        transform: h ? 'translateY(-6px) scale(1.025)' : 'translateY(0) scale(1)',
        boxShadow: 'none',
      }}
    >
      {/* Gradient top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        borderRadius: '12px 12px 0 0', zIndex: 0,
        background: item.iconGradient || 'linear-gradient(135deg,#00e5b0,#38d9f5)',
        opacity: h ? 1 : 0,
        transition: 'opacity 0.28s ease',
      }} />
      {/* Shimmer — fixed geometry */}
      <div className={h ? 'sz-shimmer-active' : ''} style={{
        position: 'absolute', top: 0, left: '-75%',
        width: '62%', height: '100%', zIndex: 0,
        background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)',
        pointerEvents: 'none', transform: 'skewX(-12deg)',
      }} />
      {/* Content above overlays */}
      <div style={{ position: 'relative' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 9,
          background: item.iconGradient || '#f1f5f9',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 17, flexShrink: 0,
          boxShadow: h ? `0 6px 20px ${glowMid}` : item.iconShadow,
          transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
          transform: h ? 'scale(1.15) rotate(-5deg)' : 'scale(1) rotate(0deg)',
          marginBottom: 6,
        }}>{item.icon}</div>
        <div style={{
          fontSize: 12.5, fontWeight: 700,
          color: h ? '#0f172a' : '#1e293b',
          lineHeight: 1.2, transition: 'color 0.2s ease',
        }}>{item.name}</div>
        {item.desc && (
          <div style={{
            fontSize: 11.5, color: h ? '#4b6280' : '#5a7394',
            marginTop: 4, lineHeight: 1.5,
            transition: 'color 0.2s ease',
          }}>
            {item.desc}
          </div>
        )}
        {item.pill && pillColors[item.pillColor] && (
          <span style={{ alignSelf: 'flex-start', fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 20, marginTop: 8, display: 'inline-block', ...pillColors[item.pillColor] }}>{item.pill}</span>
        )}
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   ServicesGridDropdown — 3×2 service card grid + CTA
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

const SvcCard = ({ item }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={item.link || undefined}
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
      {/* Shimmer — fixed geometry */}
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
            fontSize: item.icon ? 11 : 12, color: h ? '#374f6b' : '#64748b',
            lineHeight: 1.45, transition: 'color 0.2s ease',
          }}>{item.desc}</div>
        </div>
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   CompanyMegaDropdown — About + Services in one dropdown
═══════════════════════════════════════════════════════════════ */

const CompanyMegaDropdown = ({ navItem }) => (
  <div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr',
        gap: '24px',
      }}
    >
      <div>
        <Eyebrow text={navItem.companyEyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}
        >
          {navItem.companyItems.map((item, i) => (
            <CompactItem key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Decorative Separator Line */}
      <div style={{ background: '#e2e8f0', width: '1px', alignSelf: 'stretch' }} />

      <div>
        <Eyebrow text={navItem.servicesEyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {navItem.serviceItems.map((item, i) => (
            <SvcCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>

    {navItem.cta && <CtaBar cta={navItem.cta} accentGradient={navItem.accentGradient} />}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   PLATFORM TABS DROPDOWN — Sidebar + Content + Illustration
   Matches the 6-tab reference design
   Enhanced with per-tab animations and animated circle backgrounds
═══════════════════════════════════════════════════════════════ */

/* ── Platform illustration images map ── */

const platformImageMap = {
  'potential-meter': platformImg1,
  'xperience-platform': platformImg2,
  'talent-intelligence': platformImg3,
  'ai-hacknex': platformImg4,
  'hirenest': platformImg5,
  'skillzza-persona': platformImg6,
};

/* ── Per-tab entrance animation names (each tab gets a unique animation) ── */
const tabAnimations = [
  'szImgSlideUp',       // Potential Meter: slide up + slight rotate
  'szImgZoomRotate',    // Xperience Platform: zoom + rotate in
  'szImgFlipIn',        // Talent Intelligence: 3D flip in
  'szImgBounceScale',   // AI HackNex: bounce scale
  'szImgSwingIn',       // Hirenest: swing from top
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
          width: 220, flexShrink: 0,
          borderRight: '1px solid #e2e8f0',
          paddingRight: 14,
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {navItem.tabs.map((t, i) => (
            <div
              key={t.name}
              onClick={() => switchTab(i)}
              onMouseEnter={() => switchTab(i)}
              style={{
                padding: '12px 14px',
                borderLeft: i === activeTab ? '3px solid #7c3aed' : '3px solid transparent',
                background: i === activeTab ? 'rgba(124,58,237,0.04)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <div style={{
                fontSize: 13.5, fontWeight: 700, lineHeight: 1.3,
                color: i === activeTab ? '#7c3aed' : '#0f172a',
                transition: 'color 0.25s ease',
              }}>{t.name}</div>
              <div style={{
                fontSize: 11.5, color: '#94a3b8', marginTop: 2,
                fontWeight: 400, lineHeight: 1.3,
              }}>{t.subtitle}</div>
            </div>
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
            <span style={{ color: '#7c3aed' }}>{tab.headingHighlight}</span>
          </h3>

          <p style={{
            fontSize: 13, color: '#475569', lineHeight: 1.6,
            margin: '12px 0 16px', maxWidth: 320,
          }}>{tab.description}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
            {tab.bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  border: '1.5px solid #a78bfa',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 1,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4.2 7L8 3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          <a
            href={tab.ctaLink ? getRoutePath(tab.ctaLink) : undefined}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#7c3aed', color: '#fff',
              padding: '9px 20px', borderRadius: 10,
              fontSize: 13, fontWeight: 600,
              textDecoration: 'none',
              cursor: tab.ctaLink ? 'pointer' : 'default',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 14px rgba(124,58,237,0.25)',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#6d28d9';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(124,58,237,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,58,237,0.25)';
            }}
          >
            {tab.ctaText} <span style={{ fontSize: 16 }}>→</span>
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
          <div className="sz-sparkle" style={{ top: -8, right: 15, fontSize: 18, animationDelay: '0s' }}>✦</div>
          <div className="sz-sparkle" style={{ top: 14, right: 55, fontSize: 10, animationDelay: '1.2s' }}>✦</div>
          <div className="sz-sparkle" style={{ bottom: 25, right: 0, fontSize: 13, animationDelay: '2.4s' }}>✦</div>
          <div className="sz-sparkle" style={{ top: '40%', left: -8, fontSize: 12, animationDelay: '0.6s' }}>✧</div>
          <div className="sz-sparkle" style={{ bottom: 10, left: 30, fontSize: 9, animationDelay: '1.8s' }}>✦</div>

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
                filter: 'drop-shadow(0 8px 24px rgba(124,58,237,0.12))',
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
            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(124,58,237,0.08)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>
            <strong style={{ color: '#0f172a', fontWeight: 700 }}>{navItem.bottomCta.text}</strong>{' : '}{navItem.bottomCta.sub}
          </div>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 15, flexShrink: 0, marginLeft: 12,
          }}>→</div>
        </a>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MegaDropdown — dispatches to layout-specific component
═══════════════════════════════════════════════════════════════ */

const MegaDropdown = ({ navItem, onComingSoon }) => {
  const renderers = {
    'platform-tabs': PlatformTabsDropdown,
    'card-grid': CardGridDropdown,
    'list-rows': ListRowsDropdown,
    'compact-grid': CompactGridDropdown,
    'agentic-ai': AgenticAIDropdown,
    'k12-vidya': K12VidyaDropdown,
    'services-grid': ServicesGridDropdown,
    'company-mega': CompanyMegaDropdown,
  };
  const Renderer = renderers[navItem.layout];
  if (!Renderer) return null;
  return <Renderer navItem={navItem} onComingSoon={onComingSoon} />;
};

/* ═══════════════════════════════════════════════════════════════
   DesktopNavItem — hover-activated mega dropdown
═══════════════════════════════════════════════════════════════ */

/* Module-level singleton — tracks which dropdown is currently open so
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
          fontSize: 13.5,
          fontWeight: 500,
          color: '#475569',
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
          e.currentTarget.style.color = '#475569';
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

  // Close on outside click — no backdrop needed (backdrop was blocking hover on other nav items)
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
          fontSize: 13.5,
          fontWeight: 500,
          color: open ? '#BD1723' : '#475569',
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
              fontSize: 10,
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
            fontSize: 11,
            marginLeft: 1,
            opacity: 0.5,
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown panel — no backdrop, outside-click handled by document.mousedown */}
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
              <MegaDropdown navItem={item} onComingSoon={onComingSoon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MobileNavItem — accordion with icons
═══════════════════════════════════════════════════════════════ */

const MobileNavItem = ({ item, open, onToggle, onClose, onComingSoon }) => {
  const mobileCompanyItems = item.companyItems || [];
  const mobileServiceItems = item.serviceItems || [];
  const isCompanyMenu = item.name === 'Company' && mobileCompanyItems.length > 0;
  const mobileSubItems = item.items
    ? item.items
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
          fontSize: 14,
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
          fontSize: 14,
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
              fontSize: 14,
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
                fontSize: 13,
                color: '#475569',
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
                    fontSize: 14,
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
                    fontSize: 13,
                    color: '#475569',
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
   NAVBAR — main component
═══════════════════════════════════════════════════════════════ */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [comingSoonText, setComingSoonText] = useState('');

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
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(189,23,35,0.25)',
                transition: 'all 0.25s ease',
              }}
            >
              Book a Demo
            </a>
            <a
              href={`${getRoutePath('/')}#ecosystem-diagram`}
              className="sz-cta-secondary"
              style={{
                background: '#fff',
                color: '#BD1723',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                border: '1.5px solid rgba(189,23,35,0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              Product Tour
            </a>
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
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Book a Demo
              </a>
              <a
                href={`${getRoutePath('/')}#ecosystem-diagram`}
                style={{
                  background: '#fff',
                  color: '#BD1723',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  border: '1.5px solid rgba(189,23,35,0.3)',
                }}
              >
                Product Tour
              </a>
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
            background: 'rgba(15, 23, 42, 0.42)',
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
              maxWidth: 460,
              borderRadius: 16,
              background: '#ffffff',
              border: '1px solid rgba(189,23,35,0.22)',
              boxShadow: '0 28px 60px rgba(15,23,42,0.26)',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: 3, background: 'linear-gradient(135deg, #BD1723, #8947B3)' }} />
            <div style={{ padding: '16px 18px 14px' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#7f1d1d', marginBottom: 6 }}>Coming Soon</div>
              <div style={{ fontSize: 13, color: '#334155', lineHeight: 1.5 }}>{comingSoonText}</div>
              <button
                onClick={() => setComingSoonText('')}
                style={{
                  marginTop: 12,
                  border: 'none',
                  borderRadius: 10,
                  padding: '8px 12px',
                  background: 'linear-gradient(135deg, #fee2e2, #f3e8ff)',
                  color: '#7f1d1d',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
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

        /* ── Card hover — icon spring ── */
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

        /* ── List hover — icon ── */
        .sz-list-item:hover .sz-nav-icon {
          animation: szIconPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
        }

        /* ── Compact hover — icon ── */
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