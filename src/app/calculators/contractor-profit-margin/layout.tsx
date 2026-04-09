import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Profit Margin Calculator — Markup & Pricing | MyContractorTools",
  description: "Free contractor profit margin calculator. Calculate gross and net profit margins, markup percentage, and break-even pricing for construction jobs and your business.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
