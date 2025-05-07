import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  isExpanded?: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <motion.div
      className="rounded-3xl overflow-hidden border-2"
      initial={false}
      animate={{
        backgroundColor: expanded ? "#fff0e5" : "#fcf9f6",
        borderColor: expanded ? "#ffd6b8" : "#000000",
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="w-full px-4 sm:px-6 py-4 text-left flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="font-bold text-gray-900 text-base sm:text-lg flex-1 pr-3">
          {question}
        </span>
        <motion.div
          className="bg-black rounded-full min-w-[28px] h-7 flex-shrink-0 flex items-center justify-center"
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
              collapsed: { opacity: 0, height: 0, marginTop: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-4 relative">
              <motion.div
                className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-[2px] bg-black"
                initial={{ width: 0 }}
                animate={{ width: "calc(100% - 32px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
              />
              <div className="pt-4">
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
