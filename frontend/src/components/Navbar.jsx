import { useState, useRef, useEffect } from 'react';
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
            image: getAssetPath('/unlock_your_potential.jpg'),
          },
        },
        {
          name: 'Xperience Platform',
          link: '/product/xperience-platform',
          detail: {
            title: 'Xperience Platform',
            description: 'Engage with AI-powered job simulations that offer role-based, industry-aligned learning experiences to enhance your practical skills and build a powerful portfolio.',
            cta: 'Start a Simulation',
            ctaLink: '/product/xperience-platform',
            image: getAssetPath('/platformslide1.png'),
          },
        },
        {
          name: 'Talent Intelligence Suite',
          link: '/product/talent-intelligence',
          detail: {
            title: 'Talent Intelligence Suite',
            description: 'A data-driven talent insight system enabling institutions and recruiters to match skill potential with evolving job roles, ensuring the right fit every time.',
            cta: 'Find Top Talent',
            ctaLink: '/product/talent-intelligence',
            image: getAssetPath('/transformskill_futureset.png'),
          },
        },
        {
          name: 'AI HackNex',
          link: '/product/ai-hacknex',
          detail: {
            title: 'AI HackNex',
            description: 'A high-impact AI competition environment where participants solve real-world challenges to showcase and sharpen their capabilities.',
            cta: 'Join a Competition',
            ctaLink: '/product/ai-hacknex',
            image: getAssetPath('/step_slide_img.jpg'),
          },
        },
        {
          name: 'Hirenest',
          link: '/product/hirenest',
          detail: {
            title: 'Hirenest',
            description: 'An intelligent college-to-career recruitment platform that connects pre-assessed, high-potential candidates with top hiring organizations.',
            cta: 'Explore Hirenest',
            ctaLink: '/product/hirenest',
            image: getAssetPath('/insight_roles.jpg'),
          },
        },
      ],
    },
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
            image: getAssetPath('/forstudentuse.jpg'),
          },
        },
        {
          name: 'For Institutions',
          link: '/use-case/institutions',
          detail: {
            title: 'Campus Enablement Package: From Academic Excellence to Industry Readiness',
            description: 'Integrate Hirenest for campus recruitment, track performance with our student analytics dashboard, and set up your own innovation lab (PoC Hub).',
            cta: 'Partner With Us',
            ctaLink: '/use-case/institutions',
            image: getAssetPath('/for_universities_banner.jpeg'),
          },
        },
        {
          name: 'For Enterprises',
          link: '/use-case/enterprises',
          detail: {
            title: 'Enterprise Talent Solutions: Strategic Workforce Intelligence',
            description: 'Access a ready-to-hire pipeline of pre-assessed talent, implement custom workforce upskilling programs, and host innovation challenges.',
            cta: 'Build Your Team',
            ctaLink: '/use-case/enterprises',
            image: getAssetPath('/forproffession.jpg'),
          },
        },
        {
          name: 'For Government',
          link: '/use-case/government',
          detail: {
            title: 'Government & CSR Impact: Scalable Workforce Transformation',
            description: 'Conduct large-scale skill assessments, enable employment in Tier 2/3 cities, and use data-driven intelligence for policy planning.',
            cta: 'Drive Social Impact',
            ctaLink: '/use-case/government',
            image: getAssetPath('/for_government_img_only.jpg'),
          },
        },
      ],
    },
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
            image: getAssetPath('/data_ai.jpg'),
          },
        },
        {
          name: 'Global School of Sustainability',
          link: '/academy/sustainability',
          detail: {
            title: 'Global School of Sustainability & Climate Action',
            description: 'Lead the climate revolution with programs in renewable energy, circular economy, climate finance, and environmental innovation.',
            cta: 'Join Sustainability School',
            ctaLink: '/academy/sustainability',
            image: getAssetPath('/future_proofing_img.jpg'),
          },
        },
        {
          name: 'Digital & Design Excellence',
          link: '/academy/digital-design',
          detail: {
            title: 'Centre of Digital & Design Excellence',
            description: 'Master Web 3.0, metaverse, UI/UX design, and human-centered innovation through immersive creative-tech programs.',
            cta: 'Explore Digital Design',
            ctaLink: '/academy/digital-design',
            image: getAssetPath('/platformslide1.png'),
          },
        },
        {
          name: 'School of EV & E-Mobility',
          link: '/academy/ev-mobility',
          detail: {
            title: 'School of EV & E-Mobility',
            description: 'Drive the electric revolution with programs in battery technology, charging infrastructure, and sustainable transportation.',
            cta: 'Join EV School',
            ctaLink: '/academy/ev-mobility',
            image: getAssetPath('/future_workspace.jpg'),
          },
        },
        {
          name: 'Udan – Aerial Intelligence',
          link: '/academy/udan',
          detail: {
            title: 'Udan – Aerial Intelligence School',
            description: 'Master drone technology, aerial data intelligence, and aerospace innovation through hands-on labs and industry partnerships.',
            cta: 'Explore Udan',
            ctaLink: '/academy/udan',
            image: getAssetPath('/precision_agriculture_tile.jpg'),
          },
        },
      ],
    },
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
            image: getAssetPath('/xperience_img1.jpg'),
          },
        },
        {
          name: 'Career Trajectory',
          link: '/explore/career-trajectory',
          detail: {
            title: 'Chart Your Career Trajectory',
            description: 'Bring together industry-relevant job simulations in a structured roadmap to help you secure your ideal entry-level role.',
            cta: 'Find Your Path',
            ctaLink: '/explore/career-trajectory',
            image: getAssetPath('/MeasuringS_gifuccess.gif'),
          },
        },
        {
          name: 'Skillzza Persona',
          link: '/explore/skillzza-persona',
          detail: {
            title: 'AI Role-Play Simulation',
            description: 'Discover your unique strengths with interactive AI role-play simulations and map a personalized career path.',
            cta: 'Discover Your Persona',
            ctaLink: '/explore/skillzza-persona',
            image: getAssetPath('/upskilling_forAi_tile_img.jpeg'),
          },
        },
      ],
    },
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
            description: 'Real-world success stories in skill development across industries.',
            cta: 'Read Case Studies',
            ctaLink: '/insights/skill-blueprint',
            image: getAssetPath('/company_header_img.jpg'),
          },
        },
        {
          name: 'The Skillzza Digest',
          link: '/insights/skill-digest',
          detail: {
            title: 'Blog – The Skill Digest',
            description: 'Insights, trends & game-changers shaping the future of skills.',
            cta: 'Go to Blog',
            ctaLink: '/insights/skill-digest',
            image: getAssetPath('/digestbannerImg.jpeg'),
          },
        },
        {
          name: 'AI Talent Research Hub',
          link: '/insights/ai-talent-research-hub',
          detail: {
            title: 'AI Talent Research Hub – Reports & Whitepapers',
            description: 'Data-driven insights on AI & workforce transformation.',
            cta: 'View Reports',
            ctaLink: '/insights/ai-talent-research-hub',
            image: getAssetPath('/aIdataAnalyticsDecisions_tile.jpg'),
          },
        },
        {
          name: 'The Skill Unplugged Podcast',
          link: '/insights/skill-unplugged-podcast',
          detail: {
            title: 'The Skill Unplugged Podcast Series (3R)',
            description: 'Raw, real & revolutionary talks on the future of skills.',
            cta: 'Listen to Podcasts',
            ctaLink: '/insights/skill-unplugged-podcast',
            image: getAssetPath('/digital_bugiess_growthBlog_img.jpg'),
          },
        },
        {
          name: 'Skillzza Live',
          link: '/insights/skillzza-live',
          detail: {
            title: 'Skillzza Live: Knowledge in Action',
            description: 'Interactive sessions bringing learning to life.',
            cta: 'Join a Session',
            ctaLink: '/insights/skillzza-live',
            image: getAssetPath('/hackathonsbootcamps_img.jpg'),
          },
        },
      ],
    },
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
            image: getAssetPath('/aboutUsHeaeder_tilemg.png'),
          },
        },
        {
          name: 'What We Do',
          link: '/company/what-we-do',
          detail: {
            title: 'Empowering Success Through Innovation',
            description: 'Explore our comprehensive approach combining AI-driven intelligence, immersive learning, and role-based simulations.',
            cta: 'Explore Services',
            ctaLink: '/company/what-we-do',
            image: getAssetPath('/what_we_do_banner.jpg'),
          },
        },
        {
          name: 'Our Methodology',
          link: '/company/methodology',
          detail: {
            title: 'The Science Behind Career Transformation',
            description: 'Discover the data-driven approach and innovative frameworks we use to engineer successful career pathways.',
            cta: 'Discover Our Method',
            ctaLink: '/company/methodology',
            image: getAssetPath('/methodology_banner_img.png'),
          },
        },
        {
          name: 'Our Pathway',
          link: '/company/pathway',
          detail: {
            title: 'Transforming Lives Through SDG-Aligned Skills Development',
            description: 'Join our inclusive, impact-driven skill development programs aligned with UN Sustainable Development Goals.',
            cta: 'Start Your Journey',
            ctaLink: '/company/pathway',
            image: getAssetPath('/sdgs_banner.png'),
          },
        },
        {
          name: 'Partner Collaboration',
          link: '/company/partnerships',
          detail: {
            title: 'Building the Future of Work Together',
            description: 'We collaborate with industry leaders, academic institutions, and government bodies to build a robust and equitable future of work.',
            cta: 'Become a Partner',
            ctaLink: '/company/partnerships',
            image: getAssetPath('/partner-bg.png'),
          },
        },
        {
          name: 'Responsible AI',
          link: '/company/responsible-ai',
          detail: {
            title: 'Building Trust Through Responsible AI',
            description: 'Our commitment to ethical AI development and deployment ensures fairness, transparency, and accountability.',
            cta: 'Learn About Our Standards',
            ctaLink: '/company/responsible-ai',
            image: getAssetPath('/AIEthics&fairnessConsultant_tile.png'),
          },
        },
      ],
    },
  },
];

