"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
    >
      {/* Subtle float loop */}
      <motion.div
        className="relative"
        animate={isMobile ? { y: 0 } : { y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent blur-2xl" />

        {/* Rotating dashed ring */}
        <motion.div
          className="absolute -inset-3 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.6) 30%, transparent 60%, rgba(167,139,250,0.4) 80%, transparent 100%)",
            borderRadius: "50%",
            padding: "2px",
          }}
          animate={isMobile ? { rotate: 0 } : { rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-[#07070e]" />
        </motion.div>

        {/* Static accent ring */}
        <div className="absolute -inset-[6px] rounded-full border border-indigo-500/20" />

        {/* Profile image container */}
        <motion.div
          className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[340px] xl:h-[340px] rounded-full overflow-hidden glow-indigo-strong"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Gradient background fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-[#0d0d1a] to-violet-900/30" />

          {/* Profile Image */}
          <Image
            src="/profile.jpg"
            alt="Abhinash Jangapally — Software Developer & ML Engineer"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 340px"
            onError={(e) => {
              // Fallback: hide broken image
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Overlay shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-emerald-500/20 z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-emerald-400 font-[var(--font-inter)] whitespace-nowrap">
            Open to opportunities
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
