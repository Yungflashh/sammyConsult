"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Experience",
    desc: "Our team of engineers has decades of combined experience in a wide range of engineering disciplines. We have worked on projects of all sizes and complexities, and we have the skills and knowledge to tackle any challenge.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We are committed to innovation and staying on the cutting edge of technology. We use the latest tools and techniques to deliver engineering solutions that are efficient, effective, and sustainable.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe that the best solutions come from working together. We work closely with our clients to understand their needs and develop customized solutions that meet their specific requirements.",
  },
];

const clients = [
  "Alstom", "Amec Foster Wheeler", "AJS", "Apache", "Balfour Beatty",
  "Bluewater", "BOC Gas (Linde Group)", "Bombardier", "BP", "CalEnergy",
  "Centrica", "Chevron", "CNR", "CNOOC International", "EDF",
  "EU Horizon Calix", "EnQuest", "Fulcrum", "Harbour", "Hitachi",
  "Ithaca Energy", "Keipe Electric", "Knorr-Bremse", "KOC", "Maersk",
  "MerseyTravel", "Nexen", "Northvolt", "PBS", "Preem AB",
  "PX", "Repsol", "Risktec", "SABIC", "Sharq",
  "Shell", "Siemens", "SMG", "Spirit Energy", "Stadler",
  "Talisman",
];

export default function ClientsContent() {
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
            Trusted Globally
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our <span style={{ color: "#c9a84c" }}>Clients</span>
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

      {/* ── Why Choose SammsConsult ── */}
      <section className="py-20 px-6 lg:px-10" style={{ background: "#f9f8f6" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
              Our Strengths
            </p>
            <h2
              className="text-2xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Why Choose SammsConsult
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className="bg-white p-8 text-center border-t-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ borderColor: "#c9a84c" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(201,168,76,0.12)" }}
                  >
                    <Icon size={26} style={{ color: "#c9a84c" }} />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-sm leading-[1.9]" style={{ color: "#6b7280" }}>
                    {r.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Client list ── */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
              Who We Work With
            </p>
            <h2
              className="text-2xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Clients
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {clients.map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.35 }}
                whileHover={{ borderColor: "#c9a84c", color: "#0d1b3e", scale: 1.03 }}
                className="px-5 py-2.5 border text-sm font-light tracking-wide transition-all duration-300 cursor-default"
                style={{
                  borderColor: "rgba(13,27,62,0.15)",
                  color: "#374151",
                }}
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats banner ── */}
      <section className="py-16 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "40+", label: "Global Clients" },
            { num: "15+", label: "Years Experience" },
            { num: "200+", label: "Projects Delivered" },
            { num: "8+", label: "Industries Served" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="text-3xl md:text-4xl font-light mb-2"
                style={{ fontFamily: "var(--font-playfair)", color: "#c9a84c" }}
              >
                {stat.num}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-10 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-xl mx-auto"
        >
          <h2
            className="text-2xl md:text-3xl font-light mb-5"
            style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
          >
            Ready to join our client list?
          </h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ color: "#6b7280" }}>
            Get in touch to discuss how SammsConsult can deliver value to your organisation.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(13,27,62,0.2)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer text-white"
            style={{ background: "#0d1b3e" }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
