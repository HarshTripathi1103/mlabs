import React, { useEffect, useRef } from "react";
import { MoveDownRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { WordsPullUp } from "./word/WordsPullup";

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
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
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 30,
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
        delay: 0.6,
      },
    },
  };

  const exploreVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Subtle hover animation for explore button
  const exploreHover = {
    rest: { x: 0, y: 0 },
    hover: {
      x: 3,
      y: 3,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="px-6 md:px-12 pt-8 pb-16 bg-[#FAF8F4] relative"
      ref={sectionRef}
    >
      <motion.div
        className="flex flex-col lg:items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col items-center text-center z-10">
          <div className="overflow-hidden">
            <WordsPullUp
              text="The loud voice of your brand"
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight"
              inView={isInView}
              justify="center"
            />
          </div>
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
        </motion.div>

        
        <div className="relative w-full flex justify-between items-center px-4 mt-[-20px]">
          <motion.div
            className="hidden md:block text-gray-800 font-medium max-w-[260px]"
            variants={exploreVariants}
          >
            We will help you show your ads <br />
            to more people for less money
          </motion.div>

         
          <motion.div
            className="flex items-center text-gray-800 font-medium cursor-pointer ml-auto"
            variants={exploreVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            EXPLORE
            <motion.div
              variants={exploreHover}
              className="flex items-center justify-center ml-1"
            >
              <MoveDownRight size={20}  />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
