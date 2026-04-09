import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Load Calculator — Free BTU & Tonnage Calculator | MyContractorTools",
  description: "Free HVAC load calculator. Calculate heating and cooling loads in BTU and tons for residential and commercial buildings. Factor in climate, insulation, windows, and occupants.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
