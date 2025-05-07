import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { motion, useInView } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });
  
  return (
    <section id="results" className="px-6 md:px-12 py-16" ref={sectionRef}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        
        {/* Vertical line animation (desktop) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10 overflow-hidden" style={{
          top: '5%', 
          bottom: '15%',
          width: '2px'
        }}>
          <motion.div 
            className="bg-black h-full w-full origin-bottom"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              delay: 0.3
            }}
          />
        </div>
        
        {/* Pink quote icon testimonial card */}
        <TestimonialCard 
          quote="Their experience helped us to develop the business as a whole"
          testimonial="The MLab team has played an important role in providing us with focused marketing guidance. When I first started building my business, I turned to MLab experts. I had 10 employees and few sales. Now I have 26 employees in my team and the number of sales has increased 5 times."
          name="Philip Lane"
          title="Business owner"
          imageSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
          iconColor="#ff6694" 
          autoSlideInterval={6000}
          additionalTestimonials={[
            {
              quote: "The ROI we've seen is incredible, simply put",
              testimonial: "MLab has transformed our approach to social advertising. Their strategies have delivered consistent growth month over month. The data-driven approach means we're constantly improving and refining our campaigns.",
              name: "Sarah Johnson",
              title: "Marketing Director",
              imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
            },
            {
              quote: "They understand our brand better than we do",
              testimonial: "Working with MLab has been a game-changer for our startup. They took the time to truly understand our audience and market position. Their strategic insights have helped us establish a solid foundation for sustainable growth.",
              name: "Michael Chen",
              title: "CEO & Founder",
              imageSrc: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
            }
          ]}
        />
        
        {/* Horizontal line animation (mobile) */}
        <div className="md:hidden w-4/5 h-0.5 my-4 mx-auto overflow-hidden">
          <motion.div 
            className="bg-black h-full w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}
          />
        </div>
        
        {/* Orange quote icon testimonial card */}
        <TestimonialCard 
          quote="The MLab team is fast, savvy, and truly ahead of the curve"
          testimonial="The growth squad model helped us stay agile yet laser-focused on improving key metrics and growth objectives. Nobody is quick and consistent in delivering the kind of funnel growth."
          name="Kristin Watson"
          title="General Manager"
          imageSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
          iconColor="#ff8a33"
          autoSlideInterval={7000}
          additionalTestimonials={[
            {
              quote: "Their analytical approach drives real results",
              testimonial: "What sets MLab apart is their deep understanding of analytics. They don't just run campaigns; they constantly analyze performance data to optimize results. This has transformed our acquisition strategy completely.",
              name: "David Miller",
              title: "Product Lead",
              imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
            },
            {
              quote: "They've increased our conversions by 215%",
              testimonial: "Our e-commerce store has seen phenomenal growth since working with MLab. Their landing page optimizations and retargeting strategies have dramatically improved our conversion rates and average order value.",
              name: "Emma Rodriguez",
              title: "E-commerce Director",
              imageSrc: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100"
            }
          ]}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;