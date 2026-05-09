"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Globe, Send } from "lucide-react";

const hours = [
  { day: "Mon – Fri", time: "9:00 am – 5:00 pm" },
  { day: "Saturday", time: "9:00 am – 5:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPageContent() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

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
            Reach Out
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact <span style={{ color: "#c9a84c" }}>Us</span>
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

      {/* ── Two-column: form + info ── */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-2xl md:text-3xl font-semibold mb-8"
              style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
            >
              Drop us a line!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: "#6b7280" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-b py-3 text-sm font-light focus:outline-none transition-colors duration-300"
                  style={{
                    borderColor: form.name ? "#c9a84c" : "#d1d5db",
                    color: "#111827",
                    background: "transparent",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: "#6b7280" }}>
                  Email <span style={{ color: "#c9a84c" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-b py-3 text-sm font-light focus:outline-none transition-colors duration-300"
                  style={{
                    borderColor: form.email ? "#c9a84c" : "#d1d5db",
                    color: "#111827",
                    background: "transparent",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: "#6b7280" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b py-3 text-sm font-light focus:outline-none transition-colors duration-300 resize-none"
                  style={{
                    borderColor: form.message ? "#c9a84c" : "#d1d5db",
                    color: "#111827",
                    background: "transparent",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(201,168,76,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-sm tracking-widest uppercase font-medium flex items-center gap-3 transition-all duration-300 cursor-pointer"
                style={{ background: "#c9a84c", color: "#0d1b3e" }}
              >
                {sent ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    ✓ Sent!
                  </motion.span>
                ) : (
                  <>Send <Send size={15} /></>
                )}
              </motion.button>

              <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
                <span className="underline cursor-pointer">Terms of Service</span> apply.
              </p>
            </form>
          </motion.div>

          {/* Right — contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
              >
                Better yet, see us in person!
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                We love to hear from our clients and customers, so feel free to contact us.
              </p>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Mail size={18} style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1 font-medium" style={{ color: "#9ca3af" }}>Email</p>
                  <a
                    href="mailto:sammsconsult@gmail.com"
                    className="text-sm font-light hover:underline"
                    style={{ color: "#0d1b3e" }}
                  >
                    sammsconsult@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="p-3 flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <MapPin size={18} style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1 font-medium" style={{ color: "#9ca3af" }}>Address</p>
                  <p className="text-sm font-light" style={{ color: "#0d1b3e" }}>
                    Rubislaw Square, Off Queen&apos;s Road, Aberdeen AB15 4DG, UK
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="p-3 flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Globe size={18} style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1 font-medium" style={{ color: "#9ca3af" }}>Website</p>
                  <p className="text-sm font-light" style={{ color: "#0d1b3e" }}>www.sammsconsult.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={18} style={{ color: "#c9a84c" }} />
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-playfair)", color: "#0d1b3e" }}
                >
                  Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b" style={{ borderColor: "#f3f4f6" }}>
                    <span className="text-sm font-light" style={{ color: "#374151" }}>{h.day}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: h.time === "Closed" ? "#ef4444" : "#0d1b3e" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 px-4 py-3 text-sm font-medium inline-flex items-center gap-2"
                style={{ background: "rgba(201,168,76,0.1)", color: "#0d1b3e" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e" }}
                />
                Open today · 09:00 – 17:00
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map embed placeholder ── */}
      <section className="h-72 w-full" style={{ background: "#e5e7eb" }}>
        <iframe
          title="SammsConsult Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2185.5!2d-2.1327!3d57.1437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488458908c61a58d%3A0x5bbd2a0e8f3427c3!2sRubislaw%20Square%2C%20Off%20Queen's%20Road%2C%20Aberdeen%20AB15%204DG%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
