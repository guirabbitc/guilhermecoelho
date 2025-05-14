import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-[#123C4A] to-[#1F6F4A] shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">GC</div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('startups')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Startups
          </button>
          <button 
            onClick={() => scrollToSection('extracurriculars')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Extracurriculars
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-white hover:text-gray-200 transition-colors"
          >
            Experience
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;