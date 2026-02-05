"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASectionProps } from "@/types/cta";
import MagneticButton from "@/components/magnetic-button";

const CTASection = ({
  title,
  description,
  buttonText,
  href,
  delay = 1.0,
}: CTASectionProps) => {
  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 group"
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl z-0" />

        {/* Subtle Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none z-0" />

        {/* Animated Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse z-0" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full z-0 opacity-50" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/noise.png")' }} />

        {/* Floating Abstract Shapes */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-24 h-24 border border-white/5 rounded-full z-[1]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 left-10 w-32 h-32 border border-white/5 rounded-full z-[1]"
        />

        {/* Content Container */}
        <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">

          {/* Glowing Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="text-xs md:text-sm font-semibold text-blue-300 tracking-widest uppercase">
              Open for New Projects
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {title || "Ready to create magic?"}
          </h3>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            {description}
          </p>

          <MagneticButton>
            <a
              href={href}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10 flex items-center">
                {buttonText}
                <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
