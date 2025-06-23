"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassmorphismCard({
  children,
  className = "",
  hover = true,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={`
        bg-slate-900/30 backdrop-blur-md border border-slate-700/50 
        rounded-xl shadow-xl ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