/* ─────────────────────────────────────────────────────────────
   MegaDropdown
   Left: scrollable item list   Right: live detail + image
───────────────────────────────────────────────────────────── */
const MegaDropdown = ({ dropdown }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const detail = dropdown.items[activeIndex]?.detail;

  return (
    <div
      style={{
        display: 'flex',
        background: '#fff',
        borderTop: '1px solid #e5e7eb',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        minHeight: 200,
      }}
    >
      {/* Left column */}
      <div
        style={{
          width: 500,
          flexShrink: 0,
          background: '#f9f9f9',
          borderRight: '1px solid #f0f0f0',
          padding: '12px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {dropdown.items.map((item, i) => (
          <a
            key={item.name}
            href={getRoutePath(item.link)}
            onMouseEnter={() => setActiveIndex(i)}
            style={{
              display: 'block',
              padding: '13px 40px 13px 265px', // ← 113px ≈ 3cm left gap
              fontSize: 12,
              fontWeight: 500,
              color: i === activeIndex ? '#e02020' : '#374151',
              textDecoration: 'none',
              borderLeft: `3px solid ${i === activeIndex ? '#e02020' : 'transparent'}`,
              background: i === activeIndex ? '#fff' : 'transparent',
              transition: 'background 0.15s, color 0.15s, border-color 0.15s',
              whiteSpace: 'nowrap',
            }}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right panel — fixed equal padding both sides */}
      {detail && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 48,
            paddingRight: 265,
            gap: 48,
            boxSizing: 'border-box',
          }}
        >
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#111827',
                lineHeight: 1.35,
                marginBottom: 12,
              }}
            >
              {detail.title}
            </p>
            <p
              style={{
                fontSize: 14,
                color: '#6b7280',
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              {detail.description}
            </p>
            <a
              href={getRoutePath(detail.ctaLink)}
              style={{
                display: 'inline-block',
                padding: '11px 28px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                background: 'linear-gradient(90deg, #e02020 0%, #f5a623 100%)',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(224,32,32,0.22)',
              }}
            >
              {detail.cta}
            </a>
          </div>

          {/* Image */}
          <div
            style={{
              width: 260,
              height: 170,
              flexShrink: 0,
              borderRadius: 10,
              overflow: 'hidden',
              background: '#f3f4f6',
            }}
          >
            <img
              src={detail.image}
              alt={detail.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   DesktopNavItem
───────────────────────────────────────────────────────────── */
const DesktopNavItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => { clearTimeout(timeoutRef.current); setOpen(true); };
  const hide = () => { timeoutRef.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div onMouseEnter={show} onMouseLeave={hide} style={{ position: 'relative' }}>
      <a
        href={item.link ? getRoutePath(item.link) : undefined}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          padding: '8px 12px',
          fontSize: 13,
          fontWeight: 500,
          color: open ? '#e02020' : '#374151',
          textDecoration: 'none',
          borderRadius: 6,
          whiteSpace: 'nowrap',
          transition: 'color 0.2s',
          cursor: 'pointer',
        }}
      >
        {item.name}
        {item.dropdown && (
          <IoIosArrowDown
            style={{
              fontSize: 13,
              marginLeft: 2,
              transition: 'transform 0.25s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        )}
      </a>

      {/* Full-viewport-width mega panel */}
      {item.dropdown && open && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 9999 }}>
          <MegaDropdown dropdown={item.dropdown} />
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MobileNavItem — accordion
───────────────────────────────────────────────────────────── */
const MobileNavItem = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #f3f4f6' }}>
      {item.dropdown ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              fontSize: 14,
              fontWeight: 600,
              color: '#374151',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span>{item.name}</span>
            <IoIosArrowDown
              style={{
                fontSize: 14,
                transition: 'transform 0.3s',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>
          {open && (
            <div style={{ background: '#f9fafb', padding: '6px 0 10px' }}>
              {item.dropdown.items.map((sub) => (
                <a
                  key={sub.name}
                  href={getRoutePath(sub.link)}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '10px 32px',
                    fontSize: 13,
                    color: '#4b5563',
                    textDecoration: 'none',
                  }}
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
          style={{
            display: 'block',
            padding: '14px 20px',
            fontSize: 14,
            fontWeight: 600,
            color: '#374151',
            textDecoration: 'none',
          }}
        >
          {item.name}
        </a>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Navbar
───────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Main bar */}
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 64,
            gap: 16,
          }}
        >
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <a href={getRoutePath('/')}>
              <img
                src={getAssetPath('/skillzza-logo.png')}
                alt="Skillzza Logo"
                style={{ height: 40, width: 'auto' }}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            className="sz-desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flex: 1,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <DesktopNavItem key={item.name} item={item} />
            ))}
          </nav>

          {/* CTA buttons */}
          <div
            className="sz-cta-group"
            style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}
          >
            <a
              href={getRoutePath('/book-demo')}
              style={{
                background: 'linear-gradient(90deg, #e02020 0%, #f5a623 100%)',
                color: '#fff',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(224,32,32,0.20)',
              }}
            >
              Book a Demo
            </a>
            <a
              href={getRoutePath('/product-tour')}
              style={{
                background: '#fff',
                color: '#e02020',
                padding: '9px 22px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                border: '1.5px solid #fca5a5',
              }}
            >
              Product Tour
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="sz-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#374151',
              padding: 6,
              borderRadius: 6,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: '1px solid #f3f4f6',
              background: '#fff',
              maxHeight: 'calc(100vh - 64px)',
              overflowY: 'auto',
            }}
          >
            {navItems.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={getRoutePath('/book-demo')}
                style={{
                  background: 'linear-gradient(90deg, #e02020 0%, #f5a623 100%)',
                  color: '#fff',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Book a Demo
              </a>
              <a
                href={getRoutePath('/product-tour')}
                style={{
                  background: '#fff',
                  color: '#e02020',
                  padding: '11px 22px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  border: '1.5px solid #fca5a5',
                }}
              >
                Product Tour
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Responsive rules */}
      <style>{`
        .sz-desktop-nav { display: flex !important; }
        .sz-cta-group   { display: flex !important; }
        .sz-hamburger   { display: none  !important; }

        @media (max-width: 1023px) {
          .sz-desktop-nav { display: none  !important; }
          .sz-cta-group   { display: none  !important; }
          .sz-hamburger   { display: flex  !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;