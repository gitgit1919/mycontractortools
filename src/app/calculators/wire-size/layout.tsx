import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wire Size Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate minimum wire size (AWG) based on amperage, distance, voltage, and allowable voltage drop. Includes NEC ampacity references for copper and aluminum conductors.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
