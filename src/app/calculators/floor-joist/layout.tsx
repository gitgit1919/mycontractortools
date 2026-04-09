import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Floor Joist Span Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Find maximum floor joist spans per IRC tables for 2x6, 2x8, 2x10, and 2x12 joists at 12, 16, and 24 inch spacing. Includes deflection checks and span comparison table.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
