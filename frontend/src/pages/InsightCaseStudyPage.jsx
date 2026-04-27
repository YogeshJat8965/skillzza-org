import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, BrainCircuit, Sparkles } from 'lucide-react'
import Insights from '../components/Insights'

const caseStudyContent = {
  'ai-powered-reskilling-initiatives': {
    category: 'AI & The Future of Work',
    categorySubtitle: 'Exploring how technology is revolutionizing skill development',
    caseLabel: 'Case Study 1',
    title: 'AI-Powered Reskilling Initiatives',
    subtitle: 'Transforming Workforce Agility Through Intelligent Skill Gap Analysis',
    intro:
      "In today\'s rapidly evolving business landscape, organizations face an unprecedented challenge: the skills their workforce possessed yesterday may not be sufficient for tomorrow\'s demands. Traditional approaches to identifying skill gaps often rely on annual reviews, manager assessments, and broad industry reports-methods that are slow, subjective, and frequently outdated by the time action is taken.",
    aiSolution:
      'AI-powered intelligence enables organizations to identify exact capability gaps, forecast emerging needs, and design precision reskilling programs that are both faster and more effective than conventional workforce planning models.',
    implementation:
      'TechCorp Global, a multinational technology services company with 50,000 employees, faced a critical challenge when cloud computing and AI technologies began disrupting their traditional IT services model. Rather than resort to mass layoffs and external hiring, they implemented an AI-powered reskilling initiative that became an industry benchmark.',
    architecture: [
      {
        title: 'Skills Intelligence Engine',
        points: [
          'Analyzes job descriptions, project requirements, and industry trends.',
          'Maps current employee skills through work history, certifications, and performance data.',
          'Identifies emerging skill demands through real-time market analysis.',
        ],
      },
      {
        title: 'Gap Detection Algorithm',
        points: [
          'Compares individual skill profiles against future role requirements.',
          'Prioritizes skill gaps based on business impact and urgency.',
          'Segments employees into reskilling cohorts based on learning capacity and career aspirations.',
        ],
      },
      {
        title: 'Dynamic Learning Recommendation System',
        points: [
          'Suggests targeted training programs tailored to individual learning styles.',
          'Adjusts recommendations based on progress and changing business needs.',
          'Integrates multiple learning formats: online courses, mentorship, and hands-on projects.',
        ],
      },
    ],
    quantitativeOutcomes: [
      '85% of identified employees successfully transitioned to new roles within 18 months.',
      '$12.3 million saved in recruitment costs.',
      '40% reduction in time-to-competency for new skills.',
      '78% employee satisfaction rate with reskilling programs.',
    ],
    qualitativeBenefits: [
      'Enhanced employee loyalty and engagement.',
      'Creation of a learning-oriented culture.',
      'Improved organizational agility and adaptability.',
      'Stronger employer brand in the competitive tech market.',
    ],
    keySuccessFactors: [
      'Data-Driven Precision: AI eliminated guesswork, providing specific and actionable insights about skill requirements.',
      'Personalization at Scale: Each employee received a customized reskilling pathway.',
      'Continuous Adaptation: The system evolved with changing business needs and individual progress.',
      'Leadership Commitment: C-suite support ensured adequate resources and organizational buy-in.',
    ],
    highlights: [
      { label: 'Transition Success', value: '85%' },
      { label: 'Cost Savings', value: '$12.3M' },
      { label: 'Faster Competency', value: '-40%' },
      { label: 'Program Satisfaction', value: '78%' },
    ],
  },
  'ai-in-personalized-learning-paths': {
    category: 'AI & The Future of Work',
    categorySubtitle: 'Exploring how technology is revolutionizing skill development',
    caseLabel: 'Case Study 2',
    title: 'AI in Personalized Learning Paths',
    subtitle: 'Creating Custom Learning Journeys for Individual Career Growth',
    intro:
      'Traditional one-size-fits-all training programs are giving way to hyper-personalized learning experiences powered by AI. These systems recognize that every learner has unique strengths, preferences, career goals, and learning patterns-and adapt accordingly.',
    implementation:
      'FinanceForward, a leading financial services firm, revolutionized their employee development approach by implementing an AI-driven personalized learning platform that serves 25,000 employees across 40 countries.',
    personalizationEngine: [
      {
        title: 'Individual Learning Profile Creation',
        points: [
          'Analyzes learning history, preferences, and performance patterns.',
          'Assesses current skill levels through adaptive testing.',
          'Maps career aspirations and potential growth trajectories.',
          'Considers work schedule, learning time availability, and preferred formats.',
        ],
      },
      {
        title: 'Dynamic Content Curation',
        points: [
          'Selects from a library of 10,000+ learning resources.',
          'Adjusts content difficulty based on comprehension rates.',
          'Incorporates media types such as video, interactive simulations, and peer learning.',
          'Prioritizes high-impact skills aligned with business objectives.',
        ],
      },
      {
        title: 'Adaptive Learning Pathways',
        points: [
          'Creates unique learning sequences for each individual.',
          'Adjusts pace based on progress and engagement metrics.',
          'Introduces reinforcement activities to ensure retention.',
          'Suggests practical application opportunities and projects.',
        ],
      },
    ],
    implementationJourney: [
      {
        phase: 'Phase 1: Foundation Building (Months 1-3)',
        points: [
          'Deployed AI assessment tools to baseline current capabilities.',
          'Integrated existing learning management systems.',
          'Trained managers on coaching within the AI-enhanced environment.',
        ],
      },
      {
        phase: 'Phase 2: Personalization Launch (Months 4-8)',
        points: [
          'Rolled out personalized learning paths to pilot groups.',
          'Refined algorithms based on early feedback and performance data.',
          'Established peer mentoring networks facilitated by AI matching.',
        ],
      },
      {
        phase: 'Phase 3: Scale and Optimization (Months 9-12)',
        points: [
          'Extended platform to the entire organization.',
          'Integrated career planning tools with learning recommendations.',
          'Implemented predictive analytics for future skill needs.',
        ],
      },
    ],
    individualImpact: [
      '92% of employees reported higher engagement with learning content.',
      '67% improvement in skill acquisition speed.',
      '58% increase in internal mobility and promotions.',
      '89% satisfaction rate with personalized career guidance.',
    ],
    organizationalBenefits: [
      '45% reduction in external training costs.',
      '35% improvement in employee retention rates.',
      '52% increase in internal role fulfillment.',
      'Enhanced succession planning accuracy.',
    ],
    personalizationAdvantage: {
      microLearning:
        'The AI system breaks down complex skills into micro-learning modules, allowing busy professionals to learn in 10-15 minute segments that fit their schedules. Each module is sequenced based on prerequisite knowledge and optimal learning progression.',
      multiModal: [
        'Visual learners receive infographics and video content.',
        'Kinesthetic learners get hands-on simulations and projects.',
        'Auditory learners access podcasts and discussion forums.',
        'Reading-focused learners get detailed articles and case studies.',
      ],
      realTime:
        'The system continuously monitors engagement, comprehension, and application, making real-time adjustments to maintain optimal challenge levels and prevent learner fatigue or boredom.',
    },
    futureTrends: [
      {
        title: 'Predictive Skill Forecasting',
        description:
          'AI systems will predict skill demands 2-3 years in advance, enabling organizations to proactively build capabilities before market pressure intensifies.',
      },
      {
        title: 'Immersive Learning Experiences',
        description:
          'VR and AR integration will enable safe hands-on practice, while AI-powered virtual mentors will provide real-time guidance and feedback.',
      },
      {
        title: 'Collaborative Intelligence Networks',
        description:
          'AI will facilitate peer-to-peer learning, knowledge exchange, and cross-organizational skill development partnerships.',
      },
      {
        title: 'Emotional Intelligence Integration',
        description:
          'Future systems will incorporate emotional and social skill development alongside technical capabilities for stronger human-AI collaboration.',
      },
    ],
    implementationRoadmap: [
      {
        phase: 'Phase 1: Assessment and Strategy (Months 1-2)',
        points: [
          'Evaluate current learning infrastructure and data availability.',
          'Define strategic learning objectives aligned with business goals.',
          'Select appropriate AI learning platforms and technologies.',
        ],
      },
      {
        phase: 'Phase 2: Pilot and Refinement (Months 3-6)',
        points: [
          'Launch with select employee groups.',
          'Gather feedback and performance metrics.',
          'Refine algorithms and content based on initial results.',
        ],
      },
      {
        phase: 'Phase 3: Scale and Integration (Months 7-12)',
        points: [
          'Roll out platform organization-wide.',
          'Integrate with existing HR and performance management systems.',
          'Establish continuous improvement processes.',
        ],
      },
      {
        phase: 'Phase 4: Advanced Optimization (Year 2+)',
        points: [
          'Implement predictive capabilities and advanced personalization.',
          'Explore partnerships for cross-organizational learning.',
          'Develop proprietary learning content and methodologies.',
        ],
      },
    ],
    keyTakeaways: [
      'AI enables precision at scale: organizations can identify exact skill gaps and create targeted interventions for thousands of employees simultaneously.',
      'Personalization drives engagement: when learning paths align with individual goals and learning styles, completion rates and skill acquisition improve dramatically.',
      'Continuous adaptation is crucial: the most successful AI learning systems evolve constantly, adjusting to changing business needs and individual progress.',
      'Data quality determines success: rich and accurate data about skills, performance, and learning preferences is essential for effective AI recommendations.',
      'Human-AI collaboration matters: the most effective systems combine AI intelligence with human coaching and mentorship.',
      'ROI extends beyond cost savings: long-term value includes organizational agility, internal mobility, and employee satisfaction.',
      'AI is not just a technology upgrade-it is a strategic lever for developing and future-proofing talent.',
    ],
    closing:
      'This case study demonstrates how forward-thinking organizations are using AI not just as a technology enhancement, but as a strategic advantage in developing their most valuable asset: their people.',
    highlights: [
      { label: 'Learner Engagement', value: '92%' },
      { label: 'Skill Speed Gain', value: '+67%' },
      { label: 'Internal Mobility', value: '+58%' },
      { label: 'Career Guidance Satisfaction', value: '89%' },
    ],
  },
}

