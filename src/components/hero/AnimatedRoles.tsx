"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["Software Developer", "AI Enthusiast", "ML Engineer"];

export default function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-sm sm:text-base font-medium text-[#6b7280] font-[var(--font-inter)] tracking-wide">
        /&gt;
      </span>
      <div className="relative h-7 sm:h-8 flex items-center overflow-hidden min-w-[200px] sm:min-w-[240px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute text-base sm:text-lg font-semibold gradient-text font-[var(--font-poppins)] tracking-tight whitespace-nowrap"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Blinking cursor */}
      <motion.span
        className="text-lg text-[#6366f1] font-light select-none"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      >
        |
      </motion.span>
    </div>
  );
}
