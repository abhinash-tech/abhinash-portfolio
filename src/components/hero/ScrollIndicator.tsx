"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
      }}
      aria-label="Scroll down to explore"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }
      }}
      id="hero-scroll-indicator"
    >
      {/* Scroll line */}
      <motion.div
        className="w-px h-10 bg-gradient-to-b from-transparent via-indigo-500/60 to-transparent"
        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Label */}
      <span className="text-[10px] font-[var(--font-inter)] text-[#4b5563] tracking-[0.2em] uppercase group-hover:text-[#6b7280] transition-colors duration-300 select-none">
        Explore
      </span>

      {/* Animated chevron */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown
          size={16}
          className="text-[#4b5563] group-hover:text-indigo-400 transition-colors duration-300"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
