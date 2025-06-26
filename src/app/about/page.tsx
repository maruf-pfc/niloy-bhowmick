"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Play, Clock, Users, Star, ArrowRight } from "lucide-react";
import { tools } from "@/db/tools";

export default function AboutPage() {
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
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
                <p className="text-gray-400 text-sm">
                  Turning raw footage into visual stories with style, precision,
                  and cinematic magic.
                </p>
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Play, label: "Videos Edited", value: "7+" },
            { icon: Users, label: "Happy Clients", value: "3+" },
            { icon: Clock, label: "Hours of Content", value: "100+" },
            { icon: Star, label: "Client Rating", value: "5.0" },
          ].map((stat, index) => (
            <GlassmorphismCard key={stat.label} className="p-6 text-center">
              <stat.icon className="mx-auto mb-4 text-blue-400" size={32} />
              <div className="text-2xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassmorphismCard>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Tools I Use
            </h3>
            <div className="grid md:grid-cols-5 gap-6 text-center">
              {tools.map((tool) => (
                <div key={tool.id} className="space-y-2">
                  <div className="flex justify-center">
                    <img
                      src={tool.image_link}
                      alt={tool.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-white font-medium">{tool.name}</p>
                </div>
              ))}
            </div>
          </GlassmorphismCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Whether it's a YouTube
              video, promotional content, or a full documentary, I'm here to
              bring your vision to life.
            </p>
            <Button asChild size="lg" variant="outline">
              <a href="/contact">
                Get In Touch <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  );
}
