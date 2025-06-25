"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";
import {
  ArrowLeft,
  Play,
  Clock,
  User,
  Calendar,
  Quote,
  ExternalLink,
} from "lucide-react";
import { getVideoProjectById } from "@/lib/helper";

export default function ProjectPage() {
  const params = useParams();
  const [showVideo, setShowVideo] = useState(false);
  const project = getVideoProjectById(Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const extractVideoId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(project.video_link);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <Link href="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <GlassmorphismCard className="p-6">
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
                  {showVideo && videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={project.video_title}
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          project.cover_image
                            ? `https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`
                            : "/placeholder.svg"
                        }
                        alt={project.video_title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Button
                          onClick={() => setShowVideo(true)}
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 cursor-pointer"
                        >
                          <Play className="mr-2" size={24} />
                          Play Video
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </GlassmorphismCard>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassmorphismCard className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-blue-600 text-white"
                    >
                      {project.category}
                    </Badge>
                    {project.duration && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="mr-1" size={14} />
                        {project.duration}
                      </div>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {project.video_title}
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.video_description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">
                      Project Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="mr-2" size={14} />
                        <span>
                          Published:{" "}
                          {new Date(project.publish_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <User className="mr-2" size={14} />
                        <span>Client: {project.client_name}</span>
                      </div>
                    </div>
                  </div>

                  {project.software_used && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">
                        Software Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.software_used.map((software) => (
                          <Badge
                            key={software}
                            variant="outline"
                            className="border-gray-600 text-gray-300"
                          >
                            {software}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-gray-600 text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a
                      href={project.video_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </GlassmorphismCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Client Feedback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassmorphismCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Client Feedback
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={project.client_image || "/placeholder.svg"}
                      alt={project.client_name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-white">
                        {project.client_name}
                      </p>
                      <p className="text-sm text-gray-400">Client</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote
                      className="absolute -top-2 -left-2 text-blue-400 opacity-50"
                      size={24}
                    />
                    <p className="text-gray-300 italic pl-6">
                      {project.client_feedback}
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>

            {/* Project Images */}
            {project.project_images && project.project_images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <GlassmorphismCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.project_images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Project image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </GlassmorphismCard>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
