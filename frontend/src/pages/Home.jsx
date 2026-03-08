import { useState, useEffect, useRef } from "react";
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

// ─── MARQUEE CSS ──────────────────────────────────────────────────────────────
const MARQUEE_CSS = `
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 24s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
* {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
*::-webkit-scrollbar {
  display: none !important;
}
.tabs-row::-webkit-scrollbar {
  display: none !important;
}
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const studioTabs = [
  {
    id: 0, label: "The potential Meter", title: "The Potential Meter",
    tagline: "From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation",
    points: [
      "Intelligent assessments of cognitive, technical, and behavioral skills.",
      "Simulation-driven evaluation of workplace attitudes and responses.",
      "Personalized career pathway recommendations.",
      "Data-driven mentoring insights powered by our proprietary 4M framework.",
    ],
    btns: ["Discover Your Potential", "Get Your Skill Report"],
  },
  {
    id: 1, label: "Xperience platform", title: "Xperience Platform",
    tagline: "Simulate. Solve. Showcase.",
    points: [
      "Role-based job simulations rooted in real-world challenges.",
      "Practical, challenge-based learning to develop problem-solving skills.",
      "Digital, verifiable portfolios aligned with employer expectations.",
      "Sharpened workplace readiness through applied learning.",
    ],
    btns: ["Start Your Simulation Journey"],
  },
  {
    id: 2, label: "Talent Transformation", title: "Talent Transformation",
    tagline: "Power Smarter Workforce Decisions with 360° Talent Intelligence.",
    points: [
      "Complete workforce skill mapping and gap analysis.",
      "Role-specific upskilling pathways aligned with business needs.",
      "Predictive talent analytics for succession planning.",
      "Behavioral intelligence matching for optimal team performance.",
      "Real-time dashboard for HR and L&D decision-making.",
    ],
    btns: ["Book Your Demo", "Download TIS Overview"],
  },
  {
    id: 3, label: "AI HackNex", title: "AI HackNex",
    tagline: "Innovate, Compete, and Get Discovered.",
    points: [
      "Participate in global AI challenges and themed innovation sprints.",
      "Tackle real-world problems from enterprise and public sectors.",
      "Earn recognition from institutions, industry leaders, and peers.",
      "Showcase your AI, data, and coding skills on leading platforms.",
    ],
    btns: ["Join the Next Challenge", "See Winner Showcases"],
  },
  {
    id: 4, label: "Hirenest", title: "Hirenest",
    tagline: "Smarter Hiring. Verified Talent. Zero Guesswork.",
    points: [
      "Access to vetted pool of skill-verified candidate pools.",
      "Reduced hiring time and improved retention rates.",
      "Live portfolio visibility and performance metrics.",
      "AI-powered matching that eliminates guesswork.",
    ],
    btns: ["Access Talent Pool", "Partner with Us"],
  },
];

const partnerLogos = [
  { img: getAssetPath("/logo-nsdc.png"), name: "NSDC" },
  { img: getAssetPath("/logo-adobe.png"), name: "Adobe" },
  { img: getAssetPath("/logo-meta.png"), name: "Meta" },
  { img: getAssetPath("/logo-microsoft.png"), name: "Microsoft" },
  { img: getAssetPath("/logo-google.png"), name: "Google" },
  { img: getAssetPath("/logo-startupindia.png"), name: "Startup India" },
  { img: getAssetPath("/logo-msme.png"), name: "MSME" },
  { img: getAssetPath("/logo-hp.png"), name: "HP" },
  { img: getAssetPath("/logo-aws.png"), name: "AWS" },
];

// ── HOW TO ADD LOGOS ──
// Download each logo and save in your /public folder with these exact names:
//
// NSDC       → /public/logo-nsdc.png
//   Source: https://nsdc.in  (NSDC official logo)
//
// Adobe      → /public/logo-adobe.png
//   Source: https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg
//
// Meta       → /public/logo-meta.png
//   Source: https://about.meta.com/brand/resources/meta/logo/
//
// Microsoft  → /public/logo-microsoft.png
//   Source: https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b
//
// Google     → /public/logo-google.png
//   Source: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
//
// Startup India → /public/logo-startupindia.png
//   Source: https://www.startupindia.gov.in  (download from their brand kit)
//
// MSME       → /public/logo-msme.png
//   Source: https://msme.gov.in  (ministry official logo)
//
// HP         → /public/logo-hp.png
//   Source: https://www.hp.com/us-en/shop/cv/images/hp-logo.png
//
// AWS        → /public/logo-aws.png
//   Source: https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg

const partnerCards = [
  { icon: "🏫", title: "Schools / Universities", desc: "Partnering to Cultivate the Next Generation of Leaders", highlighted: true },
  { icon: "🏢", title: "Corporates", desc: "Driving Business Success through Workforce Excellence", highlighted: false },
  { icon: "🏛️", title: "Government", desc: "Building a Skilled Workforce for a Stronger Economy", highlighted: false },
  { icon: "🤝", title: "Become our upskilling partner", desc: "Join Us in Shaping the Future of Work", highlighted: false },
];

const footerCols = [
  { heading: "Products", links: ["The Potential Meter AI", "Xperience Platform", "Hirenest", "Talent Transformation", "AI Hacknex"] },
  { heading: "Use Case", links: ["Student Advantage Package", "Campus Enablement Package", "Enterprise Talent Solutions Package", "Government & Csr Impact Package"] },
  { heading: "School of Technology", links: ["ByteMinds-The School of AI & Data", "Gscca-Global School Of Sustainability & Climate Action", "Centre Of Digital & Design Excellence", "School Of Ev & E-Mobility", "Udaan Aerial Intelligence"] },
  { heading: "Explore", links: ["Job Simulations Master", "Explore Domains", "Career Trajectory", "Skillzza Persona"] },
  { heading: "Insights", links: ["Skill Blueprint", "The Skill Digest", "Ai Talent Research Hub", "The Skill Unplugged Podcast", "Skillzza Live"] },
  { heading: "Company", links: ["About us", "Our Methodology", "What We Do", "Our Pathway", "Partner Collaboration", "Responsible Ai"] },
];

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimatedCounter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = (ts) => {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / 1500, 1);
          setVal(Math.round(prog * to));
          if (prog < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── MOCK DASHBOARD ───────────────────────────────────────────────────────────
function MockDashboard() {
  const courses = [
    { icon: "php", label: "Fun with PHP", level: "BEGINNERS", author: "Darrell Steward", progress: 68, done: 19, total: 20 },
    { icon: "figma", label: "Figma Workshop", level: "ADVANCED", author: "Cameron Williamson", progress: 39, done: 3, total: 8 },
    { icon: "python", label: "Python Developm...", level: "ADVANCED", author: "Jenny Wilson", progress: 21, done: 3, total: 8 },
  ];

  const tutors = [
    { name: "Kathryn Murphy", role: "PHP Developer", initials: "KM", color: "#f59e0b" },
    { name: "Annette Black", role: "Python Developer", initials: "TH", color: "#6c63ff" },
    { name: "Eleanor Pena", role: "UI Designer", initials: "EP", color: "#10b981" },
  ];

  const activityLine1 = [40, 35, 45, 38, 52, 48, 60, 55, 42, 38, 50, 44];
  const activityLine2 = [30, 42, 38, 50, 35, 55, 45, 62, 40, 48, 35, 52];
  const weeklyBars = [5, 7, 4, 6, 8, 5, 7, 6, 8, 5, 7, 9, 6, 8];

  const iconMap = {
    php: <div style={{ background: "#4f46e5", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 900, color: "#fff", flexShrink: 0 }}>php</div>,
    figma: <div style={{ background: "#111", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>🎨</div>,
    python: <div style={{ background: "#6c63ff", borderRadius: 7, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>🐍</div>,
  };

  const toPath = (data, chartW, chartH, padY) => {
    const min = Math.min(...data), max = Math.max(...data);
    const pts = data.map((v, i) => {
      const x = (i / (data.length - 1)) * chartW;
      const y = padY + chartH - ((v - min) / (max - min)) * chartH;
      return `${x},${y}`;
    });
    return "M" + pts.join(" L");
  };

  return (
    <div style={{ width: "100%", background: "#fff", borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.10)", display: "flex", overflow: "hidden", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── SIDEBAR ── */}
      <div style={{ width: 118, background: "#fff", borderRight: "1px solid #f0f0f8", padding: "14px 0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Brand */}
        <div style={{ textAlign: "center", marginBottom: 12, padding: "0 8px" }}>
          <div style={{ fontWeight: 800, fontSize: 11, color: "#1a1a2e" }}>Superb Acadi</div>
          <div style={{ fontSize: 8, color: "#9ca3af" }}>Learning with Fun</div>
        </div>

        {/* Nav */}
        {[
          { icon: "📚", label: "My Courses", active: true },
          { icon: "🔖", label: "Bookmarks" },
          { icon: "⚡", label: "Trending Courses" },
          { icon: "❓", label: "Help Articles", badge: 6 },
          { icon: "✅", label: "Completed Courses" },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 10px", background: item.active ? "#f5f3ff" : "none", borderRadius: 7, margin: "1px 5px", cursor: "pointer" }}>
            <span style={{ fontSize: 10 }}>{item.icon}</span>
            <span style={{ fontSize: 9, fontWeight: item.active ? 700 : 500, color: item.active ? "#6c63ff" : "#6b7280", lineHeight: 1.2 }}>{item.label}</span>
            {item.badge && <span style={{ marginLeft: "auto", background: "#6c63ff", color: "#fff", borderRadius: 8, fontSize: 7, padding: "1px 4px", flexShrink: 0 }}>{item.badge}</span>}
          </div>
        ))}

        {/* Tutors */}
        <div style={{ margin: "10px 10px 6px", fontSize: 9, fontWeight: 700, color: "#1a1a2e", display: "flex", alignItems: "center", gap: 4 }}>
          My Tutors
          <span style={{ background: "#e5e7eb", borderRadius: 6, padding: "1px 5px", fontSize: 8, fontWeight: 600 }}>13</span>
        </div>
        {tutors.map((t) => (
          <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.initials}</div>
            <div style={{ overflow: "hidden" }}>
              <div style={{ fontSize: 8, fontWeight: 600, color: "#1a1a2e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.name}</div>
              <div style={{ fontSize: 7, color: "#9ca3af" }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, padding: "14px 14px 12px", display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 800, fontSize: 13, color: "#1a1a2e" }}>Your Courses</span>
            <span style={{ background: "#6c63ff", color: "#fff", borderRadius: 6, fontSize: 8, fontWeight: 700, padding: "2px 7px" }}>PREMIUM</span>
          </div>
          <span style={{ fontSize: 8, color: "#9ca3af" }}>👤 26 courses</span>
        </div>

        {/* Course Cards */}
        <div style={{ display: "flex", gap: 7 }}>
          {courses.map((c) => (
            <div key={c.label} style={{ flex: 1, background: "#fafafa", borderRadius: 9, padding: "9px 8px", border: "1px solid #f0f0f8", minWidth: 0 }}>
              <div style={{ fontSize: 7, color: "#e02020", fontWeight: 700, marginBottom: 3, letterSpacing: 0.3 }}>{c.level}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                {iconMap[c.icon]}
                <div style={{ fontWeight: 700, fontSize: 9, color: "#1a1a2e", lineHeight: 1.2, overflow: "hidden" }}>{c.label}</div>
              </div>
              <div style={{ fontSize: 7.5, color: "#9ca3af", marginBottom: 6 }}>by {c.author}</div>
              <div style={{ background: "#ebebf5", borderRadius: 3, height: 3.5, marginBottom: 4 }}>
                <div style={{ width: `${c.progress}%`, background: "linear-gradient(90deg,#6c63ff,#a78bfa)", borderRadius: 3, height: "100%" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 7.5, color: "#9ca3af" }}>
                <span>{c.progress}%</span>
                <span>{c.done}/{c.total}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div style={{ display: "flex", gap: 8 }}>

          {/* Daily Learning Activity */}
          <div style={{ flex: 1.5, background: "#fafafa", borderRadius: 9, padding: "9px 10px", border: "1px solid #f0f0f8", minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 10, color: "#1a1a2e", marginBottom: 1 }}>Daily Learning Activity</div>
            <div style={{ fontSize: 7.5, color: "#9ca3af", marginBottom: 7 }}>Time you spend every day on learning</div>
            <svg width="100%" height="65" viewBox="0 0 220 65" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#6c63ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d={toPath(activityLine1, 220, 50, 5) + ` L220,65 L0,65 Z`}
                fill="url(#gFill)"
              />
              {/* Line 1 - purple */}
              <path d={toPath(activityLine1, 220, 50, 5)} fill="none" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              {/* Line 2 - cyan dashed */}
              <path d={toPath(activityLine2, 220, 50, 5)} fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
              {/* Highlight dot on line1 peak */}
              <circle cx="130" cy="12" r="4" fill="#6c63ff" />
              <circle cx="130" cy="12" r="7" fill="#6c63ff" fillOpacity="0.2" />
            </svg>
          </div>

          {/* Weekly Status */}
          <div style={{ flex: 1, background: "#fafafa", borderRadius: 9, padding: "9px 10px", border: "1px solid #f0f0f8" }}>
            <div style={{ fontWeight: 700, fontSize: 10, color: "#1a1a2e", marginBottom: 7 }}>Weekly Status</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2.5, height: 52 }}>
              {weeklyBars.map((v, i) => (
                <div key={i} style={{ flex: 1, height: `${(v / 9) * 100}%`, background: i % 2 === 0 ? "#6c63ff" : "#22d3ee", borderRadius: "2px 2px 0 0", minWidth: 5 }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
              <div>
                <div style={{ fontSize: 7.5, color: "#9ca3af" }}>Minimum</div>
                <div style={{ fontWeight: 800, fontSize: 10, color: "#1a1a2e" }}>4 Hrs</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 7.5, color: "#9ca3af" }}>Maximum</div>
                <div style={{ fontWeight: 800, fontSize: 10, color: "#1a1a2e" }}>8 Hrs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── PARTNER LOGO CARD ────────────────────────────────────────────────────────
function PartnerLogoCard({ p }) {
  return (
    <div style={{ flexShrink: 0, width: 180, height: 100, border: "1px solid #e5e7eb", borderRadius: 10, padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", margin: "0 8px" }}>
      <img src={p.img} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </div>
  );
}

// ─── PARTNERSHIP CARDS ───────────────────────────────────────────────────────
function PartnerCard({ title, desc, svgFn }) {
  const [hovered, setHovered] = useState(false);
  const stroke = hovered ? "#fff" : "#6b7280";
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#7c3aed" : "#f3f4f6",
        borderRadius: 16, padding: "28px 24px", cursor: "pointer",
        transition: "background .25s, transform .2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}>
      {svgFn(stroke)}
      <h4 style={{ fontSize: 17, fontWeight: 800, color: hovered ? "#fff" : "#1f2937", marginBottom: 10, lineHeight: 1.3 }}>{title}</h4>
      <p style={{ fontSize: 13, color: hovered ? "rgba(255,255,255,0.85)" : "#6b7280", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function PartnershipCards() {
  const cards = [
    {
      title: <>Schools /<br />Universities</>,
      desc: "Partnering to Cultivate the Next Generation of Leaders",
      svgFn: (s) => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 14 }}>
          <rect x="8" y="20" width="32" height="22" rx="2" stroke={s} strokeWidth="2" fill="none"/>
          <path d="M4 22L24 8l20 14" stroke={s} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <rect x="18" y="30" width="12" height="12" rx="1" stroke={s} strokeWidth="2" fill="none"/>
          <rect x="14" y="24" width="6" height="6" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="28" y="24" width="6" height="6" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Corporates",
      desc: "Driving Business Success through Workforce Excellence",
      svgFn: (s) => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 14 }}>
          <rect x="6" y="14" width="36" height="28" rx="2" stroke={s} strokeWidth="2" fill="none"/>
          <path d="M16 14V10a2 2 0 012-2h12a2 2 0 012 2v4" stroke={s} strokeWidth="2" fill="none"/>
          <line x1="6" y1="26" x2="42" y2="26" stroke={s} strokeWidth="2"/>
          <rect x="20" y="26" width="8" height="8" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="12" y="18" width="5" height="5" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="31" y="18" width="5" height="5" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Government",
      desc: "Building a Skilled Workforce for a Stronger Economy",
      svgFn: (s) => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 14 }}>
          <rect x="6" y="20" width="36" height="22" rx="2" stroke={s} strokeWidth="2" fill="none"/>
          <path d="M4 22L24 6l20 16" stroke={s} strokeWidth="2" strokeLinecap="round" fill="none"/>
          <rect x="10" y="26" width="6" height="10" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="21" y="26" width="6" height="10" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="32" y="26" width="6" height="10" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <rect x="18" y="10" width="12" height="6" rx="1" stroke={s} strokeWidth="1.5" fill="none"/>
          <line x1="24" y1="10" x2="24" y2="6" stroke={s} strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: <>Become our<br />upskilling partner</>,
      desc: "Join Us in Shaping the Future of Work",
      svgFn: (s) => (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 14 }}>
          <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke={s} strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M8 40c0-6.6 7.2-12 16-12" stroke={s} strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M30 34l4 4 8-8" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {cards.map((c, i) => <PartnerCard key={i} {...c} />)}
    </div>
  );
}

// ─── ECOSYSTEM SECTION ────────────────────────────────────────────────────────
function EcosystemSection() {
  const containerRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);
  const barRef = useRef(null);
  const leftCardRef = useRef(null);
  const centerCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const [lines, setLines] = useState(null);

  useEffect(() => {
    function calc() {
      const c = containerRef.current?.getBoundingClientRect();
      if (!c) return;
      const get = (ref) => ref.current?.getBoundingClientRect();
      const lc = get(leftCircleRef);
      const rc = get(rightCircleRef);
      const bar = get(barRef);
      const lCard = get(leftCardRef);
      const mCard = get(centerCardRef);
      const rCard = get(rightCardRef);
      if (!lc || !rc || !bar || !lCard || !mCard || !rCard) return;

      const barY = bar.top - c.top + bar.height / 2;

      const d1x = bar.left - c.left;
      const d2x = bar.left - c.left + bar.width * 0.25;
      const d3x = bar.left - c.left + bar.width * 0.5;
      const d4x = bar.left - c.left + bar.width * 0.75;
      const d5x = bar.left - c.left + bar.width;

      const lcX = lc.right - c.left;
      const lcY = lc.top - c.top + lc.height / 2;

      const rcX = rc.left - c.left;
      const rcY = rc.top - c.top + rc.height / 2;

      const lCardX = lCard.left - c.left + lCard.width / 2;
      const lCardY = lCard.top - c.top;
      const mCardX = mCard.left - c.left + mCard.width / 2;
      const mCardY = mCard.top - c.top;
      const rCardX = rCard.left - c.left + rCard.width / 2;
      const rCardY = rCard.top - c.top;

      setLines({ barY, d1x, d2x, d3x, d4x, d5x, lcX, lcY, rcX, rcY, lCardX, lCardY, mCardX, mCardY, rCardX, rCardY });
    }
    
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section style={{ background: "linear-gradient(160deg,#f8f4ff 0%,#ede8fb 60%,#e4dcf8 100%)", padding: "80px 0 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a2e" }}>Skillzza Ecosystem</h2>
          <p style={{ color: "#6b7280", marginTop: 8, fontSize: 15 }}>Empowering Every Learner, Every Step of the Way</p>
        </div>

        <div ref={containerRef} style={{ position: "relative" }}>

          {lines && (
            <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible", zIndex: 1 }}>
              <path
                d={`M ${lines.d1x} ${lines.barY} C ${lines.d1x - 80} ${lines.barY}, ${lines.lcX + 60} ${lines.lcY}, ${lines.lcX} ${lines.lcY}`}
                stroke="#c4b5fd" strokeWidth="2.5" fill="none"
              />
              <path
                d={`M ${lines.d2x} ${lines.barY} C ${lines.d2x} ${lines.barY + 100}, ${lines.lCardX} ${lines.lCardY - 80}, ${lines.lCardX} ${lines.lCardY}`}
                stroke="#c4b5fd" strokeWidth="2.5" fill="none"
              />
              <line x1={lines.d3x} y1={lines.barY} x2={lines.mCardX} y2={lines.mCardY} stroke="#c4b5fd" strokeWidth="2.5" />
              <path
                d={`M ${lines.d4x} ${lines.barY} C ${lines.d4x} ${lines.barY + 100}, ${lines.rCardX} ${lines.rCardY - 80}, ${lines.rCardX} ${lines.rCardY}`}
                stroke="#c4b5fd" strokeWidth="2.5" fill="none"
              />
              <path
                d={`M ${lines.d5x} ${lines.barY} C ${lines.d5x + 80} ${lines.barY}, ${lines.rcX - 60} ${lines.rcY}, ${lines.rcX} ${lines.rcY}`}
                stroke="#c4b5fd" strokeWidth="2.5" fill="none"
              />
              {[lines.d1x, lines.d2x, lines.d3x, lines.d4x, lines.d5x].map((x, i) => (
                <circle key={i} cx={x} cy={lines.barY} r="5" fill="#c4b5fd" />
              ))}
            </svg>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>

            <div ref={leftCircleRef} style={{
              width: 240, height: 240, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(220,200,255,0.95) 0%, rgba(180,140,245,0.9) 100%)",
              border: "2px solid rgba(170,130,240,0.5)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center", padding: 28, flexShrink: 0, position: "relative", zIndex: 2,
              boxShadow: "0 8px 32px rgba(107,33,168,0.18)",
            }}>
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 10 }}>
                <circle cx="18" cy="18" r="16" stroke="#6d28d9" strokeWidth="2" fill="none"/>
                <circle cx="18" cy="18" r="10" stroke="#6d28d9" strokeWidth="2" fill="none"/>
                <circle cx="18" cy="18" r="4" fill="#6d28d9"/>
                <line x1="18" y1="2" x2="18" y2="8" stroke="#e02020" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="26" y1="4" x2="22" y2="10" stroke="#e02020" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#2d1b4e", marginBottom: 8 }}>The Potential Meter</div>
              <div style={{ fontSize: 10, color: "#4b3080", lineHeight: 1.7, marginBottom: 10 }}>
                • Multi-dimensional AI skill profiling<br/>
                • Workplace simulation assessments<br/>
                • Career pathway recommendations<br/>
                • Guided mentoring via 4M Framework
              </div>
              <span style={{ background: "rgba(107,33,168,0.2)", color: "#5b21b6", fontSize: 9, fontWeight: 700, padding: "4px 14px", borderRadius: 20, border: "1px solid rgba(107,33,168,0.3)" }}>AI Skill Engine</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, position: "relative", zIndex: 3 }}>
              <div style={{
                width: 160, height: 130, background: "#fff",
                border: "2.5px solid #d0c0f0", borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(107,33,168,0.12)",
              }}>
                <span style={{ fontSize: 70 }}>🎓</span>
              </div>
              <div ref={barRef} style={{ width: 160, height: 3, background: "#b0a0d0", borderRadius: 2, marginTop: 8 }} />
            </div>

            <div ref={rightCircleRef} style={{
              width: 240, height: 240, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(220,200,255,0.95) 0%, rgba(180,140,245,0.9) 100%)",
              border: "2px solid rgba(170,130,240,0.5)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center", padding: 28, flexShrink: 0, position: "relative", zIndex: 2,
              boxShadow: "0 8px 32px rgba(107,33,168,0.18)",
            }}>
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 10 }}>
                <rect x="4" y="12" width="28" height="20" rx="3" stroke="#6d28d9" strokeWidth="2" fill="none"/>
                <path d="M13 12V9a2 2 0 012-2h6a2 2 0 012 2v3" stroke="#6d28d9" strokeWidth="2" fill="none"/>
                <line x1="4" y1="22" x2="32" y2="22" stroke="#6d28d9" strokeWidth="2"/>
              </svg>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#2d1b4e", marginBottom: 8 }}>Xperience Platform</div>
              <div style={{ fontSize: 10, color: "#4b3080", lineHeight: 1.7, marginBottom: 10 }}>
                • Real-world job simulations<br/>
                • Challenge-based learning journeys<br/>
                • Digital, verifiable portfolios<br/>
                • Applied learning for job readiness
              </div>
              <span style={{ background: "rgba(107,33,168,0.2)", color: "#5b21b6", fontSize: 9, fontWeight: 700, padding: "4px 14px", borderRadius: 20, border: "1px solid rgba(107,33,168,0.3)" }}>Immersive Learning Labs</span>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 90, marginBottom: 60, position: "relative", zIndex: 2 }}>

            <div ref={leftCardRef} style={{
              flex: "0 1 300px", background: "linear-gradient(135deg,#a855f7 0%,#7c3aed 100%)",
              borderRadius: 24, padding: "36px 28px", color: "#fff",
              boxShadow: "0 12px 32px rgba(168,85,247,0.32)",
            }}>
              <div style={{ width: 56, height: 56, background: "rgba(255,255,255,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="30" height="30" viewBox="0 0 26 26" fill="none">
                  <circle cx="10" cy="8" r="4" stroke="#fff" strokeWidth="1.8" fill="none"/>
                  <path d="M2 22c0-4.4 3.6-8 8-8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <circle cx="19" cy="17" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M19 13.5v1M19 20.5v1M15.5 17h1M22.5 17h-1M16.5 14.5l.7.7M21.5 19.5l-.7-.7M16.5 19.5l.7-.7M21.5 14.5l-.7.7" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 14 }}>Talent Transformation</div>
              <div style={{ fontSize: 11, lineHeight: 1.8, opacity: 0.95, marginBottom: 20 }}>
                • Workforce skill mapping & gap analysis<br/>
                • Role-specific upskilling programs<br/>
                • Succession & talent planning analytics<br/>
                • Behavioral matching for team performance
              </div>
              <span style={{ display: "inline-block", background: "rgba(255,255,255,0.25)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "6px 16px", borderRadius: 24 }}>Career Mobility Pipeline</span>
            </div>

            <div ref={centerCardRef} style={{
              flex: "0 1 300px", background: "linear-gradient(135deg,#8b5cf6 0%,#6d28d9 100%)",
              borderRadius: 24, padding: "36px 28px", color: "#fff",
              boxShadow: "0 16px 40px rgba(109,40,217,0.45)",
            }}>
              <div style={{ width: 56, height: 56, background: "rgba(255,255,255,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="30" height="30" viewBox="0 0 26 26" fill="none">
                  <path d="M13 3a7 7 0 0 1 4 12.7V18H9v-2.3A7 7 0 0 1 13 3z" stroke="#fff" strokeWidth="1.8" fill="none"/>
                  <line x1="9" y1="20" x2="17" y2="20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="11" y1="22.5" x2="15" y2="22.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="19" cy="9" r="2" stroke="#fff" strokeWidth="1.3" fill="none"/>
                  <line x1="17" y1="9" x2="15" y2="9" stroke="#fff" strokeWidth="1.3"/>
                </svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 14 }}>AI HackNex</div>
              <div style={{ fontSize: 11, lineHeight: 1.8, opacity: 0.95, marginBottom: 20 }}>
                • Global AI challenges & innovation sprints<br/>
                • Real-world enterprise problem-solving<br/>
                • Recognition from industry leaders<br/>
                • Skill showcase on top platforms
              </div>
              <span style={{ display: "inline-block", background: "rgba(255,255,255,0.25)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "6px 16px", borderRadius: 24 }}>Innovation Hub</span>
            </div>

            <div ref={rightCardRef} style={{
              flex: "0 1 300px", background: "linear-gradient(135deg,#a855f7 0%,#7c3aed 100%)",
              borderRadius: 24, padding: "36px 28px", color: "#fff",
              boxShadow: "0 12px 32px rgba(168,85,247,0.32)",
            }}>
              <div style={{ width: 56, height: 56, background: "rgba(255,255,255,0.25)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <svg width="30" height="30" viewBox="0 0 26 26" fill="none">
                  <path d="M2 14l5-5 3 2 4-4 4 4 3-2 3 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M10 11l3 3 3-3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
                  <path d="M7 17c1.5 2 4 3 6 3s4.5-1 6-3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 14 }}>Hirenest</div>
              <div style={{ fontSize: 11, lineHeight: 1.8, opacity: 0.95, marginBottom: 20 }}>
                • AI-matched, skill-verified talent pools<br/>
                • Live portfolios & performance metrics<br/>
                • Reduced hiring time, better retention
              </div>
              <span style={{ display: "inline-block", background: "rgba(255,255,255,0.25)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "6px 16px", borderRadius: 24 }}>Smart Hiring</span>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <button style={{
              background: "linear-gradient(90deg,#f5a623 0%,#f0c040 100%)",
              color: "#1a1a1a", border: "none", borderRadius: 30,
              padding: "13px 52px", fontSize: 16, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 4px 16px rgba(245,166,35,0.5)",
            }}>Talent Marketplace</button>
          </div>

        </div>
      </div>

      <div style={{ marginTop: 40, background: "linear-gradient(90deg,#8b5cf6 0%,#7c3aed 50%,#6d28d9 100%)", padding: "28px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {[
            { icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="6" y="4" width="24" height="28" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><line x1="11" y1="12" x2="25" y2="12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><line x1="11" y1="17" x2="25" y2="17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><line x1="11" y1="22" x2="19" y2="22" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><circle cx="27" cy="27" r="6" fill="#7c3aed" stroke="#fff" strokeWidth="1.5"/><path d="M24.5 27l1.5 1.5 2.5-2.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "Assessment" },
            { icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="13" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="26" cy="10" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M4 28c0-5 4-9 9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M20 22c2-1 4-1.5 6-1.5 3.3 0 6 1.5 6 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="26" y1="16" x2="26" y2="20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>, label: "Mentoring" },
            { icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="6" width="28" height="20" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><line x1="18" y1="26" x2="18" y2="32" stroke="#fff" strokeWidth="2"/><line x1="12" y1="32" x2="24" y2="32" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><polygon points="14,11 14,21 24,16" fill="#fff"/></svg>, label: "Simulations" },
            { icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="8" width="28" height="20" rx="3" stroke="#fff" strokeWidth="2" fill="none"/><path d="M10 22l5-6 4 4 3-4 4 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="13" cy="14" r="2.5" fill="#fff"/></svg>, label: "Project Showcase" },
            { icon: <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="12" r="5" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="28" cy="11" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M6 28c0-5.5 5.4-10 12-10s12 4.5 12 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>, label: "Get Hired" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, color: "#fff" }}>
              {item.icon}
              <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0.2 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SkillzzaHome() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = studioTabs[activeTab];

  useEffect(() => {
    if (document.getElementById("skz-marquee-css")) return;
    const el = document.createElement("style");
    el.id = "skz-marquee-css";
    el.textContent = MARQUEE_CSS;
    document.head.appendChild(el);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1f2937", overflowX: "hidden" }}>

      {/* HERO SECTION */}
      <section style={{
        position: "relative",
        minHeight: 700,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundImage: getBackgroundImageUrl('/hero-background.png'),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        {/* Hero Girl Image */}
        <div style={{ position: "absolute", right: 0, bottom: 0, top: 0, width: "50%", zIndex: 5, display: "flex", alignItems: "flex-end", justifyContent: "center", pointerEvents: "none" }}>
          {/* Red block behind */}
          <div style={{ position: "absolute", right: 0, top: "10%", width: "55%", height: "80%", background: "#e02020", borderRadius: "16px 0 0 16px", zIndex: 1 }} />
          <img
            src={getAssetPath("/hero-girl.jpeg")}
            alt="Hero"
            style={{ position: "relative", zIndex: 2, height: "95%", maxHeight: 620, objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.15))" }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "60px 60px", width: "100%" }}>
          <div style={{ maxWidth: 550 }}>
            <h1 style={{
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#1f2937",
              marginBottom: 24,
              letterSpacing: "-0.5px"
            }}>
              The AI-Powered<br />
              Career Engine for<br />
              Tomorrow's Talent
            </h1>
            <p style={{
              fontSize: 16,
              color: "#6b7280",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 480
            }}>
              From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation
            </p>
            <div style={{ display: "flex", gap: 16, marginBottom: 0, flexWrap: "wrap" }}>
              <button style={{
                background: "linear-gradient(90deg, #e02020 0%, #f5a623 100%)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(224,32,32,0.3)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
              >
                Start Your Journey
              </button>
              <button style={{
                background: "#fff",
                color: "#374151",
                padding: "14px 32px",
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 15,
                border: "2px solid #d1d5db",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f9fafb";
                e.target.style.borderColor = "#9ca3af";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#fff";
                e.target.style.borderColor = "#d1d5db";
              }}
              >
                How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Bottom feature strip */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(226,226,226,0.5)",
          display: "flex",
          boxShadow: "0 -4px 16px rgba(0,0,0,.04)",
        }}>
          {[
            { icon: "📋", bg: "#dbeafe", tc: "#1d4ed8", text: "Discover your strengths through smart assessments" },
            { icon: "👥", bg: "#ede9fe", tc: "#6b21a8", text: "Simulate real-world roles to sharpen your edge" },
            { icon: "💼", bg: "#fef3c7", tc: "#d97706", text: "Build a portfolio that proves your potential" },
            { icon: "📊", bg: "#fee2e2", tc: "#e02020", text: "Get matched with the right opportunities" },
          ].map((f, i, arr) => (
            <div key={i} style={{
              flex: 1,
              padding: "18px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              borderRight: i < arr.length - 1 ? "1px solid #e5e7eb" : "none",
              fontSize: 13,
              fontWeight: 500,
              color: "#4b5563",
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: f.bg,
                color: f.tc,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 18,
                fontWeight: 600,
              }}>
                {f.icon}
              </div>
              <span style={{ lineHeight: 1.4 }}>{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
            <h2 style={{ fontSize: 38, fontWeight: 800 }}>The Challenge<br />A Widening Skill Gap</h2>
            <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.</p>
          </div>
          <div style={{ display: "flex", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.08)" }}>
            <div style={{ flex: 1, minHeight: 360, background: "linear-gradient(135deg,#f5f0e8,#ede0c8)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32 }}>
              <img src={getAssetPath("/skill-gap-image.png")} alt="Skill Gap" style={{ width: "500px", height: "500px", objectFit: "cover", borderRadius: 8 }} />
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16, padding: 16 }}>
              {[
                { num: 69, suffix: "%", title: "The Recruitment Crisis", desc: "Nearly 69% of organizations report ongoing difficulties recruiting for full-time roles reflecting persistent hiring challenges across sectors.", bg: "#e02020" },
                { num: 74, suffix: "%", title: "The AI Training Gap", desc: "Although 74% of employees use AI tools at work, only 33% have received formal training to use them effectively and safely.", bg: "#c0150a" },
                { num: 59, suffix: "%", title: "The Reskilling Imperative", desc: "By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025.", bg: "#b01208" },
                { num: 63, suffix: "%", title: "Skills Are the Biggest Barrier", desc: "With 63% of employers citing skill gaps as the top barrier to transformation, 85% plan to prioritize workforce upskilling.", bg: "#e02020" },
              ].map((s) => (
                <div key={s.title} style={{ background: s.bg, color: "#fff", padding: "36px 28px", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,.12)" }}>
                  <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1 }}><AnimatedCounter to={s.num} suffix={s.suffix} /></div>
                  <div style={{ fontSize: 16, fontWeight: 700, margin: "8px 0 10px" }}>{s.title}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.9 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <EcosystemSection />

      {/* SKILL STUDIO SECTION */}
      <section style={{ background: "#f9fafb", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#e02020", marginBottom: 8 }}></div>
            <h2 style={{ fontSize: 36, fontWeight: 800 }}>The Solution-Skill Studio</h2>
          </div>
          <div className="tabs-row" style={{ display: "flex", borderBottom: "2px solid #e5e7eb", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {studioTabs.map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                style={{ padding: "14px 22px", fontSize: 14, fontWeight: 600, border: "none", background: "none", cursor: "pointer", whiteSpace: "nowrap", color: activeTab === t.id ? "#6b21a8" : "#6b7280", borderBottom: activeTab === t.id ? "3px solid #6b21a8" : "3px solid transparent", marginBottom: -2, transition: "color .2s" }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ background: "#fff", borderRadius: "0 0 16px 16px", boxShadow: "0 4px 24px rgba(0,0,0,.06)", padding: "48px", display: "flex", gap: 48, alignItems: "center", minHeight: 420, overflow: "hidden" }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 28, fontWeight: 800, color: "#6b21a8", marginBottom: 8 }}>{tab.title}</h3>
              <p style={{ fontSize: 16, color: "#4b5563", marginBottom: 20, lineHeight: 1.5 }}>{tab.tagline}</p>
              <ul style={{ listStyle: "none", marginBottom: 28 }}>
                {tab.points.map((p, i) => (
                  <li key={i} style={{ fontSize: 14, color: "#4b5563", padding: "6px 0", display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>•</span>{p}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {tab.btns.map((b, i) => (
                  <button key={b} style={{ background: i === 0 ? "#6b21a8" : "transparent", color: i === 0 ? "#fff" : "#6b21a8", padding: "10px 22px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: i === 0 ? "none" : "1.5px solid #6b21a8", cursor: "pointer" }}>{b}</button>
                ))}
              </div>
            </div>
            <div style={{ flex: 1, maxWidth: 440 }}><MockDashboard /></div>
          </div>
        </div>
      </section>

      {/* SCHOOL OF TECHNOLOGY SECTION */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid #f3f4f6", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ position: "relative", flexShrink: 0, width: 380, minHeight: 400, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
              {/* Orange block behind */}
              <div style={{ position: "absolute", left: 20, top: "15%", width: "55%", height: "65%", background: "#f5a623", borderRadius: 12, zIndex: 1 }} />
              {/* Girl image */}
              <img
                src={getAssetPath("/school-girl.png")}
                alt="School of Technology"
                style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }}
              />
            </div>
            <div style={{ flex: 1, padding: "48px 48px 48px 40px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>School of Technology</h2>
              <p style={{ fontWeight: 600, color: "#374151", marginBottom: 16 }}>Elevate Your Expertise with Future-Ready Skills</p>
              <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.</p>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Areas of Expertise</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["AI & Quantum", "Sustainability & Climate Action", "Aerial Intelligence", "Design Thinking", "EV & E-Mobility"].map((tag) => (
                  <span key={tag} style={{ background: "#dbeafe", color: "#1d4ed8", padding: "8px 18px", borderRadius: 24, fontSize: 13, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS SECTION */}
      <section style={{ background: "#f9fafb", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", gap: 64, alignItems: "center" }}>

            {/* Left Text */}
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.15, marginBottom: 24, color: "#1a1a2e" }}>Partnerships For<br />Impact</h2>
              <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce.</p>
              <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.8 }}>Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.</p>
            </div>

            {/* Right 2x2 Grid */}
            <PartnershipCards />
          </div>
        </div>
      </section>

      {/* OUR PARTNERS MARQUEE */}
      <section style={{ background: "#fff", padding: "64px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center" }}>Our Partners</h2>
          <p style={{ textAlign: "center", color: "#4b5563", margin: "8px auto 40px", fontSize: 15 }}>Take your skill transformation to the next level.</p>
        </div>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <div className="marquee-track">
            {partnerLogos.map((p, i) => <PartnerLogoCard key={`a-${i}`} p={p} />)}
            {partnerLogos.map((p, i) => <PartnerLogoCard key={`b-${i}`} p={p} />)}
          </div>
        </div>
      </section>

      {/* PARTNER CTA SECTION */}
      <section style={{ background: "#f5a623", padding: "0", overflow: "hidden", position: "relative", minHeight: 520 }}>
        {/* Faint watermark icon */}
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", fontSize: 280, opacity: 0.08, pointerEvents: "none", userSelect: "none" }}>🤝</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "flex-end", minHeight: 520 }}>

          {/* Left - Image starts from middle, flush to bottom */}
          <div style={{ flex: "0 0 480px", alignSelf: "flex-end", marginLeft: 48 }}>
            <img
              src={getAssetPath("/partner-cta.png")}
              alt="Partner with us"
              style={{ width: "100%", height: 420, objectFit: "cover", objectPosition: "center top", display: "block", borderRadius: "8px 8px 0 0" }}
            />
          </div> 

          {/* Right - Text + Form, vertically centered */}
          <div style={{ flex: 1, padding: "60px 60px 60px 64px", position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.2, marginBottom: 16, color: "#1a1a1a" }}>
              Partner with us<br />To make a Difference
            </h2>
            <p style={{ fontSize: 14, color: "#374151", marginBottom: 32, lineHeight: 1.7, maxWidth: 420 }}>
              Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
            </p>

            <input placeholder="Name*" style={{ width: "100%", padding: "16px 20px", border: "none", borderRadius: 8, fontSize: 14, marginBottom: 16, background: "#fff", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
            <input placeholder="Email*" style={{ width: "100%", padding: "16px 20px", border: "none", borderRadius: 8, fontSize: 14, marginBottom: 16, background: "#fff", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />

            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "#fff", borderRadius: 8, padding: "16px 16px", fontSize: 13, fontWeight: 600, color: "#374151", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
                India &nbsp;+91
              </div>
              <input placeholder="Mobile Number*" style={{ flex: 1, padding: "16px 20px", border: "none", borderRadius: 8, fontSize: 14, background: "#fff", outline: "none", fontFamily: "inherit" }} />
            </div>

            <button style={{ width: "100%", padding: "18px", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", letterSpacing: 0.3 }}>
              Get Started
            </button>
          </div>

        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

            {/* Left Column */}
            <div style={{ display: "flex", flexDirection: "column", width: 280, flexShrink: 0, alignSelf: "stretch" }}>
              <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16, color: "#1a1a2e" }}>Insights</h2>
              <button style={{ border: "1.5px solid #d1d5db", background: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer", alignSelf: "flex-start", marginBottom: 24 }}>View all the resources</button>

              {/* Blog Card - stretches to fill remaining height */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#ede9fe", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ height: 200, background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <img src={getAssetPath("/insight-blog.png")} alt="Blog" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={e => { e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: 6, padding: "4px 10px", fontSize: 10, fontWeight: 700, color: "#fff" }}>AI Assistant</div>
                </div>
                <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 28, color: "#7c3aed", marginBottom: 12 }}>✏️</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#1f2937", marginBottom: 16, lineHeight: 1.5, flex: 1 }}>Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start" }}>Read the Blog</button>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }}>

              {/* Card 2 - AI Talent Report */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fef3e2", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 180, overflow: "hidden", background: "#e5d5c0" }}>
                  <img src={getAssetPath("/insight-robot.png")} alt="AI Robot" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "16px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: "#f5a623", color: "#fff", marginBottom: 12, alignSelf: "flex-start" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", marginBottom: 16, flex: 1, lineHeight: 1.4 }}>2025 AI Talent & Salary Benchmark Report</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start" }}>Read the reports</button>
                </div>
              </div>

              {/* Card 3 - Skill Blueprint */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fce7f3", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 180, overflow: "hidden", background: "#d0b0c0" }}>
                  <img src={getAssetPath("/insight-future.png")} alt="Future of Work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "16px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: "#e02020", color: "#fff", marginBottom: 12, alignSelf: "flex-start" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", marginBottom: 16, flex: 1, lineHeight: 1.4 }}>The Skill Blueprint AI & The Future of Work</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start" }}>Explore the Case studies</button>
                </div>
              </div>

              {/* Card 4 - Podcast (spans full width) */}
              <div style={{ gridColumn: "1 / -1", borderRadius: 16, background: "#cffafe", padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "inline-block", background: "#22d3ee", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 20, marginBottom: 14 }}>Podcast</span>
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#1a1a2e", lineHeight: 1.3 }}>Skills DECODED:<br />Conversations that matter.</h4>
                  <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.6, marginBottom: 0, maxWidth: 480 }}>Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <div style={{ fontSize: 64, color: "#0891b2" }}>🎙️</div>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer", whiteSpace: "nowrap" }}>Listen now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}