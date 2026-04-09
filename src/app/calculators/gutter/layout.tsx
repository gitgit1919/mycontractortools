import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gutters & Downspout Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate linear feet of gutter, number of downspouts, hangers, end caps, and miters needed for your roof. Size gutters based on roof area and local rainfall intensity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
