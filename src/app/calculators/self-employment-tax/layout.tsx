import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Self-Employment Tax Calculator — 1099 Contractor Tax Estimator | MyContractorTools",
  description: "Free self-employment tax calculator for contractors. Estimate Social Security, Medicare, and income taxes. Calculate quarterly estimated tax payments for 1099 income.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
