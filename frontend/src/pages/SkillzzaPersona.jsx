import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils/assets';
import adaptiveAiImg from '../assets/skill persona/image.png';
const SkillzzaPersona = () => {
  const heroRef = useRef(null);
  const [activeHowTab, setActiveHowTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll('.persona-animate');
          if (entry.isIntersecting) {
            els.forEach((el) => el.classList.add('active'));
          } else {
            els.forEach((el) => el.classList.remove('active'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => { if (heroRef.current) observer.unobserve(heroRef.current); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .persona-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .persona-animate.active {
          opacity: 1;
          transform: translateY(0);
        }
        .persona-animate.delay-1 { transition-delay: 0.15s; }
        .persona-animate.delay-2 { transition-delay: 0.35s; }
        .persona-animate.delay-3 { transition-delay: 0.55s; }
        .persona-animate.delay-4 { transition-delay: 0.75s; }

        .persona-hero-image {
          opacity: 0;
          transform: translateX(50px) scale(0.98);
          transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        .persona-hero-image.active {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .persona-cta-primary {
          background: linear-gradient(135deg, #6C63FF 0%, #8B5CF6 50%, #A855F7 100%);
          transition: all 0.3s ease;
        }
        .persona-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(108, 99, 255, 0.35);
        }
        .persona-cta-outline {
          border: 1.5px solid #374151;
          transition: all 0.3s ease;
        }
        .persona-cta-outline:hover {
          background: #374151;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 65, 81, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{
          width: '100%',
          height: 'clamp(400px, 47.4vw, 910px)',
          backgroundColor: '#EFF6FF',
        }}
      >
        {/* Background Hero Image */}
        <div className="absolute inset-0 persona-hero-image persona-animate" style={{
          width: '100%',
          height: '100%',
          background: `transparent url(${getAssetPath('/skillzza_persona_home.png')}) center center no-repeat padding-box`,
          backgroundSize: 'cover',
          opacity: 1,
        }}>
          {/* Left overlay */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: '60.7%',
              height: '100%',
              background: 'transparent linear-gradient(89deg, #B6E2FD 0%, #2668B210 100%) 0% 0% no-repeat padding-box',
              opacity: 0.58,
            }}
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 w-full h-full">
          {/* Breadcrumb */}
          <nav
            className="absolute persona-animate delay-1"
            style={{ top: '13.4%', left: '11.67%' }}
          >
            <div className="flex items-center gap-2" style={{ color: '#71717A', fontSize: 'clamp(11px, 0.73vw, 14px)' }}>
              <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <span>&gt;</span>
              <span className="hover:opacity-70 transition-opacity">Products</span>
              <span>&gt;</span>
              <span className="font-medium" style={{ color: '#4B5563' }}>Skillzza Persona</span>
            </div>
          </nav>

          {/* Main Heading */}
          <h1
            className="product-heading absolute persona-animate delay-2"
            style={{
              top: '25%',
              left: '11.67%',
              width: '40.4%',
              textAlign: 'left',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(28px, 4.375vw, 84px)',
              lineHeight: 'clamp(34px, 4.79vw, 92px)',
              letterSpacing: '-2.1px',
              color: '#0F1114',
              opacity: 1,
            }}
          >
            The AI Role-Play Simulation Engine for Career-Ready Performance
          </h1>

          {/* Subtitle */}
          <p
            className="absolute persona-animate delay-3"
            style={{
              top: '50%',
              left: '11.67%',
              width: '33.85%',
              textAlign: 'left',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(13px, 1.25vw, 24px)',
              lineHeight: 'clamp(18px, 1.875vw, 36px)',
              letterSpacing: '0px',
              color: '#71717A',
              opacity: 1,
            }}
          >
            Practice high-stakes career moments in a risk-free environment, before they define your future.
          </p>

          {/* CTA Buttons */}
          <div
            className="absolute flex items-center gap-4 persona-animate delay-4"
            style={{ top: '65%', left: '11.67%' }}
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(12px, 0.83vw, 16px)',
                width: 'clamp(200px, 15vw, 288px)',
                height: 'clamp(42px, 3.125vw, 60px)',
                background: '#4543D9 0% 0% no-repeat padding-box',
                borderRadius: '8px',
              }}
            >
              Start Your Free Persona
            </Link>
            <Link
              to="/book-demo"
              className="persona-cta-outline inline-flex items-center justify-center font-semibold rounded-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(12px, 0.83vw, 16px)',
                height: 'clamp(42px, 3.125vw, 60px)',
                padding: '0 clamp(20px, 1.56vw, 30px)',
                borderRadius: '8px',
                color: '#374151',
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 1: The Hidden Gap ── */}
      <section className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left Column */}
            <div className="lg:w-1/2">
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '36px', lineHeight: '44px', color: '#0F1114', marginBottom: '28px' }}>
                The Hidden Gap Between Qualified And Career-Ready
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', marginBottom: '12px', lineHeight: '1.6' }}>
                Modern organizations need professionals who can:
              </p>
              <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc', lineHeight: '1.6' }}>
                <li>Think clearly in ambiguity</li>
                <li>Communicate with confidence and credibility</li>
                <li>Lead without authority</li>
                <li>Navigate complex human and organizational dynamics</li>
              </ul>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', marginBottom: '24px' }}>
                Yet most professionals enter these moments unprepared, learning through costly trial and error rather than deliberate practice. Skillzza Persona™ changes that.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6' }}>
                We don't teach you about workplace behavior. We let you experience it, stepping into real roles, navigating real scenarios, and performing under real pressure, before the career moment actually arrives.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2">
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', marginBottom: '24px' }}>
                Technical skills may open doors, but careers are shaped by how people think, communicate, influence, and respond under pressure.
              </p>
              <img
                src={getAssetPath('/corporate_model_img.jpg')}
                alt="Professional businessman"
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div> {/* end right column */}

          </div> {/* end flex row */}

          {/* Designed For Section — full width below both columns */}
          <div className="mt-6">
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#6B7280', marginBottom: '16px', letterSpacing: '0.5px', lineHeight: '1.6' }}>
              Designed for
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
              {[
                { title: 'Students & Graduates', desc: 'entering the professional world', icon: '🎓' },
                { title: 'Professionals', desc: 'preparing for leadership or role transitions', icon: '👔' },
                { title: 'Institutions', desc: 'focused on employability and career outcomes', icon: '🏛️' },
                { title: 'Employers', desc: 'seeking behaviorally ready, workplace-fit talent', icon: '🏢' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6" style={{ borderBottom: i < 2 ? '1px solid #E5E7EB' : 'none', borderRight: i % 2 === 0 ? '1px solid #E5E7EB' : 'none' }}>
                  <span className="text-3xl" style={{ color: '#1F57C7' }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '15px', color: '#0F1114' }}>{item.title}</p>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#6B7280', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div> {/* end max-w container */}
      </section>

      {/* ── Section 2: What Skillzza Persona Develops ── */}
      <section style={{ backgroundColor: '#F9FAFB', paddingTop: '16px', paddingBottom: '16px' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '36px', color: '#0F1114', marginBottom: '20px' }}>
            What Skillzza Person Develops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              'Professional Communication & Executive Presence',
              'Leadership & Influence Without Authority',
              'Emotional & Social Intelligence',
            ].map((skill, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1F57C7' }}>{skill}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              'Decision-Making Under Pressure',
              'Workplace Adaptability & Resilience',
            ].map((skill, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1F57C7' }}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Career Moments You Can Practice Today ── */}
      <section className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Image */}
            <div className="lg:w-5/12 relative">
              <img
                src={getAssetPath('/Group 41611.jpg')}
                alt="Team of professionals"
                className="w-full h-80 object-cover rounded-lg shadow-lg relative z-0"
              />
            </div>

            {/* Right: Content */}
            <div className="lg:w-7/12">
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '36px', lineHeight: '44px', color: '#0F1114', marginBottom: '16px' }}>
                Career Moments You Can Practice Today
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', marginBottom: '20px', fontWeight: 500, lineHeight: '1.6' }}>
                Imagine being able to rehearse:
              </p>
              <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#374151', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Your first presentation to senior leadership, before your voice shakes</li>
                <li>A difficult conversation with an underperforming team member, before you avoid it</li>
                <li>Pitching your idea when you're the most junior person in the room, before you second-guess yourself</li>
                <li>Handling a frustrated client threatening to leave, before you lose the account</li>
                <li>Leading a critical project with no direct authority, before stakeholders lose confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How Persona Works (Tabbed) ── */}
      <section style={{ backgroundColor: '#F9FAFB', paddingTop: '16px', paddingBottom: '16px' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '36px', color: '#0F1114', marginBottom: '16px' }}>
            How Persona Works
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-0 mb-4" style={{ borderBottom: '2px solid #E5E7EB' }}>
            {[
              'AI-Driven Role Immersion',
              'Adaptive AI Intelligence',
              'Behavioral Intelligence Tracking',
              'Real-Time Coaching & Career Insights',
            ].map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveHowTab(i)}
                className="px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: activeHowTab === i ? '#1F57C7' : '#6B7280',
                  borderBottom: activeHowTab === i ? '3px solid #1F57C7' : '3px solid transparent',
                  marginBottom: '-2px',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            {activeHowTab === 0 && (
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/2">
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1F57C7', marginBottom: '16px' }}>AI-Driven Role Immersion</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#374151', fontWeight: 500, marginBottom: '12px', lineHeight: '1.6' }}>
                    Step into authentic, professionally mapped scenarios that match your career path:
                  </p>
                  <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li><strong>Product Managers</strong> leading tense cross-functional prioritization meetings</li>
                    <li><strong>Consultants</strong> presenting recommendations to skeptical C-suite executives</li>
                    <li><strong>Team Leads</strong> managing performance conversations and team conflict</li>
                    <li><strong>Account Managers</strong> recovering trust after a service failure</li>
                    <li><strong>First-Time Managers</strong> navigating the transition from peer to leader</li>
                  </ul>
                  <p className="mt-6" style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#6B7280', lineHeight: '1.6' }}>
                    Each scenario is built on industry role benchmarks and real workplace challenges, not generic case studies.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img src={getAssetPath('/business-people-corporate-staff-meeting-with-envisional-graphic.jpg')} alt="AI Role Immersion" className="w-full h-72 object-cover rounded-xl shadow-md" />
                </div>
              </div>
            )}
            {activeHowTab === 1 && (
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/2">
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1F57C7', marginBottom: '16px' }}>Adaptive AI Intelligence</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#374151', fontWeight: 500, marginBottom: '12px', lineHeight: '1.6' }}>
                    Our AI doesn't follow scripts—it responds intelligently to your every choice:
                  </p>
                  <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li><strong>Contextual Awareness:</strong> Understands the nuances of each situation</li>
                    <li><strong>Emotional Intelligence:</strong> Recognizes and responds to your communication style</li>
                    <li><strong>Dynamic Difficulty:</strong> Adjusts complexity based on your performance</li>
                    <li><strong>Authentic Reactions:</strong> Responds as real colleagues and stakeholders would</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img src={adaptiveAiImg} alt="Adaptive AI" className="w-full h-72 object-cover rounded-xl shadow-md" />
                </div>
              </div>
            )}
            {activeHowTab === 2 && (
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/2">
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1F57C7', marginBottom: '16px' }}>Behavioral Intelligence Tracking</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#374151', fontWeight: 500, marginBottom: '12px', lineHeight: '1.6' }}>
                    Advanced analytics measure the soft skills that matter most:
                  </p>
                  <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li><strong>Communication Clarity:</strong> How effectively do you convey complex ideas?</li>
                    <li><strong>Leadership Presence:</strong> Can you influence without authority?</li>
                    <li><strong>Strategic Thinking:</strong> How well do you connect tactics to outcomes?</li>
                    <li><strong>Adaptability:</strong> How gracefully do you pivot when circumstances change?</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img src={getAssetPath('/data_ai.jpg')} alt="Behavioral Tracking" className="w-full h-72 object-cover rounded-xl shadow-md" />
                </div>
              </div>
            )}
            {activeHowTab === 3 && (
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/2">
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1F57C7', marginBottom: '16px' }}>Real-Time Coaching & Career Insights</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#374151', fontWeight: 500, marginBottom: '12px', lineHeight: '1.6' }}>
                    Get immediate, actionable feedback that accelerates your growth:
                  </p>
                  <ul style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'disc' }}>
                    <li>Moment-by-moment insights on your communication effectiveness</li>
                    <li>Pattern recognition that identifies your natural strengths and blind spots</li>
                    <li>Personalized development paths targeting your specific growth areas</li>
                    <li>Benchmarking against industry standards so you know where you stand</li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <img src={getAssetPath('/feedback_mentor.jpg')} alt="Real-Time Coaching" className="w-full h-72 object-cover rounded-xl shadow-md" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Section 5: The Impact ── */}
      <section className="relative py-20 overflow-hidden" style={{
        backgroundImage: `url(${getAssetPath('/abstract-technical-wave-graphic-white-background.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffffff',
      }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '36px', color: '#0F1114', marginBottom: '20px' }}>
            The Impact: Proven Results Across Learners and Institutions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2.8X', label: 'improvement in professional confidence' },
              { number: '65%', label: 'faster readiness for leadership and client-facing roles' },
              { number: '50%', label: 'reduction in early-career performance gaps' },
              { number: '70%', label: 'higher employer confidence in behavioral preparedness' },
            ].map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '42px', color: '#1F57C7', marginBottom: '8px' }}>{stat.number}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#4B5563', lineHeight: '1.6' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20" style={{
        backgroundImage: `url(${getAssetPath('/Group%2041612.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F59E0B',
      }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '40px', lineHeight: '48px', color: '#0F1114', marginBottom: '16px' }}>
            Prepare for the Role,<br />Before You Step Into It
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                padding: '16px 36px',
                backgroundColor: '#1F57C7',
                borderRadius: '8px',
              }}
            >
              Start Your Journey
            </Link>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                padding: '15px 36px',
                backgroundColor: 'transparent',
                color: '#0F1114',
                border: '1.5px solid #0F1114',
                borderRadius: '8px',
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillzzaPersona;