import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortar Calculator — Free Online Calculator | MyContractorTools",
  description: "Free mortar calculator. Calculate bags of mortar mix, cubic feet of mortar, and sand needed for brick and block walls. Supports mortar types N, S, M, and O with accurate coverage rates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
