import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuppliesSolutionsContent from "@/components/SuppliesSolutionsContent";

export const metadata: Metadata = {
  title: "Supplies & Solutions — SammsConsult",
  description:
    "SammsConsult delivers end-to-end supply and procurement solutions — new products, MRO supplies, and global logistics for energy, infrastructure, and government sectors worldwide.",
};

export default function SuppliesSolutionsPage() {
  return (
    <main>
      <Navbar />
      <SuppliesSolutionsContent />
      <Footer />
    </main>
  );
}
