"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import MouseMoveEffect from "@/components/mouse-move-effect";
import {
  Play,
  Clock,
  User,
  ArrowRight,
  Filter,
  TypeOutline,
} from "lucide-react";
import { getVideoProjects, getVideoProjectsByCategory } from "@/lib/helper";

const categories = [
  "All",
  "Talking Head",
  "Shorts",
  "Promo",
  "Documentary",
  "Animation",
  "Explainer",
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects] = useState(getVideoProjects());

  const filteredProjects = getVideoProjectsByCategory(selectedCategory);

  const extractVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="min-h-screen">
      <MouseMoveEffect />
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              My Video Projects
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              From smooth transitions to precise audio syncing and dynamic
              animations — I focus on making your content not just polished, but
              powerful.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-400 mr-4">
              <Filter size={16} />
              <span className="text-sm">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`
                  ${
                    selectedCategory === category
                      ? "bg-[#020817] hover:text-black"
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  } cursor-pointer
                `}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/project/${project.id}`}>
                  <GlassmorphismCard className="p-6 h-full cursor-pointer group">
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={
                            project.cover_image
                              ? `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
                              : "/placeholder.svg"
                          }
                          alt={project.video_title}
                          width={400}
                          height={225}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="text-white" size={48} />
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge
                            variant="secondary"
                            className="bg-black/70 text-white"
                          >
                            {project.category}
                          </Badge>
                        </div>
                        {project.duration && (
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {project.duration}
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                          {project.video_title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {project.video_description}
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <User size={12} />
                            <span>{project.client_name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={12} />
                            <span>
                              {new Date(
                                project.publish_date
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs border-gray-600 text-gray-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Image
                              src={project.client_image || "/placeholder.svg"}
                              alt={project.client_name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span className="text-sm text-gray-400">
                              {project.client_name}
                            </span>
                          </div>
                          <Button variant="outline" size="sm" className="cursor-pointer">
                            <Play size={14} className="mr-1" />
                            Watch
                          </Button>
                        </div>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What I Can Do for You
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              If you're looking for someone who blends creativity with technical
              skill, communicates clearly, and truly cares about making your
              content stand out — I'm your guy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "YouTube & Social Media Video Editing",
                description:
                  "Engaging edits optimized for different platforms with perfect pacing and retention hooks.",
                icon: "🎬",
              },
              {
                title: "Course & Tutorial Video Editing",
                description:
                  "Clear, educational content with smooth transitions and professional presentation.",
                icon: "📚",
              },
              {
                title: "Motion Graphics & Animated Titles",
                description:
                  "Eye-catching animations and graphics that enhance your storytelling.",
                icon: "✨",
              },
              {
                title: "Color Correction & Grading",
                description:
                  "Professional color work that gives your videos a cinematic and polished look.",
                icon: "🎨",
              },
              {
                title: "Logo Animations & Lower Thirds",
                description:
                  "Professional branding elements that make your content look premium.",
                icon: "🏷️",
              },
              {
                title: "Audio Sync & Cleanup",
                description:
                  "Crystal clear audio with perfect synchronization and noise reduction.",
                icon: "🎵",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassmorphismCard className="p-6 text-center h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
