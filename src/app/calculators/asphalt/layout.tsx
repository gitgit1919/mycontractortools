import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asphalt Calculator — Tons for Driveways & Parking Lots | MyContractorTools",
  description: "Free asphalt calculator. Estimate tons of asphalt for driveways, parking lots, and overlays. Calculate by area, thickness, and material density.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
