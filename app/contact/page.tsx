import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — SammsConsult",
  description:
    "Get in touch with SammsConsult. Visit us at Rubislaw Square, Aberdeen or email sammsconsult@gmail.com.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
