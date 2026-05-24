"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillsOrbit from "./SkillsOrbit";
import SkillsGrid from "./SkillsGrid";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-[#07070e] to-[#0a0a14]"
      aria-label="Skills & Technologies"
    >
      <div className="absolute inset-0 noise mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-indigo-500/60" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 font-[var(--font-inter)]">
              Technical Arsenal
            </span>
            <div className="w-8 h-px bg-indigo-500/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-[var(--font-poppins)] text-[#e8eaf0] tracking-tight mb-4"
          >
            Skills & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#9ca3af] font-[var(--font-inter)] max-w-2xl"
          >
            The tools, languages, and frameworks I use to build scalable applications, 
            intelligent models, and modern digital experiences.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full"
        >
          {/* Desktop Orbit Layout */}
          <div className="hidden lg:flex justify-center items-center w-full min-h-[800px] overflow-visible">
            <SkillsOrbit />
          </div>

          {/* Mobile/Tablet Grid Layout */}
          <div className="lg:hidden">
            <SkillsGrid />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
