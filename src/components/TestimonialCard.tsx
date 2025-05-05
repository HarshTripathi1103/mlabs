import React from 'react';
import { Quote } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  testimonial: string;
  name: string;
  title: string;
  imageSrc: string;
  iconColor?: string; 
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  testimonial, 
  name, 
  title, 
  imageSrc,
  iconColor = 'currentColor' 
}) => {
  return (
    <div className='flex flex-row justify-start items-start h-full'>
      <div className='transform scale-x-[-1] scale-y-[-1]'>
        <Quote color={iconColor} />
      </div>
    <div className="bg-[#FAF8F4] p-6 rounded-lg flex flex-col h-full w-full">
      <div className="flex mb-4">
        <p className="text-[35px] font-bold text-gray-900">{quote}</p>
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">{testimonial}</p>
      
      <div className="flex items-center mt-auto">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default TestimonialCard;