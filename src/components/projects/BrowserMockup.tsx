"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrowserMockupProps {
  imageSrc: string;
  alt: string;
  url?: string;
}

export default function BrowserMockup({ imageSrc, alt, url = "olvian-co.netlify.app" }: BrowserMockupProps) {
  return (
    <motion.div 
      className="relative w-full rounded-2xl overflow-hidden glass border border-white/10 group shadow-2xl shadow-indigo-500/5"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Browser Chrome */}
      <div className="h-10 w-full bg-[#0a0a14] border-b border-white/5 flex items-center px-4 relative">
        <div className="flex gap-2 z-10">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
        </div>
        {/* Address Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 h-6 w-1/3 min-w-[150px] bg-white/[0.03] border border-white/5 rounded-md flex items-center justify-center text-[10px] text-white/40 font-[var(--font-inter)] tracking-wider">
          <span className="truncate px-2">{url}</span>
        </div>
      </div>
      
      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#07070e]">
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
        
        <Image 
          src={imageSrc} 
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
          priority
        />
        
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070e] via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
      </div>
    </motion.div>
  );
}
