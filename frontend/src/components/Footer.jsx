import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
import { PiXLogoBold } from "react-icons/pi";
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
    <footer style={{ background: '#f0f0f0', fontFamily: "'Inter','Segoe UI',sans-serif" }}>

      {/* Main Footer Body */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '56px 32px 48px' }}>

        {/* Top grid: left info + 6 link columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 1fr 1.4fr 0.9fr 1fr 1fr', gap: '0 24px', alignItems: 'start' }}>

          {/* Left: Logo + Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingRight: 8 }}>
            <img
              src={getAssetPath('/skillzza-logo.png')}
              alt="Skillzza Logo"
              style={{ height: 52, width: 'auto', objectFit: 'contain', marginBottom: 4, display: 'block', marginLeft: 0, alignSelf: 'flex-start' }}
            />
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a', marginBottom: 8, marginTop: 0 }}>Registered Office</h3>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.75, margin: 0 }}>
                Skillzza, WeWork India, Chromium, CTS No. 106/1–5
                Jogeshwari–Vikhroli Link Road, Milind Nagar,
                Powai, Mumbai – 400076
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a', marginBottom: 6, marginTop: 0 }}>Our Presence</h3>
              <p style={{ fontSize: 13, color: '#555', margin: 0 }}>Mumbai | Thane | Raipur | Delhi</p>
            </div>
          </div>

          {/* 6 link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a', marginBottom: 20, marginTop: 0 }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={getRoutePath(link.href)}
                      style={{ fontSize: 13, color: '#aaa', textDecoration: 'none', lineHeight: 1.5, display: 'block', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#c0150a'}
                      onMouseLeave={e => e.target.style.color = '#aaa'}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stay Connected — bottom right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 48 }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1a1a1a', marginBottom: 16 }}>Stay Connected</h3>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', justifyContent: 'center' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{ fontSize: 22, color: '#6b7280', transition: 'color 0.2s', display: 'flex' }}
                  onMouseEnter={e => e.currentTarget.style.color = s.hover}
                  onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Red Bar */}
      <div style={{ background: '#CF2C2E', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 80px' }}>
        <div style={{ display: 'flex', gap: 56 }}>
          {[
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Disclaimer', href: '/disclaimer' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
          ].map((link) => (
            <a
              key={link.name}
              href={getRoutePath(link.href)}
              style={{ color: '#fff', fontSize: 13, fontWeight: 400, textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.9}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p style={{ color: '#fff', fontSize: 13, fontWeight: 400, margin: 0, opacity: 0.9 }}>
          Edgespark IT Ventures Pvt.
        </p>
      </div>

    </footer>
  );
};

export default Footer;