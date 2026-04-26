import React, { useEffect, useState, useRef } from 'react';
import { getAssetPath } from '../utils/assets';

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setTimeout(() => {
      sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  useEffect(() => {
    const revealEls = document.querySelectorAll('.wwd-reveal');
    if (!revealEls.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wwd-visible');
          } else {
            entry.target.classList.remove('wwd-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const pillars = [
    {
      tab: 'AI-Driven Assessments',
      tabBg: '#dbeafe',
      tabColor: '#1d4ed8',
      titleColor: '#1d4ed8',
      title: 'AI-Driven Assessments',
      image: getAssetPath('/ai.png'),
      imageLeft: true,
      decorLeft: true,
      screenBg: '#fff5f5',
      description: 'We move beyond traditional testing with intelligent diagnostics that map strengths, identify gaps, and create personalized learning paths aligned with career goals and industry demands.',
      listTitle: 'Key Capabilities',
      items: [
        'Multi-dimensional competency mapping.',
        'Predictive career pathway analysis.',
        'Real-time progress tracking & intervention.',
        'Industry-specific skill benchmarking.',
      ],
    },
    {
      tab: 'Immersive Learning',
      tabBg: '#dcfce7',
      tabColor: '#16a34a',
      titleColor: '#16a34a',
      title: 'Immersive Learning',
      image: getAssetPath('/learning.png'),
      imageLeft: false,
      screenBg: '#f0fdf4',
      description: 'Our modules combine theory with simulations, case studies, and project-based learning that mirror real professional challenges.',
      listTitle: 'Learning Modalities',
      items: [
        'Interactive simulations & virtual environments.',
        'Project-based learning with industry problems.',
        'Microlearning for continuous skill-building.',
        'Collaborative peer & mentor communities.',
      ],
    },
    {
      tab: 'Role-Based Simulations',
      tabBg: '#fef9c3',
      tabColor: '#b45309',
      titleColor: '#ea580c',
      title: 'Role-Based Simulations',
      image: getAssetPath('/role.png'),
      imageLeft: true,
      screenBg: '#eff6ff',
      description: 'Our simulations recreate authentic workplace scenarios, enabling safe decision-making, collaboration, and leadership practice.',
      listTitle: 'Simulation Categories',
      items: [
        'Leadership & management scenarios.',
        'Technical problem-solving challenges.',
        'Client interaction & communication skills.',
        'Crisis management & strategic planning.',
      ],
    },
    {
      tab: 'Talent Enablement & Hiring Ecosystem',
      tabBg: '#fce7f3',
      tabColor: '#be123c',
      titleColor: '#dc2626',
      title: 'Talent Enablement & Hiring Ecosystem',
      image: getAssetPath('/talent.png'),
      imageLeft: false,
      screenBg: '#fff5f5',
      description: 'HireNest bridges the gap between skill development and employment by connecting AI-verified, role-ready talent with enterprises, institutions, and employers seeking future-ready professionals.',
      listTitle: 'Strategic expertise',
      items: [
        'AI-Verified Talent Profiles.',
        'Role-Readiness Scores.',
        'Internship, Apprenticeship & Entry-Level Hiring Pipelines.',
        'Campus-to-Corporate Talent Matchmaking.',
        'Employer Dashboards.',
      ],
    },
  ];

  return (
    <>
      <style>{`
        /* ===== Modern Blur & Smooth Scale Revealing ===== */
        @keyframes wwdFadeUp {
          0% { opacity: 0; filter: blur(12px); transform: translateY(40px) scale(0.97); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0) scale(1); }
        }

        @keyframes wwdSlideInLeft {
          0% { opacity: 0; filter: blur(12px); transform: translateX(-40px) scale(0.97); }
          100% { opacity: 1; filter: blur(0px); transform: translateX(0) scale(1); }
        }

        @keyframes wwdSlideInRight {
          0% { opacity: 0; filter: blur(12px); transform: translateX(40px) scale(0.97); }
          100% { opacity: 1; filter: blur(0px); transform: translateX(0) scale(1); }
        }

        @keyframes wwdScaleUp {
          0% { opacity: 0; filter: blur(14px); transform: scale(0.85); }
          100% { opacity: 1; filter: blur(0px); transform: scale(1); }
        }

        .wwd-reveal {
          opacity: 0;
          will-change: transform, opacity, filter;
        }

        .wwd-reveal.wwd-visible {
          opacity: 1;
        }

        .wwd-reveal.wwd-fade-up.wwd-visible {
          animation: wwdFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .wwd-reveal.wwd-slide-left.wwd-visible {
          animation: wwdSlideInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .wwd-reveal.wwd-slide-right.wwd-visible {
          animation: wwdSlideInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .wwd-reveal.wwd-scale-up.wwd-visible {
          animation: wwdScaleUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .wwd-delay-1 { animation-delay: 0.08s !important; }
        .wwd-delay-2 { animation-delay: 0.16s !important; }
        .wwd-delay-3 { animation-delay: 0.24s !important; }

        @media (max-width: 768px) {
          .pillar-row {
            flex-direction: column !important;
            gap: 32px !important;
            padding: 40px 0 !important;
          }
          .wwd-core-decor {
            display: none !important;
          }
          .pillar-row > div:nth-child(2) {
            margin-left: 0 !important;
          }
          .pillar-tabs {
            justify-content: center !important;
            flex-wrap: wrap !important;
            overflow-x: visible !important;
            padding: 12px 0 !important;
            gap: 10px !important;
          }
          .pillar-tabs > button {
            flex: 1 1 calc(50% - 10px) !important;
            max-width: calc(50% - 10px) !important;
            min-width: 150px !important;
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .pillar-tabs > button {
            flex-basis: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      {/* ── Hero Section ── */}
      <section style={{
        backgroundImage: `url('${getAssetPath('/improvements/image copy 2.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#e8eef7', // Fallback color
        padding: '72px 24px 60px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
      }}>
        <h1 style={{
          fontSize: '34px', fontWeight: '700', color: '#0f172a',
          lineHeight: '1.25', margin: '0 auto 18px', maxWidth: '760px',
          letterSpacing: '-0.3px',
        }} className="wwd-reveal wwd-fade-up">
          Bridging Education and Employment with <br /> Role-Ready Skills
        </h1>

        <p style={{
          fontSize: '15px', color: '#64748b', lineHeight: '1.75',
          maxWidth: '580px', margin: '0 auto 52px',
        }} className="wwd-reveal wwd-fade-up wwd-delay-1">
          Bridging the gap between education and employment, Skillzza empowers professionals,
          institutions, and enterprises with real-world capabilities. We combine AI-driven intelligence,
          immersive learning, and role-based simulations to create a future-ready workforce.
        </p>

        <div style={{ maxWidth: '1020px', margin: '0 auto' }} className="wwd-reveal wwd-scale-up wwd-delay-2">
          <img
            src={getAssetPath('/maskgroup.png')}
            alt="Assess Learn Simulate HireNest"
            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </section>

      {/* ── Four Core Pillars Section ── */}
      <section style={{ background: '#fff', fontFamily: 'Inter, sans-serif', paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', padding: '64px 0 48px' }} className="wwd-reveal wwd-fade-up">
            <h2 style={{ fontSize: 42, fontWeight: 800, color: '#111827', lineHeight: 1.2, margin: 0 }}>
              The Four Core Pillars
            </h2>
          </div>

          {/* Sticky Tab Bar */}
          <div className="pillar-tabs wwd-reveal wwd-fade-up wwd-delay-1" style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            background: '#fff',
            paddingTop: 16,
            paddingBottom: 16,
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
            borderBottom: '1px solid #e5e7eb',
            marginBottom: 0,
          }}>
            {pillars.map((p, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  fontWeight: activeTab === i ? 700 : 500,
                  background: p.tabBg,
                  color: p.tabColor,
                  transition: 'all 0.2s',
                }}
              >
                {p.tab}
              </button>
            ))}
          </div>

          {/* All Pillar Sections stacked */}
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="pillar-row wwd-reveal wwd-fade-up"
              ref={sectionRefs[i]}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 64,
                flexDirection: pillar.imageLeft ? 'row' : 'row-reverse',
                position: 'relative',
                overflow: 'hidden',
                minHeight: 420,
                padding: '72px 0',
                borderBottom: i < pillars.length - 1 ? '1px solid #f3f4f6' : 'none',
                scrollMarginTop: 80,
              }}
            >
              {/* core.svg decorative — left side (Pillar 1) */}
              {pillar.decorLeft && (
                <img
                  className="wwd-core-decor"
                  src={getAssetPath('/core.svg')}
                  alt=""
                  style={{
                    position: 'absolute',
                    left: -40,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '85%',
                    width: 'auto',
                    objectFit: 'contain',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Screenshot */}
              <div style={{
                flex: '0 0 52%',
                position: 'relative',
                zIndex: 1,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
                background: pillar.screenBg,
                padding: 24,
                marginLeft: i === 3 ? '32px' : 0,
              }}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: 10 }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1, zIndex: 1 }}>
                <h3 style={{
                  fontSize: 32, fontWeight: 800, color: pillar.titleColor,
                  marginBottom: 16, lineHeight: 1.2, fontFamily: 'Inter, sans-serif',
                }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.7, marginBottom: 24 }}>
                  {pillar.description}
                </p>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 12 }}>
                  {pillar.listTitle}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {pillar.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: '#374151' }}>
                      <span style={{
                        width: 7, height: 7, borderRadius: '50%', background: pillar.titleColor,
                        flexShrink: 0, marginTop: 7,
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── Partner Section ── */}
      {/*
      <section style={{
        backgroundImage: `url(${getAssetPath('/background-partner.png')})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}>
        <div className="partner-cta-main" style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%", paddingTop: 40 }}>
          <div className="partner-cta-img-col" style={{ flex: "0 0 46%", position: "relative" }}>
            <img
              src={getAssetPath('/businesspeople-having-discussion-office@2x.png')}
              alt="Partner with us"
              style={{ width: "100%", height: "auto", minHeight: 340, objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 12, background: "#FDB913" }} />
          </div>
          <div className="partner-cta-form-col" style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0px 64px 48px 180px" }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#1f2937", lineHeight: 1.25, marginBottom: 16, fontFamily: "Inter, sans-serif" }}>
              Partner with us<br />To make a Difference
            </h2>
            <p style={{ fontSize: 15, color: "#4b5563", marginBottom: 28, lineHeight: 1.6, maxWidth: 400, fontFamily: "Inter, sans-serif" }}>
              Connect with our industry experts for a personalised consultation. Let's explore how our solutions can revolutionise your growth.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 420 }}>
              <input placeholder="Name*" style={{ width: "100%", padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
              <input placeholder="Email*" style={{ width: "100%", padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
              <div className="partner-phone-row" style={{ display: "flex", gap: 12 }}>
                <div className="partner-country-code" style={{ display: "flex", alignItems: "center", gap: 4, padding: "13px 16px", borderRadius: 6, background: "#fff", color: "#1f2937", fontSize: 14, minWidth: 100, fontFamily: "Inter, sans-serif" }}>
                  <span>India</span><span style={{ color: "#9ca3af", marginLeft: 4 }}>+91</span>
                </div>
                <input className="partner-mobile-input" placeholder="Mobile Number*" style={{ flex: 1, padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif" }} />
              </div>
              <button
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                style={{ width: "100%", padding: "14px", borderRadius: 6, background: "#1f2937", color: "#fff", border: "none", fontSize: 16, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", marginTop: 4, transition: "opacity 0.2s" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ── Skill Digest Section ── */}
      {/*
      <section style={{ background: "#fff", padding: "80px 0", fontFamily: "Inter, sans-serif" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div className="insights-row" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div className="insights-left-col" style={{ display: "flex", flexDirection: "column", width: 280, flexShrink: 0, alignSelf: "stretch" }}>
              <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 20, color: "#111827", fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>Insights</h2>
              <button style={{ border: "1.5px solid #d1d5db", background: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", marginBottom: 24, fontFamily: "Inter, sans-serif" }}>View all the resources</button>
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#ede9fe", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <img src={getAssetPath("/insight-blog.png")} alt="Blog" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} onError={e => { e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>AI Assistant</div>
                </div>
                <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <img src={getAssetPath("/pen.svg")} alt="Blog" style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16, lineHeight: 1.5, flex: 1, fontFamily: "Inter, sans-serif" }}>Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Read the Blog</button>
                </div>
              </div>
            </div>
            <div className="insights-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }}>
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fef3e2", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", background: "#e5d5c0" }}>
                  <img src={getAssetPath("/insight-robot.png")} alt="AI Robot" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#f5a623", color: "#fff", marginBottom: 12, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 16, flex: 1, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>2026 AI Talent & Salary Benchmark Report</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Read the reports</button>
                </div>
              </div>
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fce7f3", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", background: "#d0b0c0" }}>
                  <img src={getAssetPath("/insight-future.png")} alt="Future of Work" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#e02020", color: "#fff", marginBottom: 12, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 16, flex: 1, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>The Skill Blueprint AI & The Future of Work</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Explore the Case studies</button>
                </div>
              </div>
              <div className="insights-podcast-card" style={{ gridColumn: "1 / -1", borderRadius: 16, background: "#cffafe", padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "inline-block", background: "#22d3ee", color: "#fff", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 14, fontFamily: "Inter, sans-serif" }}>Podcast</span>
                  <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: "#111827", lineHeight: 1.3, fontFamily: "Inter, sans-serif" }}>Skills DECODED:<br />Conversations that matter.</h4>
                  <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, marginBottom: 0, maxWidth: 480, fontFamily: "Inter, sans-serif" }}>Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.</p>
                </div>
                <div className="insights-podcast-action" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <img src={getAssetPath("/mic.svg")} alt="Podcast" style={{ width: 72, height: 72 }} />
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif" }}>Listen now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default WhatWeDo;