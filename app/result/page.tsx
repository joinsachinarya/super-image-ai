'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import PricingHeader from '../components/pricing/pricing-header';

const ResultPage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');

  return (
    <div className="bg-green-50 min-h-screen">
      <PricingHeader />

      <main className="container mx-auto px-4 py-16 flex flex-col items-center space-y-12">
        {/* Result Image + Loading Bar */}
        <motion.div
          className="relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* placeholder for generated image */}
          <div className="w-80 h-80 bg-gray-200 rounded-md overflow-hidden" />

          {/* loading text + bar */}
          <div className="absolute bottom-0 left-0 right-0">
            <p className="text-center text-gray-600 mb-1">Loading.....</p>
            <div className="h-1 bg-blue-600 w-full" />
          </div>
        </motion.div>

        {/* Prompt input + Generate button */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex bg-gray-600 rounded-full overflow-hidden">
            <input
              type="text"
              className="flex-1 px-6 py-3 bg-transparent placeholder-gray-300 text-white focus:outline-none"
              placeholder="Describe what you want to generate"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={() => console.log('Generate')}
              className="px-6 py-3 bg-black text-white rounded-r-full hover:bg-gray-900 transition"
            >
              Generate
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ResultPage;
