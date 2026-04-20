import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsContent from "@/components/InsightsContent";

export const metadata: Metadata = {
  title: "Insights — SammsConsult",
  description:
    "Explore SammsConsult's research insights across Renewable Energy, Solar, Wind, Hydro, Geothermal, Energy Storage, Trend Analysis, Future Scoping, and Robotics.",
};

export default function InsightsPage() {
  return (
    <main>
      <Navbar />
      <InsightsContent />
      <Footer />
    </main>
  );
}
