"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { label: "React", emoji: "⚛️" },
  { label: "Next.js", emoji: "▲" },
  { label: "TypeScript", emoji: "🔷" },
  { label: "Python", emoji: "🐍" },
  { label: "ML / AI", emoji: "🤖" },
  { label: "Node.js", emoji: "🟢" },
  { label: "TensorFlow", emoji: "🧠" },
];

export default function TechBadges() {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-2.5"
      aria-label="Technology stack"
    >
      {TECH_STACK.map((tech, i) => (
        <motion.span
          key={tech.label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-[var(--font-inter)] glass border border-white/10 text-[#9ca3af] hover:text-[#c7d2fe] hover:border-indigo-500/30 transition-all duration-300 cursor-default select-none"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{
            opacity: 1,
            y: [null, i % 2 === 0 ? -4 : -6, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.8 + i * 0.07, ease: "easeOut" },
            scale: { duration: 0.5, delay: 0.8 + i * 0.07, ease: "easeOut" },
            y: {
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
              repeatType: "mirror",
            },
          }}
          whileHover={{ scale: 1.08, y: -4 }}
          aria-label={tech.label}
        >
          <span aria-hidden="true">{tech.emoji}</span>
          {tech.label}
        </motion.span>
      ))}
    </div>
  );
}
