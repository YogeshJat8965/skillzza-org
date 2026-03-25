import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

/* ─── Animated counter hook ─── */
function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    setCount(0);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ─── Single animated stat ─── */
const AnimatedStat = ({ target, suffix, bold, light, started, delay = 0 }) => {
  const [go, setGo] = useState(false);
  useEffect(() => {
    if (!started) { setGo(false); return; }
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);
  const count = useCountUp(target, 1600, go);
  return (
    <div className="mds-col">
      <p className="mds-stat">{count}{suffix}</p>
      <p className="mds-desc">
        <span className="mds-desc-bold">{bold}</span>
        <span className="mds-desc-light">{light}</span>
      </p>
    </div>
  );
};

/* ─── Stats section with IntersectionObserver ─── */
const MethodologyStats = () => {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false);
          setTimeout(() => setStarted(true), 50);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: 85, suffix: '%+', bold: 'skill acquisition rates', light: ' across all programs.', delay: 0 },
    { target: 90, suffix: '%+', bold: 'learner satisfaction', light: ' with learning experience quality.', delay: 120 },
    { target: 75, suffix: '%+', bold: 'career advancement', light: ' within 12 months of program completion', delay: 240 },
    { target: 95, suffix: '%+', bold: 'employer satisfaction', light: ' with graduate competencies', delay: 360 },
  ];

  return (
    <section ref={sectionRef} style={{ background: '#C01421', fontFamily: "'Inter', sans-serif", overflow: 'hidden' }}>
      <style>{`
        .mds-heading {
          text-align: center; color: #fff; font-size: 42px; font-weight: 700;
          line-height: 1.3; letter-spacing: -0.3px; margin: 0; padding: 40px 24px 0;
        }
        .mds-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 32px;
        }
        .mds-col { padding: 20px 40px 44px; }
        .mds-stat {
          font-size: 64px; font-weight: 700; color: #fff;
          line-height: 1; margin: 0 0 10px 0; letter-spacing: -0.5px;
        }
        .mds-desc { font-size: 13.5px; line-height: 1.55; margin: 0; color: #fff; }
        .mds-desc-bold  { font-weight: 700; }
        .mds-desc-light { font-weight: 400; color: rgba(255,255,255,0.88); }
        .mds-strip { height: 5px; background: linear-gradient(90deg, #f5a623 0%, #FDB913 100%); }
        @media (max-width: 860px) {
          .mds-grid { grid-template-columns: repeat(2, 1fr); }
          .mds-col  { padding: 24px 28px 36px; }
          .mds-stat { font-size: 52px; }
        }
        @media (max-width: 480px) {
          .mds-heading { font-size: 26px; padding-top: 32px; }
          .mds-grid { grid-template-columns: 1fr 1fr; }
          .mds-col  { padding: 20px 20px 28px; }
          .mds-stat { font-size: 40px; letter-spacing: -1px; }
          .mds-desc { font-size: 12px; }
        }
      `}</style>

      <h2 className="mds-heading">Our methodology<br />consistently delivers</h2>

      <div className="mds-grid">
        {stats.map((s, i) => (
          <AnimatedStat key={i} {...s} started={started} />
        ))}
      </div>

      <div className="mds-strip" />
    </section>
  );
};

