"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI coaching work?",
    answer: "Our AI coaching uses advanced natural language processing to understand your learning needs and provide personalized guidance. It adapts to your progress and learning style over time."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All your conversations and data are encrypted and stored securely. We comply with all relevant data protection regulations."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your subscription at any time through your account settings. There are no cancellation fees or hidden charges."
  },
  {
    question: "What devices are supported?",
    answer: "Our platform works on all modern web browsers. We also have mobile apps available for both iOS and Android devices."
  },
  {
    question: "Do you offer team or educational discounts?",
    answer: "Yes, we offer special pricing for educational institutions and teams. Please contact our sales team for more information."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for a free account and follow the onboarding process. You can start using the AI coaching within minutes!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about our AI coaching platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-${index}`}
                className={`px-6 pb-5 transition-all duration-300 ease-in-out ${openIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Still have questions?{' '}
            <a href="mailto:support@aicoach.com" className="font-medium text-blue-600 hover:text-blue-500">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
