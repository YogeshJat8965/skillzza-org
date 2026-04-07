import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { getAssetPath, getRoutePath } from '../utils/assets';

/* ═══════════════════════════════════════════════════════════════
   NAV DATA — enriched with gradient icons, descriptions, pills
   All routes remain identical to the original navbar
═══════════════════════════════════════════════════════════════ */

const navItems = [
  {
    name: 'Products',
    layout: 'card-grid',
    columns: 3,
    width: 860,
    eyebrow: 'Products & Platform',
    dotColor: '#e02020',
    accentGradient: 'linear-gradient(135deg, #e02020, #f5a623)',
    cta: {
      text: 'Start your free skill assessment',
      sub: '— discover your strengths in under 10 minutes.',
      link: '/product/potential-meter',
    },
    items: [
      {
        name: 'The Potential Meter',
        link: '/product/potential-meter',
        icon: '🎯',
        desc: 'AI skill assessment engine that maps strengths, career readiness & growth gaps.',
        pill: 'AI-powered',
        pillColor: 'red',
        iconGradient: 'linear-gradient(135deg, #fee2e2, #fecaca)',
        iconShadow: '0 4px 12px rgba(239,68,68,0.15)',
      },
      {
        name: 'Xperience Platform',
        link: '/product/xperience-platform',
        icon: '🌐',
        desc: 'Immersive job simulations across domains to build real skills & portfolios.',
        pill: 'Flagship',
        pillColor: 'teal',
        iconGradient: 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
        iconShadow: '0 4px 12px rgba(20,184,166,0.15)',
      },
      {
        name: 'Talent Intelligence',
        link: '/product/talent-intelligence',
        icon: '📊',
        desc: 'End-to-end talent insights engine matching potential to job roles at scale.',
        pill: 'Enterprise',
        pillColor: 'blue',
        iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        iconShadow: '0 4px 12px rgba(59,130,246,0.15)',
      },
      {
        name: 'AI HackNex',
        link: '/product/ai-hacknex',
        icon: '⚡',
        desc: 'High-impact AI hackathon platform for students & institutions.',
        pill: 'New',
        pillColor: 'purple',
        iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
        iconShadow: '0 4px 12px rgba(168,85,247,0.15)',
      },
      {
        name: 'Hirenest',
        link: '/product/hirenest',
        icon: '🤝',
        desc: 'College-to-campus hiring marketplace with pre-assessed student profiles.',
        pill: 'Marketplace',
        pillColor: 'orange',
        iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
        iconShadow: '0 4px 12px rgba(245,158,11,0.15)',
      },
      {
        name: 'Skillzza Persona',
        link: '/explore/skillzza-persona',
        icon: '🎭',
        desc: 'AI roleplay simulation — interviews, workplace scenarios, confidence building.',
        pill: 'AI Agent',
        pillColor: 'purple',
        iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
        iconShadow: '0 4px 12px rgba(168,85,247,0.15)',
      },
      {
        name: 'Skill DNA Engine',
        link: null,
        icon: '🔍',
        desc: 'Deep behavioural profiling that maps hidden competencies beyond resumes.',
        pill: 'New',
        pillColor: 'green',
        iconGradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
        iconShadow: '0 4px 12px rgba(34,197,94,0.15)',
      },
      {
        name: 'AgentMatch AI',
        link: null,
        icon: '🤖',
        desc: 'Agentic recruiter that autonomously screens, ranks and shortlists talent.',
        pill: 'Agentic',
        pillColor: 'orange',
        iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
        iconShadow: '0 4px 12px rgba(245,158,11,0.15)',
      },
    ],
  },
  /* NEW */
  {
    name: 'Agentic AI',
    layout: 'agentic-ai',
    width: 820,
    eyebrow: 'Agentic AI — autonomous skill & talent intelligence',
    dotColor: '#00e5b0',
    accentGradient: 'linear-gradient(135deg, #00e5b0, #38d9f5)',
    badge: 'New',
    agentFlow: ['Assess', 'Simulate', 'Coach', 'Match', 'Hire', 'Upskill Loop'],
    learnerAgents: [
      { name: 'Career Navigator Agent', desc: 'Proactively maps your skill gaps against live job market signals.', icon: '🤖', pill: 'Agent', pillColor: 'purple' },
      { name: 'AI Learning Coach', desc: 'Personalised micro-learning paths, adapted in real time.', icon: '🧠', pill: 'Adaptive', pillColor: 'teal' },
      { name: 'Interview Simulation Agent', desc: 'Live AI interviewer with instant feedback and scoring.', icon: '🎯', pill: 'Real-time', pillColor: 'pink' },
      { name: 'Portfolio Builder Agent', desc: 'Auto-generates a verified portfolio from simulations and projects.', icon: '📋', pill: 'New', pillColor: 'blue' },
    ],
    enterpriseAgents: [
      { name: 'AgentMatch Recruiter', desc: 'Autonomous screening, ranking and shortlisting at scale.', icon: '⚙️', pill: 'Agentic', pillColor: 'orange' },
      { name: 'Workforce Intelligence Agent', desc: 'Real-time skill mapping across departments and campuses.', icon: '🔬', pill: 'Beta', pillColor: 'green' },
      { name: 'Multi-Agent Talent Orchestrator', desc: 'Coordinates assess → match → hire → upskill as one agentic flow.', icon: '🌐', pill: 'Soon', pillColor: 'orange' },
      { name: 'Skill Market Pulse', desc: 'Live labour market signal agent — trends, demand spikes, salary shifts.', icon: '📡', pill: 'Live', pillColor: 'purple' },
    ],
  },
  /* NEW */
  {
    name: 'K-12 Vidya',
    layout: 'k12-vidya',
    width: 780,
    eyebrow: 'K-12 Vidya AI — school intelligence ecosystem',
    dotColor: '#00e5b0',
    accentGradient: 'linear-gradient(135deg, #00e5b0, #38d9f5)',
    badge: 'Studio',
    items: [
      { name: 'Vidya AI Virtual Internship', link: '/academy/byteminds', icon: '🏫', desc: 'Real-world AI, coding and deeptech internship simulations designed for school students aged 13-18.', pill: 'Flagship', pillColor: 'teal', iconGradient: 'linear-gradient(135deg, #ccfbf1, #99f6e4)', iconShadow: '0 4px 12px rgba(20,184,166,0.15)' },
      { name: 'Skill Studio for Students', link: null, icon: '🎓', desc: 'Gamified AI-powered skill tracks — ML basics, robotics, sustainability, drone tech, quantum intro.', pill: 'Grades 6-12', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)', iconShadow: '0 4px 12px rgba(168,85,247,0.15)' },
      { name: 'Teacher AI Upskill Lab', link: null, icon: '👩‍🏫', desc: 'Structured AI literacy programme for educators — pedagogy, tools, classroom integration, assessments.', pill: 'CPD certified', pillColor: 'orange', iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)', iconShadow: '0 4px 12px rgba(245,158,11,0.15)' },
      { name: 'CCMM — AI Maturity for Schools', link: null, icon: '📊', desc: 'Continuous Capability & Maturity Model — benchmarks school AI readiness across 5 dimensions.', pill: 'Assessment', pillColor: 'blue', featured: true, iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', iconShadow: '0 4px 12px rgba(59,130,246,0.15)' },
      { name: 'Campus Connect — K12', link: null, icon: '🤝', desc: 'Links top-performing school students directly to university and early internship pipelines.', pill: 'Bridge', pillColor: 'pink', iconGradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8)', iconShadow: '0 4px 12px rgba(236,72,153,0.15)' },
      { name: 'Future Founders Track', link: null, icon: '🌱', desc: 'Entrepreneurship & innovation bootcamp — problem-solving, pitching, and startup thinking for teens.', pill: 'New', pillColor: 'green', iconGradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)', iconShadow: '0 4px 12px rgba(34,197,94,0.15)' },
    ],
  },
  {
    name: 'Deeptech Schools',
    layout: 'list-rows',
    width: 660,
    eyebrow: 'The Deeptech Studio — Specialisations',
    dotColor: '#f5a623',
    accentGradient: 'linear-gradient(135deg, #f5a623, #e02020)',
    items: [
      { name: 'School of AI & Quantum Intelligence', link: '/academy/byteminds', icon: '🧠', desc: 'ML, neural architectures, quantum algorithms, agentic AI systems', pill: 'AI + Quantum', pillColor: 'purple', iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)', iconShadow: '0 4px 12px rgba(168,85,247,0.15)' },
      { name: 'Global School of Sustainability & Climate Action', link: '/academy/sustainability', icon: '🌍', desc: 'Green tech, carbon markets, ESG frameworks, climate data science', pill: 'New', pillColor: 'green', iconGradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)', iconShadow: '0 4px 12px rgba(34,197,94,0.15)' },
      { name: 'Centre of Digital & Design Excellence', link: '/academy/digital-design', icon: '🎨', desc: 'UX/UI, VFX, generative AI art, immersive media, spatial design', iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)', iconShadow: '0 4px 12px rgba(245,158,11,0.15)' },
      { name: 'School of EV & E-Mobility', link: '/academy/ev-mobility', icon: '⚡', desc: 'Electric vehicles, battery systems, smart transport, grid tech', pill: 'Beta', pillColor: 'blue', iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', iconShadow: '0 4px 12px rgba(59,130,246,0.15)' },
      { name: 'Institute of Aerial Intelligence', link: '/academy/udan', icon: '🚁', desc: 'Drone systems, UAV operations, aerial data & AI navigation', pill: 'New', pillColor: 'red', iconGradient: 'linear-gradient(135deg, #fee2e2, #fecaca)', iconShadow: '0 4px 12px rgba(239,68,68,0.15)' },
      { name: 'Cybersecurity & Ethical AI School', link: null, icon: '🔐', desc: 'Threat intelligence, AI safety, responsible automation, governance', pill: 'New', pillColor: 'green', iconGradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)', iconShadow: '0 4px 12px rgba(34,197,94,0.15)' },
    ],
  },
  {
    name: 'Services',
    layout: 'services-grid',
    width: 740,
    eyebrow: 'Skillzza as a service — consulting & transformation',
    dotColor: '#ff6b9d',
    accentGradient: 'linear-gradient(135deg, #ff6b9d, #f5a623)',
    cta: {
      text: 'Partner with Skillzza',
      sub: '— universities, enterprises and governments building future-ready talent.',
      link: '/company/partnerships',
    },
    items: [
      { name: 'Institution Transformation', icon: '🏛️', desc: 'End-to-end curriculum redesign and AI integration for universities and colleges.', link: '/company/partnerships' },
      { name: 'Enterprise Skill Audit', icon: '🏢', desc: 'Workforce capability mapping, gap analysis and a 90-day upskilling roadmap.', link: '/company/partnerships' },
      { name: 'Govt & CSR Programmes', icon: '🏛️', desc: 'National skill missions, youth employment schemes and impact reporting.', link: '/company/partnerships' },
      { name: 'Assessment-as-a-Service', icon: '🎓', desc: 'White-label Potential Meter and CCMM for partners, boards and accreditors.', link: '/company/partnerships' },
      { name: 'API & Platform Licensing', icon: '🔗', desc: "Embed Skillzza's assessment, simulation and matching engine into your platform.", link: '/company/partnerships' },
      { name: 'Talent Intelligence Reports', icon: '📡', desc: 'Bespoke workforce analytics, labour market signals and sector skill reports.', link: '/company/partnerships' },
    ],
  },
  {
    name: 'Insights',
    layout: 'list-rows',
    width: 540,
    eyebrow: 'Resources & Knowledge',
    dotColor: '#0ea5e9',
    accentGradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    items: [
      { name: 'Skill Blueprint — Case Studies', link: '/insights/skill-blueprint', icon: '📘', desc: 'Real-world success stories in skill development', iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', iconShadow: '0 4px 12px rgba(59,130,246,0.15)' },
      { name: 'The Skillzza Digest', link: '/insights/skill-digest', icon: '✍️', desc: 'Insights, trends & game-changers shaping future skills', iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)', iconShadow: '0 4px 12px rgba(245,158,11,0.15)' },
      { name: 'AI Talent Research Hub', link: '/insights/ai-talent-research-hub', icon: '🔬', desc: 'Reports & whitepapers on AI & workforce transformation', iconGradient: 'linear-gradient(135deg, #ccfbf1, #99f6e4)', iconShadow: '0 4px 12px rgba(20,184,166,0.15)' },
      { name: 'Skill Unplugged Podcast', link: '/insights/skill-unplugged-podcast', icon: '🎙️', desc: 'Raw, Real & Revolutionary talks on the future of skills', iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)', iconShadow: '0 4px 12px rgba(168,85,247,0.15)' },
      { name: 'Skillzza Live — Knowledge in Action', link: '/insights/skillzza-live', icon: '🎯', desc: 'Interactive sessions bringing learning to life', iconGradient: 'linear-gradient(135deg, #fee2e2, #fecaca)', iconShadow: '0 4px 12px rgba(239,68,68,0.15)' },
      { name: 'Agentic Workforce Index 2026', link: null, icon: '📊', desc: 'Annual report on AI agent adoption across industries', pill: 'New', pillColor: 'blue', iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', iconShadow: '0 4px 12px rgba(59,130,246,0.15)' },
    ],
  },
  {
    name: 'Company',
    layout: 'compact-grid',
    columns: 2,
    width: 480,
    eyebrow: 'About Skillzza',
    dotColor: '#6b7280',
    accentGradient: 'linear-gradient(135deg, #6b7280, #374151)',
    items: [
      { name: 'About Us', link: '/company/about', icon: '✦', desc: 'Our story, mission & vision', iconGradient: 'linear-gradient(135deg, #fee2e2, #fecaca)' },
      { name: 'Our Methodology', link: '/company/methodology', icon: '⚙', desc: 'How we build skill frameworks', iconGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)' },
      { name: 'What We Do', link: '/company/what-we-do', icon: '◆', desc: 'Products, programmes & impact', iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' },
      { name: 'Our Pathway', link: '/company/pathway', icon: '➜', desc: 'Roadmap for learners & partners', iconGradient: 'linear-gradient(135deg, #ccfbf1, #99f6e4)' },
      { name: 'Partner Collaboration', link: '/company/partnerships', icon: '🤝', desc: 'Universities, enterprises, government & CSR partnerships', span: 2, iconGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)' },
      { name: 'Careers at Skillzza', link: null, icon: '💼', desc: 'Join the team building the future of skills', iconGradient: 'linear-gradient(135deg, #dcfce7, #bbf7d0)' },
      { name: 'Press & Media', link: null, icon: '📰', desc: 'News, features & brand resources', iconGradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PILL COLOUR PALETTE — vibrant with gradient-like feel
═══════════════════════════════════════════════════════════════ */

const pillColors = {
  red:    { bg: 'linear-gradient(135deg, #fef2f2, #fee2e2)', color: '#dc2626', border: 'rgba(239,68,68,0.20)' },
  teal:   { bg: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)', color: '#0d9488', border: 'rgba(20,184,166,0.20)' },
  blue:   { bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)', color: '#2563eb', border: 'rgba(59,130,246,0.20)' },
  orange: { bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)', color: '#d97706', border: 'rgba(245,158,11,0.20)' },
  pink:   { bg: 'linear-gradient(135deg, #fdf2f8, #fce7f3)', color: '#db2777', border: 'rgba(236,72,153,0.20)' },
  green:  { bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', color: '#16a34a', border: 'rgba(34,197,94,0.20)' },
  purple: { bg: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', color: '#7c3aed', border: 'rgba(124,58,237,0.20)' },
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

const Eyebrow = ({ text, dotColor, gradient }) => (
  <div
    style={{
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      color: '#94a3b8',
      marginBottom: 18,
      paddingBottom: 14,
      borderBottom: '1px solid #f1f5f9',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      position: 'relative',
    }}
  >
    {/* Gradient accent dot */}
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: gradient || dotColor || '#e02020',
        flexShrink: 0,
        boxShadow: `0 0 8px ${dotColor || '#e02020'}40`,
      }}
    />
    {text}
  </div>
);

/* ───────────────────────────────────────────────────────────────
   CtaBar — gradient CTA strip
─────────────────────────────────────────────────────────────── */

const CtaBar = ({ cta, gradient }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={getRoutePath(cta.link)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: 18,
        background: hovered
          ? 'linear-gradient(135deg, #fef2f2, #fff7ed)'
          : 'linear-gradient(135deg, #fefefe, #fafafa)',
        border: `1px solid ${hovered ? 'rgba(224,32,32,0.25)' : '#f1f5f9'}`,
        borderRadius: 14,
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: hovered ? '0 4px 16px rgba(224,32,32,0.06)' : 'none',
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
          background: gradient || 'linear-gradient(135deg, #e02020, #f5a623)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 14,
          flexShrink: 0,
          marginLeft: 14,
          boxShadow: '0 2px 8px rgba(224,32,32,0.20)',
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

const CardGridDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${navItem.columns}, 1fr)`,
        gap: 14,
      }}
    >
      {navItem.items.map((item, i) => (
        <CardItem key={item.name} item={item} index={i} />
      ))}
    </div>
    {navItem.cta && <CtaBar cta={navItem.cta} gradient={navItem.accentGradient} />}
  </div>
);

const CardItem = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={!item.link ? e => e.preventDefault() : undefined}
      className="sz-card-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        cursor: item.link ? 'pointer' : 'default',
        background: hovered
          ? 'linear-gradient(145deg, #fff 0%, #fefcfb 50%, #fdf8f6 100%)'
          : 'linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)',
        border: `1.5px solid ${hovered ? 'transparent' : '#f0f2f5'}`,
        borderRadius: 16,
        padding: '22px 20px',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        display: 'block',
        transform: hovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,0,0,0.10), 0 6px 18px rgba(0,0,0,0.06), 0 0 0 1px rgba(224,32,32,0.06), inset 0 1px 0 rgba(255,255,255,0.9)'
          : '0 2px 8px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)',
        overflow: 'hidden',
        animationDelay: `${index * 40}ms`,
      }}
    >
      {/* Gradient border overlay on hover */}
      <div
        style={{
          position: 'absolute',
          inset: -1.5,
          borderRadius: 17,
          padding: 1.5,
          background: item.iconGradient || 'linear-gradient(135deg, #e02020, #f5a623)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none',
          opacity: hovered ? 0.7 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
      {/* Shimmer glow on hover */}
      <div
        className={hovered ? 'sz-shimmer-active' : ''}
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          pointerEvents: 'none',
          borderRadius: 16,
        }}
      />

      <GradientIcon
        icon={item.icon}
        gradient={item.iconGradient}
        shadow={hovered ? item.iconShadow : 'none'}
      />

      <div
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: '#0f172a',
          marginTop: 14,
          marginBottom: 7,
          lineHeight: 1.3,
          letterSpacing: -0.3,
        }}
      >
        {item.name}
      </div>
      <div
        style={{
          fontSize: 12.5,
          color: '#4b6280',
          lineHeight: 1.65,
          letterSpacing: 0.1,
        }}
      >
        {item.desc}
      </div>
      {item.pill && <Pill text={item.pill} color={item.pillColor} />}
    </a>
  );
};

/* ═══════════════════════════════════════════════════════════════
   LIST ROWS DROPDOWN — School of Technology, Insights
═══════════════════════════════════════════════════════════════ */

const ListRowsDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} gradient={navItem.accentGradient} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {navItem.items.map((item, i) => (
        <ListRowItem key={item.name} item={item} index={i} />
      ))}
    </div>
  </div>
);

const ListRowItem = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={!item.link ? e => e.preventDefault() : undefined}
      className="sz-list-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '13px 15px',
        borderRadius: 13,
        border: '1px solid transparent',
        background: hovered
          ? 'linear-gradient(135deg, #ffffff, #f6f9fc)'
          : 'transparent',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        position: 'relative',
        borderColor: hovered ? '#e8eef5' : 'transparent',
        boxShadow: hovered ? '0 4px 18px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)' : 'none',
        animationDelay: `${index * 30}ms`,
      }}
    >
      {/* Left accent bar on hover */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: 3,
          borderRadius: 2,
          background: item.iconGradient || 'linear-gradient(135deg, #e02020, #f5a623)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />

      <GradientIcon
        icon={item.icon}
        gradient={item.iconGradient}
        shadow={hovered ? item.iconShadow : 'none'}
        size={38}
        fontSize={17}
      />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: hovered ? '#0f172a' : '#1e293b',
            letterSpacing: -0.2,
            transition: 'color 0.2s ease',
          }}
        >
          {item.name}
        </div>
        <div style={{ fontSize: 12, color: '#5a7394', lineHeight: 1.6, marginTop: 3 }}>
          {item.desc}
        </div>
      </div>

      {item.pill ? (
        <div style={{ flexShrink: 0 }}>
          <Pill text={item.pill} color={item.pillColor} />
        </div>
      ) : (
        <div
          style={{
            color: hovered ? '#64748b' : '#cbd5e1',
            fontSize: 14,
            flexShrink: 0,
            transition: 'all 0.25s ease',
            transform: hovered ? 'translateX(2px)' : 'translateX(0)',
          }}
        >
          ↗
        </div>
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
  return (
    <a
      href={item.link ? getRoutePath(item.link) : undefined}
      onClick={!item.link ? e => e.preventDefault() : undefined}
      className="sz-compact-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, #ffffff, #f8fafc)'
          : '#f6f8fb',
        border: `1px solid ${hovered ? '#dde4ee' : '#edf0f5'}`,
        borderRadius: 13,
        padding: '15px 17px',
        cursor: item.link ? 'pointer' : 'default',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 6px 20px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
          : '0 1px 3px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7)',
        ...(item.span ? { gridColumn: `span ${item.span}` } : {}),
        animationDelay: `${index * 30}ms`,
      }}
    >
      {/* Mini icon */}
      {item.icon && (
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            background: item.iconGradient || '#f1f5f9',
            flexShrink: 0,
            marginTop: 1,
          }}
        >
          {item.icon}
        </div>
      )}
      <div>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: -0.2,
          }}
        >
          {item.name}
        </div>
        <div
          style={{
            fontSize: 11.5,
            color: '#5a7394',
            marginTop: 4,
            lineHeight: 1.55,
          }}
        >
          {item.desc}
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
  const AgentRow = ({ agent }) => (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      padding: '9px 12px', borderRadius: 10,
      border: '1px solid #f1f5f9', background: '#fafbfd',
      transition: 'all 0.2s ease', cursor: 'default',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8faff'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.background = '#fafbfd'; }}
    >
      <span style={{ fontSize: 18, lineHeight: 1 }}>{agent.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{agent.name}</span>
          {agent.pill && pc[agent.pillColor] && (
            <span style={{ fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 20, ...pc[agent.pillColor] }}>{agent.pill}</span>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: '#5a7394', lineHeight: 1.45 }}>{agent.desc}</div>
      </div>
    </div>
  );

  return (
    <div>
      <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} badge={navItem.badge} />
      {/* Agent flow bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 0,
        background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
        border: '1px solid #d1fae5', borderRadius: 10,
        padding: '8px 14px', marginBottom: 18, flexWrap: 'wrap', gap: 4,
      }}>
        {navItem.agentFlow.map((step, i) => (
          <span key={step} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, color: '#059669',
              padding: '2px 10px', borderRadius: 20,
              background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.15)',
            }}>{step}</span>
            {i < navItem.agentFlow.length - 1 && (
              <span style={{ color: '#6ee7b7', fontSize: 12, fontWeight: 700 }}>→</span>
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
    <div style={{
      background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
      border: '1px solid #d1fae5', borderRadius: 12,
      padding: '10px 16px', marginBottom: 18,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ fontSize: 20 }}>🏫</span>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#065f46' }}>Vidya AI Studio</div>
        <div style={{ fontSize: 11, color: '#059669', lineHeight: 1.4 }}>AI-powered K-12 school intelligence — assessments, simulations & teacher upskilling.</div>
      </div>
    </div>
    {/* 3-col card grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
      {navItem.items.map(item => (
        <a key={item.name} href={item.link}
          style={{
            display: 'flex', flexDirection: 'column', gap: 8,
            padding: '13px 13px 11px',
            borderRadius: 12,
            border: item.featured ? '1.5px solid rgba(59,130,246,0.3)' : '1px solid #f0f4f8',
            background: item.featured ? 'linear-gradient(135deg, #eff6ff, #dbeafe22)' : '#fafbfd',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8faff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = item.featured ? 'rgba(59,130,246,0.3)' : '#f0f4f8'; e.currentTarget.style.background = item.featured ? 'linear-gradient(135deg, #eff6ff, #dbeafe22)' : '#fafbfd'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: item.iconGradient || '#f1f5f9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 17, flexShrink: 0,
            boxShadow: item.iconShadow,
          }}>{item.icon}</div>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>{item.name}</div>
          {item.pill && pillColors[item.pillColor] && (
            <span style={{ alignSelf: 'flex-start', fontSize: 10, fontWeight: 600, padding: '1px 7px', borderRadius: 20, ...pillColors[item.pillColor] }}>{item.pill}</span>
          )}
        </a>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   ServicesGridDropdown — 3×2 service card grid + CTA
═══════════════════════════════════════════════════════════════ */

const ServicesGridDropdown = ({ navItem }) => (
  <div>
    <Eyebrow text={navItem.eyebrow} dotColor={navItem.dotColor} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: navItem.cta ? 0 : 0 }}>
      {navItem.items.map(item => (
        <a key={item.name} href={item.link}
          style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            padding: '13px 13px 11px',
            borderRadius: 12,
            border: '1px solid #f0f4f8',
            background: '#fafbfd',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f3f7ff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#f0f4f8'; e.currentTarget.style.background = '#fafbfd'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span style={{ fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1e293b', marginBottom: 3, lineHeight: 1.2 }}>{item.name}</div>
            <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.45 }}>{item.desc}</div>
          </div>
        </a>
      ))}
    </div>
    {navItem.cta && <CtaBar cta={navItem.cta} accentGradient={navItem.accentGradient} />}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   MegaDropdown — dispatches to layout-specific component
═══════════════════════════════════════════════════════════════ */

const MegaDropdown = ({ navItem }) => {
  const renderers = {
    'card-grid':     CardGridDropdown,
    'list-rows':     ListRowsDropdown,
    'compact-grid':  CompactGridDropdown,
    'agentic-ai':    AgenticAIDropdown,
    'k12-vidya':     K12VidyaDropdown,
    'services-grid': ServicesGridDropdown,
  };
  const Renderer = renderers[navItem.layout];
  if (!Renderer) return null;
  return <Renderer navItem={navItem} />;
};

/* ═══════════════════════════════════════════════════════════════
   DesktopNavItem — hover-activated mega dropdown
═══════════════════════════════════════════════════════════════ */

const DesktopNavItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const itemRef = useRef(null);
  const [pos, setPos] = useState({ left: 0 });

  const show = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 180);
  };

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
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          padding: '8px 14px',
          fontSize: 13.5,
          fontWeight: 500,
          color: open ? '#e02020' : '#475569',
          background: open ? 'rgba(224,32,32,0.04)' : 'none',
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

      {/* Dropdown panel */}
      {open && (
        <>
          {/* Invisible backdrop — click to close (NO blur) */}
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
            }}
            onClick={() => setOpen(false)}
          />
          {/* Mega dropdown */}
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
                background: '#ffffff',
                borderRadius: 20,
                padding: 0,
                boxShadow:
                  '0 32px 80px rgba(0,0,0,0.14), 0 12px 36px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                animation: 'szDdIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Top gradient accent bar */}
              <div
                style={{
                  height: 3,
                  background: item.accentGradient || 'linear-gradient(135deg, #e02020, #f5a623)',
                  borderRadius: '20px 20px 0 0',
                }}
              />
              {/* Content */}
              <div style={{ padding: '22px 24px 20px' }}>
                <MegaDropdown navItem={item} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   MobileNavItem — accordion with icons
═══════════════════════════════════════════════════════════════ */

const MobileNavItem = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
      <button
        onClick={() => setOpen(!open)}
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
        <IoIosArrowDown
          style={{
            fontSize: 14,
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#94a3b8',
          }}
        />
      </button>
      {open && (
        <div style={{ background: '#f8fafc', padding: '6px 0 12px' }}>
          {item.items.map((sub) => (
            <a
              key={sub.name}
              href={getRoutePath(sub.link)}
              onClick={onClose}
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

  return (
    <>
      <header
        style={{
          background: 'rgba(255,255,255,0.92)',
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
          <div style={{ flexShrink: 0 }}>
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
              gap: 2,
              flex: 1,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <DesktopNavItem key={item.name} item={item} />
            ))}
          </nav>

          {/* CTA buttons */}
          <div
            className="sz-cta-group"
            style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}
          >
            <a
              href={getRoutePath('/book-demo')}
              className="sz-cta-primary"
              style={{
                background: 'linear-gradient(135deg, #e02020 0%, #f5a623 100%)',
                color: '#fff',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(224,32,32,0.25)',
                transition: 'all 0.25s ease',
              }}
            >
              Book a Demo
            </a>
            <a
              href={getRoutePath('/product-tour')}
              className="sz-cta-secondary"
              style={{
                background: '#fff',
                color: '#e02020',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                border: '1.5px solid #fca5a5',
                transition: 'all 0.25s ease',
              }}
            >
              Product Tour
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="sz-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
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
                onClose={() => setMobileOpen(false)}
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
                  background: 'linear-gradient(135deg, #e02020 0%, #f5a623 100%)',
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
                href={getRoutePath('/product-tour')}
                style={{
                  background: '#fff',
                  color: '#e02020',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  border: '1.5px solid #fca5a5',
                }}
              >
                Product Tour
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Animations + responsive */}
      <style>{`
        @keyframes szDdIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.97);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes szCardIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes szShimmer {
          from { left: -100%; }
          to   { left: 200%; }
        }

        @keyframes szIconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(224,32,32,0); }
          50% { box-shadow: 0 0 12px 2px rgba(224,32,32,0.12); }
        }

        .sz-card-item,
        .sz-list-item,
        .sz-compact-item {
          animation: szCardIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }

        .sz-shimmer-active {
          animation: szShimmer 0.7s ease-in-out !important;
        }

        .sz-card-item:hover .sz-nav-icon {
          transform: scale(1.1) rotate(2deg) !important;
          animation: szIconPulse 1.5s ease-in-out infinite;
        }

        .sz-list-item:hover .sz-nav-icon {
          transform: scale(1.08) !important;
          animation: szIconPulse 1.5s ease-in-out infinite;
        }

        .sz-compact-item:hover {
          background: linear-gradient(145deg, #fff 0%, #fdf8f6 100%) !important;
        }

        .sz-cta-primary:hover {
          box-shadow: 0 6px 24px rgba(224,32,32,0.35) !important;
          transform: translateY(-2px) scale(1.02);
        }

        .sz-cta-secondary:hover {
          background: linear-gradient(135deg, #fef2f2, #fff7ed) !important;
          border-color: #f87171 !important;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 4px 16px rgba(224,32,32,0.10) !important;
        }

        .sz-desktop-nav { display: flex !important; }
        .sz-cta-group   { display: flex !important; }
        .sz-hamburger   { display: none  !important; }

        @media (max-width: 1023px) {
          .sz-desktop-nav { display: none  !important; }
          .sz-cta-group   { display: none  !important; }
          .sz-hamburger   { display: flex  !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;