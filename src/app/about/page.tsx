"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { getClients } from "@/lib/helper";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const clients = getClients();
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hey there! I'm Niloy Bhowmick, a passionate Video Editor and Motion
            Graphics Designer with a deep love for storytelling through visuals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16 justify-center items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlassmorphismCard className="p-8">
              <div className="text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src="/niloybhowmick.png"
                    alt="Niloy Bhowmick"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Niloy Bhowmick
                </h2>
                <p className="text-blue-400 mb-4">
                  Video Editor & Motion Graphics Designer
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Turning raw footage into visual stories with style, precision,
                  and cinematic magic.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@your-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Story
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I specialize in DaVinci Resolve, Premiere Pro, and After
                  Effects — delivering cinematic edits, clean motion graphics,
                  and polished visual storytelling. From smooth transitions to
                  precise audio syncing and dynamic animations — I focus on
                  making your content not just polished, but powerful.
                </p>
                <p>
                  If you're looking for someone who blends creativity with
                  technical skill, communicates clearly, and truly cares about
                  making your content stand out — I'm your guy.
                </p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Availability
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>✅ Available for both short-term and long-term projects</p>
                <p>✅ Flexible with time zones and deadlines</p>
                <p>✅ Quick turnaround times without compromising quality</p>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-8 text-white text-center">
              Trusted by Amazing Clients
            </h3>

            <div className="relative overflow-hidden">
              <div className="flex justify-center">
                <motion.div
                  className="flex space-x-8 min-w-fit"
                  animate={{ x: ["0px", `-${160 * clients.length}px`] }} // 128 (w-32) + 32 (gap)
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={`${client.id}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-24"
                    >
                      <div className="relative w-16 h-16 mb-2">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          fill
                          className="object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                        />
                      </div>
                      <p className="text-xs text-gray-400 text-center">
                        {client.name}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>

        {/* CTA Section */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's create something amazing together. Whether it's a YouTube video, promotional content, or a full documentary, I'm here to bring your vision to life."
          buttonText="Get In Touch"
          href="/contact"
        />
      </div>
    </div>
  );
}
