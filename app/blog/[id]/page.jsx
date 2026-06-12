import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Education',
    excerpt: 'How artificial intelligence is transforming the way we learn and teach in the 21st century.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-09-15',
    readTime: '5 min read',
    category: 'AI Trends',
    content: [
      'The integration of artificial intelligence in education is no longer a futuristic concept but a present reality. AI-powered systems are now capable of personalizing learning experiences, adapting to individual student needs, and providing real-time feedback. This transformation is making education more accessible and effective than ever before, breaking down traditional barriers to learning.',
      'One of the most significant impacts of AI in education is its ability to provide personalized learning paths. By analyzing student performance data, AI algorithms can identify knowledge gaps and tailor content to address specific needs. This level of customization ensures that no student is left behind, as the system can adjust the difficulty level and pace according to each learner\'s capabilities.',
      'Looking ahead, the potential applications of AI in education are limitless. From virtual tutors that provide 24/7 assistance to predictive analytics that can identify at-risk students, AI is set to revolutionize the way we approach teaching and learning. However, it\'s crucial to implement these technologies thoughtfully, ensuring they complement rather than replace the human elements of education.'
    ]
  },
  {
    id: '2',
    title: 'Personalized Learning with AI',
    excerpt: 'Discover how AI tailors educational content to individual learning styles and paces.',
    image: 'https://images.unsplash.com/photo-1503676260728-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-09-10',
    readTime: '4 min read',
    category: 'Learning Tech',
    content: [
      'Personalized learning has long been considered the holy grail of education, and AI is making this a reality. By leveraging machine learning algorithms, educational platforms can now analyze vast amounts of data about how students learn, what challenges they face, and what teaching methods work best for them. This data-driven approach allows for truly individualized learning experiences that adapt in real-time.',
      'The beauty of AI-powered personalized learning lies in its ability to identify patterns that might be invisible to human educators. For instance, an AI system might notice that a student learns mathematical concepts better through visual representations rather than text-based explanations. The system can then adjust the content delivery accordingly, ensuring optimal comprehension and retention.',
      'As these systems continue to evolve, we\'re seeing the emergence of predictive analytics that can forecast learning outcomes and suggest interventions before students fall behind. This proactive approach to education ensures that learning difficulties are addressed early, setting students up for long-term success in their educational journeys.'
    ]
  },
  {
    id: '3',
    title: 'AI Language Learning: Breaking Barriers',
    excerpt: 'How AI is making language learning more accessible and effective than ever before.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-09-05',
    readTime: '6 min read',
    category: 'Language Learning',
    content: [
      'Language learning has traditionally been a challenging and time-consuming process, but AI is changing that narrative. Modern language learning applications powered by AI can now provide immersive, interactive experiences that rival traditional classroom settings. These platforms use natural language processing to understand and respond to learners in real-time, offering instant feedback and corrections.',
      'One of the most exciting developments in AI language learning is the ability to practice conversations with virtual tutors. These AI tutors can simulate real-life conversations, adapt to the learner\'s proficiency level, and even provide cultural context. This creates a safe, judgment-free environment where learners can practice speaking and listening skills without the fear of making mistakes in front of others.',
      'Furthermore, AI can analyze a learner\'s progress and adjust the curriculum dynamically. If a student struggles with certain grammar rules or vocabulary, the system can provide additional practice and explanations. This level of personalization ensures that each learner progresses at their own pace, making language acquisition more efficient and enjoyable.'
    ]
  },
  {
    id: '4',
    title: 'The Ethics of AI in Education',
    excerpt: 'Exploring the ethical considerations and responsible use of AI in learning environments.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-08-28',
    readTime: '7 min read',
    category: 'AI Ethics',
    content: [
      'As AI becomes increasingly integrated into educational systems, it\'s crucial to address the ethical implications of these technologies. One of the primary concerns is data privacy, as AI systems require access to vast amounts of student data to function effectively. Ensuring that this data is collected, stored, and used responsibly is paramount to maintaining trust and protecting student rights.',
      'Another critical consideration is algorithmic bias. AI systems are only as unbiased as the data they\'re trained on, and if that data contains historical biases, the AI may perpetuate or even amplify them. Educational institutions must implement rigorous testing and validation processes to identify and mitigate potential biases in AI systems before they\'re deployed in learning environments.',
      'Finally, there\'s the question of human oversight. While AI can enhance education in numerous ways, it should never fully replace human educators. The role of teachers remains vital in providing emotional support, mentorship, and the human connection that technology cannot replicate. Striking the right balance between AI assistance and human guidance is essential for creating ethical and effective educational experiences.'
    ]
  },
  {
    id: '5',
    title: 'AI-Powered Career Coaching',
    excerpt: 'How AI is revolutionizing career guidance and professional development.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-08-20',
    readTime: '5 min read',
    category: 'Career Growth',
    content: [
      'The job market is evolving at an unprecedented pace, and AI-powered career coaching is helping individuals navigate this complex landscape. These intelligent systems can analyze a person\'s skills, experiences, and interests to suggest potential career paths they might not have considered. By processing vast amounts of labor market data, AI can identify emerging job trends and in-demand skills, providing valuable insights for career planning.',
      'One of the most significant advantages of AI career coaching is its ability to provide personalized recommendations at scale. Whether you\'re a recent graduate or a seasoned professional looking to pivot careers, AI can suggest relevant courses, certifications, and skill development opportunities tailored to your specific goals. This democratizes access to career guidance that was previously only available to those who could afford expensive career coaches.',
      'Looking to the future, we can expect AI career coaches to become even more sophisticated, potentially predicting career trajectories and suggesting proactive steps for professional growth. However, it\'s important to remember that while AI can provide valuable data-driven insights, human judgment and mentorship remain essential for making major career decisions.'
    ]
  },
  {
    id: '6',
    title: 'The Science Behind Adaptive Learning',
    excerpt: 'Understanding the algorithms that power personalized education experiences.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    date: '2025-08-15',
    readTime: '8 min read',
    category: 'Learning Science',
    content: [
      'Adaptive learning systems represent one of the most significant technological advancements in education, powered by sophisticated algorithms that continuously adjust to a learner\'s needs. At their core, these systems use machine learning models that process vast amounts of interaction data to understand how students learn best. By analyzing response patterns, time spent on tasks, and error rates, the system can create a detailed learning profile for each student.',
      'The real magic happens in the recommendation engine, which uses techniques like collaborative filtering and knowledge space theory to determine the most appropriate next steps in a student\'s learning journey. These systems can identify knowledge gaps with remarkable precision and deliver targeted content to address specific weaknesses. This approach ensures that students spend time on material they actually need to work on, rather than following a one-size-fits-all curriculum.',
      'As these systems gather more data, they become increasingly effective at predicting learning outcomes and optimizing the educational experience. However, it\'s important to note that the most successful implementations of adaptive learning combine these technological capabilities with human expertise. Educators play a crucial role in interpreting the data, providing context, and offering the human connection that technology alone cannot replicate.'
    ]
  },
];

export default function BlogPost({ params }) {
  const { id } = params;
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>
      </div>
      
      <article className="prose dark:prose-invert max-w-none">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span className="text-indigo-600 dark:text-indigo-400">{post.category}</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="prose-lg dark:prose-invert">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | AI Coaching Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['AI Education Team'],
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
  };
}