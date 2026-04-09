import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sand Calculator — Free Online Calculator | MyContractorTools",
  description: "Free sand calculator. Calculate cubic feet, cubic yards, and tons of sand needed for your project. Supports rectangular and circular areas with multiple sand types and cost estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
