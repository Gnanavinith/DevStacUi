import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '5 Team members',
      '10 Projects',
      'Basic analytics',
      'Community support',
      '5GB storage',
      'API access',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    featured: true,
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '50GB storage',
      'Advanced API access',
      'Custom integrations',
      'SLA guarantee',
    ],
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Everything in Professional',
      'Dedicated support',
      'Custom contracts',
      'Unlimited storage',
      'Advanced security',
      'On-premise option',
      '24/7 phone support',
      'Custom training',
    ],
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.featured
                  ? 'bg-white ring-2 ring-indigo-600 shadow-xl scale-105'
                  : 'bg-white shadow-sm hover:shadow-xl'
              } transition-all duration-300 p-8`}
            >
              {tier.featured && (
                <span className="absolute top-0 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-indigo-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full px-6 py-3 text-base font-medium ${
                    tier.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                  } transition-colors duration-200`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}