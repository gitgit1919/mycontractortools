"use client";

import { useState } from "react";

interface EmailCaptureProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  trade?: string;
}

export default function EmailCapture({
  heading = "Get the Free Contractor Software Buyer's Guide",
  description = "We'll send you our guide comparing the top software tools for contractors — with real pricing, honest pros/cons, and trade-specific recommendations.",
  buttonText = "Send Me the Guide",
  trade,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (ConvertKit, Beehiiv, etc.)
    // For now, store in localStorage as a placeholder
    const leads = JSON.parse(localStorage.getItem("mct_leads") || "[]");
    leads.push({ email, trade: trade || "general", timestamp: new Date().toISOString() });
    localStorage.setItem("mct_leads", JSON.stringify(leads));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800">You&apos;re on the list!</h3>
        <p className="text-green-700 mt-1">Check your inbox for the guide.</p>
      </div>
    );
  }

  return (
    <div className="bg-brand-blue rounded-xl p-8 text-white">
      <h3 className="text-xl font-bold mb-2">{heading}</h3>
      <p className="text-white/80 mb-4 text-sm leading-relaxed">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="email-capture" className="sr-only">Email address</label>
        <input
          id="email-capture"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <button
          type="submit"
          className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
        >
          {buttonText}
        </button>
      </form>
      <p className="text-white/50 text-xs mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
