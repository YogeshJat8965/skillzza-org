import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { FaCrosshairs, FaCogs, FaRocket, FaTrophy, FaUserGraduate, FaUniversity, FaBuilding, FaGlobeAmericas } from 'react-icons/fa';
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

const platformFeaturesData = [
    {
        id: 1,
        title: 'The Potential Meter',
        tagline: 'Discover Strengths. Define Direction.',
        description: 'Unlock your professional blueprint with our AI-powered assessment engine that maps your complete skill landscape.',
        points: [
            'Intelligent assessments of cognitive, technical, and behavioral skills',
            'Simulation-driven evaluation of workplace attitudes and responses',
            'Personalized career pathway recommendations',
            'Data-driven mentoring insights powered by our proprietary 4M framework',
        ],
        cta: ['Discover Your Potential', 'Get Your Skill Report'],
        image: getAssetPath('/unlock_your_potential.jpg')
    },
    {
        id: 2,
        title: 'Xperience Platform',
        tagline: 'Simulate. Solve. Showcase.',
        description: 'Step into virtual job roles through immersive simulations that mirror real industry challenges.',
        points: [
            'Role-based job simulations rooted in real-world challenges',
            'Practical, challenge-based learning to develop problem-solving skills',
            'Digital, verifiable portfolios aligned with employer expectations',
            'Sharpened workplace readiness through applied learning',
        ],
        cta: ['Start Your Simulation Journey'],
        image: getAssetPath('/platformslide1.png')
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
        cta: ['Book Your Demo', 'Download TIS Overview'],
        image: getAssetPath('/transformskill_futureset.png')
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
        cta: ['Join the Next Challenge', 'See Winner Showcases'],
        image: getAssetPath('/step_slide_img.jpg')
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
        cta: ['Access Talent Pool', 'Partner with Us'],
        image: getAssetPath('/insight_roles.jpg')
    },
];

// Reusable component to animate numbers counting up
function AnimatedCounter({ to }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const node = ref.current;
            const controls = animate(0, to, {
                duration: 1.5,
                onUpdate(value) {
                    node.textContent = Math.round(value);
                }
            });
            return () => controls.stop();
        }
    }, [isInView, to]);

    return <span ref={ref}>0</span>;
}

