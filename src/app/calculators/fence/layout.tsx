import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fence Calculator — Posts, Rails, Pickets & Cost | MyContractorTools",
  description: "Free fence calculator. Estimate posts, rails, pickets, concrete, and total cost for wood, vinyl, or chain link fences. Calculate materials by fence length and height.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
