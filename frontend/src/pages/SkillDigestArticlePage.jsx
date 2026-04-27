import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, BookMarked, Clock3, Flame, Layers3 } from 'lucide-react'
import Insights from '../components/Insights'

const digestArticles = {
  'beyond-grades-ai-potential-meters': {
    number: '01',
    title: 'Beyond Grades: How AI-Powered Potential Meters are Redefining Talent Discovery',
    subtitle: 'From score-centric evaluation to potential-centric talent intelligence',
    sections: [
      {
        heading: 'The Shift Beyond Traditional Metrics',
        paragraphs: [
          'For decades, grades and test scores have been the primary indicators of student potential. But as industries evolve, these traditional benchmarks are proving insufficient to capture the true spectrum of human capability.',
          'Enter the AI-powered Potential Meter, a transformative approach that shifts the focus from what students have memorized to what they can actually achieve in dynamic, practical environments.',
        ],
      },
      {
        heading: 'How AI-Powered Potential Meters Work',
        paragraphs: [
          'Unlike conventional assessments, AI-driven Potential Meters analyze skills, adaptability, creativity, and problem-solving through simulations and behavioral patterns. They do not just evaluate static knowledge-they reveal how learners think, respond to pressure, and apply insights to real-world contexts.',
          'This is especially critical as employers increasingly prioritize transferable capabilities such as collaboration, critical thinking, and digital literacy over rote performance indicators.',
        ],
      },
      {
        heading: 'Talent Discovery for the Future Economy',
        paragraphs: [
          'By mapping each learner\'s strengths and growth areas, AI-powered assessments enable personalized career pathways while helping institutions and recruiters discover talent that was previously overlooked by grade-first systems.',
          'In the future, grades will become one part of a broader talent equation. The real differentiator will be how effectively we measure potential, not just historical performance-and AI is making that vision both measurable and scalable.',
        ],
      },
    ],
    highlights: [
      'Potential over memorization',
      'Real-world behavioral insight',
      'Personalized pathways at scale',
    ],
  },
  'immersive-learning-ai-xperience-platforms': {
    number: '02',
    title: 'Immersive Learning: How AI-Powered Experience Platforms are Shaping Future-Ready Talent',
    subtitle: 'Learning by doing in high-context simulated environments',
    sections: [
      {
        heading: 'Why Traditional Learning Is No Longer Enough',
        paragraphs: [
          'Classroom learning alone cannot prepare today\'s students and professionals for complex, fast-changing workplace demands. Learners now need hands-on, immersive practice that reflects real decisions, trade-offs, and consequences.',
          'AI-powered Xperience Platforms are addressing this gap by turning passive content consumption into active skill rehearsal.',
        ],
      },
      {
        heading: 'From Passive Modules to Dynamic Simulations',
        paragraphs: [
          'These platforms incorporate role-play simulations, gamified challenges, and industry-inspired project environments where learners apply theory in motion. AI continuously tracks performance, delivers instant feedback, and recommends customized learning journeys based on individual progress.',
          'The result is deeper retention, higher confidence, and stronger practical problem-solving capability before learners enter professional roles.',
        ],
      },
      {
        heading: 'The Next Phase: Career Laboratories',
        paragraphs: [
          'For employers, this model unlocks talent that is not just academically prepared but job-ready from day one. For learners, it creates a low-risk, high-growth space to experiment, iterate, and showcase capability.',
          'Over time, AI-powered Xperience Platforms will evolve into full career laboratories where innovation, execution, and skill visibility converge-making experiential learning the default model for workforce readiness.',
        ],
      },
    ],
    highlights: [
      'Simulation-first capability building',
      'AI-guided personalized feedback loops',
      'Job-readiness before job entry',
    ],
  },
  'campus-hiring-2-ai-marketplaces': {
    number: '03',
    title: 'Campus Hiring 2.0: How AI Marketplaces are Matching Job-Ready Talent with Employers',
    subtitle: 'Replacing mass screening with precision talent matching',
    sections: [
      {
        heading: 'The Limits of Traditional Campus Recruitment',
        paragraphs: [
          'Campus hiring has always been high-stakes for both students and employers, yet resume shortlisting, generic aptitude tests, and long interview cycles often remain inefficient, expensive, and prone to bias.',
          'AI-powered hiring marketplaces are transforming this funnel by replacing guesswork with evidence-based matching.',
        ],
      },
      {
        heading: 'How AI Hiring Marketplaces Improve Match Quality',
        paragraphs: [
          'Platforms such as Hirenest do more than aggregate resumes-they build pre-assessed, job-ready talent pools using AI-driven skill tests, behavioral assessments, and project simulations. Employers can filter candidates by role-specific capability, fit indicators, and readiness signals in real time.',
          'This creates a faster, fairer, and significantly more data-driven hiring model.',
        ],
      },
      {
        heading: 'A More Equitable Talent Access Model',
        paragraphs: [
          'For students, it creates a level playing field where outcomes are based on demonstrated skill and adaptability rather than institutional brand advantage. For organizations, it reduces hiring cycle time, improves retention probability, and strengthens workforce fit.',
          'The future of campus hiring is precision matching, not mass screening-and AI marketplaces are becoming the connective tissue between academia and industry.',
        ],
      },
    ],
    highlights: [
      'Skill evidence over resume optics',
      'Faster, fairer hiring pipelines',
      'Improved fit and retention outcomes',
    ],
  },
  'from-workforce-to-skillforce-ai-transformation': {
    number: '04',
    title: "From Workforce to 'Skillforce': How AI is Driving the Next Wave of Talent Transformation",
    subtitle: 'Continuous learning as the operating model for modern organizations',
    sections: [
      {
        heading: 'The Workforce Is Being Rewritten',
        paragraphs: [
          'Automation, AI, and digital transformation are reshaping roles across every industry. Rather than replacing humans outright, these shifts are increasing the premium on adaptability and continuous capability development.',
          'This is giving rise to the concept of a skillforce-a workforce designed to evolve continuously with changing technological and market demands.',
        ],
      },
      {
        heading: 'AI as the Engine of Ongoing Upskilling',
        paragraphs: [
          'AI enables personalized upskilling by identifying skill gaps, recommending targeted interventions, and simulating future role requirements. Talent transformation is no longer a one-time learning event; it becomes a living, adaptive ecosystem where people and systems co-evolve.',
          'Individuals gain career resilience across multiple role transitions, while organizations build teams that can pivot quickly without losing execution momentum.',
        ],
      },
      {
        heading: 'A Strategic Mindset Shift',
        paragraphs: [
          'Organizations that embrace this model secure long-term competitive advantage through agility, internal mobility, and stronger talent continuity. For professionals, it means future-proof careers with broader opportunity surfaces.',
          'The move from workforce to skillforce is not just a terminology change-it is a strategic reset, and AI is the catalyst ensuring human potential keeps pace with disruption.',
        ],
      },
    ],
    highlights: [
      'From static roles to adaptive capabilities',
      'Lifelong learning as infrastructure',
      'AI-powered resilience and agility',
    ],
  },
  'ai-hackathons-new-innovation-labs': {
    number: '05',
    title: 'AI Hackathons as the New Innovation Labs: Crowdsourcing the Future of Tech',
    subtitle: 'Open innovation ecosystems for rapid real-world problem solving',
    sections: [
      {
        heading: 'Innovation Has Left Closed-Door R&D',
        paragraphs: [
          'Innovation once happened mostly inside internal labs. Today, it increasingly happens in collaborative arenas such as AI hackathons, where coders, designers, entrepreneurs, and domain experts co-create solutions under real constraints and timelines.',
          'In 24 to 48 hours, these events can surface ideas that might take months in traditional structures.',
        ],
      },
      {
        heading: 'Why AI Hackathons Are So Effective',
        paragraphs: [
          'Their strength lies in the fusion of speed, diversity, and execution pressure. By democratizing access to innovation, hackathons allow students, startups, and professionals to contribute breakthrough thinking at scale.',
          'Companies and governments increasingly leverage this model to access crowdsourced intelligence, identify promising talent, and validate high-potential concepts early.',
        ],
      },
      {
        heading: 'From Contest to Impact Platform',
        paragraphs: [
          'Platforms like AI HackNex are extending this model by aligning themes with high-impact domains such as sustainability, healthcare, fintech, and smart cities. This transforms hackathons from coding contests into launchpads for practical innovation and venture creation.',
          'Looking ahead, AI hackathons will become startup incubators, emerging-tech testbeds, and global talent gateways where the next generation of builders can create visible, measurable impact.',
        ],
      },
    ],
    highlights: [
      'Crowdsourced intelligence at speed',
      'Talent discovery through execution',
      'Impact-focused innovation pipelines',
    ],
  },
}

const DIGEST_ACCENT = '#CF2C2E'

function getReadTime(article) {
  const paragraphCount = article.sections.reduce((total, section) => total + section.paragraphs.length, 0)
  return `${Math.max(4, paragraphCount * 2)} min read`
}

const ArticleSection = ({ heading, paragraphs, index, accent }) => (
  <article className="digest-section-card" style={{ borderBottomColor: `${accent}30` }}>
    <div className="digest-section-head">
      <span className="digest-section-index" style={{ backgroundColor: `${accent}1A`, color: accent }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <h2>{heading}</h2>
    </div>
    <div className="space-y-4">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  </article>
)

function SkillDigestArticlePage() {
  const { digestSlug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  const article = digestArticles[digestSlug]
  const articleEntries = Object.entries(digestArticles)
  const articleIndex = articleEntries.findIndex(([slug]) => slug === digestSlug)
  const nextArticle = articleIndex >= 0 ? articleEntries[(articleIndex + 1) % articleEntries.length] : null
  const accent = DIGEST_ACCENT

  if (!article) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>

        <section className="w-full px-4 md:px-8 mt-8">
          <div className="max-w-[980px] mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
            <h1 className="font-['DM_Sans',sans-serif] text-[30px] font-bold text-[#0F172A] mb-3">Article not found</h1>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
              This Skill Digest article is unavailable right now.
            </p>
            <button
              onClick={() => navigate('/insights/skill-digest')}
              className="inline-flex items-center rounded-lg bg-[#CF2C2E] px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold"
            >
              Back to Skill Digest
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F6F8FB', minHeight: '100vh', paddingBottom: '100px' }}>


      <style>{`
        .digest-hero {
          background: radial-gradient(1200px 400px at 10% 0%, var(--digest-accent-soft), transparent 55%),
                      radial-gradient(1000px 380px at 100% 10%, rgba(207, 44, 46, 0.10), transparent 60%),
                      linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid var(--digest-accent-border);
          border-radius: 28px;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
          padding: 28px;
          animation: digestFadeUp 0.55s ease-out both;
        }

        .digest-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 24px;
          margin-top: 22px;
        }

        .digest-main {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .digest-section-card {
          border-bottom: 1px solid #e8edf5;
          padding-bottom: 32px;
          animation: digestFadeUp 0.55s ease-out both;
        }

        .digest-section-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .digest-section-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .digest-section-index {
          height: 30px;
          min-width: 30px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .digest-section-card h2 {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.25;
          color: #0f172a;
        }

        .digest-section-card p {
          margin: 0 0 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: #334155;
        }

        .digest-section-card p:last-child {
          margin-bottom: 0;
        }

        .digest-aside {
          position: sticky;
          top: 18px;
          align-self: start;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .digest-chip-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .digest-chip {
          border: 1px solid #e8edf5;
          background: #ffffff;
          border-radius: 12px;
          padding: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #334155;
        }

        @keyframes digestFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .digest-layout {
            grid-template-columns: 1fr;
          }

          .digest-aside {
            position: static;
          }
        }
      `}</style>

      <section className="w-full px-4 md:px-8 mt-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-[14px] font-['DM_Sans',sans-serif] mb-3 flex items-center gap-2">
            <button className="text-[#0070AC] font-bold hover:underline" onClick={() => navigate('/insights/skill-digest')}>
              The Skill Digest
            </button>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#475569]">Article {article.number}</span>
          </div>

          <div
            className="digest-hero"
            style={{
              '--digest-accent-soft': `${accent}1F`,
              '--digest-accent-border': `${accent}33`,
            }}
          >

            <h1 className="mt-4 font-['League_Spartan',sans-serif] text-[34px] sm:text-[42px] leading-[1.08] font-bold text-[#0F172A]">
              {article.title}
            </h1>
            <p className="mt-3 font-['DM_Sans',sans-serif] text-[18px] leading-[1.5] font-semibold text-[#334155]">
              {article.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}1A`, color: accent }}
              >
                <Clock3 size={14} />
                {getReadTime(article)}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}1A`, color: accent }}
              >
                <Layers3 size={14} />
                {article.sections.length} sections
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}1A`, color: accent }}
              >
                <Flame size={14} />
                Future-ready insights
              </span>
            </div>
          </div>

          <div className="digest-layout">
            <div className="digest-main">
              {article.sections.map((section, index) => (
                <ArticleSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} index={index} accent={accent} />
              ))}
            </div>

            <aside className="digest-aside">
              <div className="border-l-2 pl-5 py-1" style={{ borderColor: accent }}>
                <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-4">Quick Highlights</h3>
                <div className="space-y-3">
                  {article.highlights.map((item) => (
                    <div key={item} className="font-['DM_Sans',sans-serif] text-[15px] font-medium text-[#475569]">{item}</div>
                  ))}
                </div>
              </div>

              <div className="border-l-2 pl-5 py-1" style={{ borderColor: accent }}>
                <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-4">Topic Map</h3>
                <div className="space-y-3">
                  {article.sections.map((section, index) => (
                    <div key={section.heading} className="flex items-start gap-3">
                      <span
                        className="h-6 w-6 shrink-0 rounded-full inline-flex items-center justify-center text-[11px] font-bold mt-0.5"
                        style={{ backgroundColor: `${accent}1A`, color: accent }}
                      >
                        {index + 1}
                      </span>
                      <p className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.5] text-[#334155]">{section.heading}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-2 p-4" style={{ borderColor: accent }}>
                <h3 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-3">Continue Reading</h3>
                <div className="flex flex-col gap-3">
                  {nextArticle && (
                    <button
                      onClick={() => navigate(`/insights/skill-digest/${nextArticle[0]}`)}
                      className="w-full sm:w-fit rounded-lg py-2.5 px-5 text-white font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: accent }}
                    >
                      <BookMarked size={16} />
                      Open Next Article
                    </button>
                  )}
                  <button
                    onClick={() => navigate('/insights/skill-digest')}
                    className="w-full sm:w-fit rounded-lg border py-2.5 px-5 font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    style={{ borderColor: accent, color: accent }}
                  >
                    <ArrowRight size={16} />
                    Back to Skill Digest
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillDigestArticlePage
