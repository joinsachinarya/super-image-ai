'use client';

import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => (
  <motion.footer
    className="bg-gray-50 py-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-bold mb-4 md:mb-0">SuperImageAI</div>
      <p className="text-gray-500 mb-4 md:mb-0">
        All rights reserved. Copyright © SuperImageAI
      </p>
      <div className="flex space-x-4">
        <span>FacebookIcon</span>
        <span>TwitterIcon</span>
        <span>InstagramIcon</span>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
