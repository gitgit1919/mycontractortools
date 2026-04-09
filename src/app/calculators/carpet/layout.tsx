import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carpet Calculator — Square Yards, Padding & Cost | MyContractorTools",
  description: "Free carpet calculator. Calculate carpet in square yards, seam length, padding, and total cost for any room size. Includes waste factor and roll width optimization.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
