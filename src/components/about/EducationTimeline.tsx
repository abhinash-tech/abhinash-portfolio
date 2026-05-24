"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const EDUCATION = [
  {
    id: "nxtwave",
    institution: "NxtWave",
    degree: "CCBP Academy - Smart",
    period: "2024 – Present",
    location: "Online",
    current: true,
    description:
      "Learn like top IITians and achieve high-paid software jobs.",
    highlights: ["DSA", "Web Dev", "AI/ML", "Full Stack"],
    icon: "/education/nxtwave.png",
    isImage: true,
  },
  {
    id: "uni",
    institution: "Anurag University",
    degree: "BTech in Computer Science Engineering",
    period: "2024 – Present",
    location: "Hyderabad, India",
    current: true,
    description:
      "Focused on algorithms, data structures, and core programming fundamentals.",
    highlights: ["Python", "C", "Java", "OOPs"],
    icon: "/education/anurag.jpg",
    isImage: true,
  },
  {
    id: "jr",
    institution: "TS Model Jr College Husnabad",
    degree: "Science (MPC)",
    period: "2022 – 2024",
    location: "Husnabad, Telangana",
    current: false,
    description:
      "Completed intermediate education with a strong foundation in Mathematics, Physics and Chemistry.",
    highlights: ["Mathematics", "Physics", "Chemistry"],
    icon: "📚",
  },
  {
    id: "school",
    institution: "TS Model School Husnabad",
    degree: "SSC (Secondary School Certificate)",
    period: "2021 – 2022",
    location: "Husnabad, Telangana",
    current: false,
    description:
      "Completed schooling with distinction, developing early interest in technology.",
    highlights: ["Distinction", "Science", "Mathematics"],
    icon: "🏫",
  },
];

export default function EducationTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <GraduationCap size={16} className="text-indigo-400" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-[#6b7280] font-[var(--font-inter)] tracking-[0.12em] uppercase">
          Education
        </h3>
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />

        {/* Animated fill line */}
        <motion.div
          className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          style={{ height: "100%" }}
        />

        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 flex items-center justify-center z-10 bg-[#07070e] rounded-full">
                <motion.div
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center text-base
                    ${edu.current
                      ? "bg-indigo-500/20 border-2 border-indigo-500/60"
                      : "bg-white/5 border border-white/10"
                    }`}
                  animate={
                    edu.current
                      ? { boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 16px rgba(99,102,241,0.4)", "0 0 0px rgba(99,102,241,0)"] }
                      : {}
                  }
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {edu.isImage ? (
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                      <Image src={edu.icon} alt={edu.institution} fill className="object-cover bg-[#07070e]" />
                    </div>
                  ) : (
                    <span>{edu.icon}</span>
                  )}
                  {edu.current && (
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#07070e]">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                className="glass border border-white/8 rounded-2xl p-5 group hover:border-indigo-500/25 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.005 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="font-semibold text-[#e8eaf0] font-[var(--font-poppins)] text-sm sm:text-base leading-tight group-hover:text-indigo-200 transition-colors duration-300">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9ca3af] font-[var(--font-inter)] mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  {edu.current && (
                    <span className="shrink-0 text-[10px] font-semibold font-[var(--font-inter)] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 tracking-wide">
                      Current
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-[#6b7280] font-[var(--font-inter)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} aria-hidden="true" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6b7280] font-[var(--font-inter)] leading-relaxed mb-3">
                  {edu.description}
                </p>

                {/* Highlights */}
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
        </div>
      </div>
    </div>
  );
}
