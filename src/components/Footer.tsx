import React, { useRef } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Footer: React.FC = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -100px 0px" 
  });

  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i:number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.6 + (i * 0.1), 
        duration: 0.4, 
        type: "spring", 
        stiffness: 200 
      }
    })
  };

  return (
    <footer className="px-6 md:px-12 pt-16 pb-8 bg-[#FAF8F4] relative" ref={footerRef}>
      {/* Animated horizontal line */}
      <div className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[2px] overflow-hidden">
        <motion.div 
          className="bg-black h-full w-full origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
        />
      </div>

      <motion.div 
        className="flex flex-col md:flex-row justify-between mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="mb-8 md:mb-0"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4"
            variants={itemVariants}
          >
            MLab
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-xs mb-4"
            variants={itemVariants}
          >
            We will help you show your ads to more people for less money
          </motion.p>
          <div className="flex space-x-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" }
            ].map(({Icon, href}, index) => (
              <motion.a 
                key={index} 
                href={href} 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                custom={index}
                variants={socialIconVariants}
                whileHover={{ 
                  scale: 1.2, 
                  transition: { duration: 0.2 } 
                }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {[
            {
              title: "Solutions",
              links: ["Social Ads", "SaaS marketing", "Content marketing", "SEO"]
            },
            {
              title: "Support",
              links: ["Pricing", "Documentation", "Guides"]
            },
            {
              title: "Company",
              links: ["About", "Blog", "Press", "Partners"]
            },
            {
              title: "Legal",
              links: ["Claim", "Privacy", "Terms"]
            }
          ].map((column, columnIndex) => (
            <motion.div 
              key={columnIndex}
              variants={itemVariants}
              custom={columnIndex}
            >
              <h3 className="font-bold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.4 + (columnIndex * 0.1) + (linkIndex * 0.05),
                          duration: 0.3 
                        }
                      }
                    }}
                  >
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="pt-8 text-center text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        © 2025 MLab, Inc. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;