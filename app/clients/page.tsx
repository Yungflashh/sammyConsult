import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientsContent from "@/components/ClientsContent";

export const metadata: Metadata = {
  title: "Clients — SammsConsult",
  description:
    "SammsConsult has worked with leading global organisations including BP, Shell, Siemens, Chevron, Bombardier, and many more.",
};

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      <ClientsContent />
      <Footer />
    </main>
  );
}
