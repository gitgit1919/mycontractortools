import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Square Footage Calculator — Area for Any Shape | MyContractorTools",
  description: "Free square footage calculator. Calculate area for rectangles, circles, triangles, and L-shaped rooms. Convert between square feet, square yards, and square meters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
