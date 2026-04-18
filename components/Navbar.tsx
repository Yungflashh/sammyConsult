"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13,27,62,0.97)"
            : "#0d1b3e",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#home"); }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
          >
            <span
              className="text-white text-3xl md:text-4xl select-none"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Samms<span style={{ color: "#c9a84c" }}>Consult</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="text-white/80 hover:text-[#c9a84c] text-sm font-light tracking-widest uppercase transition-colors duration-300 cursor-pointer relative group"
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all duration-300 font-medium cursor-pointer"
            >
              Get in Touch
            </motion.a>
          </nav>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-white block" />
            <span className="w-5 h-[2px] bg-white block ml-auto" />
            <span className="w-6 h-[2px] bg-white block" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "#0d1b3e" }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span
                className="text-white text-3xl"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                Samms<span style={{ color: "#c9a84c" }}>Consult</span>
              </span>
              <motion.button
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white p-2 cursor-pointer"
              >
                <X size={24} />
              </motion.button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-10 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="text-white text-3xl font-light tracking-wide hover:text-[#c9a84c] transition-colors duration-300 border-b border-white/10 pb-4 cursor-pointer"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-10 pb-12">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-center py-4 border border-[#c9a84c] text-[#c9a84c] tracking-widest uppercase text-sm hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all duration-300 cursor-pointer"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
