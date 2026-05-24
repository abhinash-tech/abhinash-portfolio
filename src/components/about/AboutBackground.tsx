"use client";

import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-right blob */}
      <motion.div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.02) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-left blob */}
      <motion.div
        className="absolute bottom-0 -left-32 w-[450px] h-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Center subtle blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      {/* Horizontal separator line glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(167,139,250,0.2), transparent)",
        }}
      />
    </div>
  );
}
