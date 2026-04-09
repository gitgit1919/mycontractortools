import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markup vs Margin Calculator — Contractor Pricing Tool | MyContractorTools",
  description:
    "Free markup vs margin calculator for contractors. Convert between markup percentage and profit margin. See the critical difference and price your jobs correctly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
