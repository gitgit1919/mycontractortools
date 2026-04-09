import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MyContractorTools privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-blue mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 9, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Calculator Usage:</strong> Our calculators run entirely in your browser. We do not collect, store, or transmit the values you enter into any calculator.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Email Addresses:</strong> If you voluntarily subscribe to our email list, we collect your email address. You can unsubscribe at any time.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Analytics Data:</strong> We use privacy-respecting analytics to understand how visitors use our site. This may include pages visited, referring URLs, browser type, device type, and approximate geographic location. We do not track individual users across the web.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Cookies:</strong> We use essential cookies to ensure the site functions properly. Third-party advertising or affiliate partners may set their own cookies when you click outbound links. See Section 5 for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>To send you email updates and tips if you subscribe (you can opt out anytime)</li>
            <li>To understand which pages and tools are most useful so we can improve them</li>
            <li>To monitor site performance and fix technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">3. Information Sharing</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or trade your personal information to third parties. We may share anonymized, aggregated analytics data. If you click an affiliate link to a third-party product, that company&apos;s privacy policy governs the data they collect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">4. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            Email addresses are retained until you unsubscribe. Analytics data is retained in aggregate form and does not contain personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">5. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our site may contain links to third-party software products and services. When you click these links, you leave our site and are subject to the third party&apos;s privacy policy. Affiliate partners may use cookies to track referrals. We recommend reviewing the privacy policies of any third-party service you visit through our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">6. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at the email address below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">7. Children&apos;s Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our site is not directed at children under 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">8. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">9. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this privacy policy, please contact us at privacy@mycontractortools.com.
          </p>
        </section>
      </div>
    </main>
  );
}
