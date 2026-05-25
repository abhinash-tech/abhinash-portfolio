"use client";

export default function BlackHole() {
  return (
    <div 
      className="hidden lg:flex absolute top-10 right-[5%] xl:right-[15%] w-64 h-64 items-center justify-center pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    >
      {/* Outer Gravitational Glow / Accretion Disk Base */}
      <div 
        className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-900/40 via-violet-600/10 to-transparent opacity-60 animate-blackhole" 
      />
      
      {/* Warped Accretion Ring */}
      <div 
        className="absolute w-36 h-36 rounded-full border-[1.5px] border-indigo-400/20 shadow-[0_0_30px_rgba(99,102,241,0.2)] animate-blackhole"
        style={{ animationDirection: "reverse", animationDuration: "18s" }}
      />
      <div 
        className="absolute w-44 h-44 rounded-full border border-violet-500/10 animate-blackhole"
        style={{ animationDuration: "25s" }}
      />
      
      {/* Event Horizon (Pure Black Core blocking the background) */}
      <div className="absolute w-20 h-20 rounded-full bg-[#07070e] shadow-[0_0_20px_rgba(0,0,0,0.9),inset_0_0_15px_rgba(99,102,241,0.15)] z-10" />
      
      {/* Photon Sphere (Light bending immediately around the event horizon) */}
      <div className="absolute w-20 h-20 rounded-full border border-indigo-300/30 shadow-[0_0_12px_rgba(167,139,250,0.4)] z-20" />
      
      {/* Very subtle inward particle lines (static representation of gravitational pull) */}
      <div className="absolute w-full h-full opacity-30 z-0 animate-blackhole" style={{ animationDuration: "30s" }}>
        <div className="absolute top-1/4 left-1/4 w-12 h-[1px] bg-gradient-to-r from-transparent to-indigo-500/40 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-10 h-[1px] bg-gradient-to-r from-indigo-400/30 to-transparent rotate-45" />
      </div>
    </div>
  );
}
