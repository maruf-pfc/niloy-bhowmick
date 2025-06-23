"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getVideos, getVideosByCategory } from "@/lib/helper";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RollingText } from "@/components/animate-ui/text/rolling";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Desktop",
  "Mobile",
  "CLI Tools",
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos] = useState(getVideos());

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : getVideosByCategory(selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <RollingText text="My videos" />
          </h1>
          <p className="text-gray-300 text-lg">
            A collection of videos I&apos;ve worked on
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Videos Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphismCard className="p-6 h-full">
                <div className="space-y-4 h-full flex flex-col">
                  <Image
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                        {project.category}
                      </span>
                      {project.publish_date && (
                        <div className="flex items-center space-x-1 text-xs text-gray-400">
                          <Calendar size={12} />
                          <span>
                            {new Date(project.publish_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-500/20 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-4 border-t border-white/20">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 text-sm"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No videos found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
