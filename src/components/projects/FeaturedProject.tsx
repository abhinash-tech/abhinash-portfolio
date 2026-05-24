"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import BrowserMockup from "./BrowserMockup";

const TECH_STACK = ["HTML5", "CSS3", "Vanilla JS", "Python", "Formspree", "LocalStorage API"];
const FEATURES = [
  "Digital Marketing & SEO",
  "Social Media Management",
  "Website Development",
  "Automated Page Generation",
  "Smart Booking System",
  "Moodle LMS Administration"
];

export default function FeaturedProject() {
  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Top row: 8/4 split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Mockup - 8 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-8 h-full"
        >
          <BrowserMockup 
            imageSrc="/projects/olvian-hero.png" 
            alt="Olvian.co Platform" 
            url="olvian-co.netlify.app"
          />
        </motion.div>

        {/* Project Info - 4 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-4 p-8 rounded-2xl glass border border-white/10 flex flex-col relative overflow-hidden group"
        >
          {/* Background glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-colors duration-500 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-rose-400">
              <Rocket size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-rose-400 font-[var(--font-inter)] mb-0.5">
                Featured Project
              </p>
              <h3 className="text-xl font-bold text-white font-[var(--font-poppins)] leading-tight">
                Olvian.co
              </h3>
            </div>
          </div>

          <p className="text-sm text-[#9ca3af] font-[var(--font-inter)] leading-relaxed mb-6 relative z-10">
            A modern digital growth agency platform engineered to help brands scale through strategic marketing, creative services, and technology-driven solutions. Built with a performance-first architecture without heavy frontend frameworks.
          </p>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto relative z-10 pt-6 border-t border-white/5">
            <a 
              href="https://olvian-co.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a 
              href="https://github.com/abhinash-tech/Olvian-co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors duration-300"
              aria-label="View Source on GitHub"
            >
              <SiGithub size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom row: 4/4/4 split */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        
        {/* Tech Stack - 4 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 p-8 rounded-2xl glass border border-white/10 flex flex-col group hover:border-indigo-500/30 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-6">
            <Code2 size={18} className="text-indigo-400" />
            <h4 className="text-sm font-semibold text-[#e8eaf0] font-[var(--font-poppins)]">Technologies</h4>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {TECH_STACK.map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-[#9ca3af] font-medium font-[var(--font-inter)] group-hover:border-indigo-500/30 group-hover:text-indigo-200 transition-colors duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features - 4 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-4 p-8 rounded-2xl glass border border-white/10 flex flex-col group hover:border-emerald-500/30 transition-colors duration-300"
        >
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <h4 className="text-sm font-semibold text-[#e8eaf0] font-[var(--font-poppins)]">Core Features</h4>
          </div>
          <ul className="flex flex-col gap-3 mt-auto">
            {FEATURES.map(feature => (
              <li key={feature} className="flex items-start gap-2.5 text-xs text-[#9ca3af] font-[var(--font-inter)] group-hover:text-[#c7d2fe] transition-colors duration-300">
                <CheckCircle2 size={14} className="text-emerald-500/50 group-hover:text-emerald-400 mt-0.5 shrink-0 transition-colors duration-300" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Performance / Secondary Image - 4 cols */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-4 rounded-2xl glass border border-white/10 overflow-hidden relative group p-2 hover:border-amber-500/30 transition-colors duration-300"
        >
           <BrowserMockup 
             imageSrc="/projects/olvian-about.png" 
             alt="Olvian About Section" 
             url="olvian-co.netlify.app"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#07070eb0] via-transparent to-transparent pointer-events-none" />
           
           {/* Floating stats card overlay */}
           <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl glass border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <TrendingUp size={16} className="text-amber-400" />
               <span className="text-sm font-bold text-white font-[var(--font-poppins)]">Performance First</span>
             </div>
             <p className="text-[10px] text-white/70 font-[var(--font-inter)] leading-relaxed">
               Lightweight Vanilla JS architecture delivering maximum speed and conversion rates.
             </p>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
