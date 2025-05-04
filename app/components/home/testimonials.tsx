'use client';

import React from 'react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Donald Jackman',
    role: 'Graphic Designer',
    avatar: 'AvatarIcon',
    review:
      "I've been using SuperImageAI for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: 'Richard Nelson',
    role: 'Content Creator',
    avatar: 'AvatarIcon',
    review:
      "I've been using SuperImageAI for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    name: 'James Washington',
    role: 'Co-Founder',
    avatar: 'AvatarIcon',
    review:
      "I've been using SuperImageAI for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
];

const Testimonials: React.FC = () => (
  <motion.section
    className="py-16 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="container mx-auto px-4 text-center mb-12">
      <h2 className="text-3xl font-bold mb-2">Customer testimonials</h2>
      <p className="text-gray-500">What Our Users Are Saying</p>
    </div>

    <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="p-6 border rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 * i + 0.2, duration: 0.6 }}
        >
          <div className="flex items-center mb-4 space-x-4">
            <div className="text-4xl">{t.avatar}</div>
            <div className="text-left">
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span key={idx}>StarIcon</span>
            ))}
          </div>

          <p className="text-gray-600 text-left">{t.review}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
