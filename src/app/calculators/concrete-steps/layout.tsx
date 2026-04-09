import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Steps Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate concrete volume, riser height, total run, and form board needs for concrete steps. Verifies IRC code compliance for maximum riser height and minimum tread depth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
