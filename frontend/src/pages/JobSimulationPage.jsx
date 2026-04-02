import React, { useState, useEffect, useRef } from 'react'

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let frame;
    let startTime;
    const duration = 2000; // 2 seconds

    if (ref.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(target * percentage));
            if (percentage < 1) {
              frame = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          frame = requestAnimationFrame(animate);
        } else {
            setCount(0);
        }
      }, { threshold: 0.1 });
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ScrollReveal = ({ children, className = '', threshold = 0.1, delay = 0, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        { threshold }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [threshold]);

  const revealStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
    willChange: 'opacity, transform',
    ...style
  };

  return (
    <div ref={ref} className={className} style={revealStyle}>
      {children}
    </div>
  );
};

const stats = [
  {
    number: '10X',
    label: 'more',
    description: 'likely to land\nyour first job',
  },
  {
    number: '10',
    label: 'million +',
    description: 'learners projected \nto achieve career success',
  },
  {
    number: '70+',
    label: 'programs',
    description: 'spanning high-growth \ncareer fields',
  },
  {
    number: '115+',
    label: 'years',
    description: 'of collective Industry\nleadership & guidance',
    accent: true,
  },
]

const solutionCards = [
  {
    title: 'Prestigious Certification',
    desc: ' Validate your skills and boost your resume with recognized certifications aligned with top-tier company standards.'
  },
  {
    title: 'Global Readiness',
    desc: 'Acquire cross-border competencies and practical exposure with virtual experiences modeled on global workplace environments.'
  },   

  {
    title: 'Mentorship from Industry Experts',
    desc: 'Receive guidance from professional sherpas dedicated to helping you succeed.'
  },
  {
    title: 'Career Clarity & Direction',
    desc: ' Identify your strengths, discover your interests, and match them with real career paths.'
  },
  {
    title: 'Real-World Problem Solving',
    desc: 'Engage in scenario-based learning built by real companies, tackling real challenges.'
  },
  {
    title: 'Flexible & Immersive Learning',
    desc: 'Simulate authentic workplace tasks at your own pace, wherever you are.'
  },
  {
    title: 'Visibility to Employers',
    desc: ' Stand out by showcasing your simulation work and competencies to prospective employers actively scouting for emerging talent.'
  },
  {
    title: 'Real-Time Role Play & Situational Dynamics',
    desc: ' Experience dynamic, role-specific simulations that replicate real job functions, team collaboration, and strategic decision-making delivering high-impact, experiential learning under real-world conditions.'
  }

]

