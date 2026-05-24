"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, ShieldCheck } from "lucide-react";
import { Certificate } from "./CertificationsData";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onClick: (cert: Certificate) => void;
}

export default function CertificateCard({ certificate, index, onClick }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => onClick(certificate)}
      className="group relative flex flex-col p-6 rounded-2xl glass border border-white/10 hover:border-white/20 transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl ${certificate.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Image Container with 3D-ish rotation effect */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#07070e] perspective-[1000px]">
        <motion.div 
          className="w-full h-full relative origin-bottom"
          whileHover={{ rotateX: 2, scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 size={20} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {certificate.organization.map(org => (
              <span key={org} className="text-[10px] font-bold tracking-widest uppercase text-white/50 font-[var(--font-inter)]">
                {org}
              </span>
            ))}
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 font-[var(--font-inter)]">
            {certificate.date}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white font-[var(--font-poppins)] leading-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
          {certificate.title}
        </h3>

        <p className="text-sm text-[#9ca3af] font-[var(--font-inter)] leading-relaxed mb-6 line-clamp-3">
          {certificate.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex flex-wrap items-center justify-between pt-4 border-t border-white/5 gap-2">
          <div className="flex items-center gap-1.5">
            <certificate.icon size={16} className={`text-transparent bg-clip-text bg-gradient-to-br ${certificate.color}`} />
            <span className={`text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-br ${certificate.color}`}>
              {certificate.skills[0]}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wide">Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
