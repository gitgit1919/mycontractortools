import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board Foot Calculator — Lumber & Wood Calculator | MyContractorTools",
  description: "Free board foot and lumber calculator. Calculate board feet, linear feet, and cost for lumber orders. Build material lists with common dimensional lumber sizes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
