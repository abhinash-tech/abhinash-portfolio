"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "indigo" | "emerald" | "warm";
}

const GRADIENTS = {
  indigo: "from-indigo-400 via-violet-400 to-purple-400",
  emerald: "from-emerald-400 to-teal-400",
  warm: "from-amber-400 via-orange-400 to-rose-400",
};

export default function GradientText({
  children,
  className,
  variant = "indigo",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        GRADIENTS[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Animated highlight wrapper
interface AnimatedHighlightProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedHighlight({ children, delay = 0 }: AnimatedHighlightProps) {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: delay + 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.span>
  );
}
