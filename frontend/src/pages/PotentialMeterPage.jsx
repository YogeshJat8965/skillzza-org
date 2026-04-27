import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/potentiometer/Mask Group 129.png';
import measureImg from '../assets/potentiometer/Group 41603.png';
import dashImg from '../assets/Gemini_Generated_Image_mq3oqmmq3oqmmq3o.png';
import whatsGetImg from '../assets/potentiometer/Group 41604.png';

const tabData = {
  individuals: {
    preHeading: 'FOR INDIVIDUALS',
    heading: 'Students & Professionals',
    intro: 'Clear direction for your next career move, backed by AI, not assumptions.\\n\\nYour Career Intelligence Report, Delivered in 45 minutes.',
    featuresHeading: '',
    features: [
      'Role-Fit Score across 150+ career paths (85%+ accuracy)',
      'Capability Heat Map showing execution readiness for specific job tasks',
      'Gap-to-Goal Roadmap with personalized upskilling priorities',
      'AI Career Coach recommendations updated as you grow'
    ],
    resultsHeading: '',
    results: [],
    pricing: '₹999 / assessment\\n₹4,999 / year (unlimited + coaching)',
    buttons: [
      { text: 'Try Sample Assessment Free', outline: true }
    ]
  },
  institutions: {
    preHeading: 'FOR EDUCATIONAL INSTITUTIONS',
    heading: 'The Placement Intelligence Platform',
    intro: 'Transform career services from reactive counseling to predictive career engineering.',
    featuresHeading: "What's Included:",
    features: [
      'Bulk Assessment Dashboard: Assess entire batches in 48 hours',
      'Institutional Analytics: Identify department-wide skill gaps and curriculum misalignments',
      'Placement Readiness Tracker: Monitor student progress against industry benchmarks',
      'Employer Matching Engine: Auto-match students to role requirements',
      'White-Label Reports: Export branded career reports for students and recruiters'
    ],
    resultsHeading: 'Results Our Clients See:',
    results: [
      '60% increase in placement rates (average across 12 institutions)',
      '2.3x faster employer hiring decisions',
      '87% student satisfaction with career clarity'
    ],
    pricing: 'Custom institutional licensing | Typical: ₹50-150 per student assessment',
    buttons: [
      { text: 'Schedule Institution Demo', outline: true },
      { text: 'Download Case Study', outline: false }
    ]
  },
  employers: {
    preHeading: 'FOR EMPLOYERS & TALENT TEAMS',
    heading: 'Hire for Potential, Not Just Pedigree',
    intro: 'Screen 500 candidates in the time it takes to review 50 resumes.',
    featuresHeading: 'Platform Features:',
    features: [
      'Pre-Hire Potential Screening: Assess role-fit before interviews',
      'Internal Mobility Intelligence: Identify high-potential employees for promotions',
      'Skills Gap Analytics: Build targeted L&D programs based on real capability data',
      'API Integration: Embed assessments into your ATS (Workday, Greenhouse, SAP)'
    ],
    resultsHeading: 'ROI You Can Measure:',
    results: [
      '40% reduction in early turnover',
      '50% faster time-to-productivity for new hires',
      '70% lower cost-per-quality-hire vs. traditional methods'
    ],
    pricing: 'Pay-per-assessment or enterprise licensing | Starting ₹500/assessment',
    buttons: [
      { text: 'Start Employer Trial', outline: true },
      { text: 'API Documentation', outline: false }
    ]
  }
};

