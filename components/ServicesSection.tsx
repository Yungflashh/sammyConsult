"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚙️",
    title: "Reliability Engineering",
    description:
      "Systematic approach to ensuring assets perform their intended functions under defined conditions throughout their lifecycle.",
  },
  {
    icon: "🛡️",
    title: "Asset Integrity",
    description:
      "Comprehensive asset integrity management to ensure physical assets continue to fulfill their design functions safely and efficiently.",
  },
  {
    icon: "📋",
    title: "Project Management",
    description:
      "End-to-end project management solutions from concept to commissioning, ensuring on-time, on-budget delivery.",
  },
  {
    icon: "⚠️",
    title: "Risk Management",
    description:
      "Rigorous risk identification, assessment, and mitigation strategies to protect personnel, assets, and the environment.",
  },
  {
    icon: "🔬",
    title: "Engineering Consultancy",
    description:
      "Specialist engineering advice and technical support across upstream, midstream, and downstream sectors.",
  },
  {
    icon: "🌐",
    title: "Technology Solutions",
    description:
      "Cutting-edge digital and technology solutions that drive operational efficiency and competitive advantage.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="h-px w-20 mx-auto mb-6 origin-center"
            style={{ background: "#c9a84c" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs tracking-[0.35em] uppercase mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Services</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              whileHover={{
                y: -8,
                borderColor: "rgba(201,168,76,0.75)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
              }}
              className="p-8 border cursor-pointer group transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div className="text-3xl mb-5">{service.icon}</div>

              <div
                className="h-px w-8 mb-5 transition-all duration-300 group-hover:w-16"
                style={{ background: "#c9a84c" }}
              />

              <h3
                className="text-xl font-light text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", lineHeight: "1.9" }}
              >
                {service.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
