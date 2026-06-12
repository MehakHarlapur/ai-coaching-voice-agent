export default function SitemapPage() {
  const pages = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Community', href: '/community' },
        { name: 'Webinars', href: '/webinars' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact Sales', href: '/contact/sales' },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
      <p className="text-gray-600 mb-12 max-w-3xl">
        Explore all the pages and sections of AI Coach. Use this sitemap to quickly find what you're looking for on our website.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pages.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a 
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Can't find what you're looking for?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl">
          If you're having trouble finding specific information on our website, try using our search function or contact our support team for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Contact Support
          </a>
          <a 
            href="/help"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Visit Help Center
          </a>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Website Structure</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {pages.flatMap((section, sectionIndex) => [
              <li key={`section-${sectionIndex}`} className="px-6 py-4 bg-gray-50">
                <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
              </li>,
              ...section.links.map((link, linkIndex) => (
                <li key={`link-${sectionIndex}-${linkIndex}`} className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">•</span>
                    <a 
                      href={link.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {link.name}
                    </a>
                  </div>
                </li>
              ))
            ])}
          </ul>
        </div>
      </div>
    </div>
  );
}