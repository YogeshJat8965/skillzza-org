import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCrosshairs, FaCogs, FaRocket, FaTrophy } from 'react-icons/fa';

const platformFeaturesData = [
  {
    id: 1,
    title: 'Xperience Platform',
    tagline: 'Simulate. Solve. Showcase.',
    description: 'Step into virtual job roles through immersive simulations that mirror real industry challenges.',
    points: [
      'Role-based job simulations rooted in real-world challenges',
      'Practical, challenge-based learning to develop problem-solving skills',
      'Digital, verifiable portfolios aligned with employer expectations',
      'Sharpened workplace readiness through applied learning',
    ],
    cta: ['Know more...'],
    image: '/platformslide1.png'
  },
  {
    id: 2,
    title: 'The Potential Meter',
    tagline: 'Discover Strengths. Define Direction.',
    description: 'Unlock your professional blueprint with our AI-powered assessment engine that maps your complete skill landscape.',
    points: [
      'Intelligent assessments of cognitive, technical, and behavioral skills',
      'Simulation-driven evaluation of workplace attitudes and responses',
      'Personalized career pathway recommendations',
      'Data-driven mentoring insights powered by our proprietary 4M framework',
    ],
    cta: ['Know more...'],
    image: '/unlock_your_potential.jpg'
  },
  {
    id: 3,
    title: 'Talent Transformation',
    tagline: 'Power Smarter Workforce Decisions with 360° Talent Intelligence.',
    description: 'Transform how your organization develops, deploys, and discovers talent through comprehensive data insights.',
    points: [
      'Complete workforce skill mapping and gap analysis',
      'Role-specific upskilling pathways aligned with business needs',
      'Predictive talent analytics for succession planning',
      'Behavioral intelligence matching for optimal team performance',
      'Real-time dashboard for HR and L&D decision-making',
    ],
    cta: ['Know more...'],
    image: '/transformskill_futureset.png'
  },
  {
    id: 4,
    title: 'AI HackNex',
    tagline: 'Innovate, Compete, and Get Discovered.',
    description: 'Compete in high-stakes innovation challenges that put your skills on the global stage.',
    points: [
      'Participate in global AI challenges and themed innovation sprints',
      'Tackle real-world problems from enterprise and public sectors',
      'Earn recognition from institutions, industry leaders, and peers',
      'Showcase your AI, data, and coding skills on leading platforms',
    ],
    cta: ['Know more...'],
    image: '/step_slide_img.jpg'
  },
  {
    id: 5,
    title: 'Hirenest',
    tagline: 'Smarter Hiring. Verified Talent. Zero Guesswork.',
    description: 'An intelligent hiring solution that connects companies with a pool of pre-assessed, job-ready candidates.',
    points: [
      'Access to vetted pool of skill-verified candidate pools',
      'Reduced hiring time and improved retention rates',
      'Live portfolio visibility and performance metrics',
      'AI-powered matching that eliminates guesswork',
    ],
    cta: ['Know more...'],
    image: '/insight_roles.jpg'
  },
];

const cardVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: -300, opacity: 0, transition: { duration: 0.3 } }
};


