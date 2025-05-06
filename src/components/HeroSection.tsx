import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { WordsPullUp } from './word/WordsPullup';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.1
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0,
      y: 30
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
        delay: 0.6
      }
    }
  };

  const exploreVariants = {
    hidden: { 
      opacity: 0,
      x: 20
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Subtle hover animation for explore button
  const exploreHover = {
    rest: { x: 0 },
    hover: { 
      x: 5, 
      transition: { 
        duration: 0.3,
        type: "tween",
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="px-6 md:px-12 pt-8 pb-16 bg-[#FFF9F5]" ref={sectionRef}>
      <motion.div 
        className="flex flex-col md:flex-col lg:items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden">
            <WordsPullUp 
              text="The loud voice of your brand" 
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight"
              inView={isInView}
              justify="center"
            />
          </div>
          
          <motion.p 
            className="mt-6 text-lg text-gray-800 max-w-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.7, 
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                } 
              }
            }}
          >
            We will help you show your ads to more people for less money
          </motion.p>
        </div>
        
        <motion.div 
          className="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto"
          variants={imageVariants}
        >
          <motion.div 
            className="relative z-10 rounded-3xl overflow-hidden bg-[#FAF8F4]" 
            transition={{ duration: 0.5, delay: 0.8 }} 
          >
            <img 
              src="./svg/hero.gif" 
              alt="Megaphone animation" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 right-4 flex items-center text-gray-800 font-medium cursor-pointer"
            variants={exploreVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            EXPLORE 
            <motion.div variants={exploreHover}>
              <ChevronRight className="ml-1" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;