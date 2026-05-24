"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATUS_CARDS = [
  {
    id: "internship",
    icon: "💼",
    title: "Open for Internships",
    description: "Actively seeking internship opportunities in Software & AI/ML domains.",
    color: "from-indigo-500/10 to-violet-500/5",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(99,102,241,0.12)]",
    badge: "Available",
    badgeStyle: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    dot: "bg-indigo-400",
  },
  {
    id: "aiml",
    icon: "🤖",
    title: "Learning AI / ML",
    description: "Exploring neural networks, NLP, and MLOps through projects and research.",
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20 hover:border-violet-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]",
    badge: "In Progress",
    badgeStyle: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    dot: "bg-violet-400",
  },
  {
    id: "hackathon",
    icon: "🏆",
    title: "Hackathon Participant",
    description: "Competing in national and international hackathons to sharpen skills.",
    color: "from-amber-500/10 to-orange-500/5",
    border: "border-amber-500/20 hover:border-amber-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(245,158,11,0.12)]",
    badge: "Active",
    badgeStyle: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    dot: "bg-amber-400",
  },
  {
    id: "solver",
    icon: "🧩",
    title: "Problem Solver",
    description: "Enjoys breaking complex problems into elegant, scalable solutions.",
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]",
    badge: "Trait",
    badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    id: "learner",
    icon: "⚡",
    title: "Fast Learner",
    description: "Quickly adapts to new technologies, frameworks, and development paradigms.",
    color: "from-sky-500/10 to-blue-500/5",
    border: "border-sky-500/20 hover:border-sky-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(14,165,233,0.12)]",
    badge: "Trait",
    badgeStyle: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    dot: "bg-sky-400",
  },
  {
    id: "creative",
    icon: "🎨",
    title: "Creative Thinker",
    description: "Combines technical rigor with creative thinking to design user-first products.",
    color: "from-rose-500/10 to-pink-500/5",
    border: "border-rose-500/20 hover:border-rose-500/40",
    glow: "hover:shadow-[0_0_24px_rgba(244,63,94,0.12)]",
    badge: "Trait",
    badgeStyle: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    dot: "bg-rose-400",
  },
];

export default function StatusCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {STATUS_CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          >
            <motion.div
              className={`relative h-full p-4 sm:p-5 rounded-2xl glass border bg-gradient-to-br ${card.color} ${card.border} ${card.glow} transition-all duration-300 group cursor-default overflow-hidden`}
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Subtle corner highlight */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-xl leading-none"
                    role="img"
                    aria-label={card.title}
                  >
                    {card.icon}
                  </span>
                  <h4 className="text-sm font-semibold text-[#e8eaf0] font-[var(--font-poppins)] leading-tight">
                    {card.title}
                  </h4>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-semibold font-[var(--font-inter)] px-2 py-0.5 rounded-full border ${card.badgeStyle}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${card.dot} animate-pulse`} />
                  {card.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#6b7280] font-[var(--font-inter)] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
