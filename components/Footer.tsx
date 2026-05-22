"use client";

import { motion } from "framer-motion";

const bottomNavLinks = [
  { label: "Engineering Consulting", href: "#services" },
  { label: "Project Mgt Consultancy", href: "#consulting" },
  { label: "Functions", href: "#services" },
  { label: "Insights", href: "#about" },
  { label: "Clients", href: "#about" },
  { label: "Supplies and Solutions", href: "#services" },
  { label: "Privacy Policy", href: "#" },
];

const colLinks: Record<string, string[]> = {
  Services: [
    "Reliability Engineering",
    "Asset Integrity",
    "Project Management",
    "Risk Management",
    "Engineering Consultancy",
    "Supplies & Solutions",
  ],
  Company: ["About Us", "Our Story", "Our Team", "Careers", "Contact Us"],
  Insights: ["News & Updates", "Case Studies", "Industry Reports", "Functions"],
};

export default function Footer() {
  const handleClick = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      {/* ── Upper footer ── */}
      <div
        className="px-6 lg:px-10 pt-14 pb-12"
        style={{ background: "#0d1b3e" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <span
              className="text-white text-4xl mb-5 block"
              style={{ fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif" }}
            >
              SammsConsult
            </span>
            <p
              className="text-xs leading-relaxed font-light mb-6"
              style={{ color: "rgba(255,255,255,0.5)", lineHeight: "2" }}
            >
              Engineering Solutions for a Better Future. Independent specialised
              engineering consultancy delivering excellence worldwide since 2011.
            </p>
            <div className="flex gap-3">
              {["in", "tw", "fb"].map((s) => (
                <motion.button
                  key={s}
                  whileHover={{ scale: 1.12, borderColor: "#c9a84c", color: "#c9a84c" }}
                  className="w-8 h-8 border text-xs flex items-center justify-center transition-all duration-300 cursor-pointer text-white uppercase"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(colLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                className="text-xs tracking-[0.28em] uppercase mb-5 font-medium"
                style={{ color: "#c9a84c" }}
              >
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: "#c9a84c" }}
                      className="text-xs font-light transition-colors duration-200 cursor-pointer"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gold divider — full width ── */}
      <div style={{ background: "#0d1b3e" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.25)" }} />
        </div>
      </div>

      {/* ── Bottom strip — full bleed dark background ── */}
      <div
        className="w-full px-6 lg:px-10 py-6"
        style={{ background: "#080f22" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          {/* Copyright */}
          <p
            className="text-xs font-light text-center"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Copyright &copy; {new Date().getFullYear()} <span style={{ fontFamily: "'Great Vibes', var(--font-great-vibes), Georgia, serif", fontSize: "1.3em" }}>Sammsconsult</span> &mdash; All Rights Reserved.
          </p>

          {/* Nav links row */}
          <div className="flex flex-wrap justify-center items-center gap-y-2">
            {bottomNavLinks.map((link, i) => (
              <span key={link.label} className="flex items-center">
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  whileHover={{ color: "#c9a84c" }}
                  className="text-xs font-light cursor-pointer transition-colors duration-200 px-2 py-1"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {link.label}
                </motion.a>
                {i < bottomNavLinks.length - 1 && (
                  <span
                    className="text-xs select-none"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  >
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
