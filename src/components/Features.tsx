import React from 'react';
import { Zap, Shield, Globe, Code2, Cloud, Cpu } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Deploy your applications in seconds with our optimized infrastructure.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Enterprise-grade security with built-in protection against common threats.',
    icon: Shield,
  },
  {
    name: 'Global CDN',
    description: 'Deliver content quickly to users worldwide with our edge network.',
    icon: Globe,
  },
  {
    name: 'Modern Stack',
    description: 'Built with the latest technologies to ensure maximum performance.',
    icon: Code2,
  },
  {
    name: 'Cloud Native',
    description: 'Designed for the cloud with scalability and reliability in mind.',
    icon: Cloud,
  },
  {
    name: 'AI Powered',
    description: 'Leverage machine learning to optimize your development workflow.',
    icon: Cpu,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build faster
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools and features you need to accelerate your development workflow.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-xl shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}