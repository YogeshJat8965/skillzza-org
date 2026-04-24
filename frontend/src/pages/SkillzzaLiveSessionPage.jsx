import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Activity, CalendarClock, Radio, Sparkles } from 'lucide-react'
import Insights from '../components/Insights'
import { skillzzaLiveSessions, skillzzaLiveSessionsBySlug } from '../data/skillzzaLiveSessions'

const liveCategoryContext = {
  'AI Fundamentals & Hands-on Skills': {
    whyNow:
      'AI adoption succeeds when teams move from passive awareness to practical building capability. This track focuses on real execution skills across tools, prompting, data workflows, and implementation patterns.',
    takeaways: [
      'Build confidence from no-code exploration to pro-code implementation.',
      'Use repeatable prompt and model experimentation frameworks.',
      'Convert foundational concepts into portfolio-ready hands-on output.',
    ],
    exercises: [
      'Identify one workflow you can automate with AI in the next week.',
      'Design a small experiment to compare two prompting strategies.',
      'Define a mini build roadmap from prototype to deployable proof of concept.',
    ],
  },
  'Ethics, Governance & Responsible AI': {
    whyNow:
      'Responsible AI is no longer optional. Organizations now require practical methods to handle bias, accountability, explainability, and high-stakes decision quality at scale.',
    takeaways: [
      'Apply ethical principles to real operational decisions.',
      'Set governance checkpoints without slowing innovation velocity.',
      'Create AI review mechanisms that improve trust and adoption.',
    ],
    exercises: [
      'Map one high-risk AI use case and define mitigation controls.',
      'Draft a human-in-the-loop protocol for critical decisions.',
      'Design a transparency checklist for internal AI deployments.',
    ],
  },
  'AI Across Industries': {
    whyNow:
      'Industry leaders are moving from pilots to integrated AI operating models. Understanding applied patterns across sectors helps teams scale faster with fewer costly detours.',
    takeaways: [
      'Recognize what implementation patterns transfer across industries.',
      'Align AI use cases with measurable business outcomes.',
      'Balance domain expertise with adaptable AI capability design.',
    ],
    exercises: [
      'Pick a domain workflow and map where AI adds the highest leverage.',
      'Define one KPI to evaluate AI-assisted decision quality.',
      'Compare two industry case studies and identify reusable architecture choices.',
    ],
  },
  'Immersive & Experiential Learning': {
    whyNow:
      'Immersive learning accelerates skill transfer by forcing real decision-making under realistic constraints. Teams learn faster when they practice, not just consume content.',
    takeaways: [
      'Strengthen workplace readiness through simulation-led practice.',
      'Translate case study insights into concrete implementation playbooks.',
      'Develop collaboration habits for cross-functional AI execution.',
    ],
    exercises: [
      'Run a role-play session around AI adoption resistance in teams.',
      'Create a lightweight post-mortem template for AI pilot outcomes.',
      'Prototype a human-centric interface for one AI-supported workflow.',
    ],
  },
  'Future-Oriented & Cutting-Edge Topics': {
    whyNow:
      'AI capability cycles are compressing rapidly. Teams need a continuous learning posture to navigate new tools, new interfaces, and new autonomous paradigms.',
    takeaways: [
      'Track emerging AI patterns before they become mainstream mandates.',
      'Use generative and agentic systems with strategic intent.',
      'Build future-ready literacy across productivity, creativity, and sustainability contexts.',
    ],
    exercises: [
      'Evaluate one new AI tool using a practical adoption scorecard.',
      'Map where agentic systems can reduce coordination overhead in your team.',
      'Design a 30-day upskilling sprint for future-facing AI capabilities.',
    ],
  },
}

const LIVE_ACCENT = '#CF2C2E'

function durationFromId(id) {
  return `${40 + (id % 4) * 10} min`
}

