import { useState } from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              Have a question, feedback, or partnership idea? We’d love to hear
              from you. send us a message and our team will get back to you
              shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Message received
                  </h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We usually reply within 24 hours
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6">
                {/* Email Support */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-900 font-medium mb-1">
                        Email Support
                      </h3>
                      <p className="text-gray-600 mb-2">
                        General questions and product support
                      </p>
                      <a
                        href="mailto:boterainfotech@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        boterainfotech@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sales */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-900 font-medium mb-1">
                        Sales & Partnerships
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Enterprise plans or custom requirements
                      </p>
                      <a
                        href="mailto:boterainfotech@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        boterainfotech@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-900 font-medium mb-1">
                        Remote-First Team
                      </h3>
                      <p className="text-gray-600">
                        We’re a distributed team working globally to build
                        better customer communication tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="text-gray-900 font-medium mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We typically respond within 24 hours on business days. For
                  urgent requests, please mention “urgent” in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Clear answers to the most common questions about Botera
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                When will Botera launch?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Botera is currently in active development. We’re preparing a
                private beta launch and will invite early access users first.
                Joining the waitlist ensures you’re notified as soon as access
                opens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can I request a demo?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes. We’ll begin offering personalized demos during the early
                access phase. Early access members will receive priority demo
                scheduling.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Do you offer partnership opportunities?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. We’re open to partnerships with agencies,
                consultants, and technology providers. Reach out to
                <a
                  href="mailto:boterainfotech@gmail.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  {" boterainfotech@gmail.com "}
                </a>
                to start the conversation.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
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
        </div>
      </section>
    </div>
  );
}
