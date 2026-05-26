"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Project Feasibility Studies",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    alt: "Project feasibility analysis and data",
    desc: "We offer project feasibility studies to help clients assess the viability of their engineering projects. Our experts provide valuable insights and recommendations to help clients make informed decisions about their projects.",
  },
  {
    title: "Research & Development",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    alt: "People doing research with notes and writing",
    desc: "Be it new start-ups or established institutions, they all require specialist initiation, concept and feasibility studies before project sanction. We carry out these studies to ensure the initial sprint covers all the basis for growth and sustainability of the business. Examples include initiation studies for industries such as mining, rail, energy, and consulting services.",
  },
  {
    title: "Management Consulting",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop",
    alt: "Senior management strategy session",
    desc: "We provide advisory and/or implementation services to senior managements in areas of strategy, redefining business objectives in order to improve performance. We also provide organisational change management assistance, development of coaching skills, process analysis, technology implementation etc.",
  },
  {
    title: "Project Management",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    alt: "Engineers managing a construction project",
    desc: "We provide project management services to ensure that engineering projects are completed on time, within budget, and to the required standards. Our team has experience managing projects of various sizes and complexities.",
  },
  {
    title: "Consulting Services",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    alt: "Consulting services meeting",
    desc: "We offer consulting services to clients in various industries to help them optimize their engineering processes and operations. Our experts provide valuable insights and recommendations to enhance productivity and reduce costs.",
  },
  {
    title: "Training & Education",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    alt: "Training and education workshop",
    desc: "We provide training and education services to help clients improve their skills and knowledge. Our training programmes are tailored to meet the specific needs of each client and cover a wide range of topics.",
  },
  {
    title: "Project Management Consultant",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    alt: "Project management consultant at work",
    desc: "It's all about being the eyes and ears of the client and protecting the client's own interests. Project in a Controlled Environment (PRINCE 2) methodology, as well as Agile and Waterfall Methodologies are some of the frameworks we apply in implementing successful projects over the years.",
  },
  {
    title: "Risk Management",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    alt: "Risk management assessment",
    desc: "It's all about being the eyes and ears of the client and protecting the client's own interests. Risk Management methods are applied in implementing successful projects over the years, ensuring risks are identified, assessed, and mitigated at every stage.",
  },
];

export default function ProjectMgtContent() {
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
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Project Management{" "}
            <span style={{ color: "#c9a84c" }}>Consulting</span>
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

      {/* ── Grid of services ── */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Rows of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.slice(0, 6).map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} index={i} />
            ))}
          </div>

          {/* Last row of 2 — centered */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 max-w-3xl mx-auto">
            {services.slice(6).map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} index={i + 6} />
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
            Let us manage your next project
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Get in touch to find out how <span style={{ fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif", fontSize: "1.3em" }}>SammsConsult</span> can deliver your project on time, within budget, and to the highest standards.
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

function ServiceCard({
  svc,
  index,
}: {
  svc: { title: string; image: string; alt: string; desc: string };
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
        {svc.title}
      </h2>

      {/* Image */}
      <div className="overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={svc.image}
            alt={svc.alt}
            width={560}
            height={420}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-center text-sm leading-[1.9]" style={{ color: "#4b5563" }}>
        {svc.desc}
      </p>
    </motion.div>
  );
}
