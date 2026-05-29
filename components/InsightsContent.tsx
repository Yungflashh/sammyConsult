"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const insights = [
  {
    title: "Renewable Energy Solutions",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
    alt: "Renewable energy wind turbines at sunset",
    desc: "Our team of experts research into innovative Renewable energy solutions to help clients reduce their carbon footprint and lower energy costs.",
  },
  {
    title: "Solar Energy",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    alt: "Solar panels on a rooftop",
    desc: "Our team of experts research into innovative solutions for solar energy, and advise in the area of design, development, and installation.",
  },
  {
    title: "Wind Energy",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop",
    alt: "Offshore wind turbine farm",
    desc: "We offer a wide range of Wind Energy research services to meet the unique needs of our clients. From site selection to installation, we have the expertise to provide advice and review solutions to ensure that they are efficient, reliable, and cost-effective.",
  },
  {
    title: "Hydro Energy",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    alt: "Hydroelectric dam turbines and water infrastructure",
    desc: "Our Hydro Energy services help businesses research in order to create powerful, scalable, and robust hydroelectric power solutions that drive growth.",
  },
  {
    title: "Geothermal Energy",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    alt: "Geothermal energy plant with steam vents",
    desc: "Our team of experts research into innovative solutions for Geothermal energy, and advise in the area of design, development, and installation. We have the expertise to provide advice and review solutions to ensure that they are efficient, reliable, and cost-effective.",
  },
  {
    title: "Energy and Data Storage Centre",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    alt: "Energy infrastructure and power grid",
    desc: "Our Energy and Data Storage Centre services research innovative solutions for storing renewable energy and also data centres. Our team of experts has the skills and experience in options selection.",
  },
  {
    title: "Trend Analysis",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    alt: "Data trend analysis and charts",
    desc: "Our team of experts research robust trend analysis and provide detailed findings for areas of interest. Our team of experts has the skills and experience in options selection.",
  },
  {
    title: "Future Scoping",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    alt: "Futuristic technology and global connectivity",
    desc: "Our team of experts research Future Scoping and potential trends, and provide detailed findings for areas of interest.",
  },
  {
    title: "Robotics",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    alt: "Advanced robotics and automation",
    desc: "Our team of experts research Robotics and its impacts on the future. Robotics and mechatronics engineering are some areas of interest that clients can consider so as to position their business ready for the future.",
  },
];

export default function InsightsContent() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-44 pb-10 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Research &amp; Innovation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Insights
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-px w-20 mx-auto mt-7 origin-center"
            style={{ background: "#c9a84c" }}
          />
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {insights.map((item, i) => (
              <InsightCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-10 text-center" style={{ background: "#0d1b3e" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-xl mx-auto"
        >
          <h2
            className="text-2xl md:text-3xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Interested in our research?
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Contact us to learn how our insights can inform your strategy and drive better outcomes.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,168,76,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer"
            style={{ background: "#c9a84c", color: "#0d1b3e" }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

function InsightCard({
  item,
  index,
}: {
  item: { title: string; image: string; alt: string; desc: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.55 }}
      className="flex flex-col"
    >
      <h2
        className="text-center text-base md:text-lg font-semibold mb-5"
        style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
      >
        {item.title}
      </h2>

      <div className="overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={560}
            height={420}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <p className="text-center text-sm leading-[1.9]" style={{ color: "#4b5563" }}>
        {item.desc}
      </p>
    </motion.div>
  );
}
