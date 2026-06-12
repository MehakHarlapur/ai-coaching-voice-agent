export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
        <p className="text-gray-600 mb-6">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
        <p className="text-gray-600 mb-6">
          We use cookies to understand how you use our website and to improve your experience. This includes remembering your preferences and tracking visitor statistics.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
          <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
          <li><strong>Targeting Cookies:</strong> Used to deliver relevant content and advertisements</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
        <p className="text-gray-600 mb-6">
          You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to This Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about our Cookie Policy, please contact us at privacy@aicoach.com
        </p>
      </div>
    </div>
  );
}