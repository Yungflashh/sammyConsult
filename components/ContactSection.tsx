"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const inputBase: React.CSSProperties = {
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    color: "#ffffff",
    background: "transparent",
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
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
            Reach Out
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get in <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-base font-light leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.85)", lineHeight: "1.9" }}
            >
              Ready to take your project to the next level? Our team of expert engineers and
              consultants are here to provide tailored solutions. Contact us today.
            </p>

            {[
              { icon: MapPin, label: "Address", value: "London, United Kingdom" },
              { icon: Phone, label: "Phone", value: "+44 7909 018596" },
              { icon: Mail, label: "Email", value: "info@sammsconsult.co.uk" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-5 mb-8 cursor-pointer"
              >
                <div
                  className="p-3 flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  <item.icon size={18} style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1 font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {item.label}
                  </p>
                  <p className="font-light" style={{ color: "#ffffff" }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 text-sm font-light focus:outline-none transition-all duration-300"
                style={{ ...inputBase, borderColor: formData.name ? "#c9a84c" : "rgba(255,255,255,0.3)" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-3 text-sm font-light focus:outline-none transition-all duration-300"
                style={{ ...inputBase, borderColor: formData.email ? "#c9a84c" : "rgba(255,255,255,0.3)" }}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-0 py-3 text-sm font-light focus:outline-none transition-all duration-300"
                style={{ ...inputBase }}
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-0 py-3 text-sm font-light focus:outline-none transition-all duration-300 cursor-pointer"
                style={{
                  ...inputBase,
                  color: formData.subject ? "#ffffff" : "rgba(255,255,255,0.45)",
                  colorScheme: "dark",
                }}
              >
                <option value="">Service of Interest</option>
                <option value="reliability">Reliability Engineering</option>
                <option value="asset">Asset Integrity</option>
                <option value="pm">Project Management</option>
                <option value="risk">Risk Management</option>
                <option value="consulting">Engineering Consultancy</option>
                <option value="other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Your Message *"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-0 py-3 text-sm font-light focus:outline-none transition-all duration-300 resize-none"
              style={{ ...inputBase }}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201,168,76,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 text-sm tracking-widest uppercase font-medium flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
              style={{ background: "#c9a84c", color: "#0d1b3e" }}
            >
              {sent ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  ✓ Message Sent!
                </motion.span>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
