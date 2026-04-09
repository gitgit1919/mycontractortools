import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravel Calculator — Tons of Crushed Stone, Sand & Aggregate | MyContractorTools",
  description: "Free gravel calculator. Calculate tons of gravel, crushed stone, sand, or topsoil needed by area and depth. Multiple material types with density-based tonnage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
