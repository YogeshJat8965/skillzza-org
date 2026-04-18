import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaCode, FaLightbulb, FaRocket, FaCoffee, FaGamepad, FaBrain } from 'react-icons/fa';
import { getAssetPath, getBackgroundImageUrl } from '../utils/assets';

const developersData = [
    {
        id: 1,
        name: 'Kshitij Kashyap',
        role: 'AI Engineer & Innovative Developer',
        expertise: 'Machine Learning, Deep Learning, Full-Stack Development, Simulation Design',
        experience: '3+ years (academic & project-driven)',
        image: getAssetPath('/test/dev1.png'),
        bio: 'Kshitij is a passionate computer science engineer and AI enthusiast with expertise in developing intelligent systems, full-stack platforms, and simulation-based solutions. He has worked across domains including healthcare, e-commerce, cloud computing, and blockchain, creating impactful projects that merge innovation with real-world problem solving. His work spans AI-powered diagnosis platforms, blockchain-secured healthcare records, smart assistive devices, and advanced e-commerce recommendation engines.',
        achievements: [
            'Inventor of MedQ-Strip: Medicine packaging innovation using thermochromic ink & QR for safety',
            'Filed patent for SHAPE Chair: A smart health-monitoring posture correction chair',
            'Developed MedChain-X: Blockchain-based AI diagnosis and medical record system',
            'Built full-stack AI Security Risk Analyzer using Flask, React, Azure OpenAI, and MongoDB',
            'Winner & finalist in multiple hackathons and innovation challenges'
        ],
        skills: [
            'Python (ML/DL: TensorFlow, PyTorch, Scikit-learn)',
            'Full-Stack Development (Flask, Spring Boot, React, Angular, MySQL)',
            'Unity 3D & Simulation Design',
            'Cloud (AWS, Azure, Google Cloud)',
            'Blockchain (Solidity, Ethereum)',
            'Data Structures & Algorithms'
        ],
        social: {
            linkedin: 'https://linkedin.com/in/kshitijkashyap',
            github: 'https://github.com/kshitijkashyap',
            email: 'kashyapkshitij7704@gmail.com'
        },
        portfolio: 'https://kshitij-kashyap-portfolio.netlify.app/',
        quote: 'I aim to bridge the gap between technology and society by building solutions that are intelligent, impactful, and accessible.',
        favoriteTools: ['VS Code', 'Jupyter Notebook', 'Unity', 'Figma'],
        hobbies: ['AI Experimentation', 'Game Design', 'Stock Trading Algorithms', 'Exploring Healthcare Tech']
    }
    ,
    {
        id: 2,
        name: 'Mayank Jaiswal',
        role: 'Full-Stack Developer & UX Architect',
        expertise: 'React, Node.js, User Experience Design',
        experience: '6+ years',
        image: getAssetPath('/test/dev2.jpg'),
        bio: 'Sarah is a versatile full-stack developer who combines technical excellence with user-centered design principles. She architects scalable web applications and crafts intuitive user experiences that make complex skill assessments accessible and engaging for learners worldwide.',
        achievements: [
            'Architected platform serving 100K+ active users',
            'Reduced user onboarding time by 60%',
            'Speaker at International UX Conference 2024',
            'Open source contributor to React ecosystem'
        ],
        skills: [
            'React/Next.js',
            'Node.js/Express',
            'PostgreSQL/MongoDB',
            'AWS/Docker',
            'UX/UI Design',
            'Data Visualization'
        ],
        social: {
            linkedin: 'https://linkedin.com/in/sarahchen',
            github: 'https://github.com/sarahchen',
            twitter: 'https://twitter.com/sarahux',
            email: 'sarah@skillzza.com'
        },
        portfolio: 'https://mayankjaiswal.dev',
        quote: 'Great software bridges the gap between human needs and technological possibilities.',
        favoriteTools: ['React', 'Figma', 'PostgreSQL', 'Postman'],
        hobbies: ['UI Animation', 'Photography', 'Yoga', 'Cooking']
    }
];

