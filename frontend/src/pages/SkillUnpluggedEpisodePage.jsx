import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Insights from '../components/Insights'
import { skillUnpluggedEpisodes, skillUnpluggedEpisodesBySlug } from '../data/skillUnpluggedEpisodes'

const categoryContext = {
  'The Skill Unplugged Series': {
    whyNow:
      'This conversation series focuses on fundamental shifts in how talent is built, deployed, and scaled in an AI-native economy.',
    takeaways: [
      'Decode the AI adoption gap between strategy and execution.',
      'Understand how leadership expectations are changing in real time.',
      'Identify practical capability pivots for teams and individuals.',
    ],
    prompts: [
      'Which skills in your current role will become non-negotiable in 24 months?',
      'How do organizations design safe experimentation with autonomous systems?',
      'What does human differentiation look like when AI becomes ubiquitous?',
    ],
  },
  'Tech Roles & Transformation': {
    whyNow:
      'Technical careers are moving from isolated coding tasks to systems-level thinking, product judgment, and continuous orchestration with AI tools.',
    takeaways: [
      'Move beyond implementation and develop architecture-level impact.',
      'Use AI tools to accelerate quality, not just coding speed.',
      'Balance creativity, governance, and security in modern tech stacks.',
    ],
    prompts: [
      'What should be automated, and what should remain human-owned?',
      'How can teams upskill from task completion to systems design?',
      'How does cybersecurity evolve in AI-first development pipelines?',
    ],
  },
  'AI & Professions Disrupted': {
    whyNow:
      'AI is not only changing tools inside professions; it is redefining trust, accountability, and decision quality across domains.',
    takeaways: [
      'Profession-specific workflows are being rebuilt around AI copilots.',
      'Ethical design and explainability are becoming core requirements.',
      'Human oversight remains critical in high-stakes decisions.',
    ],
    prompts: [
      'Where should AI support decisions and where should it not?',
      'What competencies will define future-ready professionals?',
      'How do institutions embed governance without slowing innovation?',
    ],
  },
  'Societal Shifts & Ethics': {
    whyNow:
      'As AI scales into daily life, social equity, privacy, well-being, and policy frameworks become inseparable from innovation outcomes.',
    takeaways: [
      'Responsible AI must move from policy documents to operating practice.',
      'Inclusion and representation are strategic, not optional.',
      'Trust systems need transparency, accountability, and citizen voice.',
    ],
    prompts: [
      'How do we design AI systems that are fair across contexts?',
      'What guardrails are needed for public trust and adoption?',
      'How can regulation enable progress without suppressing experimentation?',
    ],
  },
  'Culture, Creativity & Human Impact': {
    whyNow:
      'Cultural industries and independent work are seeing rapid transformation as AI changes how value is created, distributed, and monetized.',
    takeaways: [
      'Human originality and narrative framing are increasingly valuable.',
      'AI literacy is becoming a universal career layer across sectors.',
      'Creative and gig ecosystems need new models of protection and growth.',
    ],
    prompts: [
      'How do creators protect authenticity in AI-assisted production?',
      'What does sustainable growth look like in AI-driven gig ecosystems?',
      'Which AI literacy benchmarks should institutions and employers adopt?',
    ],
  },
}