function SkillzzaLiveSessionPage() {
  const { liveSlug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  const session = skillzzaLiveSessionsBySlug[liveSlug]
  const sessionIndex = skillzzaLiveSessions.findIndex((item) => item.slug === liveSlug)
  const nextSession = sessionIndex >= 0 ? skillzzaLiveSessions[(sessionIndex + 1) % skillzzaLiveSessions.length] : null
  const context = session ? liveCategoryContext[session.category] : null
  const accent = LIVE_ACCENT

  if (!session) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>
        <Insights showHero={true} showContent={false} />
        <section className="w-full px-4 md:px-8 mt-8">
          <div className="max-w-[980px] mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
            <h1 className="font-['DM_Sans',sans-serif] text-[30px] font-bold text-[#0F172A] mb-3">Session not found</h1>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
              This Skillzza Live session is unavailable right now.
            </p>
            <button
              onClick={() => navigate('/insights/skillzza-live')}
              className="inline-flex items-center rounded-lg bg-[#CF2C2E] px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold"
            >
              Back to Skillzza Live
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#F6F8FB', minHeight: '100vh', paddingBottom: '100px' }}>
      <Insights showHero={true} showContent={false} />

      <section className="w-full px-4 md:px-8 mt-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-4 flex items-center gap-2 text-[14px] font-['DM_Sans',sans-serif]">
            <button
              onClick={() => navigate('/insights/skillzza-live')}
              className="text-[#0070AC] font-bold hover:underline"
            >
              Skillzza Live
            </button>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#475569]">{session.title}</span>
          </div>

          <div
            className="rounded-[24px] border p-6 sm:p-8 lg:p-10 shadow-[0_14px_30px_rgba(15,23,42,0.06)] relative overflow-hidden"
            style={{
              borderColor: `${accent}40`,
              background: `radial-gradient(900px 260px at 0% 0%, ${accent}1F 0%, transparent 58%), linear-gradient(135deg, #ffffff 0%, #f4faff 55%, #f8fcff 100%)`,
            }}
          >
            <div className="absolute right-5 top-5 h-[120px] w-[120px] rounded-full blur-2xl" style={{ backgroundColor: `${accent}22` }} />

            <span className="inline-flex items-center rounded-full bg-[#0F172A] px-4 py-1.5 text-[11px] font-['DM_Sans',sans-serif] font-bold tracking-[0.12em] text-white uppercase">
              Skillzza Live
            </span>
            <p className="mt-4 font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] uppercase tracking-[0.1em] font-bold" style={{ color: accent }}>
              {session.category}
            </p>
            <h1 className="mt-4 font-['League_Spartan',sans-serif] text-[36px] sm:text-[44px] leading-[1.05] font-bold text-[#0F172A]">
              {session.title}
            </h1>
            <h2 className="mt-3 font-['DM_Sans',sans-serif] text-[18px] sm:text-[22px] leading-[1.4] font-semibold text-[#334155]">
              {session.subtitle}
            </h2>
            <p className="mt-6 max-w-[980px] font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#475569]">
              {context.whyNow}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                <CalendarClock size={14} />
                {durationFromId(session.id)}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                <Radio size={14} />
                Session {session.id}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                <Sparkles size={14} />
                Live + Interactive
              </span>
            </div>
          </div>

          <div className="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
            <div className="space-y-12">
              <article className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full ring-4 ring-opacity-20" style={{ backgroundColor: accent, '--tw-ring-color': accent }} />
                  <h3 className="font-['League_Spartan',sans-serif] text-[26px] md:text-[30px] leading-tight font-bold text-[#0F172A]">Session Focus</h3>
                </div>
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Session Focus</h3>
                <p className="font-['DM_Sans',sans-serif] text-[16px] leading-[1.8] text-[#334155]">
                  {session.desc} This live format is designed for active participation, practical translation, and immediate workplace application of AI skills.
                </p>

                <div className="mt-6 flex items-end gap-1.5" aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span
                      key={`pulse-${index}`}
                      className="w-2 rounded-full"
                      style={{
                        height: `${8 + ((index * 9) % 26)}px`,
                        backgroundColor: `${accent}${index % 2 === 0 ? '66' : 'A8'}`,
                      }}
                    />
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Learning Outcomes</h3>
                <ul className="space-y-3 pl-0 list-none">
                  {context.takeaways.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#334155]">
                      <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Hands-on Exercises</h3>
                <ul className="space-y-3 pl-0 list-none">
                  {context.exercises.map((exercise) => (
                    <li key={exercise} className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#334155]">
                      <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                      <span>{exercise}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className="space-y-4">
              <div
                className="rounded-2xl border bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                style={{ borderColor: `${accent}33` }}
              >
                <p className="font-['DM_Sans',sans-serif] text-[13px] uppercase tracking-[0.08em] text-[#64748B] font-bold">Live Track</p>
                <p className="mt-2 font-['DM_Sans',sans-serif] text-[18px] leading-[1.45] font-semibold text-[#0F172A]">{session.category}</p>
                <p className="mt-2 font-['DM_Sans',sans-serif] text-[15px] leading-[1.65] text-[#475569]">
                  Session {session.id} of {skillzzaLiveSessions.length}
                </p>

                <div className="flex mt-4">
                  <button
                    className="w-full sm:w-fit rounded-xl px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: accent }}
                  >
                    <Activity size={18} />
                    Join Live Track
                  </button>
                </div>
              </div>

              {nextSession && (
                <button
                  onClick={() => navigate(`/insights/skillzza-live/${nextSession.slug}`)}
                  className="w-full rounded-2xl border p-5 text-left transition-colors"
                  style={{ borderColor: `${accent}33`, backgroundColor: `${accent}11` }}
                >
                  <p className="font-['DM_Sans',sans-serif] text-[12px] uppercase tracking-[0.08em] font-bold" style={{ color: accent }}>Next Session</p>
                  <p className="mt-2 font-['DM_Sans',sans-serif] text-[18px] leading-[1.4] font-semibold text-[#0F172A]">{nextSession.title}</p>
                  <p className="mt-2 font-['DM_Sans',sans-serif] text-[14px] leading-[1.6] text-[#475569]">{nextSession.subtitle}</p>
                </button>
              )}

              <div className="flex">
                <button
                  onClick={() => navigate('/insights/skillzza-live')}
                  className="w-full sm:w-fit rounded-xl px-5 py-3 text-white font-['DM_Sans',sans-serif] font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: accent }}
                >
                  Back to All Live Sessions
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillzzaLiveSessionPage
