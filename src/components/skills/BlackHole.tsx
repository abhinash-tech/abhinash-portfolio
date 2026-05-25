"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlackHole() {
  return (
    <div 
      className="hidden lg:flex absolute -top-32 -right-32 xl:-top-40 xl:-right-48 w-[600px] h-[600px] items-center justify-center pointer-events-none z-0 mix-blend-screen opacity-90"
      aria-hidden="true"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.8, 1, 0.8],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/blackhole.png"
          alt="Cinematic Black Hole"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
