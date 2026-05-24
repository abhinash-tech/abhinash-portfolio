"use client";

import { motion } from "framer-motion";
import { SKILLS } from "./SkillData";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-8">
      {SKILLS.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl glass border border-white/8 hover:border-indigo-500/30 transition-all duration-300 group cursor-default"
        >
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] relative">
            <div className="absolute inset-0 rounded-xl bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300" />
            <skill.icon size={28} color={skill.color} className="relative z-10" />
          </div>
          <div className="text-center">
            <h4 className="text-[13px] font-semibold text-[#e8eaf0] font-[var(--font-poppins)] mb-1 leading-tight">
              {skill.name}
            </h4>
            <span className="text-[9px] text-[#6b7280] font-medium font-[var(--font-inter)] tracking-widest uppercase">
              {skill.category}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
