"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link, Mail } from "lucide-react";

const team = [
  {
    name: "Samuel Okonkwo",
    role: "Chief Executive Officer",
    specialty: "Asset Integrity & Reliability",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Amara Williams",
    role: "Technical Director",
    specialty: "Project Management Consultancy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "James Adeyemi",
    role: "Head of Risk Management",
    specialty: "Risk & Safety Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Grace Nwosu",
    role: "Senior Consultant",
    specialty: "Engineering Technology Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-24 px-6 lg:px-10" style={{ background: "#f5f7fc" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="h-px w-20 mx-auto mb-6"
            style={{ background: "#c9a84c", transformOrigin: "left" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "#c9a84c" }}
          >
            Our People
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
          >
            Meet the <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Team</span>
          </motion.h2>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden mb-5"
                style={{ aspectRatio: "3/4" }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Hover overlay with links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end justify-center pb-6 gap-4"
                  style={{ background: "rgba(13,27,62,0.7)" }}
                >
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full border border-white/40 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    <Link size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full border border-white/40 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    <Mail size={16} />
                  </motion.button>
                </motion.div>

                {/* Gold accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "#c9a84c" }}
                />
              </div>

              {/* Info */}
              <div>
                <h3
                  className="text-lg font-light mb-1"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#c9a84c" }}>
                  {member.role}
                </p>
                <p className="text-xs font-light" style={{ color: "#888" }}>
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
