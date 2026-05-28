"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";
import EducationTimeline from "./EducationTimeline";
import StatusCards from "./StatusCards";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40"
      aria-label="About Abhinash Jangapally"
    >
      <AboutBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* ── TOP ROW: About text (left) + Status cards (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-start mb-20 lg:mb-28">

          {/* Left — About content */}
          <AboutContent />

          {/* Right — Status / trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:pt-2"
          >
            {/* Cards header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-emerald-500/60" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 font-[var(--font-inter)]">
                Status & Traits
              </span>
            </div>

            <StatusCards />

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="grid grid-cols-3 gap-3 mt-2"
            >
              {[
                { value: "3+", label: "Projects Built" },
                { value: "10+", label: "Hackathons" },
                { value: "∞", label: "Ideas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl glass border border-white/8 hover:border-indigo-500/20 transition-all duration-300 group"
                >
                  <span className="text-2xl font-black font-[var(--font-poppins)] bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent group-hover:from-violet-400 group-hover:to-purple-400 transition-all duration-500">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-[#4b5563] font-[var(--font-inter)] tracking-wide text-center leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── DIVIDER ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="h-px mb-20 lg:mb-28 origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(167,139,250,0.2), rgba(16,185,129,0.1), transparent)",
          }}
        />

        {/* ── BOTTOM ROW: Education timeline (full width, centered) ── */}
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-12"
          >
            {/* Label */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b5563] font-[var(--font-inter)] mb-2">
                  Academic Journey
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-poppins)] text-[#e8eaf0]">
                  Education{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Timeline
                  </span>
                </h2>
              </div>
              <p className="text-sm text-[#4b5563] font-[var(--font-inter)] max-w-sm sm:text-right">
                Building a strong academic foundation to support real-world impact.
              </p>
            </div>

            {/* Timeline — 4-column on large screens */}
            <div className="lg:grid lg:grid-cols-4 lg:gap-6 hidden">
              <TimelineHorizontal />
            </div>
            {/* Timeline — vertical on mobile/tablet */}
            <div className="lg:hidden">
              <EducationTimeline />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Horizontal card layout for large screens
function TimelineHorizontal() {
  const EDUCATION = [
    {
      id: "school",
      institution: "TS Model School",
      degree: "SSC",
      period: "2021 – 2022",
      icon: "🏫",
      description: "Completed schooling with distinction and developed early interest in technology.",
      highlights: ["Distinction", "Science"],
      current: false,
      step: "01",
    },
    {
      id: "jr",
      institution: "TS Model Jr College Husnabad",
      degree: "Science (MPC)",
      period: "2022 – 2024",
      icon: "📚",
      description: "Strong foundation in Mathematics, Physics, and Chemistry at intermediate level.",
      highlights: ["Mathematics", "Physics", "Chemistry"],
      current: false,
      step: "02",
    },
    {
      id: "uni",
      institution: "Anurag University",
      degree: "BTech – CSE",
      period: "2024 – Present",
      icon: "/education/anurag.jpg",
      isImage: true,
      description: "Pursuing Computer Science with focus on algorithms, data structures, and core programming fundamentals.",
      highlights: ["Python", "C", "Java", "OOPs"],
      current: true,
      step: "03",
    },
    {
      id: "nxtwave",
      institution: "NxtWave",
      degree: "Industry-Aligned Software Development & AI/ML Program",
      period: "2024 – Present",
      icon: "/education/nxtwave.png",
      isImage: true,
      description: "Hands-on learning • Real-world projects • Modern tech stack",
      highlights: ["DSA", "Web Dev", "AI/ML", "Full Stack"],
      current: true,
      step: "04",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {EDUCATION.map((edu, i) => (
        <motion.div
          key={edu.id}
          ref={i === 0 ? ref : undefined}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Connecting line to next card */}
          {i < EDUCATION.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 left-full w-6 h-[2px] -translate-y-1/2 bg-gradient-to-r from-indigo-500/40 via-violet-500/60 to-indigo-500/40 z-0" />
          )}

          <motion.div
            className={`h-full p-6 rounded-2xl glass border transition-all duration-300 group
              ${edu.current
                ? "border-indigo-500/30 hover:border-indigo-500/50"
                : "border-white/8 hover:border-white/15"
              }`}
            style={edu.current ? { boxShadow: "0 0 30px rgba(99,102,241,0.08)" } : {}}
            whileHover={{ y: -4, scale: 1.015 }}
            transition={{ duration: 0.25 }}
          >
            {/* Step + icon */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-3xl">
                {edu.isImage ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image src={edu.icon} alt={edu.institution} fill className="object-cover bg-[#07070e]" />
                  </div>
                ) : (
                  edu.icon
                )}
              </span>
              <div className="flex items-center gap-2">
                {edu.current && (
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-[var(--font-inter)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
                <span className="text-xs font-bold text-[#374151] font-[var(--font-poppins)]">
                  {edu.step}
                </span>
              </div>
            </div>

            {/* Content */}
            <h4 className="font-bold text-base text-[#e8eaf0] font-[var(--font-poppins)] mb-1 group-hover:text-indigo-200 transition-colors duration-300">
              {edu.institution}
            </h4>
            <p className="text-sm text-[#9ca3af] font-[var(--font-inter)] mb-1">{edu.degree}</p>
            <p className="text-xs text-[#4b5563] font-[var(--font-inter)] mb-4">{edu.period}</p>
            <p className="text-xs text-[#6b7280] font-[var(--font-inter)] leading-relaxed mb-4">
              {edu.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {edu.highlights.map((h) => (
                <span
                  key={h}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-[#9ca3af] font-[var(--font-inter)]"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
