import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonotube & Concrete Pier Calculator — Free Online Calculator | MyContractorTools",
  description: "Free sonotube and concrete pier calculator. Calculate concrete volume, bag count, rebar, and J-bolts for pier foundations. Supports 8 to 16 inch diameter piers with accurate volume calculations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
