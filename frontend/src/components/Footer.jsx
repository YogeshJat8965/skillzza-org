import React from 'react';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaPinterest 
} from 'react-icons/fa';
import { PiXLogoBold } from "react-icons/pi";

const footerSections = [
  {
    title: 'Platform',
    links: ['Xperience Platform', 'Potential Meter', 'Skilledge Labs', 'AI HackNex', 'Job Simulation'],
  },
  {
    title: 'Skill Development',
    links: ['SkillStratum', 'SkillSphere', 'SkillScape Innovation Hub'],
  },
  {
    title: 'Hackathon',
    links: ['Organize Hackathon', 'Community Hackathon', 'Corporate Hackathon'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Methodology', 'What We Do', 'Meet Our Sherpa', 'Our Pathway to SDG', 'Collaboration'],
  },
  {
    title: 'Insights',
    links: ['The Skillzza Digest', 'Skill Xchange', 'Case Studies', 'The Skillzza Foundation', 'Impact@Skillzza'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t-4 border-red-600 text-zinc-800">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
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
                <a href="#" aria-label="Twitter" className="hover:text-black-900 transition-colors"><PiXLogoBold /></a>
                <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
                <a href="#" aria-label="Pinterest" className="hover:text-red-600 transition-colors"><FaPinterest /></a>
              </div>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-red-600 mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-zinc-600 font-semibold hover:text-red-600 hover:font-semibold inline-block transform hover:-translate-y-px transition-all duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;