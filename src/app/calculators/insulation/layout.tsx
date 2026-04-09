import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insulation Calculator — R-Value, Batts & Coverage | MyContractorTools",
  description: "Free insulation calculator. Estimate insulation batts, bags, or sheets by R-value, area, and type. Covers fiberglass, cellulose, spray foam, and mineral wool.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
