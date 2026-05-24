"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <div className="relative w-full rounded-2xl glass border border-white/10 overflow-hidden group">
      
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-[#07070e]/80 to-transparent z-10 pointer-events-none flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
            <MapPin size={16} className="text-indigo-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-white font-[var(--font-poppins)]">Hyderabad</p>
            <p className="text-[10px] font-medium text-[#9ca3af] font-[var(--font-inter)] tracking-wider uppercase">Telangana, India</p>
          </div>
        </div>
        
        {/* Pulsing Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07070e]/60 backdrop-blur-md border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] text-[#9ca3af] font-medium uppercase tracking-widest">Base</span>
        </div>
      </div>

      {/* Embedded Map */}
      {/* We use a stylized Google Maps embed. The filter applies a dark theme effect. */}
      <div className="w-full h-[200px] sm:h-[250px] relative overflow-hidden bg-[#0d0d1a]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.305206344915!2d78.4080455!3d17.436156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale-[80%] invert-[90%] hue-rotate-[180deg] opacity-70 group-hover:opacity-100 group-hover:grayscale-[50%] transition-all duration-700 pointer-events-none"
        />
        {/* Tint overlay to match theme */}
        <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay pointer-events-none" />
      </div>

    </div>
  );
}
