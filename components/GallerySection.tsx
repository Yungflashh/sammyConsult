"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=200&auto=format&fit=crop",
    caption: "Strategic Planning",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&auto=format&fit=crop",
    caption: "Collaborative Solutions",
  },

  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&auto=format&fit=crop",
    caption: "Innovative Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=200&auto=format&fit=crop",
    caption: "Engineering Excellence",
  },
  {
    src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=200&auto=format&fit=crop",
    caption: "Project Delivery",
  },
];

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const go = (index: number, dir?: number) => {
    setDirection(dir ?? (index > active ? 1 : -1));
    setActive(index);
    setAutoplay(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const prev = () => go((active - 1 + galleryImages.length) % galleryImages.length, -1);
  const next = () => go((active + 1) % galleryImages.length, 1);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoplay, active]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 px-6 lg:px-10"
      style={{ background: "#0d1b3e" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.35em] uppercase mb-3 font-medium" style={{ color: "#c9a84c" }}>
            Our Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Designing Solutions with{" "}
            <span style={{ fontStyle: "italic", color: "#c9a84c" }}>
              Precision and Creativity
            </span>
          </h2>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden mb-4"
          style={{ aspectRatio: "16/7" }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            <motion.img
              key={active}
              src={galleryImages[active].src}
              alt={galleryImages[active].caption}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dim overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(13,27,62,0.25)" }}
          />

          {/* Counter */}
          <div
            className="absolute bottom-4 right-4 text-white text-sm font-light px-3 py-1"
            style={{ background: "rgba(13,27,62,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {active + 1}/{galleryImages.length}
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-4 left-6 text-white text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {galleryImages[active].caption}
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(13,27,62,0.6)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "white",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(13,27,62,0.6)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "white",
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <motion.div
              key={`bar-${active}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: autoplay ? 1 : 0 }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full origin-left"
              style={{ background: "#c9a84c" }}
            />
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-6 gap-2"
        >
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={img.thumb}
                alt={img.caption}
                className="w-full h-full object-cover transition-all duration-300"
                style={{ filter: active === i ? "none" : "brightness(0.45)" }}
              />
              {active === i && (
                <motion.div
                  layoutId="thumb-border"
                  className="absolute inset-0"
                  style={{ border: "2px solid #c9a84c" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
