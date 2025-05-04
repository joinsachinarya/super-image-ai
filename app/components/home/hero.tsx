'use client';

import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => (
  <motion.section
    className="bg-gray-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.span
        className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Best text-to-image generator
      </motion.span>

      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-8 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art in seconds – just
        type, and watch the magic happen.
      </motion.p>

      <motion.button
        onClick={() => console.log('Generate Images ✨')}
        className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Generate Images ✨
      </motion.button>

      <motion.div
        className="flex justify-center gap-4 mt-10 overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
