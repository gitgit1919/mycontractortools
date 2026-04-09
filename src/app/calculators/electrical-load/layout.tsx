import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Load Calculator — Panel Size & Amp Calculator | MyContractorTools",
  description: "Free electrical load calculator. Determine total electrical load and service panel size requirements. Calculate amps, watts, and breaker sizing for residential and commercial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
