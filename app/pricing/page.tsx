'use client';

import React from 'react';
import PricingHeader from '../components/pricing/pricing-header'; 
import PlanCard, { PlanCardProps } from '../components/pricing/plan-card';

const plans: PlanCardProps[] = [
  {
    title: 'Basic',
    description: 'Best for personal use.',
    price: 10,
    credits: 100,
    delay: 0.1,
  },
  {
    title: 'Advanced',
    description: 'Best for business use.',
    price: 50,
    credits: 500,
    delay: 0.2,
  },
  {
    title: 'Business',
    description: 'Best for enterprise use.',
    price: 250,
    credits: 5000,
    delay: 0.3,
  },
];

const PricingPage: React.FC = () => (
  <div className="bg-green-50 min-h-screen">
    <PricingHeader />

    <section className="container mx-auto px-4 py-16 text-center">
      {/* Pill */}
      <button
        onClick={() => console.log('Our Plans')}
        className="bg-white border border-gray-300 text-gray-600 uppercase text-xs rounded-full px-4 py-1 mb-4"
      >
        OUR PLANS
      </button>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12">Choose the plan</h2>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <PlanCard
            key={idx}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            credits={plan.credits}
            delay={plan.delay}
          />
        ))}
      </div>
    </section>
  </div>
);

export default PricingPage;
