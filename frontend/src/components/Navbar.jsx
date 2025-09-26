import { React, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const navItems = [
    {
    name: 'Products',
    link: '/',
    dropdown: {
      items: [
        { 
          name: 'The Potential Meter',
          link: '/',
          detail: {
            title: 'The Potential Meter',
            description: 'A comprehensive AI assessment engine that evaluates strengths, career readiness, and growth potential, giving you a clear path to success.',
            cta: 'Assess Your Potential',
            ctaLink: '/',
            image: '/unlock_your_potential.jpg'
          }
        },
        { 
          name: 'Xperience Platform',
          link: '/',
          detail: {
            title: 'Xperience Platform',
            description: 'Engage with AI-powered job simulations that offer role-based, industry-aligned learning experiences to enhance your practical skills and build a powerful portfolio.',
            cta: 'Start a Simulation',
            ctaLink: '/',
            image: '/platformslide1.png'
          }
        },
        { 
          name: 'Talent Intelligence Suite',
          link: '/',
          detail: {
            title: 'Talent Intelligence Suite',
            description: 'A data-driven talent insight system enabling institutions and recruiters to match skill potential with evolving job roles, ensuring the right fit every time.',
            cta: 'Find Top Talent',
            ctaLink: '/',
            image: '/transformskill_futureset.png'
          }
        },
        { 
          name: 'AI HackNex',
          link: '/',
          detail: {
            title: 'AI HackNex',
            description: 'A high-impact AI competition environment where participants solve real-world challenges to showcase and sharpen their capabilities.',
            cta: 'Join a Competition',
            ctaLink: '/',
            image: '/step_slide_img.jpg'
          }
        },
        { 
          name: 'Hirenest',
          link: '/',
          detail: {
            title: 'Hirenest',
            description: 'An intelligent college-to-career recruitment platform that connects pre-assessed, high-potential candidates with top hiring organizations.',
            cta: 'Explore Hirenest',
            ctaLink: '/',
            image: '/insight_roles.jpg'
          }
        },
      ]
    }
  },
  {
    name: 'Use Case',
    link: '',
    dropdown: {
      items: [
        { 
          name: 'For Students',
          link: '/',
          detail: {
            title: 'Student Advantage Package: From Campus to Career Excellence',
            description: 'Utilize comprehensive career discovery tools, virtual internships, skill development, and portfolio verification to launch your career with confidence.',
            cta: 'Start Your Journey',
            ctaLink: '/',
            image: '/forstudentuse.jpg'
          }
        },
        { 
          name: 'For Institutions',
          link: '/',
          detail: {
            title: 'Campus Enablement Package: From Academic Excellence to Industry Readiness',
            description: 'Integrate Hirenest for campus recruitment, track performance with our student analytics dashboard, and set up your own innovation lab (PoC Hub).',
            cta: 'Partner With Us',
            ctaLink: '/',
            image: '/for_universities_banner.jpeg'
          }
        },
        { 
          name: 'For Enterprises',
          link: '/',
          detail: {
            title: 'Enterprise Talent Solutions: Strategic Workforce Intelligence',
            description: 'Access a ready-to-hire pipeline of pre-assessed talent, implement custom workforce upskilling programs, and host innovation challenges.',
            cta: 'Build Your Team',
            ctaLink: '/',
            image: '/forproffession.jpg'
          }
        },
        { 
          name: 'For Government',
          link: '/',
          detail: {
            title: 'Government & CSR Impact: Scalable Workforce Transformation',
            description: 'Conduct large-scale skill assessments, enable employment in Tier 2/3 cities, and use data-driven intelligence for policy planning.',
            cta: 'Drive Social Impact',
            ctaLink: '/',
            image: '/for_government_img_only.jpg'
          }
        },
      ]
    }
  },
    {
    name: 'Academy',
    link: '/',
    dropdown: {
      items: [
        { 
          name: 'ByteMinds – AI & Data',
          link: '/',
          detail: {
            title: 'ByteMinds – The School of AI & Data',
            description: 'Advancing AI and data science excellence through immersive training, industry-calibrated curricula, applied projects, and elite mentorship networks.',
            cta: 'Explore AI Courses',
            ctaLink: '/',
            image: '/DataIntelligence_tile.png'
          }
        },
        { 
          name: 'GSSCA – Sustainability',
          link: '/',
          detail: {
            title: 'GSSCA – Global School of Sustainability & Climate Action',
            description: 'Catalyzing sustainable transformation via expert-led training in climate strategy, green innovation, technology adoption, and ESG leadership.',
            cta: 'Learn about GSSCA',
            ctaLink: '/',
            image: '/SustainabilitySprint_img.jpg'
          }
        },
        { 
          name: 'School of EV & E-Mobility',
          link: '/',
          detail: {
            title: 'School of EV & E-Mobility',
            description: 'Driving the future of mobility with cutting-edge courses in EV technologies, sustainable transport solutions, battery systems, and intelligent infrastructure.',
            cta: 'View Mobility Programs',
            ctaLink: '/',
            image: '/ev_mobility.jpg'
          }
        },
        {
          name: 'Digital & Design Excellence',
          link: '/',
          detail: {
            title: 'Centre of Digital & Design Excellence',
            description: 'Redefining innovation through human-centered design, digital strategy, UX/UI mastery, and scalable transformation frameworks.',
            cta: 'Master Design Thinking',
            ctaLink: '/',
            image: '/design_thinking.jpg'
          }
        },
        {
          name: 'Udaan Aerial Intelligence',
          link: '/',
          detail: {
            title: 'Udaan Aerial Intelligence',
            description: 'Pioneering aerospace and space frontiers through innovation programs, satellite applications, space analytics, and emerging aero-technologies.',
            cta: 'Explore Aerospace',
            ctaLink: '/',
            image: '/precision_agriculture_tile.jpg'
          }
        }
      ]
    }
  },
  {
    name: 'Explore',
    link: '/',
    dropdown: {
        items: [
            {
                name: 'Job Simulations',
                link: '/',
                detail: {
                    title: 'Immersive Job Simulations',
                    description: 'Gain industry-ready skills through real-world scenarios in high-impact domains like AI & Data, Banking, Software Development, and more. Build a portfolio that showcases your capabilities.',
                    cta: 'Explore Simulations',
                    ctaLink: '/',
                    image: '/xperience_img1.jpg'
                }
            },
            {
                name: 'Career Trajectory',
                link: '/',
                detail: {
                    title: 'Chart Your Career Trajectory',
                    description: 'Bring together industry-relevant job simulations in a structured roadmap to help you secure your ideal entry-level role as an AI Engineer, Cybersecurity Analyst, and more.',
                    cta: 'Find Your Path',
                    ctaLink: '/',
                    image: '/MeasuringS_gifuccess.gif'
                }
            },
            {
                name: 'Skillzza Persona',
                link: '/',
                detail: {
                    title: 'AI Role-Play Simulation',
                    description: 'Discover your unique strengths with interactive AI role-play simulations and map a personalized career path that aligns with your potential.',
                    cta: 'Discover Your Persona',
                    ctaLink: '/',
                    image: '/upskilling_forAi_tile_img.jpeg'
                }
            }
        ]
    }
  },
  {
    name: 'Insights',
    link: '/',
    dropdown: {
        items: [
            {
                name: 'Skill Blueprint',
                link: '/',
                detail: {
                    title: 'Skill Blueprint: Solutions & Case Studies',
                    description: 'Explore real-world success stories in skill development and see how our solutions are making an impact across industries.',
                    cta: 'Read Case Studies',
                    ctaLink: '/',
                    image: '/company_header_img.jpg'
                }
            },
            {
                name: 'The Skillzza Digest',
                link: '/',
                detail: {
                    title: 'The Skillzza Digest Blog',
                    description: 'Stay updated with insights, trends, and game-changers that are shaping the future of skills and workforce development.',
                    cta: 'Go to Blog',
                    ctaLink: '/',
                    image: '/digestbannerImg.jpeg'
                }
            },
            {
                name: 'AI Talent Research Hub',
                link: '/',
                detail: {
                    title: 'AI Talent Research Hub',
                    description: 'Access data-driven reports, whitepapers, and in-depth insights on AI and its transformative impact on the global workforce.',
                    cta: 'View Reports',
                    ctaLink: '/',
                    image: '/aIdataAnalyticsDecisions_tile.jpg'
                }
            }
        ]
    }
  },
  {
    name: 'Company',
    link: '/',
    dropdown: {
        items: [
            {
                name: 'About Us',
                link: '/company/about',
                detail: {
                    title: 'Bridging the Gap Between Aspiration and Opportunity',
                    description: 'Learn about our mission to engineer an end-to-end career ecosystem and empower individuals to achieve their full potential.',
                    cta: 'Learn More',
                    ctaLink: '/company/about',
                    image: '/aboutUsHeaeder_tilemg.png'
                }
            },
            {
                name: 'Our Methodology',
                link: '/company/methodology',
                detail: {
                    title: 'The Science Behind Career Transformation',
                    description: 'Discover the data-driven approach and innovative frameworks we use to engineer successful career pathways from vision to global impact.',
                    cta: 'Discover Our Method',
                    ctaLink: '/company/methodology',
                    image: '/methodology_banner_img.png'
                }
            },
            {
                name: 'Partner Collaboration',
                link: '/',
                detail: {
                    title: 'Building the Future of Work Together',
                    description: 'We collaborate with industry leaders, academic institutions, and government bodies to build a robust and equitable future of work.',
                    cta: 'Become a Partner',
                    ctaLink: '/',
                    image: '/partner-bg.png'
                }
            }
        ]
    }
  },
];

const DropdownContent = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 p-6 border-r">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onMouseEnter={() => setActiveItem(item)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 block ${
                  activeItem.name === item.name
                    ? 'bg-purple-50 text-purple-600' 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 p-8 flex items-center">
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{activeItem.detail.title}</h3>
          <p className="text-gray-600 mb-6">{activeItem.detail.description}</p>
          <a href={activeItem.detail.ctaLink} className="inline-block bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors">
            {activeItem.detail.cta}
          </a>
        </div>
        <div className="w-1/2">
          <img src={activeItem.detail.image} alt={activeItem.detail.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50 relative">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="flex-shrink-0">
          <a href="/"><img src="/skillzza-logo.png" alt="Skillzza Logo" className="h-10 w-auto ml-28" /></a>
        </div>
        <nav className="hidden md:flex items-center space-x-10 mr-28">
          {navItems.map((item) => (
            <div key={item.name} className="group static py-6 -my-6">
              <a href={item.link} className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-red-600 transition-colors duration-300">
                {item.name}
                {item.dropdown && <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180" />}
              </a>
              {item.dropdown && (
                <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white shadow-lg border-t">
                    <div className="max-w-7xl mx-auto">
                       <DropdownContent items={item.dropdown.items} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;