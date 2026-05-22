import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransportContent from "@/components/TransportContent";

export const metadata: Metadata = {
  title: "Transport Engineering Consultancy — SammsConsult",
  description:
    "SammsConsult provides strategic transport engineering consultancy delivering resilient, regulatory-compliant road networks on time and under budget.",
};

export default function TransportPage() {
  return (
    <main>
      <Navbar />
      <TransportContent />
      <Footer />
    </main>
  );
}
