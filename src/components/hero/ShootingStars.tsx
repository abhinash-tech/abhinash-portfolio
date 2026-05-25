"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  // Prevent hydration mismatch by only rendering after mount
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Very sparse, random distribution of shooting stars
  // Long durations and delays keep them extremely subtle
  const stars = [
    { id: 1, top: "10%", left: "80%", delay: "0s", duration: "12s" },
    { id: 2, top: "30%", left: "95%", delay: "4s", duration: "15s" },
    { id: 3, top: "5%", left: "50%", delay: "8s", duration: "14s" },
    { id: 4, top: "60%", left: "90%", delay: "2s", duration: "16s" },
    { id: 5, top: "20%", left: "70%", delay: "10s", duration: "18s" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none hidden lg:block z-0" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent animate-shooting-star opacity-0"
          style={{
            top: star.top,
            left: star.left,
            width: "100px",
            // @ts-ignore
            "--star-delay": star.delay,
            "--star-duration": star.duration,
          }}
        />
      ))}
    </div>
  );
}