const SectionCard = ({ title, children, accent = '#CF2C2E' }) => (
  <article className="border-b border-gray-100 pb-10 last:border-0 last:pb-0">
    <div className="flex items-center gap-4 mb-6">
      <span className="h-1.5 w-1.5 rounded-full ring-4 ring-opacity-20" style={{ backgroundColor: accent, '--tw-ring-color': accent }} />
      <h3 className="font-['League_Spartan',sans-serif] text-[26px] md:text-[30px] leading-tight font-bold text-[#0F172A]">{title}</h3>
    </div>
    <div className="font-['DM_Sans',sans-serif] text-[16px] md:text-[17px] leading-[1.85] text-[#334155] space-y-5">
      {children}
    </div>
  </article>
)

const BulletList = ({ items, dotColor = '#CF2C2E' }) => (
  <ul className="space-y-2.5 pl-0 list-none">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

function InsightCaseStudyPage() {
  const { caseSlug } = useParams()
  const navigate = useNavigate()
  const data = caseStudyContent[caseSlug]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  if (!data) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>

        <section className="w-full px-4 md:px-8 mt-8">
          <div className="max-w-[1000px] mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
            <h1 className="font-['DM_Sans',sans-serif] text-[30px] font-bold text-[#0F172A] mb-3">Case study not found</h1>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
              The requested Skill Blueprint article is not available.
            </p>
            <button
              onClick={() => navigate('/insights/skill-blueprint')}
              className="inline-flex items-center rounded-lg bg-[#CF2C2E] px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold"
            >
              Back to Skill Blueprint
            </button>
          </div>
        </section>
      </div>
    )
  }

  const isFirstCase = caseSlug === 'ai-powered-reskilling-initiatives'
  const accent = '#CF2C2E'
  const softAccent = '#FFF3F1'
  const strategicSignals = isFirstCase ? data.keySuccessFactors.slice(0, 3) : data.keyTakeaways.slice(0, 3)

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>


      <section className="w-full px-4 md:px-8 mt-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-4 flex items-center gap-2 text-[14px] font-['DM_Sans',sans-serif]">
            <button
              onClick={() => navigate('/insights/skill-blueprint')}
              className="text-[#0070AC] font-bold hover:underline"
            >
              Skill Blueprint
            </button>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#475569]">{data.title}</span>
          </div>

          <div
            className="rounded-[24px] border p-6 sm:p-8 lg:p-10 shadow-[0_14px_30px_rgba(15,23,42,0.06)] relative overflow-hidden"
            style={{
              borderColor: `${accent}33`,
              background: `radial-gradient(800px 240px at 0% 0%, ${accent}1A 0%, transparent 58%), linear-gradient(135deg, #ffffff 0%, #fffaf7 56%, #f8faff 100%)`,
            }}
          >
            <div className="absolute right-6 top-6 h-[110px] w-[110px] rounded-full blur-2xl" style={{ backgroundColor: `${accent}22` }} />



            <p className="mt-4 font-['DM_Sans',sans-serif] text-[14px] sm:text-[15px] uppercase tracking-[0.1em] font-bold" style={{ color: accent }}>
              {data.category}
            </p>
            <p className="mt-2 font-['DM_Sans',sans-serif] text-[15px] text-[#475569]">
              {data.categorySubtitle}
            </p>
            <h1 className="mt-4 font-['League_Spartan',sans-serif] text-[36px] sm:text-[44px] leading-[1.05] font-bold text-[#0F172A]">
              {data.title}
            </h1>
            <h2 className="mt-3 font-['DM_Sans',sans-serif] text-[18px] sm:text-[22px] leading-[1.4] font-semibold text-[#334155]">
              {data.subtitle}
            </h2>
            <p className="mt-6 max-w-[1000px] font-['DM_Sans',sans-serif] text-[16px] leading-[1.75] text-[#475569]">
              {data.intro}
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.highlights.map((item) => (
                <div key={item.label} className="rounded-xl border p-3" style={{ borderColor: `${accent}33`, backgroundColor: softAccent }}>
                  <p className="font-['DM_Sans',sans-serif] text-[20px] font-bold leading-none" style={{ color: accent }}>{item.value}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#475569] mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-8 mt-8 mb-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-12">
            {isFirstCase ? (
              <>
                <SectionCard title="The Challenge" accent={accent}>
                  <p>{data.intro}</p>
                </SectionCard>

                <SectionCard title="The AI Solution: Precision-Driven Reskilling" accent={accent}>
                  <p>{data.aiSolution}</p>
                </SectionCard>

                <SectionCard title="Real-World Implementation: TechCorp Global's Digital Transformation" accent={accent}>
                  <p>{data.implementation}</p>
                </SectionCard>

                <SectionCard title="The AI System Architecture" accent={accent}>
                  <div className="space-y-5">
                    {data.architecture.map((item) => (
                      <div key={item.title} className="mb-6 last:mb-0">
                        <h4 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-3">{item.title}</h4>
                        <BulletList items={item.points} dotColor={accent} />
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Results and Impact" accent={accent}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-2">Quantitative Outcomes</h4>
                      <BulletList items={data.quantitativeOutcomes} dotColor={accent} />
                    </div>
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-2">Qualitative Benefits</h4>
                      <BulletList items={data.qualitativeBenefits} dotColor={accent} />
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="Key Success Factors" accent={accent}>
                  <BulletList items={data.keySuccessFactors} dotColor={accent} />
                </SectionCard>

                <div className="mt-8 border-t border-gray-100 pt-8">
                  <h3 className="font-['DM_Sans',sans-serif] text-[22px] font-bold text-[#0F172A] mb-6">Quick Snapshot</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.highlights.map((item) => (
                      <div key={item.label}>
                        <p className="font-['DM_Sans',sans-serif] text-[28px] font-bold leading-none mb-2" style={{ color: accent }}>{item.value}</p>
                        <p className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[#475569]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <SectionCard title="The Revolution in Personal Development" accent={accent}>
                  <p>{data.intro}</p>
                </SectionCard>

                <SectionCard title="Case Study: FinanceForward's Career Development Platform" accent={accent}>
                  <p>{data.implementation}</p>
                </SectionCard>

                <SectionCard title="The Personalization Engine" accent={accent}>
                  <div className="space-y-5">
                    {data.personalizationEngine.map((item) => (
                      <div key={item.title} className="mb-6 last:mb-0">
                        <h4 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-3">{item.title}</h4>
                        <BulletList items={item.points} dotColor={accent} />
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Implementation Journey" accent={accent}>
                  <div className="space-y-4">
                    {data.implementationJourney.map((phase) => (
                      <div key={phase.phase} className="mb-6 last:mb-0 border-l-2 pl-5" style={{ borderColor: accent }}>
                        <h4 className="font-['DM_Sans',sans-serif] text-[18px] font-bold mb-3" style={{ color: accent }}>{phase.phase}</h4>
                        <BulletList items={phase.points} dotColor={accent} />
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Transformative Results" accent={accent}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-2">Individual Impact</h4>
                      <BulletList items={data.individualImpact} dotColor={accent} />
                    </div>
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-2">Organizational Benefits</h4>
                      <BulletList items={data.organizationalBenefits} dotColor={accent} />
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="The Personalization Advantage" accent={accent}>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-1">Micro-Learning Adaptation</h4>
                      <p>{data.personalizationAdvantage.microLearning}</p>
                    </div>
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-1">Multi-Modal Learning Integration</h4>
                      <BulletList items={data.personalizationAdvantage.multiModal} dotColor={accent} />
                    </div>
                    <div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#0F172A] mb-1">Real-Time Adjustment</h4>
                      <p>{data.personalizationAdvantage.realTime}</p>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard title="The Future Landscape: What's Next?" accent={accent}>
                  <div className="space-y-4">
                    {data.futureTrends.map((trend) => (
                      <div key={trend.title} className="mb-6 last:mb-0">
                        <h4 className="font-['DM_Sans',sans-serif] text-[18px] font-bold text-[#0F172A] mb-2">{trend.title}</h4>
                        <p>{trend.description}</p>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Implementation Roadmap for Organizations" accent={accent}>
                  <div className="space-y-4">
                    {data.implementationRoadmap.map((phase) => (
                      <div key={phase.phase} className="mb-6 last:mb-0 border-l-2 pl-5" style={{ borderColor: accent }}>
                        <h4 className="font-['DM_Sans',sans-serif] text-[18px] font-bold mb-3" style={{ color: accent }}>{phase.phase}</h4>
                        <BulletList items={phase.points} dotColor={accent} />
                      </div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Key Takeaways for Skillzza" accent={accent}>
                  <BulletList items={data.keyTakeaways} dotColor={accent} />
                  <p className="mt-5">{data.closing}</p>
                </SectionCard>

                <div className="mt-8 border-t border-gray-100 pt-8">
                  <h3 className="font-['DM_Sans',sans-serif] text-[22px] font-bold text-[#0F172A] mb-6">Quick Snapshot</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.highlights.map((item) => (
                      <div key={item.label}>
                        <p className="font-['DM_Sans',sans-serif] text-[28px] font-bold leading-none mb-2" style={{ color: accent }}>{item.value}</p>
                        <p className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[#475569]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <article className="rounded-2xl border p-6" style={{ borderColor: `${accent}33`, backgroundColor: softAccent }}>
              <p className="font-['DM_Sans',sans-serif] text-[13px] uppercase tracking-[0.08em] font-bold" style={{ color: accent }}>AI Readiness Signal</p>
              <ul className="mt-3 space-y-3 pl-0 list-none">
                {strategicSignals.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1" style={{ color: accent }}><BrainCircuit size={15} /></span>
                    <span className="font-['DM_Sans',sans-serif] text-[14px] leading-[1.55] text-[#334155]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm mt-8">
              <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#475569] mb-4">
                Explore the other Skill Blueprint case study for a complete AI-powered workforce transformation perspective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
                <button
                  onClick={() =>
                    navigate(
                      caseSlug === 'ai-powered-reskilling-initiatives'
                        ? '/insights/skill-blueprint/ai-in-personalized-learning-paths'
                        : '/insights/skill-blueprint/ai-powered-reskilling-initiatives'
                    )
                  }
                  className="rounded-lg py-2.5 px-6 text-white font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: accent }}
                >
                  <Sparkles size={16} />
                  Open Other Case Study
                </button>
                <button
                  onClick={() => navigate('/insights/skill-blueprint')}
                  className="rounded-lg border py-2.5 px-6 font-['DM_Sans',sans-serif] font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: accent, color: accent }}
                >
                  <ArrowRight size={16} />
                  Back to Skill Blueprint
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InsightCaseStudyPage
