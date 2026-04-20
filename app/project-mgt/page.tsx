import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectMgtContent from "@/components/ProjectMgtContent";

export const metadata: Metadata = {
  title: "Project Management Consultancy — SammsConsult",
  description:
    "SammsConsult delivers expert project management consultancy including feasibility studies, risk management, training, and advisory services.",
};

export default function ProjectMgtPage() {
  return (
    <main>
      <Navbar />
      <ProjectMgtContent />
      <Footer />
    </main>
  );
}
