import React from 'react';

interface BlogCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageBackground?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  category, 
  description, 
  imageSrc,
  imageBackground
}) => {
  return (
    <div className="overflow-hidden">
      <div className="relative mb-8">
        <div className={`rounded-3xl overflow-hidden ${imageBackground || ''} max-w-2xl mx-auto`}>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto object-contain max-h-64"
          />
        </div>
        <div className="absolute top-4 right-4 bg-black text-white text-sm font-bold px-4 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg font-medium text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;