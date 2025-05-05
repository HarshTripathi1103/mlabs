import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our services</h2>
          <p className="text-gray-800 mb-6">
            We focus on the data that is really important for making each of our 
            decisions, constantly testing, configuring and optimizing processes.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Learn more
          </button>
        </div>
        
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 grid-auto-rows-auto">
          <ServiceCard 
            title="Social Ads"
            description="We create authentic content that delivers true value to your audience."
            className="bg-[#FAF8F4] "
          />
          
          <ServiceCard 
            title="SaaS marketing"
            description="Experts work with your business to find potential customers."
            className="bg-[#FAF8F4]"
          />

          <ServiceCard 
            title="Content marketing"
            description="Our content experts will create a digital marketing strategy." 
            className="bg-[#1a1a1a] border-[#1a1a1a] sm:row-span-2 h-full"
            darkMode={true}
            icon={
              <div className="w-full h-56 relative overflow-hidden ">
                <img 
                  src="/images/cmark.png" 
                  alt="Content Marketing Pencil" 
                  className=" absolute top-0 right-0 h-full"
                />
              </div>
            }
          />
          
          <ServiceCard 
            title="SEO"
            description="Our SEO works — we know how to drive qualified traffic."
            className="bg-[#FAF8F4]"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;