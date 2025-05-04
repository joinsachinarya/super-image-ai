'use client';

import React from 'react';
import { motion } from 'motion/react';

const Header: React.FC = () => (
  <motion.header
    className="bg-white shadow-sm"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      {/* Replace this with your real logo */}
      <div className="text-2xl font-bold">SuperImageAI</div>

      <nav className="hidden md:flex space-x-6">
        <button
          onClick={() => console.log('Pricing')}
          className="text-gray-600 hover:text-gray-900"
        >
          Pricing
        </button>
        <button
          onClick={() => console.log('Login')}
          className="text-gray-600 hover:text-gray-900"
        >
          Login
        </button>
      </nav>

      {/* mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => console.log('Menu')}
      >
        <span>MenuIcon</span>
      </button>
    </div>
  </motion.header>
);

export default Header;
