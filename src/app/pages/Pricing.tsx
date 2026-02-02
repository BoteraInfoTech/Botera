import { Check, Gift, Star, Diamond } from "lucide-react";

export default function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Pricing Built for Growing Businesses
            </h1>
            <p className="text-xl text-gray-600">
              Simple, transparent pricing that scales as you grow. No hidden
              fees. No long-term contracts. Early access users unlock exclusive
              benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 text-center border border-blue-100">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <span className="text-3xl text-white">$</span>
              </div>

              <h2 className="mb-4 text-gray-900">
                Transparent Pricing, Launching Soon
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                We’re carefully designing pricing that’s simple, fair, and
                aligned with how growing teams actually work. Early access users
                will receive exclusive benefits when plans go live.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="mb-6 text-gray-900 text-lg font-semibold">
                  Our Pricing Principles
                </h3>

                <ul className="space-y-4 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      No hidden fees or surprise charges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Flexible plans for teams of all sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cancel anytime no long-term contracts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      14-day money-back guarantee
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              Early Access Exclusive Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our waitlist and unlock exclusive advantages before public
              launch
            </p>
            <p className="mt-3 text-sm text-gray-500">
              No credit card required · Limited early access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Beta */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Free Beta Access</h3>
              <p className="text-gray-600">
                Full access to all features during our beta period completely
                free.
              </p>
            </div>

            {/* Priority Onboarding */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Priority Onboarding</h3>
              <p className="text-gray-600">
                Get priority onboarding with dedicated setup support from our
                team.
              </p>
            </div>

            {/* Exclusive Pricing */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Diamond className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Exclusive Pricing</h3>
              <p className="text-gray-600">
                Secure special early-adopter pricing when we launch publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Pricing Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Botera pricing
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* FAQ Item */}
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Will there be a free plan?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We plan to offer a limited free tier designed for solo
                founders and early-stage teams, with upgrade options as your
                needs grow.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Do you offer custom or enterprise pricing?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We’ll support custom pricing for larger teams and
                businesses with advanced requirements, integrations, or volume
                needs.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="rounded-xl border border-gray-200 p-6 transition-shadow hover:shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What payment methods will you support?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We’ll support all major credit cards, along with monthly and
                annual billing options. Annual plans will include discounted
                pricing.
              </p>
            </div>
          </div>

          {/* Soft CTA */}
          <p className="mt-12 text-center text-gray-600">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-blue-600 font-medium hover:underline"
            >
              Talk to our team →
            </a>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Get Early Access to Botera
          </h2>

          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join the waitlist to receive early access, priority onboarding, and
            exclusive early-adopter pricing when we launch.
          </p>

          <a
            href="/#signup"
            className="inline-flex items-center justify-center px-10 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
          >
            Join the Waitlist
          </a>

          <p className="mt-4 text-sm text-blue-200">
            No credit card required · Limited early access
          </p>
        </div>
      </section>
    </div>
  );
}
