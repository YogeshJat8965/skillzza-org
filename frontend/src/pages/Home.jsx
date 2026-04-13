import { useState, useEffect, useRef } from "react";
import { getAssetPath, getBackgroundImageUrl, getRoutePath } from '../utils/assets';

// ─── MARQUEE CSS ──────────────────────────────────────────────────────────────
const MARQUEE_CSS = `
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 100s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
@keyframes featureScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.feature-track {
  display: flex;
  width: max-content;
  animation: featureScroll 20s linear infinite;
}
.feature-track:hover { animation-play-state: paused; }
.tabs-row::-webkit-scrollbar { display: none !important; }
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
    img: "/mockdashboard.png",
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
    img: "/xperience_bg_bannerpng.jpg",
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
    img: "/TransformingdatawithPowerBI_tile_img.png",
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
    img: "/ai_hacknex_tile_img.png",
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
    img: "/building_intelligent_tile.png",
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
  { img: getAssetPath("/logo-vectus.jpg"), name: "Vectus" },
  { img: getAssetPath("/logo-faber.png"), name: "Faber" },
  { img: getAssetPath("/logo-wockhardt.jpg"), name: "Wockhardt Hospitals" },
  { img: getAssetPath("/logo-wavin.png"), name: "Wavin" },
  { img: getAssetPath("/logo-birlamedisoft.jpg"), name: "Birlamedisoft" },
  { img: getAssetPath("/logo-adityabirla.png"), name: "Aditya Birla Memorial Hospital" },
  { img: getAssetPath("/logo-akhilsystems.jpg"), name: "Akhil Systems" },
  { img: getAssetPath("/logo-yashoda.png"), name: "Yashoda Hospitals" },
  { img: getAssetPath("/logo-varnaaz.jpg"), name: "Varnaaz" },
  { img: getAssetPath("/logo-patelhospital.png"), name: "Patel Hospital" },
  { img: getAssetPath("/logo-brightbridge.jpg"), name: "BrightBridge" },
  { img: getAssetPath("/logo-apmedcare.png"), name: "AP Medcare" },
  { img: getAssetPath("/logo-nuziveeduseeds.jpg"), name: "Nuziveedu Seeds" },
  { img: getAssetPath("/logo-builderai.png"), name: "Builder.ai" },
  { img: getAssetPath("/logo-syntel.jpg"), name: "Syntel" },
  { img: getAssetPath("/logo-softwareone.png"), name: "SoftwareONE" },
  { img: getAssetPath("/logo-aryaomnitalk.jpg"), name: "Arya Omnitalk" },
  { img: getAssetPath("/logo-akriti.png"), name: "Akriti Precision Systems" },
  { img: getAssetPath("/logo-manorhouse.jpg"), name: "Manor House" },
  { img: getAssetPath("/logo-sankartools.png"), name: "Sankar Tools" },
  { img: getAssetPath("/logo-aonecurtain.jpg"), name: "A-One Curtain Store" },
  { img: getAssetPath("/logo-panasonic.png"), name: "Panasonic" },
  { img: getAssetPath("/logo-greengold.jpg"), name: "Green Gold Animation" },
  { img: getAssetPath("/logo-ponpure.png"), name: "Pon Pure Chemicals" },
  { img: getAssetPath("/logo-matrix.png"), name: "Matrix Telecom | Security" },
  { img: getAssetPath("/logo-tec.png"), name: "TEC" },
  { img: getAssetPath("/logo-fixderma.png"), name: "Fix Derma" },
  { img: getAssetPath("/logo-loanwala.png"), name: "LoanWala" },
  { img: getAssetPath("/logo-haridarshan.png"), name: "Hari Darshan" },
  { img: getAssetPath("/logo-suflexmedia.png"), name: "Suflex Media" },
  { img: getAssetPath("/logo-tarezameenpar.png"), name: "Tare Zameen Par" },
  { img: getAssetPath("/logo-midland.png"), name: "Midland microfin" },
  { img: getAssetPath("/logo-jaquar.jpg"), name: "Jaquar Group" },
  { img: getAssetPath("/logo-vega.png"), name: "VEGA" },
  { img: getAssetPath("/logo-p2p.jpg"), name: "P2P" },
  { img: getAssetPath("/logo-cover360.png"), name: "COVER360.in" },
  { img: getAssetPath("/logo-vrinda.jpg"), name: "VRINDA FERTILITY" },
  { img: getAssetPath("/logo-iitdelhi.jpg"), name: "IIT Delhi" },
  { img: getAssetPath("/logo-emami.jpg"), name: "Emami" },
  { img: getAssetPath("/logo-hcl.png"), name: "HCL Technologies" },
  { img: getAssetPath("/logo-motherson.jpg"), name: "Motherson" },
  { img: getAssetPath("/logo-mitsubishi.png"), name: "Mitsubishi Motors" },
  { img: getAssetPath("/logo-lupin.png"), name: "Lupin" },
  { img: getAssetPath("/logo-unominda.png"), name: "Uno Minda" },
  { img: getAssetPath("/logo-dsgroup.png"), name: "DS Group" },
  { img: getAssetPath("/logo-vestige.png"), name: "Vestige" },
  { img: getAssetPath("/logo-onida.png"), name: "Onida" },
  { img: getAssetPath("/logo-vitchennai.jpg"), name: "VIT Chennai" },
  { img: getAssetPath("/logo-opg.png"), name: "Okaya Power Group" },
  { img: getAssetPath("/logo-5glab.png"), name: "5G Lab" },
  { img: getAssetPath("/logo-tatapower.png"), name: "Tata Power" },
  { img: getAssetPath("/logo-tspolice.png"), name: "Telangana State Police" },
  { img: getAssetPath("/logo-okaya.jpg"), name: "Okaya Electric Vehicle" },
  { img: getAssetPath("/logo-nestle.png"), name: "Nestle" },
  { img: getAssetPath("/logo-pgpglass.jpg"), name: "PGP Glass" },
  { img: getAssetPath("/logo-dabur.png"), name: "Dabur" },
  { img: getAssetPath("/logo-chambal.jpg"), name: "Chambal Fertilisers & Chemicals" },
  { img: getAssetPath("/logo-dot.jpg"), name: "DOT (India Telecom)" },
  { img: getAssetPath("/logo-ntpc.png"), name: "NTPC" },
  { img: getAssetPath("/logo-indianoil.png"), name: "IndianOil" },
  { img: getAssetPath("/logo-nca.jpg"), name: "National Communications Academy, Ghaziabad" },
];

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

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVal(0);
        let start = null;
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
function PartnerCard({ title, desc, iconSrc, targetHash }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.location.href = getRoutePath(`/company/partnerships${targetHash}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#9268A8" : "rgba(0,0,0,0.16)",
        borderRadius: 10,
        padding: "28px 20px",
        cursor: "pointer",
        transition: "background .25s, transform .2s, box-shadow .2s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(124,58,237,0.3)" : "none",
      }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
        <img src={getAssetPath(iconSrc)} alt="" style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0, marginTop: 2, mixBlendMode: "screen", filter: hovered ? "brightness(10)" : "brightness(0.3) invert(0)" }} />
        <h4 style={{ fontSize: 15, fontWeight: 700, color: hovered ? "#fff" : "#1f2937", lineHeight: 1.35, margin: 0 }}>{title}</h4>
      </div>
      <p style={{ fontSize: 12.5, color: hovered ? "rgba(255,255,255,0.8)" : "#6b7280", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function PartnershipCards() {
  const cards = [
    { title: <>Schools /<br />Universities</>, desc: "Partnering to Cultivate the Next Generation of Leaders", iconSrc: "/g2475.svg", targetHash: "#education" },
    { title: "Corporates", desc: "Driving Business Success through Workforce Excellence", iconSrc: "/corporation.svg", targetHash: "#corporate" },
    { title: "Government", desc: "Building a Skilled Workforce for a Stronger Economy", iconSrc: "/government.svg", targetHash: "#government" },
    { title: <>Become our<br />upskilling partner</>, desc: "Join Us in Shaping the Future of Work", iconSrc: "/Group 23779.svg", targetHash: "#partner" },
  ];

  return (
    <div className="partner-cards" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
      {/* Left col */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <PartnerCard {...cards[0]} />
        <PartnerCard {...cards[2]} />
      </div>
      {/* Right col — shifted down */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
        <PartnerCard {...cards[1]} />
        <PartnerCard {...cards[3]} />
      </div>
    </div>
  );
}

// ─── ECOSYSTEM SECTION ────────────────────────────────────────────────────────
function EcosystemSection() {
  return (
    <section id="ecosystem-diagram" style={{ background: "linear-gradient(160deg,#f8f4ff 0%,#ede8fb 60%,#e4dcf8 100%)", padding: "80px 0 32px" }}>
      <div className="section-inner" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        {/* Heading - kept as is */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#1a1a2e" }}>Skillzza Ecosystem</h2>
          <p style={{ color: "#6b7280", marginTop: 8, fontSize: 15 }}>Empowering Every Learner, Every Step of the Way</p>
        </div>

        {/* SVG image + Talent Marketplace button overlay */}
        <div className="ecosystem-wrap" style={{ position: "relative", width: "100%", marginBottom: "16px" }}>
          <img
            src={getAssetPath("/ecosystem.svg")}
            alt="Skillzza Ecosystem"
            style={{ width: "100%", height: "auto", display: "block", marginTop: "-3.78px", paddingTop: "3.78px", marginBottom: "-3.78px", paddingBottom: "3.78px" }}
          />

          {/* Talent Marketplace button — pixel-perfect over SVG rect */}
          <div style={{
            position: "absolute",
            top: "81.087%",
            left: "38.626%",
            zIndex: 10,
            width: "22.306%",
            height: "4.617%",
          }}>
            <button
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                color: "transparent",
                border: "none",
                borderRadius: "18px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(245,166,35,0.35)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ num, suffix, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#9b0000" : "#e02020",
        color: "#fff",
        padding: "20px 22px",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,.12)",
        cursor: "pointer",
        transition: "background 0.25s ease, transform 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 46, fontWeight: 900, lineHeight: 1 }}><AnimatedCounter to={num} suffix={suffix} /></div>
      <div style={{ fontSize: 15, fontWeight: 700, margin: "6px 0 8px" }}>{title}</div>
      <div style={{ fontSize: 11.5, lineHeight: 1.6, opacity: 0.9 }}>{desc}</div>
    </div>
  );
}

// ─── FEATURE STRIP ───────────────────────────────────────────────────────────
function FeatureStrip() {
  const features = [
    { icon: "📋", bg: "#dbeafe", tc: "#1d4ed8", text: "Discover your strengths through smart assessments" },
    { icon: "👥", bg: "#ede9fe", tc: "#6b21a8", text: "Simulate real-world roles to sharpen your edge" },
    { icon: "💼", bg: "#fef3c7", tc: "#d97706", text: "Build a portfolio that proves your potential" },
    { icon: "📊", bg: "#fee2e2", tc: "#e02020", text: "Get matched with the right opportunities" },
    { icon: "🎯", bg: "#dcfce7", tc: "#16a34a", text: "Track your progress with real-time analytics" },
    { icon: "🚀", bg: "#fce7f3", tc: "#db2777", text: "Launch your career with verified skill badges" },
  ];
  return (
    <div style={{
      position: "absolute",
      bottom: 0, left: 0, right: 0,
      zIndex: 10,
      background: "rgba(255,255,255,0.96)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid rgba(226,226,226,0.6)",
      overflow: "hidden",
      boxShadow: "0 -4px 20px rgba(0,0,0,.06)",
      padding: "8px 0",
    }}>
      <div className="marquee-track">
        {[...features, ...features].map((f, i) => (
          <div key={i} style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: "10px 18px",
            margin: "0 10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            fontSize: 13,
            fontWeight: 500,
            color: "#374151",
            whiteSpace: "nowrap",
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: f.bg, color: f.tc,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 17,
            }}>
              {f.icon}
            </div>
            {f.text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SkillzzaHome() {
  const [activeTab, setActiveTab] = useState(0);
  const [expertisePopup, setExpertisePopup] = useState({ open: false, tag: "" });
  const [partnerForm, setPartnerForm] = useState({ name: "", email: "", mobile: "" });
  const [partnerFormStatus, setPartnerFormStatus] = useState({ loading: false, message: "", type: "" });
  const tab = studioTabs[activeTab];

  const handleStudioButtonClick = (tabId, buttonIndex) => {
    // Potential Meter primary CTA is live.
    if (tabId === 0 && buttonIndex === 0) {
      window.location.href = getRoutePath('/product/potential-meter');
    }
    // MCQ CTA is intentionally left inactive until the route/page is implemented.
  };

  const handleExpertiseTagClick = (tag) => {
    if (tag === "Sustainability & Climate Action") {
      window.open("https://globalschoolofsustainability.com/", "_blank", "noopener,noreferrer");
      return;
    }
    setExpertisePopup({ open: true, tag });
  };

  const handlePartnerFormChange = (field, value) => {
    setPartnerForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePartnerFormSubmit = async (event) => {
    event.preventDefault();

    const name = partnerForm.name.trim();
    const email = partnerForm.email.trim();
    const mobile = partnerForm.mobile.trim();

    if (!name || !email || !mobile) return;

    try {
      setPartnerFormStatus({ loading: true, message: "Sending your request...", type: "info" });

      const response = await fetch("https://formsubmit.co/ajax/contact@skillzza.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile: `India +91 ${mobile}`,
          _subject: "Partnership Inquiry - Skillzza Home Page",
          message: "Interested in partnering with Skillzza.",
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === "false") {
        throw new Error(result?.message || "Unable to send right now.");
      }

      setPartnerForm({ name: "", email: "", mobile: "" });
      setPartnerFormStatus({ loading: false, message: "Request sent successfully.", type: "success" });
    } catch (error) {
      setPartnerFormStatus({
        loading: false,
        message: error?.message || "Could not send right now. Please try again in a moment.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (document.getElementById("skz-marquee-css")) return;
    const el = document.createElement("style");
    el.id = "skz-marquee-css";
    el.textContent = MARQUEE_CSS;
    document.head.appendChild(el);
  }, []);

  useEffect(() => {
    if (!expertisePopup.open) return;
    const timer = setTimeout(() => {
      setExpertisePopup({ open: false, tag: "" });
    }, 2200);
    return () => clearTimeout(timer);
  }, [expertisePopup.open]);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", color: "#1f2937", overflowX: "hidden" }}>

      {expertisePopup.open && (
        <div
          onClick={() => setExpertisePopup({ open: false, tag: "" })}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2200,
            background: "rgba(15, 23, 42, 0.3)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(92vw, 430px)",
              borderRadius: 16,
              background: "linear-gradient(145deg, #ffffff 0%, #faf5ff 100%)",
              border: "1px solid rgba(107, 33, 168, 0.18)",
              boxShadow: "0 18px 40px rgba(107, 33, 168, 0.22)",
              overflow: "hidden",
            }}
          >
            <div style={{ height: 3, background: "linear-gradient(90deg, #e02020 0%, #6b21a8 100%)" }} />
            <div style={{ padding: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, #fee2e2, #f3e8ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⏳</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#4c1d95" }}>Coming Soon</div>
                </div>
                <button
                  onClick={() => setExpertisePopup({ open: false, tag: "" })}
                  style={{ border: "none", background: "transparent", color: "#6b7280", fontSize: 19, cursor: "pointer", lineHeight: 1 }}
                >
                  ×
                </button>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.6, color: "#475569" }}>
                <strong style={{ color: "#1f2937" }}>{expertisePopup.tag}</strong> will be launched soon.
              </p>
            </div>
          </div>
        </div>
      )}

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
        backgroundAttachment: "scroll",
      }} className="hero-section">
        {/* Hero Girl Image — touches bottom border */}
        <div className="hero-img-col" style={{ position: "absolute", right: 0, bottom: 0, top: 0, width: "50%", zIndex: 5, display: "flex", alignItems: "flex-end", justifyContent: "center", pointerEvents: "none" }}>
          <img
            src={getAssetPath("/hero-girl.png")}
            alt="Hero"
            style={{ position: "relative", zIndex: 2, height: "108%", maxHeight: 720, objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.15))", marginBottom: 0, marginTop: "38px" }}
          />
        </div>

        <div className="hero-text-col" style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "0px 60px 180px", width: "100%", marginTop: "-38px" }}>
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
            <div className="hero-btns" style={{ display: "flex", gap: 16, marginBottom: 0, flexWrap: "wrap" }}>
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

        {/* Feature strip */}
        <div className="feature-strip" style={{ position: "absolute", bottom: 48, left: 0, right: 0, zIndex: 6, overflow: "hidden" }}>
          <div className="marquee-track">
            {[
              { icon: "📋", bg: "#dbeafe", tc: "#1d4ed8", text: "Discover your strengths through smart assessments" },
              { icon: "👥", bg: "#ede9fe", tc: "#6b21a8", text: "Simulate real-world roles to sharpen your edge" },
              { icon: "💼", bg: "#fef3c7", tc: "#d97706", text: "Build a portfolio that proves your potential" },
              { icon: "📊", bg: "#fee2e2", tc: "#e02020", text: "Get matched with the right opportunities" },
              { icon: "🎯", bg: "#dcfce7", tc: "#16a34a", text: "Track your progress with real-time analytics" },
              { icon: "🚀", bg: "#fce7f3", tc: "#db2777", text: "Launch your career with verified skill badges" },
              { icon: "📋", bg: "#dbeafe", tc: "#1d4ed8", text: "Discover your strengths through smart assessments" },
              { icon: "👥", bg: "#ede9fe", tc: "#6b21a8", text: "Simulate real-world roles to sharpen your edge" },
              { icon: "💼", bg: "#fef3c7", tc: "#d97706", text: "Build a portfolio that proves your potential" },
              { icon: "📊", bg: "#fee2e2", tc: "#e02020", text: "Get matched with the right opportunities" },
              { icon: "🎯", bg: "#dcfce7", tc: "#16a34a", text: "Track your progress with real-time analytics" },
              { icon: "🚀", bg: "#fce7f3", tc: "#db2777", text: "Launch your career with verified skill badges" },
            ].map((f, i) => (
              <div key={i} style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "10px 18px",
                margin: "0 8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                fontSize: 13,
                fontWeight: 500,
                color: "#374151",
                whiteSpace: "nowrap",
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: f.bg, color: f.tc, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>
                  {f.icon}
                </div>
                {f.text}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* CHALLENGE SECTION */}
      <section className="challenge-section" style={{ background: "#fff", padding: "48px 0" }}>
        <div className="section-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 36px" }}>
            <h2 style={{ fontSize: 38, fontWeight: 800 }}>The Challenge<br />A Widening Skill Gap</h2>
            <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.</p>
          </div>
          <div className="challenge-row" style={{ display: "flex", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.08)", height: 420 }}>
            <div className="challenge-img" style={{ flex: 1, background: "#f1f2f4", overflow: "hidden" }}>
              <img src={getAssetPath("/skill-gap-image.png")} alt="Skill Gap" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center bottom", display: "block" }} />
            </div>
            <div className="challenge-stats challenge-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 10, padding: 10, background: "#fff" }}>
              {[
                { num: 69, suffix: "%", title: "The Recruitment Crisis", desc: "Nearly 69% of organizations report ongoing difficulties recruiting for full-time roles reflecting persistent hiring challenges across sectors." },
                { num: 74, suffix: "%", title: "The AI Training Gap", desc: "Although 74% of employees use AI tools at work, only 33% have received formal training to use them effectively and safely." },
                { num: 59, suffix: "%", title: "The Reskilling Imperative", desc: "By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025." },
                { num: 63, suffix: "%", title: "Skills Are the Biggest Barrier", desc: "With 63% of employers citing skill gaps as the top barrier to transformation, 85% plan to prioritize workforce upskilling." },
              ].map((s) => (
                <StatCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <EcosystemSection />

      {/* SKILL STUDIO SECTION */}
      <section style={{ background: "#fff", padding: "48px 0 0" }}>
        <div className="section-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800 }}>The Solution-Skill Studio</h2>
          </div>

          {/* Pill Tabs */}
          <div className="tabs-row" style={{ display: "flex", gap: 12, overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", padding: "8px 4px", marginBottom: 20, justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
            {studioTabs.map((t, idx) => {
              const isActive = activeTab === t.id;
              const tabColors = [
                { bg: "#9b6fd4", hover: "#8a5ec7", text: "#000", shadow: "rgba(155,111,212,0.4)" },
                { bg: "#f7bb5f", hover: "#f0a832", text: "#000", shadow: "rgba(247,187,95,0.4)" },
                { bg: "#7d8796", hover: "#6b7280", text: "#000", shadow: "rgba(125,135,150,0.4)" },
                { bg: "#f07070", hover: "#e05050", text: "#000", shadow: "rgba(240,112,112,0.4)" },
                { bg: "#60a5fa", hover: "#3b82f6", text: "#000", shadow: "rgba(96,165,250,0.4)" },
              ];
              const c = tabColors[idx] || tabColors[0];
              return (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  onMouseEnter={e => { 
                    e.currentTarget.style.background = c.hover; 
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 6px 16px ${c.shadow}`;
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.background = c.bg; 
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = isActive ? `0 4px 12px ${c.shadow}` : "none";
                  }}
                  style={{
                    padding: "12px 24px",
                    fontSize: 14,
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 10,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease-out",
                    background: c.bg,
                    color: isActive ? "#fff" : c.text,
                    boxShadow: isActive ? `0 4px 12px ${c.shadow}` : "none",
                    outline: "none",
                    flex: "1 1 200px",
                    maxWidth: "220px",
                    textAlign: "center"
                  }}>
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="studio-content-row" style={{ background: "#fff", borderRadius: "16px 16px 0 0", boxShadow: "0 4px 24px rgba(0,0,0,.06)", padding: "48px", display: "flex", gap: 48, alignItems: "center", minHeight: 420, overflow: "hidden" }}>
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
                  <button
                    key={b}
                    onClick={() => handleStudioButtonClick(tab.id, i)}
                    disabled={tab.id === 0 && i === 1}
                    title={tab.id === 0 && i === 1 ? "MCQ page is not available yet" : undefined}
                    style={{
                      background: i === 0 ? "#6b21a8" : "transparent",
                      color: i === 0 ? "#fff" : "#6b21a8",
                      padding: "10px 22px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      border: i === 0 ? "none" : "1.5px solid #6b21a8",
                      cursor: tab.id === 0 && i === 1 ? "not-allowed" : "pointer",
                      opacity: tab.id === 0 && i === 1 ? 0.7 : 1,
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div className="studio-right-img" style={{ flex: 1, maxWidth: 440, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={getAssetPath(tab.img)} alt={tab.title} style={{ width: "100%", height: "auto", maxHeight: 400, objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.08))" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCHOOL OF TECHNOLOGY SECTION ─────────────────────────────────────── */}
      {/* ONLY CHANGE: removed padding from section-inner (was "0 48px", now "0")  */}
      {/* and set maxWidth to "100%" + borderRadius to 0 on school-row             */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="section-inner" style={{ maxWidth: "100%", margin: "0 auto", padding: "0" }}>
          <div className="school-row" style={{ display: 'flex', alignItems: 'center', border: '1px solid #f3f4f6', borderRadius: 0, overflow: 'hidden', flexWrap: 'wrap' }}>
            <div className="school-img-col" style={{ position: 'relative', flexShrink: 0, width: 380, minHeight: 400, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
              <img
                src={getAssetPath("/school-girl.png")}
                alt="School of Technology"
                style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom" }}
              />
            </div>
            <div className="school-text-col" style={{ flex: 1, padding: '48px 48px 48px 40px', minWidth: 0 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>School of Technology</h2>
              <p style={{ fontWeight: 600, color: "#374151", marginBottom: 16 }}>Elevate Your Expertise with Future-Ready Skills</p>
              <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.</p>
              <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Areas of Expertise</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["AI & Quantum", "Sustainability & Climate Action", "Aerial Intelligence", "Design Thinking", "EV & E-Mobility"].map((tag) => (
                  <span key={tag} 
                    onClick={() => handleExpertiseTagClick(tag)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(29, 78, 216, 0.2)";
                      e.currentTarget.style.background = "#bfdbfe";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = "#dbeafe";
                    }}
                    style={{ 
                      background: "#dbeafe", 
                      color: "#1d4ed8", 
                      padding: "8px 18px", 
                      borderRadius: 24, 
                      fontSize: 13, 
                      fontWeight: 500, 
                      transition: "all 0.2s ease-in-out",
                      cursor: "pointer",
                      display: "inline-block"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS SECTION */}
      <section style={{ backgroundImage: `url(${getAssetPath('/school-background.png')})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", padding: "80px 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(241,242,244,0.82)", zIndex: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
          <div className="partnerships-row" style={{ display: "flex", gap: 64, alignItems: "center" }}>
            {/* Left Text */}
            <div className="partnerships-left-col" style={{ flex: 1 }}>
              <h2 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.25, marginBottom: 24, color: "#1a1a2e", fontFamily: "'Inter','Segoe UI',sans-serif", letterSpacing: "-0.2px" }}>Partnerships For<br />Impact</h2>
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
        <div className="section-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
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
      <section id="partner-contact-form" style={{
        backgroundImage: `url(${getAssetPath('/background-partner.png')})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}>
        <div className="partner-cta-main" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%", paddingTop: 40 }}>

          {/* Left — "Partner with us" above image, flush extreme left */}
          <div className="partner-cta-img-col" style={{ flex: '0 0 46%', position: 'relative' }}>
            <img
              src={getAssetPath('/businesspeople-having-discussion-office@2x.png')}
              alt="Partner with us"
              style={{ width: "100%", height: "auto", minHeight: 340, objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            {/* Bottom yellow strip */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 12, background: "#FDB913" }} />
          </div>

          {/* Right — both headings + form */}
          <div className="partner-cta-form-col" style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0px 64px 48px 180px" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1f2937", lineHeight: 1.25, marginBottom: 16, fontFamily: "Inter, sans-serif" }}>
              Partner with us<br />To make a Difference
            </h2>
            <p style={{ fontSize: 15, color: "#4b5563", marginBottom: 28, lineHeight: 1.6, maxWidth: 400, fontFamily: "Inter, sans-serif" }}>
              Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
            </p>
            <form onSubmit={handlePartnerFormSubmit} style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 420 }}>
              <input
                value={partnerForm.name}
                onChange={(e) => handlePartnerFormChange("name", e.target.value)}
                placeholder="Name*"
                required
                style={{ width: "100%", padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }}
              />
              <input
                type="email"
                value={partnerForm.email}
                onChange={(e) => handlePartnerFormChange("email", e.target.value)}
                placeholder="Email*"
                required
                style={{ width: "100%", padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }}
              />
              <div className="partner-phone-row" style={{ display: "flex", gap: 12 }}>
                <div className="partner-country-code" style={{ display: "flex", alignItems: "center", gap: 4, padding: "13px 16px", borderRadius: 6, background: "#fff", color: "#1f2937", fontSize: 14, minWidth: 100, fontFamily: "Inter, sans-serif" }}>
                  <span>India</span><span style={{ color: "#9ca3af", marginLeft: 4 }}>+91</span>
                </div>
                <input
                  className="partner-mobile-input"
                  value={partnerForm.mobile}
                  onChange={(e) => handlePartnerFormChange("mobile", e.target.value)}
                  placeholder="Mobile Number*"
                  required
                  style={{ flex: 1, padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif" }}
                />
              </div>
              <button
                type="submit"
                disabled={partnerFormStatus.loading}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                style={{ width: "100%", padding: "14px", borderRadius: 6, background: "#1f2937", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: partnerFormStatus.loading ? "not-allowed" : "pointer", fontFamily: "Inter, sans-serif", marginTop: 4, transition: "opacity 0.2s", opacity: partnerFormStatus.loading ? 0.75 : 1 }}>
                {partnerFormStatus.loading ? "Sending..." : "Get Started"}
              </button>
              {partnerFormStatus.message && (
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: 13,
                    fontWeight: 500,
                    color:
                      partnerFormStatus.type === "success"
                        ? "#065f46"
                        : partnerFormStatus.type === "error"
                          ? "#991b1b"
                          : "#334155",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {partnerFormStatus.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* INSIGHTS SECTION */}
      <section style={{ background: "#fff", padding: "80px 0", fontFamily: "Inter, sans-serif" }}>
        <div className="section-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div className="insights-row" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

            {/* Left Column */}
            <div className="insights-left-col" style={{ display: "flex", flexDirection: "column", width: 280, flexShrink: 0, alignSelf: "stretch" }}>
              <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 20, color: "#111827", fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>Insights</h2>
              <button
                onClick={() => { window.location.href = getRoutePath('/insights'); }}
                style={{ border: "1.5px solid #d1d5db", background: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", marginBottom: 24, fontFamily: "Inter, sans-serif" }}
              >
                View all the resources
              </button>

              {/* Blog Card */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#ede9fe", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <img src={getAssetPath("/insight-blog.png")} alt="Blog" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                    onError={e => { e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>AI Assistant</div>
                </div>
                <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <img src={getAssetPath("/pen.svg")} alt="Blog" style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16, lineHeight: 1.5, flex: 1, fontFamily: "Inter, sans-serif" }}>Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI</h4>
                  <button
                    onClick={() => { window.location.href = getRoutePath('/insights'); }}
                    style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}
                  >
                    Read the Blog
                  </button>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="insights-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }}>

              {/* Card 2 - AI Talent Report */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fef3e2", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", background: "#e5d5c0" }}>
                  <img src={getAssetPath("/insight-robot.png")} alt="AI Robot" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#f5a623", color: "#fff", marginBottom: 12, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 16, flex: 1, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>2025 AI Talent & Salary Benchmark Report</h4>
                  <button
                    onClick={() => { window.location.href = getRoutePath('/insights/ai-talent-research-hub'); }}
                    style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}
                  >
                    Read the reports
                  </button>
                </div>
              </div>

              {/* Card 3 - Skill Blueprint */}
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fce7f3", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", background: "#d0b0c0" }}>
                  <img src={getAssetPath("/insight-future.png")} alt="Future of Work" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#e02020", color: "#fff", marginBottom: 12, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 16, flex: 1, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>The Skill Blueprint AI & The Future of Work</h4>
                  <button
                    onClick={() => { window.location.href = getRoutePath('/insights/skill-blueprint'); }}
                    style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}
                  >
                    Explore the Case studies
                  </button>
                </div>
              </div>

              {/* Card 4 - Podcast (spans full width) */}
              <div className="insights-podcast-card" style={{ gridColumn: "1 / -1", borderRadius: 16, background: "#cffafe", padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "inline-block", background: "#22d3ee", color: "#fff", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 14, fontFamily: "Inter, sans-serif" }}>Podcast</span>
                  <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: "#111827", lineHeight: 1.3, fontFamily: "Inter, sans-serif" }}>Skills DECODED<br />Conversations that matter.</h4>
                  <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, marginBottom: 0, maxWidth: 480, fontFamily: "Inter, sans-serif" }}>Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.</p>
                </div>
                <div className="insights-podcast-action" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <img src={getAssetPath("/mic.svg")} alt="Podcast" style={{ width: 72, height: 72 }} />
                  <button
                    onClick={() => { window.location.href = getRoutePath('/insights/skill-unplugged-podcast'); }}
                    style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif" }}
                  >
                    Listen now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}