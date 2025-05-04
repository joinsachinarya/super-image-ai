'use client';

import React from 'react';
import { motion } from 'motion/react';

const CTA: React.FC = () => (
  <motion.section
    className="py-12 bg-gray-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">See the magic. Try now</h2>
      <motion.button
        onClick={() => console.log('Generate Images ✨')}
        className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Generate Images ✨
      </motion.button>
    </div>
  </motion.section>
);

export default CTA;
