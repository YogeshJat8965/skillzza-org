import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
import { PiXLogoBold } from 'react-icons/pi';
import { getAssetPath, getRoutePath } from '../utils/assets';

const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'The Potential Meter AI', href: '/product/potential-meter' },
      { name: 'Xperience Platform', href: '/product/xperience-platform' },
      { name: 'Hirenest', href: '/product/hirenest' },
      { name: 'Talent Transformation', href: '/product/talent-intelligence' },
      { name: 'AI Hacknex', href: '/product/ai-hacknex' },
    ],
  },
  {
    title: 'Use Case',
    links: [
      { name: 'Student Advantage Package', href: '/use-case/students' },
      { name: 'Campus Enablement Package', href: '/use-case/institutions' },
      { name: 'Enterprise Talent Solutions Package', href: '/use-case/enterprises' },
      { name: 'Government & Csr Impact Package', href: '/use-case/government' },
    ],
  },
  {
    title: 'School of Technology',
    links: [
      { name: 'ByteMinds–The School of AI & Data', href: '/academy/byteminds' },
      { name: 'Gssca–Global School Of Sustainability & Climate Action', href: '/academy/sustainability' },
      { name: 'Centre Of Digital & Design Excellence', href: '/academy/digital-design' },
      { name: 'School Of Ev & E- Mobility', href: '/academy/ev-mobility' },
      { name: 'Udaan Aerial Intelligence', href: '/academy/udan' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { name: 'Job Simulations Master', href: '/explore/job-simulations' },
      { name: 'Explore Domains', href: '/explore/domains' },
      { name: 'Career Trajectory', href: '/explore/career-trajectory' },
      { name: 'Skillzza Persona', href: '/explore/skillzza-persona' },
    ],
  },
  {
    title: 'Insights',
    links: [
      { name: 'Skill Blueprint', href: '/insights/skill-blueprint' },
      { name: 'The Skill Digest', href: '/insights/skill-digest' },
      { name: 'Ai Talent Research Hub', href: '/insights/ai-talent-research-hub' },
      { name: 'The Skill Unplugged Podcast', href: '/insights/skill-unplugged-podcast' },
      { name: 'Skillzza Live', href: '/insights/skillzza-live' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '/company/about' },
      { name: 'Our Methodology', href: '/company/methodology' },
      { name: 'What We Do', href: '/company/what-we-do' },
      { name: 'Our Pathway', href: '/company/pathway' },
      { name: 'Partner Collaboration', href: '/company/partnerships' },
      { name: 'Responsible Ai', href: '/company/responsible-ai' },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', hover: '#1877f2' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', hover: '#0a66c2' },
  { icon: <FaInstagram />, label: 'Instagram', hover: '#e1306c' },
  { icon: <PiXLogoBold />, label: 'Twitter', hover: '#000' },
  { icon: <FaYoutube />, label: 'YouTube', hover: '#ff0000' },
  { icon: <FaPinterest />, label: 'Pinterest', hover: '#e60023' },
];

const Footer = () => {
  return (
    <footer style={{ background: '#f0f0f0', fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

      {/* ── Main Body ── */}
      <div className="footer-main-wrap" style={{ maxWidth: 1440, margin: '0 auto', padding: '48px 48px 44px' }}>

        {/* Outer grid: brand (left) + links (right) */}
        <div className="footer-outer" style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          columnGap: 40,
          alignItems: 'start',
        }}>

          {/* ── LEFT: Brand / Address ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Logo */}
            <img
              src={getAssetPath('/skillzza-logo.png')}
              alt="Skillzza"
              style={{
                height: 60,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                alignSelf: 'flex-start',
                marginBottom: 8,
              }}
            />

            {/* Registered Office */}
            <div>
              <p style={{
                fontWeight: 700,
                fontSize: 13,
                color: '#1a1a1a',
                margin: '0 0 6px 0',
                lineHeight: 1.4,
              }}>
                Registered Office
              </p>
              <p style={{
                fontSize: 12,
                color: '#1a1a1a',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Skillzza, WeWork India, Chromium, CTS No.&nbsp;106/1–5<br />
                Jogeshwari–Vikhroli Link Road, Milind Nagar,<br />
                Powai, Mumbai – 400076
              </p>
            </div>

            {/* Our Presence */}
            <div>
              <p style={{
                fontWeight: 700,
                fontSize: 13,
                color: '#1a1a1a',
                margin: '0 0 6px 0',
                lineHeight: 1.4,
              }}>
                Our Presence
              </p>
              <p style={{ fontSize: 12, color: '#1a1a1a', margin: 0, lineHeight: 1.7 }}>
                Mumbai | Thane | Raipur | Delhi
              </p>
            </div>
          </div>

          {/* ── RIGHT: 6 link columns ── */}
          <div className="footer-links-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            columnGap: 16,
            rowGap: 0,
            alignItems: 'start',
          }}>
            {footerSections.map((section) => (
              <div key={section.title}>
                {/* Section heading */}
                <p style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#1a1a1a',
                  margin: '0 0 16px 0',
                  lineHeight: 1.35,
                }}>
                  {section.title}
                </p>

                {/* Links list */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={getRoutePath(link.href)}
                        style={{
                          fontSize: 12,
                          color: '#1a1a1a',
                          textDecoration: 'none',
                          lineHeight: 1.5,
                          display: 'block',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#c0150a')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#1a1a1a')}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ── Stay Connected — spans cols 5–6 (Insights + Company) ── */}
            <div className="footer-social-col" style={{ gridColumn: '5 / 7', marginTop: 36 }}>
              <p style={{
                fontWeight: 700,
                fontSize: 13,
                color: '#1a1a1a',
                margin: '0 0 14px 0',
                lineHeight: 1.35,
              }}>
                Stay Connected
              </p>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    style={{
                      fontSize: 28,
                      color: '#6b7280',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = s.hover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom red bar ── */}
      <div className="footer-bottom-bar" style={{
        background: '#CF2C2E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 48px',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <div className="footer-bottom-links" style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
          {[
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Disclaimer', href: '/disclaimer' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
          ].map((link) => (
            <a
              key={link.name}
              href={getRoutePath(link.href)}
              style={{
                color: '#fff',
                fontSize: 12.5,
                fontWeight: 400,
                textDecoration: 'none',
                opacity: 0.92,
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.92')}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p style={{ color: '#fff', fontSize: 12.5, fontWeight: 400, margin: 0, opacity: 0.92 }}>
          Edgespark IT Ventures Pvt.
        </p>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 1199px) {
          .footer-main-wrap { padding: 40px 28px 36px !important; }
          .footer-links-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 24px !important; }
          .footer-social-col { grid-column: 1 / -1 !important; margin-top: 12px !important; }
        }
        @media (max-width: 899px) {
          .footer-outer { grid-template-columns: 1fr !important; }
          .footer-links-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-bottom-bar {
            padding: 14px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 599px) {
          .footer-main-wrap { padding: 32px 16px 28px !important; }
          .footer-links-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom-links { gap: 16px !important; }
        }
        @media (max-width: 400px) {
          .footer-links-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </footer>
  );
};

export default Footer;