// Animated Counter Component
function AnimatedCounter({ to, suffix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = to / 50;
            const timer = setInterval(() => {
                start += increment;
                if (start >= to) {
                    setCount(to);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 30);
            return () => clearInterval(timer);
        }
    }, [isInView, to]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function DevelopersPage() {
    const [selectedDeveloper, setSelectedDeveloper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (developer) => {
        setSelectedDeveloper(developer);
        setIsModalOpen(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDeveloper(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    // Close modal on escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section
                className="text-white py-24 relative overflow-hidden bg-no-repeat flex items-center"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(147, 51, 234, 0.8)), ${getBackgroundImageUrl('/banner_1.png')}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    minHeight: '500px',
                }}
            >
                <div className="absolute inset-0 opacity-20"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Meet Our <span className="text-yellow-400">Developers</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light">
                            The brilliant minds crafting the future of skill-based learning through innovative technology
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <FaCode className="text-yellow-400" />
                                <span>Innovative Solutions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaBrain className="text-yellow-400" />
                                <span>AI-Powered Learning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGamepad className="text-yellow-400" />
                                <span>Immersive Experiences</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Developer Profiles Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Development Team</h2>
                        <div className="h-1 w-16 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the innovative developers who transform educational concepts into cutting-edge digital experiences, 
                            combining technical expertise with creative vision to build the future of learning.
                        </p>
                    </div>

                    {/* Developer Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {developersData.map((developer, index) => (
                            <motion.div
                                key={developer.id}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    {/* Developer Image */}
                                    <div className="flex-shrink-0">
                                        <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-purple-600 rounded-full p-1">
                                            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={developer.image} 
                                                    alt={developer.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Developer Info */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{developer.name}</h3>
                                        <p className="text-red-600 font-semibold mb-2">{developer.role}</p>
                                        <p className="text-gray-600 mb-4">{developer.expertise}</p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                {developer.experience}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                            {developer.bio.substring(0, 150)}...
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button 
                                                onClick={() => openModal(developer)}
                                                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                                            >
                                                View Full Profile
                                            </button>
                                            <a 
                                                href={developer.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center"
                                            >
                                                View Portfolio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && selectedDeveloper && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header with Close Button */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                                <h3 className="text-xl font-bold text-gray-800">{selectedDeveloper.name}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold"
                                    aria-label="Close modal"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="md:flex">
                                {/* Left Column - Image and Basic Info */}
                                <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-purple-700 p-8 text-white">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto bg-white bg-opacity-20 rounded-full p-2 mb-6">
                                            <div className="w-full h-full bg-white bg-opacity-30 rounded-full flex items-center justify-center overflow-hidden">
                                                <img 
                                                    src={selectedDeveloper.image} 
                                                    alt={selectedDeveloper.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{selectedDeveloper.name}</h3>
                                        <p className="text-yellow-300 font-semibold mb-4">{selectedDeveloper.role}</p>
                                        <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-6">
                                            <p className="text-sm italic">"{selectedDeveloper.quote}"</p>
                                        </div>
                                        
                                        {/* Social Links */}
                                        <div className="flex justify-center gap-4 mb-6">
                                            <a href={selectedDeveloper.social.linkedin} className="text-white hover:text-yellow-300 transition-colors" target="_blank" rel="noopener noreferrer">
                                                <FaLinkedin size={20} />
                                            </a>
                                            <a href={selectedDeveloper.social.github} className="text-white hover:text-yellow-300 transition-colors" target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={20} />
                                            </a>

                                            <a href={`mailto:${selectedDeveloper.social.email}`} className="text-white hover:text-yellow-300 transition-colors">
                                                <FaEnvelope size={20} />
                                            </a>
                                        </div>
                                        
                                        {/* Portfolio Link */}
                                        <div className="text-center">
                                            <a 
                                                href={selectedDeveloper.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all font-semibold inline-block"
                                            >
                                                View Portfolio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Right Column - Detailed Info */}
                                <div className="md:w-2/3 p-8">
                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                            <FaLightbulb className="text-red-600 mr-2" />
                                            About {selectedDeveloper.name.split(' ')[0]}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">{selectedDeveloper.bio}</p>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                            <FaCode className="text-red-600 mr-2" />
                                            Technical Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedDeveloper.skills.map((skill, index) => (
                                                <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                            <FaRocket className="text-red-600 mr-2" />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {selectedDeveloper.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-red-500 mr-3 mt-1 text-sm">✓</span>
                                                    <span className="text-gray-600 text-sm">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tools and Hobbies */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h5 className="font-bold text-gray-800 mb-2 text-sm">Favorite Tools</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedDeveloper.favoriteTools.map((tool, index) => (
                                                    <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                                                <FaCoffee className="mr-2 text-gray-600" />
                                                When Not Coding
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedDeveloper.hobbies.map((hobby, index) => (
                                                    <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                                                        {hobby}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Detailed Developer Profile Modal/Section */}
            <AnimatePresence>
                {selectedDeveloper && (
                    <motion.section 
                        className="bg-gray-50 py-24"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="container mx-auto px-6">
                            <motion.div 
                                className="bg-white rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="md:flex">
                                    {/* Left Column - Image and Basic Info */}
                                    <div className="md:w-1/3 bg-gradient-to-br from-red-600 to-purple-700 p-8 text-white">
                                        <div className="text-center">
                                            <div className="w-40 h-40 mx-auto bg-white bg-opacity-20 rounded-full p-2 mb-6">
                                                <div className="w-full h-full bg-white bg-opacity-30 rounded-full flex items-center justify-center overflow-hidden">
                                                    <img 
                                                        src={selectedDeveloper.image} 
                                                        alt={selectedDeveloper.name}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">{selectedDeveloper.name}</h3>
                                            <p className="text-yellow-300 font-semibold mb-4">{selectedDeveloper.role}</p>
                                            <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-6">
                                                <p className="text-sm italic">"{selectedDeveloper.quote}"</p>
                                            </div>
                                            
                                            {/* Social Links */}
                                            <div className="flex justify-center gap-4 mb-6">
                                                <a href={selectedDeveloper.social.linkedin} className="text-white hover:text-yellow-300 transition-colors">
                                                    <FaLinkedin size={24} />
                                                </a>
                                                <a href={selectedDeveloper.social.github} className="text-white hover:text-yellow-300 transition-colors">
                                                    <FaGithub size={24} />
                                                </a>
                                                <a href={selectedDeveloper.social.twitter} className="text-white hover:text-yellow-300 transition-colors">
                                                    <FaTwitter size={24} />
                                                </a>
                                                <a href={`mailto:${selectedDeveloper.social.email}`} className="text-white hover:text-yellow-300 transition-colors">
                                                    <FaEnvelope size={24} />
                                                </a>
                                            </div>
                                            
                                            {/* Portfolio Link */}
                                            <div className="text-center">
                                                <a 
                                                    href={selectedDeveloper.portfolio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-2 rounded-lg transition-all font-semibold inline-block"
                                                >
                                                    View Portfolio
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Right Column - Detailed Info */}
                                    <div className="md:w-2/3 p-8">
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <FaLightbulb className="text-red-600 mr-2" />
                                                About {selectedDeveloper.name.split(' ')[0]}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">{selectedDeveloper.bio}</p>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <FaCode className="text-red-600 mr-2" />
                                                Technical Skills
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedDeveloper.skills.map((skill, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                                <FaRocket className="text-red-600 mr-2" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {selectedDeveloper.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-red-500 mr-3 mt-1">&#10003;</span>
                                                        <span className="text-gray-600">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tools and Hobbies */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h5 className="font-bold text-gray-800 mb-3">Favorite Tools</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedDeveloper.favoriteTools.map((tool, index) => (
                                                        <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                                                    <FaCoffee className="mr-2 text-gray-600" />
                                                    When Not Coding
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedDeveloper.hobbies.map((hobby, index) => (
                                                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                                                            {hobby}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Development Philosophy Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Development Philosophy</h2>
                        <div className="h-1 w-16 bg-yellow-400 mx-auto mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
                                <FaLightbulb className="text-4xl text-yellow-400 mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                                <p className="text-gray-300">We push boundaries to create learning experiences that were previously impossible.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
                                <FaBrain className="text-4xl text-yellow-400 mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-3">Human-Centered AI</h3>
                                <p className="text-gray-300">Technology should amplify human potential, not replace human connection.</p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
                                <FaRocket className="text-4xl text-yellow-400 mb-4 mx-auto" />
                                <h3 className="text-xl font-bold mb-3">Impact Driven</h3>
                                <p className="text-gray-300">Every line of code we write aims to transform lives and create opportunities.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    );
}