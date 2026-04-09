import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plywood & Sheathing Calculator — Free Online Calculator | MyContractorTools",
  description: "Free plywood calculator. Calculate the number of plywood sheets needed for your project based on area dimensions, sheet size, thickness, and waste percentage. Includes weight and cost estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
