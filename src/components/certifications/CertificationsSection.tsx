"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CERTIFICATES, Certificate } from "./CertificationsData";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#07070e]"
      aria-label="Certifications & Achievements"
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 noise mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-indigo-500/60" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 font-[var(--font-inter)]">
              Accolades
            </span>
            <div className="w-8 h-px bg-indigo-500/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-[var(--font-poppins)] text-[#e8eaf0] tracking-tight mb-4"
          >
            Certifications & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#9ca3af] font-[var(--font-inter)] max-w-2xl"
          >
            Professional recognitions, specialized training, and hackathon victories demonstrating continuous learning and expertise in cutting-edge AI technologies.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              index={index}
              onClick={setSelectedCert}
            />
          ))}
        </div>
        
      </div>

      <CertificateModal 
        certificate={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </section>
  );
}
