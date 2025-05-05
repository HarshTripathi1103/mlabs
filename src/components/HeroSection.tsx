import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 pt-8 pb-16">
      <div className="flex flex-col md:flex-col lg:items-center gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            The loud voice <br /> of your brand
          </h1>
          <p className="mt-6 text-lg text-gray-800 max-w-md">
            We will help you show your ads to more people for less money
          </p>
        </div>
        
        <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="relative z-10 rounded-3xl overflow-hidden bg-[#FAF8F4]">
            <img 
              src="./svg/hero.gif" 
              alt="Megaphone animation" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          <div className="absolute bottom-4 right-4 flex items-center text-gray-800 font-medium">
            EXPLORE <ChevronRight className="ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;