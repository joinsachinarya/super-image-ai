
import React from 'react';
import { motion } from 'motion/react';

const PricingHeader: React.FC = () => (
  <motion.header
    className="bg-green-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">SuperImageAI</div>

      {/* Credits badge, greeting, user icon */}
      <div className="flex items-center space-x-6">
        <div className="bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow">
          <span>StarIcon</span>
          <span className="text-sm">Credits left: 4</span>
        </div>
        <span className="text-gray-700">Hi! Richard</span>
        <button onClick={() => console.log('User Icon')}>
          <span>UserIcon</span>
        </button>
      </div>
    </div>
  </motion.header>
);

export default PricingHeader;
