import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Roof Pitch Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate roof pitch as X:12, slope angle in degrees, slope percentage, and roof area multiplier. Includes a common pitch factor reference table for roofers and contractors.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
