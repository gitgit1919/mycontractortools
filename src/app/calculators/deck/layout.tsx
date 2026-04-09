import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deck Calculator — Boards, Joists, Railing & Cost | MyContractorTools",
  description: "Free deck calculator. Estimate deck boards, joists, posts, beams, railing, and total cost. Calculate for pressure treated, cedar, and composite decking materials.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
