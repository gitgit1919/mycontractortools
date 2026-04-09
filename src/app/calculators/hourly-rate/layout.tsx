import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor Hourly Rate Calculator — What to Charge Per Hour | MyContractorTools",
  description: "Free hourly rate calculator for contractors. Figure out what to charge per hour based on overhead, expenses, desired income, and billable hours. Calculate daily rates too.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