/* ─── Implementation Methodology Stepper ─── */
const phases = [
  {
    label: 'Discovery and\nMapping',
    title: 'Discovery and Mapping',
    bullets: ['Comprehensive skill gap analysis', 'Learning preference identification', 'Career trajectory planning', 'Baseline competency establishment'],
    image: '/skill_mapping_vertical.jpg',
  },
  {
    label: 'Personalized\nLearning Path\nCreation',
    title: 'Personalized Learning Path Creation',
    bullets: ['AI-generated curriculum customization', 'Resource allocation and scheduling', 'Milestone and checkpoint definition', 'Success metrics establishment'],
    image: '/mirroing_img.png',
  },
  {
    label: 'Active Learning\nEngagement',
    title: 'Active Learning Engagement',
    bullets: ['Interactive content delivery', 'Real-time performance monitoring', 'Adaptive difficulty adjustment', 'Peer and mentor integration'],
    image: '/one-and-ond-mentoring-img.jpg',
  },
  {
    label: 'Application\nand Validation',
    title: 'Application and Validation',
    bullets: ['Project-based assessments', 'Industry simulation participation', 'Competency certification', 'Portfolio development'],
    image: '/RiskAssessmentStrategist_tile_img.png',
  },
  {
    label: 'Continuous\nGrowth and\nAdaptation',
    title: 'Continuous Growth and Adaptation',
    bullets: ['Ongoing skill maintenance', 'Emerging technology integration', 'Career advancement planning', 'Lifelong learning pathway creation'],
    image: '/digital_bugiess_growthBlog_img.jpg',
  },
];

