import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallpaper Calculator — Free Online Calculator | MyContractorTools",
  description: "Free wallpaper calculator. Calculate the number of wallpaper rolls needed based on room dimensions, wall height, doors, windows, roll size, and pattern repeat. Accounts for waste from pattern matching.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
