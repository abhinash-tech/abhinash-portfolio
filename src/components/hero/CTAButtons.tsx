"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4">
      {/* Primary: View Projects */}
      <motion.a
        href="#projects"
        className="group relative inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white font-[var(--font-poppins)] overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a78bfa 100%)",
          boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 6px 32px rgba(99,102,241,0.5)",
        }}
        whileTap={{ scale: 0.97 }}
        id="hero-view-projects-btn"
        aria-label="View my projects"
      >
        {/* Shimmer overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative z-10">View Projects</span>
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </motion.a>

      {/* Secondary: Download Resume */}
      <motion.a
        href="/resume.pdf"
        download
        className="group inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base font-[var(--font-poppins)] glass glass-hover border border-white/10 hover:border-indigo-500/40 text-[#c7d2fe] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        id="hero-download-resume-btn"
        aria-label="Download resume"
      >
        <Download
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
        Download Resume
      </motion.a>

      {/* Secondary: Let's Connect */}
      <motion.a
        href="#contact"
        className="group inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base font-[var(--font-poppins)] glass glass-hover border border-white/10 hover:border-emerald-500/40 text-[#6ee7b7] hover:text-emerald-300 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        id="hero-connect-btn"
        aria-label="Let's connect"
      >
        <Mail
          size={16}
          className="transition-transform duration-300 group-hover:rotate-6"
          aria-hidden="true"
        />
        Let&apos;s Connect
      </motion.a>
    </div>
  );
}
