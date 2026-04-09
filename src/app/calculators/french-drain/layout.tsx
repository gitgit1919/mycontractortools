import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "French Drain Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate gravel, pipe, and fabric quantities for French drain installations. Includes cubic yards of gravel, linear feet of pipe, landscape fabric, and cost estimates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
