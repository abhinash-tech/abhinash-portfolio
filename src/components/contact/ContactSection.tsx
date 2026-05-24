"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import LocationMap from "./LocationMap";
import SocialCard from "./SocialCard";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    {
      name: "LinkedIn",
      handle: "@abhinashjangapally40",
      href: "https://www.linkedin.com/in/abhinashjangapally40/",
      icon: FaLinkedin,
      color: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
      iconColor: "text-[#0A66C2]",
    },
    {
      name: "GitHub",
      handle: "@abhinash-tech",
      href: "https://github.com/abhinash-tech",
      icon: SiGithub,
      color: "hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
      iconColor: "text-white",
    },
    {
      name: "Instagram",
      handle: "@abhinash.stark",
      href: "https://www.instagram.com/abhinash.stark/",
      icon: FaInstagram,
      color: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]",
      iconColor: "text-[#E1306C]",
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#07070e]"
      aria-label="Contact Section"
    >
      <div className="absolute inset-0 noise mix-blend-overlay pointer-events-none" />

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
              Let's Connect
            </span>
            <div className="w-8 h-px bg-indigo-500/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-[var(--font-poppins)] text-[#e8eaf0] tracking-tight mb-4"
          >
            Get in <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#9ca3af] font-[var(--font-inter)] max-w-2xl"
          >
            Looking to start a new project, need an AI integration, or just want to say hi? I'm currently open for collaborations and internships.
          </motion.p>
        </div>

        {/* Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Map & Socials */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <LocationMap />
            </motion.div>

            <div className="flex flex-col gap-4">
              {socials.map((social, index) => (
                <SocialCard 
                  key={social.name}
                  {...social}
                  delay={0.4 + (index * 0.1)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col"
          >
            <ContactForm />
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
