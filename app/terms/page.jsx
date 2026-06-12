export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-6">
          By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
        <p className="text-gray-600 mb-6">
          We provide an AI-powered educational coaching platform that offers personalized learning experiences through voice interaction.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
        <p className="text-gray-600 mb-6">
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Subscription and Billing</h2>
        <p className="text-gray-600 mb-6">
          Some features of our service require payment. You agree to pay all fees and charges associated with your account on a timely basis.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">
          All content and materials available on our platform are protected by intellectual property rights and are the property of AI Coach or its licensors.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          To the maximum extent permitted by law, AI Coach shall not be liable for any indirect, incidental, or consequential damages.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify these terms at any time. We will provide notice of any material changes through our website or by other means.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service, please contact us at legal@aicoach.com
        </p>
      </div>
    </div>
  );
}