"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { RollingText } from "@/components/animate-ui/text/rolling";

const SkillsPage = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Skills Page
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I&apos;m a passionate about becoming a software engineer and
              competitive programmer with expertise in modern web technologies.
              Currently pursuing Computer Science & Engineering at Green
              University of Bangladesh while working as a Community Manager at
              Stack Learner.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassmorphismCard className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Full Stack Developer
                </h3>
                <p className="text-gray-400">
                  Building modern web applications with React, Next.js, Node.js,
                  and more.
                </p>
              </GlassmorphismCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassmorphismCard className="p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Competitive Programmer
                </h3>
                <p className="text-gray-400">
                  Solving algorithmic challenges on Codeforces, LeetCode, and
                  other platforms.
                </p>
              </GlassmorphismCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GlassmorphismCard className="p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Content Creator
                </h3>
                <p className="text-gray-400">
                  Creating educational content and tutorials for the developer
                  community.
                </p>
              </GlassmorphismCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
