"use client";

import { Check, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out our AI coaching',
    features: [
      '5 AI coaching sessions/month',
      'Basic voice interactions',
      'Email support',
      'Access to community forum'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For serious learners',
    features: [
      'Unlimited AI coaching',
      'Advanced voice interactions',
      'Priority support',
      'Session summaries',
      'Progress tracking'
    ],
    buttonText: 'Go Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom integrations',
      'Team management',
      'API access',
      '24/7 support'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 bg-white border-2 rounded-2xl shadow-sm ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && (
                  <span className="text-base font-medium text-gray-500">/month</span>
                )}
              </p>
              <p className="mt-2 text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`block w-full px-6 py-3 text-center text-base font-medium rounded-md ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}