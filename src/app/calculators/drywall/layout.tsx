import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drywall Calculator — Sheets, Mud, Tape & Screws | MyContractorTools",
  description: "Free drywall calculator. Estimate sheets of drywall, joint compound, tape, and screws needed for walls and ceilings. Calculate by room dimensions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
