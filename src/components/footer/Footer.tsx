"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abhinashjangapally40/", icon: FaLinkedin, color: "text-[#0A66C2] group-hover:text-[#0A66C2]", bg: "group-hover:bg-[#0A66C2]/10", border: "group-hover:border-[#0A66C2]/50" },
    { name: "GitHub", href: "https://github.com/abhinash-tech", icon: SiGithub, color: "text-white group-hover:text-white", bg: "group-hover:bg-white/10", border: "group-hover:border-white/50" },
    { name: "Instagram", href: "https://www.instagram.com/abhinash.stark/", icon: FaInstagram, color: "text-[#E1306C] group-hover:text-[#E1306C]", bg: "group-hover:bg-[#E1306C]/10", border: "group-hover:border-[#E1306C]/50" },
    { name: "Email", href: "mailto:abhinashjangapally@gmail.com", icon: Mail, color: "text-[#EA4335] group-hover:text-[#EA4335]", bg: "group-hover:bg-[#EA4335]/10", border: "group-hover:border-[#EA4335]/50" },
  ];

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#07070e] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Brand & Copyright */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-black text-white font-[var(--font-poppins)] tracking-tight mb-4">
              Abhinash<span className="text-indigo-400">.</span>
            </h2>
            <p className="text-sm text-[#9ca3af] font-[var(--font-inter)] leading-relaxed max-w-xs mb-6">
              Building intelligent, scalable, and impactful digital solutions through clean code and modern AI architecture.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open for collaborations
            </div>
          </div>



          {/* Social Links & Back to Top */}
          <div className="col-span-1 md:col-span-6 flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-sm font-semibold text-white font-[var(--font-poppins)] mb-6">Connect</h3>
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center transition-all duration-300 group ${social.color} ${social.bg} ${social.border}`}
                  aria-label={social.name}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest font-[var(--font-inter)]"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                <ArrowUp size={14} />
              </div>
            </motion.button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6b7280] font-[var(--font-inter)]">
          <p>© {new Date().getFullYear()} Abhinash Jangapally. All rights reserved.</p>
          <p className="flex items-center gap-1">Designed with <Heart size={12} className="text-rose-500 fill-rose-500" /> and creativity.</p>
        </div>
      </div>
    </footer>
  );
}
