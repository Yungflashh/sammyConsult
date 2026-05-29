"use client";

import { motion, type Easing } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Road Network Design",
    desc: "Strategic consultancy input to deliver resilient, regulatory-compliant road networks that stand the test of time and meet the highest engineering standards.",
  },
  {
    title: "3D Ground Modelling Review",
    desc: "Critical review and challenge of advanced 3D ground modelling outputs, identifying inconsistencies and eliminating costly design errors before they reach construction.",
  },
  {
    title: "Materials Lifecycle Analysis",
    desc: "Comprehensive assessment of materials selection and lifecycle performance to ensure long-term durability, reduce whole-life costs, and support sustainable infrastructure.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Expert guidance through UK and international regulatory frameworks, ensuring designs are fully compliant and ready for approval without delays or costly revisions.",
  },
  {
    title: "Value Engineering",
    desc: "Systematic review of design solutions to maximise value, reduce unnecessary costs, and ensure delivery on time and under budget without compromising quality or safety.",
  },
  {
    title: "Right First Time Design Assurance",
    desc: "Independent design assurance and constructability review to fast-track your path from design to construction, minimising rework and accelerating project delivery.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as Easing },
  }),
};

export default function TransportContent() {
  return (
    <>
      {/* ── Page hero banner ── */}
      <section
        className="pt-44 pb-16 px-6 lg:px-10"
        style={{ background: "#0d1b3e" }}
      >
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
            className="text-3xl md:text-5xl font-light text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span style={{ color: "#c9a84c" }}>Road</span> and Transportation Engineering
            <br />
            <span style={{ color: "#c9a84c" }}>Consultancy</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="h-px w-24 mx-auto mt-8 origin-left"
            style={{ background: "#c9a84c" }}
          />
        </div>
      </section>

      {/* ── Intro: image + body text ── */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            <Image
              src="https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5dbfea0bec13ae0ca53925ea_engineering-consulting-services.jpg"
              alt="Trucks on highway road"
              width={560}
              height={420}
              className="w-full object-cover"
              style={{ display: "block" }}
              priority
            />
            <div
              className="absolute bottom-0 left-0 w-1 h-full"
              style={{ background: "#c9a84c" }}
            />
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-[15px] leading-[1.9]"
            style={{ color: "#374151" }}
          >
            <p>
              <strong className="font-semibold" style={{ color: "#0d1b3e" }}>
                SammsConsult
              </strong>{" "}
              provides engineering consultancy as a strategic input to help deliver resilient,
              regulatory-compliant road networks on time and under budget.
            </p>
            <p>
              Asking the right questions, critiquing advanced 3D ground modelling as well as
              providing materials lifecycle analysis, we eliminate costly errors before they
              reach construction.
            </p>
            <p>
              We aim to help ensure delivery of &lsquo;Right First Time&rsquo; designs that
              fast-track your path to construction — reducing rework, saving time, and protecting
              your budget at every stage.
            </p>
            <p>
              Our transport consultants bring deep technical expertise and independent
              judgement to every engagement, acting as a trusted strategic partner from
              early-stage design through to construction-ready delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What We Offer ── */}
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
              What We Offer
            </p>
            <h2
              className="text-2xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Our Transport Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-7 border-t-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderColor: "#c9a84c" }}
              >
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#0d1b3e", fontFamily: "var(--font-playfair)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 px-6 lg:px-10 text-center"
        style={{ background: "#0d1b3e" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-2xl md:text-4xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to work with us?
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Get in touch to discuss how{" "}
            <span
              style={{
                fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif",
                fontSize: "1.3em",
              }}
            >
              SammsConsult
            </span>{" "}
            can deliver resilient transport infrastructure for your project.
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
