'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogPage() {
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Education',
      excerpt: 'How artificial intelligence is transforming the way we learn and teach in the 21st century.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'September 15, 2025',
      readTime: '5 min read',
      category: 'AI Trends'
    },
    {
      id: 2,
      title: 'Personalized Learning with AI',
      excerpt: 'Discover how AI tailors educational content to individual learning styles and paces.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'September 10, 2025',
      readTime: '4 min read',
      category: 'Learning Tech'
    },
    {
      id: 3,
      title: 'AI Language Learning: Breaking Barriers',
      excerpt: 'How AI is making language learning more accessible and effective than ever before.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'September 5, 2025',
      readTime: '6 min read',
      category: 'Language Learning'
    },
    {
      id: 4,
      title: 'The Ethics of AI in Education',
      excerpt: 'Exploring the ethical considerations and responsible use of AI in learning environments.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'August 28, 2025',
      readTime: '7 min read',
      category: 'AI Ethics'
    },
    {
      id: 5,
      title: 'AI-Powered Career Coaching',
      excerpt: 'How AI is revolutionizing career guidance and professional development.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'August 20, 2025',
      readTime: '5 min read',
      category: 'Career Growth'
    },
    {
      id: 6,
      title: 'The Science Behind Adaptive Learning',
      excerpt: 'Understanding the algorithms that power personalized education experiences.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      date: 'August 15, 2025',
      readTime: '8 min read',
      category: 'Learning Science'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Education Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest trends, insights, and breakthroughs in AI-powered education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => router.push(`/blog/${post.id}`)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Want more educational content?</h2>
        <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
