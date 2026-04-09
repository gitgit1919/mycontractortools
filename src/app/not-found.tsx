import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | MyContractorTools",
};

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-extrabold text-brand-blue">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This page doesn&apos;t exist, but we have plenty that do.
        </p>

        <nav className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/calculators/"
            className="inline-block rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-orange-dark transition-colors"
          >
            Browse All Calculators
          </Link>
          <Link
            href="/best/hvac-software/"
            className="inline-block rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-blue-light transition-colors"
          >
            Software Reviews
          </Link>
          <Link
            href="/"
            className="inline-block rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
}
