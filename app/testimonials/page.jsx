'use client';

import { useRouter } from 'next/navigation';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Language Student',
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
      content: 'This AI coaching platform has completely transformed how I learn French. The voice recognition is incredibly accurate and the personalized feedback is invaluable.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Professional Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'As a busy professional, I needed a flexible way to improve my public speaking. The AI coach provides real-time feedback that\'s helped me become more confident in my presentations.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'High School Teacher',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      content: 'I\'ve been using this with my students and the results are remarkable. The AI adapts to each student\'s pace and learning style.',
      rating: 4
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Entrepreneur',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
      content: 'The interview preparation module is outstanding. It helped me land my dream job with realistic practice scenarios.',
      rating: 5
    },
    {
      id: 5,
      name: 'Priya Patel',
      role: 'University Student',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      content: 'I was skeptical about AI coaching at first, but the natural conversations and instant feedback have improved my English fluency dramatically.',
      rating: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Corporate Trainer',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      content: 'We\'ve integrated this into our employee training program. The analytics dashboard helps us track progress effectively.',
      rating: 4
    },
  ];

  const router = useRouter();

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our community has to say about their experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="text-yellow-400 text-lg mb-3">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to experience it yourself?</h2>
        <button 
          onClick={() => router.push('/dashboard')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
}