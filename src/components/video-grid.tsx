"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const categories = [
  "All",
  "Music Videos",
  "Commercials",
  "Short Films",
  "Documentaries",
];

export function VideoGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  // Function to stop all videos except the currently hovered one
  const stopAllVideosExcept = (exceptId: number | null) => {
    Object.entries(videoRefs.current).forEach(([id, videoElement]) => {
      if (Number(id) !== exceptId && videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });
  };

  // Cleanup function to stop all videos when component unmounts
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Function to determine grid item size based on index
  const getGridSpan = (index: number) => {
    const position = index % 7;
    switch (position) {
      case 0: // Large item (2x2)
        return "col-span-2 row-span-2";
      case 1: // Small item top right of large
      case 2: // Small item below top right
        return "col-span-1 row-span-1";
      // case 3: // Tall item
        // return "col-span-1 row-span-2";
      // case 4: // Wide item
      case 3: // Regular items
      case 4:
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              className={`relative overflow-hidden rounded-2xl ${getGridSpan(
                index
              )}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => {
                setHoveredVideo(project.id);
                stopAllVideosExcept(project.id);
                const video = videoRefs.current[project.id];
                if (video) {
                  video.play().catch(() => {
                    // Handle any autoplay restrictions
                    console.log("Autoplay prevented");
                  });
                }
              }}
              onMouseLeave={() => {
                setHoveredVideo(null);
                stopAllVideosExcept(null);
              }}
            >
              <Link
                href={`/project/${project.id}`}
                className="group block h-full w-full"
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[project.id] = el;
                  }}
                  src={project.thumbnail}
                  muted
                  playsInline
                  loop
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white/70">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
