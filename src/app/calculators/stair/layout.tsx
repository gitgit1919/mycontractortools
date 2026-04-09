import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stair Calculator — Risers, Treads & Stringer Length | MyContractorTools",
  description: "Free stair calculator. Calculate riser height, tread depth, stringer length, and stair angle. IRC building code compliance checking for residential stairs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
