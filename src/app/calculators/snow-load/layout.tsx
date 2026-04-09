import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snow Load Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate roof snow loads per ASCE 7 standards. Enter ground snow load, roof type, pitch, exposure, and importance factor to get flat and sloped roof snow load values.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
