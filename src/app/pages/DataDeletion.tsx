export default function DataDeletion() {
  return (
    <main className="bg-white">
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            User Data Deletion
          </h1>
          <p className="text-gray-600 text-lg">
            How to request deletion of your Botera account and personal data
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-gray-700">
          <div>
            <p>
              Botera respects your privacy and gives you full control over your
              data. You can request deletion of your account and associated
              personal data at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Request Data Deletion
            </h2>
            <p className="mb-4">
              To request deletion of your account and personal data, please
              follow one of the options below:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Email us at{" "}
                <a
                  href="mailto:boterainfotech@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  boterainfotech@gmail.com
                </a>{" "}
                from your registered email address
              </li>
              <li>
                Use the subject line: <strong>“Data Deletion Request”</strong>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What Data Will Be Deleted
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your Botera account information</li>
              <li>Connected social media account data</li>
              <li>Messages and conversation history</li>
              <li>Stored contacts and metadata</li>
              <li>Authentication tokens and integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Deletion Timeline
            </h2>
            <p>
              Once we receive a valid deletion request, we will process it
              within <strong>30 days</strong>. Certain data may be retained
              temporarily if required by law or for security and fraud
              prevention purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Questions
            </h2>
            <p>
              If you have any questions about data deletion, please contact us
              at{" "}
              <a
                href="mailto:boterainfotech@gmail.com"
                className="text-blue-600 hover:underline"
              >
                boterainfotech@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 mb-10">
            <p className="text-sm text-gray-600">
              This page is provided to comply with data protection regulations
              including GDPR and platform requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
