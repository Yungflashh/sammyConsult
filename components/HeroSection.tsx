"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const taglines = [
  "Governance",
  "Risk Management",
  "Engineering Consultancy",
  "Project Management Consultancy",
  "Circular Economy",
  "Reliability",
  "Asset Integrity",
];

// Fixed positions — no Math.random() to avoid hydration mismatch
const PARTICLES = [
  { w: 3, h: 3, left: 12, top: 18, op: 0.3, dur: 6, delay: 0 },
  { w: 2, h: 2, left: 27, top: 42, op: 0.2, dur: 8, delay: 1 },
  { w: 4, h: 4, left: 45, top: 9,  op: 0.4, dur: 5, delay: 2 },
  { w: 2, h: 2, left: 63, top: 67, op: 0.25, dur: 7, delay: 0.5 },
  { w: 3, h: 3, left: 78, top: 31, op: 0.3, dur: 6, delay: 1.5 },
  { w: 2, h: 2, left: 90, top: 55, op: 0.2, dur: 9, delay: 2.5 },
  { w: 4, h: 4, left: 8,  top: 75, op: 0.35, dur: 5, delay: 0.8 },
  { w: 2, h: 2, left: 35, top: 88, op: 0.2, dur: 7, delay: 3 },
  { w: 3, h: 3, left: 52, top: 52, op: 0.3, dur: 6, delay: 1.2 },
  { w: 2, h: 2, left: 70, top: 14, op: 0.25, dur: 8, delay: 0.3 },
  { w: 3, h: 3, left: 85, top: 80, op: 0.3, dur: 5, delay: 2.2 },
  { w: 2, h: 2, left: 20, top: 60, op: 0.2, dur: 7, delay: 1.8 },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Only the background image moves on scroll — content stays put
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [currentTag, setCurrentTag] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % taglines.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0d1b3e" }}
    >
      {/* Parallax background image only */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,27,62,0.75)" }}
        />
      </motion.div>

      {/* Fixed-position particles — no random values */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.w + "px",
              height: p.h + "px",
              background: "#c9a84c",
              left: p.left + "%",
              top: p.top + "%",
              opacity: p.op,
            }}
            animate={{ y: [0, -28, 0], opacity: [p.op, p.op * 2, p.op] }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content — no scroll transform, just stacks naturally */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen pt-24 pb-24">
        {/* Top tagline row */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            {["Governance", "Risk Management", "Engineering Consultancy", "Project Management Consultancy", "Circular Economy", "Reliability", "Asset Integrity"].map((tag) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-[#c9a84c] text-lg font-light">|</span>
                <span
                  className="text-white text-base md:text-xl font-light tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {tag}
                </span>
              </span>
            ))}
            <span className="text-[#c9a84c] text-lg font-light">|</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Engineering
          <br />
          <span style={{ color: "#c9a84c" }}>Consultancy</span>
        </motion.h1>

        {/* Rotating specialty ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="h-9 mb-6 overflow-hidden flex items-center justify-center"
        >
          <motion.span
            key={currentTag}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="block text-[#c9a84c] text-sm md:text-base tracking-[0.25em] uppercase font-light"
          >
            {taglines[currentTag]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed mb-10 font-light"
          style={{ lineHeight: "1.85" }}
        >
          We provide innovative engineering and technology solutions for businesses worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 text-sm tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer"
            style={{ background: "#c9a84c", color: "#0d1b3e" }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 md:gap-20 w-full max-w-lg"
        >
          {[
            { num: "15+", label: "Years Experience" },
            { num: "200+", label: "Projects" },
            { num: "50+", label: "Global Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-light text-[#c9a84c] mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.num}
              </div>
              <div className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="text-[#c9a84c]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
