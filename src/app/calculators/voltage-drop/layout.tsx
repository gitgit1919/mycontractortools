import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltage Drop Calculator — Wire Size & NEC Compliance | MyContractorTools",
  description: "Free voltage drop calculator. Calculate voltage drop percentage, wire sizing, and NEC code compliance for electrical circuits. Copper and aluminum wire, single and three-phase.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
