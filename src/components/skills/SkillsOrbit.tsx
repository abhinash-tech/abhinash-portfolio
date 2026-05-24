"use client";

import Image from "next/image";
import { ORBIT_DATA, Skill } from "./SkillData";

function SkillTooltip({ skill }: { skill: Skill }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-3 rounded-xl glass border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-max z-50 transform scale-90 group-hover:scale-100 shadow-xl">
      <div className="flex items-center gap-3 mb-1">
        <skill.icon size={16} color={skill.color} />
        <span className="text-sm font-semibold text-white font-[var(--font-poppins)]">
          {skill.name}
        </span>
      </div>
      <span className="text-[10px] text-indigo-400 font-medium font-[var(--font-inter)] tracking-wider uppercase">
        {skill.category}
      </span>
    </div>
  );
}

export default function SkillsOrbit() {
  return (
    <div className="relative w-[800px] h-[800px] flex items-center justify-center group-orbit scale-[0.65] sm:scale-75 md:scale-90 xl:scale-100 transition-transform duration-500 pointer-events-none">
      {/* Center Core */}
      <div className="absolute z-40 w-28 h-28 rounded-full bg-[#0d0d1a] border border-indigo-500/30 flex items-center justify-center glow-indigo-strong shadow-[inset_0_0_20px_rgba(99,102,241,0.2)] pointer-events-auto">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-indigo-500/50 p-1">
          <div className="w-full h-full rounded-full overflow-hidden bg-indigo-900/50">
            <Image 
              src="/profile-skills.jpg" 
              alt="Abhinash Jangapally" 
              width={100} 
              height={100} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      {/* Orbits */}
      {ORBIT_DATA.map((orbit, orbitIndex) => (
        <div
          key={`orbit-${orbitIndex}`}
          className="absolute rounded-full border border-dashed border-white/10 animate-orbit pointer-events-none"
          style={{
            width: `${orbit.radius * 2}px`,
            height: `${orbit.radius * 2}px`,
            // @ts-ignore
            "--duration": `${orbit.duration}s`,
          }}
        >
          {orbit.skills.map((skill, index) => {
            const angle = (360 / orbit.skills.length) * index;
            return (
              <div
                key={skill.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbit.radius}px)`,
                }}
              >
                {/* Counter-rotation to keep icons upright */}
                <div
                  className="animate-orbit-reverse"
                  style={{ 
                    // @ts-ignore
                    "--duration": `${orbit.duration}s` 
                  }}
                >
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="group relative flex items-center justify-center w-12 h-12 rounded-full glass border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-500/10 cursor-pointer transition-colors duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] pointer-events-auto">
                      <skill.icon size={22} color={skill.color} className="drop-shadow-md" />
                      <SkillTooltip skill={skill} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
