import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brick Calculator — Bricks, Mortar & Wall Estimator | MyContractorTools",
  description: "Free brick calculator. Estimate number of bricks, mortar bags, sand, and wall ties for masonry construction. Calculate by wall area with multiple brick sizes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