const faqData = [
  {
    question: 'What is the AI Potential Meter?',
    answer: 'The AI Potential Meter is an AI-powered career intelligence platform that measures real-world performance capability, role fit, and career readiness,helping individuals and organizations make data-backed career and hiring decisions in minutes.'
  },
  {
    question: 'How is this different from traditional aptitude or psychometric tests?',
    answer: 'Traditional tests measure knowledge or personality. The AI Potential Meter evaluates applied skills, cognitive agility, behavior, and execution capability through scenario-based challenges that reflect real job conditions.'
  },
  {
    question: 'Who should use the AI Potential Meter?',
    answer: 'The platform is designed for students, working professionals, educational institutions, and employers who want accurate career clarity, better placement outcomes, and smarter talent decisions.'
  },
  {
    question: 'How long does the assessment take and what do I receive?',
    answer: 'The assessment takes 20–45 minutes. You receive a comprehensive Career Intelligence Report with role-fit scores, capability heat maps, skill gaps, and personalized growth recommendations.'
  },
  {
    question: 'How accurate are the role-fit and career recommendations?',
    answer: 'The platform maps performance data to 150+ roles and 2,000+ job tasks using real labor-market intelligence, delivering role-fit accuracy of 85% or higher.'
  },
  {
    question: 'Can institutions and employers use this at scale?',
    answer: 'Yes. Institutions can assess entire batches with centralized dashboards, and employers can screen or benchmark candidates and employees at scale, including API integration with ATS platforms.'
  }
];

const AnimatedNumber = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsIntersecting(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    if (isIntersecting) {
      let startTime = null;
      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        // easeOut component
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(end * easeProgress);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isIntersecting, end, duration]);

  const isFloat = end % 1 !== 0;
  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return <span ref={nodeRef}>{displayValue}{suffix}</span>;
};

