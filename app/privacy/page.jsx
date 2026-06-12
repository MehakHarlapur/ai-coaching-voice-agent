export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-600 mb-6">
          We collect information that you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">
          We use the information we collect to provide, maintain, and improve our services, develop new features, and protect our users.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
        <p className="text-gray-600 mb-6">
          We do not share your personal information with third parties except as described in this Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate technical and organizational measures to protect your personal information.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
        <p className="text-gray-600 mb-6">
          You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about this Privacy Policy, please contact us at privacy@aicoach.com
        </p>
      </div>
    </div>
  );
}