const simulationCards = [
  {
    image: 'https://skillzza.com/assets/img/ChatBOTDeveloper_logo.jpg',
    logo: 'https://skillzza.com/assets/img/ai_lifebot_logo.jpeg',
    company: 'AI LifeBOT',
    title: 'ChatBOT Developer',
    category: 'Technology',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SocialMediaAdvertising_card.png',
    logo: 'https://skillzza.com/assets/img/suflexmedia_logo.png',
    company: 'Suflex Media',
    title: 'Crack the code of Social Media',
    category: 'Marketing',
    level: 'Advanced',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/greengold_animation_tile.png',
    logo: 'https://skillzza.com/assets/img/greengold_logo.png',
    company: 'GreenGold Animation',
    title: '2D Animation and VFX',
    category: 'Design',
    level: 'Intermediate',
    duration: '40-45 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/edgespark_it_tile.jpg',
    logo: 'https://skillzza.com/assets/img/edgespark_logo.png',
    company: 'Edgespark IT Ventures',
    title: 'Building a Minimum Viable Product (MVP) for startups',
    category: 'Entrepreneurship',
    level: 'Beginner',
    duration: '12-15 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/developing_applications_tile.jpg',
    logo: 'https://skillzza.com/assets/img/mscopilot.PNG',
    company: 'Microsoft',
    title: 'Developing AI agents with MS Copilot studio',
    category: 'Technology',
    level: 'Advanced',
    duration: '90-100 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/appsolutely_ai_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Data Scientist',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/midland_tile.jpg',
    logo: 'https://skillzza.com/assets/img/MidlandMicroFinance_logo.png',
    company: 'Midland Microfinance',
    title: 'Socially Responsible Lending in Microfinance',
    category: 'Banking',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/TransformingdatawithPowerBI_tile_img.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Gen AI Engineer',
    category: 'Technology',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/DataIntelligence_tile.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Data Intelligence',
    category: 'Technology',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/TransformingdatawithPowerBI_tile_img.png',
    logo: 'https://skillzza.com/assets/img/opg_logo.png',
    company: 'OPG Mobility',
    title: 'Simulating EV Charging Cycles & Analyzing Fast Charging Technology',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/branding_and_Storytelling_tileImg.jpg',
    logo: 'https://skillzza.com/assets/img/fusionFlare_logo.svg',
    company: 'Fusionflare',
    title: 'Transform the brands with Stories',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/ailifebot_tile.jpg',
    logo: 'https://skillzza.com/assets/img/ai_lifebot_logo.jpeg',
    company: 'AI LifeBOT',
    title: 'Building and Optimizing Intelligent Systems',
    category: 'Other',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/CyberSecurityAnalyst.png',
    logo: 'https://skillzza.com/assets/img/SentinelLogo.png',
    company: 'Microsoft',
    title: 'Cyber Security Analyst',
    category: 'Security',
    level: 'Advanced',
    duration: '40-60 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/digital_journalism_tile.jpg',
    logo: 'https://skillzza.com/assets/img/cxo_techbot.png',
    company: 'CXO TechBot',
    title: 'Digital Journalism and Multimedia Storytelling',
    category: 'Other',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/avatar_in_brand_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Ponpuregroup.png',
    company: 'Pon pure chemicals',
    title: 'Integrating AI Chatbots with CRM for Chemical Sales Automation',
    category: 'Technology',
    level: 'Intermediate',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIDataEngineergooglecloud.png',
    logo: 'https://skillzza.com/assets/img/goggle_logo.png',
    company: 'Google',
    title: 'Preparing and Optimizing Datasets for AI Models in Google Cloud',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/salse_chanel_manager_ico.png',
    logo: 'https://skillzza.com/assets/img/faber_logo.png',
    company: 'Faber',
    title: 'build multi AI agents for enhancing Customer service efficiency',
    category: 'Other',
    level: 'Intermediate',
    duration: '45-60 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIEthics&fairnessConsultant_tile.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Ethics & fairness Consultant',
    category: 'Consulting',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/builderai_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Environmental Scientist',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIforEngineer_tileCard.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI for Engineer',
    category: 'Development',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SoftwareEngineer_tileImg.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Software Engineer',
    category: 'Development',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SustainabilityAnalyst_tile_img.png',
    logo: 'https://skillzza.com/assets/img/GSSCA_logo.png',
    company: 'GSSCA',
    title: 'Sustainability Analyst',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/RiskAssessmentStrategist_tile_img.png',
    logo: 'https://skillzza.com/assets/img/MidlandMicroFinance_logo.png',
    company: 'Midland Microfinance',
    title: 'Risk Assessment Strategist',
    category: 'Banking',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/prompt_engineering_tile.jpg',
    logo: 'https://skillzza.com/assets/img/greengold_logo.png',
    company: 'Green Gold Animation',
    title: 'StoryBoard Artist & Character Modeling',
    category: 'Design',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/vmware_cloud_tile.jpg',
    logo: 'https://skillzza.com/assets/img/akhilSystems_logo.png',
    company: 'Akhil Systems',
    title: 'Product Manager / HIMS',
    category: 'Development',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/digital_twins_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Solution Architect',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIbasedAppDevelopment_tileImg.jpg',
    logo: 'https://skillzza.com/assets/img/builderAI_logo.png',
    company: 'Builder.AI',
    title: 'AI based App Development',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '25 - 30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/sustainnovate_dev_tile.png',
    logo: 'https://skillzza.com/assets/img/Sustainnovatesolution_logo.png',
    company: 'Sustainnovate solution',
    title: 'ESG Strategies For Net Zero Goals',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/substance_painter_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Adobe_logo.png',
    company: 'Adobe',
    title: 'Substance Painter for Animation',
    category: 'Design',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/sentiment_analysis_tile.jpg',
    logo: 'https://skillzza.com/assets/img/meta_logo.png',
    company: 'Meta',
    title: 'Sentiment Analysis for Market Insights using LLaMA',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/precision_agriculture_tile.jpg',
    logo: 'https://skillzza.com/assets/img/grugrade_logo.png',
    company: 'Grus & Grade',
    title: 'Precision Agriculture and Drone Integration',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '75-80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/figma_adobe_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Adobe_logo.png',
    company: 'Figma/Adobe',
    title: 'UI/UX design & Prototyping for mobile first approach',
    category: 'Design',
    level: 'Intermediate',
    duration: '45-50 hours'
  }
];

