import { useState, useEffect } from "react";
import { MessageSquare, Zap, Target, Shield } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessSize: "",
    platforms: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Wishlist signup:", formData);
    setSubmitted(true);
    localStorage.setItem("botera_waitlist_submitted", "true");
  };

  useEffect(() => {
    const isSubmitted = localStorage.getItem("botera_waitlist_submitted");
    if (isSubmitted) {
      setSubmitted(true);
    }
  }, []);

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Never Miss a Customer Message Again
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Bring Instagram, Facebook, WhatsApp, and LinkedIn conversations
              into one AI-powered inbox. Reply faster, stay organized, and turn
              every message into a potential sale.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Join Early Access
              </a>
              <span className="text-sm text-gray-500">
                Free beta · Limited early access · Priority onboarding
              </span>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Built for SMBs, agencies, and fast-growing brands that care about
              response speed and customer experience.
            </div>
          </div>

          {/* Right – Product Preview */}
          <div className="relative lg:translate-y-6 lg:scale-[1.05]">
            {/* glow */}
            <div className="absolute -inset-10 bg-blue-100/40 blur-3xl rounded-full" />

            {/* window */}
            <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)]">
              <img
                src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767366821/inboxBotera_Bg_kdjk73.png"
                alt="Botera unified inbox"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">
              Customer Conversations Are Breaking Your Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Messages are everywhere. Leads slip through. Response times slow
              down. And customers move on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Too Many DMs</h3>
              <p className="text-gray-600">
                Customer messages scattered across multiple platforms
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Missed Leads</h3>
              <p className="text-gray-600">
                High-intent inquiries get delayed or completely missed
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Slow Replies</h3>
              <p className="text-gray-600">
                Switching between apps kills response speed
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">No Centralization</h3>
              <p className="text-gray-600">
                No single source of truth for customer conversations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">
              One Inbox. Total Control Over Every Conversation.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Botera brings clarity to customer communication so your team can
              respond faster, stay organized, and convert more leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Unified Inbox</h3>
              <p className="text-gray-600">
                All customer messages from Instagram, Facebook, WhatsApp, and
                LinkedIn organized in one clean, real-time inbox.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">AI-Assisted Replies</h3>
              <p className="text-gray-600">
                Smart, context-aware reply suggestions help you respond faster
                without losing your brand voice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Campaign Management</h3>
              <p className="text-gray-600">
                Send targeted campaigns to saved contacts across platforms all
                from one unified dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">
              Works Where Your Customers Already Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Botera connects your most important messaging channels into one
              reliable, unified inbox so you can respond faster without
              switching tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767348784/Instagram_logo_2022_qlxjuz.svg"
                  alt="Instagram"
                  className="w-15 h-15"
                />
              </div>
              <span className="text-gray-900 font-medium">Instagram</span>
            </div>

            {/* Facebook */}
            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767348687/5D8s-GsHJlJ_t91yzg.png"
                  alt="Facebook"
                  className="w-15 h-15"
                />
              </div>
              <span className="text-gray-900 font-medium">Facebook</span>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767348159/WhatsApp_Logo_green_dg6jxa.svg"
                  alt="WhatsApp"
                  className="w-15 h-15"
                />
              </div>
              <span className="text-gray-900 font-medium">WhatsApp</span>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border cursor-pointer">
                <img
                  src="https://res.cloudinary.com/dxbbwahzi/image/upload/v1767348916/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw_s256-rw_w7on96.webp"
                  alt="LinkedIn"
                  className="w-13 h-13"
                />
              </div>
              <span className="text-gray-900 font-medium">LinkedIn</span>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 text-sm">
            Secure integrations · Official APIs · More platforms coming soon
          </p>
        </div>
      </section>

      {/* Wishlist Signup Section */}
      <section id="signup" className="py-24 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">
              Be the First to Experience Botera
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the early access list and get a smarter way to manage
              customer conversations before everyone else.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-900 text-lg font-medium">
                You’re on the list 🎉
              </h3>
              <p className="text-gray-600">
                We’ll notify you as soon as early access is available.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-900">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="businessSize"
                  className="block mb-2 text-gray-900"
                >
                  Business Size
                </label>
                <select
                  id="businessSize"
                  required
                  value={formData.businessSize}
                  onChange={(e) =>
                    setFormData({ ...formData, businessSize: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your team size</option>
                  <option value="solo">Solo / Freelancer</option>
                  <option value="small">2–10 employees</option>
                  <option value="medium">11–50 employees</option>
                  <option value="large">51+ employees</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block mb-3 text-gray-900">
                  Platforms You Use
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Instagram", "Facebook", "WhatsApp", "LinkedIn"].map(
                    (platform) => (
                      <label
                        key={platform}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.platforms.includes(platform)}
                          onChange={() => handlePlatformToggle(platform)}
                          className="w-5 h-5 text-blue-600 rounded "
                        />
                        <span className="text-gray-700">{platform}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Early Access
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                No credit card required · No spam · Unsubscribe anytime
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900 font-medium">
                Built for Growing Teams
              </h3>
              <p className="text-gray-600">
                Designed for SMBs, agencies, and modern teams managing
                high-volume customer conversations.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900 font-medium">
                Privacy by Design
              </h3>
              <p className="text-gray-600">
                Your messages and data stay private never sold, shared, or used
                for advertising.
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900 font-medium">
                No Noise. Just Focus.
              </h3>
              <p className="text-gray-600">
                A clean, distraction-free experience built to help you respond
                faster and stay organized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
