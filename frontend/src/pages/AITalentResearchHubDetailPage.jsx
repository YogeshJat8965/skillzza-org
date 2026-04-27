import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Insights from '../components/Insights';


const ExecutiveSummaryContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Executive Summary</h2>
 <p className="mb-4">The AI talent market in 2025 represents one of the most dynamic and high-stakes sectors in technology recruitment. AI professionals command a median salary of $160,000 annually, with specialized skills adding 25-45% premiums on top of base compensation, while professionals with AI skills earn 21% more than their peers in similar roles without those skills.</p>
 <p className="mb-6">The landscape is characterized by unprecedented demand, significant wage premiums, and a clear bifurcation between entry-level opportunities and senior expert positions. Organizations are grappling with talent scarcity while professionals are navigating rapidly evolving skill requirements and career pathways.</p>
 
 <h3 className="text-xl font-bold mb-3 font-['League_Spartan',sans-serif] text-gray-900">Key Findings at a Glance:</h3>
 <ul className="list-disc pl-6 mb-6 space-y-2">
 <li><strong>Market Premium:</strong> AI professionals still command a 9–13% cash premium over Data Scientists.</li>
 <li><strong>Engineering Premium:</strong> AI engineers are commanding a 5% salary premium and a 10-20% equity premium over other engineering roles.</li>
 <li><strong>Geographic Arbitrage:</strong> Geographic arbitrage can reduce AI talent costs by 20-90% when hiring from emerging markets while maintaining quality standards.</li>
 <li><strong>Top-Tier Compensation:</strong> Senior AI researchers at Big Tech see total compensation in the range of $500,000 to $2,000,000 annually due to salary plus stock and bonuses.</li>
 </ul>
 </div>
);

const GlobalCompensationContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Global Compensation Landscape</h2>
 <p className="mb-4">The AI talent market in 2025 exhibits significant stratification across experience levels, specializations, and geographic regions.</p>
 
 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Base Salary Ranges by Experience Level</h3>
 <div className="overflow-x-auto mb-6">
 <table className="min-w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-gray-300">
 <th className="p-3">Experience Level</th>
 <th className="p-3">Median Base Salary (USD)</th>
 <th className="p-3">Range</th>
 <th className="p-3">Geographic Variation</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-gray-200">
 <td className="p-3">Entry Level (0-2 years)</td>
 <td className="p-3">$95,000 - $130,000</td>
 <td className="p-3">$75K - $180K</td>
 <td className="p-3">40-60% lower in emerging markets</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3">Mid-Level (3-5 years)</td>
 <td className="p-3">$140,000 - $220,000</td>
 <td className="p-3">$110K - $280K</td>
 <td className="p-3">30-50% geographic differential</td>
 </tr>
 <tr className="border-b border-gray-200">
 <td className="p-3">Senior (6-10 years)</td>
 <td className="p-3">$220,000 - $350,000</td>
 <td className="p-3">$180K - $450K</td>
 <td className="p-3">20-40% geographic differential</td>
 </tr>
 </tbody>
 </table>
 </div>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Regional Compensation Analysis</h3>
 <p><strong>North America:</strong> Silicon Valley offers the highest compensation globally, 15-25% above national averages with the median base salary for technical staff at top AI startups currently at $310,000.</p>
 <p><strong>Europe:</strong> United Kingdom (London) offers €80,000 - €200,000 for senior roles. Germany and Netherlands also showing strong demand.</p>
 <p><strong>Asia-Pacific:</strong> China ($80k-$300k), Singapore ($90k-$250k), and India ($25k-$120k) are rapidly growing centers.</p>
 </div>
);

const InDemandSkillsContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Most In-Demand Skills for 2026</h2>
 <p className="mb-4">Explore the core technical skills, frameworks, and emerging specializations shaping the future of AI talent.</p>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Core Technical Skills & Languages</h3>
 <ul className="list-disc pl-6 mb-6 space-y-2">
 <li><strong>Python:</strong> Universal language for AI/ML (Salary Premium: 15-25% for advanced proficiency).</li>
 <li><strong>R:</strong> Statistical computing and data analysis (Salary Premium: 10-20% in research/analytics).</li>
 <li><strong>SQL:</strong> Foundational skill across all roles with a 20-30% boost for advanced commands.</li>
 <li><strong>JavaScript/TypeScript:</strong> Growing importance for AI product development.</li>
 </ul>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Machine Learning Frameworks</h3>
 <p className="mb-4">PyTorch, TensorFlow, Hugging Face Transformers, LangChain, and OpenAI API integrations are the most requested frameworks in job descriptions.</p>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Emerging Hot Skills</h3>
 <ol className="list-decimal pl-6 space-y-2 mb-6">
 <li><strong>Large Language Model (LLM) Specialization:</strong> Fine-tuning, RAG, scaling strategies (30-50% premium).</li>
 <li><strong>Prompt Engineering & AI Product Management:</strong> Up to $300K+ for senior roles.</li>
 <li><strong>AI Safety & Alignment:</strong> Bias detection, robustness testing, and interpretability (25-40% premium).</li>
 <li><strong>Multimodal AI:</strong> Vision-language models and cross-modal learning (20-35% premium).</li>
 <li><strong>AI Infrastructure & MLOps:</strong> Kubernetes for ML, model serving, and data orchestration (15-30% premium).</li>
 </ol>
 </div>
);

const RecruitmentTrendsContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Recruitment Trends & Talent Acquisition</h2>
 
 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Current Market Dynamics</h3>
 <ul className="list-disc pl-6 mb-6 space-y-2">
 <li><strong>Time to Fill:</strong> Average 4-6 months for senior AI roles.</li>
 <li><strong>Offer Acceptance Rate:</strong> 60-70% for competitive packages.</li>
 <li><strong>Counter-Offer Rate:</strong> 40-50% of candidates receive counter-offers.</li>
 <li><strong>Passive Engagement:</strong> 70% of top talent are not actively seeking new roles.</li>
 </ul>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Effective Hiring Strategies</h3>
 <p className="mb-4">Assessments are shifting away from traditional algorithm and data structure problems toward model architecture discussions, real dataset analysis, ethics and bias scenarios, and production deployment case studies.</p>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Talent Retention Challenges</h3>
 <p className="mb-4">Primary attrition drivers include Compensation Gaps (45%), Limited Growth Opportunities (25%), and Inadequate Resources/Tools (15%). Retention strategies should focus on mapping clear career paths, maintaining a solid learning budget, allowing 20% research time, and offering competitive equity refreshes.</p>
 </div>
);

const SkillsGapAnalysisContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Skills Gap Analysis & Training Needs</h2>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Critical Technical Skill Shortages</h3>
 <ul className="list-disc pl-6 mb-6 space-y-2">
 <li><strong>Production MLOps:</strong> 65% of organizations report shortages.</li>
 <li><strong>AI Safety & Ethics:</strong> 58% shortage in qualified professionals.</li>
 <li><strong>LLM Fine-tuning:</strong> 52% gap in specialized expertise.</li>
 <li><strong>Multimodal AI:</strong> 48% shortage in cross-modal specialists.</li>
 </ul>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Soft Skills in High Demand</h3>
 <p className="mb-4">Technical communication (explaining AI to non-technical stakeholders), cross-functional collaboration, ethical decision-making, and strategic thinking are vital.</p>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Upskilling Pathways</h3>
 <p className="mb-2"><strong>Data Scientists → AI Engineers:</strong> 6-12 months for additional training in software engineering best practices and production systems.</p>
 <p className="mb-2"><strong>Software Engineers → AI Engineers:</strong> 8-15 months covering machine learning fundamentals and statistical analysis.</p>
 <p className="mb-6"><strong>Domain Experts → AI Specialists:</strong> 12-24 months focusing on programming and data analysis techniques.</p>

 <p className="mb-4"><strong>Training ROI:</strong> Internal upskilling costs $15K-$30K per employee, which takes 3-6 months to productivity, while external hiring often commands a 40-60% premium and takes 6-12 months to productivity.</p>
 </div>
);

