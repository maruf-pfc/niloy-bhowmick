"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./magnetic-button";

import { useLenis } from "lenis/react";

export default function Hero() {
    const lenis = useLenis();

    const scrollToProjects = (e?: React.MouseEvent) => {
        e?.preventDefault();
        if (lenis) {
            lenis.scrollTo("#projects", {
                duration: 2,
                offset: -100, // Account for fixed navbar
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for premium feel
            });
        }
    };

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-block mb-6"
                >
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-blue-200 tracking-widest uppercase">
                        Available for Hire
                    </div>
                </motion.div>

                {/* Main Title - Split for animation */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                    <motion.span
                        initial={{ opacity: 0, y: 50, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
                    >
                        CINEMATIC
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 50, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-4"
                    >
                        EDITOR
                    </motion.span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Turning raw footage into visual stories — with style, precision, and a touch of <span className="text-white font-medium">cinematic magic</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <MagneticButton>
                        <a
                            href="#projects"
                            onClick={scrollToProjects}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
                        >
                            <span className="relative z-10 flex items-center">
                                View Work
                            </span>
                        </a>
                    </MagneticButton>

                    <MagneticButton>
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            Contact Me
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <button
                    onClick={scrollToProjects}
                    className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
                >
                    <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="animate-bounce" size={20} />
                </button>
            </motion.div>
        </section>
    );
}
