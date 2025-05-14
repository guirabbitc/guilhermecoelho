import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#123C4A] to-[#1F6F4A] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Guilherme Coelho</h2>
            <p className="text-gray-300">Tech with purpose. Data, AI & Impact.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Guilherme Coelho. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;