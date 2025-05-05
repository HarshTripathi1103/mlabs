import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  testimonial: string;
  name: string;
  title: string;
  imageSrc: string;
  iconColor?: string;
  additionalTestimonials?: Array<{
    quote: string;
    testimonial: string;
    name: string;
    title: string;
    imageSrc: string;
  }>;
  autoSlideInterval?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  testimonial,
  name,
  title,
  imageSrc,
  iconColor = 'currentColor',
  additionalTestimonials = [],
  autoSlideInterval = 5000
}) => {
  const allTestimonials = [
    { quote, testimonial, name, title, imageSrc },
    ...additionalTestimonials
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = allTestimonials[currentIndex];

  useEffect(() => {
    if (allTestimonials.length <= 1) return;
    
    const startSlideTimer = () => {
      slideTimerRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex === allTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, autoSlideInterval);
    };

    startSlideTimer();
    
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentIndex, allTestimonials.length, autoSlideInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  const renderPagination = () => {
    if (allTestimonials.length <= 1) return null;
    
    return (
      <div className="flex justify-center mt-4 space-x-2">
        {allTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-gray-800' : 'w-1.5 bg-gray-300'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              if (slideTimerRef.current) {
                clearTimeout(slideTimerRef.current);
              }
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='flex flex-row justify-start items-start h-full'>
      <div className='transform scale-x-[-1] scale-y-[-1]'>
        <Quote color={iconColor} />
      </div>
      <div className="bg-[#FAF8F4] p-6 rounded-lg flex flex-col h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 200, // Reduced from 300 for slower motion
              damping: 25, // Adjusted for smoother animation
              mass: 1.2, // Added mass to make it feel heavier/slower
              duration: 0.8, // Increased from 0.5 for slower animation
              delay: 0.1 // Small delay before animation starts
            }}
            className="flex flex-col h-full"
          >
            <div className="flex mb-4">
              <p className="text-[35px] font-bold text-gray-900">{current.quote}</p>
            </div>
            
            <p className="text-gray-700 mb-6 flex-grow">{current.testimonial}</p>
            
            <div className="flex items-center mt-auto">
              <img 
                src={current.imageSrc} 
                alt={current.name} 
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-bold text-gray-900">{current.name}</p>
                <p className="text-gray-600 text-sm">{current.title}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {renderPagination()}
      </div>
    </div>
  );
};

export default TestimonialCard;