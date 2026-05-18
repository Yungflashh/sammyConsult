"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Engineering Consulting", href: "/engineering-consulting" },
  { label: "Project Mgt Consultancy", href: "/project-mgt" },
  { label: "Functions", href: "/functions" },
  { label: "Insights", href: "/insights" },
  { label: "Clients", href: "/clients" },
  { label: "Supplies and Solutions", href: "/supplies-solutions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }
    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }
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
          background: scrolled ? "rgba(13,27,62,0.97)" : "#0d1b3e",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.35)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Row 1 — Logo */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-4 pb-2 flex items-center justify-between">
          <motion.a
            href={pathname === "/" ? "#home" : "/"}
            onClick={(e) => { e.preventDefault(); handleLinkClick("#home"); }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer leading-none"
          >
            <span
              className="select-none"
              style={{
                fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif, system-ui",
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "52px",
                lineHeight: "60px",
                display: "block",
              }}
            >
              SammsConsult
            </span>
          </motion.a>

          {/* Hamburger — mobile only */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-white" />
          </motion.button>
        </div>

        {/* Row 2 — Nav links (desktop only) */}
        <div
          className="hidden md:block border-t mx-6 lg:mx-10"
          style={{ borderColor: "rgba(201,168,76,0.25)" }}
        >
          <nav className="max-w-7xl mx-auto flex items-center justify-between py-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className="relative group cursor-pointer px-1"
                whileHover={{ y: -1 }}
              >
                <span className="text-white/75 hover:text-[#c9a84c] text-[11px] font-normal tracking-[0.12em] uppercase transition-colors duration-300 whitespace-nowrap">
                  {link.label}
                </span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
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
                style={{
                  fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif, system-ui",
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "rgb(255, 255, 255)",
                  fontSize: "46px",
                  lineHeight: "56px",
                }}
              >
                SammsConsult
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

            <nav className="flex flex-col justify-center flex-1 px-10 gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  className="text-white text-2xl font-light tracking-wide hover:text-[#c9a84c] transition-colors duration-300 border-b border-white/10 pb-4 cursor-pointer"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
