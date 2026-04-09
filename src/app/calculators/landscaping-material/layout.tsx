import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landscaping Material Calculator — Mulch, Gravel & Topsoil | MyContractorTools",
  description: "Free landscaping material calculator. Calculate cubic yards of mulch, gravel, topsoil, and other materials needed. Estimate coverage area and material costs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
