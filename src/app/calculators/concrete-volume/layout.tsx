import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Calculator — Cubic Yards for Slabs, Footings & Columns | MyContractorTools",
  description: "Free concrete volume calculator. Calculate cubic yards of concrete needed for slabs, footings, columns, and walls. Includes waste factor and bag count estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
