import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retaining Wall Calculator — Blocks, Drainage & Geogrid | MyContractorTools",
  description: "Free retaining wall calculator. Calculate retaining wall blocks, cap stones, drainage gravel, geogrid, and drain pipe. Estimate materials by wall length and height.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
