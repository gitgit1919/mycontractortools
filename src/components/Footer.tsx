import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white/80 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-white font-bold text-lg mb-3">MyContractorTools</h2>
            <p className="text-sm leading-relaxed">
              Free calculators and honest software reviews for contractors and tradespeople.
              Built by people who understand the trades.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Popular Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/calculators/hvac-load/" className="hover:text-brand-orange transition-colors">HVAC Load Calculator</Link></li>
              <li><Link href="/calculators/concrete-volume/" className="hover:text-brand-orange transition-colors">Concrete Volume Calculator</Link></li>
              <li><Link href="/calculators/electrical-load/" className="hover:text-brand-orange transition-colors">Electrical Load Calculator</Link></li>
              <li><Link href="/calculators/contractor-profit-margin/" className="hover:text-brand-orange transition-colors">Profit Margin Calculator</Link></li>
              <li><Link href="/calculators/self-employment-tax/" className="hover:text-brand-orange transition-colors">Self-Employment Tax Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy/" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use/" className="hover:text-brand-orange transition-colors">Terms of Use</Link></li>
              <li><Link href="/affiliate-disclosure/" className="hover:text-brand-orange transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MyContractorTools. All rights reserved.</p>
          <p className="mt-2 text-white/50">
            All calculators are for estimation purposes only. Consult a licensed professional before making decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
