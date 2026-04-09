import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Pipe Sizing Calculator — Flow Rate & Diameter | MyContractorTools",
  description: "Free plumbing pipe sizing calculator. Find the right pipe diameter based on fixture units and flow rates. Calculate GPM, velocity, and pipe size for water supply systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
