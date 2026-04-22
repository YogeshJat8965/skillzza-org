const podcastImagePool = [
  'https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
]

const baseEpisodes = [
  {
    slug: '3r-talks-raw-real-revolutionary',
    title: '3R Talks: Raw, Real & Revolutionary',
    subtitle: 'Bold conversations shaping the future of skills.',
    category: 'The Skill Unplugged Series',
  },
  {
    slug: 'agentic-ai-mindshift-moment',
    title: 'Agentic AI: The Mindshift Moment',
    subtitle: 'How autonomous AI is redefining industries and leadership.',
    category: 'The Skill Unplugged Series',
  },
  {
    slug: 'ai-at-work-new-normal',
    title: 'AI at Work: Navigating the New Normal',
    subtitle: 'Human-AI collaboration and workplace reinvention.',
    category: 'The Skill Unplugged Series',
  },
  {
    slug: 'future-of-work-jobs-to-journeys',
    title: 'The Future of Work: From Jobs to Journeys',
    subtitle: 'Embracing fluid careers and lifelong learning.',
    category: 'The Skill Unplugged Series',
  },
  {
    slug: 'from-coders-to-architects',
    title: 'From Coders to Architects',
    subtitle: 'The evolution of developers into system designers.',
    category: 'Tech Roles & Transformation',
  },
  {
    slug: 'rise-of-vibe-coding',
    title: 'The Rise of Vibe Coding',
    subtitle: 'Beyond syntax: how intuition and creativity drive coding.',
    category: 'Tech Roles & Transformation',
  },
  {
    slug: 'generative-ai-creativity',
    title: 'Generative AI & Creativity',
    subtitle: 'Reinventing storytelling, design, and content creation.',
    category: 'Tech Roles & Transformation',
  },
  {
    slug: 'cybersecurity-in-ai-era',
    title: 'Cybersecurity in the AI Era',
    subtitle: 'New threats, new defenses, and the rise of AI-first security.',
    category: 'Tech Roles & Transformation',
  },
  {
    slug: 'ai-legal-frontier',
    title: 'AI & the Legal Frontier',
    subtitle: 'Automation, contracts, and the courtroom of the future.',
    category: 'AI & Professions Disrupted',
  },
  {
    slug: 'healthcare-transformed-by-ai',
    title: 'Healthcare Transformed by AI',
    subtitle: 'Precision care, predictive analytics, and patient trust.',
    category: 'AI & Professions Disrupted',
  },
  {
    slug: 'education-reimagined',
    title: 'Education Reimagined',
    subtitle: 'Personalized learning powered by AI tutors and copilots.',
    category: 'AI & Professions Disrupted',
  },
  {
    slug: 'finance-recruitment-ai-age',
    title: 'Finance & Recruitment in the AI Age',
    subtitle: 'Smarter hiring, augmented decision-making, and ethical dilemmas.',
    category: 'AI & Professions Disrupted',
  },
  {
    slug: 'women-in-ai-and-tech',
    title: 'Women in AI & Tech',
    subtitle: 'Closing the gender gap and amplifying diverse voices.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'ai-mental-health',
    title: 'AI & Mental Health',
    subtitle: 'Balancing opportunity with emotional well-being.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'ai-climate-action',
    title: 'AI & Climate Action',
    subtitle: 'Harnessing intelligence to fight the climate crisis.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'ethical-ai-beyond-compliance',
    title: 'Ethical AI: Beyond Compliance',
    subtitle: 'Responsible innovation as a competitive edge.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'ai-data-privacy',
    title: 'AI & Data Privacy',
    subtitle: 'Navigating trust, security, and regulation.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'government-ai-regulation',
    title: 'Government & AI Regulation',
    subtitle: 'Balancing innovation with public good.',
    category: 'Societal Shifts & Ethics',
  },
  {
    slug: 'intersection-of-ai-and-art',
    title: 'The Intersection of AI & Art',
    subtitle: 'Exploring machine imagination and human expression.',
    category: 'Culture, Creativity & Human Impact',
  },
  {
    slug: 'gig-economy-and-ai',
    title: 'The Gig Economy & AI',
    subtitle: 'How freelancers and platforms evolve together.',
    category: 'Culture, Creativity & Human Impact',
  },
  {
    slug: 'building-ai-literacy',
    title: 'Building AI Literacy',
    subtitle: 'The must-have skills for tomorrow\'s workforce.',
    category: 'Culture, Creativity & Human Impact',
  },
]

export const skillUnpluggedEpisodes = baseEpisodes.map((episode, index) => ({
  id: index + 1,
  tag: 'PODCAST',
  image: podcastImagePool[index % podcastImagePool.length],
  desc: episode.subtitle,
  ...episode,
}))

export const skillUnpluggedEpisodesBySlug = skillUnpluggedEpisodes.reduce((acc, episode) => {
  acc[episode.slug] = episode
  return acc
}, {})
