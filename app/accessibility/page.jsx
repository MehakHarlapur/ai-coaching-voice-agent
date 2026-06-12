export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment to Accessibility</h2>
        <p className="text-gray-600 mb-6">
          AI Coach is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Conformance Status</h2>
        <p className="text-gray-600 mb-6">
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We aim to conform to WCAG 2.1 Level AA standards. This means that the content should be:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li><strong>Perceivable:</strong> Information and user interface components must be presentable to users in ways they can perceive.</li>
          <li><strong>Operable:</strong> User interface components and navigation must be operable.</li>
          <li><strong>Understandable:</strong> Information and the operation of user interface must be understandable.</li>
          <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accessibility Features</h2>
        <p className="text-gray-600 mb-6">
          We have implemented the following accessibility features on our website:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Keyboard navigation support</li>
          <li>Alternative text for images</li>
          <li>Semantic HTML structure</li>
          <li>Responsive design for various screen sizes</li>
          <li>Sufficient color contrast</li>
          <li>Resizable text that doesn't break the layout</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Areas for Improvement</h2>
        <p className="text-gray-600 mb-6">
          We are continuously working to improve the accessibility of our website. We regularly review our site to identify and fix any accessibility issues. Some known areas we are currently working on include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Enhancing screen reader compatibility</li>
          <li>Improving form labels and error messages</li>
          <li>Ensuring all interactive elements are keyboard accessible</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Feedback</h2>
        <p className="text-gray-600 mb-6">
          We welcome your feedback on the accessibility of AI Coach. Please let us know if you encounter accessibility barriers:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Email: accessibility@aicoach.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Postal address: 123 Learning St, Education City, 10001</li>
        </ul>
        <p className="text-gray-600 mb-6">
          We try to respond to feedback within 3-5 business days.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technical Specifications</h2>
        <p className="text-gray-600 mb-6">
          The accessibility of AI Coach relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Assessment Approach</h2>
        <p className="text-gray-600 mb-6">
          AI Coach assessed the accessibility of our website by the following approaches:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
          <li>Self-evaluation</li>
          <li>External evaluation by accessibility experts</li>
          <li>Automated testing tools</li>
          <li>User testing with people with disabilities</li>
        </ul>
      </div>
    </div>
  );
}