"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS, CATEGORIES, ProjectCategory } from "./ProjectData";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = PROJECTS.filter(
    project => activeCategory === "All" || project.categories.includes(activeCategory)
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full overflow-hidden py-24 sm:py-32 lg:py-40 bg-[#07070e]"
      aria-label="Featured Projects"
    >
      <div className="absolute inset-0 noise mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-rose-500/60" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose-400 font-[var(--font-inter)]">
              Selected Work
            </span>
            <div className="w-8 h-px bg-rose-500/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-[var(--font-poppins)] text-[#e8eaf0] tracking-tight mb-4"
          >
            Featured <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#9ca3af] font-[var(--font-inter)] max-w-2xl mb-10"
          >
            A showcase of production-ready applications, digital platforms, and software solutions demonstrating architecture, design, and technical capabilities.
          </motion.p>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-[var(--font-inter)] transition-all duration-300 relative overflow-hidden ${
                  activeCategory === category 
                    ? "text-white" 
                    : "text-[#9ca3af] hover:text-[#e8eaf0] bg-white/5 hover:bg-white/10 border border-white/5"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Content */}
        <div className="w-full flex flex-col gap-24 lg:gap-32">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full py-20 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-[#9ca3af]">Check back later for new {activeCategory} projects.</p>
            </motion.div>
          )}
        </div>
        
      </div>
    </section>
  );
}
