import { React, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { getAssetPath, getRoutePath } from '../utils/assets';

const navItems = [
  {
    name: 'Products',
    link: '/',
    dropdown: {
      items: [
        { 
          name: 'The Potential Meter',
          link: '/product/potential-meter',
          detail: {
            title: 'The Potential Meter',
            description: 'A comprehensive AI assessment engine that evaluates strengths, career readiness, and growth potential, giving you a clear path to success.',
            cta: 'Assess Your Potential',
            ctaLink: '/product/potential-meter',
            image: getAssetPath('/unlock_your_potential.jpg')
          }
        },
        { 
          name: 'Xperience Platform',
          link: '/product/xperience-platform',
          detail: {
            title: 'Xperience Platform',
            description: 'Engage with AI-powered job simulations that offer role-based, industry-aligned learning experiences to enhance your practical skills and build a powerful portfolio.',
            cta: 'Start a Simulation',
            ctaLink: '/product/xperience-platform',
            image: getAssetPath('/platformslide1.png')
          }
        },
        { 
          name: 'Talent Intelligence Suite',
          link: '/product/talent-intelligence',
          detail: {
            title: 'Talent Intelligence Suite',
            description: 'A data-driven talent insight system enabling institutions and recruiters to match skill potential with evolving job roles, ensuring the right fit every time.',
            cta: 'Find Top Talent',
            ctaLink: '/product/talent-intelligence',
            image: getAssetPath('/transformskill_futureset.png')
          }
        },
        { 
          name: 'AI HackNex',
          link: '/product/ai-hacknex',
          detail: {
            title: 'AI HackNex',
            description: 'A high-impact AI competition environment where participants solve real-world challenges to showcase and sharpen their capabilities.',
            cta: 'Join a Competition',
            ctaLink: '/product/ai-hacknex',
            image: getAssetPath('/step_slide_img.jpg')
          }
        },
        { 
          name: 'Hirenest',
          link: '/product/hirenest',
          detail: {
            title: 'Hirenest',
            description: 'An intelligent college-to-career recruitment platform that connects pre-assessed, high-potential candidates with top hiring organizations.',
            cta: 'Explore Hirenest',
            ctaLink: '/product/hirenest',
            image: getAssetPath('/insight_roles.jpg')
          }
        },
      ]
    }
  },
  {
    name: 'Use Cases',
    link: '',
    dropdown: {
      items: [
        { 
          name: 'For Students',
          link: '/use-case/students',
          detail: {
            title: 'Student Advantage Package: From Campus to Career Excellence',
            description: 'Utilize comprehensive career discovery tools, virtual internships, skill development, and portfolio verification to launch your career with confidence.',
            cta: 'Start Your Journey',
            ctaLink: '/use-case/students',
            image: getAssetPath('/forstudentuse.jpg')
          }
        },
        { 
          name: 'For Institutions',
          link: '/use-case/institutions',
          detail: {
            title: 'Campus Enablement Package: From Academic Excellence to Industry Readiness',
            description: 'Integrate Hirenest for campus recruitment, track performance with our student analytics dashboard, and set up your own innovation lab (PoC Hub).',
            cta: 'Partner With Us',
            ctaLink: '/use-case/institutions',
            image: getAssetPath('/for_universities_banner.jpeg')
          }
        },
        { 
          name: 'For Enterprises',
          link: '/use-case/enterprises',
          detail: {
            title: 'Enterprise Talent Solutions: Strategic Workforce Intelligence',
            description: 'Access a ready-to-hire pipeline of pre-assessed talent, implement custom workforce upskilling programs, and host innovation challenges.',
            cta: 'Build Your Team',
            ctaLink: '/use-case/enterprises',
            image: getAssetPath('/forproffession.jpg')
          }
        },
        { 
          name: 'For Government',
          link: '/use-case/government',
          detail: {
            title: 'Government & CSR Impact: Scalable Workforce Transformation',
            description: 'Conduct large-scale skill assessments, enable employment in Tier 2/3 cities, and use data-driven intelligence for policy planning.',
            cta: 'Drive Social Impact',
            ctaLink: '/use-case/government',
            image: getAssetPath('/for_government_img_only.jpg')
          }
        },
      ]
    }
  },
  {
    name: 'School of Technology',
    link: '/academy',
    dropdown: {
      items: [
        { 
          name: 'ByteMinds – AI & Data',
          link: '/academy/byteminds',
          detail: {
            title: 'ByteMinds – The School of AI & Quantum Intelligence',
            description: 'Master AI, machine learning, and quantum computing through hands-on labs, real-world projects, and mentorship from industry leaders.',
            cta: 'Explore ByteMinds',
            ctaLink: '/academy/byteminds',
            image: getAssetPath('/data_ai.jpg')
          }
        },
        { 
          name: 'Global School of Sustainability',
          link: '/academy/sustainability',
          detail: {
            title: 'Global School of Sustainability & Climate Action',
            description: 'Lead the climate revolution with programs in renewable energy, circular economy, climate finance, and environmental innovation.',
            cta: 'Join Sustainability School',
            ctaLink: '/academy/sustainability',
            image: getAssetPath('/future_proofing_img.jpg')
          }
        },
        { 
          name: 'Digital & Design Excellence',
          link: '/academy/digital-design',
          detail: {
            title: 'Centre of Digital & Design Excellence',
            description: 'Master Web 3.0, metaverse, UI/UX design, and human-centered innovation through immersive creative-tech programs.',
            cta: 'Explore Digital Design',
            ctaLink: '/academy/digital-design',
            image: getAssetPath('/platformslide1.png')
          }
        },
        {
          name: 'School of EV & E-Mobility',
          link: '/academy/ev-mobility',
          detail: {
            title: 'School of EV & E-Mobility',
            description: 'Drive the electric revolution with programs in battery technology, charging infrastructure, and sustainable transportation.',
            cta: 'Join EV School',
            ctaLink: '/academy/ev-mobility',
            image: getAssetPath('/future_workspace.jpg')
          }
        },
        {
          name: 'Udan – Aerial Intelligence',
          link: '/academy/udan',
          detail: {
            title: 'Udan – Aerial Intelligence School',
            description: 'Master drone technology, aerial data intelligence, and aerospace innovation through hands-on labs and industry partnerships.',
            cta: 'Explore Udan',
            ctaLink: '/academy/udan',
            image: getAssetPath('/precision_agriculture_tile.jpg')
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
          link: '/explore/job-simulations',
          detail: {
            title: 'Immersive Job Simulations',
            description: 'Gain industry-ready skills through real-world scenarios in high-impact domains like AI & Data, Banking, Software Development, and more.',
            cta: 'Explore Simulations',
            ctaLink: '/explore/job-simulations',
            image: getAssetPath('/xperience_img1.jpg')
          }
        },
        {
          name: 'Career Trajectory',
          link: '/explore/career-trajectory',
          detail: {
            title: 'Chart Your Career Trajectory',
            description: 'Bring together industry-relevant job simulations in a structured roadmap to help you secure your ideal entry-level role.',
            cta: 'Find Your Path',
            ctaLink: '/explore/career-trajectory',
            image: getAssetPath('/MeasuringS_gifuccess.gif')
          }
        },
        {
          name: 'Skillzza Persona',
          link: '/explore/skillzza-persona',
          detail: {
            title: 'AI Role-Play Simulation',
            description: 'Discover your unique strengths with interactive AI role-play simulations and map a personalized career path.',
            cta: 'Discover Your Persona',
            ctaLink: '/explore/skillzza-persona',
            image: getAssetPath('/upskilling_forAi_tile_img.jpeg')
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
          link: '/insights/skill-blueprint',
          detail: {
            title: 'Skill Blueprint – Solutions & Case Studies',
            description: 'Real-World Success Stories in Skill Development',
            cta: 'Read Case Studies',
            ctaLink: '/insights/skill-blueprint',
            image: getAssetPath('/company_header_img.jpg')
          }
        },
        {
          name: 'The Skillzza Digest',
          link: '/insights/skill-digest',
          detail: {
            title: 'Blog – The Skill Digest',
            description: 'Insights, Trends & Game-changers shaping the Future of Skills',
            cta: 'Go to Blog',
            ctaLink: '/insights/skill-digest',
            image: getAssetPath('/digestbannerImg.jpeg')
          }
        },
        {
          name: 'AI Talent Research Hub',
          link: '/insights/ai-talent-research-hub',
          detail: {
            title: 'AI Talent Research Hub – Reports & Whitepapers',
            description: 'Data-Driven Insights on AI & Workforce Transformation.',
            cta: 'View Reports',
            ctaLink: '/insights/ai-talent-research-hub',
            image: getAssetPath('/aIdataAnalyticsDecisions_tile.jpg')
          }
        },
        {
          name: 'The Skill Unplugged Podcast',
          link: '/insights/skill-unplugged-podcast',
          detail: {
            title: 'The Skill Unplugged Podcast Series (3R)',
            description: 'Raw, Real & Revolutionary Talks on the Future of Skills.',
            cta: 'Listen to Podcasts',
            ctaLink: '/insights/skill-unplugged-podcast',
            image: getAssetPath('/digital_bugiess_growthBlog_img.jpg')
          }
        },
        {
          name: 'Skillzza Live',
          link: '/insights/skillzza-live',
          detail: {
            title: 'Skillzza Live: Knowledge in Action',
            description: 'Interactive Sessions Bringing Learning to Life.',
            cta: 'Join a Session',
            ctaLink: '/insights/skillzza-live',
            image: getAssetPath('/hackathonsbootcamps_img.jpg')
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
            image: getAssetPath('/aboutUsHeaeder_tilemg.png')
          }
        },
        {
          name: 'What We Do',
          link: '/company/what-we-do',
          detail: {
            title: 'Empowering Success Through Innovation',
            description: 'Explore our comprehensive approach combining AI-driven intelligence, immersive learning, and role-based simulations.',
            cta: 'Explore Services',
            ctaLink: '/company/what-we-do',
            image: getAssetPath('/what_we_do_banner.jpg')
          }
        },
        {
          name: 'Our Methodology',
          link: '/company/methodology',
          detail: {
            title: 'The Science Behind Career Transformation',
            description: 'Discover the data-driven approach and innovative frameworks we use to engineer successful career pathways.',
            cta: 'Discover Our Method',
            ctaLink: '/company/methodology',
            image: getAssetPath('/methodology_banner_img.png')
          }
        },
        {
          name: 'Our Pathway',
          link: '/company/pathway',
          detail: {
            title: 'Transforming Lives Through SDG-Aligned Skills Development',
            description: 'Join our inclusive, impact-driven skill development programs aligned with UN Sustainable Development Goals.',
            cta: 'Start Your Journey',
            ctaLink: '/company/pathway',
            image: getAssetPath('/sdgs_banner.png')
          }
        },
        {
          name: 'Partner Collaboration',
          link: '/company/partnerships',
          detail: {
            title: 'Building the Future of Work Together',
            description: 'We collaborate with industry leaders, academic institutions, and government bodies to build a robust and equitable future of work.',
            cta: 'Become a Partner',
            ctaLink: '/company/partnerships',
            image: getAssetPath('/partner-bg.png')
          }
        },
        {
          name: 'Responsible AI',
          link: '/company/responsible-ai',
          detail: {
            title: 'Building Trust Through Responsible AI',
            description: 'Our commitment to ethical AI development and deployment ensures fairness, transparency, and accountability.',
            cta: 'Learn About Our Standards',
            ctaLink: '/company/responsible-ai',
            image: '/AIEthics&fairnessConsultant_tile.png'
          }
        },
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
                href={getRoutePath(item.link)}
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
          <a href={getRoutePath(activeItem.detail.ctaLink)} className="inline-block bg-purple-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-purple-700 transition-colors">
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

// Mobile Accordion Item
const MobileNavItem = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      {item.dropdown ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {item.name}
            <IoIosArrowDown
              style={{ fontSize: 14, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
          {open && (
            <div className="bg-gray-50 px-4 pb-2">
              {item.dropdown.items.map((sub) => (
                <a
                  key={sub.name}
                  href={getRoutePath(sub.link)}
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-purple-600 hover:bg-white rounded-md transition-colors"
                >
                  {sub.name}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <a
          href={getRoutePath(item.link)}
          onClick={onClose}
          className="block px-5 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
        >
          {item.name}
        </a>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50 relative" style={{ borderBottom: '1px solid #f0f0f0' }}>
      <div className="navbar-desktop" style={{ maxWidth: 1400, margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 64, flexWrap: 'wrap', gap: 16 }}>

        {/* Logo */}
        <div style={{ flexShrink: 0 }}>
          <a href={getRoutePath('/')}>
            <img src={getAssetPath('/skillzza-logo.png')} alt="Skillzza Logo" style={{ height: 40, width: 'auto' }} />
          </a>
        </div>

        {/* Nav Items - Center */}
        <nav className="nav-center-container" style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center', flex: 1 }}>
          {navItems.map((item) => (
            <div key={item.name} className="group nav-item-wrapper" style={{ position: 'relative', padding: '20px 0', margin: '-20px 0' }}>
              <a
                href={getRoutePath(item.link)}
                style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 12px', fontSize: 13, fontWeight: 500, color: '#374151', textDecoration: 'none', borderRadius: 6, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                className="hover:text-red-600"
              >
                {item.name}
                {item.dropdown && (
                  <IoIosArrowDown style={{ fontSize: 14, transition: 'transform 0.3s' }} className="group-hover:rotate-180" />
                )}
              </a>

              {item.dropdown && (
                <div
                  className="opacity-0 group-hover:opacity-100 invisible group-hover:visible pointer-events-none group-hover:pointer-events-auto"
                  style={{ position: 'fixed', top: 64, left: 0, width: '100vw', transition: 'all 0.2s', zIndex: 9999 }}
                >
                  <div style={{ background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                      <DropdownContent items={item.dropdown.items} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="/book-demo"
            style={{
              background: 'linear-gradient(90deg, #e02020 0%, #f5a623 100%)',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(224,32,32,0.25)',
              transition: 'opacity 0.2s',
            }}
          >
            Book a Demo
          </a>
          <a
            href="/product-tour"
            style={{
              background: '#fff',
              color: '#e02020',
              padding: '10px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              border: '1.5px solid #f5c6c6',
              transition: 'all 0.2s',
            }}
          >
            Product Tour
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 1023px) {
          .nav-center-container {
            flex-direction: column !important;
            width: 100% !important;
            gap: 16px !important;
            padding: 16px 0 !important;
          }
          .nav-item-wrapper {
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            justify-content: center !important;
          }
          .nav-item-wrapper > a {
            width: 100%;
            justify-content: center;
            font-size: 16px !important;
            padding: 12px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;