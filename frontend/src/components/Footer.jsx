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

const footerSections = [
  {
    title: 'Products',
    links: ['The Potential Meter AI', 'Xperience Platform', 'Hirenest', 'Talent Transformation', 'AI HackNex'],
  },
  {
    title: 'Use Cases',
    links: ['Student Advantage Package', 'Campus Enablement Package', 'Enterprise Talent Solutions Package','Government and CSR Impact Package'],
  },
  {
    title: 'Academy',
    links: ['ByteMinds-The School of AI & Data', 'GSSCA-Global School of Sustainability & Climate Action', 'Centre of Digital & Design Excellence','School of EV & E- Mobility','Udaan Aerial Intelligence'],
  },
{
  title:'Explore',
  links:['Job Simulations Master','Explore Domains','Career Trajectory','Skillzza Persona']
},
  {
      title: 'Insights',
      links: ['Skill Blueprint','Skillzza Digest', 'AI Talent Research Hub', 'The Skill Unplugged Podcast', 'Skillzza Live'],
    },
  {
    title: 'Company',
    links: ['About us', 'Our Methodology', 'What We Do', 'Our Pathway', 'Partner Collaboration', 'Responsible AI'],
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

      {/* ===== New Sub-Footer Section ===== */}
      <div className="w-full flex">
        <div className="bg-red-800 text-white flex-grow">
          <div className="container mx-auto h-full flex items-center justify-between p-4 text-sm">
            <div className="flex items-center space-x-8 ml-8">
                <a href="#" className="hover:text-gray-300 font-semibold transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-gray-300 font-semibold transition-colors">Disclaimer</a>
                <a href="#" className="hover:text-gray-300 font-semibold transition-colors">Privacy Policy</a>
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