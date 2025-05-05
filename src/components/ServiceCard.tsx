import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  darkMode?: boolean;
  icon?: ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  className = '',
  darkMode = false,
  icon
}) => {
  return (
    <div className={`shadow-sm hover:shadow-md transition duration-300 border-[2px] border-black rounded-3xl overflow-hidden ${darkMode ? 'text-white' : 'text-gray-900'} ${className}`}>
      {icon}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-[40px] font-bold md:pt-16">{title}</h3>
        </div>
        <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;