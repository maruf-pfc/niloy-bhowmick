"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoProject } from "@/types/videos";

interface ProjectCardProps {
    project: VideoProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Handle click outside to stop playing
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setIsPlaying(false);
            }
        };

        if (isPlaying) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isPlaying]);

    const handlePlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setIsPlaying(true);
    };

    const handleStopClick = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        e?.preventDefault();
        setIsPlaying(false);
    };

    return (
        <div ref={cardRef} className="h-full">
            <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-500 flex flex-col">
                <div className="flex flex-col h-full p-5">
                    {/* Media Area */}
                    <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-lg bg-black isolate">
                        <AnimatePresence mode="wait">
                            {isPlaying ? (
                                <motion.div
                                    key="video-player"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20"
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.cover_image}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                                        title={project.video_title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                    <button
                                        onClick={handleStopClick}
                                        className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-30"
                                        aria-label="Close preview"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 18 18" />
                                        </svg>
                                    </button>
                                </motion.div>
                            ) : (
                                <div
                                    key="thumbnail"
                                    className="relative w-full h-full cursor-pointer group/thumb"
                                    onClick={handlePlayClick}
                                >
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={`https://img.youtube.com/vi/${project.cover_image}/maxresdefault.jpg`}
                                            alt={project.video_title}
                                            fill
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </motion.div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-black/40 transition-colors duration-300 flex items-center justify-center backdrop-blur-[0px] group-hover/thumb:backdrop-blur-[2px]">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover/thumb:scale-110 transition-all duration-300 shadow-xl shadow-black/20">
                                            <Play className="ml-1 fill-white" size={28} />
                                        </div>
                                    </div>

                                    {/* Duration Badge */}
                                    {project.duration && (
                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                                            {project.duration}
                                        </div>
                                    )}
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col relative w-full">
                        {/* Category Tags - Absolute positioning on top right or just below title if preferred */}
                        <div className="flex gap-2 mb-3 flex-wrap">
                            {project.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-normal border-none">
                                    {cat}
                                </Badge>
                            ))}
                        </div>

                        <Link href={`/project/${project.id}`} className="block group/title">
                            <h3 className="text-xl font-bold mb-3 text-white group-hover/title:text-blue-400 transition-colors line-clamp-2 leading-tight">
                                {project.video_title}
                            </h3>
                        </Link>

                        <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                            {project.video_description}
                        </p>

                        {/* Actions & Metadata */}
                        <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white/5 p-1">
                                    <Image
                                        src={project.client_image || "/placeholder.svg"}
                                        alt={project.client_name}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-white line-clamp-1 max-w-[100px] truncate">{project.client_name}</span>
                                    <span className="text-[10px] text-gray-500">{new Date(project.publish_date).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link href={`/project/${project.id}`}>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 px-5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl"
                                    >
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </GlassmorphismCard>
        </div>
    );
}