export default function Home() {
  const [activeTab, setActiveTab] = useState(platformFeaturesData[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = platformFeaturesData.findIndex(tab => tab.id === activeTab.id);
      const nextIndex = (currentIndex + 1) % platformFeaturesData.length;
      setActiveTab(platformFeaturesData[nextIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);


  return (
    <>
      {/* ===== Hero Section ===== */}
      <section
        className="text-white py-24 relative overflow-hidden bg-no-repeat flex items-center"
        style={{
          backgroundImage: "url('/banner_1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: '700px',
        }}
      >
        <div className="absolute inset-0  opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="w-full md:w-2/3 lg:w-1/2 text-left">
            <h1 className="text-4xl text-yellow-400 md:text-5xl font-bold leading-tight mb-4">
              The AI-Powered Career Engine<br/> for Tomorrow's Talent…
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light">
              <b>From Learning to Hiring: An End-to-End Career Intelligence Platform.</b>
            </p>
            <p className="text-md text-gray-200 mb-10 max-w-xl">
              Our AI-driven platform transforms raw potential into market-ready expertise, connecting learners directly with opportunities through intelligent skill matching.
            </p>
          </div>
          <div className="w-full max-w-3xl mt-8">
            <div className="bg-black bg-opacity-25 backdrop-blur-md p-6 rounded-xl border border-white/20">
              {/* ===== UPDATED LAYOUT FOR SINGLE LINE ===== */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                  <FaCrosshairs className="text-yellow-400 text-xl" />
                  <span className="font-medium">Discover your strengths</span>
                </div>
                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                  <FaCogs className="text-yellow-400 text-xl" />
                  <span className="font-medium">Develop skills</span>
                </div>
                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                  <FaRocket className="text-yellow-400 text-xl" />
                  <span className="font-medium">Deploy your talents</span>
                </div>
                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                  <FaTrophy className="text-yellow-400 text-xl" />
                  <span className="font-medium">Deliver results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
            <div className="md:w-1/3">
              <img src="/skillzza-logo.png" alt="Skillzza Logo" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Skillzza</h2>
              <div className="h-1 w-16 bg-red-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-4">
                Skillzza is a future-ready career transformation platform designed to bridge the global education-to-employment divide. Through adaptive assessments, role-based simulations, and AI-powered hiring, we ensure that individuals and organizations are not just skilled, but aligned with the dynamic demands of the modern workforce.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our ecosystem supports the entire talent lifecycle from career discovery and skill development to job ready empowering learners, professionals, and enterprises alike.
              </p>
              <p className="text-lg text-gray-600">
                With a strong focus on Tier 2 and Tier 3 cities, and a deep commitment to the UN Sustainable Development Goals, Skillzza is creating inclusive, intelligence-driven pathways to global opportunities and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== The Challenge Section ===== */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <img src="/learnimgwith.png" alt="Skill Gap concept" className="w-full h-auto rounded-xl" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xs font-bold uppercase text-red-500 mb-2 tracking-widest">THE CHALLENGE</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Widening Skill Gap</h2>
              <p className="text-lg text-gray-600 mb-6">
                As industries undergo rapid transformation, the gap between the skills employers demand and those available in the workforce is expanding. This widening disparity not only impedes career progress and curtails opportunities but also creates significant obstacles for countless individuals worldwide. Without the right skills, many find themselves struggling to keep pace with the relentless evolution of the job market.
            	</p>
          	</div>
        	</div>
      	</div>
    	</section>

    	{/* ===== Our Solution & Platform Features Section ===== */}
    	<section className="bg-gray-50 py-24">
    	  <div className="container mx-auto px-6">
    	    <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-20">
    	      <div className="md:w-1/2">
    	        <h3 className="text-sm font-bold uppercase text-red-600 mb-2 tracking-widest">
    	          OUR SOLUTION
    	        </h3>
    	        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    	          A 360 Degree Skill Development Framework
    	        </h2>
    	        <p className="text-lg text-gray-600 mb-6">
    	          At Skillzza, we offer a revolutionary <b>360-Degree Skill Development 4M Framework</b> designed to empower individuals and organisations through a holistic approach to learning and growth.
    	        </p>
    	        <p className="text-lg text-gray-600">
    	          Our solution integrates advanced technology with personalised support to provide a comprehensive skill-building experience that addresses every aspect of career development.
    	        </p>
    	      </div>
    	      <div className="md:w-1/2 flex justify-center">
    	        <img src="/oursolution_img.png" alt="360 Degree Framework" className="w-full max-w-lg" />
    	      </div>
    	    </div>

    	    <div className="text-center mb-12">
    	       <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Platform Features</h2>
    	    </div>

    	    <div className="flex flex-wrap justify-center gap-4 mb-8">
    	      {platformFeaturesData.map((tab) => (
    	        <button
    	          key={tab.id}
    	          onClick={() => setActiveTab(tab)}
    	          className={`py-3 px-6 rounded-lg font-semibold transition-colors duration-300 shadow-sm ${
    	            activeTab.id === tab.id
    	              ? 'bg-red-600 text-white'
    	              : 'bg-white text-gray-700 hover:bg-gray-200'
    	          }`}
    	        >
    	          {tab.title}
    	        </button>
    	      ))}
    	    </div>

    	    <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
    	      <AnimatePresence mode="wait">
    	        <motion.div
    	          key={activeTab.id}
    	          variants={cardVariants}
    	          initial="hidden"
    	          animate="visible"
    	          exit="exit"
    	        >
    	          <div className="flex flex-col md:flex-row items-center gap-12 md:h-[600px]">
    	            <div className="md:w-1/2 flex flex-col h-full">
    	              <div className="flex-grow">
    	                <h3 className="text-xl font-bold text-red-600 mb-2">{activeTab.title}</h3>
    	                <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{activeTab.tagline}</h4>
    	                <div className="h-1 w-16 bg-red-200 mb-6"></div>
    	                <p className="text-gray-600 mb-6">{activeTab.description}</p>
    	                <ul className="space-y-3 text-gray-600">
    	                  {activeTab.points.map((point, index) => (
    	                    <li key={index} className="flex items-start">
    	                      <span className="text-red-500 mr-3 mt-1">&#10003;</span>
    	                      {point}
    	                    </li>
    	                  ))}
    	                </ul>
    	              </div>
    	              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
    	                {activeTab.cta.map((text, index) => (
    	                  <button key={index} className="text-red-600 font-semibold hover:text-red-800 transition-colors">
    	                    {text} &rarr;
    	                  </button>
    	                ))}
    	              </div>
    	            </div>
    	            <div className="md:w-1/2 flex justify-center items-center">
    	              <div className="w-full h-[450px] border-2 border-gray-200 rounded-lg overflow-hidden flex justify-center items-center bg-white">
    	                <img
    	                  src={activeTab.image}
    	                  alt={activeTab.title}
    	                  className="w-full h-full object-cover"
    	                />
    	              </div>
    	            </div>
    	          </div>
    	        </motion.div>
    	      </AnimatePresence>
    	    </div>
    	  </div>
  	</section>

  	{/* ===== The Collaboration Section ===== */}
  	<section className="bg-white py-24">
  	  <div className="container mx-auto px-6">
  	    <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
  	      <div className="lg:w-1/2 text-center lg:text-left">
  	        <h3 className="text-sm font-bold uppercase text-gray-500 mb-2 tracking-widest">
  	          THE COLLABORATION
  	        </h3>
  	        <div className="h-1 w-16 bg-red-600 mx-auto lg:mx-0 mb-6"></div>
  	        <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
  	          Partnerships For Impact
  	        </h2>
  	        <p className="text-lg text-gray-600 max-w-lg lg:max-w-none mx-auto lg:mx-0">
  	          At Skillzza, we believe that collaboration is the cornerstone of impactful change. By joining forces, we aim to bridge skill gaps and create a future-ready workforce. Together, we can shape a world where education and skills are accessible to all, fostering innovation and sustainable growth.
  	        </p>
  	      </div>
  	      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
  	        <div className="bg-red-600 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
  	          <img src="/scholluniversity.png" alt="Schools / Universities Icon" className="w-16 h-16 mb-4" />
  	          <h3 className="text-lg font-bold text-white">Schools / Universities</h3>
  	          <p className="text-sm text-white mt-2">Partnering to Cultivate the Next Generation of Leaders</p>
  	        </div>
  	        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
  	          <img src="/corporate.png" alt="Corporates Icon" className="w-16 h-16 mb-4" />
  	          <h3 className="text-lg font-bold text-gray-800">Corporates</h3>
  	          <p className="text-sm text-gray-500 mt-2">Driving Business Success through Workforce Excellence</p>
  	        </div>
  	        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
  	          <img src="/government.png" alt="Government Icon" className="w-16 h-16 mb-4" />
  	          <h3 className="text-lg font-bold text-gray-800">Government</h3>
  	          <p className="text-sm text-gray-500 mt-2">Building a Skilled Workforce for a Stronger Economy</p>
  	        </div>
  	        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
  	          <img src="/becomepartner.png" alt="Upskilling Partner Icon" className="w-16 h-16 mb-4" />
    	          <h3 className="text-lg font-bold text-gray-800">Become our upskilling partner</h3>
  	          <p className="text-sm text-gray-500 mt-2">Join Us in Shaping the Future of Work</p>
  	        </div>
  	      </div>
  	    </div>
  	  </div>
  	</section>

  	{/* ===== Partner with Us Section ===== */}
  	<section
  	  className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center"
  	  style={{ backgroundImage: "url('/partnerwithbg.png')" }}
  	>
  	  <div className="container mx-auto px-6 relative z-10">
  	    <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
  	      <div className="md:w-1/2 text-center md:text-left">
  	        <h2 className="text-4xl md:text-5xl text-gray-800 font-bold leading-tight mb-6">
  	          Partner with us <br /> To make a Difference
  	        </h2>
  	        <p className="text-lg md:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
  	          Connect with our industry experts for a personalised consultation. Let’s explore how our solutions can revolutionise your growth.
  	        </p>
  	      </div>
  	      <div className="md:w-1/2 w-full max-w-md bg-white p-8 md:p-10 rounded-lg shadow-2xl text-gray-800">
  	        <form className="space-y-6">
  	          <input type="text" placeholder="Name*" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
  	          <input type="email" placeholder="Email*" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
  	          <div className="flex items-center space-x-4">
  	            <select className="flex-shrink-0 p-4 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600">
  	              <option>India +91</option>
  	            </select>
  	            <input type="tel" placeholder="Mobile Number*" className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" />
  	          </div>
  	          <button type="submit" className="w-full bg-black text-white py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-colors">
  	            Get Started
  	          </button>
  	        </form>
  	      </div>
  	    </div>
  	  </div>
  	</section>

  	{/* ===== Our Partners Section ===== */}
  	<section className="bg-white py-24">
  	  <div className="container mx-auto px-6 text-center">
  	    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
  	    <p className="text-lg text-gray-600 mb-12">Take your skill transformation to the next level.</p>
  	    <div className="relative w-full overflow-hidden">
  	      <div className="flex w-[200%] animate-slide-logos gap-8">
  	        <div className="flex items-center gap-8">
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/redhat_logo.jpeg" alt="Red Hat" className="h-10 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/Google_logo.svg.png" alt="Google" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/greengold_animation_logo.png" alt="Green Gold" className="h-16 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/MidlandMicroFinance_logo.png" alt="Midland" className="h-16 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/meta_logo.png" alt="Meta" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/ai_lifebot_logo.jpeg" alt="AI LifeBot" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/microsoft_logo.png" alt="Microsoft" className="h-12 w-auto" /></div>
  	        </div>
  	        <div className="flex items-center gap-8">
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/redhat_logo.jpeg" alt="Red Hat" className="h-10 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/Google_logo.svg.png" alt="Google" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/greengold_animation_logo.png" alt="Green Gold" className="h-16 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/MidlandMicroFinance_logo.png" alt="Midland" className="h-16 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/meta_logo.png" alt="Meta" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/ai_lifebot_logo.jpeg" alt="AI LifeBot" className="h-12 w-auto" /></div>
  	          <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src="/microsoft_logo.png" alt="Microsoft" className="h-12 w-auto" /></div>
  	        </div>
  	      </div>
  	    </div>
  	  </div>
  	</section>

  	{/* ===== The Skillzza Digest Section ===== */}
  	<section className="bg-gray-50 py-20">
  	  <div className="container mx-auto px-6 text-center">
  	    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">The Skillzza Digest</h2>
  	    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  	      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
  	        <img src="/startYourjourney_tile_img.jpeg" alt="Blog" className="w-full h-48 object-cover flex-shrink-0" />
  	        <div className="p-6 text-left flex flex-col flex-grow">
  	          <div className="flex-grow">
  	            <h3 className="text-lg font-bold text-gray-800 mb-2">The Skill Digest</h3>
  	            <p className="text-sm text-gray-600">From new program launches to thought leadership, our blog keeps you updated.</p>
  	          </div>
  	        </div>
  	      </div>
  	      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
  	        <img src="/upskilling_forAi_tile_img.jpeg" alt="Research Hub" className="w-full h-48 object-cover flex-shrink-0" />
  	        <div className="p-6 text-left flex flex-col flex-grow">
  	          <div className="flex-grow">
  	            <h3 className="text-lg font-bold text-gray-800 mb-2">Research Hub</h3>
  	            <p className="text-sm text-gray-600">Our research reveals what’s driving the change. Dive into expert reports and case studies.</p>
  	          </div>
  	        </div>
  	      </div>
  	      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
  	        <img src="/UnlockingSkillsIntelligenceSuccessTodayWorld.jpeg" alt="The Skill Blueprint" className="w-full h-48 object-cover flex-shrink-0" />
  	        <div className="p-6 text-left flex flex-col flex-grow">
  	          <div className="flex-grow">
  	            <h3 className="text-lg font-bold text-gray-800 mb-2">The Skill Blueprint</h3>
  	            <p className="text-sm text-gray-600">Discover how AI-crafted learning journeys can prepare you for tomorrow’s industries.</p>
  	          </div>
  	        </div>
  	      </div>
  	      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
  	        <img src="/TalentintheDigitalEraNavigatingtheFutureWork.jpeg" alt="Podcast" className="w-full h-48 object-cover flex-shrink-0" />
  	        <div className="p-6 text-left flex flex-col flex-grow">
  	          <div className="flex-grow">
  	            <h3 className="text-lg font-bold text-gray-800 mb-2">Podcast</h3>
  	            <p className="text-sm text-gray-600">Tune in to The Skillzza Talks where leaders unpack the skills reshaping careers.</p>
  	          </div>
  	        </div>
  	      </div>
  	    </div>
  	  </div>
  	</section>
   </>
  );
}