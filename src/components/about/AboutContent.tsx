"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INTERESTS = [
  { label: "AI Research", icon: "🔬" },
  { label: "Cricket", icon: "🏏" },
  { label: "Tech Blogs", icon: "📰" },
  { label: "Movies", icon: "🎬" },
];

const TRAITS = [
  { label: "Consistency", icon: "🔁" },
  { label: "Creativity", icon: "💡" },
  { label: "Impact-driven", icon: "🎯" },
];

const ABOUT_PARAGRAPHS = [
  "I'm a passionate Computer Science student and aspiring ML Engineer focused on building intelligent, scalable, and impactful digital solutions. My journey in technology started with curiosity and evolved into a deep interest in software development, artificial intelligence, and user-centric product design.",
  "I enjoy transforming ideas into modern applications that combine clean architecture, smooth user experiences, and practical problem-solving. From exploring Machine Learning concepts to developing responsive web interfaces, I continuously challenge myself to learn, build, and improve.",
  "Currently, I'm actively learning AI/ML, participating in hackathons, and seeking opportunities where I can contribute, collaborate, and grow as a developer. I believe in consistency, creativity, and building technology that creates meaningful impact.",
];

export default function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-8">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <div className="w-8 h-px bg-indigo-500/60" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 font-[var(--font-inter)]">
          About Me
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[var(--font-poppins)] leading-[1.15] tracking-tight">
          <span className="text-[#e8eaf0]">Turning ideas into</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            meaningful code
          </span>
        </h2>
      </motion.div>

      {/* Paragraphs */}
      <div className="flex flex-col gap-4">
        {ABOUT_PARAGRAPHS.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#6b7280] font-[var(--font-inter)] leading-[1.85] max-w-xl"
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-indigo-500/30 via-violet-500/20 to-transparent origin-left"
      />

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        className="flex flex-col gap-3"
      >
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4b5563] font-[var(--font-inter)]">
          Core Values
        </p>
        <div className="flex flex-wrap gap-2">
          {TRAITS.map((t, i) => (
            <motion.span
              key={t.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.07, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 hover:border-indigo-500/30 text-xs font-medium text-[#9ca3af] hover:text-[#c7d2fe] font-[var(--font-inter)] transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.06 }}
            >
              <span>{t.icon}</span>
              {t.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
        className="flex flex-col gap-3"
      >
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4b5563] font-[var(--font-inter)]">
          Interests
        </p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((item, i) => (
            <motion.span
              key={item.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.07, ease: "easeOut" }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 hover:border-emerald-500/25 text-xs font-medium text-[#6b7280] hover:text-[#9ca3af] font-[var(--font-inter)] transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.06 }}
            >
              <span>{item.icon}</span>
              {item.label}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
