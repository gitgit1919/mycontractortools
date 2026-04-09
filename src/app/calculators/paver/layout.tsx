import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paver Calculator — Patio, Walkway & Base Materials | MyContractorTools",
  description: "Free paver calculator. Estimate pavers, base gravel, leveling sand, and polymeric sand for patios and walkways. Multiple paver sizes and laying patterns.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
