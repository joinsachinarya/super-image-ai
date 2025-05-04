
import React from 'react';
import { motion } from 'motion/react';

export interface PlanCardProps {
  title: string;
  description: string;
  price: number;    
  credits: number;
  delay?: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  credits,
  delay = 0,
}) => (
  <motion.div
    className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
  >
    {/* Icon placeholder */}
    <div className="text-4xl mb-4">
      <span>CameraIcon</span>
    </div>

    {/* Plan info */}
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-gray-500 mb-4">{description}</p>
    <p className="text-3xl font-bold">
      ${price}{' '}
      <span className="text-base font-normal">/ {credits} credits</span>
    </p>

    {/* CTA */}
    <button
      onClick={() => console.log(`Get started: ${title}`)}
      className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
    >
      Get started
    </button>
  </motion.div>
);

export default PlanCard;
