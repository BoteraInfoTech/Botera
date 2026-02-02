export default function Terms() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">
            Last updated: December 31, 2024
          </p>

          {/* Intro Card */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service govern your access to and use of Botera. By
              using our platform, you agree to these terms. Please read them
              carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16 text-gray-700">
          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="leading-relaxed">
              These Terms constitute a legally binding agreement between you and
              Botera Inc. (“Botera”, “we”, “our”, or “us”). By accessing or
              using our services, you agree to be bound by these Terms. If you
              do not agree, you must not use our services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Service Description
            </h2>
            <p className="mb-4">
              Botera provides a unified platform for managing customer
              conversations across multiple social media channels.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unified inbox for customer messages</li>
              <li>AI-assisted reply suggestions</li>
              <li>Campaign management tools</li>
              <li>Analytics and reporting features</li>
              <li>Additional features as released</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Early Access Program
            </h2>
            <p className="mb-4">
              Botera may be offered as part of an early access or beta program.
              By participating, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The service may contain bugs or incomplete features</li>
              <li>Features may change without notice</li>
              <li>Service availability is not guaranteed</li>
              <li>Your feedback may be used to improve the platform</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Account Registration & Security
            </h2>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Account Registration
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Be at least 18 years of age</li>
              <li>Have authority to use the platform</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Account Security
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep your credentials confidential</li>
              <li>Notify us of unauthorized access</li>
              <li>You are responsible for all activity under your account</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Acceptable Use
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate laws or regulations</li>
              <li>Send spam or malicious content</li>
              <li>Access systems without authorization</li>
              <li>Reverse engineer the platform</li>
              <li>Disrupt service operations</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Payments & Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Paid plans may be introduced in the future</li>
              <li>Fees are non-refundable unless required by law</li>
              <li>Pricing changes will be communicated in advance</li>
              <li>Failure to pay may result in suspension</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Disclaimers & Liability
            </h2>
            <p className="mb-4">
              Botera is provided “as is” without warranties of any kind. To the
              maximum extent permitted by law, we are not liable for indirect,
              incidental, or consequential damages.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Termination
            </h2>
            <p className="mb-4">
              We may suspend or terminate access if these Terms are violated.
              You may stop using Botera at any time.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              Botera after changes means you accept the updated Terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Contact Information
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> legal@botera.com
              </li>
              <li>
                <strong>Support:</strong> support@botera.com
              </li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-600">
              By using Botera, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
