import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Calculator — Shingles, Materials & Cost Estimator | MyContractorTools",
  description: "Free roofing material calculator. Estimate shingles, underlayment, ridge caps, and materials by roof area and pitch. Calculate roofing squares and material costs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
