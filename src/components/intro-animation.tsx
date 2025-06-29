"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      // Set flag in localStorage so intro doesn't show again
      localStorage.setItem("hasSeenIntro", "true");

      // Auto-hide intro after 5 seconds (simulating video end)
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-600 p-1">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                itsNiloy
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-2 text-gray-400"
            >
              Professional Video Editing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