const newDesignCards = [
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting Enterprise-Grade B2B Sales Leadership & Deal Strategy Systems',
    category: 'Marketing',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering and Orchestrating Serverless (FaaS) Architectures',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1673379368734-fdf78575bc3d?q=80&w=1170&auto=format&fit=crop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/250px-Amazon_Web_Services_Logo.svg.png',
    title: 'Building Retrieval-Augmented Generation (RAG) Systems',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Applying Data Science Techniques for Predictive Insights',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting and Automating Enterprise Solutions with Microsoft Power Platform',
    category: 'Development',
    level: 'Intermediate',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/as-removebg-preview-no-bg.png',
    title: 'Engineering and Deploying Federated Learning Systems',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting and Orchestrating Secure Application Life Cycles',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting and Implementing Privacy-Engineered Data Clean Room',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing Cloud-Native Data Governance Control Frameworks',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Pioneering Quantitative Cybersecurity Posture Assessment Strategies',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Constructing Threat Intelligence Knowledge Graph Taxonomies',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Prototyping Privacy-Preserving GenAI Governance Protocols',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing and Building Scalable Oracle Enterprise Application Architectures',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting Enterprise-Grade Pega Case Management & Intelligent Automation Systems',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1393&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/Google_logo.png',
    title: 'Designing Cloud Infrastructure on AWS, Azure, and GCP',
    category: 'Development',
    level: 'Intermediate',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30NifBSiFy5OEVciQeZBpIMsmIh5T9UdsQw&s',
    title: 'Designing and Implementing Advanced Graphics and Shaders with WebGPU',
    category: 'Design',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Advanced Salesforce Enterprise Architecture & DevOps Engineering',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://skillzza.com/assets/img/meta_logo.png',
    title: 'Designing and Building Immersive AR/VR & Spatial Computing Platforms',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Building Autonomous AI Agents for Real-World Use Cases',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1590212151175-e58edd96185b?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering & Deploying Voice Bot & AI Agent Systems',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting and Implementing Digital Forensics and Cyber Investigation Systems',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Oracle Cloud ERP Technical Internship',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering & Deploying Agentic AI Systems',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://img.icons8.com/?size=100&id=22989&format=png&color=000000',
    title: 'Multi-Agent Systems and Enterprise GenAI Applications Internship',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing and Developing Advanced Motion and Interactive UX Frameworks',
    category: 'Design',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting and Developing Advanced Feature Stores for Machine Learning',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/IBM_logo.png',
    title: 'Designing and Orchestrating Agentic AI Workflows',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/Amazon_logo.png',
    title: 'Blockchain & Web3 Technical Internship',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1768374180121-f86dc6a506e3?q=80&w=1170&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/Google_logo.png',
    title: 'Defending Systems Against Cyber Threats and Security Risks',
    category: 'Cybersecurity',
    level: 'Intermediate',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80',
    logo: '/simulation/nvidia-logo-horiz-blk-16x9 1.png',
    title: 'Engineering Autonomous Robotics & Industrial Control Systems',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1765194240514-201bcff232c5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing and Building Technical Solutions for AgriTech Automation',
    category: 'Development',
    level: 'Intermediate',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing & Implementing MarTech Systems and Sales Automation Architectures',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1631499792544-3c313e2a2511?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering and Optimizing Multiplayer Game Server Architectures',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1547023717-d4a4e04021e5?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logo: 'https://portal.skillzza.com/as-removebg-preview-no-bg.png',
    title: 'Engineering High-Performance Native Mobile Applications (iOS & Android)',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering and Automating Resilient Business Process Workflows',
    category: 'Development',
    level: 'Intermediate',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Architecting Cloud-Native Pega DevOps & Scalable Platform Engineering',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://img.icons8.com/?size=100&id=95qv31JyMb9Y&format=png&color=000000',
    title: 'Engineering Large Language Model-Powered Systems',
    category: 'Data Science',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Designing and Building Enterprise Technical Solutions Platforms',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80',
    logo: '/simulation/pngwing.com.png',
    title: 'Architecting Secure and Scalable Digital Payment Platforms',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png',
    title: 'Architecting and Implementing Custom Salesforce Technical Solutions',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours'
  },
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Engineering and Automating Enterprise ServiceNow Platform Workflows',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80',
    logo: '/simulation/pngwing.com.png',
    title: 'Architecting Secure and Scalable FinTech Payment Infrastructure',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://portal.skillzza.com/ailifebot_logo_no_bg.png',
    title: 'Advanced ServiceNow ITOM & CMDB Engineering',
    category: 'Development',
    level: 'Advanced',
    duration: '5-8 hours',
    hiring: true
  }
];

