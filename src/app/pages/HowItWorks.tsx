import { CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description:
        "Securely connect your Instagram, Facebook, WhatsApp, and LinkedIn accounts in just a few minutes using OAuth authentication.",
      details: [
        "One-click platform connection",
        "Secure OAuth authentication",
        "No password sharing required",
        "Multiple accounts per platform",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767472573/connect_Account_d0pvbb.png",
    },
    {
      number: "02",
      title: "Manage All Messages in One Inbox",
      description:
        "All customer conversations appear in a single unified inbox, allowing you to view, filter, and respond without switching tools.",
      details: [
        "Chronological conversation timeline",
        "Platform-specific indicators",
        "Advanced filters and search",
        "Conversation threading",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767366821/inboxBotera_Bg_kdjk73.png",
    },
    {
      number: "03",
      title: "Reply Faster with AI Assistance",
      description:
        "Botera’s AI analyzes message context and suggests relevant replies that match your brand voice.",
      details: [
        "Context-aware suggestions",
        "Consistent brand tone",
        "Learn from your responses",
        "Multi-language support",
      ],
    },
    {
      number: "04",
      title: "Run Campaigns & Grow",
      description:
        "Engage your audience with targeted campaigns across platforms and track performance from one dashboard.",
      details: [
        "Multi-platform campaigns",
        "Audience segmentation",
        "Campaign performance tracking",
        "Automation support",
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Simple Setup. Powerful Results.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Botera in minutes. Connect your channels, reply
            faster, and manage customer conversations with confidence from day
            one.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-semibold mb-6">
                  {step.number}
                </span>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6 max-w-xl">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className="relative">
                <div className="absolute -inset-10 bg-blue-100/40 blur-3xl rounded-full" />

                <div className="relative h-96 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] flex items-center justify-center">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">
                      Product preview coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Your Workflow, Simplified
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            From setup to results in four clear steps
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {["Connect", "Manage", "Respond", "Grow"].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-900 font-medium">{label}</span>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-gray-400 mx-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Start Managing Conversations Smarter
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join early access and get priority onboarding with Botera.
          </p>
          <a
            href="/#signup"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
          >
            Get Early Access
          </a>
        </div>
      </section>
    </main>
  );
}
