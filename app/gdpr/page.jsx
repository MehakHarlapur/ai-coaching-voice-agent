export default function GdprPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-6">
          AI Coach is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. We have always had a robust and effective data protection program in place which complies with existing law and abides by the data protection principles.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data Collection</h2>
        <p className="text-gray-600 mb-6">
          We collect information that you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. The types of personal information we may collect include your name, email address, and payment information.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Lawful Basis for Processing</h2>
        <p className="text-gray-600 mb-6">
          We will ensure that your personal data is processed lawfully, fairly, and transparently. We only process your personal data where we have a lawful basis to do so, which may include your consent, the performance of a contract, or our legitimate interests.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights Under GDPR</h2>
        <p className="text-gray-600 mb-6">
          Under the GDPR, you have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>Right to Rectification:</strong> You have the right to request correction of any information you believe is inaccurate.</li>
          <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
        <p className="text-gray-600 mb-6">
          We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption, access controls, and regular security testing.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Breach Notification</h2>
        <p className="text-gray-600 mb-6">
          In the event of a data breach, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible, and without undue delay. If the breach is likely to result in a high risk to your rights and freedoms, we will also inform you without undue delay.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about our GDPR compliance or wish to exercise any of your data protection rights, please contact our Data Protection Officer at dpo@aicoach.com.
        </p>
      </div>
    </div>
  );
}
