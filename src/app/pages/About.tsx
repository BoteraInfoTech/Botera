import { Target, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Built to Help Businesses Talk to Customers Better
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              Botera is a unified customer communication platform designed for
              small and growing teams who want faster replies, better
              organization, and stronger customer relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-gray-900">
                Our Mission
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                At Botera, our mission is simple: help growing businesses build
                stronger relationships with their customers without complexity,
                chaos, or missed messages.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Small and medium businesses power the global economy, yet
                they’re often forced to juggle fragmented tools, inboxes, and
                platforms just to keep up with customer conversations.
              </p>

              <p className="text-lg text-gray-600">
                We’re changing that by bringing enterprise-grade communication
                tools unified inboxes, AI assistance, and automation into one
                clean, accessible platform built specifically for modern teams.
              </p>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/40 blur-3xl rounded-full" />
              <div className="relative h-96 rounded-2xl border border-gray-200 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <img src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767474792/mission_visuals_ccbpcg.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that shape how we build, design, and support Botera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Customer-First by Default
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature we build starts with real customer problems. We
                listen closely, ship thoughtfully, and improve continuously
                based on real-world feedback.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Simplicity Without Compromise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful tools don’t need to feel complex. We focus on clean
                workflows, intuitive design, and features that just make sense.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Trust, Privacy & Reliability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customer conversations are sensitive. We treat your data with
                the highest standards of security, privacy, and operational
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900">
              Why We Built Botera
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-5">
              Botera started with a simple but persistent problem we kept seeing
              everywhere: small and growing businesses were spending hours every
              day jumping between apps just to talk to their customers.
            </p>

            <p className="text-lg leading-relaxed mb-5">
              Instagram DMs, Facebook messages, WhatsApp chats, LinkedIn
              inquiries each platform lived in its own silo. Messages were
              missed, replies were delayed, and opportunities quietly slipped
              away.
            </p>

            <p className="text-lg leading-relaxed mb-5">
              We spoke with dozens of founders, agencies, and operators who all
              shared the same frustration. They wanted to respond faster and
              stay organized, but existing tools were either too complex, too
              expensive, or built for teams much larger than theirs.
            </p>

            <p className="text-lg leading-relaxed mb-5">
              That’s when we decided to build Botera a platform powerful enough
              to manage conversations across channels, intelligent enough to
              assist with AI-powered replies, and simple enough to feel natural
              from day one.
            </p>

            <p className="text-lg leading-relaxed">
              Today, Botera is being built alongside the businesses it’s meant
              for. We’re excited to share it with teams who care deeply about
              their customers and are ready to communicate better, faster, and
              with more confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900">
              Built by People Who Care About the Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Botera is built by product-focused engineers and designers who
              believe great communication tools should feel simple, fast, and
              reliable.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200 text-center max-w-3xl mx-auto">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team brings experience across AI, social platforms, and
              customer communication systems. We’ve worked closely with small
              businesses, agencies, and growing teams to understand the real
              challenges they face every day.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We’re a globally distributed team, united by a single goal:
              building a product that helps businesses respond faster, stay
              organized, and build stronger customer relationships without
              unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Join Us as We Build the Future of Customer Communication
          </h2>

          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get early access to Botera and help shape a faster, simpler way for
            businesses to connect with their customers.
          </p>

          <a
            href="/#signup"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
          >
            Get Early Access
          </a>

          <p className="mt-4 text-sm text-blue-200">
            No credit card required · Limited early access
          </p>
        </div>
      </section>
    </div>
  );
}
