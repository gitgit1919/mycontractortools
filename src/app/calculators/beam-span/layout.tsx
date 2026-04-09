import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beam Span Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Estimate maximum allowable beam spans for lumber and LVL beams based on IRC residential tables. Select beam size, species, and load type to find the right beam for your project.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
