import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FunctionsContent from "@/components/FunctionsContent";

export const metadata: Metadata = {
  title: "Functions — SammsConsult",
  description:
    "Explore SammsConsult's full range of engineering functions including Flood Risk Management, SCE Management, RAM Modelling, and more.",
};

export default function FunctionsPage() {
  return (
    <main>
      <Navbar />
      <FunctionsContent />
      <Footer />
    </main>
  );
}
