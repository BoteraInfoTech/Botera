export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated: December 31, 2024</p>
        </header>

        {/* Summary */}
        <section className="mb-16 rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <p className="text-gray-700 leading-relaxed">
            At Botera, we respect your privacy. We collect only what’s necessary
            to provide our services, never sell your data, and give you full
            control over your information. This policy explains what we collect,
            why we collect it, and how you can manage your data.
          </p>
        </section>

        {/* Content */}
        <div className="space-y-16">
          <Section title="Introduction">
            <p>
              Botera (“we”, “our”, or “us”) is committed to protecting your
              personal information and being transparent about how we handle
              your data. This Privacy Policy describes how we collect, use,
              disclose, and safeguard information when you use our platform.
            </p>
            <p>
              By using Botera, you agree to the practices described in this
              policy. If you do not agree, please discontinue use of our
              services.
            </p>
          </Section>

          <Section title="Information We Collect">
            <SubSection title="Information You Provide">
              <List
                items={[
                  "Name and contact details (email address, phone number)",
                  "Business details (company name, size, industry)",
                  "Account credentials and authentication data",
                  "Billing and payment information",
                  "Messages and communications with our team",
                ]}
              />
            </SubSection>

            <SubSection title="Connected Platform Data">
              <List
                items={[
                  "Messages and conversation content",
                  "Customer contact metadata",
                  "Platform authorization tokens",
                  "Interaction timestamps and message metadata",
                ]}
              />
            </SubSection>

            <SubSection title="Usage & Technical Data">
              <List
                items={[
                  "IP address, browser type, and device information",
                  "Feature usage and interaction patterns",
                  "Log files and diagnostic data",
                  "Cookies and similar technologies",
                ]}
              />
            </SubSection>
          </Section>

          <Section title="How We Use Your Information">
            <List
              items={[
                "Provide and operate the Botera platform",
                "Process transactions and manage billing",
                "Deliver AI-assisted features",
                "Communicate product updates and service notices",
                "Provide customer support",
                "Analyze usage to improve performance",
                "Prevent fraud and security incidents",
                "Comply with legal obligations",
              ]}
            />
          </Section>

          <Section title="Information Sharing">
            <p className="mb-4">
              We do <strong>not</strong> sell your personal data. We only share
              information in limited circumstances:
            </p>
            <List
              items={[
                "With trusted service providers",
                "With platforms you authorize",
                "During mergers or acquisitions",
                "When required by law",
              ]}
            />
          </Section>

          <Section title="Data Security">
            <List
              items={[
                "Encryption of sensitive data",
                "Strict access controls",
                "Regular monitoring and security reviews",
              ]}
            />
            <p className="mt-4">
              While no system is completely secure, we continuously work to
              protect your data.
            </p>
          </Section>

          <Section title="Your Rights">
            <List
              items={[
                "Access your personal data",
                "Correct inaccurate information",
                "Request deletion of your data",
                "Export your data where applicable",
                "Withdraw consent at any time",
              ]}
            />
            <p className="mt-4">
              Contact us at{" "}
              <a
                href="mailto:boterainfotech@gmail.com"
                className="text-blue-600 hover:underline"
              >
                boterainfotech@gmail.com
              </a>{" "}
              to exercise your rights.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain data only as long as necessary to provide our services
              or meet legal requirements. Deleted accounts are anonymized or
              removed within 30 days unless retention is required by law.
            </p>
          </Section>

          <Section title="Children’s Privacy">
            <p>
              Botera is not intended for individuals under 18. We do not
              knowingly collect data from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this policy periodically. Updates will be posted on
              this page with a revised effective date.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>Email: boterainfotech@gmail.com</p>
            <p>Attention: Data Protection Officer, Botera</p>
          </Section>
        </div>

        {/* Footer Note */}
        <div className="mt-20 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <p className="text-gray-600 text-sm">
            Continued use of Botera after policy updates constitutes acceptance
            of the revised Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
