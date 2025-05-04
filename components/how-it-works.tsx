'use client';

import React from 'react';
import { motion } from 'motion/react';

interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: 'VisionIcon',
    title: 'Describe Your Vision',
    description:
      'Type a phrase, sentence, or paragraph that describes the image you want to create.',
  },
  {
    icon: 'MagicIcon',
    title: 'Watch the Magic',
    description:
      'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
  },
  {
    icon: 'DownloadIcon',
    title: 'Download & Share',
    description:
      'Instantly download your creation or share it with the world directly from our platform.',
  },
];

const HowItWorks: React.FC = () => (
  <motion.section
    className="py-16 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-2">How it works</h2>
      <p className="text-gray-500 mb-12">Transform Words Into Stunning Images</p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i + 0.2, duration: 0.6 }}
          >
            <div className="text-4xl mb-4">
              <span>{step.icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default HowItWorks;