function SkillUnpluggedEpisodePage() {
  const { podcastSlug } = useParams()
  const navigate = useNavigate()

  const episode = skillUnpluggedEpisodesBySlug[podcastSlug]
  const episodeIndex = skillUnpluggedEpisodes.findIndex((item) => item.slug === podcastSlug)
  const nextEpisode = episodeIndex >= 0 ? skillUnpluggedEpisodes[(episodeIndex + 1) % skillUnpluggedEpisodes.length] : null
  const context = episode ? categoryContext[episode.category] : null

  if (!episode) {
    return (
      <div style={{ backgroundColor: '#F8F9FA', minHeight: '100vh', paddingBottom: '100px' }}>
        <Insights showHero={true} showContent={false} />
        <section className="w-full px-4 md:px-8 mt-8">
          <div className="max-w-[980px] mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
            <h1 className="font-['DM_Sans',sans-serif] text-[30px] font-bold text-[#0F172A] mb-3">Episode not found</h1>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
              This Skill Unplugged episode is unavailable right now.
            </p>
            <button
              onClick={() => navigate('/insights/skill-unplugged-podcast')}
              className="inline-flex items-center rounded-lg bg-[#CF2C2E] px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold"
            >
              Back to Podcast Series
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
              onClick={() => navigate('/insights/skill-unplugged-podcast')}
              className="text-[#0070AC] font-bold hover:underline"
            >
              Skill Unplugged Podcast
            </button>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#475569]">{episode.title}</span>
          </div>

          <div className="rounded-[24px] border border-[#E6EAF2] bg-gradient-to-br from-white via-[#F7FAFF] to-[#FFF8F2] p-6 sm:p-8 lg:p-10 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
            <span className="inline-flex items-center rounded-full bg-[#0F172A] px-4 py-1.5 text-[11px] font-['DM_Sans',sans-serif] font-bold tracking-[0.12em] text-white uppercase">
              The Skill Unplugged Series
            </span>
            <p className="mt-4 font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] uppercase tracking-[0.1em] text-[#CF2C2E] font-bold">
              {episode.category}
            </p>
            <h1 className="mt-4 font-['League_Spartan',sans-serif] text-[36px] sm:text-[44px] leading-[1.05] font-bold text-[#0F172A]">
              {episode.title}
            </h1>
            <h2 className="mt-3 font-['DM_Sans',sans-serif] text-[18px] sm:text-[22px] leading-[1.4] font-semibold text-[#334155]">
              {episode.subtitle}
            </h2>
            <p className="mt-6 max-w-[980px] font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#475569]">
              {context.whyNow}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
            <div className="space-y-5">
              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Episode Snapshot</h3>
                <p className="font-['DM_Sans',sans-serif] text-[16px] leading-[1.8] text-[#334155]">
                  {episode.desc} This episode breaks down the operating realities, mindset shifts, and decision frameworks professionals need to stay relevant in an AI-shaped world.
                </p>
              </article>

              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Key Takeaways</h3>
                <ul className="space-y-3 pl-0 list-none">
                  {context.takeaways.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#334155]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#CF2C2E] flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-[#E7EAF0] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <h3 className="font-['DM_Sans',sans-serif] text-[24px] leading-[1.25] font-bold text-[#0F172A] mb-4">Discussion Prompts</h3>
                <ul className="space-y-3 pl-0 list-none">
                  {context.prompts.map((prompt) => (
                    <li key={prompt} className="flex items-start gap-3 font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#334155]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-[#E7EAF0] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <p className="font-['DM_Sans',sans-serif] text-[13px] uppercase tracking-[0.08em] text-[#64748B] font-bold">Series Track</p>
                <p className="mt-2 font-['DM_Sans',sans-serif] text-[18px] leading-[1.45] font-semibold text-[#0F172A]">{episode.category}</p>
                <p className="mt-2 font-['DM_Sans',sans-serif] text-[15px] leading-[1.65] text-[#475569]">
                  Episode {episode.id} of {skillUnpluggedEpisodes.length}
                </p>
              </div>

              {nextEpisode && (
                <button
                  onClick={() => navigate(`/insights/skill-unplugged-podcast/${nextEpisode.slug}`)}
                  className="w-full rounded-2xl border border-[#F1D6D7] bg-[#FFF6F6] p-5 text-left hover:border-[#CF2C2E] transition-colors"
                >
                  <p className="font-['DM_Sans',sans-serif] text-[12px] uppercase tracking-[0.08em] text-[#CF2C2E] font-bold">Next Episode</p>
                  <p className="mt-2 font-['DM_Sans',sans-serif] text-[18px] leading-[1.4] font-semibold text-[#0F172A]">{nextEpisode.title}</p>
                  <p className="mt-2 font-['DM_Sans',sans-serif] text-[14px] leading-[1.6] text-[#475569]">{nextEpisode.subtitle}</p>
                </button>
              )}

              <button
                onClick={() => navigate('/insights/skill-unplugged-podcast')}
                className="w-full rounded-xl bg-[#CF2C2E] px-4 py-3 text-white font-['DM_Sans',sans-serif] font-semibold"
              >
                Back to All Episodes
              </button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillUnpluggedEpisodePage
