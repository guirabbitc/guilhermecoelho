import React from 'react';
import { ChevronDown } from 'lucide-react';
import ProfileImg from '../images/Profile.jpeg';

const Hero = () => {
  const scrollToStartups = () => {
    const startupsSection = document.getElementById('startups');
    if (startupsSection) {
      startupsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center bg-gradient-to-br from-[#123C4A] to-[#1F6F4A] text-white px-4">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1500')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden mb-8 shadow-lg">
          <img 
            src={ProfileImg} 
            alt="Guilherme Coelho" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Guilherme Coelho</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">I am a young entrepreneur, curious and dedicated, with a great drive to create, innovate, and develop solutions that can transform our society into a more harmonious, happier, and prosperous place.</p>
        <button 
          onClick={scrollToStartups}
          className="flex items-center gap-2 bg-white text-[#123C4A] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg"
        >
          Explore My Work
          <ChevronDown size={18} />
        </button>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <button 
          onClick={scrollToStartups}
          className="text-white opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </button>
      </div>
    </div>
  );
};

export default Hero;