import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miter Angle Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate miter and bevel angles for any corner angle or polygon. Includes presets for 90-degree corners, octagons, hexagons, pentagons, and compound miter settings for crown molding.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
