import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siding Calculator — Panels, Trim & Accessories | MyContractorTools",
  description: "Free siding calculator. Estimate siding panels, J-channel, starter strip, trim, and accessories. Calculate for vinyl, fiber cement, and wood siding.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
