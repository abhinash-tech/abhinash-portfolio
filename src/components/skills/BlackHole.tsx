"use client";

export default function BlackHole() {
  return (
    <div 
      className="hidden lg:flex absolute -top-16 -right-16 xl:-top-20 xl:-right-32 w-80 h-80 items-center justify-center pointer-events-none z-0 scale-[0.6] xl:scale-75"
      aria-hidden="true"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Lensed Top Glow (Simulates light bending over the black hole) */}
      <div 
        className="absolute top-[10%] w-56 h-32 bg-gradient-to-t from-transparent via-indigo-300/40 to-transparent rounded-[100%] blur-2xl opacity-90"
        style={{ transform: "translateZ(-20px)" }}
      />

      {/* 3D Accretion Disk (Tilted) */}
      <div 
        className="absolute w-72 h-72 rounded-full animate-blackhole"
        style={{
          background: "conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.2) 20%, rgba(167,139,250,0.7) 40%, rgba(255,255,255,0.9) 50%, rgba(167,139,250,0.7) 60%, rgba(99,102,241,0.2) 80%, transparent 100%)",
          boxShadow: "0 0 50px rgba(99,102,241,0.5), inset 0 0 50px rgba(167,139,250,0.5)",
          transformStyle: "preserve-3d",
          transform: "rotateX(75deg)"
        }}
      >
        {/* Inner bright ring */}
        <div className="absolute inset-6 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
        <div className="absolute inset-10 rounded-full border border-indigo-300/20" />
      </div>
      
      {/* Event Horizon (Pure Black Sphere facing camera) */}
      <div 
        className="absolute w-28 h-28 rounded-full bg-[#030308] shadow-[0_0_40px_rgba(0,0,0,1),inset_0_0_20px_rgba(167,139,250,0.2)] z-10" 
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Photon Ring (Intense Edge light) */}
        <div className="absolute inset-0 rounded-full border-[2px] border-indigo-200/60 shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
      </div>

      {/* Ambient Space Glow */}
      <div className="absolute w-96 h-96 bg-indigo-900/20 blur-3xl rounded-full -z-10" style={{ transform: "translateZ(-50px)" }} />
    </div>
  );
}
