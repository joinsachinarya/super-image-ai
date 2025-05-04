'use client';

import React from 'react';
import { motion } from 'motion/react';

const LoginForm: React.FC = () => (
  <motion.div
    className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    <button
      className="text-gray-400 hover:text-gray-600 float-right"
      onClick={() => console.log('Close')}
    >
      <span>CloseIcon</span>
    </button>

    <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
    <p className="text-gray-500 mb-6">Welcome back! Please sign in to continue</p>

    {/* Email */}
    <div className="flex items-center border border-gray-300 rounded-full px-4 h-12 mb-4">
      <span className="text-gray-400 mr-2">EmailIcon</span>
      <input
        type="email"
        placeholder="Email id"
        className="w-full h-full outline-none placeholder-gray-400 text-gray-800"
      />
    </div>

    {/* Password */}
    <div className="flex items-center border border-gray-300 rounded-full px-4 h-12 mb-2">
      <span className="text-gray-400 mr-2">LockIcon</span>
      <input
        type="password"
        placeholder="Password"
        className="w-full h-full outline-none placeholder-gray-400 text-gray-800"
      />
    </div>

    <div className="text-right mb-6">
      <button
        onClick={() => console.log('Forgot password')}
        className="text-sm text-blue-600 hover:underline"
      >
        Forgot password?
      </button>
    </div>

    <button
      onClick={() => console.log('Login')}
      className="w-full h-12 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 mb-4"
    >
      Login
    </button>

    <p className="text-center text-gray-500 text-sm">
      Don’t have an account?{' '}
      <button
        onClick={() => console.log('Sign up')}
        className="text-blue-600 hover:underline"
      >
        Sign up
      </button>
    </p>
  </motion.div>
);

export default LoginForm;
