import { Zap, Target, CheckCircle } from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      title: "Unified Inbox",
      description:
        "Centralize all customer conversations from Instagram, Facebook, WhatsApp, and LinkedIn into one powerful dashboard.",
      benefits: [
        "View all messages in chronological order",
        "Never miss a customer inquiry",
        "Switch between platforms seamlessly",
        "Search across all conversations",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767366821/inboxBotera_Bg_kdjk73.png",
    },
    {
      title: "AI-Powered Replies",
      description:
        "Smart AI assistance that adapts to your brand voice and suggests contextually relevant responses.",
      benefits: [
        "Context-aware reply suggestions",
        "Consistent brand tone",
        "Faster response times",
        "Reduced manual effort",
      ],
      icon: Zap,
      comingSoon: true,
    },
    {
      title: "Contact Management",
      description:
        "Maintain a complete view of every customer with unified profiles and conversation history.",
      benefits: [
        "Centralized contact database",
        "Conversation history tracking",
        "Tags and internal notes",
        "Smart segmentation",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767451618/contactManage_mnv2uw.png",
    },
    {
      title: "Campaign Management",
      description:
        "Create, launch, and manage targeted campaigns across all platforms.",
      benefits: [
        "Multi-platform campaigns",
        "Audience segmentation",
        "Performance tracking",
        "Scheduled messaging",
      ],
      icon: Target,
      comingSoon: true,
    },
    {
      title: "Analytics & Insights",
      description:
        "Understand response times, conversation trends, and team performance with actionable analytics.",
      benefits: [
        "Response time insights",
        "Conversation volume tracking",
        "Platform-level performance",
        "Team productivity metrics",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767451474/analytics_bfrdcc.png",
    },
    {
      title: "Security & Privacy",
      description:
        "Enterprise-grade security designed to keep your customer data safe.",
      benefits: [
        "End-to-end encryption",
        "GDPR compliant",
        "Role-based access control",
        "Regular security audits",
      ],
      image:
        "https://res.cloudinary.com/dxbbwahzi/image/upload/v1767450529/459shots_so_1_ufv0vf.png",
    },
  ];

  const additionalFeatures = [
    "Team collaboration",
    "Automated responses",
    "Message templates",
    "Custom tags & labels",
    "Advanced search filters",
    "Message scheduling",
    "Bulk actions",
    "Real-time notifications",
    "API access",
    "Multi-language support",
    "Conversation export",
    "Mobile-friendly experience",
  ];

  return (
    <div>
      {/* Features Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-24">
        <div className="absolute inset-x-0 top-[-30%] h-[60%] bg-gradient-to-r from-blue-50/40 to-indigo-50/40 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Everything You Need to Manage
            <br className="hidden sm:block" />
            Customer Conversations
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From a unified inbox to AI-assisted replies and campaign management,
            Botera gives you full control over every customer interaction.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isReverse = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
              >
                {/* TEXT */}
                <div className={isReverse ? "md:order-2" : ""}>
                  {/* Icon only if NO image */}
                  {!feature.image && Icon && (
                    <div className="relative mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>

                      {feature.comingSoon && (
                        <span className="absolute -top-2 -right-3 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                          Coming soon
                        </span>
                      )}
                    </div>
                  )}

                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 max-w-xl">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* VISUAL */}
                <div className={`relative ${isReverse ? "md:order-1" : ""}`}>
                  {feature.image ? (
                    <>
                      <div className="absolute -inset-10 bg-blue-100/40 blur-3xl rounded-full" />
                      <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)]">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="h-80 rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-400 text-sm flex items-center justify-center flex-col">
                        <Icon className="w-24 h-24 text-blue-100" />
                        Feature preview coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            And Much More
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Additional features designed to enhance your workflow
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join the early access list and experience Botera firsthand.
          </p>
          <a
            href="/#signup"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-white text-blue-600 font-medium hover:bg-gray-100 transition"
          >
            Get Early Access
          </a>
        </div>
      </section>
    </div>
  );
}