function JobSimulationPage() {
  const [showAll, setShowAll] = useState(false);

  // Default to showing 2 rows (8 items if 4 columns)
  const visibleCards = showAll ? newDesignCards : newDesignCards.slice(0, 8);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ── Section wrapper: pure white, relative so we can drop the wavy img ── */
        .jsim-section {
          position: relative;
          width: 100%;
          background-color: #ffffff;
          padding: 72px 24px 88px;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* ── Wavy decorative image ── */
        .jsim-wavy {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
          user-select: none;
        }

        /* ── Content on top of background ── */
        .jsim-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Title ── */
        .jsim-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 38px;
          line-height: 1.25;
          color: #0F1114;
          text-align: center;
          margin: 0 0 28px 0;
        }

        /* ── Description ── */
        .jsim-description {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.75;
          color: #555b6e;
          text-align: center;
          max-width: 800px;
          margin: 0 0 56px 0;
        }

        /* ── Cards row ── */
        .jsim-cards-row {
          display: flex;
          flex-direction: row;
          gap: 18px;
          align-items: stretch;
          justify-content: center;
          width: 100%;
        }

        /* ── Individual card ── */
        .jsim-card {
          flex: 1;
          width: 100%;
          min-width: 0;
          background: #ffffff;
          border: 1px solid #dde3f0;
          border-radius: 18px;
          box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
          padding: 28px 22px 28px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          /* NO overflow:hidden so accent can protrude */
        }

        /* ── 4th card accent background (offset drop shadow) ── */
        .jsim-card-accent::after {
          content: '';
          position: absolute;
          right: -22px;
          bottom: -22px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #165294 0%, #0d76be 100%);
          z-index: -1;
        }

        /* ── Stat number ── */
        .jsim-stat-number {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 68px;
          line-height: 1;
          color: #2974c9;
          margin: 0 0 16px 0;
          letter-spacing: -1px;
        }

        /* ── Stat label (blue, smaller) ── */
        .jsim-stat-label {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
          color: #2974c9;
          margin: 0 0 12px 0;
        }

        /* ── Stat description (dark, small) ── */
        .jsim-stat-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.6;
          color: #1a1a2e;
          white-space: pre-line;
          margin: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .jsim-wavy { display: none; }
          .jsim-heading { font-size: 26px; }
          .jsim-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }
          .jsim-card {
            width: 320px;
            max-width: 100%;
            height: 280px;
            box-sizing: border-box;
            margin: 0 auto;
            padding: 32px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .jsim-stat-number { font-size: 56px; }
          .jsim-stat-desc {
            white-space: normal; /* Removes hard line breaks on mobile for better text flow */
          }
          .jsim-card-accent::after { right: -8px; bottom: -8px; }
        }

        /* ── Tablet ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .jsim-cards-row { flex-wrap: wrap; }
          .jsim-card { flex: 0 0 calc(50% - 9px); }
          .jsim-stat-number { font-size: 54px; }
        }

        /* ── Solution Section ── */
        .sol-section {
          position: relative;
          width: 100%;
          background-color: #fdfdfd;
          padding: 80px 24px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .sol-map-bg {
          position: absolute;
          top: 0;
          right: -10%; /* Shift right so there's no gap and naturally bleeds off edge */
          width: 70%;
          height: auto;
          object-fit: contain;
          object-position: top right;
          pointer-events: none;
          z-index: 0;
        }

        .sol-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Header */
        .sol-header {
          text-align: center;
          max-width: 800px;
          margin-bottom: 60px;
        }

        .sol-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #222222;
          margin: 0 0 16px 0;
        }

        .sol-subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.6;
          color: #474545;
          margin: 0;
        }

        /* Two Columns */
        .sol-content {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
          width: 100%;
        }

        /* Left Grid */
        .sol-cards-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .sol-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.08);
          padding: 24px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          border: 1px solid #f0f0f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sol-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
        }

        .sol-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 1.4;
          color: #2974c9;
          margin: 0 0 12px 0;
          white-space: pre-line;
        }

        .sol-card-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 13px;
          line-height: 1.5;
          color: #71717a;
          white-space: pre-line;
          margin: 0;
        }

        /* Right Image */
        .sol-image-col {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* Align to the right edge */
          align-items: center;
          position: relative;
        }

        .sol-image-wrapper {
          position: relative;
          width: 38vw; /* Scale massively based on viewport size */
          max-width: 650px; /* Cap at generously large size */
          
          /* Push flush to the exact right boundary of the entire screen */
          margin-right: calc(-1 * max(24px, (100vw - 1500px) / 2));
        }

        /* Blue corner top-left */
        .sol-decor-tl {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 120px;
          height: 120px;
          border-top: 6px solid #2974c9;
          border-left: 6px solid #2974c9;
          z-index: 0;
        }

        /* Blue box bottom-right */
        .sol-decor-br {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          border-bottom: 6px solid #2974c9;
          border-right: 6px solid #2974c9;
          z-index: 0;
        }

        /* Yellow dots */
        .sol-decor-dots-l {
          position: absolute;
          bottom: 60px;
          left: -40px;
          width: 40px;
          height: 120px;
          background-image: radial-gradient(#Facc15 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 0;
        }

        .sol-decor-dots-r {
          position: absolute;
          top: 60px;
          right: -50px;
          width: 40px;
          height: 180px;
          background-image: radial-gradient(#Facc15 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 0;
        }

        .sol-woman-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Mobile for Solution Section ── */
        @media (max-width: 768px) {
          .sol-section {
            padding: 50px 16px;
          }
          .sol-header {
            margin-bottom: 40px;
          }
          .sol-title {
            font-size: 28px;
          }
          .sol-content {
            flex-direction: column;
            gap: 40px;
          }
          .sol-cards-grid {
            grid-template-columns: 1fr; /* Switch to 1 column on mobile to prevent squeezing */
            justify-items: center;
            gap: 20px;
          }
          .sol-card {
            width: 320px;
            max-width: 100%;
            height: 280px;
            box-sizing: border-box;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .sol-image-col {
            justify-content: center;
          }
          .sol-image-wrapper {
            width: 100%;
            margin-right: 0;
            max-width: 400px;
          }
        }

        /* ── Tablet for Solution Section ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .sol-content {
            flex-direction: column;
            gap: 50px;
          }
          .sol-image-wrapper {
            width: 80vw;
            margin-right: 0;
          }
          .sol-image-col {
            justify-content: center;
          }
        }

        /* ── Discover Section ── */
        .discover-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 24px;
          box-sizing: border-box;
        }

        .discover-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .discover-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 40px;
          color: #333333;
          margin: 0 0 20px 0;
          letter-spacing: -0.5px;
        }

        .discover-subtitle-blue {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #2974c9;
          margin: 0 0 20px 0;
        }

        .discover-subtitle-body {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #555555;
          margin: 0 0 48px 0;
        }

        .discover-filters {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 24px;
          width: 100%;
          flex-wrap: wrap;
        }

        .discover-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #ffffff;
          border: 1px solid #4a4a4a;
          border-radius: 6px;
          padding: 14px 20px;
          padding-right: 48px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #4a4a4a;
          width: 250px;
          cursor: pointer;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          transition: border-color 0.3s ease;
        }

        .discover-select:focus {
          outline: none;
          border-color: #2974c9;
        }

        /* Options hover styling (Note: Native browser support may vary) */
        .discover-select option {
          background-color: #ffffff;
          color: #4a4a4a;
          padding: 10px;
        }

        .discover-select option:hover,
        .discover-select option:focus,
        .discover-select option:checked {
          background-color: #D46A6A !important;
          color: #ffffff !important;
        }

        /* To enforce scrolling to show 6 items, we can try applying height restrictions natively */
        select.discover-select[size] {
          height: auto;
        }
        
        @media (max-width: 900px) {
          .discover-filters {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .discover-filters {
            flex-direction: column;
            gap: 16px;
          }
          .discover-select {
            width: 100%;
          }
          .discover-title {
            font-size: 32px;
          }
        }

        /* ── Job Simulation Cards Section ── */
        .sim-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          margin-top: 48px;
        }

        .sim-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease;
          border: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .sim-card:hover {
          transform: translateY(-6px) scale(1.035);
          box-shadow: 0 30px 50px -12px rgba(0, 0, 0, 0.15), 0 15px 25px -8px rgba(0, 0, 0, 0.1);
          border-color: rgba(0,0,0,0.1);
        }

        .sim-card:hover .sim-card-image {
          transform: scale(1.08);
        }

        .explore-btn-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 48px;
        }

        .explore-more-btn {
          background-color: #ce2c2e;
          color: #ffffff;
          border: none;
          box-shadow: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .explore-more-btn:hover {
          background-color: #b02425;
          transform: translateY(-2px);
          box-shadow: none;
        }

        .sim-card-image-wrap {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .sim-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sim-card-logo-box {
          position: absolute;
          bottom: 0;
          left: 16px;
          background: #ffffff;
          border-radius: 12px 12px 0 0;
          padding: 10px 16px;
          width: 140px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sim-card-logo-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .sim-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #ffffff;
        }

        .sim-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #1f2937;
          font-weight: 500;
          line-height: 1.5;
          margin: 0 0 20px 0;
          min-height: 72px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .sim-card-tags {
          margin-top: auto;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sim-tag-category {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #3b82f6;
        }

        .sim-tag-icon {
          width: 14px;
          height: 14px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 0.3s ease;
        }

        .sim-card:hover .sim-tag-icon {
          transform: rotate(12deg);
        }

        .sim-hiring-badge {
          background-color: #10b981;
          color: #ffffff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sim-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #f3f4f6;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #4b5563;
          font-weight: 500;
        }

        .sim-duration {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sim-clock-icon {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 1024px) {
          .sim-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .sim-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Banner Section ── */
        .jsim-banner {
          background-color: #1d97d4;
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .jsim-banner-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 60px 24px;
          position: relative;
        }

        .jsim-banner-text {
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          flex: 1;
        }

        .jsim-banner-text h2 {
          font-size: 40px;
          font-weight: 600;
          margin: 0 0 24px 0;
        }

        .jsim-banner-text p {
          font-size: 20px;
          margin: 0 0 16px 0;
        }

        .highlight-yellow,
        .highlight-yellow-link {
          color: #ffda29;
          font-weight: 500;
        }

        .highlight-yellow-link {
          text-decoration: underline;
        }

        .highlight-yellow-link:hover {
          color: #f0c918;
        }

        .jsim-banner-image-wrapper {
          position: absolute;
          right: -44px;
          top: 60px;
          bottom: 0;
          height: 100%;
          display: flex;
          align-items: flex-end;
          pointer-events: none; /* so text underneath is selectable */
        }

        .jsim-banner-img {
          width: auto;
          height: 125%; /* Pops out slightly above the top if needed */
          max-height: 400px;
          object-fit: contain;
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .jsim-banner-content {
            flex-direction: column;
            text-align: center;
            padding: 40px 24px 0 24px; /* padding top but 0 bottom for image */
          }
          .jsim-banner-image-wrapper {
            position: relative;
            right: 0;
            height: auto;
            margin-top: 30px;
          }
          .jsim-banner-img {
            max-height: 300px;
          }
        }

        /* ── Feature Rows Section ── */
        .jsim-feature-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .jsim-feature-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .jsim-feature-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .jsim-feature-row.reverse {
          flex-direction: row-reverse;
        }

        .jsim-feature-text {
          flex: 1;
        }

        .jsim-feature-text h2 {
          font-family: 'Inter', sans-serif;
          font-size: 36px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 24px;
        }

        .jsim-feature-text p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #555555;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .jsim-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .jsim-feature-list li {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #555555;
          line-height: 1.6;
          margin-bottom: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .jsim-feature-list li svg {
          flex-shrink: 0;
          margin-top: 4px; /* Align top of SVG with top of text */
        }

        .jsim-feature-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .jsim-feature-image img {
          width: 100%;
          max-width: 500px;
          border-radius: 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* Slight shadow for modern look */
          object-fit: cover;
        }

        /* Specific styles for images */
        .jsim-feature-image-1 img {
          border-radius: 0;
        }
        
        .jsim-feature-image-2 img {
          border-radius: 0;
          box-shadow: none;
        }

        @media (max-width: 900px) {
          .jsim-feature-row, .jsim-feature-row.reverse {
            flex-direction: column;
            gap: 40px;
          }
          .jsim-feature-image img {
            max-width: 100%;
          }
          .jsim-feature-container {
            gap: 60px;
          }
        }

        /* ── Bottom CTA Banner ── */
        .jsim-cta-banner {
          background-color: #8c0912;
          background: linear-gradient(135deg, #7c0a02 0%, #a61217 50%, #6b0700 100%);
          width: 100%;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
          position: relative;
        }

        .jsim-cta-text {
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .jsim-cta-btn {
          background-color: #f7a930;
          color: #1a1a1a;
          border: none;
          border-radius: 6px;
          padding: 14px 32px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          position: relative;
          z-index: 1;
        }

        .jsim-cta-btn:hover {
          background-color: #e59929;
          transform: translateY(-2px);
        }
      `}</style>

      <section className="jsim-section">

        {/* Wavy background image — positioned absolutely on the right */}
        <img
          src="/simulation/wavyImage.png"
          alt=""
          className="jsim-wavy"
          aria-hidden="true"
        />

        <div className="jsim-inner">

          {/* Title */}
          <ScrollReveal>
            <h1 className="jsim-heading">
              The Journey of Launching<br />Your Career
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={100}>
            <p className="jsim-description">
              In today’s competitive job market, experience isn’t just an advantage, it's a prerequisite. Yet, gaining meaningful, industry-relevant experience before your first job remains a challenge for many.<br/><br/>
              Skillzza’s AI-Powered Job Simulation Program eliminates that barrier, offering a transformative journey from classroom learning to real-world application. With our immersive, on-demand job simulations, you don’t just prepare for the workforce, you step directly into it.
            </p>
          </ScrollReveal>

          {/* Stat Cards */}
          <div className="jsim-cards-row">
            {stats.map((stat, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 150} 
                style={{ display: 'flex', flex: 1, minWidth: 0 }}
              >
                <div className={`jsim-card${stat.accent ? ' jsim-card-accent' : ''}`}>
                  <span className="jsim-stat-number"><AnimatedCounter value={stat.number} /></span>
                  <span className="jsim-stat-label">{stat.label}</span>
                  <p className="jsim-stat-desc">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── THE SOLUTION SECTION ── */}
      <section className="sol-section">
        {/* Absolute Background Map */}
        <img src="/simulation/grey world map.jpg" alt="" className="sol-map-bg" />

        <div className="sol-inner">
          {/* Header */}
          <ScrollReveal className="sol-header">
            <h2 className="sol-title">The Solution...</h2>
            <p className="sol-subtitle">
              Gain virtual professional experience in any industry through job simulation opportunities, bridging the gap between learning and real-world application anytime, anywhere.
            </p>
          </ScrollReveal>

          {/* Two Columns Content */}
          <div className="sol-content">
            {/* Left: Cards Grid */}
            <div className="sol-cards-grid">
              {solutionCards.map((card, index) => (
                <ScrollReveal key={index} delay={index * 100} className="sol-card">
                  <h3 className="sol-card-title">{card.title}</h3>
                  <p className="sol-card-desc">{card.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Right: Woman Image & Decorations */}
            <div className="sol-image-col">
              <ScrollReveal delay={300} className="sol-image-wrapper">
                {/* Decorative Elements */}
                <div className="sol-decor-tl"></div>
                <div className="sol-decor-dots-l"></div>
                <div className="sol-decor-dots-r"></div>
                <div className="sol-decor-br"></div>
                
                {/* Main Image */}
                <img 
                  src="/simulation/women.avif" 
                  alt="Woman with laptop" 
                  className="sol-woman-img" 
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVER THE JOB SIMULATIONS SECTION ── */}
      <section className="discover-section">
        <div className="discover-inner">
          <ScrollReveal>
            <h2 className="discover-title">Discover the Job Simulations</h2>
            <p className="discover-subtitle-blue">Identify the perfect Job Simulation for you</p>
            <p className="discover-subtitle-body">All Job Simulations are thoughtfully curated, allowing you to navigate them at your own pace.</p>
          </ScrollReveal>

          <ScrollReveal delay={150} className="discover-filters">
            <select className="discover-select">
              <optgroup label="CAREER FIELDS">
                <option value="ai-data">AI & Data</option>
                <option value="banking">Banking</option>
                <option value="sustainability">Sustainability & Climate Action</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="consulting">Consulting</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="marketing">Marketing</option>
                <option value="security">Security</option>
                <option value="technology">Technology</option>
                <option value="quantum">Quantum</option>
                <option value="law">Law</option>
              </optgroup>
            </select>
            <select className="discover-select" defaultValue="microsoft">
              <optgroup label="COMPANIES">
                <option value="appsolutely-ai">Appsolutely.ai</option>
                <option value="builder-ai">Builder.AI</option>
                <option value="ai-lifebot">AI LifeBOT</option>
                <option value="suflex-media">Suflex media</option>
                <option value="greengold-animation">GreenGold Animation</option>
                <option value="sustainnovate-solution">Sustainnovate solution</option>
                <option value="google">Google</option>
                <option value="midland-microfinance">Midland Microfinance</option>
                <option value="edgespark-it-ventures">Edgespark IT Ventures</option>
                <option value="adobe">Adobe</option>
                <option value="meta">Meta</option>
                <option value="grus-grade">Grus & Grade</option>
                <option value="figma-adobe">Figma/Adobe</option>
                <option value="ey">EY</option>
                <option value="ola">Ola</option>
                <option value="fox-mandals">Fox mandals</option>
                <option value="cxo-techbot">CXO TechBot</option>
                <option value="jaquar">Jaquar</option>
                <option value="microsoft">Microsoft</option>
                <option value="varnaaz-technologies">Varnaaz Technologies</option>
                <option value="sanjay">Sanjay</option>
                <option value="opswat">OPSWAT</option>
                <option value="palo-alto-networks">Palo Alto Networks</option>
                <option value="redhat">Redhat</option>
                <option value="vmware">Vmware</option>
                <option value="aws">AWS</option>
                <option value="newgen-software">Newgen Software</option>
                <option value="twinzo">twinzo</option>
              </optgroup>
            </select>
            <select className="discover-select" defaultValue="beginner">
              <optgroup label="DIFFICULTY">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </optgroup>
            </select>
          </ScrollReveal>

          {/* Job Simulation Cards */}
          <div className="sim-cards-grid">
            {visibleCards.map((card, index) => (
              <ScrollReveal key={index} delay={(index % 4) * 100} className="sim-card">
                <div className="sim-card-image-wrap">
                  <img src={card.image} alt={card.title} className="sim-card-image" />
                  <div className="sim-card-logo-box">
                    <img src={card.logo} alt="Company logo" />
                  </div>
                </div>
                <div className="sim-card-body">
                  <h3 className="sim-card-title">{card.title}</h3>
                  <div className="sim-card-tags">
                    <span className="sim-tag-category">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sim-tag-icon">
                        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                        <path d="M7 7h.01"></path>
                      </svg>
                      {card.category}
                    </span>
                    {card.hiring && (
                      <span className="sim-hiring-badge">HIRING NOW</span>
                    )}
                  </div>
                  <div className="sim-card-footer">
                    <span className="sim-level">{card.level}</span>
                    <span className="sim-duration">
                      <svg className="sim-clock-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {card.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="explore-btn-container">
            <button 
              className="explore-more-btn" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Explore Less' : 'Explore More'}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BANNER SECTION ── */}
      <section className="jsim-banner">
        <ScrollReveal className="jsim-banner-content">
          <div className="jsim-banner-text">
            <h2>Ready to Accelerate Your Career?</h2>
            <p>Let Our <span className="highlight-yellow">AI career assistant</span>  help you identify the best simulation to match your aspirations.</p>
            <p>Just one click can move you one step closer to a future-ready profession.</p>
          </div>
          <div className="jsim-banner-image-wrapper">
            <img src="/simulation/HappyMan.png" alt="Happy Man" className="jsim-banner-img" />
          </div>
        </ScrollReveal>
      </section>

      {/* ── SHOWCASE & APART SECTION ── */}
      <section className="jsim-feature-section">
        <div className="jsim-feature-container">
          
          {/* Row 1: Text Left, Image Right */}
          <ScrollReveal className="jsim-feature-row">
            <div className="jsim-feature-text">
              <h2>Showcase your expertise</h2>
              <p style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '500', color: '#333' }}>Job simulations empower you to</p>
              <ul className="jsim-feature-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Execute real industry tasks in a risk-free environment</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Develop practical, transferable skills that employers demand</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Earn industry-recognized certifications aligned with global standards</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Add weight to your resume and professional portfolio</span>
                </li>
              </ul>
            </div>
            <div className="jsim-feature-image jsim-feature-image-1">
              <img src="https://skillzza.com/assets/img/showcaseyourexpertise.jpg" alt="Showcase expertise" />
            </div>
          </ScrollReveal>

          {/* Row 2: Image Left, Text Right (reverse) */}
          <ScrollReveal className="jsim-feature-row reverse">
            <div className="jsim-feature-text">
              <h2>What Makes Skillzza Stand Out</h2>
              <ul className="jsim-feature-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Engage with insightful video briefings and deep-dive resources curated by industry veterans</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Learn directly from seasoned professionals through step-by-step guidance</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Earn certifications that validate your proficiency and prepare you for global opportunities</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Join a talent network of future-focused learners and employers looking for next-gen professionals</span>
                </li>
              </ul>
            </div>
            <div className="jsim-feature-image jsim-feature-image-2">
              <img src="https://skillzza.com/assets/img/hereHowitiswork.jpg" alt="Here's what sets us apart" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── BOTTOM CTA BANNER ── */}
      <section className="jsim-cta-banner">
        <ScrollReveal className="jsim-cta-text">
          Join Skillzza And Transcend Traditional Learning <br />Start your simulation today. Step confidently into the future with skills that matter.
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <button className="jsim-cta-btn">
            Get Started Now!
          </button>
        </ScrollReveal>
      </section>
    </>
  )
}

export default JobSimulationPage
