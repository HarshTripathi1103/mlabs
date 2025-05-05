import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="pb-8 px-6 md:px-12">
      <div className="flex items-center justify-between bg-[#FCF9F6] rounded-xl p-4 relative">
        {/* Logo */}
        <div className="font-bold text-3xl">MLab</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#services" className="font-medium text-gray-800 hover:text-gray-600">Services</a>
          <a href="#results" className="font-medium text-gray-800 hover:text-gray-600">Results</a>
          <a href="#about" className="font-medium text-gray-800 hover:text-gray-600">About Us</a>
          <a href="#blog" className="font-medium text-gray-800 hover:text-gray-600">Blog</a>
        </nav>
        
        {/* Call to Action Button */}
        <div className="hidden md:block">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Talk to Us
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 right-6 left-6 bg-white z-50 rounded-xl shadow-lg p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="font-medium text-gray-800 hover:text-gray-600 py-2">Services</a>
              <a href="#results" className="font-medium text-gray-800 hover:text-gray-600 py-2">Results</a>
              <a href="#about" className="font-medium text-gray-800 hover:text-gray-600 py-2">About Us</a>
              <a href="#blog" className="font-medium text-gray-800 hover:text-gray-600 py-2">Blog</a>
              <button className="bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition w-full">
                Talk to Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;