"use client";

import Link from "next/link";
import { useState } from "react";

const calculators = [
  { name: "HVAC Load Calculator", href: "/calculators/hvac-load/" },
  { name: "Electrical Load Calculator", href: "/calculators/electrical-load/" },
  { name: "Plumbing Pipe Sizing", href: "/calculators/plumbing-pipe-sizing/" },
  { name: "Concrete Volume Calculator", href: "/calculators/concrete-volume/" },
  { name: "Roofing Material Calculator", href: "/calculators/roofing-material/" },
  { name: "Landscaping Material Calculator", href: "/calculators/landscaping-material/" },
  { name: "Drywall Calculator", href: "/calculators/drywall/" },
  { name: "Paint Coverage Calculator", href: "/calculators/paint-coverage/" },
  { name: "Profit Margin Calculator", href: "/calculators/contractor-profit-margin/" },
  { name: "Self-Employment Tax Calculator", href: "/calculators/self-employment-tax/" },
  { name: "Hourly Rate Calculator", href: "/calculators/hourly-rate/" },
];

const softwareReviews = [
  { name: "Best HVAC Software", href: "/best/hvac-software/" },
  { name: "Best Plumbing Software", href: "/best/plumbing-software/" },
  { name: "Best Electrical Software", href: "/best/electrical-contractor-software/" },
  { name: "Best Roofing Software", href: "/best/roofing-software/" },
  { name: "Best Landscaping Software", href: "/best/landscaping-software/" },
  { name: "Best GC Software", href: "/best/general-contractor-software/" },
  { name: "Best Painting Software", href: "/best/painting-software/" },
  { name: "Best Flooring Software", href: "/best/flooring-software/" },
];

const comparisons = [
  { name: "Jobber vs Housecall Pro", href: "/compare/jobber-vs-housecall-pro/" },
  { name: "ServiceTitan vs Housecall Pro", href: "/compare/servicetitan-vs-housecall-pro/" },
  { name: "Jobber vs ServiceTitan", href: "/compare/jobber-vs-servicetitan/" },
  { name: "Buildertrend vs CoConstruct", href: "/compare/buildertrend-vs-coconstruct/" },
  { name: "Jobber vs FieldEdge", href: "/compare/jobber-vs-fieldedge/" },
  { name: "Jobber vs JobNimbus", href: "/compare/jobber-vs-jobnimbus/" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [reviewsDropdownOpen, setReviewsDropdownOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-90">
            MyContractorTools
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setCalcDropdownOpen(!calcDropdownOpen)}
                onBlur={() => setTimeout(() => setCalcDropdownOpen(false), 200)}
                className="flex items-center gap-1 hover:text-brand-orange transition-colors"
                aria-expanded={calcDropdownOpen}
                aria-haspopup="true"
              >
                Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {calcDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/calculators/"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold text-brand-orange"
                  >
                    All Calculators →
                  </Link>
                  <hr className="my-1" />
                  {calculators.map((calc) => (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {calc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setReviewsDropdownOpen(!reviewsDropdownOpen)}
                onBlur={() => setTimeout(() => setReviewsDropdownOpen(false), 200)}
                className="flex items-center gap-1 hover:text-brand-orange transition-colors"
                aria-expanded={reviewsDropdownOpen}
                aria-haspopup="true"
              >
                Software Reviews
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {reviewsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white text-gray-900 rounded-lg shadow-xl py-2 z-50">
                  <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">Best Software By Trade</p>
                  {softwareReviews.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-1" />
                  <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">Head-to-Head</p>
                  {comparisons.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/guides/" className="hover:text-brand-orange transition-colors text-sm">
              Guides
            </Link>
            <Link href="/affiliate-disclosure/" className="hover:text-brand-orange transition-colors text-sm">
              About
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 px-4 py-4 space-y-2">
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Calculators</p>
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="block py-2 text-sm hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {calc.name}
            </Link>
          ))}
          <hr className="border-white/20 my-3" />
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Best Software By Trade</p>
          {softwareReviews.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-white/20 my-3" />
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Comparisons</p>
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm hover:text-brand-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-white/20 my-3" />
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Guides</p>
          <Link
            href="/guides/starting-a-contracting-business/"
            className="block py-2 text-sm hover:text-brand-orange transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How to Start a Contracting Business
          </Link>
        </div>
      )}
    </nav>
  );
}
