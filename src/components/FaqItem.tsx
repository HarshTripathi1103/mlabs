import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  isExpanded?: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ 
  question, 
  answer, 
  isExpanded = false
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  
  return (
    <motion.div 
      className="rounded-3xl overflow-hidden border-2"
      initial={false}
      animate={{ 
        backgroundColor: expanded ? '#fff0e5' : '#fcf9f6',
        borderColor: expanded ? '#ffd6b8' : '#000000'
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-bold text-gray-900 text-lg">{question}</span>
        <motion.div
          className="bg-black rounded-full w-7 h-7 flex items-center justify-center"
          initial={false}
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Plus size={16} className="text-white" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div 
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 0 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 }
            }}
            transition={{ 
              duration: 0.4, 
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 border-t border-orange-200">
              <p className="text-gray-700 font-medium">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;