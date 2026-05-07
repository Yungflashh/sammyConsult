"use client";

import { motion } from "framer-motion";

const consultingItems = [
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=700&auto=format&fit=crop",
    title: "Consulting and Advisory Services",
    description:
      "We offer consulting and advisory services to help clients optimize their engineering processes and operations. Our experts provide valuable insights and recommendations to enhance productivity and reduce costs.",
    reverse: false,
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=700&auto=format&fit=crop",
    title: "Project Management Consultancy",
    description:
      "From feasibility through to completion, our project management consultancy delivers structured, disciplined oversight across complex engineering programmes — on time and within budget.",
    reverse: true,
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop",
    title: "Engineering & Technology Solutions",
    description:
      "We combine engineering rigour with modern technology to design, implement, and support solutions that drive operational excellence and long-term value for our global clients.",
    reverse: false,
  },
  {
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=700&auto=format&fit=crop",
    title: "Circular Economy",
    description:
      "We support governments to move from circular economy policy to implementation at scale. Our frameworks align national priorities with continental strategies such as the African Union circular economy agenda. We enable ministries to integrate circular economy into industrial policy, climate strategy, and job creation programmes.",
    reverse: true,
  },
  {
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=700&auto=format&fit=crop",
    title: "Governance",
    description:
      "As a governance specialist, we combine UK public-sector rigour with international development expertise, delivering reforms that meet both local context needs and global expectations.",
    reverse: false,
  },
  {
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=700&auto=format&fit=crop",
    title: "Risk Management",
    description:
      "We help governments, industries and individuals anticipate, quantify, and manage risks before they become crises. Risk management is not a control function — it is a core driver of economic stability and investor confidence. We transform fragmented risk practices into integrated national risk management systems, turning uncertainty into structured, decision-ready intelligence. We de-risk government projects to unlock private capital and accelerate PPP delivery, helping governments present credible, risk-adjusted investment cases to global investors.",
    reverse: true,
  },
];

export default function ConsultingSection() {
  return (
    <section id="consulting" className="py-24 px-6 lg:px-10" style={{ background: "#0d1b3e" }}>
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
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs tracking-[0.35em] uppercase mb-3 font-medium"
            style={{ color: "#c9a84c" }}
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What We <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Offer</span>
          </motion.h2>
        </div>

        {/* Items */}
        <div className="space-y-16">
          {consultingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="md:w-2/5 w-full overflow-hidden flex-shrink-0"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  className="w-full object-cover"
                  style={{ height: "260px" }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="md:w-3/5 w-full"
              >
                <div className="h-px w-10 mb-5" style={{ background: "#c9a84c" }} />
                <h3
                  className="text-2xl md:text-3xl font-light text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.82)", lineHeight: "1.95" }}
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
