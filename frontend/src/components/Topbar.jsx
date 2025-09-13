import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Topbar = () => {
  return (
    <header className="bg-[#d93a3e] text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <div className="hidden md:flex items-center space-x-8 ml-28">
          <a href="#" className="text-md font-bold hover:text-black transition-colors duration-300">
            Interns
          </a>
          <a href="https://cognify.skillzza.com" className="text-md font-bold hover:text-black transition-colors duration-300">
            K-12
          </a>
          <a href="https://portal.skillzza.com" className="text-md font-bold hover:text-black transition-colors duration-300">
            Universities
          </a>
          <a href="https://ciosherpacouncil.com" className="text-md font-bold hover:text-black transition-colors duration-300">
            Companies
          </a>
        </div>
        <div className="flex items-center space-x-6 mr-36">
          <a href="#" className="flex items-center space-x-2 text-md font-bold hover:text-black transition-colors">
            <FaSearch />
            <span>Log in</span>
          </a>
          <button className="bg-white text-zinc-800 font-bold py-1 px-6 rounded-full hover:bg-gray-100 transition-colors shadow">
            Sign up
          </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Topbar;