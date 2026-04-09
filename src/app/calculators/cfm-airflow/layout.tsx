import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CFM & Airflow Calculator — Free Online Calculator | MyContractorTools",
  description:
    "Calculate required CFM, duct velocity, and static pressure for HVAC systems. Includes air changes per hour (ACH) guidelines for bathrooms, kitchens, bedrooms, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
