"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = ["Reliability", "Performance", "Trust", "Consistency", "Safety"];

export default function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="py-24 px-6 lg:px-10"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: blueprint/hardhat image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop"
            alt="Engineering blueprints and hard hat"
            style={{ scale: imageScale }}
            className="w-full h-auto object-cover"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="absolute top-0 left-0 w-1 h-full origin-top"
            style={{ background: "#c9a84c" }}
          />
        </motion.div>

        {/* Right: values + text + CTA */}
        <div>
          {/* Values headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5"
          >
            {[
              ["Reliability", "Performance", "Trust"],
              ["Consistency", "Safety"],
            ].map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap items-baseline mb-1">
                {row.map((val) => (
                  <span key={val} className="flex items-baseline">
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl font-light"
                      style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
                    >
                      {val}
                    </span>
                    <span className="mx-2 text-2xl md:text-3xl font-light" style={{ color: "#0d1b3e" }}>
                      {" |"}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px w-14 mb-7 origin-left"
            style={{ background: "#c9a84c" }}
          />

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base font-light leading-relaxed mb-8"
            style={{ color: "#3a3a3a", lineHeight: "1.9" }}
          >
            There&apos;s much to see here. So, take your time, look around, and learn all there
            is to know about us. We hope you enjoy our site and take a moment to drop us a line.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(13,27,62,0.25)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 text-sm tracking-widest uppercase font-medium cursor-pointer transition-all duration-300"
            style={{ background: "#0d1b3e", color: "#ffffff" }}
          >
            Find out more
          </motion.button>
        </div>
      </div>
    </section>
  );
}
