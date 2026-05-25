import { motion } from "framer-motion";

export default function BlackHole() {
  return (
    <div 
      className="hidden lg:flex absolute -top-16 -right-16 xl:-top-20 xl:-right-32 w-80 h-80 items-center justify-center pointer-events-none z-0 scale-[0.6] xl:scale-75"
      aria-hidden="true"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Cartoon Accretion Disk (Solid vibrant rotating ring) */}
      <motion.div 
        className="absolute w-72 h-72 rounded-full border-[16px] border-b-violet-500 border-r-fuchsia-500 border-t-indigo-500 border-l-cyan-400 opacity-90"
        style={{
          boxShadow: "0 0 40px rgba(167,139,250,0.8), inset 0 0 40px rgba(167,139,250,0.8)",
          transformStyle: "preserve-3d",
        }}
        animate={{ 
          rotateZ: [0, 360],
          rotateX: [70, 70]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {/* Inner Cartoon Dashed Ring */}
        <div className="absolute inset-2 rounded-full border-[6px] border-dashed border-fuchsia-300 opacity-80" />
      </motion.div>

      {/* Secondary Tilted Cartoon Ring */}
      <motion.div 
        className="absolute w-80 h-80 rounded-full border-[8px] border-t-transparent border-b-indigo-400 border-r-transparent border-l-fuchsia-400 opacity-80"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ 
          rotateZ: [360, 0],
          rotateX: [65, 65],
          rotateY: [15, 15]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Cartoon Event Horizon (Solid Black Core with thick bright outline) */}
      <div 
        className="absolute w-32 h-32 rounded-full bg-[#030308] border-[4px] border-indigo-300 z-10" 
        style={{ 
          transform: "translateZ(20px)",
          boxShadow: "0 0 50px rgba(167,139,250,1), inset 0 0 20px rgba(167,139,250,0.5)"
        }}
      >
        {/* Cartoon Highlight/Eye reflection */}
        <div className="absolute top-4 right-6 w-6 h-3 rounded-full bg-indigo-200/60 -rotate-12 blur-[1px]" />
        <div className="absolute top-8 right-3 w-3 h-2 rounded-full bg-indigo-200/60 -rotate-12 blur-[1px]" />
      </div>

      {/* Floating cartoon stars/sparkles around the black hole */}
      <motion.div 
        className="absolute -top-10 left-10 w-4 h-4 bg-fuchsia-400 rounded-full shadow-[0_0_10px_#e879f9]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transform: "translateZ(-10px)" }}
      />
      <motion.div 
        className="absolute bottom-4 right-0 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        style={{ transform: "translateZ(10px)" }}
      />
    </div>
  );
}
