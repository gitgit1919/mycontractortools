import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebar Calculator — Quantity, Weight & Tie Wire | MyContractorTools",
  description: "Free rebar calculator for concrete slabs. Calculate rebar quantity, total weight, tie wires, and bar chairs by grid spacing. Estimate rebar for footings and slabs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
