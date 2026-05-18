"use client";

import { motion, type Easing } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Risk Management",
    desc: "Quantitative and qualitative risk assessments, HAZOP, HAZID, LOPA, SIL determination and safety case development.",
  },
  {
    title: "Governance",
    desc: "As a governance specialist, we combine UK public-sector rigour with international development expertise, delivering reforms that meet both local context needs and global expectations.",
  },
  {
    title: "Circular Economy",
    desc: "We support governments to move from circular economy policy to implementation at scale. Our frameworks align national priorities with continental strategies such as the African Union circular economy agenda. We enable ministries to integrate circular economy into industrial policy, climate strategy, and job creation programmes.",
  },
  {
    title: "Project Management Consultancy",
    desc: "End-to-end project delivery, PMC/EPCM support, schedule management, cost control and stakeholder coordination.",
  },
  {
    title: "Sustainable Aftermarket Framework",
    desc: "A structured approach to extending asset lifecycles through sustainable parts sourcing, remanufacturing, and responsible end-of-life asset management — reducing environmental impact while maintaining operational performance.",
  },
  {
    title: "Trend Analysis & Future Scoping",
    desc: "Insight services including trend analysis, robotics integration advisory, and future-state technology road-mapping.",
  },
];

const industries = [
  "Energy — Oil & Gas (Upstream, Midstream & Downstream)",
  "Renewables & Clean Nuclear",
  "Petrochemical",
  "Building & Infrastructure",
  "Manufacturing (Battery Systems, FMCG)",
  "Water",
  "Transport — Road, Rail & Aviation",
  "Logistics",
  "Circular Economy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as Easing },
  }),
};

export default function EngineeringConsultingContent() {
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
            Engineering &amp; Risk Management
            <br />
            <span style={{ color: "#c9a84c" }}>Consulting Services</span>
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop"
              alt="SammsConsult engineering team"
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
                Sammsconsult
              </strong>{" "}
              has been providing Project &amp; Risk Management and Consultancy Services to Industries Globally.
            </p>
            <p>
              It was established and registered in the UK in the year 2011. We are an independent
              consultancy company, experienced in providing Engineering and Consulting services &amp;
              solutions to various industries. With a team of Consultants and Project Managers and
              over 20 years&apos; experience spread across Energy (Oil &amp; Gas — Upstream, Midstream
              and Downstream), Renewables &amp; Clean Nuclear, Petrochemical, Building, Infrastructure,
              Manufacturing (Battery Systems, FMCG), Water and Transport (Rail, Road &amp; Aviation)
              &amp; Logistics Industries.
            </p>
            <p>
              We are flexible and globally mobile; services can easily be carried out remotely,
              thus considerably reducing project lifecycle costs. Our insight services also
              include Trend Analysis, Robotics, and Future Scoping.
            </p>
            <p>
              Principal Consultants and Specialists (SMEs) driving the business include
              professionals with Chartered Engineer status and membership of recognised bodies
              such as IET and PMI ensuring the highest standard of delivery on every engagement.
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
              Our Core Capabilities
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

      {/* ── Industries Served ── */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
              Sectors
            </p>
            <h2
              className="text-2xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-4 py-4 px-5 border border-gray-100 hover:border-[#c9a84c] transition-colors duration-300"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#c9a84c" }}
                />
                <span className="text-sm" style={{ color: "#374151" }}>
                  {industry}
                </span>
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
            Get in touch to discuss how <span style={{ fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif", fontSize: "1.3em" }}>SammsConsult</span> can deliver value to your project or organisation.
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