const FutureOutlookContent = () => (
 <div className="prose max-w-none font-['DM_Sans',sans-serif] text-gray-700">
 <h2 className="text-2xl font-bold mb-4 font-['League_Spartan',sans-serif] text-gray-900">Future Outlook & Predictions (2025-2027)</h2>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Market Projections</h3>
 <p className="mb-4">Overall AI job growth is forecasted to reach 35% annually through 2027, with specialized roles projected to grow by 50% annually. Salary growth is estimated at 15-25% annually for in-demand skills.</p>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Skill Evolution Timeline</h3>
 <ul className="list-disc pl-6 mb-6 space-y-2">
 <li><strong>2025 Focus:</strong> LLM application development, AI safety, Multimodal AI.</li>
 <li><strong>2026 Emerging:</strong> Quantum-classical hybrid algorithms, Neuromorphic computing, Autonomous AI agents.</li>
 <li><strong>2027 Next Gen:</strong> AI-AI collaboration systems, Synthetic data generation, Federated learning at scale.</li>
 </ul>

 <h3 className="text-xl font-bold mt-6 mb-3 font-['League_Spartan',sans-serif] text-gray-900">Strategic Recommendations</h3>
 <p className="mb-4"><strong>For Organizations:</strong> Build AI academies, develop competitive compensation strategies, and create flexible work arrangements.</p>
 <p className="mb-4"><strong>For Professionals:</strong> Focus on end-to-end skills, develop business acumen, and build strong technical networks.</p>
 <p className="mb-6"><strong>Conclusion:</strong> The AI talent market in 2025 offers tremendous opportunities. Success requires more than just compensation; it demands environments where exceptional professionals can contribute to responsible AI development that benefits society.</p>
 </div>
);

const CONTENT_MAP = {
 'executive-summary': { title:"2026 AI Talent & Salary Benchmark Report", Content: ExecutiveSummaryContent },
 'global-compensation': { title:"Global Compensation Landscape", Content: GlobalCompensationContent },
 'in-demand-skills': { title:"Most In-Demand Skills for 2026", Content: InDemandSkillsContent },
 'recruitment-trends': { title:"Recruitment Trends & Strategies", Content: RecruitmentTrendsContent },
 'skills-gap-analysis': { title:"Skills Gap Analysis & Training Needs", Content: SkillsGapAnalysisContent },
 'future-outlook': { title:"Future Outlook & Predictions", Content: FutureOutlookContent }
};

export default function AITalentResearchHubDetailPage() {
  const { articleSlug } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (articleSlug && CONTENT_MAP[articleSlug]) {
      setArticle(CONTENT_MAP[articleSlug]);
    }
  }, [articleSlug]);

  if (!article) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px' }}>

        <section className="w-full px-4 md:px-8 mt-8">
          <div className="max-w-[980px] mx-auto rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center">
            <h1 className="font-['DM_Sans',sans-serif] text-[30px] font-bold text-[#0F172A] mb-3">Report not found</h1>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#475569] mb-6">
              This Research Hub report is unavailable right now.
            </p>
            <button
              onClick={() => navigate('/insights/ai-talent-research-hub')}
              className="inline-flex items-center rounded-lg bg-[#CF2C2E] px-5 py-2.5 text-white font-['DM_Sans',sans-serif] font-semibold"
            >
              Back to Research Hub
            </button>
          </div>
        </section>
      </div>
    );
  }

  const { Content, title } = article;
  const accent = '#CF2C2E';

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
          padding: 30px 40px;
          animation: digestFadeUp 0.55s ease-out both;
          text-align: left;
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
      `}</style>

      <section className="w-full px-4 md:px-8 mt-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumbs */}
          <div className="text-[14px] font-['DM_Sans',sans-serif] mb-4 flex items-center gap-2">
            <Link to="/insights/ai-talent-research-hub" className="text-[#0070AC] font-bold hover:underline">
              Research Hub
            </Link>
            <span className="text-[#94A3B8]">/</span>
            <span className="text-[#475569]">{title}</span>
          </div>

          {/* Hero Banner Box */}
          <div
            className="digest-hero"
            style={{
              '--digest-accent-soft': `${accent}1F`,
              '--digest-accent-border': `${accent}33`,
            }}
          >

            <h1 className="mt-5 font-['League_Spartan',sans-serif] text-[34px] sm:text-[42px] md:text-[48px] leading-[1.1] font-bold text-[#0F172A]">
              {title}
            </h1>
          </div>

          {/* Report Content */}
          <div className="mt-12 max-w-[1000px] mx-auto">
            <Content />
          </div>
        </div>
      </section>

    </div>
  );
}
