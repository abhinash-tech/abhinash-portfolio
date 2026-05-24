"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { Certificate } from "./CertificationsData";
import { useEffect } from "react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#07070e]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-full flex flex-col glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 z-10"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-white/[0.02] gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${certificate.color} p-[1px] shrink-0`}>
                  <div className="w-full h-full bg-[#0d0d1a] rounded-[11px] flex items-center justify-center">
                    <certificate.icon size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-white font-[var(--font-poppins)] leading-tight">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs text-[#9ca3af] font-[var(--font-inter)] mt-1">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>Verified Credential</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                    <span>{certificate.date}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#9ca3af] hover:text-white transition-colors duration-300 absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full flex-1 overflow-auto bg-[#07070e] p-4 sm:p-8 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#9ca3af] font-medium font-[var(--font-inter)]">
                    {skill}
                  </span>
                ))}
              </div>
              
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-300"
                >
                  View Original <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
