import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyContractorTools — Free Calculators & Software Reviews for Contractors",
    template: "%s | MyContractorTools",
  },
  description:
    "Free trade-specific calculators and honest software comparisons for plumbers, HVAC techs, electricians, roofers, landscapers, and general contractors.",
  metadataBase: new URL("https://mycontractortools.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MyContractorTools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "MyContractorTools",
                  "url": "https://mycontractortools.com",
                  "description": "Free trade-specific calculators and honest software comparisons for contractors and tradespeople.",
                },
                {
                  "@type": "Organization",
                  "name": "MyContractorTools",
                  "url": "https://mycontractortools.com",
                  "logo": "https://mycontractortools.com/logo.png",
                },
              ],
            }),
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-orange focus:text-white">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
