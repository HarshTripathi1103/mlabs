import React, { useState, useRef } from "react";
import BlogCard from "./BlogCard";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

const BlogSection: React.FC = () => {
  const [showMoreArticles, setShowMoreArticles] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const blogArticles = [
    {
      title: "Clean up your Email marketing strategy for better open rates",
      category: "Email Marketing",
      description:
        "Email marketing remains one of the most powerful tools for businesses to connect with their audience and drive conversions.",
      imageSrc: "./svg/3.svg",
      imageBackground: "bg-[#FFC4A3]",
    },
    {
      title:
        "Search engine site promotion or contextual advertising. What to choose?",
      category: "SEO",
      description:
        "SEO and contextual advertising are two Internet marketing tools that are used to attract visitors (traffic) to the site. But which one is better?",
      imageSrc: "./svg/1.svg",
      imageBackground: "bg-[#FE7EB9]",
    },
    {
      title: "Social Media Marketing Trends to Watch in 2025",
      category: "Social Media",
      description:
        "Stay ahead of the competition by leveraging these emerging social media marketing strategies that are proving most effective this year.",
      imageSrc: "./svg/3.svg",
      imageBackground: "bg-[#FFC4A3]",
    },
    {
      title: "How to Build a Content Strategy That Actually Converts",
      category: "Content",
      description:
        "Learn how to craft compelling content that not only engages your audience but actively drives them toward your conversion goals.",
      imageSrc: "./svg/1.svg",
      imageBackground: "bg-[#FE7EB9]",
    },
  ];

  const initialArticles = blogArticles.slice(0, 2);

  const additionalArticles = blogArticles.slice(2);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const additionalCardVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const handleMoreArticles = () => {
    setShowMoreArticles(true);
  };

  const handleCloseArticles = () => {
    setShowMoreArticles(false);
  };

  return (
    <section id="blog" className="px-6 md:px-12 py-16" ref={sectionRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Blog
          </h2>
          <p className="text-gray-700 max-w-md">
            In our blog you can read articles written by experts in the field of
            marketing and business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {initialArticles.map((article, index) => (
            <motion.div
              key={`initial-${index}`}
              custom={index}
              variants={cardVariants}
            >
              <BlogCard
                title={article.title}
                category={article.category}
                description={article.description}
                imageSrc={article.imageSrc}
                imageBackground={article.imageBackground}
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {showMoreArticles &&
              additionalArticles.map((article, index) => (
                <motion.div
                  key={`additional-${index}`}
                  custom={index}
                  variants={additionalCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  layout
                >
                  <BlogCard
                    title={article.title}
                    category={article.category}
                    description={article.description}
                    imageSrc={article.imageSrc}
                    imageBackground={article.imageBackground}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          variants={buttonVariants}
        >
          <AnimatePresence mode="wait">
            {showMoreArticles ? (
              <motion.button
                key="close-button"
                className="bg-black text-white px-6 py-3 rounded-full transition"
                onClick={handleCloseArticles}
                whileTap="tap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                Close articles
              </motion.button>
            ) : (
              <motion.button
                key="more-button"
                className="bg-black text-white px-6 py-3 rounded-full transition"
                onClick={handleMoreArticles}
                whileTap="tap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                More articles
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
