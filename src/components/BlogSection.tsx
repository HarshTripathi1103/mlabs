import React from 'react';
import BlogCard from './BlogCard';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Blog</h2>
        <p className="text-gray-700 max-w-md">
          In our blog you can read articles written by experts in the field of marketing and business.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <BlogCard 
          title="Clean up your Email marketing strategy for better open rates"
          category="Email Marketing"
          description="Email marketing remains one of the most powerful tools for businesses to connect with their audience and drive conversions."
          imageSrc="./svg/3.svg"
          imageBackground="bg-[#FFC4A3]" // Light pink background like in your image
        />
        
        <BlogCard 
          title="Search engine site promotion or contextual advertising. What to choose?"
          category="SEO"
          description="SEO and contextual advertising are two Internet marketing tools that are used to attract visitors (traffic) to the site. But which one is better?"
          imageSrc="./svg/1.svg"
          imageBackground="bg-[#FE7EB9]" // Darker pink background for the second image
        />
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          More articles
        </button>
      </div>
    </section>
  );
};

export default BlogSection;