import type { ReactNode } from "react";
import Link from "next/link";
import EmailCapture from "./EmailCapture";

interface GuideLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
  tableOfContents?: { id: string; label: string }[];
}

export default function GuideLayout({
  title,
  description,
  lastUpdated,
  children,
  tableOfContents,
}: GuideLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <header className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-brand-orange">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides/" className="hover:text-brand-orange">
            Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{title}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-2">
          {description}
        </p>
        <p className="text-sm text-gray-400">Last updated: {lastUpdated}</p>
      </header>

      {tableOfContents && tableOfContents.length > 0 && (
        <nav className="bg-brand-gray rounded-xl p-6 mb-8">
          <h2 className="font-bold text-brand-blue mb-3">In This Guide</h2>
          <ol className="list-decimal list-inside space-y-1.5">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-brand-blue hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <article className="prose prose-gray max-w-none">{children}</article>

      <div className="mt-12 bg-brand-gray rounded-xl p-6">
        <EmailCapture />
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          This guide is for informational purposes only and does not constitute
          legal, financial, or business advice. Requirements vary by state and
          locality. Always consult with qualified professionals for your specific
          situation. Some links on this page may be affiliate links — we may earn
          a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
