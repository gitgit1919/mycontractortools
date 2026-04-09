import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tile Calculator — Flooring, Grout & Thinset Estimator | MyContractorTools",
  description: "Free tile and flooring calculator. Calculate number of tiles, grout, thinset, and cost for any tile size and room dimensions. Includes waste factor for cuts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
