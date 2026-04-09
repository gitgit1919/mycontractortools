import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baluster & Spindle Calculator — Free Online Calculator | MyContractorTools",
  description: "Free baluster and spindle calculator. Calculate the number of balusters, spacing, and materials for your railing project. Includes IRC 4-inch sphere rule code compliance checking.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
