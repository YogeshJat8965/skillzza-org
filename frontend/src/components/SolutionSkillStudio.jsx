import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getAssetPath, getRoutePath } from '../utils/assets';

const SolutionSkillStudio = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [scaledButton, setScaledButton] = useState(0);
    const [isVisible, setIsVisible] = useState({
        title: false,
        tabs: false,
        content: false,
    });

    const titleRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);

    // Auto-scale buttons one by one
    useEffect(() => {
        const interval = setInterval(() => {
            setScaledButton((prev) => (prev + 1) % 5);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const elementType = entry.target.dataset.elementType;
                setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const refs = [
            { ref: titleRef, type: 'title' },
            { ref: tabsRef, type: 'tabs' },
            { ref: contentRef, type: 'content' },
        ];

        refs.forEach(({ ref, type }) => {
            if (ref.current) {
                ref.current.dataset.elementType = type;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    const tabs = useMemo(() => [
        {
            label: 'The potential Meter',
            title: 'The Potential Meter',
            subtitle: 'From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation',
            bullets: [
                'Intelligent assessments of cognitive, technical, and behavioral skills.',
                'Simulation-driven evaluation of workplace attitudes and responses.',
                'Personalized career pathway recommendations.',
                'Data-driven mentoring insights powered by our proprietary 4M framework.',
            ],
            cta1: 'Discover Your Potential',
            cta2: 'Get Your Skill Report',
            image: getAssetPath('/img/potential_meter_right_img.png'),
        },
        {
            label: 'Xperience platform',
            title: 'Xperience Platform',
            subtitle: 'Real-World Simulations That Bridge the Gap Between Learning and Employment',
            bullets: [
                'Challenge-based learning journeys mapped to industry roles.',
                'Real-world job simulations across domains.',
                'Digital, verifiable portfolios for every learner.',
                'Applied learning pathways designed for job readiness.',
            ],
            cta1: 'Start Your Journey',
            cta2: 'Explore Simulations',
            image: getAssetPath('/improvements/photo-female-office-worker-sitting-desk-with-laptop-clipboard-high-quality-photo.jpg'),
        },
        {
            label: 'Talent Transformation',
            title: 'Talent Transformation',
            subtitle: 'Empowering Organizations to Upskill, Reskill and Future-Proof Their Workforce',
            bullets: [
                'Workforce skill mapping & gap analysis.',
                'Role-specific upskilling programs.',
                'Succession & talent planning analytics.',
                'Behavioral matching for team performance.',
            ],
            cta1: 'Transform Your Team',
            cta2: 'View Programs',
            image: getAssetPath('/improvements/image copy.png'),
        },
        {
            label: 'AI HackNex',
            title: 'AI HackNex',
            subtitle: 'Global AI Challenges That Spark Innovation and Showcase Real Talent',
            bullets: [
                'Global AI challenges & innovation sprints.',
                'Real-world enterprise problem-solving.',
                'Recognition from industry leaders.',
                'Skill showcase on top platforms.',
            ],
            cta1: 'Join a Challenge',
            cta2: 'View Past Hackathons',
            image: getAssetPath('/improvements/image.png'),
        },
        {
            label: 'Hirenest Recruit',
            title: 'Hirenest Recruit',
            subtitle: 'AI-Powered Talent Marketplace Connecting Verified Skills with the Right Roles',
            bullets: [
                'AI-matched, skill-verified talent pools.',
                'Live portfolios & performance metrics.',
                'Reduced hiring time, better retention.',
                'Seamless enterprise integration.',
            ],
            cta1: 'Find Talent',
            cta2: 'Post a Role',
            image: getAssetPath('/improvements/futuristic-technology-concept (1).jpg'),
        },
    ], []);

    const activeData = tabs[activeTab];

    // Warm up current and next tab images so tab switches feel instant.
    useEffect(() => {
        const preload = (src) => {
            const img = new Image();
            img.decoding = 'async';
            img.src = src;
        };

        preload(tabs[activeTab].image);
        preload(tabs[(activeTab + 1) % tabs.length].image);
    }, [activeTab, tabs]);

    // Tab background colors (inactive state)
    const tabBgColors = [
        '#E5E7EB', // gray-200
        '#E5E7EB',
        '#E5E7EB',
        '#E5E7EB',
        '#E5E7EB',
    ];

    // Active tab color
    const activeTabColor = '#713593';

    return (
        <section className="w-full pt-16 md:pt-24 lg:pt-32 pb-15" style={{ background: '#FFFFFF' }}>
            {/* Hover style for tab buttons */}
            <style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes scaleInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes buttonScale {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.15);
                    }
                }
                
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .animate-scale-in-up {
                    animation: scaleInUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .animate-slide-in-up {
                    animation: slideInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .tab-btn {
                    position: relative;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                                box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .tab-btn-scaled {
                    animation: buttonScale 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 12px 28px rgba(113, 53, 147, 0.25), 
                                0 6px 12px rgba(113, 53, 147, 0.15);
                }
                
                .tab-btn-active {
                    box-shadow: 0 8px 16px rgba(113, 53, 147, 0.25),
                                0 4px 8px rgba(113, 53, 147, 0.15);
                }

                @media (max-width: 767px) {
                  .sss-tab-btn {
                    font-size: 12px !important;
                    padding: 8px 14px !important;
                  }
                  .sss-content-box {
                    padding: 20px 16px !important;
                  }
                  .sss-title {
                    font-size: 24px !important;
                  }
                  .sss-subtitle {
                    font-size: 14px !important;
                  }
                  .sss-bullet {
                    font-size: 13px !important;
                  }
                  .sss-cta {
                    font-size: 13px !important;
                    padding: 10px 20px !important;
                  }
                }
            `}</style>
            {/* Section Title */}
            <div
                ref={titleRef}
                className={`max-w-[1580px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-center mb-8 md:mb-12 lg:mb-16 ${isVisible.title ? 'animate-fade-in-down' : 'opacity-0'}`}
            >
                <h2
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 'clamp(26px, 4vw, 48px)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: '#0F1114',
                    }}
                >
                    The Solution
                </h2>
            </div>

            {/* Tabs Bar - Box 1 */}
            <div
                ref={tabsRef}
                className={`max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px] ${isVisible.tabs ? 'animate-scale-in-up' : 'opacity-0'}`}
            >
                <div
                    className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 py-3 md:py-4 px-3 sm:px-6"
                    style={{
                        background: '#F4F4F5',
                        mixBlendMode: 'multiply',
                        borderRadius: '8px',
                    }}
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`sss-tab-btn tab-btn flex-1 text-center transition-all duration-300 ${activeTab === index ? 'tab-btn-active' : ''} ${scaledButton === index ? 'tab-btn-scaled' : ''}`}
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(13px, 1.5vw, 16px)',
                                fontWeight: 600,
                                padding: '10px 10px',
                                minWidth: '120px',
                                borderRadius: '8px',
                                border: 'none',
                                background: activeTab === index ? activeTabColor : tabBgColors[index],
                                color: activeTab === index ? '#FFFFFF' : '#4B5563',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                letterSpacing: '-0.025em',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content - Box 2 */}
            <div
                ref={contentRef}
                className={`max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px] mt-6 md:mt-8 ${isVisible.content ? 'animate-slide-in-up' : 'opacity-0'}`}
            >
                <div
                    className="sss-content-box flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20"
                    style={{
                        background: '#F4F4F5',
                        mixBlendMode: 'multiply',
                        borderRadius: '8px',
                    }}
                >
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                        <h3
                            className="sss-title mb-3"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(28px, 3.5vw, 40px)',
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: '#5B2D8E',
                                letterSpacing: '-0.025em',
                            }}
                        >
                            {activeData.title}
                        </h3>

                        <p
                            className="sss-subtitle mb-6"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(14px, 1.6vw, 17px)',
                                fontWeight: 600,
                                lineHeight: 1.5,
                                color: '#374151',
                            }}
                        >
                            {activeData.subtitle}
                        </p>

                        <ul className="mb-8" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {activeData.bullets.map((bullet, i) => (
                                <li
                                    key={i}
                                    className="sss-bullet flex items-start gap-3 mb-4"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        color: '#4B5563',
                                    }}
                                >
                                    <span
                                        className="flex-shrink-0 mt-2"
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#5B2D8E',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                            <button
                                className="sss-cta transition-all duration-300 hover:opacity-90"                                onClick={() => {
                                    if (activeTab === 0) window.location.href = getRoutePath('/product/potential-meter');
                                    if (activeTab === 2) window.location.href = getRoutePath('/contact-us');
                                }}                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: '#713593',
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    letterSpacing: '-0.025em',
                                }}
                            >
                                {activeData.cta1}
                            </button>
                            <button
                                className="sss-cta transition-all duration-300 hover:bg-purple-50"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    border: '2px solid #713593',
                                    background: 'transparent',
                                    color: '#713593',
                                    cursor: 'pointer',
                                    letterSpacing: '-0.025em',
                                }}
                            >
                                {activeData.cta2}
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center items-center min-w-0">
                        <img
                            src={activeData.image}
                            alt={activeData.title}
                            className="w-full h-auto"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            style={{
                                maxWidth: '560px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSkillStudio;
