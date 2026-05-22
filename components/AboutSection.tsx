"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Philosophy",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    text: "Throughout project lifecycle, operations and decommissioning, we help get the job done! Engineering Solutions for a Better Future.",
  },
  {
    title: "Our Beginnings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    text: "We are an independent specialised engineering consultancy and service company, experienced in providing engineering and consulting services as well as project management solutions. Established in 2011.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-10" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="h-px w-20 mx-auto mb-6"
            style={{ background: "#c9a84c", transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs tracking-[0.35em] uppercase mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
          >
            The Story of{" "}
            <span style={{ fontStyle: "italic", color: "#0d1b3e", fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif" }}>SammsConsult</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: i === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(13,27,62,0.13)" }}
              className="group overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(13,27,62,0.2)" }}
                />
              </div>

              {/* Text */}
              <div className="p-8" style={{ background: "#fff" }}>
                <div className="h-px w-10 mb-5" style={{ background: "#c9a84c" }} />
                <h3
                  className="text-2xl font-light mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#4a4a4a", lineHeight: "1.9" }}
                >
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-20 text-center py-12 px-8 border-t border-b"
          style={{ borderColor: "rgba(201,168,76,0.3)" }}
        >
          <p
            className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
          >
            &ldquo;Engineering Solutions for a Better Future — delivering excellence through
            integrity, expertise, and unwavering commitment.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
