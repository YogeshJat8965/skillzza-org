const liveImagePool = [
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
]

const baseLiveSessions = [
  {
    slug: 'building-your-first-ai-model',
    title: 'Live Workshop: Building Your First AI Model (No-Code to Pro-Code)',
    subtitle: 'Build practical model skills from beginner-friendly tools to pro-level implementation flows.',
    category: 'AI Fundamentals & Hands-on Skills',
  },
  {
    slug: 'machine-learning-basics-in-action',
    title: 'Interactive Tutorial: Machine Learning Basics in Action',
    subtitle: 'Core ML concepts explained through guided, real-time experimentation.',
    category: 'AI Fundamentals & Hands-on Skills',
  },
  {
    slug: 'prompt-engineering-patterns',
    title: 'Skill-Building Session: Prompt Engineering & AI Prompt Patterns',
    subtitle: 'Design robust prompts and reusable patterns for consistent AI outcomes.',
    category: 'AI Fundamentals & Hands-on Skills',
  },
  {
    slug: 'live-coding-ai-chatbot',
    title: 'Live Coding Lab: Developing Your Own AI Chatbot',
    subtitle: 'Build, test, and iterate a deployable chatbot experience in a guided lab.',
    category: 'AI Fundamentals & Hands-on Skills',
  },
  {
    slug: 'data-visualization-storytelling-ai',
    title: 'Workshop: Data Visualization & Storytelling with AI Tools',
    subtitle: 'Turn raw data into clear, persuasive narratives using modern AI tooling.',
    category: 'AI Fundamentals & Hands-on Skills',
  },
  {
    slug: 'ethical-dilemmas-in-ai',
    title: 'Interactive Session: Ethical Dilemmas in AI - What Would You Do?',
    subtitle: 'Explore high-impact AI decisions through scenario-based ethical trade-offs.',
    category: 'Ethics, Governance & Responsible AI',
  },
  {
    slug: 'implementing-ai-ethics-in-business',
    title: 'Workshop: Implementing AI Ethics in Business Practices',
    subtitle: 'Translate responsible AI principles into operating processes and governance playbooks.',
    category: 'Ethics, Governance & Responsible AI',
  },
  {
    slug: 'ai-decision-making-real-time-simulation',
    title: 'Simulation: AI Decision-Making in Real-Time Scenarios',
    subtitle: 'Stress-test AI judgment across dynamic, high-pressure business contexts.',
    category: 'Ethics, Governance & Responsible AI',
  },
  {
    slug: 'ai-vs-human-intelligence-debate',
    title: 'Interactive Debate: AI vs. Human Intelligence - Who Wins?',
    subtitle: 'A structured debate on where AI leads, where humans lead, and where collaboration wins.',
    category: 'Ethics, Governance & Responsible AI',
  },
  {
    slug: 'future-of-jobs-ai-driven-world',
    title: 'Panel: The Future of Jobs in an AI-Driven World',
    subtitle: 'Decode role shifts, emerging careers, and the new capability stack for work.',
    category: 'AI Across Industries',
  },
  {
    slug: 'ai-supply-chain-optimization-logistics',
    title: 'Case Study: AI in Supply Chain Optimization & Logistics',
    subtitle: 'How AI improves demand forecasting, routing, resilience, and fulfillment speed.',
    category: 'AI Across Industries',
  },
  {
    slug: 'ai-financial-services-risk-management',
    title: 'Interactive Session: AI in Financial Services & Risk Management',
    subtitle: 'Use AI for fraud detection, risk scoring, and decision augmentation in finance.',
    category: 'AI Across Industries',
  },
  {
    slug: 'ai-healthcare-diagnostics-predictive-care',
    title: 'Live Demo: AI in Healthcare Diagnostics & Predictive Care',
    subtitle: 'Real-world demonstrations of AI-assisted diagnostics and early intervention models.',
    category: 'AI Across Industries',
  },
  {
    slug: 'ai-marketing-sales-customer-engagement',
    title: 'Workshop: AI in Marketing, Sales & Customer Engagement',
    subtitle: 'Build AI-driven campaigns and customer journeys with measurable business impact.',
    category: 'AI Across Industries',
  },
  {
    slug: 'ai-future-of-education-ecosystems',
    title: 'Panel: AI and the Future of Education & Learning Ecosystems',
    subtitle: 'Rethink education models, learner pathways, and institutional design in the AI era.',
    category: 'AI Across Industries',
  },
  {
    slug: 'navigating-ai-in-the-workplace',
    title: 'Role-Playing Exercise: Navigating AI in the Workplace',
    subtitle: 'Practice human-AI collaboration decisions through role-based workplace simulations.',
    category: 'Immersive & Experiential Learning',
  },
  {
    slug: 'successful-ai-implementations-worldwide',
    title: 'Case Study Analysis: Successful AI Implementations Worldwide',
    subtitle: 'Analyze global case studies to identify repeatable AI transformation patterns.',
    category: 'Immersive & Experiential Learning',
  },
  {
    slug: 'hackathon-ai-for-social-good',
    title: 'Hackathon: Developing AI Solutions for Social Good',
    subtitle: 'Co-create impact-first AI prototypes for sustainability and social challenges.',
    category: 'Immersive & Experiential Learning',
  },
  {
    slug: 'designing-human-centric-ai-interfaces',
    title: 'Workshop: Designing Human-Centric AI Interfaces',
    subtitle: 'Design trustworthy, intuitive interfaces that keep human intent at the center.',
    category: 'Immersive & Experiential Learning',
  },
  {
    slug: 'ai-tools-for-everyday-productivity',
    title: 'Live Demo: AI-Powered Tools for Everyday Productivity',
    subtitle: 'Hands-on workflows to accelerate writing, analysis, planning, and execution.',
    category: 'Future-Oriented & Cutting-Edge Topics',
  },
  {
    slug: 'generative-ai-creativity-content-innovation',
    title: 'Workshop: Generative AI for Creativity & Content Innovation',
    subtitle: 'Scale ideation and content production while maintaining originality and voice.',
    category: 'Future-Oriented & Cutting-Edge Topics',
  },
  {
    slug: 'ai-climate-action-sustainability-masterclass',
    title: 'Interactive Masterclass: AI in Climate Action & Sustainability',
    subtitle: 'Apply AI to emissions intelligence, resource optimization, and climate adaptation.',
    category: 'Future-Oriented & Cutting-Edge Topics',
  },
  {
    slug: 'rise-of-agentic-ai-autonomous-systems',
    title: 'Fireside Chat: The Rise of Agentic AI & Autonomous Systems',
    subtitle: 'Understand the strategic implications of autonomous AI for teams and enterprises.',
    category: 'Future-Oriented & Cutting-Edge Topics',
  },
]

export const skillzzaLiveSessions = baseLiveSessions.map((session, index) => ({
  id: index + 1,
  tag: 'SKILLZZA LIVE',
  image: liveImagePool[index % liveImagePool.length],
  desc: session.subtitle,
  ...session,
}))

export const skillzzaLiveSessionsBySlug = skillzzaLiveSessions.reduce((acc, session) => {
  acc[session.slug] = session
  return acc
}, {})
