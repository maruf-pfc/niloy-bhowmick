import { videosData } from "@/db/videos";
import { Video } from "@/types/videos";

// Helper functions
export function getVideos(): Video[] {
  return videosData;
}

export function getVideoById(id: number): Video | undefined {
  return videosData.find((video) => video.id === id);
}

export function getVideosByCategory(category?: string): Video[] {
  if (!category) return videosData;
  return videosData.filter((video) => video.category === category);
}
