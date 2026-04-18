"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden"
      style={{ minHeight: "340px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(13,27,62,0.78)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-light text-white mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Subscribe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm mb-10 font-light tracking-wide"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Sign up to hear from us.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row w-full max-w-xl"
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-4 text-sm font-light focus:outline-none"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              borderRight: "none",
            }}
          />
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="px-8 py-4 text-sm tracking-widest uppercase font-medium flex items-center justify-center"
                style={{ background: "#c9a84c", color: "#0d1b3e" }}
              >
                ✓ Subscribed!
              </motion.div>
            ) : (
              <motion.button
                key="btn"
                type="submit"
                whileHover={{ boxShadow: "0 0 25px rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-4 text-sm tracking-widest uppercase font-medium cursor-pointer transition-all duration-300 mt-2 sm:mt-0"
                style={{
                  background: "#0d1b3e",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                Sign up
              </motion.button>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
