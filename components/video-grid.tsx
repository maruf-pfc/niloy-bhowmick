"use client"

import { useVideoData } from "@/hooks/use-video-data"
import { VideoCard } from "@/components/video-card"
import { CategorySkeleton } from "@/components/ui/skeletons"

interface VideoGridProps {
  category: string
}

export default function VideoGrid({ category }: VideoGridProps) {
  const { videos, isLoading, error } = useVideoData(category)

  if (isLoading) return <CategorySkeleton />

  if (error)
    return (
      <div className="text-red-500 p-4 rounded-md bg-red-500/10" role="alert">
        <strong>Error loading videos:</strong> {error.message}
      </div>
    )

  if (!videos || videos.length === 0)
    return (
      <div className="text-gray-400 p-4" role="status">
        No videos found in this category.
      </div>
    )

  // Determine grid columns based on category
  const gridClass =
    category === "shorts-reels"
      ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold capitalize sr-only">{category.replace("-", " ")} Videos</h2>
      <div className={gridClass}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} category={category} />
        ))}
      </div>
    </div>
  )
}