// Main Home Component
export default function Home() {
    const [activeTabId, setActiveTabId] = useState(platformFeaturesData[0].id);

    // Find the full object for the active feature based on its ID.
    const activeFeature = platformFeaturesData.find((feature) => feature.id === activeTabId) || platformFeaturesData[0];

    return (
        <>
            {/* ===== Hero Section ===== */}
            <section
                className="text-white py-24 relative overflow-hidden bg-no-repeat flex items-center"
                style={{
                    backgroundImage: getBackgroundImageUrl('/banner_1.png'),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    minHeight: '700px',
                }}
            >
                <div className="absolute inset-0 opacity-40"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="w-full md:w-2/3 lg:w-1/2 text-left">
                        <h1 className="text-4xl text-yellow-400 md:text-5xl font-bold leading-tight mb-4">
                            The AI-Powered Career Engine<br /> for Tomorrow’s Talent…
                        </h1>
                        <p className="text-xl md:text-2xl mb-6 font-light">
                            <b>From Learning to Hiring - An End-to-End Career Intelligence Platform.</b>
                        </p>
                        <p className="text-md text-gray-200 mb-10 max-w-xl">
                            Our AI-driven platform transforms raw potential into market-ready expertise through our comprehensive AI ecosystem, connecting learners directly with opportunities through intelligent skill matching.
                        </p>
                    </div>
                    <div className="w-full max-w-3xl mt-8 text-sm">
                        <div className="bg-black bg-opacity-25 backdrop-blur-md p-5 rounded-xl border border-white/20">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                                    <FaCrosshairs className="text-yellow-400 text-md" />
                                    <span className="font-medium">Discover your unique strengths</span>
                                </div>
                                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                                    <FaCogs className="text-yellow-400 text-md" />
                                    <span className="font-medium">Develop skills</span>
                                </div>
                                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                                    <FaRocket className="text-yellow-400 text-md" />
                                    <span className="font-medium">Deploy your talents</span>
                                </div>
                                <div className="flex items-center gap-3 text-white whitespace-nowrap">
                                    <FaTrophy className="text-yellow-400 text-md" />
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
                            <img src={getAssetPath('/skillzza-logo.png')} alt="Skillzza Logo" className="w-full h-auto" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About us</h2>
                            <div className="h-1 w-16 bg-red-600 mb-6"></div>
                            <p className="text-lg text-gray-600 mb-4">
                                Skillzza is a next-generation career transformation platform built to close the education-to-employment gap worldwide. Through adaptive assessments, role-based simulations, and AI-powered hiring, we ensure that individuals and organizations are not just skilled, but aligned with the dynamic demands of the modern workforce.
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

            {/* ===== The Challenge & Numbers Section ===== */}
            <section className="bg-gray-100 py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-20">
                        <div className="md:w-1/2">
                            <img src={getAssetPath('/challangebg.png')} alt="Skill Gap concept" className="w-full h-auto rounded-xl " />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-xs font-bold uppercase text-red-500 mb-2 tracking-widest">THE CHALLENGE</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Widening Skill Gap</h2>
                            <p className="text-lg text-gray-600">
                                As industries rapidly transform, the gap between workforce skills and employer demands continues to widen. This growing disparity limits career progress, restricts opportunities, and creates major obstacles for individuals worldwide leaving many struggling to keep pace with the fast-evolving job market.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Numbers Don't Lie: A Global Crisis in Motion</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-5xl font-bold text-red-600 mb-2"><AnimatedCounter to={69} />%</p>
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">The Recruitment Crisis</h3>
                            <p className="text-gray-600 text-sm">In 2025, nearly 69% of organizations report ongoing difficulties recruiting for full-time roles reflecting persistent hiring challenges across different sectors.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-5xl font-bold text-red-600 mb-2"><AnimatedCounter to={74} />% : <AnimatedCounter to={33} />%</p>
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">The AI Training Gap</h3>
                            <p className="text-gray-600 text-sm">While 74% of employees use AI tools regularly, only 33% have received any formal training to use these tools effectively and safely.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-5xl font-bold text-red-600 mb-2"><AnimatedCounter to={59} />%</p>
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">The Reskilling Imperative</h3>
                            <p className="text-gray-600 text-sm">By 2030, an estimated 59% of employees will need reskilling or upskilling, marking a continued upward trend from the 50% forecast for 2025.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <p className="text-5xl font-bold text-red-600 mb-2"><AnimatedCounter to={63} />%</p>
                            <h3 className="text-xl font-semibold text-gray-700 mb-3">Skills as the Biggest Barrier</h3>
                            <p className="text-gray-600 text-sm">Skill gaps are the biggest barrier to business transformation, with 85% of employers planning to prioritize upskilling their workforce.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== New Skill Studio Section (Wheel Based) ===== */}
<section className="bg-gray-50 py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-lg font-bold uppercase text-red-600 mb-2 tracking-widest">OUR SOLUTION</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Solution-Skill Studio</h2>
                </div>

                {/* 4. Horizontal Tab Navigation */}
                <div className="flex justify-center border-b border-gray-200 mb-12">
                    {platformFeaturesData.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTabId(feature.id)}
                            className={`py-3 px-6 text-md font-semibold transition-colors duration-300 relative focus:outline-none ${
                                activeTabId === feature.id
                                    ? 'text-red-600'
                                    : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            {feature.title}
                            {/* Animated underline for the active tab */}
                            {activeTabId === feature.id && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                                    layoutId="underline"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* 5. Content Display Area */}
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl relative min-h-[600px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFeature.id} // Animation triggers when this key changes
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 p-8 md:p-12"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
                                {/* Left: Text Content */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-red-600 mb-2">{activeFeature.title}</h3>
                                    <h4 className="text-3xl font-bold text-gray-800 mb-4">{activeFeature.tagline}</h4>
                                    <div className="h-1 w-16 bg-red-200 mb-6"></div>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{activeFeature.description}</p>
                                    <ul className="space-y-3 text-gray-600 text-lg mb-8">
                                        {activeFeature.points.map((point, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-red-500 mr-3 mt-1">&#10003;</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        {activeFeature.cta.map((text, index) => (
                                            <button key={index} className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-md">
                                                {text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Right: Image */}
                                <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
                                    <div className="w-full max-w-md h-64 lg:h-80 rounded-lg overflow-hidden flex justify-center items-center bg-gray-100 shadow-md">
                                        <img src={activeFeature.image} alt={activeFeature.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>

            {/* ===== Transform & Academy Section ===== */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    {/* Transform Your Career Journey */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transform Your Career Journey</h2>
                        <p className="text-lg text-gray-600">The complete ecosystem connects students, institutions, and enterprises through skill-based career preparation and intelligent talent development.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                            <FaUserGraduate className="text-5xl text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Students</h3>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                            <FaUniversity className="text-5xl text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Universities</h3>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                            <FaBuilding className="text-5xl text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Corporates</h3>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                            <FaGlobeAmericas className="text-5xl text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Government & CSR</h3>
                        </div>
                    </div>

                    <hr className="border-gray-200 my-16" />

                    {/* Academy */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academy</h2>
                        <p className="text-lg text-red-600 font-semibold mb-4">Elevate Your Expertise with Future-Ready Skills</p>
                        <p className="text-lg text-gray-600 mb-8">Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.</p>
                        <div className="flex flex-wrap justify-between gap-2">
                            {['AI & Quantum', 'Sustainability & Climate Action', 'Aerial Intelligence', 'Design Thinking', 'EV & E-Mobility'].map(area => (
                                <span key={area} className="bg-red-100 text-red-800 font-semibold px-4 py-2 rounded-full">{area}</span>
                            ))}
                        </div>
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
                                <img src={getAssetPath('/scholluniversity.png')} alt="Schools / Universities Icon" className="w-16 h-16 mb-4" />
                                <h3 className="text-lg font-bold text-white">Schools / Universities</h3>
                                <p className="text-sm text-white mt-2">Partnering to Cultivate the Next Generation of Leaders</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                <img src={getAssetPath('/corporate.png')} alt="Corporates Icon" className="w-16 h-16 mb-4" />
                                <h3 className="text-lg font-bold text-gray-800">Corporates</h3>
                                <p className="text-sm text-gray-500 mt-2">Driving Business Success through Workforce Excellence</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                <img src={getAssetPath('/government.png')} alt="Government Icon" className="w-16 h-16 mb-4" />
                                <h3 className="text-lg font-bold text-gray-800">Government</h3>
                                <p className="text-sm text-gray-500 mt-2">Building a Skilled Workforce for a Stronger Economy</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                <img src={getAssetPath('/becomepartner.png')} alt="Upskilling Partner Icon" className="w-16 h-16 mb-4" />
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
                style={{ backgroundImage: getBackgroundImageUrl('/partnerwithbg.png') }}
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
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/redhat_logo.jpeg')} alt="Red Hat" className="h-10 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/Google_logo.svg.png')} alt="Google" className="h-12 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/greengold_animation_logo.png')} alt="Green Gold" className="h-16 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/MidlandMicroFinance_logo.png')} alt="Midland" className="h-16 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/meta_logo.png')} alt="Meta" className="h-12 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/ai_lifebot_logo.jpeg')} alt="AI LifeBot" className="h-8 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/microsoft_logo.png')} alt="Microsoft" className="h-17 w-auto" /></div>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/redhat_logo.jpeg')} alt="Red Hat" className="h-10 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/Google_logo.svg.png')} alt="Google" className="h-12 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/greengold_animation_logo.png')} alt="Green Gold" className="h-16 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/MidlandMicroFinance_logo.png')} alt="Midland" className="h-16 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/meta_logo.png')} alt="Meta" className="h-12 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/ai_lifebot_logo.jpeg')} alt="AI LifeBot" className="h-8 w-auto" /></div>
                                <div className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 border"><img src={getAssetPath('/microsoft_logo.png')} alt="Microsoft" className="h-17 w-auto" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== The Skill Digest Section ===== */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">The Skill Digest</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
                            <img src={getAssetPath('/startYourjourney_tile_img.jpeg')} alt="Blog" className="w-full h-48 object-cover flex-shrink-0" />
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Blog</h3>
                                    <p className="text-sm text-gray-600">How to Build a Job-Ready Portfolio Through AI-Powered Simulations</p>
                                    <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm mt-4">
                                        Read the blog
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
                            <img src={getAssetPath('/upskilling_forAi_tile_img.jpeg')} alt="Research Hub" className="w-full h-48 object-cover flex-shrink-0" />
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Research Hub</h3>
                                    <p className="text-sm text-gray-600">Skill Leadership Index 2030.</p>
                                    <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm mt-9">
                                        Read the reports
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
                            <img src={getAssetPath('/UnlockingSkillsIntelligenceSuccessTodayWorld.jpeg')} alt="The Skill Blueprint" className="w-full h-48 object-cover flex-shrink-0" />
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">The Skill Blueprint</h3>
                                    <p className="text-sm text-gray-600">AI + Human Intelligence: Building Hybrid Skillsets for the Future Workforce.</p>
                                    <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm mt-4">
                                    Explore the Case studies
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform flex flex-col">
                            <img src={getAssetPath('/TalentintheDigitalEraNavigatingtheFutureWork.jpeg')} alt="Podcast" className="w-full h-48 object-cover flex-shrink-0" />
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Podcast</h3>
                                    <p className="text-sm text-gray-600">Tune in to The Skillzza Talks where leaders unpack the skills reshaping careers.</p>
                                    <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm mt-4">
                                        Listen now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}