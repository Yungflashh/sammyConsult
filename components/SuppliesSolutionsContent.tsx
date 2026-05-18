"use client";

import { motion, type Easing } from "framer-motion";
import Image from "next/image";

const panels = [
  {
    title: "New Products",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1170&auto=format&fit=crop",
    href: "#new-products",
  },
  {
    title: "Product Supplies",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1170&auto=format&fit=crop",
    href: "#product-supplies",
  },
  {
    title: "Logistics",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop",
    href: "#logistics",
  },
];

const newProducts = [
  {
    title: "Industrial Automation Equipment",
    desc: "Cutting-edge automation systems, PLCs, sensors, and actuators sourced from leading global manufacturers to modernise your operations.",
  },
  {
    title: "Renewable Energy Technology",
    desc: "Solar panels, wind turbine components, energy storage systems, and smart grid equipment aligned with the global clean energy transition.",
  },
  {
    title: "Safety & Instrumentation",
    desc: "Pressure transmitters, gas detectors, fire & gas systems, and safety instrumented systems (SIS) compliant with IEC 61511.",
  },
  {
    title: "Condition Monitoring Tools",
    desc: "Vibration analysers, ultrasonic testing equipment, thermal imaging cameras, and predictive maintenance platforms.",
  },
];

const productSupplies = [
  {
    title: "MRO Supplies",
    desc: "Maintenance, Repair & Operations consumables including fasteners, seals, gaskets, lubricants, and workshop tooling delivered globally.",
  },
  {
    title: "Spare Parts & Components",
    desc: "OEM and aftermarket spare parts for rotating equipment, pressure vessels, heat exchangers, and process piping systems.",
  },
  {
    title: "Personal Protective Equipment",
    desc: "Full range of PPE including flame-resistant workwear, respirators, hearing protection, and fall-arrest equipment to ATEX and EN standards.",
  },
  {
    title: "Chemical & Process Supplies",
    desc: "Corrosion inhibitors, biocides, demulsifiers, and specialty chemicals for upstream, midstream, and downstream process applications.",
  },
];

const logistics = [
  {
    title: "Global Freight Management",
    desc: "End-to-end air, sea, and road freight coordination with full customs clearance support across Europe, Africa, the Middle East, and beyond.",
  },
  {
    title: "Project Cargo & Heavy Lift",
    desc: "Specialist handling for oversized, sensitive, or high-value engineering equipment including route surveys, load-out, and installation support.",
  },
  {
    title: "Warehousing & Inventory Management",
    desc: "Secure bonded warehousing facilities with real-time inventory tracking, kitting, and just-in-time delivery to your project site.",
  },
  {
    title: "Supply Chain Optimisation",
    desc: "Strategic procurement planning, vendor qualification, expediting, and supply chain risk mitigation to keep your project on schedule.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as Easing },
  }),
};

function DetailCards({
  id,
  label,
  heading,
  items,
  light,
}: {
  id: string;
  label: string;
  heading: string;
  items: { title: string; desc: string }[];
  light: boolean;
}) {
  return (
    <section
      id={id}
      className="py-20 px-6 lg:px-10"
      style={{ background: light ? "#ffffff" : "#f9f8f6" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "#c9a84c" }}
          >
            {label}
          </p>
          <h2
            className="text-2xl md:text-4xl font-light"
            style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
          >
            {heading}
          </h2>
          <div
            className="h-px w-16 mx-auto mt-6"
            style={{ background: "#c9a84c" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-7 border-l-2 hover:shadow-md transition-shadow duration-300"
              style={{
                borderColor: "#c9a84c",
                background: light ? "#f9f8f6" : "#ffffff",
              }}
            >
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: "#0d1b3e", fontFamily: "var(--font-playfair)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SuppliesSolutionsContent() {
  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-44 pb-16 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            What We Supply
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-3xl md:text-5xl font-light text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Supplies &amp; Solutions
            <br />
            <span style={{ color: "#c9a84c" }}>For Industry &amp; Government</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-sm leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            From cutting-edge engineering products to fully managed logistics, SammsConsult delivers
            end-to-end supply and procurement solutions to projects across energy, infrastructure,
            manufacturing, and government sectors worldwide.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-px w-24 mx-auto mt-8 origin-left"
            style={{ background: "#c9a84c" }}
          />
        </div>
      </section>

      {/* ── Three-panel image strip ── */}
      <section className="w-full" style={{ background: "#0d1b3e" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {panels.map((panel, i) => (
            <motion.a
              key={panel.title}
              href={panel.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(panel.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative overflow-hidden cursor-pointer group"
              style={{ height: "420px" }}
            >
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    i === 1
                      ? "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.65) 100%)"
                      : "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%)",
                }}
              />
              {/* Gold side border on hover */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "#c9a84c" }}
              />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <h2
                  className="text-white text-2xl md:text-3xl font-light tracking-wide text-center px-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {panel.title}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[15px] leading-[1.9]"
            style={{ color: "#374151" }}
          >
            We maintain a global network of qualified vendors and manufacturers, enabling us to source,
            inspect, and deliver quality products on time — wherever your project is located. Our
            procurement specialists work alongside our engineering consultants to ensure every product
            and supply chain solution meets technical, regulatory, and commercial requirements.
          </motion.p>
        </div>
      </section>

      {/* ── Detail sections ── */}
      <DetailCards
        id="new-products"
        label="Innovation & Technology"
        heading="New Products"
        items={newProducts}
        light={false}
      />
      <DetailCards
        id="product-supplies"
        label="Procurement & MRO"
        heading="Product Supplies"
        items={productSupplies}
        light={true}
      />
      <DetailCards
        id="logistics"
        label="Supply Chain"
        heading="Logistics"
        items={logistics}
        light={false}
      />

      {/* ── Why choose us strip ── */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
              Our Advantage
            </p>
            <h2
              className="text-2xl md:text-4xl font-light"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Why Source Through{" "}
              <span
                style={{
                  fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif",
                }}
              >
                SammsConsult
              </span>
              ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Global Vendor Network",
                desc: "Access to pre-qualified suppliers across Europe, Asia, the Americas, and Africa.",
              },
              {
                num: "02",
                title: "Technical Assurance",
                desc: "Engineering-led procurement ensures every product meets specification before delivery.",
              },
              {
                num: "03",
                title: "Single Point of Contact",
                desc: "One team managing sourcing, inspection, freight, customs, and on-site delivery.",
              },
              {
                num: "04",
                title: "Compliance & Standards",
                desc: "All supplies traceable to ATEX, CE, API, ASME, ISO, and customer-specific standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <p
                  className="text-4xl font-light mb-4"
                  style={{ color: "#c9a84c", fontFamily: "var(--font-playfair)" }}
                >
                  {item.num}
                </p>
                <h3
                  className="text-sm font-semibold mb-2 uppercase tracking-widest"
                  style={{ color: "#0d1b3e" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.desc}
                </p>
              </motion.div>
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
          className="max-w-2xl mx-auto"
        >
          <h2
            className="text-2xl md:text-4xl font-light text-white mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Need a supply or logistics solution?
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Tell us what you need and our team will source, inspect, and deliver it — anywhere in the world.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,168,76,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer"
            style={{ background: "#c9a84c", color: "#0d1b3e" }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
