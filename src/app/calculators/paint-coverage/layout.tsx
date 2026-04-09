import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint Calculator — Gallons Needed by Room Size | MyContractorTools",
  description: "Free paint coverage calculator. Calculate gallons of paint needed based on wall area, ceiling, trim, and number of coats. Includes primer and coverage estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
