"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { projects } from "@/lib/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<(typeof projects)[0] | undefined>();

  useEffect(() => {
    const foundProject = projects.find(
      (p) => p.id === Number.parseInt(resolvedParams.id)
    );
    if (foundProject) {
      setProject(foundProject);
    } else {
      router.push("/");
    }
  }, [resolvedParams.id, router]);

  // const handleClickOutside = (e: React.MouseEvent) => {
  //   if (
  //     containerRef.current &&
  //     !containerRef.current.contains(e.target as Node)
  //   ) {
  //     router.push("/");
  //   }
  // };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      window.location.href = "/"; // Instantly navigates to the home page without loading animation
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={handleClickOutside}
      >
        <motion.div
          ref={containerRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-2xl bg-black/95 p-6 md:p-8 scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
            <ReactPlayer
              url={project.videoUrl}
              width="100%"
              height="100%"
              playing
              loop
              controls
              playsinline
              config={{
                file: {
                  attributes: {
                    style: {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    },
                  },
                },
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-12 md:grid-cols-2"
          >
            {/* Left Column - Project Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="mb-4 text-4xl font-bold text-white">
                  {project.title}
                </h1>
                <div className="space-y-2 text-lg text-white/60">
                  <p>Category: {project.category}</p>
                  <p>Client: {project.client}</p>
                  <p>Date: {project.date}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-xl bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur"
              >
                <h2 className="mb-4 text-xl font-semibold text-white">
                  About the Project
                </h2>
                <p className="text-lg leading-relaxed text-white/80">
                  {project.description}
                </p>
              </motion.div>

              {/* Behind the Scenes Images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="mb-4 text-xl font-semibold text-white">
                  Behind the Scenes
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.behindTheScenes.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-video overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Behind the scenes ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-video overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project-Image-${
                        i + 1
                      }`}
                      alt={`Project image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Credits & Testimonial */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-xl bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur"
              >
                <h2 className="mb-6 text-xl font-semibold text-white">
                  Credits
                </h2>
                <div className="space-y-4">
                  {project.credits.map((credit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex justify-between border-b border-white/10 pb-4"
                    >
                      <span className="font-medium text-white">
                        {credit.role}
                      </span>
                      <span className="text-white/60">{credit.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="rounded-xl bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur"
              >
                <h2 className="mb-6 text-xl font-semibold text-white">
                  Client Feedback
                </h2>
                <blockquote className="space-y-4">
                  <p className="text-lg italic text-white/80">
                    "{project.testimonial.text}"
                  </p>
                  <footer className="text-white/60">
                    <p className="font-medium text-white">
                      {project.testimonial.author}
                    </p>
                    <p className="text-sm">{project.testimonial.position}</p>
                  </footer>
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
