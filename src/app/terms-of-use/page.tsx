import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "MyContractorTools terms of use. Please read these terms carefully before using our site.",
};

export default function TermsOfUse() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-blue mb-8">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 9, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using MyContractorTools.com (&quot;the Site&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">2. Purpose and Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            The calculators, tools, and content on this Site are provided for <strong>informational and estimation purposes only</strong>. They are not a substitute for professional engineering, architectural, electrical, plumbing, or other licensed professional advice.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Calculator results are approximations based on standard formulas and industry rules of thumb. Actual material quantities, structural requirements, and code compliance vary by jurisdiction, site conditions, and project specifics. Always verify calculations with a qualified professional before purchasing materials or beginning work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">3. No Professional Advice</h2>
          <p className="text-gray-700 leading-relaxed">
            Nothing on this Site constitutes professional advice, including but not limited to engineering, tax, legal, or financial advice. The tax calculators provide rough estimates only and should not be used as a substitute for consultation with a qualified tax professional or CPA. Building code requirements vary by location — always consult local building authorities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            MyContractorTools.com and its owners shall not be liable for any damages, losses, or expenses arising from the use of or reliance on information provided by this Site, including but not limited to incorrect material estimates, cost miscalculations, project delays, or building code violations. Use all tools and information at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">5. Affiliate Relationships</h2>
          <p className="text-gray-700 leading-relaxed">
            Some links on this Site are affiliate links. When you click these links and make a purchase, we may earn a commission at no additional cost to you. Our recommendations are based on our independent research and are not influenced by affiliate compensation. See our <a href="/affiliate-disclosure/" className="text-brand-orange hover:underline">Affiliate Disclosure</a> for full details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this Site, including text, graphics, logos, and software, is the property of MyContractorTools.com and is protected by copyright law. You may use our calculators for personal and commercial project estimation. You may not reproduce, distribute, or create derivative works from our content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">7. User Conduct</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree not to misuse the Site, including attempting to interfere with its operation, scraping content, or using automated systems to access it in a manner that exceeds reasonable use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be resolved in the appropriate courts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">10. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            Questions about these terms? Contact us at legal@mycontractortools.com.
          </p>
        </section>
      </div>
    </main>
  );
}
