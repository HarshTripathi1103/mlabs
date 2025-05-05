import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="results" className="px-6 md:px-12 py-16">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        
        <div className="hidden md:block absolute left-1/2 top-[5%] bottom-[15%] w-0.5 bg-black transform -translate-x-1/2 z-10"></div>
        
        {/* Pink quote icon */}
        <TestimonialCard 
          quote="Their experience helped us to develop the business as a whole"
          testimonial="The MLab team has played an important role in providing us with focused marketing guidance. When I first started building my business, I turned to MLab experts. I had 10 employees and few sales. Now I have 26 employees in my team and the number of sales has increased 5 times."
          name="Philip Lane"
          title="Business owner"
          imageSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
          iconColor="#ff6694" // Pink color from your theme
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
        
        <div className="md:hidden h-0.5 w-4/5 bg-black my-4 mx-auto"></div>
        
        {/* Orange quote icon */}
        <TestimonialCard 
          quote="The MLab team is fast, savvy, and truly ahead of the curve"
          testimonial="The growth squad model helped us stay agile yet laser-focused on improving key metrics and growth objectives. Nobody is quick and consistent in delivering the kind of funnel growth."
          name="Kristin Watson"
          title="General Manager"
          imageSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
          iconColor="#ff8a33" // Orange color from your theme
          autoSlideInterval={7000} // Slightly different timing for visual interest
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