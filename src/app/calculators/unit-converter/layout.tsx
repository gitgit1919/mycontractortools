import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Construction Unit Converter — Free Length, Area, Volume Converter | MyContractorTools",
  description: "Free unit converter for contractors. Convert between feet, inches, meters, yards, square feet, square meters, cubic yards, cubic feet, gallons, liters, and more.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
