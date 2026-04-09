import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafter Length Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate common and hip rafter lengths, ridge height, birdsmouth cut dimensions, and tail cut angles. Enter building span, roof pitch, and overhang to get accurate framing measurements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