const ImplementationStepper = () => {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section style={{ background: '#f0eeff', fontFamily: "'Inter', sans-serif", padding: '64px 0 72px' }}>
      <style>{`
        /* ── FIX: increased max-width from 960px to 1200px ── */
        .imp-wrap { max-width: 1200px; margin: 0 auto; padding: 0 48px; }

        /* Title */
        .imp-title { text-align: center; font-size: 36px; font-weight: 700; color: #111827; margin: 0 0 48px; }

        /* ── Stepper track ── */
        .imp-stepper { display: flex; align-items: flex-start; position: relative; margin-bottom: 48px; }

        /* horizontal line behind circles */
        .imp-line {
          position: absolute;
          top: 17px;
          left: calc(100% / 10);
          right: calc(100% / 10);
          height: 2px;
          background: #c4b5fd;
          z-index: 0;
        }

        /* each step column */
        .imp-step {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          cursor: pointer; position: relative; z-index: 1;
        }

        /* circle */
        .imp-circle {
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #c4b5fd;
          background: #f0eeff;
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .imp-circle.active {
          background: #7c3aed;
          border-color: #7c3aed;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.18);
        }
        .imp-circle svg { display: block; }

        /* phase label below circle */
        .imp-phase-tag {
          font-size: 9px; font-weight: 700; color: #7c3aed;
          letter-spacing: 0.5px; text-transform: uppercase;
          margin-top: 10px; text-align: center; line-height: 1.3;
          white-space: pre-line;
        }
        .imp-phase-num {
          font-size: 9px; font-weight: 600; color: #9ca3af;
          letter-spacing: 0.5px; text-transform: uppercase;
          margin-top: 8px; text-align: center;
        }
        .imp-step-name {
          font-size: 11px; font-weight: active ? 600 : 400; color: #374151;
          text-align: center; margin-top: 4px; line-height: 1.4;
          white-space: pre-line;
        }
        .imp-step-name.active { font-weight: 700; color: #1f2937; }

        /* ── Content panel ── */
        .imp-panel {
          display: flex; gap: 48px; align-items: flex-start;
          background: #f8f6ff; border-radius: 20px; padding: 40px 40px 40px 40px;
        }
        .imp-panel-left { flex: 1; min-width: 0; }
        .imp-panel-right { flex: 0 0 340px; }

        .imp-panel-tag {
          display: inline-block; background: #7c3aed; color: #fff;
          font-size: 11px; font-weight: 700; letter-spacing: 1px;
          padding: 5px 14px; border-radius: 20px; margin-bottom: 20px;
          text-transform: uppercase;
        }
        .imp-panel-heading {
          font-size: 32px; font-weight: 700; color: #111827;
          line-height: 1.2; margin: 0 0 24px;
        }
        .imp-bullet {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 12px; font-size: 13.5px; color: #374151; line-height: 1.55;
        }
        .imp-bullet-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #7c3aed; flex-shrink: 0; margin-top: 6px;
        }
        .imp-panel-img {
          width: 100%; height: 260px; object-fit: cover;
          border-radius: 14px; box-shadow: 0 8px 32px rgba(124,58,237,0.15);
          display: block;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .imp-wrap { padding: 0 24px; }
          .imp-panel { flex-direction: column; padding: 28px 24px; }
          .imp-panel-right { flex: unset; width: 100%; }
          .imp-panel-img { height: 200px; }
          .imp-panel-heading { font-size: 24px; }
          .imp-title { font-size: 26px; }
          .imp-step-name { font-size: 10px; }
          .imp-phase-tag { font-size: 8px; }
        }
        @media (max-width: 480px) {
          .imp-circle { width: 28px; height: 28px; }
          .imp-line { top: 13px; }
          .imp-step-name { display: none; }
        }
      `}</style>

      <div className="imp-wrap">
        {/* Title */}
        <h2 className="imp-title">Our Methodology</h2>

        {/* Stepper */}
        <div className="imp-stepper">
          <div className="imp-line" />
          {phases.map((p, i) => (
            <div key={i} className="imp-step" onClick={() => setActive(i)}>
              {/* Circle */}
              <div className={`imp-circle${active === i ? ' active' : ''}`}>
                {active === i ? (
                  /* checkmark */
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  /* empty circle dot */
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d1d5db' }} />
                )}
              </div>
              {/* Phase number + name */}
              <span className="imp-phase-num">PHASE {i + 1}</span>
              <span className={`imp-step-name${active === i ? ' active' : ''}`}>{p.label}</span>
            </div>
          ))}
        </div>

        {/* Content panel */}
        <div className="imp-panel">
          <div className="imp-panel-left">
            <span className="imp-panel-tag">PHASE {active + 1}</span>
            <h3 className="imp-panel-heading">{phase.title}</h3>
            <div>
              {phase.bullets.map((b, i) => (
                <div key={i} className="imp-bullet">
                  <div className="imp-bullet-dot" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="imp-panel-right">
            <img
              key={active}
              src={getAssetPath(phase.image)}
              alt={phase.title}
              className="imp-panel-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Main page ─── */

/* ─── LEARN Framework ─── */
const learnData = [
  {
    letter: 'L',
    title: 'Learner-Centric Assessment',
    desc: 'Every journey begins with understanding. Our AI-powered diagnostic assessments map individual learning styles, skill gaps, and career aspirations to create personalized development pathways.',
    bullets: [
      'Analyzes cognitive patterns, industry requirements, and performance metrics.',
      'Ensures every learner receives a tailored experience that maximizes potential.',
      'Builds clarity on direction before learning begins.',
    ],
  },
  {
    letter: 'E',
    title: 'Experiential Learning Design',
    desc: 'Knowledge becomes expertise through application. Our immersive learning modules combine theoretical foundations with hands-on practice, utilizing real-world scenarios and industry-standard tools.',
    bullets: [
      'Combines theory with hands-on practice in real-world scenarios.',
      'Utilizes industry-standard tools and virtual simulations.',
      'Mirrors actual workplace demands through project-based challenges.',
    ],
  },
  {
    letter: 'A',
    title: 'Adaptive Intelligence',
    desc: 'Learning evolves as you do. Our platform continuously analyzes performance data, engagement patterns, and skill acquisition rates to dynamically adjust content difficulty, pacing, and focus areas.',
    bullets: [
      'Dynamically adjusts content difficulty and pacing in real time.',
      'Monitors engagement patterns and skill acquisition rates.',
      'Ensures optimal challenge levels that promote growth.',
    ],
  },
  {
    letter: 'R',
    title: 'Role-Based Simulations',
    desc: 'Context drives competency. Our comprehensive simulation library recreates authentic workplace environments where learners can practice decision-making, problem-solving, and collaboration.',
    bullets: [
      'Recreates authentic workplace environments risk-free.',
      'Developed in partnership with industry experts.',
      'Covers decision-making, problem-solving, and collaboration skills.',
    ],
  },
  {
    letter: 'N',
    title: 'Network Integration',
    desc: 'Learning is a social endeavor. Our methodology emphasizes peer collaboration, mentor guidance, and industry connections that extend learning beyond individual study.',
    bullets: [
      'Facilitates meaningful peer and mentor interactions.',
      'Connects learners with professionals and organizations.',
      'Creates lasting professional networks beyond the classroom.',
    ],
  },
];

const LearnFramework = () => {
  const [active, setActive] = useState(0);
  const item = learnData[active];

  const zones = [
    { index: 0, label: 'L', top: '8%', left: '10%', width: '35%', height: '38%' },
    { index: 1, label: 'E', top: '5%', left: '52%', width: '38%', height: '38%' },
    { index: 2, label: 'A', top: '42%', left: '58%', width: '36%', height: '35%' },
    { index: 3, label: 'R', top: '62%', left: '28%', width: '38%', height: '32%' },
    { index: 4, label: 'N', top: '42%', left: '5%', width: '36%', height: '35%' },
  ];

  return (
    <section style={{
      backgroundImage: `url(${getAssetPath('/school-background.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '64px 0 80px', position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600&display=swap');
        /* ── FIX: increased max-width from 1080px to 1200px ── */
        .lf-wrap { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .lf-title-box { border-radius: 6px; padding: 22px 56px; text-align: center; margin: 0 auto 60px; display: table; }
        .lf-title { font-family: 'Playfair Display', Georgia, serif; font-size: 34px; font-weight: 800; color: #0f0f1a; line-height: 1.25; margin: 0; letter-spacing: -0.3px; }
        .lf-body { display: flex; gap: 64px; align-items: center; }
        .lf-right { flex: 1; }
        .lf-item-title { font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 700; color: #6d28d9; line-height: 1.2; margin: 0 0 18px; }
        .lf-item-desc { font-family: 'Source Sans 3', sans-serif; font-size: 15px; color: #4b5563; line-height: 1.75; margin: 0 0 22px; }
        .lf-bullet { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; font-family: 'Source Sans 3', sans-serif; font-size: 14.5px; color: #374151; line-height: 1.65; }
        .lf-dot { width: 6px; height: 6px; border-radius: 50%; background: #6b7280; flex-shrink: 0; margin-top: 8px; }
        .lf-zone { position: absolute; cursor: pointer; background: transparent; }
        .lf-zone:hover { background: transparent; }
        .lf-zone.active { background: transparent; outline: none; }
        @media (max-width: 768px) { .lf-body { flex-direction: column; gap: 36px; } .lf-title { font-size: 24px; } .lf-item-title { font-size: 24px; } .lf-wrap { padding: 0 20px; } .lf-title-box { padding: 16px 24px; } }
      `}</style>

      <div className="lf-wrap">
        {/* Bordered title box */}
        <div className="lf-title-box">
          <h2 className="lf-title">The LEARN Framework<br />How Skillzza Builds Real-World Skills</h2>
        </div>

        <div className="lf-body">
          {/* Left: image with invisible clickable overlay zones */}
          <div style={{ flexShrink: 0, width: '360px', position: 'relative' }}>
            <img
              src={getAssetPath('/framework.png')}
              alt="LEARN Framework Wheel"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {zones.map((z) => (
              <div
                key={z.index}
                className={`lf-zone${active === z.index ? ' active' : ''}`}
                onClick={() => setActive(z.index)}
                style={{
                  top: z.top, left: z.left,
                  width: z.width, height: z.height,
                }}
                title={learnData[z.index].title}
              />
            ))}
          </div>

          {/* Right: content panel updates on click */}
          <div className="lf-right">
            <h3 className="lf-item-title">{item.title}</h3>
            <p className="lf-item-desc">{item.desc}</p>
            <div>
              {item.bullets.map((b, i) => (
                <div key={i} className="lf-bullet">
                  <div className="lf-dot" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurMethodology = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Top: white bg with title */}
      <section style={{ backgroundColor: '#fff', padding: '48px 24px 32px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '400', color: '#111', lineHeight: '1.2', margin: '0 auto', maxWidth: '700px' }}>
          The Skillzza Learning{' '}
          <span style={{ fontWeight: '800' }}>Framework</span>
        </h1>
      </section>

      {/* Full-width banner image — no overlay */}
      <div style={{ width: '100%', lineHeight: 0 }}>
        <img
          src={getAssetPath('/speaker.png')}
          alt="The Skillzza Learning Framework"
          style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
      </div>

      {/* Below image: white section with centered text + stat pills */}
      {/* ── FIX: increased maxWidth for heading, paragraph and pills ── */}
      <section style={{ backgroundColor: '#fff', padding: '64px 48px 72px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111', lineHeight: '1.25', margin: '0 auto 20px', maxWidth: '100%' }}>
          Transforming Potential Through<br />Science-Backed Learning
        </h2>
        <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.75', maxWidth: '100%', margin: '0 auto 40px' }}>
          At Skillzza, we believe that effective skill development requires more than traditional training approaches. Our methodology integrates cognitive science, industry insights, and adaptive technology to create learning experiences that deliver measurable, lasting results.
        </p>
        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '14px', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
          {['85%+ Skill Acquisition', '90%+ Learner Satisfaction', '75%+ Career Advancement', '95%+ Employer Satisfaction'].map((stat, i) => (
            <div key={i} style={{
              padding: '10px 24px', borderRadius: '50px',
              backgroundColor: '#e8f4fd', color: '#2c6fad',
              fontSize: '14px', fontWeight: '500',
            }}>
              {stat}
            </div>
          ))}
        </div>
      </section>

      {/* LEARN Framework Section */}
      <LearnFramework />

      {/* ─── Core Principles ─── */}
      <section style={{ backgroundColor: '#fff', padding: '48px 0 56px', fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>

        {/* core.svg — decorative background shape on the left */}
        <img
          src={getAssetPath('/core.svg')}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            height: '90%',
            width: 'auto',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* Title */}
        <h2 style={{
          textAlign: 'center', fontSize: '36px', fontWeight: '700',
          color: '#111', marginBottom: '32px', letterSpacing: '-0.3px',
        }}>
          Our Core Principles
        </h2>

        {/* ── FIX: increased maxWidth from 920px to 1100px, fixed asymmetric padding ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 2,
        }}>

          {/* Card 1 – Competency-Based Progression */}
          <div style={{
            backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '36px 20px 28px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          }}>
            <img src={getAssetPath('/badge.svg')} alt="Competency-Based Progression" style={{ width: '52px', height: '52px' }} />
            <p style={{ marginTop: '14px', fontSize: '13.5px', fontWeight: '600', color: '#1a1a1a', lineHeight: '1.5' }}>
              Competency-Based<br />Progression
            </p>
          </div>

          {/* Card 2 – Industry-Academic Convergence */}
          <div style={{
            backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '36px 20px 28px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          }}>
            <img src={getAssetPath('/bag.svg')} alt="Industry-Academic Convergence" style={{ width: '52px', height: '52px' }} />
            <p style={{ marginTop: '14px', fontSize: '13.5px', fontWeight: '600', color: '#1a1a1a', lineHeight: '1.5' }}>
              Industry-Academic<br />Convergence
            </p>
          </div>

          {/* Card 3 – Cognitive Load Optimization */}
          <div style={{
            backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '36px 20px 28px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          }}>
            <img src={getAssetPath('/brain.svg')} alt="Cognitive Load Optimization" style={{ width: '52px', height: '52px' }} />
            <p style={{ marginTop: '14px', fontSize: '13.5px', fontWeight: '600', color: '#1a1a1a', lineHeight: '1.5' }}>
              Cognitive Load<br />Optimization
            </p>
          </div>

          {/* Card 4 – Cultural and Contextual Relevance */}
          <div style={{
            backgroundColor: '#F5F5F5', borderRadius: '8px', padding: '36px 20px 28px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
          }}>
            <img src={getAssetPath('/world.svg')} alt="Cultural and Contextual Relevance" style={{ width: '52px', height: '52px' }} />
            <p style={{ marginTop: '14px', fontSize: '13.5px', fontWeight: '600', color: '#1a1a1a', lineHeight: '1.5' }}>
              Cultural and Contextual<br />Relevance
            </p>
          </div>

        </div>
      </section>

      {/* Implementation Methodology — Stepper */}
      <ImplementationStepper />

      {/* ── METHODOLOGY DELIVERS STATS ── */}
      <MethodologyStats />

      {/* Our Commitment to Excellence */}
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
          <div style={{ flex: "0 0 46%", position: "relative" }}>
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
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "13px 16px", borderRadius: 6, background: "#fff", color: "#1f2937", fontSize: 14, minWidth: 100, fontFamily: "Inter, sans-serif" }}>
                  <span>India</span><span style={{ color: "#9ca3af", marginLeft: 4 }}>+91</span>
                </div>
                <input placeholder="Mobile Number*" style={{ flex: 1, padding: "13px 16px", borderRadius: 6, border: "none", outline: "none", fontSize: 15, background: "#fff", color: "#1f2937", fontFamily: "Inter, sans-serif" }} />
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

      {/* Final CTA Section */}
      <section style={{ background: "#fff", padding: "80px 0", fontFamily: "Inter, sans-serif" }}>
        <div className="section-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div className="insights-row" style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

            {/* Left Column */}
            <div className="insights-left-col" style={{ display: "flex", flexDirection: "column", width: 280, flexShrink: 0, alignSelf: "stretch" }}>
              <h2 style={{ fontSize: 42, fontWeight: 800, marginBottom: 20, color: "#111827", fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>Insights</h2>
              <button style={{ border: "1.5px solid #d1d5db", background: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", marginBottom: 24, fontFamily: "Inter, sans-serif" }}>View all the resources</button>

              <div style={{ borderRadius: 16, overflow: "hidden", background: "#ede9fe", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                  <img src={getAssetPath("/insight-blog.png")} alt="Blog" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
                    onError={e => { e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: 6, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>AI Assistant</div>
                </div>
                <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <img src={getAssetPath("/pen.svg")} alt="Blog" style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 16, lineHeight: 1.5, flex: 1, fontFamily: "Inter, sans-serif" }}>Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI</h4>
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "9px 18px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Read the Blog</button>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="insights-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto", gap: 16 }}>
              <div style={{ borderRadius: 16, overflow: "hidden", background: "#fef3e2", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", background: "#e5d5c0" }}>
                  <img src={getAssetPath("/insight-robot.png")} alt="AI Robot" style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#f5a623", color: "#fff", marginBottom: 12, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>Research & Insights</span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 16, flex: 1, lineHeight: 1.4, fontFamily: "Inter, sans-serif" }}>2025 AI Talent & Salary Benchmark Report</h4>
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

              <div style={{ gridColumn: "1 / -1", borderRadius: 16, background: "#cffafe", padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "inline-block", background: "#22d3ee", color: "#fff", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, marginBottom: 14, fontFamily: "Inter, sans-serif" }}>Podcast</span>
                  <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: "#111827", lineHeight: 1.3, fontFamily: "Inter, sans-serif" }}>Skills DECODED:<br />Conversations that matter.</h4>
                  <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, marginBottom: 0, maxWidth: 480, fontFamily: "Inter, sans-serif" }}>Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <img src={getAssetPath("/mic.svg")} alt="Podcast" style={{ width: 72, height: 72 }} />
                  <button style={{ border: "1.5px solid #9ca3af", background: "#fff", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "#374151", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif" }}>Listen now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMethodology;