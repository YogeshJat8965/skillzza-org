import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { PiXLogoBold } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const ContactBar = () => {
  return (
    <div className="bg-zinc-50 text-sm text-gray-800 py-2 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <IoLogoWhatsapp className="text-green-500 text-lg ml-28" />
          <a
            href="https://wa.me/919130901979"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-md hover:text-red-600 transition-colors"
          >
            +91 9130901979
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4 mr-36">
          <a href="#" className="text-red-600 font-bold hover:underline">
            Register For Free Internship!
          </a>
          <div className="h-4 border-l border-gray-300"></div>
          <div className="flex items-center space-x-4 text-gray-600 text-base">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Email" className="hover:text-red-600 transition-colors">
              <IoMdMail />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-black-600 transition-colors">
              <PiXLogoBold />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;