import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngineeringConsultingContent from "@/components/EngineeringConsultingContent";

export const metadata: Metadata = {
  title: "Engineering Consulting — SammsConsult",
  description:
    "SammsConsult provides Safety & Reliability, Asset Maintenance, Project & Risk Management and Consultancy Services to Industries Globally.",
};

export default function EngineeringConsultingPage() {
  return (
    <main>
      <Navbar />
      <EngineeringConsultingContent />
      <Footer />
    </main>
  );
}
