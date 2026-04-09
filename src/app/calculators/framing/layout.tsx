import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall Framing Calculator — Studs, Plates & Sheathing | MyContractorTools",
  description: "Free wall framing calculator. Calculate studs, top and bottom plates, headers, sheathing, and nails for wall framing. 16 and 24 inch on-center spacing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
