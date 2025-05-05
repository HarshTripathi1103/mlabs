import React from 'react';
import FaqItem from './FaqItem';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="px-6 md:px-12 py-16 overflow-hidden">
      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-8'>
        <motion.div 
          className="md:max-w-md"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Ask your question and get an answer within 24 hours.
          </p>
          
          <motion.button
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4,
              delay: 0.6,
              type: "spring",
              stiffness: 200
            }}
          >
            <MessageCircle size={18} />
            <span>Ask a question</span>
          </motion.button>
        </motion.div>
      
        <motion.div 
          className="space-y-4 w-full md:max-w-3xl"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaqItem 
            question="Do you work with a small business?" 
            answer="Yes, we work with businesses of all sizes. Our services are tailored to meet the unique needs of small businesses, helping them grow their online presence and reach their target audience effectively."
          />
          
          <FaqItem 
            question="Do you offer ongoing support?"
            answer="Not only do we offer the expected maintenance and security but we also offer design and marketing support. Our goal is to become an extension of your in-house marketing team and we will tailor a team and offering that empowers your internal team. You can read more about MLab here."
            isExpanded={false}
          />
          
          <FaqItem 
            question="How long does the project take on average?" 
            answer="The timeline depends on the scope and complexity of your project. Typically, small projects take 2-4 weeks, medium-sized projects 1-2 months, and larger projects 3+ months. We'll provide a detailed timeline during our initial consultation."
          />
          
          <FaqItem 
            question="Is there a possibility of offline meetings?" 
            answer="Yes, we offer both virtual and in-person meetings for clients located within our service areas. For clients in other locations, we provide comprehensive virtual consultation and collaboration options."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;