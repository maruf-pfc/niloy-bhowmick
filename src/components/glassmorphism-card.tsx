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
        relative overflow-hidden
        bg-white/[0.03] 
        backdrop-blur-2xl
        border border-white/10
        rounded-[24px] 
        shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        ${className}
      `}
      whileHover={hover ? {
        y: -8,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.8, 0.25, 1]
      }}
    >
      {/* Inner subtle noise/highlight overlay for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-gradient-to-br from-white to-transparent mix-blend-overlay" />

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
