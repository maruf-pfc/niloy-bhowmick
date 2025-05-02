"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { VideoType } from "@/lib/types"
import Link from "next/link"

interface VideoCardProps {
  video: VideoType
  category: string
}

export function VideoCard({ video, category }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const isVertical = category === "shorts-reels"

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg",
        isVertical ? "aspect-[9/16]" : "aspect-video",
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail Image */}
      <Image
        src={video.thumbnail || "/placeholder.svg"}
        alt={video.title}
        fill
        className="object-cover"
        sizes={
          isVertical
            ? "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
            : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        }
      />

      {/* Overlay with title and play button */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0 sm:group-hover:opacity-100",
        )}
      >
        <h3 className="text-sm font-medium text-white md:text-base">{video.title}</h3>
        <p className="mt-1 text-xs text-gray-300">{video.client}</p>

        <div className="mt-2 flex items-center space-x-2">
          <Link
            href={`/video/${video.id}?category=${category}`}
            className="flex items-center rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white hover:bg-purple-700"
            aria-label={`Play ${video.title}`}
          >
            <Play className="mr-1 h-3 w-3" /> Play
          </Link>
          <a
            href={video.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-700"
            aria-label={`View ${video.title} project`}
          >
            <ExternalLink className="mr-1 h-3 w-3" /> View
          </a>
        </div>
      </div>
    </motion.div>
  )
}
