import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { motion, useInView, useAnimation } from 'framer-motion';
import { WordsPullUp } from './word/WordsPullup';

const ServicesSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -20% 0px" 
  });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  // Left column variant - animate from left
  const leftVariants = {
    hidden: { 
      x: -100,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Right column variant - animate from right
  const rightVariants = {
    hidden: { 
      x: 100,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="px-6 md:px-12 py-16" ref={sectionRef}>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="col-span-1 flex flex-col" 
          variants={leftVariants}
        >
          {/* Use WordsPullUp with proper props */}
          <div className="mb-8">
            <WordsPullUp 
              text="Our Services" 
              inView={isInView} 
              className="text-6xl" 
              justify="start" 
            />
          </div>
          
          <div className="mb-10">
            <WordsPullUp 
              text="We focus on the data that is really important for making each of our decisions, constantly testing, configuring and optimizing processes."
              inView={isInView}
              className="text-gray-800 text-base"
              justify="start"
            />
          </div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.8, duration: 0.5 }
              }
            }}
          >
            <button className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition mt-2">
              Learn more
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 grid-auto-rows-auto" 
          variants={rightVariants}
        >
          {/* Map through service cards */}
          {[
            {
              title: "Social Ads",
              description: "We create authentic content that delivers true value to your audience.",
              className: "bg-[#FAF8F4]"
            },
            {
              title: "SaaS marketing",
              description: "Experts work with your business to find potential customers.",
              className: "bg-[#FAF8F4]"
            },
            {
              title: "Content marketing",
              description: "Our content experts will create a digital marketing strategy.",
              className: "bg-[#1a1a1a] border-[#1a1a1a] sm:row-span-2 h-full",
              darkMode: true,
              icon: (
                <div className="w-full h-56 relative overflow-hidden">
                  <img 
                    src="/images/bg1.png" 
                    alt="Content Marketing Pencil" 
                    className="absolute top-0 right-0 h-full"
                  />
                </div>
              )
            },
            {
              title: "SEO",
              description: "Our SEO works — we know how to drive qualified traffic.",
              className: "bg-[#FAF8F4]"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    delay: 0.4 + (index * 0.1),
                    duration: 0.5 
                  }
                }
              }}
            >
              <ServiceCard 
                {...card}
                title={
                  <WordsPullUp 
                    text={card.title} 
                    inView={isInView} 
                    className={` ${card.darkMode ? 'text-white' : 'text-gray-900'}`}
                    justify="start" 
                  />
                }
                description={
                  <WordsPullUp 
                    text={card.description} 
                    inView={isInView} 
                    className={card.darkMode ? 'text-gray-300' : 'text-gray-700'}
                    justify="start" 
                  />
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;