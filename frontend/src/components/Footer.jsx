import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaArrowUp
} from 'react-icons/fa';
import { PiXLogoBold } from "react-icons/pi";

// Updated data structure to include href for each link
const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'The Potential Meter AI', href: '/potential-meter' },
      { name: 'Xperience Platform', href: '/xperience-platform' },
      { name: 'Hirenest', href: '/hirenest' },
      { name: 'Talent Transformation', href: '/talent-transformation' },
      { name: 'AI HackNex', href: '/ai-hacknex' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { name: 'Student Advantage Package', href: '/use-case/students' },
      { name: 'Campus Enablement Package', href: '/use-case/institutions' },
      { name: 'Enterprise Talent Solutions', href: '/use-case/enterprises' },
      { name: 'Government and CSR Impact', href: '/use-case/government' },
    ],
  },
  {
    title: 'Academy',
    links: [
      { name: 'ByteMinds-The School of AI & Data', href: '/academy/ai-data' },
      { name: 'GSSCA-Global School of Sustainability', href: '/academy/sustainability' },
      { name: 'Centre of Digital & Design Excellence', href: '/academy/digital-design' },
      { name: 'School of EV & E- Mobility', href: '/academy/ev-mobility' },
      { name: 'Udaan Aerial Intelligence', href: '/academy/aerial-intelligence' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { name: 'Job Simulations Master', href: '/explore/job-simulations' },
      { name: 'Explore Domains', href: '/explore/domains' },
      { name: 'Career Trajectory', href: '/explore/career-trajectory' },
      { name: 'Skillzza Persona', href: '/explore/persona' }
    ]
  },
  {
    title: 'Insights',
    links: [
      { name: 'Skill Blueprint', href: '/insights/skill-blueprint' },
      { name: 'Skillzza Digest', href: '/insights/blog' },
      { name: 'AI Talent Research Hub', href: '/insights/research' },
      { name: 'The Skill Unplugged Podcast', href: '/insights/podcast' },
      { name: 'Skillzza Live', href: '/insights/live' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Our Methodology', href: '/company/methodology' },
      { name: 'What We Do', href: '/company/what-we-do' },
      { name: 'Our Pathway', href: '/company/pathway' },
      { name: 'Partner Collaboration', href: '/company/collaboration' },
      { name: 'Responsible AI', href: '/company/responsible-ai' },
    ],
  },
];

const Footer = () => {

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-zinc-50 border-t-4 border-red-600 text-zinc-800">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8">
          {/* Company Info Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <img src="/skillzza-logo.png" alt="Skillzza Logo" className="h-9 mb-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2 text-zinc-900">Registered Office</h3>
              <p className="font-semibold text-zinc-600 text-sm leading-relaxed">
                WeWork India, Chromium, Cts. No. 106/1-5, <br />Jogesh Wari-Vikhroli link Road, Milind Nagar, <br /> Powai, Mumbai - 400076
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-zinc-900">Our Presence</h3>
              <p className="text-zinc-600 font-semibold text-sm">Mumbai | Thane | Raipur | Delhi</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-zinc-900">Stay Connected</h3>
              <div className="flex space-x-4 text-zinc-600 text-xl">
                <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors"><FaFacebookF /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors"><FaInstagram /></a>
                <a href="#" aria-label="Twitter" className="hover:text-black transition-colors"><PiXLogoBold /></a>
                <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
                <a href="#" aria-label="Pinterest" className="hover:text-red-600 transition-colors"><FaPinterest /></a>
              </div>
            </div>
          </div>
          
          {/* Dynamic Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-red-600 mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} // Use the href from the data object
                      className="text-zinc-600 font-semibold hover:text-red-600 hover:font-semibold inline-block transform hover:-translate-y-px transition-all duration-200 text-sm"
                    >
                      {link.name} {/* Use the name for the display text */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Footer Section */}
      <div className="w-full flex">
        <div className="bg-red-800 text-white flex-grow">
          <div className="container mx-auto h-full flex items-center justify-between p-4 text-sm">
            <div className="flex items-center space-x-8 ml-8">
                <a href="/terms" className="hover:text-gray-300 font-semibold transition-colors">Terms & Conditions</a>
                <a href="/disclaimer" className="hover:text-gray-300 font-semibold transition-colors">Disclaimer</a>
                <a href="/privacy-policy" className="hover:text-gray-300 font-semibold transition-colors">Privacy Policy</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Skillzza. All Rights Reserved.</p>
          </div>
        </div>
        <button 
            onClick={scrollToTop} 
            className="bg-red-600 text-white px-5 flex items-center hover:bg-red-700 transition-colors"
            aria-label="Back to top"
        >
            <FaArrowUp className="text-xl"/>
        </button>
      </div>
    </footer>
  );
};

export default Footer;