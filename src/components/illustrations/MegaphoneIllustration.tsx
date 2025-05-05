import React from 'react';

const MegaphoneIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      {/* Main pink circle */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-pink-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Star shape */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z" fill="white" />
        </svg>
      </div>
      
      {/* Small dots */}
      <div className="absolute bottom-20 left-10 w-4 h-4 bg-gray-900 rounded-full"></div>
      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-gray-300 rounded-full"></div>
      
      {/* Social icons */}
      <div className="absolute right-16 top-10 w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C16.4183 3 20 6.58172 20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3Z" stroke="black" strokeWidth="2" />
          <path d="M19 13L21 15M3 13L1 15" stroke="black" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute right-24 top-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold">in</span>
      </div>
      
      <div className="absolute right-8 bottom-1/3 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="#4267B2" stroke="#4267B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      {/* Megaphone */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 70H90L100 50H40L30 70Z" fill="#333333" />
          <path d="M90 70H100C110 70 120 60 120 50C120 40 110 30 100 30H40L30 70H90Z" fill="white" stroke="#333333" strokeWidth="2" />
          <rect x="20" y="70" width="20" height="60" rx="5" fill="#333333" />
          <path d="M70 110C70 115.523 65.5228 120 60 120C54.4772 120 50 115.523 50 110C50 104.477 54.4772 100 60 100C65.5228 100 70 104.477 70 110Z" fill="#FFB6B6" stroke="#333333" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default MegaphoneIllustration;