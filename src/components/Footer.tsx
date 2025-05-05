import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-12 pt-16 pb-8 bg-[#FCF9F6] relative">
      <div className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[2px] bg-black"></div>
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">MLab</h2>
          <p className="text-gray-700 max-w-xs mb-4">
            We will help you show your ads to more people for less money
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Social Ads</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">SaaS marketing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Content marketing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">SEO</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Press</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Claim</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="pt-8  text-center text-gray-600 text-sm">
        © 2025 MLab, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;