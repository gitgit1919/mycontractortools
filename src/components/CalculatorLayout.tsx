import type { ReactNode } from "react";
import EmailCapture from "./EmailCapture";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  trade: string;
  children: ReactNode;
  howToUse: string;
  formula?: string;
  disclaimer?: string;
}

export default function CalculatorLayout({
  title,
  description,
  trade,
  children,
  howToUse,
  formula,
  disclaimer,
}: CalculatorLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </header>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8 mb-8">
        {children}
      </div>

      <section className="mb-8" aria-labelledby="how-to-use">
        <h2 id="how-to-use" className="text-2xl font-bold text-brand-blue mb-3">
          How to Use This Calculator
        </h2>
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <p>{howToUse}</p>
        </div>
      </section>

      {formula && (
        <section className="mb-8 bg-gray-50 rounded-xl p-6" aria-labelledby="formula">
          <h2 id="formula" className="text-xl font-bold text-brand-blue mb-2">
            Formula Used
          </h2>
          <p className="text-gray-700 font-mono text-sm">{formula}</p>
        </section>
      )}

      <div className="mb-8">
        <EmailCapture
          trade={trade}
          heading={`Free Software Guide for ${trade} Professionals`}
          description={`Get our free guide comparing the best software tools for ${trade.toLowerCase()} businesses — with real pricing and honest recommendations.`}
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900">
        <p className="font-semibold mb-1">Disclaimer</p>
        <p>
          {disclaimer ||
            "This calculator is for estimation purposes only. Results may vary based on local conditions, materials, and building codes. Always consult a licensed professional before making decisions based on these calculations. MyContractorTools is not responsible for any errors or omissions."}
        </p>
      </div>
    </div>
  );
}
