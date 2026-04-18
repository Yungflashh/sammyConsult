import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ValuesSection from "@/components/ValuesSection";
import ConsultingSection from "@/components/ConsultingSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ValuesSection />
      <ConsultingSection />
      <ServicesSection />
      <ContactSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