export default function PotentialMeterPage() {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [activeGetTab, setActiveGetTab] = useState('individuals');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track the image height so we can position the gradient cutoff precisely
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ── Hero Section ── */}
      <section className="relative w-full pt-[20px]">

        {/* Gradient bg - covers from top to halfway through the image */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            /* bottom edge = total section height minus half the image height */
            height: imgHeight > 0 ? `calc(100% - ${imgHeight / 2}px)` : '70%',
            background:
              'linear-gradient(253deg, rgba(221,232,255,0.45) 0%, rgba(255,255,255,0.45) 33%, rgba(250,252,255,0.45) 51%, rgba(239,244,255,0.45) 100%)',
          }}
        />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center px-4 md:px-8"
        >

          {/* Breadcrumb */}
          <div className="w-full max-w-[1400px] mb-3 text-left">
            <span className="font-['DM_Sans',sans-serif] text-[13px] text-[#71717A] flex items-center gap-2">
              <Link to="/" className="hover:text-[#2563eb] transition-colors">Home</Link> 
              <span className="text-[10px]">/</span> 
              <span>Products</span> 
              <span className="text-[10px]">/</span> 
              <span className="font-medium text-[#0F1114]">Potential Meter AI</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] max-w-[1118px] text-[36px] leading-[42px] md:text-[48px] md:leading-[54px] lg:text-[56px] lg:leading-[64px] tracking-[-1.5px] mb-3"
          >
            Stop Guessing <span className="text-[#2563eb]">Career Potential.</span>
            <br />
            Start <span className="text-[#2563eb]">Measuring</span> It.
          </h1>

          {/* Sub Heading */}
          <p
            className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] max-w-[1050px] text-[16px] leading-[24px] md:text-[19px] md:leading-[27px] lg:text-[21px] lg:leading-[29px] tracking-[-0.6px] mb-3"
          >
            The AI-powered platform that transforms career uncertainty into data-backed decisions in minutes.
            <br />
            Traditional assessments measure knowledge.&nbsp; We measure real-world performance capability.
          </p>

          {/* Content Paragraph */}
          <p
            className="font-['Lato',sans-serif] font-medium text-[#71717A] max-w-[800px] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] mb-5"
          >
            The Potential Meter AI combines artificial intelligence, behavioral science, and
            role-based analytics to deliver precision insights into skills, cognitive agility, and
            career readiness helping individuals find their best-fit career path and
            organizations make confident talent decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-6">
            <button className="bg-[#245CE2] hover:bg-[#1E4DBC] transition-colors text-white font-['DM_Sans',sans-serif] font-medium text-[15px] px-7 py-3 rounded">
              Start Free Skill Assessment
            </button>
            <button className="bg-white border border-[#E4E4E7] hover:bg-gray-50 transition-colors text-[#0F1114] font-['DM_Sans',sans-serif] font-medium text-[15px] px-7 py-3 rounded">
              Book Demo
            </button>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[1400px] mx-auto"
          >
            <img
              ref={imgRef}
              src={heroImg}
              alt="Potential Meter AI - Assess, Analyze, Readiness, Roadmap"
              className="w-full h-auto object-contain"
              onLoad={() => {
                if (imgRef.current) setImgHeight(imgRef.current.offsetHeight);
              }}
            />
          </motion.div>

        </motion.div>
      </section>

      {/* ── Statistics Section ── */}
      <section 
        className="w-full flex-shrink-0 flex items-center justify-center bg-[#1F57C7] px-4 py-8 md:py-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1400px] w-full flex flex-col items-center text-center"
        >
          <h2 className="product-heading font-medium text-white tracking-[-0.5px] mb-3">
            Real Outcomes. Measurable Impact.
          </h2>
          <p className="font-['Lato',sans-serif] font-normal text-white/90 text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] mb-8 max-w-[800px]">
            What users and institutions achieve after using the Potential Meter
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Stat 1 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[48px] md:text-[56px] leading-[1] mb-4">
                <AnimatedNumber end={87} suffix="%" />
              </div>
              <p className="font-['Lato',sans-serif] font-normal text-white text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                Improvement in career<br/>clarity
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[48px] md:text-[56px] leading-[1] mb-4">
                <AnimatedNumber end={2.5} suffix="X" />
              </div>
              <p className="font-['Lato',sans-serif] font-normal text-white text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                faster career and learning<br/>decision-making
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[48px] md:text-[56px] leading-[1] mb-4">
                <AnimatedNumber end={60} suffix="%" />
              </div>
              <p className="font-['Lato',sans-serif] font-normal text-white text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] max-w-[250px]">
                higher role-fit accuracy<br/>for institutions and<br/>employers
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="flex flex-col items-center px-4">
              <div className="font-['DM_Sans',sans-serif] font-semibold text-white text-[48px] md:text-[56px] leading-[1] mb-4">
                <AnimatedNumber end={40} suffix="%" />
              </div>
              <p className="font-['Lato',sans-serif] font-normal text-white text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] max-w-[220px]">
                reduction in early-career<br/>misalignment
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Problem We Solve Section ── */}
      <section className="w-full bg-white flex justify-center px-4 py-2 md:py-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] w-full flex flex-col items-center"
        >
          
          <div className="text-center mb-6 max-w-[800px]">
            <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] text-[36px] md:text-[48px] tracking-[-1px] mb-4">
              The Problem We Solve
            </h2>
            <p className="font-['Lato',sans-serif] font-medium text-[#475569] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
              Career decisions today are based on assumptions<br className="hidden md:block"/> - not real performance data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Card 1: Students */}
            <div className="bg-[#FAFBFD] p-8 md:p-10 rounded-2xl border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[#0F1114] text-[20px] mb-3 group-hover:text-[#2563eb] transition-colors">
                Students
              </h3>
              <p className="font-['Lato',sans-serif] text-[#71717A] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                waste years in wrong-fit careers because aptitude tests can't predict real-world performance.
              </p>
            </div>

            {/* Card 2: Professionals */}
            <div className="bg-[#FAFBFD] p-8 md:p-10 rounded-2xl border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[#0F1114] text-[20px] mb-3 group-hover:text-[#2563eb] transition-colors">
                Professionals
              </h3>
              <p className="font-['Lato',sans-serif] text-[#71717A] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                hit career plateaus without knowing which skills actually matter for their next role.
              </p>
            </div>

            {/* Card 3: Institutions */}
            <div className="bg-[#FAFBFD] p-8 md:p-10 rounded-2xl border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[#0F1114] text-[20px] mb-3 group-hover:text-[#2563eb] transition-colors">
                Institutions
              </h3>
              <p className="font-['Lato',sans-serif] text-[#71717A] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                struggle with 40%+ placement mismatches, damaging reputation and student outcomes.
              </p>
            </div>

            {/* Card 4: Employers */}
            <div className="bg-[#FAFBFD] p-8 md:p-10 rounded-2xl border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <h3 className="font-['DM_Sans',sans-serif] font-bold text-[#0F1114] text-[20px] mb-3 group-hover:text-[#2563eb] transition-colors">
                Employers
              </h3>
              <p className="font-['Lato',sans-serif] text-[#71717A] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                lose $15K+ per bad hire because resumes don't reveal execution capability.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── What We Measure Section ── */}
      <section className="relative w-full py-2 md:py-4 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-6 relative z-20"
        >
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[#3C3C3C] text-[36px] md:text-[48px] tracking-[-1px]">
            What We Measure
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex items-center min-h-[750px]"
        >
          {/* Background Image Container sticking to the right edge */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[65%] max-w-[1144px] h-[705px] hidden md:flex justify-end opacity-20 md:opacity-100">
             <img 
               src={measureImg} 
               alt="What we measure at Skillzza" 
               className="w-full h-full object-cover md:object-contain object-right" 
             />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full lg:w-[60%]">
              
              {/* Card 1 */}
              <div className="bg-[#FC962A] p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-white text-[20px] md:text-[22px] mb-3">
                  AI-Based Skill Assessment
                </h3>
                <p className="font-['Lato',sans-serif] font-medium text-white/90 text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                  Applied, task-level technical<br className="hidden lg:block"/>competence
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FC962A] p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-white text-[20px] md:text-[22px] mb-3">
                  Cognitive & Behavioral<br/>Intelligence
                </h3>
                <p className="font-['Lato',sans-serif] font-medium text-white/90 text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                  Problem-solving, adaptability,<br className="hidden lg:block"/>communication
                </p>
              </div>

               {/* Card 3 */}
              <div className="bg-[#FC962A] p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-white text-[20px] md:text-[22px] mb-3">
                  Career Readiness & Role Fit
                </h3>
                <p className="font-['Lato',sans-serif] font-medium text-white/90 text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                  Alignment with real-world job<br className="hidden lg:block"/>requirements
                </p>
              </div>

               {/* Card 4 */}
              <div className="bg-[#FC962A] p-6 md:p-8 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-['DM_Sans',sans-serif] font-semibold text-white text-[20px] md:text-[22px] mb-3">
                  Soft Skills &<br/>Professional Maturity
                </h3>
                <p className="font-['Lato',sans-serif] font-medium text-white/90 text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                  Workplace effectiveness and<br className="hidden lg:block"/>growth readiness
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ── How The Platform Works Section ── */}
      <section className="w-full bg-white py-2 md:py-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-center text-[#0F1114] text-[36px] md:text-[48px] tracking-[-1px] mb-4 md:mb-6">
            How The Platform Works
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            
            {/* Left Side - Timeline */}
            <div className="w-full lg:w-[45%] relative">
              {/* Vertical Line */}
              <div 
                className="absolute left-[39px] top-12 bottom-12 w-[2px] bg-[#2563eb]/20 hidden md:block" 
              />

              <div className="space-y-6 relative z-10 w-full pl-0">
                {[
                  {
                    title: 'Step 1: Smart Assessment (20-45 min)',
                    content: 'Adaptive AI evaluates applied skills, cognitive agility, and behavioral responses through scenario-based challenges, not multiple-choice trivia.'
                  },
                  {
                    title: 'Step 2: AI Analysis Engine',
                    content: 'Our proprietary algorithms map performance to 150+ roles, 2,000+ job tasks, and future skill frameworks using real labor market data.'
                  },
                  {
                    title: 'Step 3: Instant Intelligence',
                    content: 'Generates comprehensive Career Intelligence Reports in seconds, exportable, shareable, and actionable.'
                  },
                  {
                    title: 'Step 4: Continuous Insights',
                    content: 'Track progress, recommend micro-learning, and update readiness scores as skills evolve.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 relative group w-full cursor-default">
                    {/* Circle Indicator */}
                    <div className="hidden md:flex relative flex-shrink-0 z-10 w-20 h-20 items-center justify-center">
                      {/* Inactive State - just a dot bordered by wide padding to mask the line */}
                      <div className="w-14 h-14 bg-white flex items-center justify-center absolute transition-opacity duration-300 group-hover:opacity-0">
                        <div className="w-4 h-4 rounded-full bg-[#2563eb]/20 flex items-center justify-center">
                           <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                        </div>
                      </div>

                      {/* Active / Hover State - large soft blue background glowing */}
                      <div className="w-16 h-16 rounded-full bg-[#eef2ff] flex items-center justify-center absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        <div className="w-6 h-6 rounded-full bg-white border-[2.5px] border-[#2563eb] flex items-center justify-center shadow-lg">
                           <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" />
                        </div>
                      </div>
                    </div>

                    {/* Step Card with accordion hover */}
                    <div
                      className="flex-1 w-full rounded-lg transition-all duration-300 flex flex-col justify-center text-left py-4 px-6 lg:px-8 bg-[#C9DBFF] hover:bg-[#F4F7FA] border border-transparent hover:border-gray-200"
                      style={{ minHeight: '80px' }}
                    >
                      <h3
                        className="font-['DM_Sans',sans-serif] font-semibold text-[18px] md:text-[20px] transition-colors text-[#245CE2]"
                      >
                        {step.title}
                      </h3>
                      
                      {/* Hidden content that expands on hover */}
                      <div className="transition-all duration-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[160px] group-hover:mt-3">
                        <p className="font-['Lato',sans-serif] font-medium text-[#64748b] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Video CTA */}
              <div className="mt-8 md:mt-10 md:pl-[112px] w-full">
                <button className="w-full bg-[#1e4dbc] hover:bg-[#163a8f] transition-all duration-300 text-white font-['DM_Sans',sans-serif] font-semibold text-[16px] py-4 rounded-md shadow-[0_8px_20px_rgba(30,77,188,0.2)]">
                  See Platform Demo Video
                </button>
              </div>

            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-[55%] flex justify-center lg:justify-end xl:pl-4">
              <img
                src={dashImg}
                alt="Skillzza Potential Meter Dashboard"
                className="w-full h-auto object-contain max-w-[850px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl"
              />
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── What You Get with Potential Meter Section ── */}
      <section className="relative w-full py-2 md:py-4 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4"
        >
          
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] text-[36px] md:text-[42px] tracking-[-1px] mb-4">
            What You Get with Potential Meter
          </h2>
          <p className="font-['Lato',sans-serif] font-normal text-[#71717B] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] max-w-2xl mx-auto mb-10">
            Tailored intelligence for individuals, institutions, and employers - designed to drive real-world outcomes.
          </p>

          {/* Toggle Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-[600px] mx-auto mb-6 px-4">
            {[
              { id: 'individuals', label: 'Individuals' },
              { id: 'institutions', label: 'Institutions' },
              { id: 'employers', label: 'Employers' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveGetTab(tab.id)}
                className={`flex-1 py-3 px-6 rounded-md font-['DM_Sans',sans-serif] font-semibold text-[15px] transition-all duration-300
                  ${activeGetTab === tab.id 
                    ? 'bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-[#0F1114]' 
                    : 'bg-[#f4f4f5] text-[#71717B] hover:bg-[#eaeaea]'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full mx-auto flex flex-col lg:flex-row items-center border border-gray-100/0 min-h-[700px]"
        >
          
          {/* Active Content (Left Side) */}
          <div className="w-full lg:w-[55%] xl:w-[50%] pl-4 sm:pl-8 lg:pl-[6%] xl:pl-[12%] pr-4 sm:pr-8 lg:pr-8 pb-16 lg:pb-0 relative z-10">
            <div className="max-w-[750px] animate-fadeIn transition-opacity duration-500">
              <span className="font-['DM_Sans',sans-serif] font-bold text-[#2563eb] text-[13px] tracking-[1px] uppercase mb-4 block">
                {tabData[activeGetTab].preHeading}
              </span>
              
              <h3 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] text-[32px] md:text-[40px] leading-tight tracking-[-1px] mb-4">
                {tabData[activeGetTab].heading}
              </h3>
              
              <p className="font-['Lato',sans-serif] font-medium text-[#71717B] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] mb-8 whitespace-pre-line">
                {tabData[activeGetTab].intro}
              </p>

              {/* Features List */}
              <div className="mb-6">
                {tabData[activeGetTab].featuresHeading && (
                  <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] mb-3">
                    {tabData[activeGetTab].featuresHeading}
                  </h4>
                )}
                <ul className="space-y-3">
                  {tabData[activeGetTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#71717B] mt-2.5 flex-shrink-0" />
                      <span className="font-['Lato',sans-serif] text-[#71717B] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results List */}
              {tabData[activeGetTab].results.length > 0 && (
                <div className="mb-8 p-6 bg-[#f8fafc] rounded-xl flex flex-col gap-3">
                  <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] mb-1 text-[16px]">
                    {tabData[activeGetTab].resultsHeading}
                  </h4>
                  <ul className="space-y-2.5">
                    {tabData[activeGetTab].results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-[6px] h-[6px] rounded-full bg-[#2563eb] mt-2 flex-shrink-0" />
                        <span className="font-['DM_Sans',sans-serif] text-[#2563eb] font-semibold text-[15px] leading-relaxed">
                          {res}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing */}
              <div className="mb-8">
                <h4 className="font-['DM_Sans',sans-serif] font-bold text-[#2563eb] text-[14px] uppercase tracking-wide mb-2 block">
                  PRICING:
                </h4>
                <p className="font-['Lato',sans-serif] font-medium text-[#71717B] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] whitespace-pre-line">
                  {tabData[activeGetTab].pricing}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {tabData[activeGetTab].buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    className={`px-8 py-3.5 rounded-md font-['DM_Sans',sans-serif] font-semibold text-[15px] transition-colors
                      ${btn.outline
                        ? 'border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white'
                        : 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'}`}
                  >
                    {btn.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Graphic Container (Right Side) */}
          <div className="w-full lg:w-[50%] xl:w-[50%] lg:absolute right-0 top-1/2 lg:-translate-y-1/2 flex justify-end h-[400px] lg:h-[700px] mt-8 lg:mt-0">
             <div 
               className="w-full h-full"
               style={{ 
                 background: `url(${whatsGetImg}) right center / contain no-repeat` 
               }}
             />
          </div>

        </motion.div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="w-full bg-white py-2 md:py-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            
            {/* Left side: Heading */}
            <div className="w-full md:w-[35%] lg:w-[30%]">
              <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[#0F1114] text-[40px] md:text-[52px] tracking-[-1px] md:sticky top-24">
                FAQ's
              </h2>
            </div>

            {/* Right side: Accordions */}
            <div className="w-full md:w-[65%] lg:w-[70%]">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 py-6 pr-4">
                  <button 
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="font-['DM_Sans',sans-serif] font-semibold text-[#000000] text-[18px] md:text-[20px] pr-8 group-hover:text-[#2563eb] transition-colors">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-black group-hover:text-[#2563eb] transition-colors">
                      {activeFaq === index ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-['Lato',sans-serif] font-normal text-[#71717B] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] pr-4 md:pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── Call To Action Section ── */}
      <section className="w-full bg-[#FBA93E] py-12 md:py-16 px-4 flex flex-col items-center justify-center text-center mt-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h2 className="product-heading font-bold text-[#0F1114] tracking-[-1.5px] mb-4 md:mb-5">
            Upskill Smarter. Learn Faster.<br />Lead Confidently.
          </h2>
          <p className="font-['Lato',sans-serif] font-medium text-[#0F1114] text-[16px] md:text-[clamp(14px,1.2vw,20px)] leading-[1.6] mb-7 md:mb-9">
            Skillzza Academy doesn't just teach skills<br />we build careers, capability, and confidence for the next decade.
          </p>

          <button className="bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] md:text-[16px] w-[260px] md:w-[320px] py-4 rounded-md mb-6 md:mb-8">
            Apply Now
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-['DM_Sans',sans-serif] font-bold text-[13px] md:text-[15px] text-[#0F1114]">
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Talk to an Academic Advisor</span>
            <span className="text-[16px] md:text-[18px] font-medium opacity-80">|</span>
            <span className="cursor-pointer hover:opacity-70 transition-opacity">Download Academy Brochure</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
