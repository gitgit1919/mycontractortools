import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "MyContractorTools affiliate disclosure. Transparency about how we earn revenue through affiliate partnerships.",
};

export default function AffiliateDisclosure() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-blue mb-8">Affiliate Disclosure</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 9, 2026</p>

      <div className="prose prose-gray max-w-none space-y-6">
        <section>
          <div className="bg-orange-50 border-l-4 border-brand-orange p-4 rounded-r-lg mb-8">
            <p className="text-gray-800 font-medium">
              In the interest of full transparency: Some of the links on MyContractorTools.com are affiliate links. This means that if you click on the link and purchase a product or sign up for a service, we may receive a commission at no additional cost to you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">How We Make Money</h2>
          <p className="text-gray-700 leading-relaxed">
            MyContractorTools.com is a free resource. We keep it free by earning affiliate commissions when we recommend software and services that we believe are genuinely useful for contractors and tradespeople. When you click a link to a product from our site and sign up or make a purchase, the company may pay us a referral fee.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            This is a standard business practice for online content creators and does not affect the price you pay — you pay the same price whether you use our link or go directly to the vendor.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">Our Editorial Independence</h2>
          <p className="text-gray-700 leading-relaxed">
            Affiliate relationships do <strong>not</strong> influence our reviews, rankings, or recommendations. We include products in our comparisons based on their relevance and value to contractors, not based on whether they offer an affiliate program. Products that do not have affiliate programs may still be featured and recommended if we believe they are the best option.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            We commit to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
            <li>Honest assessments of every product we review</li>
            <li>Clearly noting both strengths and weaknesses</li>
            <li>Including non-affiliate products when they are the best choice</li>
            <li>Never recommending a product solely because it pays a higher commission</li>
            <li>Updating our content when products change or better alternatives emerge</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">FTC Compliance</h2>
          <p className="text-gray-700 leading-relaxed">
            This disclosure is provided in accordance with the Federal Trade Commission&apos;s 16 CFR Part 255 guidelines on the use of endorsements and testimonials in advertising. We believe in transparency and want you to understand how our site is funded so you can make informed decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">Affiliate Programs We May Participate In</h2>
          <p className="text-gray-700 leading-relaxed">
            We may earn commissions through affiliate partnerships with contractor software companies, tool retailers, business services, and other vendors relevant to the construction and trades industry. Specific affiliate relationships will be disclosed on the pages where those links appear.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-blue mt-8 mb-3">Questions?</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our affiliate relationships or want to know whether a specific link is an affiliate link, please contact us at disclosure@mycontractortools.com.
          </p>
        </section>
      </div>
    </main>
  );
}
