import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Block (CMU) Calculator — Blocks, Mortar & Rebar | MyContractorTools",
  description: "Free concrete block calculator. Calculate CMU blocks, mortar, rebar, and grout for masonry walls. Includes bond beams, wall ties, and material estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
