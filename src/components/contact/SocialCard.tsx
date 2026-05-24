"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface SocialCardProps {
  name: string;
  href: string;
  icon: any;
  handle: string;
  color: string;
  iconColor?: string;
  delay?: number;
}

export default function SocialCard({ name, href, icon: Icon, handle, color, iconColor = "group-hover:text-white", delay = 0 }: SocialCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Magnetic hover effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 20); // Max move distance
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group flex items-center justify-between p-4 rounded-2xl glass border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden ${color}`}
    >
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-300" />
      <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full group-hover:before:animate-[shimmer_1.5s_infinite]" />

      <motion.div 
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="flex items-center gap-4 relative z-10"
      >
        <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 ${iconColor}`}>
          <Icon size={22} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white font-[var(--font-poppins)]">{name}</h4>
          <p className="text-xs text-[#9ca3af] font-[var(--font-inter)] group-hover:text-white/80 transition-colors duration-300">{handle}</p>
        </div>
      </motion.div>

      <motion.div 
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9ca3af] group-hover:bg-white/10 group-hover:text-white transition-all duration-300 group-hover:scale-110"
      >
        <ArrowUpRight size={14} />
      </motion.div>
    </motion.a>
  );
}
