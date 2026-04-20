"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const functions = [
  {
    title: "Flood Risk Management Program",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=800&auto=format&fit=crop",
    alt: "Aerial view of flood risk landscape",
    desc: "Our consultants and engineers provide custom made Flood Risk analysis based on climatic data e.g. hydrological and hydraulic data as well as adopting relevant modelling methodologies and risk assessment to determine actions for flood resilient designs/features and strategic planning & use.",
  },
  {
    title: "SCE Management Program",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    alt: "Industrial safety critical elements and pipework",
    desc: "Our asset integrity engineers provide custom made performance standards to meet your business needs using the safety critical elements (SCE) management program. Reliability and availability data will be used in providing optimisation options for determining maintenance frequencies of SCEs/ECEs to reduce cost and efficiency.",
  },
  {
    title: "Sustainable After Market Framework",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    alt: "Team collaborating on sustainability strategy",
    desc: "We provide Sustainable After Market (SAM) Framework to ensure that products in operation lifecycle provides sustainable input to local area and economy. Our team of consultants has experience in various products and industries and can provide effective solutions that meet your sustainability economics requirements.",
  },
  {
    title: "Independent Review Consultants",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    alt: "Consultants reviewing technical documents",
    desc: "We provide independent review of reliability and safety related studies across industries to ensure timely approval by independent verification bodies. Our experts provide valuable insights and recommendations to enhance productivity and reduce costs.",
  },
  {
    title: "RAM Modelling Program",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
    alt: "Engineer with hard hat using tablet for RAM analysis",
    desc: "We offer development and maintenance of facility Reliability Availability Maintainability (RAM) Model, as well as consulting and advisory services to help clients optimize their engineering processes and operations. Our experts provide valuable insights and recommendations to enhance productivity and reduce costs.",
  },
  {
    title: "Consulting and Advisory Services",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    alt: "Business consulting meeting",
    desc: "We offer consulting and advisory services to help clients optimize their engineering processes and operations. Our experts provide valuable insights and recommendations to enhance productivity and reduce costs.",
  },
  {
    title: "Project Management & Risk",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    alt: "Overhead view of project management team",
    desc: "Our Project Management services help clients deliver complex renewable energy projects on time, within budget, and to the highest standards of quality. We have a proven track record of managing large-scale renewable energy projects across multiple industries.",
  },
  {
    title: "Project Planning and Execution",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    alt: "Construction engineers planning on site",
    desc: "We provide project planning and execution services to ensure that your engineering projects are completed on time, within budget, and to the required standards. Our team has experience managing projects of various sizes and complexities.",
  },
];

export default function FunctionsContent() {
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
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Functions
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

      {/* ── Grid of functions ── */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Rows of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {functions.slice(0, 6).map((fn, i) => (
              <FunctionCard key={fn.title} fn={fn} index={i} />
            ))}
          </div>

          {/* Last row of 2 — centered */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 max-w-3xl mx-auto">
            {functions.slice(6).map((fn, i) => (
              <FunctionCard key={fn.title} fn={fn} index={i + 6} />
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
            Interested in any of our functions?
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Contact us today to discuss how our specialised services can add value to your project.
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

function FunctionCard({
  fn,
  index,
}: {
  fn: { title: string; image: string; alt: string; desc: string };
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
      {/* Title */}
      <h2
        className="text-center text-base md:text-lg font-semibold mb-5"
        style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
      >
        {fn.title}
      </h2>

      {/* Image */}
      <div className="overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={fn.image}
            alt={fn.alt}
            width={560}
            height={420}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Description */}
      <p
        className="text-center text-sm leading-[1.9]"
        style={{ color: "#4b5563" }}
      >
        {fn.desc}
      </p>
    </motion.div>
  );
}
