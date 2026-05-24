"use client";

import { motion, type Transition } from "framer-motion";
import BackgroundEffects from "./BackgroundEffects";
import AnimatedRoles from "./AnimatedRoles";
import ProfileImage from "./ProfileImage";
import CTAButtons from "./CTAButtons";
import SocialLinks from "./SocialLinks";
import TechBadges from "./TechBadges";
import ScrollIndicator from "./ScrollIndicator";
import GradientText from "@/components/ui/GradientText";

const TRANSITION: Transition = { duration: 0.65, ease: "easeOut" };

const initial = { opacity: 0, y: 24 };
const whileInView = { opacity: 1, y: 0 };

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      aria-label="Hero section — Abhinash Jangapally portfolio"
    >
      {/* Ambient background effects */}
      <BackgroundEffects />

      {/* Main content wrapper */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6 sm:gap-7 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">

            {/* Availability pill */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-indigo-500/20 text-xs font-medium font-[var(--font-inter)] text-[#a5b4fc] tracking-wide">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400" />
                </span>
                Available for freelance &amp; full-time roles
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.2 }}
              className="flex flex-col gap-1.5"
            >
              <p className="text-sm sm:text-base font-medium text-[#6b7280] font-[var(--font-inter)] tracking-[0.1em] uppercase">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-[var(--font-poppins)] leading-[1.1] tracking-tight">
                <GradientText variant="indigo">Abhinash</GradientText>
                <br />
                <span className="text-[#e8eaf0]">Jangapally</span>
              </h1>
            </motion.div>

            {/* Animated roles */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <AnimatedRoles />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.4 }}
              className="text-base sm:text-lg font-semibold text-[#c7d2fe] font-[var(--font-poppins)] leading-relaxed max-w-md"
            >
              &ldquo;Designing and developing modern AI-powered experiences.&rdquo;
            </motion.p>

            {/* Description */}
            <motion.p
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.5 }}
              className="text-sm sm:text-base text-[#6b7280] font-[var(--font-inter)] leading-relaxed max-w-lg"
            >
              I&apos;m a Computer Science student passionate about{" "}
              <span className="text-[#9ca3af] font-medium">Machine Learning</span>,{" "}
              software engineering, and building impactful digital products. I enjoy
              transforming ideas into{" "}
              <span className="text-[#9ca3af] font-medium">clean, scalable</span>, and
              user-friendly applications.
            </motion.p>

            {/* Tech stack badges */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.6 }}
              className="w-full"
            >
              <TechBadges />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.65 }}
              className="w-full max-w-lg"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.7 }}
              className="flex justify-center lg:justify-start w-full"
            >
              <CTAButtons />
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={initial}
              animate={whileInView}
              transition={{ ...TRANSITION, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
